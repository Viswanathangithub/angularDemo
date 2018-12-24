import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	
  loggedInUser : String;
  
  environments : String[];
  clients : String[];
  infras : String[];
  services : String[];

  constructor(private httpService: HttpClient, private router:Router, private user: UserService) {
	  if(user.getUserLoggedIn()) {
		  this.loggedInUser = user.getUserName();	
  } else {
	  this.router.navigate(['error']);
  }
  }

  ngOnInit() {
	  this.httpService.get('./assets/json/Environments.json')
	  .subscribe(data => {
		  this.environments = data as String[];
		  console.log(this.environments);
	  },
	  (err: HttpErrorResponse) => {
        console.log (err.message);
      }
	  );
	  
	  this.httpService.get('./assets/json/Clients.json')
	  .subscribe(data => {
		  this.clients = data as String[];
		  console.log(this.clients);
	  },
	  (err: HttpErrorResponse) => {
        console.log (err.message);
      }
	  );
	  
	  this.httpService.get('./assets/json/InfraStructures.json')
	  .subscribe(data => {
		  this.infras = data as String[];
		  console.log(this.infras);
	  },
	  (err: HttpErrorResponse) => {
        console.log (err.message);
      }
	  );
	  
	  this.httpService.get('./assets/json/Services.json')
	  .subscribe(data => {
		  this.services = data as String[];
		  console.log(this.services);
	  },
	  (err: HttpErrorResponse) => {
        console.log (err.message);
      }
	  );
  }
}
