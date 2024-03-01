import React from 'react';
import styles from "styles/App.module.scss"
import Header from "./components/Header";
import Slider from "./components/Slider";
import HeaderFirst from "./components/Header.first";

function App() {
  return (
    <div className={styles.root}>
        {/*<Header/>*/}
        <HeaderFirst/>
        <Slider/>
    </div>
  );
}

export default App;
