import React from "react";
import PostList from './PostList';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './assets/styles/MainBlog.css';
import './assets/styles/UserDashboard.css';

class MainBlog extends React.Component{

  getPosts = () => {
    let posts = [];
    this.props.posts.orderByChild("created_on").on("child_added", function(snapshot) {
        posts.push(snapshot.val());
    });
    return posts.reverse();
  }

  getMyPosts = () => {
    let posts = [];
    let user_id = this.props.user && this.props.user.uid
    this.props.posts.orderByChild("created_on").on("child_added", function(snapshot) {
      if(snapshot.val().user_id == user_id) {
        posts.push(snapshot.val());
      }
    });
    return posts.reverse();
  }

  render(){
    return (
      <div>
        <div className="MainBlogStyle">
          <div>
            {this.props.userinfo && this.props.userinfo.usertype == 'admin' &&
            <div className="dash">
              <button className="default-button"><Link to="/new">new post</Link></button>
            </div>}
            <PostList postList={this.props.myStuff ? this.getMyPosts() : this.getPosts()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBlog;
