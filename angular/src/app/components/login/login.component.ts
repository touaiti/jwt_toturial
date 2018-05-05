import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service'
import { StorageManagerService } from '../../services/storage-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, StorageManagerService]
})
export class LoginComponent implements OnInit {
  user = new User()
  constructor(public router: Router,private loginService: AuthenticationService,private storageManagerService:StorageManagerService) { }

  ngOnInit() {
    if (this.storageManagerService.retrieveToken() !== ''){
      this.router.navigate(['/test']);
    }
  }

  goSignUp(){
    this.router.navigate(['/signup']);
  }
  handleSignIn(){
    this.loginService.signIn(this.user).subscribe(user => {
      this.storageManagerService.storeToken(user.token)
      this.storageManagerService.storeFirstName(user.first_name)
      this.storageManagerService.storeLastName(user.last_name)
      this.storageManagerService.storeRole(user.role)
      this.user = new User()
      this.router.navigate(['/test']);
    })
  }
  
}