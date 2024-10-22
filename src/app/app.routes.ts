import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { Inject, inject } from '@angular/core';
import { AuthServiceService } from './services/auth.service.service';


export const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },

  {
    path : '',
    component : LayoutsComponent,
    canActivateChild  : [()=> inject(AuthServiceService).isAuthenticated()],
    children: [
      {
        path: '',
        component : HomeComponent
      },



    ]
  }
];
