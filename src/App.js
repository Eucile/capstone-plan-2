import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainBlog from "./MainBlog";
import { Switch, Route } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import LogInForm from './LogInForm';
import UserDashboard from './UserDashboard';
import PostDisplayPage from './PostDisplayPage';
import EditPostForm from './EditPostForm';
import SignupForm from './SignupForm';
import firebase from 'firebase';
import constants from './constants';
import './assets/styles/App.css';

const { firebaseConfig } = constants;

class App extends React.Component{
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount () {
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.database();
    this.posts = this.db.ref('posts');
    this.setAuthObserver();
  }

  componentWillUpdate () {
    this.getCurrentUser();
  }

  setAuthObserver = () => {
    return firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  getCurrentUser = () => {
    if(this.state.user) {
      this.db.ref('users/' + this.state.user.uid).once('value').then((snapshot) => {
        this.userinfo = snapshot.val();
      });
    }
  }

  render() {
    return (
      <div className="mainDiv">
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
          }
      `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={() => <MainBlog userinfo={this.userinfo} posts={this.posts} user={this.state.user} />} />
          <Route path='/new' component={() => <NewPostForm database={this.db} />} />
          <Route path='/login' component={() => <LogInForm user={this.state.user} firebase={firebase}/>} />
          <Route path='/signup' component={() => <SignupForm user={this.state.user} firebase={firebase}/>} />
          <Route path='/user' component={() => <UserDashboard user={this.state.user} firebase={firebase} />} />
          <Route path='/edit/:id' component={(props) => <EditPostForm database={this.db} {...props } />} />
          <Route path='/post/:id' component={(props) => <PostDisplayPage database={this.db} {...props } />} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
