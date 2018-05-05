import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TestComponent } from './components/test/test.component';
export const Approutes: Routes = [
{
    path: 'login',
    component: LoginComponent,
    children: [
        { path: 'login', loadChildren: './components/login/login.module#LoginModule',},
    ]
},
{
    path: 'signup',
    component: RegisterComponent,
    children: [
        { path: 'signup', loadChildren: './components/register/register.module#RegisterModule',},
    ]
},
{
    path: 'test',
    component: TestComponent,
    children: [
        { path: 'test', loadChildren: './components/test/test.module#TestModule',},
    ]
},
{
    path: '**',
    redirectTo: '/login' 
}];

