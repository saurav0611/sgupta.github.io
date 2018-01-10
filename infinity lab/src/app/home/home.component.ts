import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[];
  
  constructor(
    private _usersservice: UsersService,  
  ){ }
    
  ngOnInit() {
    this._usersservice.getUsers()
      .subscribe(users =>{
        this.users = users;
      });   
    }

  submit(value) {
    this.users.unshift({
      name : value.hostName,
      email : value.loopBack
    })

    this._usersservice.addUser(value)
      .subscribe(
        null,
        () => {
          this.users.shift()
        })
  }

  delete(user){
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
        var index = this.users.indexOf(user)
        this.users.splice(index, 1);
        this._usersservice.deleteUser(user.id)
            .subscribe(null, 
        err => {
            alert("Could not delete the user.");
               // Revert the view back to its original state
               // by putting the user object at the index
               // it used to be.
          this.users.splice(index, 0, user);
          });
    }
}

}
