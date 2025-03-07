const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title:title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }
    else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse("No Note found!"))
    }
    else {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json') //reads file in synchronous way
        const dataJSON = dataBuffer.toString()  //converts object to JSON string
        return JSON.parse(dataJSON)  //converts JSON string to JS object/value.
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)  //converts JS object/value to JSON string
    fs.writeFileSync('notes.json',dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.blue("Your Notes"))
    notes.forEach(note => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse("No note found!"))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}