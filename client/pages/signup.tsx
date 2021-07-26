import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import userbase from "userbase-js";
import { isEmailValid, isPasswordValid } from "utils/validation";

const SignUpForm = () => {
  const [botField, setBotField] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const isFormValid = () => {
    if (botField.length != 0) {
      return;
    }
    const emailValid = isEmailValid(email);
    const passwordValid = isPasswordValid(password);
    if (!emailValid) {
      setEmailError("Please input a valid email address");
    }
    if (!passwordValid) {
      setPasswordError("Please input a valid password");
    }
    return emailValid && passwordValid;
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (!isFormValid()) {
      return;
    }
    try {
      const user = await userbase.signUp({
        username: email,
        password,
        email,
        rememberMe: "none",
      });
      console.log({ user });
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        aria-label="Humans need not fill out"
        type="text"
        tabIndex={-1}
        value={botField}
        onChange={(event: any) => setBotField(event.target.value)}
        style={{ display: "none" }}
      />
      <input
        placeholder="Email"
        value={email}
        type="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      {emailError && <span>{emailError}</span>}
      <input
        placeholder="Password"
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      {passwordError && <span>{passwordError}</span>}
      <span>
        By signing up, you agree to the{" "}
        <Link href="/terms">
          <a>terms of service</a>
        </Link>{" "}
        and{" "}
        <Link href="/privacy">
          <a>privacy policy</a>
        </Link>
      </span>
      <input type="submit" value="Sign up" />
      <span>{error}</span>
    </form>
  );
};

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <main>
        <SignUpForm />
      </main>
    </>
  );
};

export default SignUpPage;
