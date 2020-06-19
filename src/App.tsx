import React from "react";
import withStyles, { WithStylesProps } from "react-jss";
import RandomRadii from "./RandomRadii";
import HoverFill from "./HoverFill";
import { Link, Router } from "@reach/router";
import Focus from "./Focus";
import CircleOfCircles from "./CircleOfCircles";
import HomePage from "./HomePage";
import TileGrid from "./TileGrid";

const styles = {
  App: {
    width: "100vw",
    position: "relative"
  },
  links: {
    display: "flex",
    padding: "20px"
  },
  link: {
    padding: "10px",
    fontSize: "1.1em",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
} as const;

type Props = WithStylesProps<typeof styles>;

const App: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.App}>
      <div className={classes.links}>
        <Link to="/random-radii">
          {" "}
          <span className={classes.link}> Random Radii </span>
        </Link>
        <Link to="/hover-fill">
          {" "}
          <span className={classes.link}> Hover Fill </span>{" "}
        </Link>
        <Link to="/focus">
          {" "}
          <span className={classes.link}> Focus </span>{" "}
        </Link>
        <Link to="/circle-of-circles">
          {" "}
          <span className={classes.link}> Circle of Circles </span>{" "}
        </Link>
        <Link to="/tile-grid">
          {" "}
          <span className={classes.link}> Tile Grid </span>{" "}
        </Link>
      </div>
      <Router>
        <HomePage path="/" />
        <RandomRadii path="/random-radii" />
        <HoverFill path="/hover-fill" />
        <Focus path="/focus" />
        <CircleOfCircles path="/circle-of-circles" />
        <TileGrid path="/tile-grid" />
      </Router>
    </div>
  );
};

export default withStyles(styles)(App);
