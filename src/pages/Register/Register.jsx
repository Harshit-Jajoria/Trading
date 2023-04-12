import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userlogin } from "../../store/reducers/user";
import { Input } from "../../components/FormFields/Input";
import { Password } from "../../components/FormFields/password";
import { Select } from "../../components/FormFields/Select";
import { Checkbox } from "../../components/FormFields/Checkbox";
import { useAuth } from "../../context/auth";

export const Register = () => {
  const navigate = useNavigate();
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
    first_name: yup.string().required("Firstname is required"),
    last_name: yup.string().required("Lastname is required"),
    user_name: yup.string().required("Username is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    repeat_password: yup
      .string()
      .required("Confirm Password is Required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    security_answer: yup.string().when("security_question", {
      is: true,
      then: yup.string().required("Security Answer is necessary"),
    }),
    terms_condition: yup
      .boolean()
      .isTrue("Kindly Agree the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      user_name: "",
      email: "",
      city: "",
      country: "",
      password: "",
      repeat_password: "",
      security_question: "",
      security_answer: "",
      terms_condition: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        userlogin({ url: `/user_sign_up`, method: "post", data: values })
      );
    },
  });

  const options = [
    { label: "Select an Question", value: "" },
    { label: "What is your pet's name?", value: "pet_name" },
    { label: "What is your childhood friend's name?", value: "frnd_name" },
  ];

  const countries = [{ label: "Select Your Country", value: "" }].concat(
    countryReducer?.data?.map((res) => {
      return { label: res.name, value: res.name };
    })
  );

  useEffect(() => {
    const getUser = userReducer.data;
    let notify = null;
    if (getUser) {
      notify = toast(getUser.message, {
        style: { color: getUser.status === "success" ? "green" : "red" },
      });
      if (getUser.status === "success") {
        console.log(getUser.status);
        setLoggedIn(getUser.status === "success" ? true : false);
        setCurrentUser(getUser);
        setPcr(getUser?.cr_balance[2]?.cr_qty);
        setTcr(getUser?.cr_balance[1]?.cr_qty);
        setDcr(getUser?.cr_balance[0]?.cr_qty);
        navigate("/");

        window.localStorage.setItem("@JWT_Token", getUser.token);
      }
    }

    return () => {
      toast.dismiss();
    };
  }, [navigate, userReducer.data]);

  return (
    <main className="lyt__login">
      <h1 className="page__title ">SignUp</h1>
      <form className="user__form d-flex--c" onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-justify-between gap-10">
          <Input
            label={"First Name"}
            required={validationSchema.fields.first_name.required()}
            type="text"
            name="first_name"
            // ref={user_email}
            placeholder="First Name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            helperText={formik.touched.first_name && formik.errors.first_name}
          />
          <Input
            label={"Last Name"}
            required={validationSchema.fields.last_name.required()}
            type="text"
            name="last_name"
            // ref={user_email}
            placeholder="Last Name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
          />
        </div>

        <Input
          label={"Enter your username :"}
          required={validationSchema.fields.user_name.required()}
          type="text"
          name="user_name"
          // ref={user_email}
          placeholder="Enter your username"
          value={formik.values.user_name}
          onChange={formik.handleChange}
          error={formik.touched.user_name && Boolean(formik.errors.user_name)}
          helperText={formik.touched.user_name && formik.errors.user_name}
        />

        <Input
          label={"Email Id :"}
          required={validationSchema.fields.email.required()}
          type="text"
          name="email"
          // ref={user_email}
          placeholder="Email Id"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <div className="d-flex flex-justify-between gap-10">
          <Input
            label={"City :"}
            required={validationSchema.fields.city?.required()}
            type="text"
            name="city"
            // ref={user_email}
            placeholder="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />

          <Select
            label={"Country :"}
            required={validationSchema.fields.country?.required()}
            options={countries}
            type={"select"}
            name="country"
            // ref={user_password}
            placeholder="Security Question"
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
        </div>

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

        <Checkbox
          label={"I agree to all Terms & Conditions."}
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
          Register
        </button>
      </form>
    </main>
  );
};
