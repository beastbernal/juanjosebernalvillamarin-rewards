import React, { useContext, useState, useEffect } from "react";
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
  Slide,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
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
    paddingTop: theme.spacing(10),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProductList({ isRedeemable, products, userData }) {
  const {
    providerValue: { redeemProduct, updateHistory, refrehUser },
  } = useContext(AppContext);
  const [productsFilter, setProductsFilter] = useState([]);
  const [arrayCategory, setArrayCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const [arrayCost, setArrayCost] = useState([]);
  const [filterCost, setFilterCost] = useState([]);

  useEffect(() => {
    setProductsFilter(products);
    let setCategory = new Set();
    let setCost = new Set();
    products &&
      products.map((p) => {
        setCategory.add(p.category);
        setCost.add(p.cost);
        return true;
      });
    setArrayCategory(Array.from(setCategory).sort());
    setArrayCost(Array.from(setCost).sort((a,b)=>a-b));
  }, [products]);

  useEffect(() => {
    const newProducts = !!filterCategory ? products && products.filter(
      p => p.category === filterCategory
    ) : products;
    setProductsFilter(newProducts);
    setFilterCost("");
  }, [filterCategory]);

  useEffect(() => {
    const newProducts = !!filterCost ? products && products.filter(
      p => p.cost === filterCost
    ) : products;
    setProductsFilter(newProducts);
    setFilterCategory("");
  }, [filterCost]);

 

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [redeemTitle, setRedeemTitle] = useState("");
  const [redeemMsj, setRedeemMsj] = useState("");

  const pages = usePagination(productsFilter, 16);
  const [page, setPage] = useState(1);
  const pageNumber =
    productsFilter.length > 16 ? Math.ceil(productsFilter.length / 16) : 1;

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

  const handleSelectCategory = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleSelectCost = (event) => {
    setFilterCost(event.target.value);
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
        <DialogTitle id="alert-dialog-title">{redeemTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {redeemMsj}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            autoFocus
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
      <div className="box-center-2">
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Precio
          </InputLabel>
          <Select
            labelId="category-select-outlined-label"
            id="demo-simple-select-outlined"
            value={filterCost}
            onChange={handleSelectCost}
            label="Categoria"
          >
            <MenuItem value="" key={uuidv4()}>
              <em>Ninguno</em>
            </MenuItem>
            {!!arrayCost &&
              arrayCost.map((cost) => {
                return (
                  <MenuItem value={cost} key={uuidv4()}>
                    {cost}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Categoria
          </InputLabel>
          <Select
            labelId="category-select-outlined-label"
            id="demo-simple-select-outlined"
            value={filterCategory}
            onChange={handleSelectCategory}
            label="Categoria"
          >
            <MenuItem value="" key={uuidv4()}>
              <em>Ninguno</em>
            </MenuItem>
            {!!arrayCategory &&
              arrayCategory.map((category) => {
                return (
                  <MenuItem value={category} key={uuidv4()}>
                    {category}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
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
                      <Typography gutterBottom variant="h6" component="h6">
                        ${product.cost}
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
