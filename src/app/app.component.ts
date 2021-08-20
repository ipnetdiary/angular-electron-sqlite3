import { Component } from '@angular/core';
import { ElectronService } from '../app/_services/electron.service';
import { SqliteService } from '../app/_services/sqlite.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifcompta';

  constructor(
    private electronService: ElectronService,
    private sqliteservice: SqliteService
  ) {
    console.log("sqlite3 ", electronService.sqlite3)
    sqliteservice.connectDB(electronService.sqlite3)

    sqliteservice.getTiers((err, rows) => {
      console.log("rows from app ", err, rows)
    });
  }
}
