const getUniqueName = name => {
    const nameSubstr = name.split('.');
    const newName = `${nameSubstr[0] + Date.now()}.${nameSubstr[1]}`;
    return newName;
}

export {
    getUniqueName,
};