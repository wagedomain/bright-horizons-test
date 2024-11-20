import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { WizardComponent } from './wizard/wizard.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'wizard/:step',
    component: WizardComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
]
