import React, { PureComponent } from 'react';
import { PostInfo } from '@/models/post';
import PostTitle from '@/components/PostTitle';
import styles from './index.less';
import Markdown from '@/components/Markdown';

interface SimplePostInfoProps {
  post: PostInfo;
}

class SimplePostInfo extends PureComponent<SimplePostInfoProps> {
  render() {
    const { post } = this.props;
    return (
      <PostTitle
        post={post}
        content={<Markdown className={styles.markdown} source={post.previewContent} />}
      />
    );
  }
}

export default SimplePostInfo;
