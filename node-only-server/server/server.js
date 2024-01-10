var http = require('http');
var url = require('url');
var fs = require('fs');

const serverSetup = () => http.createServer( (req, res) => {
    console.log('req', req.url);
    const urlParse = url.parse(req.url);
    console.log('urlParse', urlParse);
    console.log('urlParse.query', urlParse.query);
    console.log('urlParse.href', urlParse.href);
    //console.log('res', res);
    fs.readFile('./htmlPages/index.html', (err, data) => {
        //console.log('err', err);
        //console.log('data', data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    
    
}).listen(8080);


exports.server = () => {
    return serverSetup()
}

