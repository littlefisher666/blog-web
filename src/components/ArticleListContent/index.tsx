import React from 'react';
import moment from 'moment';
import styles from './index.less';
import ReactMarkdown from 'react-markdown';
import { TagType } from '@/entity/tag';

export interface ApplicationsProps {
  data: {
    postId: number;
    title: string;
    authorId: number;
    authorName: string;
    tagList: TagType[];
    readTimes: number;
    likedTimes: number;
    createTime: string;
    previewContent: string;
  };
}
const ArticleListContent: React.FC<ApplicationsProps> = ({
  data: {
    previewContent,
    createTime,
  },
}) => (
  <div className={styles.listContent}>
    <ReactMarkdown source={previewContent} />
    <div className={styles.extra}>
      <em>{moment(createTime).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>
);

export default ArticleListContent;
