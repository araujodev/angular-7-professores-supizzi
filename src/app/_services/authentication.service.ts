import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { User } from "../_models";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`https://reqres.in/api/login`, {
        username,
        password
      })
      .pipe(
        map(user => {
          let userObject = {
            id: 1,
            username: "teste",
            firstName: "first",
            lastName: "last",
            password: "",
            token: ""
          };

          if (user && user.token) {
            userObject.token = user.token;
            localStorage.setItem("currentUser", JSON.stringify(userObject));
            this.currentUserSubject.next(userObject);
          }

          return userObject;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
