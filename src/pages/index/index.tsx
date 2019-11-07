import React, { PureComponent } from 'react';

import styles from '@/pages/index/index.less';
import AuthorInfo from '@/components/AuthorInfo';
import MainContent from '@/components/MainContent';

class Index extends PureComponent {
  render() {
    return (
      <div>
        <div className={styles.left}>
          <AuthorInfo />
        </div>
        <div className={styles.right}>
          <MainContent />
        </div>
      </div>
    );
  }
}

export default Index;
