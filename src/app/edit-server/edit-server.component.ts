import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeServersService } from '../liste-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  editedServer;
  constructor(private activatedRoute : ActivatedRoute,
    private serService : ListeServersService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (p) => {
        this.editedServer = this.serService.getServerById(p['id']);
      }
    )
  }

  onUpdate(n, s) {
    this.serService.updateServer({id : this.editedServer.id, name: n, status: s});
    
  }

}
