import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	
	isUserLoggedIn : boolean;
	userName : String;
	
	getUserLoggedIn() {
		return this.isUserLoggedIn;
	}
	
	setUserLoggedIn() {
		this.isUserLoggedIn=true;
	}
	
	getUserName() {
		return this.userName;
	}
	
	setUserName(name: String) {
		this.userName = name;
	}

  constructor() { 
  this.isUserLoggedIn = false;
  }
}
