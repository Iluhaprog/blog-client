import {render} from '@testing-library/react';
import {Container} from './Container';

test('Should render Container component', () => {
    const {asFragment} = render(
      <Container>
        Test child
      </Container>
    );
    expect(asFragment()).toMatchSnapshot();
});
