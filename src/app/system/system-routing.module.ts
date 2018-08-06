import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from '../shared/services/auth.guard';

const routes: Routes = [
    { path: '', component: SystemComponent, canActivate:[AuthGuard], children:[
       { path: 'home', component: HomePageComponent }
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SystemRoutingModule{

}