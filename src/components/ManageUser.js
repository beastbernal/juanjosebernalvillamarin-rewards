import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      alignSelf: "flex-end",
    },
    container: {
      paddingTop: theme.spacing(20),
    },
  }));

const ManageUser = () => {
  const classes = useStyles();
  return <div className={classes.container}>USER MANAGER</div>;
};

export default ManageUser;
