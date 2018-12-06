import React from 'react';
import { v4 } from 'uuid';
import moment from 'moment';
import { Redirect } from 'react-router'

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
      quote: this._quote.value,
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
        <style jsx>{`
          input, textarea {
            height: auto;
            border: 1px solid #8c8c8c;
            padding: 10px 0px 7px 10px;
            margin: 1em;
            color: #262626;
            font-size: .75em;
            line-height: 1;
            font-weight: 700;
            letter-spacing: .1em;
            text-transform: uppercase;
          }
          button {
            color: rgb(38, 38, 38);
            border-radius: 25px;
            padding: 10px 20px;
            text-decoration: none;
            display: inline-block;
            border: none;
            font-weight: bold;
          }
          .form-box {
            background: rgba(0, 0, 0, .7);
            padding: 1.25em 5.882352941176% 20px;
            margin: 0 auto;
          }
          .content-box {
            width: 87%;
            height: 300px;
          }
        `}</style>
        <form className="form-box" onSubmit={this.handleNewPostFormSubmission}>
          <div>
            <input
              type='text'
              id='title'
              placeholder='Title:'
              ref={(input) => {this._title = input;}}/>
            <input
              type='text'
              id='quote'
              placeholder='Quote:'
              ref={(input) => {this._quote = input;}}/>
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
