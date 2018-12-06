import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  var titleStyles = {
    margin: 0,
    fontFamily: "'Fira Sans', sans-serif",
  }
  var quoteStyles = {
    borderBottom: '1px solid #d9d9d9',
    padding: '1em 1.5em',
    fontSize: '1.25em',
    lineHeight: '1.4em',
  }
  var authorStyles = {
    color: '#b3b3b3',
  };
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
          <h1 style={titleStyles}><a href="">{props.title}</a></h1>
          <h2 style={quoteStyles}>“{props.quote}”</h2>
          <p style={authorStyles}>{props.author} - posted on {props.created_on}</p>
          <p>{props.content}</p>
          //    LINK TO EDIT COMPONENT 
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  created_on: PropTypes.string.isRequired,
};

export default Post;
