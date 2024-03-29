import { Component, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import TimelineIcon from "@mui/icons-material/Timeline";
import Dashboard from "../containers/Dashboard";
import Contact from "../containers/Contact";
import Profile from "../containers/Profile";
import Projects from "../containers/Projects";
import Sittings from "../containers/Sittings";
import Timeline from "../containers/Timeline";
import { useNavigate } from "react-router-dom";

import { Button, Icon } from "@mui/material";

// import { selectSelectedItem, setSelectedItem } from '../app/features/menuSlice';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "white",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerComponent = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": { ...openedMixin(theme), backgroundColor: "white" },
  }),
  backgroundColor: "#770737",
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": { ...closedMixin(theme), backgroundColor: "white" },
  }),
}));

export default function SideNav() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [MenuItem, setMenuItem] = useState("Dashboard");

  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenuItemClick = (menuItem) => {
    setMenuItem(menuItem);
  };

  let componentToRender;

  switch (MenuItem) {
    case "Dashboard":
      componentToRender = <Dashboard />;
      break;
    case "Profile":
      componentToRender = <Profile />;
      break;
    case "Projects":
      componentToRender = <Projects />;
      break;
    case "Settings":
      componentToRender = <Sittings />;
      break;
    case "Chat":
      componentToRender = <Contact />;
      break;
    case "My Timeline":
      componentToRender = <Timeline />;
      break;
    default:
      componentToRender = <Dashboard />;
  }

  return (
    <Box sx={{ display: "flex",backgroundColor:'gray' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>

        <Toolbar style={{"background":'black'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Project Pilot
          </Typography>

          <div>
            <div></div>
          </div>
        </Toolbar>
        <div sx={{ flex: "1", textAlign: "right" }}></div>
      </AppBar>
      <DrawerComponent variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: "Dashboard", icon: <DashboardIcon /> },
            { text: "Profile", icon: <AccountCircleIcon /> },
            { text: "Projects", icon: <AssignmentIcon /> },
            { text: "Settings", icon: <SettingsIcon /> },
            //{ text: 'Chat', icon: <ChatIcon /> },
            { text: "My Timeline", icon: <TimelineIcon /> },
          ].map((item, index) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => handleMenuItemClick(item.text)}
            >
              <ListItemButton
                sx={{
                  minHeight: 88,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DrawerComponent>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 10 ,backgroundColor:'gray'}}>
        {componentToRender}
      </Box>
    </Box>
  );
}
