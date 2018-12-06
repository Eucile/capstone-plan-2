import React from 'react';
import NewPostForm from './NewPostForm';

class NewPostControl extends React.Component{
  render() {
      return(
        <div>
        <NewPostForm
          posts={this.props.posts}
        />
        </div>
      );
  }
}

export default NewPostControl;
