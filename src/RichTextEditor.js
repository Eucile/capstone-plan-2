import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import './assets/styles/Editor.css';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class RichTextEditor extends Component {
  constructor(props) {
    super(props)
    this.initialized = false
  }
  state = {
    editorState: EditorState.createEmpty(),
  }

  componentWillReceiveProps(newProps) {
    if(!this.initialized && newProps.initialState != '') {
      this.initialized = true
      const contentState = ContentState.createFromBlockArray(htmlToDraft(newProps.initialState).contentBlocks);
      this.setState({
        editorState: EditorState.createWithContent(contentState)
      });
    }
  }

  onEditorStateChange = (editorState) => {
    this.props.handleStateChange && this.props.handleStateChange(this.getContent(), 'content')
    this.setState({
      editorState,
    });
  };

  getContent = () => {
    return draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="editor">
        <Editor
          editorState={editorState}
          placeholder='Edit content below...'
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

export default RichTextEditor
