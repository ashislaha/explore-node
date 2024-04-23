const validator = require('validator');
//const chalk = require('chalk');
const yargs = require('yargs')
const fs = require('fs');

const add = require('./utils.js');
const notes = require('./notes.js');
const { argv } = require('process');


//"type": "module", <-- update package.json
// import chalk from 'chalk';
// import validator from 'validator';
// import fs from 'fs';
// import yargs from 'yargs';

// import add from './utils.js';
// import notes from './notes.js';

const fileName = "notes.txt";
fs.writeFileSync(fileName, "this is a text file. ");
fs.appendFile(fileName, "This is additional content", (err) => {
    if (err) throw err;
    console.log("appended content")
});

//console.log(validator.isEmail("gmail.com"));
//console.log(validator.isURL("http://curiecode.com"));
//console.log(add(2,3));
//console.log(notes());
//console.log(chalk.red('success!!'));
// const command = process.argv[2];


// add a note
yargs
.command({
    command: 'add',
    describe: "adding a note",
    builder: {
        title: {
            describe: "give a note title",
            alias: 't',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "give a note content",
            alias: 'body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        const title = argv.title;
        const body = argv.body;
        notes.addNote(title, body);
    }
});

// Remove a note
yargs
.command({
    command: 'remove',
    describe: "remove a note",
    builder: {
        title: {
            describe: "give a note title",
            alias: 't',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        const title = argv.title;
        notes.removeNote(title);
    }
});

// Read a note
yargs
.command({
    command: 'read',
    describe: "Read a note",
    builder: {
        title: {
            describe: "give a note title",
            alias: 't',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        const title = argv.title;
        console.log("Read note: ", title);
    }
});

// List down all notes
yargs
.command({
    command: 'list',
    describe: "list down all saved notes",
    handler: function(argv) {
        console.log("List down all notes");
    }
});

yargs.parse();
