import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  users: any;

  createUserForm = this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.email],
  })


  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.getUsers();
  }


  getUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  addUser() {
    // validacion de formulario
    if(this.createUserForm.invalid) return;

    let name = this.createUserForm.get('name').value
    let email = this.createUserForm.get('email').value;
    //let id = Math.trunc(Math.random()*1000);

    let newUser = {name,email};

    this.userService.addUser(newUser);
  }

  removeUser(id: number) {
    // validacion
    this.userService.deleteUser(id);
  }
}
