import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//custom
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module'; //don't need, because we use lazy loading
import { UsersService } from '../app/shared/services/users.service';
import { LoginHelperService } from '../app/shared/services/login-helper.service';
import { AuthService } from '../app/shared/services/auth.service';
import { AuthGuard } from './shared/services/auth.guard';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    UsersService,
    LoginHelperService,
    AuthService,
    AuthGuard
    //TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
