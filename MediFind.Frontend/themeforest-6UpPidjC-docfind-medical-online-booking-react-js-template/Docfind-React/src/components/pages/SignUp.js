import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Headertwo from "../layouts/Headertwo";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    // Password requirements
    const requirementsPass = [
      // Must be at least 8 characters
      password.length >= 8,
      // Must contain at least 1 uppercase letter
      /[A-Z]/.test(password),
      // Must contain at least 1 lowercase letter
      /[a-z]/.test(password),
      // Must contain at least 1 number
      /\d/.test(password),
    ];
    const requirementsConfirmPass = [confirmPassword === password];
    // If all requirements are met, password is valid
    const isValid = requirementsPass.every(Boolean);
    const isValid2 = requirementsConfirmPass.every(Boolean);

    if (!isValid) {
      setError(true);
    } else {
      setError(false);
    }
    if (!isValid2) {
      setError2(true);
    } else {
      setError2(false);
    }
  }

  const submitSignupForm = async () => {
    setError("");
    const url =
      "http://ec2-3-28-221-142.me-central-1.compute.amazonaws.com/api/users/sign-up";
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
        fullname: firstname + " " + lastname,
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
        history.push("/");
      } else {
        setError(body.message);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className={styles.form}>
      <Headertwo />
      <h1> Create Your MediFind Account</h1>
      <form
        className={styles.myform}
        action="process.php"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className={styles.formGroup}>
          <input
            type="text"
            name="firstname"
            required
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="lastname"
            required
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
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
            placeholder="Create Password"
            minlength="10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          {error && <h5 className={styles.error}>Password is not valid!</h5>}
          <h4 className={styles.smallText}>
            Password should be at least 8 characters or longer with at least 1
            of each: lowercase letter, uppercase letter, special character, and
            number.
          </h4>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />{" "}
          {error2 && (
            <h5 className={styles.error}>Password is not the same!</h5>
          )}
          <h3 className={styles.smallText}> Date of Birth:</h3>
          <input
            type="date"
            name="DOB"
            required
            placeholder="DD/MM/YYYY"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="submit"
            value="Create Account"
            name="submit"
            onClick={submitSignupForm}
          />
        </div>
      </form>
      <div>
        <h4 style={{ fontSize: "1vw", color: "black" }}>
          Already have an account?{" "}
          <Link to="/login" className={styles.links}>
            Go to login
          </Link>
        </h4>
      </div>
    </div>
  );
};
export default SignUp;
