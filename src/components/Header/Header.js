import styles from "./Header.module.css";
import moonIcon from "../../assets/images/icon-moon.svg";
import sunIcon from "../../assets/images/icon-sun.svg";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function darkMobeBtnClicked() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }
  return (
    <div className={styles.header}>
      <h1>TODO</h1>
      <img
        className={styles.darkMobeBtn}
        onClick={darkMobeBtnClicked}
        src={darkMode ? sunIcon : moonIcon}
        alt=""
      />
    </div>
  );
}
