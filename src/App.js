import React from "react";
import "./index.css";
import "./styles.css";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import AppProvider from "./context/ContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./assets/logo.png";

import DinosaurStore from "./components/DinosaurStore";
import UserInfo from "./components/UserInfo";
import ManageUser from "./components/ManageUser";
import {
  AppBar,
  Drawer,
  CssBaseline,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {InboxIcon, MailIcon} from '@material-ui/icons/MoveToInbox';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootbar: {
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  },
  rootAlert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    background: "linear-gradient(45deg, #8fb243 30%, #d36c1c 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 10px",
    zIndex: 1000,
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  container: {
    paddingTop: theme.spacing(20),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <AppProvider>
      <div className="App">
        <HashRouter>
          <div className={classes.rootbar}>
            <AppBar position="static">
              <Toolbar className={classes.toolbar}>
                <img src={Logo} alt="logo" />
                <Typography className={classes.title} variant="h5" noWrap>
                  <header>
                    <nav>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/books">Child 1</Link>
                        </li>
                      </ul>
                    </nav>
                  </header>
                </Typography>
                <Typography className={classes.title} variant="h5" noWrap>
                  <UserInfo />{" "}
                </Typography>
              </Toolbar>
            </AppBar>
          </div>

          <Switch>
            {" "}
            {/* también la envolvemos en el componente Switch */}
            <Route path="/" component={DinosaurStore} exact />{" "}
            {/* y creamos nuestras rutas */}
            <Route path="/books" component={ManageUser} exact />
            {/* <Route path="/books/:bookId" component={BookDetail} exact /> */}
          </Switch>
        </HashRouter>
      </div>
    </AppProvider>
  );
}