import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MovieFilterRoundedIcon from "@material-ui/icons/MovieFilterRounded";
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={{ display: "block" }}>
        <AppBar>
          <Toolbar>
            <MovieFilterRoundedIcon fontSize="large" />
            <Typography variant="h6" style={{ flexGrow: "1" }}>
              MovieFlex
            </Typography>
            <Typography style={{ fontStyle: "italic" }}>
              Get Unlimited Entertainment
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Navbar;
