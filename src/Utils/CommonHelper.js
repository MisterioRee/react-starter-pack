import MerchantRoutes from "../Routes/MerchantRoutes"
import SuperAdminRoutes from "../Routes/SuperAdminRoutes"

export function getCurrentRoutes() {
  let routes = []
  const currentUser = 1;
  // const isLoggedInUser = JSON.parse(localStorage.getItem("user"))
  if (currentUser === 1) {
    return SuperAdminRoutes
  }
  if (currentUser === 2) {
    return MerchantRoutes
  }
  return routes
}
