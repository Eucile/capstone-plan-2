import React from 'react';
import { Redirect } from 'react-router';

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
        <button className="delete-button" onClick={this.deletePost}>DELETE</button>
      </div>
    )
  }
}

export default PostDisplayPage;
