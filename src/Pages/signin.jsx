import { useState } from "react";
import { Button } from "../App";
import { useNavigate, useOutletContext } from "react-router-dom";

export function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: {
      nameError: "",
      emailError: "",
      passError: "",
      passConfirmError: "",
    },
  });
  const { setLogInDetails } = useOutletContext();
  const navigate = useNavigate();
  var regexEmail = /^([a-z]|[A-Z]){3}([a-z]|[A-Z]|[0123456789]|[-_])*@.+\.com$/;
  var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  var userName = /^([a-z]|[A-Z])+( ([a-z]|[A-Z])*)*$/;
  function logUserIn(userData) {
    setLogInDetails({
      isLoggedIn: true,
      loggedUserName: userData.data.user.name,
      token: userData.data.token,
    });
  }
  function handleChange(e) {
    if (e.target.name == "name") {
      if (userName.test(e.target.value)) {
        setValue((prev) => ({
          ...prev,
          name: e.target.value,
          errors: { ...prev.errors, nameError: "" },
        }));
      } else {
        setValue((prev) => ({
          ...prev,
          name: e.target.value,
          errors: {
            ...prev.errors,
            nameError:
              e.target.value === ""
                ? "Name is required"
                : "Name must start with a letter and contain only letters",
          },
        }));
      }
    }
    if (e.target.name == "email") {
      if (regexEmail.test(e.target.value)) {
        setValue((prev) => ({
          ...prev,
          email: e.target.value,
          errors: { ...prev.errors, emailError: "" },
        }));
      } else {
        setValue((prev) => ({
          ...prev,
          email: e.target.value,
          errors: {
            ...prev.errors,
            emailError:
              e.target.value === ""
                ? "Email is required"
                : "Please enter a valid email address",
          },
        }));
      }
    }
    if (e.target.name == "password") {
      if (regexPassword.test(e.target.value)) {
        setValue((prev) => ({
          ...prev,
          password: e.target.value,
          errors: {
            ...prev.errors,
            passError: "",
            passConfirmError: isSignUp
              ? prev.passwordConfirmation === ""
                ? "Please confirm your password"
                : e.target.value !== prev.passwordConfirmation
                  ? "Passwords do not match"
                  : ""
              : "",
          },
        }));
      } else {
        setValue((prev) => ({
          ...prev,
          password: e.target.value,
          errors: {
            ...prev.errors,
            passError:
              e.target.value === ""
                ? "Password is required"
                : "Password must be at least 8 characters and include an uppercase letter, lowercase letter, and a number",
          },
        }));
      }
    }
    if (e.target.name == "passwordConfirmation") {
      setValue((prev) => ({
        ...prev,
        passwordConfirmation: e.target.value,
        errors: {
          ...prev.errors,
          passConfirmError:
            e.target.value === ""
              ? "Please confirm your password"
              : e.target.value !== prev.password
                ? "Passwords do not match"
                : "",
        },
      }));
    }
  }

  const hasErrors = isSignUp
    ? value.errors.nameError ||
      value.errors.emailError ||
      value.errors.passError ||
      value.errors.passConfirmError
    : value.errors.emailError || value.errors.passError;

  const isSubmitDisabled = hasErrors;

  async function handleLogInSubmit(e) {
    e.preventDefault();

    if (hasErrors) {
      return;
    }

    try {
      const response = await fetch(
        "https://gemdashboard-production.up.railway.app/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: value.email,
            password: value.password,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        return;
      }

      logUserIn(data);
      navigate("/shop");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSignUpSubmit(e) {
    e.preventDefault();

    if (hasErrors) {
      return;
    }

    try {
      const response = await fetch(
        "https://gemdashboard-production.up.railway.app/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: value.name,
            email: value.email,
            password: value.password,
            password_confirmation: value.passwordConfirmation,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="Sign-In">
      <h2 className="Sign-In-Header">
        {isSignUp ? "Join The Gym" : "Enter the gym"}
      </h2>
      <div className="Form">
        {isSignUp && (
          <>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={value.name}
              onChange={(e) => handleChange(e)}
            />
            <span className="Form-Errors">{value.errors.nameError}</span>
          </>
        )}
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={value.email}
          onChange={(e) => handleChange(e)}
        />
        <span className="Form-Errors">{value.errors.emailError}</span>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={value.password}
          onChange={(e) => handleChange(e)}
        />
        <span className="Form-Errors">{value.errors.passError}</span>
        {isSignUp && (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={value.passwordConfirmation}
              onChange={(e) => handleChange(e)}
            />
            <span className="Form-Errors">{value.errors.passConfirmError}</span>
          </>
        )}
        <Button
          disabled={isSubmitDisabled}
          onClick={(e) =>
            isSignUp ? handleSignUpSubmit(e) : handleLogInSubmit(e)
          }
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        {isSubmitDisabled ? (
          <span className="Form-Errors">Can not submit fix errors first</span>
        ) : (
          ""
        )}
      </div>
      <p
        className="Sign-Up-Link"
        onClick={() => setIsSignUp((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        {isSignUp ? "Already a member? Sign in" : "New here? Sign up"}
      </p>
    </div>
  );
}
