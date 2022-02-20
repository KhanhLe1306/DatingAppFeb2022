import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'This is dating APP';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) { }

  ngOnInit(): void {    //This method will run when the app initiates
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  getUsers() {
    this.http.get("https://localhost:5001/api/users").subscribe(response => {
      this.users = response;
      console.log(this.users)
    }, error => {
      console.log(error);
    })
  }
}
