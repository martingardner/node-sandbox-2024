/**
 * @function
 * @name urlSwitch
 * @param {String} query
 * @returns Object {path: contentType: }
 * @description
 * returns the file path and content type of the query sent in.
 */
function urlSwitch(query){
    console.log('url-switch query', query);
    const contentTypes = {
        html :  'text/html',
        js   :  'text/js',
        css  :  'text/css',
    }
    const filePathes = {
        pages : './public/pages'
    }
    let fileInfo = {path: '', contentType: ''}

    switch(query){

        default:
            fileInfo.path = `${filePathes.pages}/404.html`;
            fileInfo.contentType = contentTypes.html;
        break;
    }
    console.log('url-switch fileInfo', fileInfo);
    return fileInfo;
}

exports.urlSwitch = (query) => {
    return urlSwitch(query)
}