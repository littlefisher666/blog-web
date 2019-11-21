import React, { PureComponent, ReactNode } from 'react';
import styles from './index.less';

interface TagProps {
  text: ReactNode;
  href: string;
}

class Tag extends PureComponent<TagProps> {
  render() {
    const { text, href } = this.props;
    return (
      <a className={styles.tagA} href={href}>
        {text}
      </a>
    );
  }
}

export default Tag;
