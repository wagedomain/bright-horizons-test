import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  constructor(private router: Router){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  onFormSubmit() {
    this.router.navigate(['wizard/1']);
  }
}
