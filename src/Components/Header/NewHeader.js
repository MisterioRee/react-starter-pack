import React from "react"
import clsx from "clsx"
import { useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"
import { infoColor } from "../../assets/Theming"
import { useHistory } from "react-router"

const drawerWidth = 270

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export default function NewHeader(props) {
  const { open, handleDrawerOpen } = props
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const isLoggedInUser = JSON.parse(localStorage.getItem("user"))
  const { user } = isLoggedInUser ?? {}
  const isShowMenu = user?.userTypeId?.id !== 1

  // handle logout
  function logOut() {
    localStorage.clear()
    history.push("/login")
  }

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
      style={{ background: infoColor[0] }}
    >
      <Toolbar>
        {isShowMenu && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" className={classes.title}>
          Shisheo
        </Typography>
        <Button onClick={logOut} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}
