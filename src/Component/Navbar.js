import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MovieFilterRoundedIcon from "@material-ui/icons/MovieFilterRounded";
import React, { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

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
            <Link
              to="/favorites"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
                paddingRight: "35px",
                fontStyle: "italic",
              }}
            >
              <FavoriteIcon style={{ color: "red" }} />
              <Typography>Favorites</Typography>
            </Link>
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
