import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeServersService {
  listServers = [
    {
      id : 1,
      name : 'Serveur de production',
      status : 'online'
    },
    {
      id : 2,
      name : 'Serveur de test',
      status : 'offline'
    },
    {
      id : 3,
      name : 'Serveur de déploiement',
      status : 'online'
    }
  ];

  listUsers = [
    {
      id : 1,
      name : "Omar Thaljeni"
    },
    {
      id : 2,
      name : "Houcem Kabboudi"
    },
    {
      id : 3,
      name : "Sameh Ben Said"
    }
  ]

  constructor() { }

  getListServers() {
    return this.listServers;
  }

  getServerById(id) {
    return this.listServers.find((p) => p.id == id);
  }

  updateServer(newServ) {
    let s = this.getServerById(newServ.id);
    let i = this.listServers.indexOf(s);
    this.listServers[i] = newServ;
  }

  getListUsers() {
    return this.listUsers;
  }

  getUserById(id) {
    return this.listUsers.find((u) => u.id == id);
  }
}
