import { Injectable } from '@angular/core';

@Injectable()
export class StorageManagerService {

  private tokenKey: string = 'token';
  private roleKey: string = 'role';
  private firstNameKey: string = 'first_name';
  private lastNameKey: string = 'last_name';

  constructor() { }

  public storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  public retrieveToken() {
    let storedToken: string = localStorage.getItem(this.tokenKey);
    return storedToken;
  }

  public storeRole(role: string) {
    localStorage.setItem(this.roleKey, role);
  }

  public retrieveRole() {
    let storedRole: string = localStorage.getItem(this.roleKey);
    return storedRole;
  }

  public storeFirstName(first_name: string) {
    localStorage.setItem(this.firstNameKey, first_name);
  }

  public retrieveFirstName() {
    let first_name: string = localStorage.getItem(this.firstNameKey);
    return first_name;
  }

  public storeLastName(last_name: string) {
    localStorage.setItem(this.lastNameKey, last_name);
  }

  public retrieveLastName() {
    let last_name: string = localStorage.getItem(this.lastNameKey);
    return last_name;
  }
}