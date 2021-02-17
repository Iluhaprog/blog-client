import React from 'react';
import { connect } from 'react-redux';
import { ImageBox } from '../../components/boxes/ImageBox';

function Home(props) {
    const files = process.env.REACT_APP_FILES_URL;
    return (
        <section className='main-page'>
            <ImageBox img={`${files}${props.homePreview}`}>
                <h1 className='main-page__title'>
                    {props.homeTitle}
                </h1>
            </ImageBox>
        </section>
    );
}

const mapStateToProps = state => ({
    homeTitle: state.home.title,
    homePreview: state.home.preview,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);