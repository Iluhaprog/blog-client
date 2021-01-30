import { render } from '@testing-library/react';
import RoundBox from './RoundBox';

test('Test view of round image component', () => {
    const  { asFragment } = render(<RoundBox></RoundBox>);
    expect(asFragment()).toMatchSnapshot();
});

test('Test view of round image max size component', () => {
    const  { asFragment } = render(<RoundBox max></RoundBox>);
    expect(asFragment()).toMatchSnapshot();
});