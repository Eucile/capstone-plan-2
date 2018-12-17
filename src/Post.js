import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './assets/styles/Post.css';
import "typeface-roboto";
import { convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

function Post(props) {
  return(
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
        .titleStyles {
          margin: 0;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          font-size: 30px;
          padding: .1em;
        }
        .titleStyles:hover {
          background: black;
          transition: 0.5s;
        }
        .taglineStyles {
          margin-top: 8px;
          background: #b7b8bc;
          color: white;
          padding-left: 1em;
        }
        .authorStyles {
          margin-top: 10px;
          padding-left: 1em;
        }
        .blurb-box {
          width: 400px;
          height: 300px;
          border-bottom: 1px solid #d9d9d9;
          background: white;
          color: black;
          margin: 1em;
          background: #f8f8f8;
        }
        .p-text {
          padding: 1em;
        }
        .content-hidden {
          text-overflow: ellipsis;
          max-height: 100px;
          overflow: hidden;
          white-space: nowrap;
        }
        .read-more {
          text-decoration;
          font-weight: 700;
          color: black;
          float: right;
          padding-right: 2em;
        }
        .read-more:hover {
          color: #00A9D6;
          transition: 0.7s;
        }
      `}</style>
      <div className="blurb-box">
          <Link to={'/post/'+ props.id}><h1 className="titleStyles">{props.title}</h1></Link>
          <p className="authorStyles">posted by <strong>{props.author}</strong> — on {props.created_on}</p>
          <p className="content-hidden p-text" dangerouslySetInnerHTML={{__html: props.content}} ></p>
          <Link to={'/post/'+ props.id}><span className="read-more">Read more...</span></Link>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
  created_on: PropTypes.string.isRequired,
};

export default Post;
