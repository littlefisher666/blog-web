import React, { Component } from 'react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import 'github-markdown-css';

export interface MarkdownProps extends ReactMarkdownProps {}

class Markdown extends Component<MarkdownProps> {
  componentDidMount() {}

  render() {
    return (
      <div className="markdown-body">
        <ReactMarkdown {...this.props} />
      </div>
    );
  }
}

export default Markdown;
