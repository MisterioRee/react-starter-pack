import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import store from "./store/index"
import { Provider } from "react-redux"
import { SnackbarProvider } from "notistack"
import MainRoute from "Routes/MainRoutes"

const snakIcons = {
  success: "✅",
  error: "✖️",
  warning: "⚠️",
  info: "ℹ️",
};

const snakIconPossions = {
  vertical: "top",
  horizontal: "right",
};
function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        iconVariant={snakIcons}
        anchorOrigin={snakIconPossions}
      >
        <Router>
          <Switch>
            <Route path="/" component={MainRoute} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </Provider>
  )
}

export default App
