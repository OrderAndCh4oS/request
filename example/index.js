/* eslint-disable indent */

import Request from '../src/request';

const request = new Request();

export function postRegister(values) {
    return request.post('/register', values);
}

export function postLogin(username, password) {
    return request.post('/login', {username, password});
}

export function getLogout() {
    return request.get('/logout');
}

export function getModel(params = null) {
    return request.get('/model', params);
}

export function postModel(values, params = null) {
    return request.post('/model', values, params);
}

export function putModel(values, params = null) {
    return request.put('/model', values, params);
}

export function deleteModel(params = null) {
    return request.delete('/model', params);
}
