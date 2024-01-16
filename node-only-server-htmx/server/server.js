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
        res.writeHead(200, {'Content-Type': fileData.contentType});
        res.write(data);
        res.end();
    })
}


const serverSetup = () => http.createServer( (req, res) => {
    const query = req.url;
    let fileData = '';

    switch(req.method.toLowerCase().trim()){
        case 'get':
            fileData = getQueries(query);
            readFile(fileData, res);
            break;
        case 'post':
            collectPostData(req, result => {
                fileData = postQueries(query, result);
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