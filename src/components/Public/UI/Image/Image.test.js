import {render} from '@testing-library/react';
import {Image} from './Image';

test('Should render Image component', () => {
  const {asFragment} = render(
    <Image
      width={20}
      height={20}
      round
    >
      <img src={''} alt={'alt'}/>
    </Image>
  );
  expect(asFragment()).toMatchSnapshot();
});
