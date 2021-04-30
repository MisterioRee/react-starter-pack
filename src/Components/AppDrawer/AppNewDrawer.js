import React from "react"
import clsx from "clsx"
import classNames from "classnames"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import NewHeader from "../Header/NewHeader"
import { getCurrentRoutes } from "../../Utils/CommonHelper"
import { NavLink } from "react-router-dom"
import styles from "assets/sidebarStyle.js"
import SuperAdminRoutes from "../../Routes/SuperAdminRoutes"

const useStyles = makeStyles(styles)
export default function AppNewDrawer(props) {
  const routes = getCurrentRoutes()
  const currentPath = window?.location?.pathname ?? ""
  let title = routes.filter((x) => x.layout + x.path === currentPath)?.[0]?.name
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  function activeRoute(routeName) {
    return window.location.pathname === routeName
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NewHeader open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            Menu

            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((section, index) => {
            const listItemClasses = classNames({
              [" " + classes["blue"]]: activeRoute(section.path + section.layout),
            })
            return (
              <NavLink
                to={section.path + section.layout}
                className={classes.item}
                activeClassName="active"
                key={index}
              >
                <ListItem button className={listItemClasses}>
                  <ListItemIcon>{section.icon}</ListItemIcon>
                  <ListItemText primary={section.name} />
                </ListItem>
              </NavLink>
            )
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <h2 style={{ color: "#707070" }}>{title}</h2>
        {props.children}
      </main>
    </div>
  )
}
