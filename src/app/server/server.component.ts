import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ListeServersService } from '../liste-servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  oneServer;
  allow : boolean = false;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private serService : ListeServersService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (p: Params) => {
        this.oneServer = this.serService.getServerById(p['id']);
      }
    );

    this.activatedRoute.queryParams.subscribe(
      (q) => {
        this.allow = q['allowEdit'] == '1' ? true : false;
      }
    )
  }

  editServeur() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

}
