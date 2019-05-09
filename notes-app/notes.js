const fs = require('fs')
const chalk = require('chalk')

const fileName = 'notes.json'

const getNotes = () => {
    return loadNotes()
}

const listNotes = () => {
    console.log(chalk.inverse('Your notes:'))
    console.log('###############')
    
    const notes = loadNotes()

    notes.forEach((note) => console.log('- ' + note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const hit = notes.find(note => note.title === title)

    if (hit) {
        console.log(chalk.underline(hit.title))
        console.log(hit.body)
    } else {
        console.log(chalk.red('No note found!'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()

    if (notes.some((note) => note.title === title)) {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    else{
        notes.push({title, body})
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    if(notes.some((note) => note.title === title)){
        const notesToKeep = notes.filter((note) => note.title !== title)
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    }
    else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const loadNotes = () => {
    try{
        return JSON.parse(fs.readFileSync(fileName).toString())
    } catch(error) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync(fileName, JSON.stringify(notes))
}

module.exports = {
    getNotes: getNotes,
    listNotes: listNotes,
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote
}
