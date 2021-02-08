import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('Test view of project card', () => {
    test('Should return view of project card with img', () => {
        const { asFragment } = render(
            <ProjectCard
                img='http://localhost:3001/file/get/potw2034a1612682957687.jpg'
                title='Title'
                description='Description description description'
                gitLink='#'
                prjLink='#'
                onClick={() => alert('Prj')}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should return view of project card without img', () => {
        const { asFragment } = render(
            <ProjectCard
                img=''
                title='Title'
                description='Description description description'
                gitLink='#'
                prjLink='#'
                onClick={() => alert('Prj')}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should return view of project card with prop canClicked', () => {
        const { asFragment } = render(
            <ProjectCard
                img=''
                title='Title'
                description='Description description description'
                gitLink='#'
                prjLink='#'
                canClicked={true}
                onClick={() => alert('Prj')}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Test view of project card', () => {
    test('Should return view of project card', async () => {
        const handleClick = jest.fn();
        const { container } = render(
            <ProjectCard
                img='http://localhost:3001/file/get/potw2034a1612682957687.jpg'
                title='Title'
                description='Description description description'
                gitLink='#'
                prjLink='#'
                onClick={handleClick}
            />
        );
        fireEvent.click(container.querySelector('.portfolio-card'));
        await waitFor(() => {
            expect(handleClick).toHaveBeenCalledTimes(1);
        });
    });
});
