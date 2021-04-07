import React, {useEffect} from 'react';
import {HomeSection} from '../UI/HomeSection';
import mainBg from '../../../assets/public/bg/mainBG.jpg';
import {Container} from '../Container';
import {Title} from '../UI/Title';
import PropTypes from 'prop-types';
import {getOne} from '../../../store/home/homeActions';
import {connect} from 'react-redux';
import {Description} from '../UI/Description';
import {Column} from '../Column';
import styled from 'styled-components';

const Box = styled.div`
  padding: 25px;
  height: 100%;
  
  p {
    text-align: center;
  }
  
  &:after, &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 60%;
    height: 1px; 
    background: var(--color-1);
  }
  
  &:before {
    margin-bottom: 10px;
  }
`;

let HomeBanner = ({home, getHome}) => {
  useEffect(() => {
    getHome();
  }, []);

  return (
    <Container>
      <HomeSection
        src={mainBg}
        card={{
          maxWidth: 500,
          maxHeight: 400,
        }}
        maxHeight={800}
      >
        <Box>
          <Column
            style={{height: '100%'}}
            justifyContent={'center'}
          >
            <Title align={'center'}>
              {home.title}
            </Title>
            <Description>
              {home.description}
            </Description>
          </Column>
        </Box>
      </HomeSection>
    </Container>
  );
};

HomeBanner.propTypes = {
  home: PropTypes.object,
  getHome: PropTypes.func,
};

const mapStateToProps = (state) => ({
  home: state.home.selected,
});

const mapDispatchToProps = (dispatch) => ({
  getHome: () => {
    dispatch(getOne());
  },
});

HomeBanner = connect(mapStateToProps, mapDispatchToProps)(HomeBanner);

export {HomeBanner};
