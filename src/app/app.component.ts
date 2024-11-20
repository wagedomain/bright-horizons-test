import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tutorial'
}
