import { Component, OnInit } from '@angular/core';
import { ListeServersService } from '../liste-servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  listServers = [];
  constructor(private serService : ListeServersService) { }

  ngOnInit() {
    this.listServers = this.serService.getListServers();
  }

}
