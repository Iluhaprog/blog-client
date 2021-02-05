import React from 'react';
import { render } from '@testing-library/react';
import FilesViewer from './FilesViewer';

test('Should view files viewer without files', () => {
    const { asFragment } = render(<FilesViewer />);
    expect(asFragment()).toMatchSnapshot();
});

test('Should view files viewer with files', () => {
    const { asFragment } = render(
        <FilesViewer
            files={[
                {id: 1, name: 'test.png'},
                {id: 2, name: 'test.png'},
                {id: 3, name: 'test.png'},
            ]}
        />
    );
    expect(asFragment()).toMatchSnapshot();
})