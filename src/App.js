import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Favorites from "./Component/Favorites";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  //then((data) => console.log(data));
  //componentDidMount() {
  // fetch("http://www.omdbapi.com/?i=tt3896198&apikey=86385d2f&s=Spider-Man")
  // .then((response) => response.json())
  //.then((data) => console.log(data));
  //}

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#f7f5f5",
          height: "100vh",
          padding: "20px 250px",
        }}
      >
        <Navbar />
        <Banner />
        <Route path="/favorites" component={Favorites} />
      </div>
    </BrowserRouter>
  );
}

export default App;
