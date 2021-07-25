import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	postForm1: FormGroup;
	emailValidator: string = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$';
	hide = true;

	constructor(
		public dialog: MatDialog,
		private router: Router,
		private fb1: FormBuilder,

	) { }

	ngOnInit(): void {
		this.postForm1 = this.fb1.group({
			correo: ['', [Validators.required, Validators.pattern(this.emailValidator)]],
			contrasena: ['', [Validators.required]],
		});
	}


	submit(){

	}


}
