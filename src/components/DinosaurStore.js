import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { makeStyles } from "@material-ui/core/styles";
// import { MenuIcon, MoreIcon, SearchIcon } from "@material-ui/icons/Menu";
import Logo from '../assets/logo.png'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Toolbar,
  AppBar,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootbar: {
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    background: 'linear-gradient(45deg, #8fb243 30%, #d36c1c 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 10px',
    zIndex: 1000,
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  container: {
    paddingTop: theme.spacing(20),
  }
}));

const DinosaurStore = () => {
  // function FormRow() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={4}>
  //         <Paper className={classes.paper}>item</Paper>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Paper className={classes.paper}>item</Paper>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Paper className={classes.paper}>item</Paper>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }
  const classes = useStyles();
  return (
    <>
      <div className={classes.rootbar}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <img src={Logo} alt="logo"/>
            <Typography className={classes.title} variant="h5" noWrap>
              Dinosaur Store
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.container}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <ProductList title="Libros por leer" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

function ProductList({ title }) {
  const { products } = useContext(AppContext);
  
  const classes = useStyles();
  return (
    // <div>
    <>
      {products.map((product) => {
        return (
          <React.Fragment key={product._id}>
            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    key={product._id}
                    component="img"
                    height="140"
                    image={product.img.url}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      >
                      {product.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </React.Fragment>
        );
      })}
    </>
  );
}

// function ListaLibros({ title, readCondition }) {
//   const { libros, setLibros } = useContext(AppContext);
// const handleChange = event => {
//   event.persist();
//   const { id, checked } = event.target;
//   const modifiedLibros = libros.map(libro => {
//     if (libro.id === id) {
//       return {
//         ...libro,
//         leido: checked
//       };
//     }
//     return libro;
//   });
//   setLibros(modifiedLibros);
// };
//   return (
//     <div>
//       <div className="context-title">{title}</div>
//       <div className="flex column libros">
//         {/* {libros
//           .filter(libro => libro.leido === readCondition)
//           .map(libro => {
//             return (
//               <div key={libro.id} className="libro">
//                 <span>{libro.nombre}</span>
//                 <input
//                   id={libro.id}
//                   onChange={handleChange}
//                   checked={libro.leido}
//                   className="check"
//                   type="checkbox"
//                 />
//               </div>
//             );
//           })} */}
//       </div>
//     </div>
//   );
// }

export default DinosaurStore;
