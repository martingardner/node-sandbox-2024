function textEntered(data){
    console.log('textEntered data', data);
    return(
        <span>
            value here
        </span>
    )
}

exports.textEntered = (data) => {
    return textEntered(data)
}