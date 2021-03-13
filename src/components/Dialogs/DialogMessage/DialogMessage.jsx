import React from "react";
import { NavLink } from "react-router-dom";
import d from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={d.item}>{props.text}</div>;
};

export default Message;
