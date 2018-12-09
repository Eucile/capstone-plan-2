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
        background: rgb(167,167,167, 0.3);
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        padding: 2em;
        width: 90%;
        margin: 0 auto;
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
