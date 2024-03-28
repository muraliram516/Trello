import React from 'react';
import {Bookmark} from "@mui/icons-material";
import "./styles.css";
const Navbar = () => {
  return (
  <nav>
    <div className="container">
        <Bookmark />
            <h1>Trello Board Clone </h1>
    </div>
  </nav>
  );  
};

export default Navbar;