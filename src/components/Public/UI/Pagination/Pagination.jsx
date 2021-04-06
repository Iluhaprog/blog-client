import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

function Pagination({total, limit, onClick}) {
  const pageCount = Math.ceil(total / limit);
  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      containerClassName={styles.pagination}
      pageClassName={styles.pageItem}
      previousClassName={styles.pageItem}
      nextClassName={styles.pageItem}
      breakClassName={styles.pageItem}
      breakLinkClassName={styles.pageLink}
      previousLinkClassName={styles.pageLink}
      nextLinkClassName={styles.pageLink}
      pageLinkClassName={styles.pageLink}
      activeClassName={styles.active}
      pageCount={pageCount}
      pageRangeDisplay={3}
      marginPagesDisplayed={1}
      onPageChange={onClick}
    />
  );
}

Pagination.propTypes = {
  total: PropTypes.number,
  limit: PropTypes.number,
  onClick: PropTypes.func,
};

export {Pagination};
