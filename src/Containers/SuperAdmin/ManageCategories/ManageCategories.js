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


export default function Login() {
    const classes = useStyles()
    const history = useHistory()
    const { enqueueSnackbar } = useSnackbar()



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
                    <h1> Manage Categories</h1>
                </CardBody>
            </Card>
            <CssBaseline />
        </Container>
    )
}
