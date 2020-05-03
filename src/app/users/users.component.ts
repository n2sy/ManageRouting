import { Component, OnInit } from '@angular/core';
import { ListeServersService } from '../liste-servers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers = [];
  constructor(private serService : ListeServersService) { }

  ngOnInit() {
    this.listUsers = this.serService.getListUsers();
  }

}
