import React, { Fragment, useState } from "react";
import Player from "./Player/Player";
import styles from "./CurrentPlayer.module.css";

const currentPlayer = [
  { id: "CB", name: "PlayerA", price: 30 },
  { id: "MF", name: "PlayerB", price: 40 },
  { id: "ST", name: "PlayerC", price: 50 },
];

const CurrentPlayer = (props) => {
  const playerHandler = () => {};

  const [player, setPlayer] = useState(currentPlayer);

  return (
    <div className={styles.container}>
      <section className={styles.currentPlayer}>
        <h3>Player List</h3>
        <Player players={player} onConfirm={props.onConfirm}></Player>
      </section>
    </div>
  );
};

export default CurrentPlayer;
