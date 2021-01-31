import {
    dropHandler,
    dragLeaveHandler,
    dragOverHandler,
} from '../dragAndDrop';

describe('Test drag&drop events handlers', () => {
    test('Drop handler', () => {
        const setFile = jest.fn();
        const setFocus = jest.fn();
        const setFromData = jest.fn();
        const event = {
            preventDefault: () => {},
            target: {
                files: [new File([new ArrayBuffer(1)], 'file.jpg')]
            }
        };
        dropHandler(event, setFile, setFromData, setFocus)

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    file: setFile.mock.calls[0][0],
                    focus: setFocus.mock.calls[0][0],
                    formData: setFromData.mock.calls[0][0],
                });
            }, 10)
        }).then(({ file, focus, formData}) => {
            expect(typeof file).toBe('string');
            expect(focus).toBe(false);
            expect(!!formData.get('avatar')).toBe(true);
        });
    });
    test('Drag leave handler', () => {
        const setFocus = jest.fn();
        const event = {
            preventDefault: jest.fn()
        };

        dragLeaveHandler(event, setFocus);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    focus: setFocus.mock.calls[0][0],
                });
            }, 10);
        }).then(({ focus }) => {
            expect(focus).toBe(false);
        });
    });
    test('Drag over handler', () => {
        const setFocus = jest.fn();
        const event = {
            preventDefault: jest.fn()
        };

        dragOverHandler(event, setFocus);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    focus: setFocus.mock.calls[0][0],
                });
            }, 10);
        }).then(({ focus }) => {
            expect(focus).toBe(true);
        });
    });
});