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
    let timeStamp = moment().format('MM-DD-YYYY HH:mmA');
    let id = v4();
    let post = {
      title: this.title.value,
      tagline: this.tagline.value,
      author: this.author.value,
      content: this.content.value,
      id: id,
      created_on: timeStamp,
      updated_on: timeStamp
    }
    this.props.database.ref('posts/' + id).set(post).then(
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
          <div className="form-content">
            <div className="top-inputs">
              <input
                type='text'
                id='title'
                placeholder='Title:'
                ref={(input) => {this.title = input;}}/>
              <input
                type='text'
                id='tagline'
                placeholder='tagline:'
                ref={(input) => {this.tagline = input;}}/>
              <input
                type='text'
                id='author'
                placeholder='Author name:'
                ref={(input) => {this.author = input;}}/>
            </div>
          <textarea className="this-content-box"
            id='content'
            placeholder='Content:'
            ref={(textarea) => {this.content = textarea;}}/>
          </div>
          <button className="form-content dash-tab-3 submit" type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewPostForm;
