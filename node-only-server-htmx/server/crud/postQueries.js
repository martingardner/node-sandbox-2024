function postQueries(query, postData){
    console.log('postQueries postData', postData);
    console.log('postQueries query', query);
    const contentTypes = {
        html :  'text/html',
        js   :  'text/js',
        css  :  'text/css',
    }
    const filePathes = {
        pages    :  './public/pages',
        js       :  './public/assets/js',
        snippets :  './public/templates'
    }
    let fileInfo = {path: '', contentType: ''}

    switch(query){
        case '/textEntered':
            fileInfo.path = `${filePathes.snippets}/textEntered.html`;
            fileInfo.contentType = contentTypes.html;
            break;
        default:

            break;
    }
    console.log('postQueries', fileInfo);
    return fileInfo
}

exports.postQueries = (query, postData) => {
    return postQueries(query, postData)
}