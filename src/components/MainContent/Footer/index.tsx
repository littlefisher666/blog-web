import React, { Component } from 'react';
import styles from './index.less';


class Footer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerLeft}>© 2019 LittleFisher</div>
      </div>
    );
  }
}

export default Footer;
