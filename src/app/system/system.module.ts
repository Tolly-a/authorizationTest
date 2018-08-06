import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '../../../node_modules/@angular/forms';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
    declarations: [
        SystemComponent,
        HomePageComponent,
    ],
    imports: [
        CommonModule,
        SystemRoutingModule,
    ]
})

export class SystemModule{ 
}