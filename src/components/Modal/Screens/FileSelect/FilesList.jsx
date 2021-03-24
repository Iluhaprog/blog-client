import {Dropdown} from '../../../Dropdown/Dropdown';
import React, {useEffect, useState} from 'react';
import {FileBox} from '../../../FileBox';
import {getAll} from '../../../../store/directory/directoryActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

let FileList = ({directories, getDirectories, onSelect}) => {
  const [page] = useState(0);

  useEffect(() => {
    getDirectories(page);
  }, []);

  return (
    <>
      {
        directories.map((dir) => (
          <Dropdown
            key={dir.id}
            title={'/' + dir.name}
          >
            {
              dir.files.map((file) => (
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
    </>
  );
};

FileList.propTypes = {
  directories: PropTypes.array,
  getDirectories: PropTypes.func,
  onSelect: PropTypes.func,
};

const mapStateToProps = (state) => ({
  directories: state.dir.directories,
});

const mapDispatchToProps = (dispatch) => ({
  getDirectories: (page) => {
    dispatch(getAll(page));
  },
});

FileList = connect(mapStateToProps, mapDispatchToProps)(FileList);

export {FileList};

