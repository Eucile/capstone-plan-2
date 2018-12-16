import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return(
    <div className="black-box">
    <style jsx>{`
      .black-box {
        display: flex;
        justify-content: space-around;
        flex-flow: row wrap;
        background: white;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        width: 95%;
        margin: 20px auto;
      }
    `}</style>
      {props.postList.map((post, index) =>
        <Post
          title={post.title}
          author={post.author}
          tagline={post.tagline}
          id={post.id}
          content={post.content}
          created_on={post.created_on}
          key={post.id}
        />
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
