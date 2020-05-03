import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeServersService } from '../liste-servers.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selectedUser : {id : number, name : string};
  constructor(private activatedRoute : ActivatedRoute,
    private serService : ListeServersService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.selectedUser = this.serService.getUserById(params['id']);
      }
    )
  }

}
