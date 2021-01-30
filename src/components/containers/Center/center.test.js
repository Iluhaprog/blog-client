import { render } from '@testing-library/react';
import Center from './Center';

test('Test view for center container', () => {
    const text = 'Plain text';
    const { asFragment } = render(<Center>{text}</Center>);
    expect(asFragment()).toMatchSnapshot();
});