import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

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
      <div>
        {this.state.content}
        <div className="edit-button"><Link to={'/edit/' + this.props.match.params.id}>EDIT</Link></div>
        <button className="delete-button" onClick={this.deletePost}>DELETE</button>
      </div>
    )
  }
}

export default PostDisplayPage;
