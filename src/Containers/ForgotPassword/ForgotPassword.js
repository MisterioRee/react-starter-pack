import React from "react";
// @material-ui/core components
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// @material-ui/icons
import VpnKeyIcon from "@material-ui/icons/VpnKey";
// core components
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon";
import CardBody from "components/Card/CardBody";
import CustomInput from "components/CustomInput/CustomInput";
import CustomButton from "components/CustomButtons/Button";
import Button from "@material-ui/core/Button";

// color
import { grayColor } from "assets/jss/material-dashboard-react";

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
  loginBtn: { display: "flex", margin: "auto" },
}));

export default function ForgotPassword() {
  const classes = useStyles();

  return (
    <Container className={classes.paper} component="main" maxWidth="sm">
      <Card>
        <CardHeader color="warning" stats icon>
          <CardIcon color="info">
            <VpnKeyIcon />
          </CardIcon>
          <h4 className={classes.cardCategory}>Forgot password</h4>
        </CardHeader>
        <CardBody>
          <CustomInput
            labelText="Email address"
            id="email-address"
            type="email"
            formControlProps={{
              fullWidth: true,
            }}
          />
          <CustomButton className={classes.loginBtn} color="info">
            Reset Password
          </CustomButton>
          <Button href="/login" color="primary">
            Login
          </Button>
        </CardBody>
      </Card>
      <CssBaseline />
    </Container>
  );
}
