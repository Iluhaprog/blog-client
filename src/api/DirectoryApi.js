import api from './api';

function getById(id) {
    return api.get('/directory/getById', {
        params: {
            id,
        },
    });
}

export default {
    getById,
};