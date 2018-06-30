import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	
	private isUserLoggedIn;
	private userName;
	
	getUserLoggedIn() {
		return this.isUserLoggedIn;
	}
	
	setUserLoggedIn() {
		this.isUserLoggedIn=true;
	}

  constructor() { 
  this.isUserLoggedIn = false;
  }
}
