const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.0.0')

// Create remove command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (yargs) => notes.addNote(yargs.title, yargs.body)
})

// Create remove command
yargs.command({
    command: 'remove',
    builder: {
        title: {
            describe: 'Title of the note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'Remove a note',
    handler: (yargs) => notes.removeNote(yargs.title)
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a specific note',
    handler: () => console.log('Reading the note!')
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => console.log('Listing all notes!')
})

yargs.parse();