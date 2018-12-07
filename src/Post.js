import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/Post.css';

function Post(props) {
  return(
    <div className="black-box">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
        .black-box {
          background: black;
          font-family: 'Nunito Sans', sans-serif;
          padding: 2em;
        }
      `}</style>
      <div>
          <h1 className="titleStyles"><a href="">{props.title}</a></h1>
          <h2 className="taglineStyles">“{props.tagline}”</h2>
          <p className="authorStyles">{props.author} - posted on {props.created_on}</p>
          <p>{props.content}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  created_on: PropTypes.string.isRequired,
};

export default Post;
