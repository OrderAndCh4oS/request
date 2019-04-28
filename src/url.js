import extractKey from './utility/extract-key';

export function makeRoute(baseUrl, endpoint, params = false, key = 'id') {
    return makeUrl(
        baseUrl,
        makeEndpoint(endpoint, params, key),
        params,
    );
}

export function makeUrl(baseUrl, endpoint, params) {
    return baseUrl + endpoint + makeParams(params);
}

export function makeEndpoint(endpoint, params, key = 'id') {
    const item = extractKey(params, key);
    return item ? endpoint + '/' + item : endpoint;
}

export function makeParams(params) {
    return params
        ? '?' + Object.keys(params)
        .map(key => key + '=' + listValues(params, key))
        .join('&')
        : '';
}

function listValues(params, key) {
    return Array.isArray(params[key])
        ? params[key].join(',')
        : params[key];
}
