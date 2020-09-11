import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../context/ContextProvider";

import {
  Grid,
} from "@material-ui/core";
import ProductList from "./ProductList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(12),
  },
}));

const DinosaurStore = () => {
  const classes = useStyles();
  const {
    providerValue: { products = [] },
    providerValue: { userData = {} },
  } = useContext(AppContext);
  return (
    <>      
      <div className={classes.container}>
      <h2>Productos Disponibles Para Canje</h2>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={4}>
            <ProductList isRedeemable={true} products={products} userData={userData} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DinosaurStore;
