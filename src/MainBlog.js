import React from "react";
import MainContent from "./MainContent";
import PostList from './PostList';
import { Link } from 'react-router-dom';
import './assets/styles/MainBlog.css';

class MainBlog extends React.Component{

  getPosts () {
  let posts = [];
  this.props.posts.orderByChild("created_on").on("child_added", function(snapshot) {
  posts.push(snapshot.val());
  });
  return posts.reverse();
  }

  render(){
    return (
      <div>
        <div className="MainBlogStyle">
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
