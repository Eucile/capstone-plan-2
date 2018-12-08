import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return(
    <div className="black-box">
    <style jsx>{`
      .black-box {
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        background: white;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        padding: 3em;
        width: 95%;
      }
    `}</style>
      {props.postList.map((post, index) =>
        <Post
          title={post.title}
          author={post.author}
          tagline={post.tagline}
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
