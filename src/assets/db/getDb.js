const sqlite3 = require('sqlite3')
//const path = require('path')

console.log("curr dir", __dirname)
const dbPath = './db/cpta.db3'

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.log("Database error ", err)
})

module.exports = db