//node packages
const http = require('http');
const fs = require('fs');
//imported files
const { getQueries } = require('./crud/getQueries');
const { postQueries } = require('./crud/postQueries');
const { collectPostData } = require('./helpers/collectPostData');

/**
 * @function
 * @name readFile
 * @param {Object} fileData 
 * @param {Object} res
 * @description
 * centralize the readFile logic to one place
 */
function readFile(fileData, res) {
    fs.readFile(fileData.path, (err, data) => {
        console.log('data', data);
        res.writeHead(200, {'Content-Type': fileData.contentType});
        res.write(data);
        res.end();
    })
}


const serverSetup = () => http.createServer( (req, res) => {
    console.log('req method', req.method);
    
    const query = req.url;
    console.log('query', query);
    let fileData = '';
    switch(req.method.toLowerCase().trim()){
        case 'get':
            fileData = getQueries(query);
            readFile(fileData, res);
            break;
        case 'post':
            collectPostData(req, result => {
                console.log('result', result);
                fileData = postQueries(query, result);
                console.log('POST path fileData', fileData)
                readFile(fileData, res);
            });
            break;
        default:
            break;
    }
}).listen(8080);

exports.server = () => {
    return serverSetup()
}