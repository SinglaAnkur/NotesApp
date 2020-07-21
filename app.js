const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { argv } = require('yargs')
const { describe } = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
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
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: 'list',
    describe: 'List a note',
    handler(){
        console.log('Listing a note')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(){
        console.log('Reading a note')
    }
})
yargs.parse()
