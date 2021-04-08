import React, {useState} from 'react';
import styles from './public.module.css';
import {PostListContainer} from '../../components/Public/Post/Container';
import {PostSearch} from '../../components/Public/Post/Search';
import {Button} from '../../components/Public/UI/Button';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container} from '../../components/Public/Container';
import {Separator} from '../../components/Public/Separator';
import {Row} from '../../components/Public/Row';
import {Title} from '../../components/Public/UI/Title';

let Posts = ({lang}) => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <section className={styles.page}>
      <Container maxWidth={1000}>
        <Row justifyContent={'space-between'}>
          <Title>
            {lang.nav.POSTS}
          </Title>
          <Button
            mod={'big'}
            onClick={() => setIsSearch(!isSearch)}
          >
            {
              !isSearch ? lang.text.SEARCH : lang.text.ALL
            }
          </Button>
        </Row>
      </Container>
      <Separator indentBottom={50}/>
      {
        isSearch ? <PostSearch /> : <PostListContainer />
      }
    </section>
  );
};

Posts.propTypes = {
  lang: PropTypes.object,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
});

const mapDispatchToProps = (dispatch) => ({});

Posts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export {Posts};
