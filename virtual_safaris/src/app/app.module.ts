import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PaymentComponent } from './payment/payment.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterTouristComponent } from './register-tourist/register-tourist.component';
import { LoginTouristComponent } from './login-tourist/login-tourist.component';
import { TouristProfileComponent } from './tourist-profile/tourist-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HomeComponent,
    RegisterTouristComponent,
    LoginTouristComponent,
    TouristProfileComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
