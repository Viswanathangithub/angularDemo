import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	
  loggedInUser : String;
  
  environments=['DIT','SIT','UAT'];
  clients=['Client1', 'Client2'];
  infras=['V4','V5'];
  services=['Authentication','Inquiry'];

  constructor(private router:Router, private user: UserService) {
	  if(user.getUserLoggedIn()) {
		  this.loggedInUser = user.getUserName();	
  } else {
	  this.router.navigate(['error']);
  }
  }

  ngOnInit() {
  }
}
