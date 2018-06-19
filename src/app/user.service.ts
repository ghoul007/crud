import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }



  getUser() {

    return this.httpclient.get('http://localhost:3000/users');
    // .pipe(map(res => Object.values(res)))


  }


  deleteUser(user) {
    return this.httpclient.delete('http://localhost:3000/users/' + user.id);

  }
}
