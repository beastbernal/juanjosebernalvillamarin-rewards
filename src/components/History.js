import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import ProductList from "./ProductList";
import {
    Grid,
  } from "@material-ui/core";

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
  const {
    providerValue: { recordData = [] },
    providerValue: { userData = {} },
  } = useContext(AppContext);
  return (
    <div className={classes.container}>
     <h2>Historial de Canjes</h2>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={4}>
          <ProductList isRedeemable={false} products={recordData} userData={userData} />
          </Grid>
        </Grid>
    </div>
  );
};

export default History;
