import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Slider, Paper, Button  } from "@material-ui/core";

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
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  container: {
    paddingTop: theme.spacing(20),
  },
  paper: {
    marginLeft: theme.spacing(20),
    paddingLeft: theme.spacing(5),
    marginRight: theme.spacing(20),
    paddingRight: theme.spacing(5),
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

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value);
}

const ManageUser = () => {
  const [value, setValue] = React.useState(1000);
  const {
    providerValue: { userData = {}, addPoints }
  } = useContext(AppContext);

  const providerValue = useContext(AppContext);
  // const headers = providerValue.headers;
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={classes.container}>Agregar Más Puntos</div>
      <div className={classes.root}>
        <Typography id="discrete-slider-restrict" gutterBottom>
          Restricted values {value}
        </Typography>
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
        <Button variant="contained" color="primary"  onClick={() => addPoints(value)}>
          Agregar:  <strong> {value} </strong> 💰
        </Button>
      </div>
    </>
  );
};

export default ManageUser;
