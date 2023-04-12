import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";
import { Input } from "../../components/FormFields/Input";
import { Password } from "../../components/FormFields/password";
import { useDispatch, useSelector } from "react-redux";
import { userlogin } from "../../store/reducers/user";
import { useAuth } from "../../context/auth";

export const Login = () => {
  const { userReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(userlogin({ url: `/user_login`, method: "post", data: values }));
    },
  });

  useEffect(() => {
    const getUser = userReducer.data;
    console.log("userData", getUser);
    let notify = null;
    if (getUser) {
      notify = toast(getUser?.message, {
        style: { color: getUser.status === "success" ? "green" : "red" },
      });
      if (getUser?.status === "success") {
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
      <h1 className="page__title ">Login</h1>
      <form className="user__form d-flex--c" onSubmit={formik.handleSubmit}>
        <Input
          label={"Enter your username/email:"}
          required={true}
          type="text"
          name="email"
          // ref={user_email}
          placeholder="Enter username/email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Password
          label="Enter your password :"
          required={true}
          type={"password"}
          name="password"
          // ref={user_password}
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <div className="user__form_link d-flex">
          <NavLink to="/join">New user? SignUp</NavLink>
          <NavLink to="/forgot-password">Forgot Password?</NavLink>
        </div>
        <button className="user__form__button" type="submit">
          Login
        </button>
      </form>
    </main>
  );
};
