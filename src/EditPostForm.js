import React from 'react';
import { v4 } from 'uuid';
import moment from 'moment';
import { Redirect } from 'react-router';
import './assets/styles/EditPostForm.css';

class EditPostForm extends React.Component{
  constructor() {
    super();
    this.state = {
      isEdited: false
    };
  }

  render () {
    if (this.state.isEdited === true) {
      return (<div><Redirect to='/' /></div>) //REDIRECT TO PostDisplayPage
    }
    return (
      <div>
        <form className="form-box" onSubmit={this.handleEditPostFormSubmission}>
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

export default EditPostForm;