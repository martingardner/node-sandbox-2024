const fs = require('fs');

async function textEntered(data){
    //const controller = new AbortController();
    console.log('textEntered data', data);

    const textData = `<span>${data.textdata}</span>`;
    console.log('textData', textData);
    //const writeF = fs.promises.writeFile('textEntered.html', textData);
    fs.writeFile('./public/templates/textEntered.html', textData, ()=>{console.log('WRITEFILE')});
    //const writeF = fs.promises.writeFileSync('textEntered.html', textData);

    //controller.abort();

    //await writeF;
   
}

exports.textEntered = (data) => {
    return textEntered(data)
}