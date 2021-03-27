import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import {themes} from '../../store/settings/settingsReducer';

function Pagination({total, limit, onClick, theme}) {
  const pageCount = Math.ceil(total / limit);
  const bg = theme === themes.DARK ? 'bg-transparent' : '';
  const active = theme === themes.DARK ? 'bg-secondary' : 'active';
  const border = theme === themes.DARK ? 'border-secondary' : '';
  const color = theme === themes.DARK ? 'text-white-50' : '';
  return (
    <ReactPaginate
      previousLabel={'prev'}
      nextLabel={'next'}
      breakLabel={'...'}
      containerClassName={'pagination justify-content-center'}
      pageClassName={`page-item`}
      previousClassName={`page-item`}
      nextClassName={`page-item`}
      breakClassName={`page-item`}
      breakLinkClassName={`page-link ${bg} ${border} ${color}`}
      previousLinkClassName={`page-link ${bg} ${border} ${color}`}
      nextLinkClassName={`page-link ${bg} ${border} ${color}`}
      pageLinkClassName={`page-link ${bg} ${border} ${color}`}
      activeClassName={`${active}`}
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
  theme: PropTypes.string,
  onClick: PropTypes.func,
};

export {Pagination};
