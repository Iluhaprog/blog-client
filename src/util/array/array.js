function search(id, arr) {
    return arr.find(el => el.id === id);
}

function concat(arr1, arr2) {
    return [...arr1, ...arr2];
}

function replace(newEl, arr) {
    return arr.map(el => {
        if (el.id === newEl.id) {
            return newEl;
        }
        return el;
    });
}

function deleteEl(id, arr) {
    return arr.filter(el => el.id !== id);
}

export {
    search,
    concat,
    replace,
    deleteEl,
};