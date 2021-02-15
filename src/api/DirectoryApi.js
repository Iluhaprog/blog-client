import api from './api';

export const GET_DIRECTORY_BY_ID = '/directory/getById';

function getById(id) {
    return api.get(GET_DIRECTORY_BY_ID, {
        params: {
            id,
        },
    });
}

export default {
    getById,
};