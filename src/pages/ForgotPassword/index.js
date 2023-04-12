import { useFormik } from "formik";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Input } from "../../components/FormFields/Input";
import { Select } from "../../components/FormFields/Select";
import { useAuth } from "../../context/auth";
import { apiCall } from "../../store/middleware/api";
import "./index.css";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { userReducer, countryReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const notify = (message, opts) => toast(message, opts);

  const validationSchema = yup.object({
    user_name: yup.string().required("Username is required"),
    security_answer: yup.string().when("security_question", {
      is: true,
      then: yup.string().required("Security Answer is necessary"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      security_question: "",
      security_answer: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      let forgotPasswordBody = {
        security_answer: values.security_answer,
        email: values.user_name,
      };
      console.warn(forgotPasswordBody);

      apiCall({
        url: `/check_security_answer`,
        method: "post",
        data: forgotPasswordBody,
      })
        .then((res) => {
          console.log("Response of forgot password");
          // console.log(res);

          if (res.status === "sucess" || res.status === "success") {
            toast("Security Question Verified Sucessfully", {
              style: {
                color: "green",
              },
            });
            setTimeout(() => {
              navigate("/reset-password", {
                state: {
                  token: res.token,
                },
              });
            }, [1000]);
          } else if (res.status === "fail") {
            toast(res.message, {
              style: {
                color: "red",
              },
            });
          } else {
            toast(
              "There is some issue in updating passowrd now try after sometime",
              {
                style: {
                  color: "red",
                },
              }
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const options = [
    // { label: "Select an Question", value: "" },
    { label: "What is your pet's name?", value: "pet_name" },
    { label: "What is your childhood friend's name?", value: "frnd_name" },
  ];

  return (
    <main className="lyt__login">
      <h1 className="page__title ">Forgot Password</h1>
      <form className="user__form d-flex--c" onSubmit={formik.handleSubmit}>
        <Input
          label={"Enter your username / email :"}
          required={validationSchema.fields.user_name.required()}
          type="text"
          name="user_name"
          // ref={user_email}
          placeholder="Enter your username / email"
          value={formik.values.user_name}
          onChange={formik.handleChange}
          error={formik.touched.user_name && Boolean(formik.errors.user_name)}
          helperText={formik.touched.user_name && formik.errors.user_name}
        />

        <Select
          label={"Security Question :"}
          required={validationSchema.fields.security_question?.required()}
          options={options}
          type={"select"}
          name="security_question"
          // ref={user_password}
          placeholder="Security Question"
          value={formik.values.security_question}
          onChange={formik.handleChange}
          error={
            formik.touched.security_question &&
            Boolean(formik.errors.security_question)
          }
          helperText={
            formik.touched.security_question && formik.errors.security_question
          }
        />

        <Input
          label={"Security Answer :"}
          required={validationSchema.fields.security_answer?.required()}
          type="text"
          name="security_answer"
          // ref={user_email}
          placeholder="Security Answer"
          value={formik.values.security_answer}
          onChange={formik.handleChange}
          error={
            formik.touched.security_answer &&
            Boolean(formik.errors.security_answer)
          }
          helperText={
            formik.touched.security_answer && formik.errors.security_answer
          }
        />

        <button type="submit" className="user__form__button">
          Submit
        </button>
      </form>
    </main>
  );
};
