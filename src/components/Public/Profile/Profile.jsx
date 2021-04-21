import React, {useEffect} from 'react';
import {Container} from '../Container';
import {Row} from '../Row';
import {Image} from '../UI/Image';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAll} from '../../../store/user/userActions';
import bg from '../../../assets/public/bg/mainBG.jpg';
import {Column} from '../Column';
import {Title} from '../UI/Title';
import {Description} from '../UI/Description';
import styled from 'styled-components';
import {Tag} from '../UI/Tag';
import {Separator} from '../Separator';
import {Mail} from '../UI/Mail';
import {Envelope} from 'react-bootstrap-icons';
import {getEntityDataByLang} from '../../../utils/data/data';

const Box = styled.div`
  padding: 20px;
`;

const TagBox = styled.div`
  padding-left: 15px;
`;

let Profile = ({user, getUser}) => {
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container maxWidth={1000}>
      <Separator indentTop={50}/>
      <Row>
        <Image
          width={350}
          height={350}
          round
        >
          <img
            src={user?.avatar ? API_URL + '/' + user?.avatar : bg}
            alt={user?.login}
          />
        </Image>
        <article>
          <Column
            alignItems={'flex-start'}
            justifyContent={'center'}
            styles={{height: '100%'}}
          >
            <header
              style={{width: '100%'}}
            >
              <Box>
                <Row
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Title>{`${user?.firstName} ${user?.lastName}`}</Title>
                  <Mail
                    href={'mailto:'+user?.email}
                  >
                    <Envelope/> {user?.email}
                  </Mail>
                </Row>
              </Box>
            </header>
            <Box>
              <Description>
                {user?.about}
              </Description>
            </Box>
            <footer>
              <TagBox>
                <Row justifyContent={'flex-start'} wrap={'wrap'}>
                  {
                    user?.skills?.split(',').map((skill) => (
                      <Tag
                        key={skill}
                        title={skill}
                        mod={'small'}
                      />
                    ))
                  }
                </Row>
              </TagBox>
            </footer>
          </Column>
        </article>
      </Row>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf({
    id: PropTypes.number,
    login: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    skills: PropTypes.string,
    avatar: PropTypes.string,
    email: PropTypes.string,
    about: PropTypes.string,
  }),
  getUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: getEntityDataByLang(
      state.user.users[0],
      state.settings.lang.title,
      'userData',
  ),
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => {
    dispatch(getAll());
  },
});

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export {Profile};
