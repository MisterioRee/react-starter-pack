import React from "react"
import { useHistory, Switch, Route, Redirect } from "react-router-dom"
import AppNewDrawer from "../Components/AppDrawer/AppNewDrawer"
import Typography from "@material-ui/core/Typography"
import { getCurrentRoutes } from '../Utils/CommonHelper'

export default function Navigation() {
  const currentRoutes = getCurrentRoutes()

  return (
    <div>
      <AppNewDrawer>
        <Switch>
          {currentRoutes.map(({ component, path, layout, key }) => (
            <Route exact key={key} path={`${path}${layout}`} component={component} />
          ))}
          <Redirect from='/' to={currentRoutes?.[0]?.path + currentRoutes?.[0]?.layout} />
        </Switch>
      </AppNewDrawer>
    </div>
  )
}
