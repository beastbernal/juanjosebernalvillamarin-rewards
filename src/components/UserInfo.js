import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/logo.png";
import { Alert, AlertTitle } from '@material-ui/lab';
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
      width: '40%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}));
function UserInfo({}) {
    const classes = useStyles();
    const { providerValue: {userData = []} } = useContext(AppContext);
    return (
        <div className="box-user">
          <strong> {userData.name}</strong> ::  {userData.points}💰
        </div>
    )
  
  }

  export default UserInfo;