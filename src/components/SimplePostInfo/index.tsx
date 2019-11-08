import React, { PureComponent } from 'react';
import { PostInfo } from '@/models/post';

interface SimplePostInfoProps {
  post: PostInfo;
}

class SimplePostInfo extends PureComponent<SimplePostInfoProps> {
  render() {
    const { post } = this.props;
    return <div>{post.title}</div>;
  }
}

export default SimplePostInfo;
