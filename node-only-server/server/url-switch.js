
/**
 * @function
 * @name urlSwitch
 * @param {String} query 
 * @returns Object {path: contentType: } 
 * @description
 * returns the file path and content type based on the query sent in.
 */
function urlSwitch(query) {
    console.log('url-switch query', query);
    const contentTypes = {
        html : 'text/html',
        js : 'text/js'
    }
    let fileInfo = {path: '', contentType: ''}
    switch(query){
        case '/':
        case '/index':
        case '/home':
            fileInfo.path = './htmlPages/index.html';
            fileInfo.contentType = contentTypes.html;
            break;
        case '/assets/test.js':
            fileInfo.path = './htmlPages/assets/test.js';
            fileInfo.contentType = contentTypes.js;
            break;
        default:
            fileInfo.path = './htmlPages/404.html';
            fileInfo.contentType = contentTypes.html;
            break;
    }
    
    return fileInfo;
}


exports.urlSwitch = (query) => {
    return urlSwitch(query)
}