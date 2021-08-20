import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  db;
  constructor() { }

  connectDB(sqlite3) {
    const dbPath = __dirname + '/assets/db/cpta.db3'
    console.log("path ", dbPath, __dirname)
    this.db = new sqlite3.Database(dbPath, (err) => {
      if (err) console.log("Database error ", err)
    })
  }

  getTiers(callback) {
    const query = 'SELECT * FROM tiers'
    this.db.all(query, (err, rows) => {
      console.log("Results...", rows, err)

      if (rows) {
        callback(err, rows)
      }
    })
  }
}
