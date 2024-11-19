import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        {/* <Projects /> */}
      </main>
      <Footer/>
    </div>
  );
};



export default App;
