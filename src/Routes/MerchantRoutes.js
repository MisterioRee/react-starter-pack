
import GroupIcon from "@material-ui/icons/Group"
import Dashboard from "../Containers/Merchants/Dashboard/Dashboard"

// core components/views for account layout

export default [
    {
        path: "/admin/merchant",
        name: "Dashboard",
        icon: <GroupIcon />,
        component: Dashboard,
        layout: "/dashboard",
        key: "m1",
    },

]
