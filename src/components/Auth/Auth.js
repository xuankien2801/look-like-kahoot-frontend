import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { login, register } from "../../actions/auth";

const initialStateSignUp = {
  userType: "",
  firstName: "",
  lastName: "",
  userName: "",
  mail: "",
  password: "",
  confirmPassword: "",
};

const initialStateSignIn = {
  userName: "",
  password: "",
};

function Auth() {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(isSignup ? initialStateSignUp : initialStateSignIn);
  const history = useHistory();
  const dispatch = useDispatch();

  const isLanguageEnglish = useSelector((state) => state.language.isEnglish)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) {
      dispatch(register(formData, history))
    } else {
      dispatch(login(formData, history))
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup
            ? isLanguageEnglish
              ? "Register"
              : "Tạo tài khoản"
            : isLanguageEnglish
            ? "Login"
            : "Đăng nhập"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label={isLanguageEnglish ? "First Name" : "Tên"}
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label={isLanguageEnglish ? "Last Name" : "Họ"}
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="userType"
                  label={isLanguageEnglish ? "User type" : "Loại người dùng (Teacher/Student)"}
                  handleChange={handleChange}
                />
                <Input
                  name="email"
                  label={isLanguageEnglish ? "Email address" : "Email"}
                  handleChange={handleChange}
                  type="email"
                />
              </>
            )}

            <Input
              name="userName"
              label={isLanguageEnglish ? "User Name" : "Tên người dùng/ Tên đăng nhập"}
              handleChange={handleChange}
            />
            <Input
              name="password"
              label={isLanguageEnglish ? "Password" : "Mật khẩu"}
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup
              ? isLanguageEnglish
                ? "Register"
                : "Đăng ký"
              : isLanguageEnglish
              ? "Login"
              : "Đăng nhập"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? isLanguageEnglish
                    ? "Already have an account? Login"
                    : "Đã có tài khoản? Đăng nhập"
                  : isLanguageEnglish
                  ? "Don't have an account? Register"
                  : "Chưa có tài khoản? Tạo ngay"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;
