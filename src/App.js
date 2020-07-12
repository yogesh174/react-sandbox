import React from "react";
import "./styles.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.root} variant="h3" color="secondary">
        Hello there from 123{" "}
      </Typography>
      <Button variant="outlined" color="secondary">
        Hello 123
      </Button>
    </div>
  );
}
