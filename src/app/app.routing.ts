
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes : Routes = [
    {path: '' ,component: HomeComponent},
    {path: 'servers', component: ServersComponent, children: [
        {path: ':id', component: ServerComponent},
        {path: ':id/edit', component: EditServerComponent}
    ]},
    {path: 'users' ,component: UsersComponent, children: [
        {path: ':id', component: UserComponent}
    ]},
];

export const ROUTING = RouterModule.forRoot(routes);

