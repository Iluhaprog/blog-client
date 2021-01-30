import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SendButton from './SendButton';

test('Test view send button', () => {
    const testText = 'Test text';
    render(<SendButton text={ testText }/>);
    const btn = screen.getByText(testText);
    expect(!!btn).toBe(true);
});

test('Text send button onclick', async () => {
    const handleClick = jest.fn();
    const testText = 'Test text';
    render(<SendButton text={ testText } onClick={handleClick}/>);
    const btn = screen.getByText(testText);
    fireEvent.click(btn);
    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
});