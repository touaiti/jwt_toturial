import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { StorageManagerService } from '../../services/storage-manager.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticationService, StorageManagerService]
})
export class RegisterComponent implements OnInit {
  ruser = new User()
  constructor(public router: Router,private loginService: AuthenticationService,private storageManagerService:StorageManagerService) {
    if (this.storageManagerService.retrieveToken() !== ''){
      this.router.navigate(['/test']);
    }
   }

  ngOnInit() {
  }
  goSignIn(){
    this.router.navigate(['/login']);
  }
  handleSignUp(){
    this.loginService.signUp(this.ruser).subscribe(user => {
      this.storageManagerService.storeToken(user.token)
      this.storageManagerService.storeFirstName(user.first_name)
      this.storageManagerService.storeLastName(user.last_name)
      this.storageManagerService.storeRole(user.role)
      this.ruser = new User()
      this.router.navigate(['/test']);
    })
  }
}