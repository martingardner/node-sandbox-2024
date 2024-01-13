const fs = require('fs');

function textEntered(data){
    const textData = `<span>${data.textdata}</span>`;

    fs.writeFile('./public/templates/textEntered.html', textData, ()=>{console.log('WRITEFILE')});  
}

exports.textEntered = (data) => {
    return textEntered(data)
}