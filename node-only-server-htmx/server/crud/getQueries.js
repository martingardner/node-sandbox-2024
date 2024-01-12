/**
 * @function
 * @name getQueries
 * @param {String} query
 * @returns Object {path: contentType: }
 * @description
 * returns the file path and content type of the query sent in.
 */
function getQueries(query){
    //console.log('getQueries query', query);
    const contentTypes = {
        html :  'text/html',
        js   :  'text/javascript',
        css  :  'text/css',
    }
    const filePathes = {
        pages    :  './public/pages',
        js       :  './public/assets/js',
        snippets :  './public/templates'
    }
    let fileInfo = {path: '', contentType: ''}

    switch(query){
        case '/':
        case '/index':
        case '/home':
            fileInfo.path = `${filePathes.pages}/index.html`;
            fileInfo.contentType = contentTypes.html;
            break;
        case '/public/assets/js/htmx@1.9.9.min.js':
            fileInfo.path = `${filePathes.js}/htmx@1.9.9.min.js`;
            fileInfo.contentType = contentTypes.js;
            break;
        default:
            fileInfo.path = `${filePathes.pages}/404.html`;
            fileInfo.contentType = contentTypes.html;
            break;
    }
    //console.log('url-switch fileInfo', fileInfo);
    return fileInfo;
}

exports.getQueries = (query) => {
    return getQueries(query)
}