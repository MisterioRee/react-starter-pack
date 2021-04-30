/*eslint-disable*/
import React from "react"
import classNames from "classnames"
import { NavLink } from "react-router-dom"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Icon from "@material-ui/core/Icon"

import styles from "assets/sidebarStyle.js"
import { getCurrentRoutes } from "../../Utils/CommonHelper"

const useStyles = makeStyles(styles)

export default function AppDrawer(props) {
  let routes = getCurrentRoutes()
  const classes = useStyles()
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.pathname === routeName
  }
  const { color, logoText } = props

  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        let activePro = " "
        let listItemClasses
        listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path),
        })
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
        })
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon className={classNames(classes.itemIcon, whiteFontClasses)}>{prop.icon}</Icon>
              ) : (
                <prop.icon className={classNames(classes.itemIcon, whiteFontClasses)} />
              )}
              <ListItemText
                primary={prop.name}
                className={classNames(classes.itemText, whiteFontClasses)}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        )
      })}
    </List>
  )
  var brand = <div className={classes.logo}>{logoText}</div>
  return (
    <div>
      <Drawer
        anchor={"left"}
        variant="permanent"
        open
        classes={{
          paper: classNames(classes.drawerPaper),
        }}
      >
        {brand}
        <div className={classes.sidebarWrapper}>{links}</div>
      </Drawer>
    </div>
  )
}
