import React from "react";
import { connect } from "react-redux";
import { makeStyles, fade } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => {});

function favorites({ favorites }) {
  const classes = useStyles();
  return (
    <Grid container spacing={8}>
      {favorites.map((movie) => (
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
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
const mapStateToProps = (state) => {
  favorites: state.favorites;
};
export default connect(mapStateToProps)(favorites);
