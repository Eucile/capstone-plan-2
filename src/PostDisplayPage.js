import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './assets/styles/Buttons.css';
import './assets/styles/PostDisplayPage.css';
import glyph from './assets/images/oneglyph.png';

class PostDisplayPage extends React.Component{
  constructor() {
    super();
    this.state = {
      isDeleted: false,
      title: '',
      tagline: '',
      author: '',
      content: ''
    };
    this.deletePost = this.deletePost.bind(this);
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

  deletePost(){
    this.props.database.ref('posts/' + this.props.match.params.id).remove().then(
      this.setState({isDeleted: true})
    )
  }

  render () {
    if (this.state.isDeleted === true) {
      return (<div><Redirect to='/' /></div>)
    }
    return (
      <div className="full-post-container">
        <div className="post-content">
          <h1>{this.state.title}</h1>
          <h3>posted by {this.state.author} on {this.state.created_on}</h3>
          <p dangerouslySetInnerHTML={{__html: this.state.content}}></p>
        </div>
        <div className="e-menu">
          <img src={glyph}/>
          <button className="defualt-button edit-button edit-tab"><Link to={'/edit/' + this.props.match.params.id}>edit</Link></button>
          <button className="default-button delete-button delete-tab" onClick={this.deletePost}>delete</button>
          <button className="defualt-button edit-button comment-tab"><Link to={'/edit/' + this.props.match.params.id}>comment</Link></button>
          <button className="default-button delete-button bookmark-tab" onClick={this.deletePost}>bookmark</button>
        </div>
      </div>
    )
  }
}

export default PostDisplayPage;
