import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import Button from "@mui/material/Button";
import { Topic } from "@mui/icons-material";
import DashBoardHome from "./DashBoardHome/DashBoardHome";
import Pay from "./Pay/Pay";
import AddAdmin from "./AddAdmin/AddAdmin";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import useAuth from "../Hooks/useAuth";
import Addreview from "../Components/Pages/Review/Addreview";
import AllOrders from "../Components/Pages/AllOrders/AllOrders";
import MyOrders from "../Components/Pages/MyOrders/MyOrders";
import AddProduct from "../Components/AddProduct/AddProduct";
import ManageAllOrder from "../Components/ManageAllOrder/ManageAllOrder";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logingOut } = useAuth();
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {!admin && (
        <Box>
          <NavLink
            className="d-block"
            style={{ textDecoration: "none", textAlign: "center" }}
            as={Link}
            to={`${url}`}
          >
            <Button>Dashboard</Button>
          </NavLink>
          <NavLink
            className="d-block"
            style={{ textDecoration: "none", textAlign: "center" }}
            to={`${url}/pay`}
          >
            <Button>Pay</Button>
          </NavLink>
          <NavLink
            className="d-block"
            style={{ textDecoration: "none", textAlign: "center" }}
            to={`${url}/myorder`}
          >
            <Button>My Order</Button>
          </NavLink>
          <NavLink
            className="d-block"
            style={{ textDecoration: "none", textAlign: "center" }}
            to={`${url}/review`}
          >
            <Button color="inherit">Review</Button>
          </NavLink>
        </Box>
      )}
      {admin && (
        <Box>
          <NavLink
            className="d-block"
            style={{ textDecoration: "none", textAlign: "center" }}
            to={`${url}/addProduct`}
          >
            <Button>Add Product</Button>
          </NavLink>
          <NavLink
            className="d-block"
            style={{ textDecoration: "none", textAlign: "center" }}
            to={`${url}/manageProducts`}
          >
            <Button>Manage All Orders</Button>
          </NavLink>
          <NavLink
            className="d-block"
            style={{ textDecoration: "none", textAlign: "center" }}
            to={`${url}/allOrders`}
          >
            <Button>All Orders</Button>
          </NavLink>
          <NavLink
            className="d-block"
            style={{ textDecoration: "none", textAlign: "center" }}
            to={`${url}/makeAdmin`}
          >
            <Button>Make Admin</Button>
          </NavLink>
        </Box>
      )}

      <NavLink
        className="d-block"
        style={{ textDecoration: "none", textAlign: "center" }}
        to="/login"
      >
        <Button onClick={logingOut}>Logout</Button>
      </NavLink>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashBoardHome></DashBoardHome>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/review`}>
            <Addreview></Addreview>
          </Route>
          <Route path={`${path}/allorders`}>
            <AllOrders></AllOrders>
          </Route>
          <Route path={`${path}/myorder`}>
            <MyOrders></MyOrders>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
