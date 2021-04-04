import {fireEvent, render, waitFor} from '@testing-library/react';
import {PushButton} from './index';

test('Should render PushButton', () => {
  const {asFragment} = render(
    <PushButton>
      ok
    </PushButton>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Should render PushButton', async () => {
  const click = jest.fn();
  const {container} = render(
    <PushButton onClick={click}>
      ok
    </PushButton>
  );

  fireEvent.click(container.querySelector('button'));
  await waitFor(() => {
    expect(click).toBeCalledTimes(1);
  });
});
