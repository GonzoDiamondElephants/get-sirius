import React from "react";
import { Link } from 'react-router-dom';

function HomeButton() {
  const styles = {
    button: {
      top: 0,
      position: "fixed",
      left: 0,
      width: "30px",
      height: "auto",

    }
  };
  return (
    <div style={styles.button}>
    <Link to='/'>
        <img id="homeButton" src="https://www.pinclipart.com/picdir/big/317-3178911_hogwarts-icon-free-download-and-vector-png-hogwarts.png" alt="home button" />
    </Link>
    </div>
  );
}

export default HomeButton;
