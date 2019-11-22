import React, { PureComponent, ReactNode } from 'react';
import styles from './index.less';
import { Link } from 'umi';

interface TagProps {
  text: ReactNode;
  href?: string;
  tagId?: number;
}

class Tag extends PureComponent<TagProps> {
  render() {
    const { text, href, tagId } = this.props;
    const color = function color(id: number | undefined) {
      if (id === undefined) {
        return `${styles.color0}`;
      }
      switch (id % 5) {
        case 0:
          return `${styles.color0}`;
        case 1:
          return `${styles.color1}`;
        case 2:
          return `${styles.color2}`;
        case 3:
          return `${styles.color3}`;
        case 4:
          return `${styles.color4}`;
        default:
          return `${styles.color0}`;
      }
    };
    const colorStyle = `${styles.tag} ${color(tagId)}`;
    return href === undefined || href === '#' ? (
      <span className={colorStyle}>{text}</span>
    ) : (
      <Link className={colorStyle} to={href}>
        {text}
      </Link>
    );
  }
}

export default Tag;
