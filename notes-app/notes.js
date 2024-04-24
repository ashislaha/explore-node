const fs = require('fs');

const getNotes = () => {
    return "your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter( (note) => {
        return note.title === title
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('new note added');
    } else {
        console.log('note title exists');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const remainingNotes = notes.filter( (note) => {
        return (note.title != title);
    });

    if (notes.length != remainingNotes.length) {
       saveNotes(remainingNotes);
       console.log('Note has been removed');
    } else {
        console.log('Note does not exist, cannot delete anything');
    }
}

const saveNotes = function (notes) {
    const jsonString = JSON.stringify(notes);
    fs.writeFileSync("notes.json", jsonString);
}

// It returns array of javascript Objects
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
    addNote: addNote,
    removeNote: removeNote
};

//export default getNotes;