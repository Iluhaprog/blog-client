import React from 'react';
import styles from './public.module.css';
import {HomeBanner} from '../../components/Public/HomeBanner';
import {LastPosts} from '../../components/Public/Post/Last';
import {LastProjects} from '../../components/Public/Project/Last';

const Main = () => {
  return (
    <section className={styles.page}>
      <HomeBanner />
      <LastPosts />
      <LastProjects />
    </section>
  );
};

export {Main};
