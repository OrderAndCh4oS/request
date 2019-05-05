import extractKey from './utility/extract-key';

export function makeUrl(baseUrl, endpoint, params = null) {
    return baseUrl + makeRoute(endpoint, params);
}

export function makeRoute(endpoint, params = null) {
    return makeEndpoint(endpoint, params) + makeParams(params);
}

/**
 * Replace endpoint curly brackets eg `{id}` keys with values from params eg `{id: 1}`
 * Will not replace curly brackets after `?` that may exist in parameter strings
 *
 * @param endpoint
 * @param params
 * @returns string
 */
export function makeEndpoint(endpoint, params) {
    const before_parameters = /^(.*?)(?=(?:\?|$))/.exec(endpoint)[0];
    const match_keys = /{([a-z]+?)}/g;
    let match;
    // noinspection JSAssignmentUsedAsCondition
    while(match = match_keys.exec(before_parameters)) {
        const key = match[1];
        const item = extractKey(params, key);
        const key_match = new RegExp(`{${key}}`);
        endpoint = endpoint.replace(key_match, item);
    }
    return endpoint;
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
