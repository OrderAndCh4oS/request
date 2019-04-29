import { makeRoute } from './url';
import Fetch from './fetch';
import JsonResponse from './json-response';

export default class Request {
    constructor(baseUrl = '', response = null, fetch = null) {
        this._baseUrl = baseUrl;
        this._response = response || new JsonResponse();
        this._fetch = fetch || new Fetch();
    }

    request(fetch, params = null, values = null) {
        return fetch({params, values}).then(
            this._response.handleResponse,
            this._response.handleErrorResponse,
        );
    };

    get(endpoint, params = null) {
        return this._fetch.get(makeRoute(this._baseUrl, endpoint, params)).then(
            this._response.handleResponse,
            this._response.handleErrorResponse,
        );
    }

    post(endpoint, values, params = null) {
        return this._fetch.post(makeRoute(this._baseUrl, endpoint, params), values)
            .then(
                this._response.handleResponse,
                this._response.handleErrorResponse,
            );
    }

    put(endpoint, values, params = null) {
        return this._fetch.put(makeRoute(this._baseUrl, endpoint, params), values)
            .then(
                this._response.handleResponse,
                this._response.handleErrorResponse,
            );
    }

    delete(endpoint, params = null) {
        return this._fetch.delete(makeRoute(this._baseUrl, endpoint, params))
            .then(
                this._response.handleResponse,
                this._response.handleErrorResponse,
            );
    }
}
