import React from "react";
import PropTypes from "prop-types";
import "./postList.scss"

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultPropTypes = {
  posts: [],
};

function PostList(props) {
  const { posts } = props;

  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
