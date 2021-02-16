import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RoundBox } from '../boxes/RoundBox';
import { Column, Row } from '../containers';
import './userShortInfo.scss';
import empty from '../../assets/default.png';

const UserShortInfo = (props) => {
    const { avatar, firstName, lastName, row } = props;
    const url = process.env.REACT_APP_FILES_URL;
    const img = avatar ? `${url}${avatar}` : empty;
    const box = (
        <>
            <RoundBox>
                <img 
                    src={img} 
                    width={props.width} 
                    height={props.height}
                    alt={`${firstName}-${lastName}`} 
                />
            </RoundBox>
            <p>{firstName} {lastName}</p>
        </>
    );
    return (
        <div className='user-short-info'>
            { row 
                ? (<Row alignItems='c'>{box}</Row>) 
                : (<Column alignItems='c'>{box}</Column>)
            }
        </div>
    );
};

UserShortInfo.defaultProps = {
    row: false,
    width: 65,
    height: 65,
};

UserShortInfo.propTypes = {
    row: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
};

const mapPropsToState = state => ({
    avatar: state.user.avatarImage,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
});

export default connect(mapPropsToState)(UserShortInfo);