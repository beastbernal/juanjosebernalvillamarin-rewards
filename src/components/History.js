import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
        paddingTop: theme.spacing(20),
      },
}));

const History = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}> Historia</div>
    )

}


export default History;