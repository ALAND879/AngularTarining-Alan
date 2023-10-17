import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
	
export class LoginComponent implements OnInit {

	loginForm: FormGroup;

constructor(private formBuilder: FormBuilder) {
	
}


	ngOnInit(): void {
	
		this.loginForm = this.formBuilder.group({
			email:['', Validators.compose([Validators.email, Validators.required])],
			password:['', Validators.compose([Validators.minLength(8), Validators.required])],
		})


	/*const email = this.formBuilder.group('email');
	const password = this.formBuilder.group('password');*/
}

login() {
	
	if (!this.loginForm.valid) {
		return;
	}

	const email = this.loginForm.get('email');
	const password = this.loginForm.get('password');

	
}
	
	get email() {
		return this.loginForm.get('email');
}

	get password() {
		return this.loginForm.get('password');
	}
}
