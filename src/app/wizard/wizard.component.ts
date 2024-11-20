import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper'

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatStepperModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.css',
})
export class WizardComponent {
//  currentStep: number
  wizardForm1!: FormGroup
  wizardForm2!: FormGroup
  wizardForm3!: FormGroup

  constructor(
  ) {
    // this.currentStep = progress.getStep()
  }

  ngOnInit() {
    this.wizardForm1 = new FormGroup({
      firstName: new FormControl('', Validators.required),
    })

    this.wizardForm2 = new FormGroup({
      lastName: new FormControl('', Validators.required),
    })

    this.wizardForm3 = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }
}
