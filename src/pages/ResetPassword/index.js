import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Checkbox } from "../../components/FormFields/Checkbox";
import { Password } from "../../components/FormFields/password";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
import { apiCall } from "../../store/middleware/api";
import "./index.css";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userReducer, countryReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    logout,
    loggedIn: isLoggedIn,
    setLoggedIn,
    setGameModePremium,
    setGameModeTrading,
    isPremiumMode,
    isTradingMode,
    isFreeMode,
    setCurrentUser,
    gameMode,
    getBalanceType,
    currentUser,
    setPcr,
    setDcr,
    setTcr,
  } = useAuth();
  // const notify = (message, opts) => toast(message, opts);

  const validationSchema = yup.object({
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    repeat_password: yup
      .string()
      .required("Confirm Password is Required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    terms_condition: yup
      .boolean()
      .isTrue("Kindly Agree the conditiomns to continue"),
  });
  useEffect(() => {
    if (!state?.token) {
      toast("Token is not found, please try again", {
        style: {
          color: "red",
        },
      });
      navigate("/login");
    }

    
  }, []);

  const formik = useFormik({
    initialValues: {
      password: "",
      repeat_password: "",
      terms_condition: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      if (!state?.token) {
        toast("Token is not found, please try again", {
          style: {
            color: "red",
          },
        });
        return;
      }
      let resetPasswordBody = {
        password: values.password,
        repeat_password: values.repeat_password,
        token: state?.token,
      };
      // dispatch(
      //   userlogin({ url: `/user_sign_up`, method: "post", data: values })
      // );
      apiCall({
        url: `/update_user_password`,
        method: "put",
        data: resetPasswordBody,
      })
        .then((res) => {
          console.log("Response of forgot password");
          // console.log(res);
          if (res.status === "sucess" || res.status === "success") {
            toast("Password Updated Sucessfully", {
              style: {
                color: "green",
              },
            });
            setTimeout(() => {
              navigate("/login");
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

  return (
    <main className="lyt__login">
      <h1 className="page__title ">Reset Password</h1>
      <form className="user__form d-flex--c" onSubmit={formik.handleSubmit}>
        <Password
          label={"Enter your password:"}
          required={validationSchema.fields.password?.required()}
          type={"password"}
          name="password"
          // ref={user_password}
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Password
          label={"Confirm password :"}
          required={validationSchema.fields.repeat_password?.required()}
          type={"password"}
          name="repeat_password"
          // ref={user_password}
          placeholder="Confirm password"
          value={formik.values.repeat_password}
          onChange={formik.handleChange}
          error={
            formik.touched.repeat_password &&
            Boolean(formik.errors.repeat_password)
          }
          helperText={
            formik.touched.repeat_password && formik.errors.repeat_password
          }
        />

        <Checkbox
          label={"Are you sure you want to change the password."}
          required={validationSchema.fields.terms_condition?.required()}
          type={"checkbox"}
          name="terms_condition"
          // ref={user_password}
          value={formik.values.terms_condition}
          onChange={formik.handleChange}
          error={
            formik.touched.terms_condition &&
            Boolean(formik.errors.terms_condition)
          }
          helperText={
            formik.touched.terms_condition && formik.errors.terms_condition
          }
        />

        <button type="submit" className="user__form__button">
          Reset Password
        </button>
      </form>
    </main>
  );
};
