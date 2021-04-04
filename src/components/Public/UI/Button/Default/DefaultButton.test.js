import {fireEvent, render, waitFor} from '@testing-library/react';
import {DefaultButton} from './index';

test('Should render DefaultButton', () => {
  const {asFragment} = render(
    <DefaultButton>
      ok
    </DefaultButton>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Should render DefaultButton', async () => {
  const click = jest.fn();
  const {container} = render(
    <DefaultButton onClick={click}>
      ok
    </DefaultButton>
  );

  fireEvent.click(container.querySelector('button'));
  await waitFor(() => {
    expect(click).toBeCalledTimes(1);
  });
});
