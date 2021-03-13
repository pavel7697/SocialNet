import React from "react";
import { NavLink } from "react-router-dom";
import n from "./Navbar.module.css";
import Friend from "./Friends/Friend";

let res = `${n.item} ${n.active}`;
console.log(n);

const Navbar = (props) => {
  return (
    <nav className={n.nav}>
      <div className={`${n.item} ${n.active}`}>
        <NavLink to="/profile" activeClassName={n.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={n.item}>
        <NavLink to="/dialogs" activeClassName={n.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={n.item}>
        <NavLink to="/news" activeClassName={n.activeLink}>
          News
        </NavLink>
      </div>
      <div className={n.item}>
        <NavLink to="/music" activeClassName={n.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={n.item}>
        <NavLink to="/settings" activeClassName={n.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={n.friends}>
        <div className={n.friends_header}>Friends</div>
        <div className={n.friendList}>
          {props.friends.friends.slice(0, 3).map((friend) => (
            <Friend name={friend.name} id={friend.id} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
