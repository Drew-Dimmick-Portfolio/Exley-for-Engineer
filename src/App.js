import React, { useState } from "react";
import './App.css';
import Menu from './Menu.js';
import Header from './Header.js';
import Content from './Content.js';
import Footer from "./Footer.js";

function App() {

  const [pageIndex, setPageIndex] = useState(0);

    function UpdatePageIndex(newIndex) {
      console.log("Updating index");
        setPageIndex(newIndex);
    }

  return (
    <div>
      <Header />
      <div className="App">
        <Menu updatePageIndex={ UpdatePageIndex }/>
        <Content pageIndex={ pageIndex }/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
