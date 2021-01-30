import React from 'react';
import { connect } from 'react-redux';
import { RoundBox } from '../boxes/RoundBox';
import './userShortInfo.scss';
import empty from '../../assets/default.png';

const UserShortInfo = ({ avatar, firstName, lastName}) => {
    const img = avatar ? avatar : empty;
    return (
        <div className='user-short-info column column_ai-c'>
            <RoundBox>
                <img 
                    src={img} 
                    width='65' 
                    height='65' 
                    alt={`${firstName}-${lastName}`} 
                />
            </RoundBox>
            <p>{firstName} {lastName}</p>
        </div>
    );
};

const mapPropsToState = state => ({
    avatar: state.user.avatarImage,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
});

export default connect(mapPropsToState)(UserShortInfo);