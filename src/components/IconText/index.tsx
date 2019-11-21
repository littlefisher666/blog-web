import React from 'react';
import { Icon } from 'antd';
import styles from './index.less';

const IconText: React.FC<{
  type: string;
  text: React.ReactNode;
}> = ({ type, text }) => (
  <span>
    <Icon type={type} className={styles.icon} />
    {text}
  </span>
);

export default IconText;
