import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any = [];
  title = 'app';
  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(res => {
      this.users = res

    })
  }


  deleteUser(user, index) {
    this.userService.deleteUser(user).subscribe(res=> {
      if(!Object.keys(res).length){
        console.log("success");
        
        this.users.splice(index, 1)
      }
      
    });
  }
}
