const { textEntered } = require('../../public/templates/textEntered');
const {contentTypes , filePathes} = require('../helpers/queryHelper');

/**
 * @function
 * @name postQueries
 * @param {String} query 
 * @param {Object} postData 
 * @returns Object {path: contentType: }
 * @description
 * returns the file path and content type of the query sent in.
 */
function postQueries(query, postData){
    let fileInfo = {path: '', contentType: ''}

    switch(query){
        case '/textEntered':
            textEntered(postData);
            console.log('postTextEntered');
            fileInfo.path = `${filePathes.snippets}/textEntered.html`;
            fileInfo.contentType = contentTypes.html;
            break;
        default:

            break;
    }
    return fileInfo
}

exports.postQueries = (query, postData) => {
    return postQueries(query, postData)
}