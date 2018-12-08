import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/Post.css';
import "typeface-roboto";

function Post(props) {
  return(
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
        .titleStyles {
          margin: 0;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
        }
        .blurb-box {
          width: 390px;
          height: 250px;
          border-bottom: 1px solid #d9d9d9;
          background: white;
          color: black;
          padding: 1em;
          margin: 1em;
          overflow: hidden;
          box-shadow: 0px 10px 30px rgba(0,0,0, 1.3);
        }
        .read-more {
          text-decoration;
          font-weight: 500;
          color: black;
        }
      `}</style>
      <div className="blurb-box">
          <h1 className="titleStyles">{props.title}</h1>
          <h2 className="taglineStyles">“{props.tagline}”</h2>
          <p className="authorStyles">{props.author} - posted on {props.created_on}</p>
          <p>{props.content}</p>
          <a className="read-more" href="#">Read more...</a>
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
