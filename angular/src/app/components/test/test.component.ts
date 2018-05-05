import { Component, OnInit } from '@angular/core';
import { StorageManagerService } from '../../services/storage-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor( private storageManagerService: StorageManagerService, private router: Router) { 
    this.user_first_name = this.storageManagerService.retrieveFirstName();
    this.user_last_name = this.storageManagerService.retrieveLastName();
  }

  ngOnInit() {
  }
  logOut(){
    this.storageManagerService.storeToken('')
    this.router.navigate(['/login'])
  }
}
