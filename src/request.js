import { makeUrl } from './url';
import Fetch from './fetch';
import JsonResponse from './json-response';

export default class Request {
    constructor(baseUrl = '', response = null, fetch = null) {
        this._baseUrl = baseUrl;
        this._response = response || new JsonResponse();
        this._fetch = fetch || new Fetch();
    }

    get(endpoint, params = null) {
        return this._fetch.get(makeUrl(this._baseUrl, endpoint, params)).then(
            this._response.handleResponse,
            this._response.handleErrorResponse,
        );
    }

    post(endpoint, values, params = null) {
        return this._fetch.post(makeUrl(this._baseUrl, endpoint, params),
            values)
            .then(
                this._response.handleResponse,
                this._response.handleErrorResponse,
            );
    }

    put(endpoint, values, params = null) {
        return this._fetch.put(makeUrl(this._baseUrl, endpoint, params), values)
            .then(
                this._response.handleResponse,
                this._response.handleErrorResponse,
            );
    }

    delete(endpoint, params = null) {
        return this._fetch.delete(makeUrl(this._baseUrl, endpoint, params))
            .then(
                this._response.handleResponse,
                this._response.handleErrorResponse,
            );
    }
}
