import styles from "./banner.module.css";
import React from "react";
const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Local</span>
      </h1>
      <p className={styles.subtitle}>Discover Your local coffee Shops</p>
      <button className={styles.button} onClick={props.handleClick}>
        {props.buttontext}
      </button>
    </div>
  );
};
export default Banner;
