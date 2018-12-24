import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	
  environments=['DIT','SIT','UAT'];
  clients=['Client1', 'Client2'];
  infras=['V4','V5'];
  services=['Authentication','Inquiry'];

  constructor(private user: UserService) { }

  ngOnInit() {
  }

}
