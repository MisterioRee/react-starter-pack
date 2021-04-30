// @material-ui/icons

import GroupIcon from "@material-ui/icons/Group"
import Dashboard from "../Containers/SuperAdmin/Dashboard/Dashboard"

// core components/views for account layout


export default [
  {
    path: "/admin/s-admin",
    name: "Dashboard",
    icon: <GroupIcon />,
    component: Dashboard,
    layout: "/dashboard",
    key: "s1",
  },
  {
    path: "/admin/s-admin",
    name: "Manage categories",
    icon: <GroupIcon />,
    component: () => <div>categories page</div>,
    layout: "/categories",
    key: "s1",
  },
  {
    path: "/admin/s-admin",
    name: "Manage Restaurants",
    icon: <GroupIcon />,
    component: () => <div>restaurants page</div>,
    layout: "/restaurants",
    key: "s1",
  },
  {
    path: "/admin/s-admin",
    name: "Manage users",
    icon: <GroupIcon />,
    component: () => <div>user page</div>,
    layout: "/users",
    key: "s1",
  },

]
