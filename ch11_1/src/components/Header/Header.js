import React from "react";
import styles from "./Header.module.css";
import bg from "../../img/barcelona.jpg";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.nav}>
        <h2>Barcelona</h2>
        <a href="#">Your Cart</a>
      </div>
      <div className={styles["header-main"]}>
        <img src={bg} alt="bg"></img>
        <div className={styles["header-sub"]}>
          <h2>Barcelona's Transfer Market</h2>
          <p>
            Barcelona is currently facing a crisis. Careful recruitment is
            needed to escape this crisis. Please decide which player to buy The
            total transfer fee is fixed and you have to use it only within that.
            Purchased competitors will be replaced with their respective
            position players
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
