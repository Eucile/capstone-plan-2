import React from 'react';
import { v4 } from 'uuid';
import moment from 'moment';
import { Redirect } from 'react-router';
import './assets/styles/EditPostForm.css';

class EditPostForm extends React.Component{
  constructor() {
    super();
    this.state = {
      isEdited: false,
      title: '',
      tagline: '',
      author: '',
      content: ''
    };
  }

  componentWillMount() {
    this.props.database.ref('posts/' + this.props.match.params.id).once('value').then((snapshot) => {
      let post = snapshot.val();
      this.setState({
        title: post.title,
        tagline: post.tagline,
        author: post.author,
        content: post.content,
        created_on: post.created_on
      })
    });
  }

  handleStateChange = (value, key) => {
    let stateObj = {};
    switch(key) {
      case 'title':
        stateObj = {title: value}
        break;
      case 'tagline':
        stateObj = {tagline: value}
        break;
      case 'author':
        stateObj = {author: value}
        break;
      case 'content':
        stateObj = {content: value}
        break;
      default:
        stateObj = {};
    }
    this.setState(stateObj);
  }

  handleEditPostFormSubmission = (event) => {
    event.preventDefault();
    let timeStamp = moment().format('MM-DD-YYYY HH:mmA');
    let post = {
      title: this.state.title,
      tagline: this.state.tagline,
      author: this.state.author,
      content: this.state.content,
      id: this.props.match.params.id,
      created_on: this.state.created_on,
      updated_on: timeStamp
    }
    this.props.database.ref('posts/' + this.props.match.params.id).set(post).then(
      this.setState({isEdited: true})
    )
  }

  render () {
    if (this.state.isEdited === true) {
      return (<div><Redirect to={'/post/' + this.props.match.params.id} /></div>) 
    }
    return (
      <div>
        <form className="form-box" onSubmit={this.handleEditPostFormSubmission}>
          <div>
            <input
              type='text'
              id='title'
              value= {this.state.title}
              placeholder='Title:'
              onChange={e => {this.handleStateChange(e.target.value, 'title')}}
            />
            <input
              type='text'
              id='tagline'
              value= {this.state.tagline}
              placeholder='tagline:'
              onChange={e => {this.handleStateChange(e.target.value, 'tagline')}}
            />
            <input
              type='text'
              id='author'
              value= {this.state.author}
              placeholder='Author name:'
              onChange={e => {this.handleStateChange(e.target.value, 'author')}}
            />
          </div>
          <textarea className="content-box"
            id='content'
            value= {this.state.content}
            placeholder='Content:'
            onChange={e => {this.handleStateChange(e.target.value, 'content')}}
          />
          <button type='submit'>Save</button>
        </form>
      </div>
    )
  }
}

export default EditPostForm;
