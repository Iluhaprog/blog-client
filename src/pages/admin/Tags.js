import React from 'react';
import {TagForm} from '../../components/Admin/Tag/Form';
import {TagList} from '../../components/Admin/Tag/List';

const Tags = () => {
  return (
    <section style={{padding: '10px 0'}}>
      <TagForm />
      <TagList />
    </section>
  );
};

export {Tags};
