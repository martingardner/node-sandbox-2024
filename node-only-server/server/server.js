var http = require('http');
var url = require('url');
var fs = require('fs');
var urlSwitch = require('./url-switch');

const serverSetup = () => http.createServer( (req, res) => {
    const urlParse = url.parse(req.url);
    const fileData = urlSwitch.urlSwitch(urlParse.href);

    fs.readFile(fileData.path, (err, data) => {
        res.writeHead(200, {'Content-Type': fileData.contentType});
        res.write(data);
        return res.end();
    })

}).listen(8080);


exports.server = () => {
    return serverSetup()
}

