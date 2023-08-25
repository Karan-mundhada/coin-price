import React from "react";
import Coinitem from "./Coinitem";
import "./Coins.css";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";

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
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <Coinitem coins={coin} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
