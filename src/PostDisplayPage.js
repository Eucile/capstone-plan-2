import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class PostDisplayPage extends React.Component{
  constructor() {
    super();
    this.state = {
      isDeleted: false
    };
    this.deletePost = this.deletePost.bind(this);
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
        {this.props.match.params.id}
        <div className="edit-button"><Link to={'/edit/' + this.props.match.params.id}>EDIT</Link></div>
        <button className="delete-button" onClick={this.deletePost}>DELETE</button>
      </div>
    )
  }
}

export default PostDisplayPage;
