import React from "react"
import classNames from "classnames"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Hidden from "@material-ui/core/Hidden"
import Poppers from "@material-ui/core/Popper"
import Divider from "@material-ui/core/Divider"
// @material-ui/icons
import Person from "@material-ui/icons/Person"
// core components
import Button from "Components/CustomButtons/Button"

import styles from "assets/headerLinksStyle"

const useStyles = makeStyles(styles)

export default function Header() {
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useStyles()
  const [openProfile, setOpenProfile] = React.useState(null)

  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null)
    } else {
      setOpenProfile(event.currentTarget)
    }
  }
  const closeProfilePopover = () => {
    setOpenProfile(null)
  }

  // handle logout
  function logOut() {
    localStorage.clear()
    history.push("/login")
  }

  return (
    <div className={classes.sidebarWrapper}>
      <div className={classes.manager}>
        <Button
          color={"transparent"}
          justIcon={true}
          simple={false}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={classNames({ [classes.popperClose]: !openProfile }) + " " + classes.popperNav}
          style={{ zIndex: 1 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin: placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={closeProfilePopover}>
                  <MenuList role="menu">
                    <MenuItem className={classes.dropdownItem}>Profile</MenuItem>
                    <Divider light />
                    <MenuItem onClick={logOut} className={classes.dropdownItem}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  )
}
