import React, { useState } from "react";
import "./loginRegister.css";
import {
  useAuthenticateUserMutation,
  useRegisterUserMutation,
} from "../../../Services/Redux/APIServices/apiSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Loader } from "../../common_components/loaderComponent/Loader";

export const LoginRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: signInErrors },
    getValues: signInFormValues,
    reset: registerSignInReset,
  } = useForm({ mode: "onTouched" });

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: signUpErrors },
    getValues: signUpFormValues,
    reset: resgisterSignUpReset,
  } = useForm({ mode: "onTouched" });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [containerClass, setContainerClass] = useState("container-ss");

  const SignUpHandler = () => {
    setContainerClass("container-ss sign-up-mode");
    setShowPassword(false);
  };

  const SignInHandler = () => {
    setContainerClass("container-ss");
    setShowPassword(false);
  };
  const navigate = useNavigate();

  const [createUser, { isLoading: isCreateUserLoading }] =
    useRegisterUserMutation();
  const [authenticateUser, { isLoading: isAuthLoading, error: authError }] =
    useAuthenticateUserMutation();

  const signInSubmitHandler = async (data) => {
    console.log(data);
    try {
      let result = await authenticateUser(data).unwrap();
      localStorage.setItem("token", result.access);
      toast.success("Logged In Successfully!!!");
      registerSignInReset();
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const signupSubmitHandler = async (data) => {
    console.log(data);
    try {
      let result = await createUser(data).unwrap();
      toast.success(result.message);
      SignInHandler();
      resgisterSignUpReset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin-signup-body">
      <Loader showLoader={isAuthLoading || isCreateUserLoading} />
      <div className={containerClass}>
        <div className="forms-container-ss">
          <div className="signin-signup">
            <form
              className="sign-in-form"
              onSubmit={handleSubmitSignIn(signInSubmitHandler)}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                maxWidth={500}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography variant="h3" padding={3} textAlign={"center"}>
                  Login
                </Typography>
                <TextField
                  type="text"
                  variant="outlined"
                  label="Username*"
                  name="username"
                  {...registerSignIn("username", {
                    required: "Username is required",
                  })}
                  sx={{ width: "300px", mb: 1, borderRadius: 5 }}
                  error={Boolean(signInErrors.username)}
                  helperText={
                    signInErrors.username && signInErrors.username.message
                  }
                />
                <TextField
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  label="Password*"
                  name="password"
                  {...registerSignIn("password", {
                    required: "Password is required",
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ width: "300px", mb: 1 }}
                  error={Boolean(signInErrors.password)}
                  helperText={
                    signInErrors.password && signInErrors.password.message
                  }
                />
                <Button
                  sx={{ marginTop: 3, borderRadius: 5 }}
                  size="large"
                  variant="contained"
                  color="success"
                  type="submit"
                >
                  Login
                </Button>
                <Divider sx={{ width: "100%", mt: 2 }}>or</Divider>

                <Link to="/forgotpass">
                  <Button sx={{ marginTop: 1, borderRadius: 3 }}>
                    Forgot password
                  </Button>
                </Link>
              </Box>
            </form>
            <form
              className="sign-up-form"
              onSubmit={handleSubmitSignUp(signupSubmitHandler)}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                maxWidth={500}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography variant="h3" padding={3} textAlign={"center"}>
                  Register
                </Typography>
                <TextField
                  type="email"
                  variant="outlined"
                  label="Email*"
                  name="email"
                  {...registerSignUp("email", {
                    required: "Email is required",
                  })}
                  sx={{ width: "300px", mb: 1 }}
                  error={Boolean(signUpErrors.email)}
                  helperText={signUpErrors.email && signUpErrors.email.message}
                />
                <TextField
                  type="text"
                  variant="outlined"
                  label="Username*"
                  name="username"
                  {...registerSignUp("username", {
                    required: "Username is required",
                  })}
                  sx={{ width: "300px", mb: 1 }}
                  error={Boolean(signUpErrors.username)}
                  helperText={
                    signUpErrors.username && signUpErrors.username.message
                  }
                />
                <TextField
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  label="Password*"
                  name="password"
                  {...registerSignUp("password", {
                    required: "Password is required",
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ width: "300px", mb: 1 }}
                  error={Boolean(signUpErrors.password)}
                  helperText={
                    signUpErrors.password && signUpErrors.password.message
                  }
                />
                <Button
                  sx={{ marginTop: 3, borderRadius: 5 }}
                  size="large"
                  variant="contained"
                  color="success"
                  type="submit"
                >
                  Register
                </Button>
              </Box>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content-ss">
              <h3>Don't have an account?</h3>
              <p>Let's Dive IN</p>
              <button
                className="btn-ss transparent"
                id="sign-up-btn"
                onClick={SignUpHandler}
              >
                Register
              </button>
            </div>
            <img src="img/log.svg" className="image-ss" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content-ss">
              <h3>Already have an account?</h3>
              <p>Get Inside</p>
              <button
                className="btn-ss transparent"
                id="sign-in-btn"
                onClick={SignInHandler}
              >
                Login
              </button>
            </div>
            <img src="img/register.svg" className="image-ss" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
