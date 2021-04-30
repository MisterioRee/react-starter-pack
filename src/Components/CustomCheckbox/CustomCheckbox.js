import React from "react"
// @material-ui/icons
import Check from "@material-ui/icons/Check"
// @material-ui/core
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { makeStyles } from "@material-ui/core/styles"
import Checkbox from "@material-ui/core/Checkbox"
// core components
import styles from "assets/tasksStyle"

const useStyles = makeStyles(styles)

export default function CustomCheckbox(props) {
  const { label, onChange, checked } = props
  const classes = useStyles()

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          checkedIcon={<Check className={classes.checkedIcon} />}
          icon={<Check className={classes.uncheckedIcon} />}
          classes={{
            checked: classes.checked,
            root: classes.root,
          }}
        />
      }
      label={label ?? ""}
    />
  )
}
