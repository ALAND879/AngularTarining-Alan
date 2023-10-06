import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public users: any

  createUserForm = this.formBuilder.group({
    name: ['',Validators.required],
    email: ['',Validators.email],
  })

  constructor(private userService:UsersListService, private formBuilder: FormBuilder){
    this.getUsers()
  }
  getUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data
      console.log(this.users)
    })
  }

  addUser() {
    if(this.createUserForm.invalid) return;
    let name = this.createUserForm.get('name')?.value;
    let email = this.createUserForm.get('email')?.value;
    let newUser = {name, email}
    this.userService.addUser(newUser)
  }

  removerUser(id: number) {
    this.userService.deleteUser(id);
  }

}
