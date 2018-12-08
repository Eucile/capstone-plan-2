import React from "react";
import PostList from './PostList';
import { Link } from 'react-router-dom';
import './assets/styles/MainBlog.css';
import './assets/styles/UserDashboard.css';

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
            <div className="dash">
              <button id="dash-button" type="submit"><Link to="/NewPostForm"><p>new post</p></Link></button>
              <button id="dash-button" type="submit"><Link to="/LogInForm"><p>log out</p></Link></button>
            </div>
            <PostList postList={this.getPosts()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBlog;
