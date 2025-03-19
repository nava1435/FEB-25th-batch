import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';

import { FormsModule } from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { EmiComponent } from './emi/emi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import{HttpClientModule} from "@angular/common/http";
import { FlipkartComponent } from './flipkart/flipkart.component';
import { AccountService } from './account.service';
import { AccountComponent } from './account/account.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';
import { FlipkrtComponent } from './flipkrt/flipkrt.component';



// import { EMIComponent } from './emi/emi.component';

@NgModule({
  declarations: [  
  AppComponent,
  LoginComponent,
  DashboardComponent,
  ErrorComponent, 
  WelcomeComponent, 
  DatabindingComponent,
  CalculatorComponent,
  RectangleComponent, 
  CircleComponent, 
  BmiComponent,
  DatabindingComponent, 
  EmiComponent, 
  DirectivesComponent, 
  EmployeeComponent, 
  VehicleComponent, 
  FlipkartComponent,
  AccountComponent,
  MailComponent,
  WeatherComponent,
  FlipkrtComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],  
  bootstrap: [AppComponent]
})

export class AppModule {


 }
