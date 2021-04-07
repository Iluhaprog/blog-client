import React from 'react';
import styles from './public.module.css';
import {HomeBanner} from '../../components/Public/HomeBanner';
import {LastPosts} from '../../components/Public/Post/Last';
import {LastProjects} from '../../components/Public/Project/Last';
import {Row} from '../../components/Public/Row';
import {Button} from '../../components/Public/UI/Button';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router';

let Main = ({lang}) => {
  const history = useHistory();

  return (
    <section className={styles.page}>
      <HomeBanner />
      <LastPosts />
      <LastProjects />
      <Row justifyContent={'center'}>
        <Button
          mod={'big'}
          onClick={() => history.push('/projects')}
        >
          {lang.button.MORE_PROJECTS}
        </Button>
      </Row>
    </section>
  );
};

Main.propTypes = {
  lang: PropTypes.object,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
});

const mapDispatchToProps = () => ({});

Main = connect(mapStateToProps, mapDispatchToProps)(Main);

export {Main};
