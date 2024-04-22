const fs = require('fs');

const getNotes = function () {
    return "your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes();
    notes.push({
        title: title,
        body: body
    })
    
    saveNotes(notes);
}

const saveNotes = function (notes) {
    const jsonString = JSON.stringify(notes);
    fs.writeFileSync("notes.json", jsonString);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const jsonString = dataBuffer.toString();
        const object = JSON.parse(jsonString);
        return object;
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};

//export default getNotes;