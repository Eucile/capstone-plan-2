import React from 'react';
import { v4 } from 'uuid';
import moment from 'moment';
import { Redirect } from 'react-router';
import './assets/styles/NewPostForm.css';

class NewPostForm extends React.Component{
  constructor() {
    super();
    this.state = {
      isPosted: false
    };
    this.handleNewPostFormSubmission = this.handleNewPostFormSubmission.bind(this);
  }


  handleNewPostFormSubmission(event) {
    event.preventDefault();
    let timeStamp = moment().format('MM-DD-YYYY');
    let post = {
      title: this._title.value,
      tagline: this._tagline.value,
      author: this._author.value,
      content: this._content.value,
      id: v4(),
      created_on: timeStamp,
      updated_on: timeStamp
    }
    this.props.posts.push(post).then(
      this.setState({isPosted: true})
    )
  }

  render () {
    if (this.state.isPosted === true) {
      return (<div><Redirect to='/' /></div>)
    }
    return (
      <div>
        <form className="form-box" onSubmit={this.handleNewPostFormSubmission}>
          <div>
            <input
              type='text'
              id='title'
              placeholder='Title:'
              ref={(input) => {this._title = input;}}/>
            <input
              type='text'
              id='tagline'
              placeholder='tagline:'
              ref={(input) => {this._tagline = input;}}/>
            <input
              type='text'
              id='author'
              placeholder='Author name:'
              ref={(input) => {this._author = input;}}/>
          </div>
          <textarea className="content-box"
            id='content'
            placeholder='Content:'
            ref={(textarea) => {this._content = textarea;}}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewPostForm;
