import React, { Component } from 'react';
import styles from './index.less';

export interface MainContentProps {
  content: any;
}

class MainContent extends Component<Partial<MainContentProps>> {
  componentDidMount() {}

  render() {
    return <div className={styles.main} />;
  }
}

export default MainContent;
