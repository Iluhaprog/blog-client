import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import style from './Paginate.module.css';

const Paginate = ({total, limit, onClick}) => {
  const pageCount = Math.ceil(total / limit);

  return (
    <>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        containerClassName={style.pagination}
        pageClassName={style.pageItem}
        previousClassName={style.pageItem}
        nextClassName={style.pageItem}
        breakClassName={style.pageItem}
        breakLinkClassName={style.pageLink}
        previousLinkClassName={style.pageLink}
        nextLinkClassName={style.pageLink}
        pageLinkClassName={style.pageLink}
        activeClassName={style.active}
        pageCount={pageCount}
        pageRangeDisplay={3}
        marginPagesDisplayed={1}
        onPageChange={onClick}
      />
    </>
  );
};


Paginate.propTypes = {
  total: PropTypes.number,
  limit: PropTypes.number,
  onClick: PropTypes.func,
};

export {Paginate};
