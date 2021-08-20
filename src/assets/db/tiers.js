const db = require('../db/getDb')

// In main process.
/*const { ipcMain } = require('electron')

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg) // prints "ping"
    getTiers((err, rows) => {
        event.reply('asynchronous-reply', JSON.stringify(err) + JSON.stringify(rows))
    })
})

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg) // prints "ping"
    event.returnValue = 'pong'
})*/

function getTiers(callback) {
    const query = 'SELECT * FROM tiers'
    db.all(query, (err, rows) => {
        console.log("Results...", rows, err)

        if (rows) {
            callback(err, rows)
        }
    })
}

function getTiersDecl(callback) {
    const query = `select processes.*, tiers_decl.tiers_id
from processes
left join tiers_decl on processes.id = tiers_decl.process_id
order by tiers_decl.tiers_id`
    db.all(query, (err, rows) => {
        console.log("Results...", rows, err)

        if (rows) {
            callback(err, rows)
        }
    })
}

function getContacts(callback) {
    const query = `SELECT tiers_contacts.id,
    tiers_contacts.tiers_id,
    tiers.tiers_denom,
    tiers.tiers_code,
    tiers_contacts.contact_name,
    tiers_contacts.contact_tel
FROM tiers_contacts
join tiers on tiers.id = tiers_contacts.tiers_id;`
    db.all(query, (err, rows) => {
        console.log("Results...", rows, err)

        if (rows) {
            callback(err, rows)
        }
    })
}

module.exports = {
    getTiers,
    getContacts,
    getTiersDecl
}
