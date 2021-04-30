import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

// @material-ui/core components
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
// core components
import Card from "Components/Card/Card"
import CardHeader from "Components/Card/CardHeader"
import CardIcon from "Components/Card/CardIcon"
import CardBody from "Components/Card/CardBody"
import CustomInput from "Components/CustomInput/CustomInput"
import CustomButton from "Components/CustomButtons/Button"
// color
import { infoColor, grayColor } from "assets/Theming"
import CustomCheckbox from "Components/CustomCheckbox/CustomCheckbox"
import { useSnackbar } from "notistack"
import Skeleton from "@material-ui/lab/Skeleton"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cardCategory: {
    color: grayColor[2],
    margin: "0",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
    textAlign: "left",
    fontFamily: "Roboto Helvetica Arial sans-serif",
  },
  link: { color: `${infoColor[0]} !important` },
  grid: { margin: "10px 0px 10px 0px" },
  loginBtn: { display: "flex", margin: "auto" },
}))


// Redux actions
import { signin, signup } from "../../store/Auth/AuthAction";


export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const [state, setState] = useState({
    username: "",
    password: "",
  })


  function handleChange(e) {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  //Handle login
  function submitLogin() {
    // dispatch(signin(state.username, state.password));
    // dispatch(signup(state.username, state.password));
    history.push('admin/s-admin/dashboard')
  }

  return (
    <Container
      className={classes.paper}
      style={{ textAlign: "center" }}
      component="main"
      maxWidth="sm"
    >
      <Card>
        <CardHeader stats icon>
          <CardIcon color="info">
            <LockOutlinedIcon />
          </CardIcon>
          <h4 className={classes.cardCategory}>Login</h4>
        </CardHeader>
        <CardBody>
          <form className={classes.form} noValidate>
            <CustomInput
              labelText="Email address"
              name="username"
              type="email"
              value={state.username}
              onChange={handleChange}
              formControlProps={{
                fullWidth: true,
              }}
            />
            <CustomInput
              labelText="Password"
              name="password"
              type="password"
              value={state.password}
              onChange={handleChange}
              formControlProps={{
                fullWidth: true,
              }}
            />
            <Grid className={classes.grid} container>
              <Grid item xs style={{ textAlign: "left" }}>
                <CustomCheckbox label={"Remember me"} />
              </Grid>
              <Grid item style={{ marginTop: 10, textAlign: "left" }}>
                <Link className={classes.link} to="/forgot-password" variant="body2">
                  Forgot password?
                    </Link>
              </Grid>
            </Grid>
            <CustomButton className={classes.loginBtn} onClick={submitLogin} color="info">
              Login
                </CustomButton>
          </form>
        </CardBody>
      </Card>
      <CssBaseline />
    </Container>
  )
}