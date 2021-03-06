import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  userDetails;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserDashboard().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);
      }
    );
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['']);
  }

}
