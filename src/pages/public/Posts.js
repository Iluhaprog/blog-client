import React from 'react';
import styles from './public.module.css';
// import {PostListContainer} from '../../components/Public/Post/Container';
import {PostSearch} from '../../components/Public/Post/Search';

const Posts = () => {
  return (
    <section className={styles.page}>
      <PostSearch />
      {/* <PostListContainer /> */}
    </section>
  );
};
export {Posts};
