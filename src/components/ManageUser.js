import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Slider, Paper, Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootPaper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  rootAlert: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    marginLeft: theme.spacing(20),
    paddingLeft: theme.spacing(5),
    marginRight: theme.spacing(20),
    paddingRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  container: {
    paddingTop: theme.spacing(20),
  },
  paper: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    marginLeft: theme.spacing(20),
    paddingLeft: theme.spacing(5),
    marginRight: theme.spacing(20),
    paddingRight: theme.spacing(5),
    backgroundColor: "rgba(143, 178, 67, 0.7)",
  },
}));

const marks = [
  {
    value: 1000,
    label: "1000",
  },
  {
    value: 5000,
    label: "5000",
  },
  {
    value: 7500,
    label: "7500",
  },
];

function valuetext(value) {
  return `${value}`;
}

const ManageUser = () => {
  const [value, setValue] = React.useState(1000);
  const {
    providerValue: { addPoints },
  } = useContext(AppContext);

  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={classes.container}>
        <h1>Agregar Más Puntos</h1>
        <div className={classes.root}>
          <Alert severity="info" className={classes.rootAlert}>
            <AlertTitle>Recuerda: </AlertTitle>
            Recuerda que solo puedes agregar 1000, 5000 o 7500 puntos :: Vas a
            agregar: <strong>{value} </strong>
          </Alert>
          <Paper elevation={3} className={classes.paper}>
            <Slider
              defaultValue={1000}
              onChange={handleChange}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="on"
              marks={marks}
              min={0}
              max={7500}
            />
          </Paper>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addPoints(value)}
          >
            Agregar: <strong> {value} </strong> 💰
          </Button>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
