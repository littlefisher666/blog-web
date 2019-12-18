import React, { Component } from 'react';
import { Avatar } from 'antd';
import styles from './index.less';

class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={styles.header}>
        <Avatar className={styles.avatar} icon="user" />
      </div>
    );
  }
}

export default Header;
