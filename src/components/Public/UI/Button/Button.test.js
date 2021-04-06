import {fireEvent, render, waitFor} from '@testing-library/react';
import {Button} from './Button';

test('Should render Button component', () => {
  const {asFragment} = render(
    <Button>
      TEST BUTTON
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Should handle onClick event on Button component', async () => {
  const click = jest.fn();
  const {container} = render(
    <Button onClick={click}>
      TEST BUTTON
    </Button>
  );
  fireEvent.click(container.querySelector('button'));
  await waitFor(() => {
    expect(click).toBeCalledTimes(1);
  });
});
