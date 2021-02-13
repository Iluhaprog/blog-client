import { setErrorCatch } from '../SettingErrorCatch';

test('Should set error catch to promise', () => {
    const errorHandler = jest.fn();
    const p = new Promise((_, rej) => rej());
    setErrorCatch(p, errorHandler).then(() => {
        expect(errorHandler).toHaveBeenCalledTimes(1);
    });
});
