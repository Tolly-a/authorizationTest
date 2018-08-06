import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgotPassword/forgot-password.component';

const routes: Routes = [
    { path: '', component: AuthComponent, children:[
        { path: 'login', component: LoginComponent },
        { path: 'forgot-password', component: ForgotPasswordComponent}
    ]}
]
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class AuthRoutingModule {}