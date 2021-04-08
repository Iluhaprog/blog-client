import React from 'react';
import styles from './public.module.css';
import {PostContent} from '../../components/Public/Post/Content';

const Post = () => {
  return (
    <section className={styles.page}>
      <PostContent />
    </section>
  );
};

export {Post};
