const dragOverHandler = (e, cb) => {
    e.preventDefault();
    console.log('drag over');
    cb(true);
};

const dragLeaveHandler = (e, cb) => {
    e.preventDefault();
    cb(false)
}

const getFile = e => {
    if (e.dataTransfer) {
        return e.dataTransfer.files[0];
    }
    return e.target.files[0];
}

const dropHandler = (e, setFile, setFromData, setFocus) => {
    e.preventDefault();
    const file = getFile(e);
    if (file) {
        const fd = new FormData();
        fd.append('avatar',  file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            e.preventDefault();
            setFile(e.target.result);
            setFromData(fd);
            setFocus(false);
        }
    }
};

export {
    dragOverHandler,
    dragLeaveHandler,
    dropHandler,
};