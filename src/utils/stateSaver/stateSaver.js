const STATE = 'state';

export const loadState = () => {
  try {
    const state = localStorage.getItem(STATE);
    if (!state) return;
    return JSON.parse(state);
  } catch (error) {
    console.error(error);
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE, serializedState);
  } catch (error) {
    console.error(error);
  }
};
