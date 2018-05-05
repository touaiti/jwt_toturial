import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component'
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
	path: '',
	data: {
        title: 'Register Page',
        urls: [{title: 'Register',url: '/signup'},{title: 'SignUp Page'}]
    },
	component: RegisterComponent
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }