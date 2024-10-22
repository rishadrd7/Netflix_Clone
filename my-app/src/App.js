import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Titlecard from "./Components/TitleCards/Titlecard";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Titlecard/>
      
    </div>
  );
}

export default App;
