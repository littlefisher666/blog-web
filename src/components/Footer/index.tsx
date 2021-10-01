import React, { Component } from 'react';
import styles from './index.less';

class Footer extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          © 2019 LittleFisher 版权所有 ICP证：
          <a href="https://beian.miit.gov.cn">浙ICP备19017253号</a>
        </div>
      </div>
    );
  }
}

export default Footer;
