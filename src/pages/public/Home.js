import React, {useEffect} from 'react';
import {MenuBar} from '../../components/Public/UI/MenuBar';
import {Apple} from '../../components/Public/UI/Icons/Apple';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAll} from '../../store/social/socialActions';
import {WorkSpace} from './WorkSpace';
import {WindowList} from '../../components/Public/WindowList';

let Home = (props) => {
  const {socials, getSocials} = props;

  useEffect(() => {
    getSocials();
  }, []);

  return (
    <>
      <MenuBar
        logo={() => <Apple width={30} height={30} />}
      >
        {
          socials?.map((social) => (
            <a key={social.id} href={social.link}>
              {social.title}
            </a>
          ))
        }
      </MenuBar>
      <WorkSpace />
      <WindowList />
    </>
  );
};

Home.propTypes = {
  socials: PropTypes.array,
  getSocials: PropTypes.func,
};

const mapStateToProps = (state) => ({
  socials: state.social.socials,
});

const mapDispatchToProps = (dispatch) => ({
  getSocials: () => {
    dispatch(getAll());
  },
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export {Home};
