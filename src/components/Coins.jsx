import React from "react";
import Coinitem from "./Coinitem";
import "./coins.css";

const Coins = (props) => {
  return (
    <div className="container">
      <div className="all-coins">
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt cap</p>
        </div>
        {props.coins.map((coin) => {
          return <Coinitem coins={coin} key={coin.id} />;
        })}
      </div>
    </div>
  );
};

export default Coins;
