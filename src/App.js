import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainBlog from "./MainBlog";
import { Switch, Route } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import LogInForm from './LogInForm';
import firebase from 'firebase';
import constants from './constants';
import './assets/styles/App.css';


const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);
var db = firebase.database();
const posts = db.ref('posts');
const users = db.ref('users');

function App(){
  return (
    <div className="mainDiv">
    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
        }
    `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={() => <MainBlog posts={posts} />} />
        <Route path='/NewPostForm' component={() => <NewPostForm posts={posts} />}/>
        <Route path='/LogInForm' component={() => <LogInForm users={users}/>} />
        //   ADD EDIT FORM ROUTING
        // ADD POST DISPLAY PAGE ROUTING
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
