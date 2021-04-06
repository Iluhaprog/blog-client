import {render} from '@testing-library/react';
import {PageTitle} from './PageTitle';

test('Should render PageTitle component', () => {
  const {asFragment} = render(
    <PageTitle>
      TEST TITLE
    </PageTitle>
  );
  expect(asFragment()).toMatchSnapshot();
});
