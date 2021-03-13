import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  console.log(props);
  let newPost = React.createRef();

  let addPost = () => {
    // let text = newPost.current.value;
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={props.newPostText}
            onChange={onPostChange}
            ref={newPost}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={p.posts}>
        {props.posts.map((post) => (
          <Post text={post.message} likes={post.likes} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
