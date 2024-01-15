const {parse} = require('querystring');

/**
 * @function
 * @name collectPostData
 * @param {Object} request 
 * @param {Function} callback 
 * @description
 * takes in request and callback, in order to be able to return back POST data.
 */
function collectPostData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';

    if(request.headers['content-type'] === FORM_URLENCODED){
        let body = '';

        request.on('data', chunk => {
            body += chunk.toString();
        });

        request.on('end', () => {
            console.log('collectPostData', body);
            callback(parse(body));
        });
    } else {
        callback(null);
    }
}

exports.collectPostData = (request, callback) => {
    return collectPostData(request, callback)
}