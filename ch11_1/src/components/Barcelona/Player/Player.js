import React, { Fragment, useState } from "react";
import Cart from "../../Cart/Cart";
import styles from "./Player.module.css";

const Player = (props) => {
  const [modal, setModal] = useState(false);

  return (
    <Fragment>
      {props.players.map((player) => {
        return (
          <Fragment>
            <div className={styles.container}>
              <div className={styles.player}>
                <h4>{player.name}</h4>
                <p>{`${player.price}억`}</p>
              </div>
              <button className={styles.btn} onClick={props.onConfirm}>
                Buy
              </button>
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Player;
