import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	data: {
        title: 'Login Page',
        urls: [{title: 'Login',url: '/login'},{title: 'Login Page'}]
    },
	component: LoginComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [LoginComponent]
})
export class LoginModule { }