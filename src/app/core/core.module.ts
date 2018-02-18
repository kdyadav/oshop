import { SharedModule } from 'shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from 'core/components/bs-navbar/bs-navbar.component';
import { LoginComponent } from 'core/components/login/login.component';
import { HomeComponent } from 'core/components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  exports:[
    BsNavbarComponent,
  ]
})
export class CoreModule { }
