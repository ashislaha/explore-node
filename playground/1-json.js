const fs = require('fs');

// Javascript object
const book = {
    title: 'Ego is the enemy',
    author: "Ryan Holiday"
}

let isWrite = false;
if (isWrite) {
    // convert this object into string
    const bookJSON = JSON.stringify(book);
    console.log(bookJSON);
    fs.writeFileSync('1-json.json', bookJSON);  
} else {
    const dataBuffer = fs.readFileSync('1-json.json');
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    console.log(data);
}