const {parse} = require('querystring');

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