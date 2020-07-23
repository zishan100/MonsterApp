import React from "react";

import "./style.css";

export const SearchBox = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={props.placeholder}
       onChange={props.SearchHandle}
    ></input>
  );
};
