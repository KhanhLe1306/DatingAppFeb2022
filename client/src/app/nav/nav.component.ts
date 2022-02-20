import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, err => {
      console.log(err);
    })
  }

  logout() {
    this.loggedIn = false;
    this.accountService.logout();
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user;     //boolean   true if there is an use, false if the user is null
    }, err => {
      console.log(err);
    }
    )
  }

}
