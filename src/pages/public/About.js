import React from 'react';
import styles from './public.module.css';
import {Profile} from '../../components/Public/Profile';

const About = () => {
  return (
    <section className={styles.page}>
      <Profile />
    </section>
  );
};

export {About};
