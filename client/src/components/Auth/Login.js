import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import "../Auth/Login.css";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let { onSubmit, isLogin } = useAuthContext();
  let navigate = useNavigate();
  useEffect(() => {
    if (isLogin) navigate("/");
  }, [isLogin]);
  let initialValues = {
    username: "",
    password: "",
  };
  return (
    <div className="main-container">
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form>
          <div>
            <h1 className="centered">Login</h1>
          </div>
          <div>
            {/* <label htmlFor="username">Username:</label> */}
            <Field
              type="text"
              className="input-field"
              name="username"
              placeholder="Username"
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password:</label> */}
            <Field
              type="password"
              className="input-field"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
