import {Dropdown} from '../../../Dropdown/Dropdown';
import React, {useEffect, useState} from 'react';
import {FileBox} from '../../../FileBox';
import {getAll} from '../../../../../store/directory/directoryActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Pagination} from '../../../Pagination';

let FileList = ({directories, total, theme, getDirectories, onSelect}) => {
  const [page, setPage] = useState(0);

  const handlePageClick = (data) => {
    const selected = data.selected * process.env.REACT_APP_PAGINATION_LIMIT;
    setPage(selected);
  };

  useEffect(() => {
    getDirectories(page);
  }, [page]);

  return (
    <>
      {
        directories.map((dir) => (
          <Dropdown
            key={dir.id}
            title={'/' + dir.name}
          >
            {
              dir.files?.map((file) => (
                <FileBox
                  key={file.id}
                  fileName={file.name}
                  onClick={onSelect}
                />
              ))
            }
          </Dropdown>
        ))
      }
      <hr/>
      <Pagination
        total={total}
        limit={10}
        theme={theme}
        onClick={handlePageClick}
      />
    </>
  );
};

FileList.propTypes = {
  directories: PropTypes.array,
  total: PropTypes.number,
  theme: PropTypes.string,
  getDirectories: PropTypes.func,
  onSelect: PropTypes.func,
};

const mapStateToProps = (state) => ({
  directories: state.dir.directories,
  total: state.dir.total,
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  getDirectories: (page) => {
    dispatch(getAll(page));
  },
});

FileList = connect(mapStateToProps, mapDispatchToProps)(FileList);

export {FileList};

