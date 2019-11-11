import React from 'react';
import { Icon } from 'antd';

const IconText: React.FC<{
  type: string;
  text: React.ReactNode;
}> = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8, top: 3, fontSize: 18, position: 'relative' }} />
    {text}
  </span>
);

export default IconText;
