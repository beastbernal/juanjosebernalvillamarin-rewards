import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../context/ContextProvider";
import to from "await-to-js";
import { v4 as uuidv4 } from "uuid";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide 
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "./usePagination";

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
  rootButton: {
    "& > *": {
      margin: theme.spacing(1),
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProductList({ isRedeemable, products, userData }) {
  const {
    providerValue: { redeemProduct, updateHistory, refrehUser },
  } = useContext(AppContext);

  const classes = useStyles();
  const pages = usePagination(products, 16);
  const [page, setPage] = useState(1);
  const pageNumber = products.length > 16 ? Math.ceil(products.length / 16) : 1;
  const [open, setOpen] = useState(false);
  const [redeemTitle, setRedeemTitle] = useState("");
  const [redeemMsj, setRedeemMsj] = useState("");

  async function asyncRedeemProduct(productId) {
    const [err, result] = await to(redeemProduct(productId));
    if (!result) {
      setRedeemTitle("Error");
      setRedeemMsj("Producto No Pudo ser Redimido, Por Favor Intenta de Nuevo");
      handleClickOpen();
      throw new Error("Error al Redimir el Producto" + err);
    } else {
      await updateHistory();
      await refrehUser();
      setRedeemTitle("Felicitaciones");
      setRedeemMsj("Producto Redimido con Èxito 👜");
      handleClickOpen();
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, value) => {
    setPage(value);
    pages.jump(value);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle id="alert-dialog-title">
          {redeemTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {redeemMsj}
          </DialogContentText>
        </DialogContent>
        <DialogActions>          
          <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
      {pages.currentData() &&
        page &&
        pages.currentData().map((product) => {
          return (
            <React.Fragment key={uuidv4()}>
              <Grid item xs={3}>
                <Card className={classes.root} variant="outlined">
                  <CardActionArea>
                    <CardMedia
                      key={uuidv4()}
                      component="img"
                      image={product.img.url}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {product.category}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {isRedeemable && (
                    <CardActions>
                      {userData.points > product.cost ? (
                        <Button
                          variant="contained"
                          color="primary"
                          aria-label="Canjear"
                          onClick={() => asyncRedeemProduct(product._id)}
                        >
                          Canjear{" "}
                          <span role="img" aria-labelledby="coin">
                            👜
                          </span>
                        </Button>
                      ) : (
                        <Button variant="outlined" disabled>
                          Te faltan {userData.points - product.cost} 💰
                        </Button>
                      )}
                    </CardActions>
                  )}
                </Card>
              </Grid>
            </React.Fragment>
          );
        })}
      <div className="box-center">
        <Pagination
          count={pageNumber}
          page={pages.currentPage}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default ProductList;
