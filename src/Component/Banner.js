import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, fade } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Card, Grid, Typography } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { fetchData, fetchDataRequest, fetchDataSuccess } from "../Redux/Action";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: fade(theme.palette.text.secondary, 0.02),
    height: "100vh",
    padding: "20px 200px",
  },
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
    padding: 10,
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
}));

function Banner({ isloading, data, movieTitle, fetchData, fetchDataRequest }) {
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
            onSubmit={handleClick}
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
        {!data ? (
          <div>Loading...</div>
        ) : (
          <Fragment>
            {data.map((val) => (
              <Grid item xs={12} sm={6} md={4}>
                <card>
                  <CardActionArea>
                    <CardMedia
                      image={val.Poster}
                      component="img"
                      style={{ height: 300 }}
                    />
                    <CardContent>
                      <Typography>{val.Title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </card>
              </Grid>
            ))}
          </Fragment>
        )}
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => ({
  movieTitle: state.movieTitle,
  isLoading: state.isLoading,
  data: state.data,
  error: state.error,
});
const mapDispatchToProps = (dispatch) => ({
  fetchDataRequest: (payload) => dispatch(fetchDataRequest(payload)),
  fetchData: (payload) => dispatch(fetchData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
