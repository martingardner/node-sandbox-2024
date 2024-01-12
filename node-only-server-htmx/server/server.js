//node packages
const http = require('http');
const fs = require('fs');
//imported files
//const { urlSwitch } = require('./url-switch');
const { getQueries } = require('./crud/getQueries');
const { postQueries } = require('./crud/postQueries');
const { collectPostData } = require('./helpers/collectPostData');


const serverSetup = () => http.createServer( (req, res) => {
    console.log('req method', req.method);
    
    const query = req.url;
    console.log('query', query);
    let fileData = '';
    switch(req.method.toLowerCase().trim()){
        case 'get':
            fileData = getQueries(query);
            fs.readFile(fileData.path, (err, data) => {
                console.log('data', data);
                res.writeHead(200, {'Content-Type': fileData.contentType});
                res.write(data);
                res.end();
            })
            break;
        case 'post':
            collectPostData(req, result => {
                console.log('result', result);
                //postData = result;
                //return postQueries(query, result)
                fileData = postQueries(query, result);
                console.log('POST path fileData', fileData)
                fs.readFile(fileData.path, (err, data) => {
                    console.log('data', data);
                    res.writeHead(200, {'Content-Type': fileData.contentType});
                    res.write(data);
                    res.end();
                })
            })
            
            //returnData = postQueries(query, postData)
            break;
        default:

            break;


    }
}).listen(8080);

exports.server = () => {
    return serverSetup()
}