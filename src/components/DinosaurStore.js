import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
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
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  rootButton: {
    '& > *': {
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

const DinosaurStore = () => {
  const classes = useStyles();
  return (
    <>      
      <div className={classes.container}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={4}>
            <ProductList title="Libros por leer" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

function ProductList({ title }) {
  const { providerValue: {products = []}, providerValue: {userData = {}} } = useContext(AppContext);
  const classes = useStyles();
  const pages = usePagination(products, 16);
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    pages.jump(value);
  };

  return (
    <>
      {pages.currentData() && pages.currentData().map((product) => {
        return (
          <React.Fragment key={product._id}>
            <Grid item xs={3}>
              <Card className={classes.root} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    key={product._id}
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
                <CardActions>
                {userData.points > product.cost &&
                  <Button variant="contained" color="primary">
                  Canjear
                </Button>
                }
                {userData.points < product.cost &&
                  <h2>
                    No Canjear
                  </h2>
                }
                {/* {if (userData.points > product.cost) {
                  <div>userData.points {userData.points}</div>
                } else {
                  <div>product.cost {product.cost}</div>
                }} */}
                
                  {/* <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          </React.Fragment>
        );
      })}
      <div className="box-center">
        <Pagination count={2} page={pages.currentPage} onChange={handleChange} />
      </div>
    </>
  );
}

export default DinosaurStore;
