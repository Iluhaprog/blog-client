import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {getAll} from '../../../store/social/socialActions';
import {connect} from 'react-redux';
import {Row} from '../Row';
import {Image} from '../UI/Image';

let SocialList = ({socials, getSocials}) => {
  useEffect(() => {
    getSocials();
  }, []);
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <Row justifyContent={'center'}>
      {
        socials?.map((social) => (
          <a
            style={{margin: '5px'}}
            href={social.link}
            key={social.id}
          >
            <Image
              width={30}
              height={30}
            >
              <img src={API_URL + '/' + social.preview} alt={social.title} />
            </Image>
          </a>
        ))
      }
    </Row>
  );
};

SocialList.propTypes = {
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

SocialList = connect(mapStateToProps, mapDispatchToProps)(SocialList);

export {SocialList};
