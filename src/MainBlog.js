import React from "react";
import MainContent from "./MainContent";
import PostList from './PostList';
import { Link } from 'react-router-dom';

class MainBlog extends React.Component{

  getPosts () {
  let posts = [];
  this.props.posts.orderByChild("created_on").on("child_added", function(snapshot) {
  posts.push(snapshot.val());
  });
  return posts.reverse();
  }

  render(){
    var MainBlogStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      marginBottom: '4em',
      marginTop: '2em',
    };
    return (
      <div>
        <div style={MainBlogStyle}>
          <div>
          <MainContent/>
          <Link to="/NewPostControl">new post</Link>
          <PostList
          postList={this.getPosts()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBlog;
