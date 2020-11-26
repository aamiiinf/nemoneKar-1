import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";

import { Users } from "../users"

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
  public massage = "";
  constructor( private http:HttpClient ) { }

  addPost(
    name: string,
    family: string,
    password: string,
    password2: string,
    email: string,
    title: string,
    tell: number
  ) {
    const users: Users = {
      id: null,
      name: name,
      family: family,
      password: password,
      password2: password2,
      email: email,
      title: title,
      tell: tell
    }
    this.http.post<{ msg: string }>("http://localhost:3000/api/singin", users)
    .subscribe((data) => {
        this.massage = data.msg
      });
  }

  onAddPost(form: NgForm) {
    this.addPost(
      form.value.name,
      form.value.family,
      form.value.password,
      form.value.password2,
      form.value.email,
      form.value.title,
      form.value.tell
      );
    form.resetForm();
  }
}
