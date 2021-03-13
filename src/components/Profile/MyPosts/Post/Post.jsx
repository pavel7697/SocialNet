import React from "react";
import p from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={p.posts}>
      <img src="https://png.pngtree.com/element_our/png_detail/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227484.jpg" />
      {props.text}
      <div>
        {props.likes}
        <span>likes</span>
        <span> share</span>
      </div>
    </div>
  );
};

export default Post;
