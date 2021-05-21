import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";

function App() {
  //then((data) => console.log(data));
  //componentDidMount() {
  // fetch("http://www.omdbapi.com/?i=tt3896198&apikey=86385d2f&s=Spider-Man")
  // .then((response) => response.json())
  //.then((data) => console.log(data));
  //}

  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
