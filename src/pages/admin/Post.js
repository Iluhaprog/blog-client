import React from 'react';
import { useParams } from 'react-router-dom';

export default props => {
    const { id } = useParams();
    return (
        <section className='admin-page'>
            Post id: {id}
        </section>
    );
}