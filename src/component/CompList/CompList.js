import React from "react";

import { Card } from "../Card/Card";
import "./Comp.css";

export const CardList = (props) => {
  return (
    <div className="cardList">
      {props.monster.map((monster) => (
        <Card keys={monster.id} monster={monster} />
      ))}
    </div>
  );
};

// export default CardList;
