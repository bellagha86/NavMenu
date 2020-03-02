import React from "react";
import "./App.css";
import NavMenu from "./NavMenu";

function App() {
  let listArray = [
    {
      text: "Home",
      isActive: true,
      link: "#",
      subMenu: null
    },
    
    {
      text: "Service",
      isActive: false,
      link: "#",
      hover:"services",
      subMenu: ["For Students", "For Entrepreneurs", "For Lobbyists"]
    },
    {
      text: "Contact",
      isActive: false,
      link: "#",
      subMenu: null
    }
  ];
  
  return (
    <div className="App">
      <NavMenu navList={listArray} />
    </div>
  );
}

export default App;
