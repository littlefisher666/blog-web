import React from 'react';

import styles from '@/layouts/BlogLayout.less';
import AuthorInfo from '@/components/AuthorInfo';
import MainContent from '@/components/MainContent';

const Layout: React.FC = ({ children }) => (
  <div>
    <div className={styles.left}>
      <AuthorInfo />
    </div>
    <div className={styles.right}>
      <MainContent>{children}</MainContent>
    </div>
  </div>
);

export default Layout;
