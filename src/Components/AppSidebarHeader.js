import React from "react"
import { Grid, Container } from "@material-ui/core"
import AppDrawer from "../Components/AppDrawer/AppDrawer"
import Header from "../Components/Header/Header"
import { getCurrentRoutes } from "../Utils/CommonHelper"

export default function AppSidebarHeader(props) {
  let routes = getCurrentRoutes()
  const { children } = props
  const currentPath = window?.location?.pathname ?? ""
  let title = routes.filter((x) => x.layout + x.path === currentPath)?.[0]?.name

  return (
    <Grid container spacing={1} style={{ color: "#555555" }}>
      <Grid item md={2}>
        <AppDrawer color={"blue"} logoText="Shisheo" />
      </Grid>
      <Grid item md={10}>
        <Grid container spacing={1}>
          <Grid item md={4} style={{ marginTop: "2rem" }}>
            <div>{title}</div>
          </Grid>
          <Grid item md={8}>
            <Header />
          </Grid>
        </Grid>
        <Container style={{ marginTop: "2rem" }}>{children}</Container>
      </Grid>
    </Grid>
  )
}
