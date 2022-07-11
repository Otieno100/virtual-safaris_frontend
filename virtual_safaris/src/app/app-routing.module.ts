import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterTouristComponent } from './register-tourist/register-tourist.component';
import{ LoginTouristComponent} from './login-tourist/login-tourist.component';
import {TouristProfileComponent} from './tourist-profile/tourist-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pay', component: PaymentComponent },
  { path: 'tourist/register', component: RegisterTouristComponent},
  {path: 'tourist/login', component:LoginTouristComponent},
  { path: 'tourist/profile', component:TouristProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
