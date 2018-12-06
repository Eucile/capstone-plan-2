import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainBlog from "./MainBlog";
import { Switch, Route } from 'react-router-dom';
import NewPostControl from './NewPostControl';
import LogInForm from './LogInForm';
import firebase from 'firebase';
import constants from './constants';

const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);
var db = firebase.database();
const posts = db.ref('posts');
const users = db.ref('users');

function App(){
  var mainDiv = {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'rgba(0, 0, 0, .7)',
    color: 'white',
    padding: '1em',
  }
  return (
    <div style={mainDiv}>
    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
        body {
          margin: 0;
          background-image: url('https://user-images.githubusercontent.com/24794294/37569578-b9bcb63e-2ae4-11e8-84e3-eaaeeaab6ba0.png');
          height: 100vh;
        width: 100%;
        background-size: cover;
        display: table;
        background-attachment: fixed;
          font-family: 'Nunito Sans', sans-serif;
        }
        li {
          list-style: none;
        }
        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
          opacity: 0.6;
          color: #CCCCFF;
          transition: 0.7s;
        }
    `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={() => <MainBlog posts={posts} />} />
        <Route path='/NewPostControl' component={() => <NewPostControl posts={posts} />}/>
        <Route path='/LogInForm' component={() => <LogInForm users={users}/>} />
        //   ADD EDIT ROUTING 
        // ADD POST DISPLAY PAGE ROUTING
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
