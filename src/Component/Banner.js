import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, fade } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Card, Grid, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { fetchData, fetchDataRequest, favoritesHandler } from "../Redux/Action";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { MovieCreation } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  Input: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    margin: "150px 0 60px 0",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "45%",
    borderRadius: "25px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    transition: "width 0.5s",
    "&:hover": {
      width: "55%",
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: "10",
  },
  paper: {
    padding: theme.spacing(3),
    height: "100%",
  },
  divider: {
    width: "50%",
    color: "black",
    marginBottom: "60px",
  },
  item: {
    padding: "0",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function Banner({
  isloading,
  movies,
  movieTitle,
  favoritesHandler,
  fetchData,
  fetchDataRequest,
}) {
  const classes = useStyles();

  const changeHandler = (e) => {
    fetchDataRequest(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetchData(movieTitle);
  };

  return (
    <div className={classes.banner}>
      <div className={classes.Input}>
        <Paper component="form" className={classes.root} elevation="5">
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={handleClick}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search Movies"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={changeHandler}
          />
        </Paper>
        <Divider className={classes.divider} />
      </div>
      <Grid container spacing={8}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} className={classes.item}>
            <Card
              className={classes.card}
              style={{
                boxShadow: "7px 10px 16px 0px rgba(160,141,141,0.71)",
                borderRadius: "7px",
              }}
            >
              <CardMedia
                image={movie.Poster}
                component="img"
                style={{ height: 300 }}
              />
              <CardContent
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Typography>{movie.Title}</Typography>
                <FavoriteIcon
                  onClick={() => favoritesHandler(movie)}
                  style={{ cursor: "pointer" }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => ({
  movieTitle: state.movieTitle,
  isLoading: state.isLoading,
  movies: state.movies,
  error: state.error,
  favorites: state.favorites,
});
const mapDispatchToProps = (dispatch) => ({
  fetchDataRequest: (payload) => dispatch(fetchDataRequest(payload)),
  fetchData: (payload) => dispatch(fetchData(payload)),
  favoritesHandler: (payload) => dispatch(favoritesHandler(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
