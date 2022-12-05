import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import Headertwo from "../layouts/Headertwo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginForm = async () => {
    const url =
      "http://ec2-3-28-239-202.me-central-1.compute.amazonaws.com/api/users/sign-in";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    try {
      console.log(options);
      const response = await fetch(url, options);
      console.log(response);
      const body = await response.json();
      console.log(body);
      if (response.ok) {
        localStorage.setItem("sessionId", body.sessionId);
        localStorage.setItem("isAdmin", body.isAdmin);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <Fragment>
      <Headertwo />
      <div className={styles.form}>
        <h1> Log In to MediFind</h1>
        <form className={styles.myform}>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <button type="button" onClick={submitLoginForm}>
              Log in
            </button>
          </div>
          <div className={styles.formGroup}>
            <h4>
              {/* <Link to="#" className={styles.links}>
                Forgot your password?
              </Link> */}
              <br></br>
              Don't have an account yet?
              <Link to="/sign-up" className={styles.links}>
                {" "}
                Create Account
              </Link>
            </h4>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
