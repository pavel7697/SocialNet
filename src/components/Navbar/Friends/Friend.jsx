import React from "react";
import { NavLink } from "react-router-dom";
import f from "./Friend.module.css";

const Friend = (props) => {
  return (
    <NavLink to={`/friends/${props.id}`} className={f.activeLink}>
      <div className={f.item}>
        <div className={f.avabg}>
          <img
            src="http://placeimg.com/90/90/animals"
            alt=""
            className={f.ava}
          />
        </div>
        <div className={f.name}>{props.name}</div>
      </div>
    </NavLink>
  );
};

export default Friend;
