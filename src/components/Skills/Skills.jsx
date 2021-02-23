import React from 'react';
import PropTypes from 'prop-types';
import { TagBox } from '../boxes';
import './skills.scss';

function Skills(props) {
    return (
        <ul className='row row_w-w skills'>
            <li className='skills-title'>
                Skills: 
            </li>
            {
                props.skills.map(skill => (
                    <TagBox 
                        key={skill}
                        title={skill}
                        mode='violet'
                    />
                ))
            }
        </ul>
    );
}

Skills.defaultProps = {
    skills: [],
};

Skills.propTypes = {
    skills: PropTypes.array,
};

export default Skills;