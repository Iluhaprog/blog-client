import React from 'react';
import {ProjectList} from '../../components/Public/Project/List';
import styles from './public.module.css';

const Projects = () => {
  return (
    <section className={styles.page}>
      <ProjectList />
    </section>
  );
};

export {Projects};
