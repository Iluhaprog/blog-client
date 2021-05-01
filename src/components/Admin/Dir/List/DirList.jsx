import React, {useEffect, useState} from 'react';
import {Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {create, remove as removeFile} from '../../../../store/file/fileActions';
import {
  initModal,
  setFormType,
  setVisible,
} from '../../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../../store/modal/ModalFormTypes';
import {connect} from 'react-redux';
import {remove, getAll} from '../../../../store/directory/directoryActions';
import {DirListItem} from './DirListItem';
import {getNameAndExt} from '../../../../utils/string/string';
import {Pagination} from '../../Pagination';

let DirList = (props) => {
  const {
    dirs,
    removeDir,
    removeFile,
    createFile,
    getAll,
    showConfirmModal,
  } = props;
  const {total, theme, lang} = props;
  const [page, setPage] = useState(0);

  const handlePageClick = (data) => {
    const selected = data.selected * process.env.REACT_APP_PAGINATION_LIMIT;
    setPage(selected);
  };

  useEffect(() => {
    getAll(page);
  }, [page]);

  return (
    <>
      <Row>
        {
          dirs?.map((dir) => {
            return (
              <DirListItem
                key={dir.id}
                dir={dir}
                page={page}
                createFile={createFile}
                removeFile={removeFile}
                removeDir={(id) => {
                  showConfirmModal(
                      lang.text.DELETE_DIR,
                      () => removeDir(id, page),
                  );
                }}
              />
            );
          })
        }
      </Row>
      <Row className={'justify-content-center'}>
        <Pagination
          total={total}
          limit={10}
          theme={theme}
          onClick={handlePageClick}
        />
      </Row>
    </>
  );
};

DirList.propTypes = {
  dirs: PropTypes.array,
  lang: PropTypes.object,
  total: PropTypes.number,
  theme: PropTypes.string,
  createFile: PropTypes.func,
  showInputModal: PropTypes.func,
  removeDir: PropTypes.func,
  removeFile: PropTypes.func,
  getAll: PropTypes.func,
  showConfirmModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  dirs: state.dir.directories,
  lang: state.settings.lang,
  total: state.dir.total,
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  getAll: (page) => {
    dispatch(getAll(page));
  },
  removeDir: (id, page) => {
    dispatch(remove(id))
        .then(() => {
          dispatch(getAll(page));
        });
  },
  removeFile: (id) => {
    dispatch(removeFile(id))
        .then(() => {
          dispatch(getAll());
        });
  },
  createFile: (file, dirId) => {
    const fd = new FormData();
    const [name, ext] = getNameAndExt(file.name);
    file = new File([file], `${name}-${Date.now()}.${ext}`);
    fd.append('file', file);
    dispatch(create(fd, dirId))
        .then(() => {
          dispatch(getAll());
        });
  },
  showInputModal: (title, description, successHandler) => {
    dispatch(initModal({
      title,
      description,
      successHandler,
    }));
    dispatch(setFormType(ModalScreenTypes.INPUT));
    dispatch(setVisible(true));
  },
  showConfirmModal: (title, successHandler) => {
    dispatch(initModal({
      title,
      description: '',
      successHandler,
    }));
    dispatch(setFormType(ModalScreenTypes.CONFIRM));
    dispatch(setVisible(true));
  },
});

DirList = connect(mapStateToProps, mapDispatchToProps)(DirList);

export {DirList};
