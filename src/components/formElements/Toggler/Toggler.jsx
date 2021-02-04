import React, { useState, useEffect } from 'react';
import './toggler.scss';

export default props => {
    const [value, setValue] = useState(false);

    useEffect(() => {
        setValue(props.value);
    }, [props]);

    const handleClick = () => {
        props.onChange(!value);
    }

    return (
        <div className='toggler' onClick={handleClick}>
            <div className='toggler-box'>
                <div 
                    className={
                        `toggler-box__item ${value ? 'toggler-box__item_right' : ''}`
                    }
                >
                </div>
            </div>
        </div>
    );
}