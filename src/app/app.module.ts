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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { PracticeComponent } from './practice/practice.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CreateStudentComponent } from './create-student/create-student.component';


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
  CreateVehicleComponent,
  CreateAccountComponent,
  CreateUserComponent,
  StudentCardComponent,
  VehicleDetailsComponent,
  PracticeComponent,
  Sibling1Component,
  Sibling2Component,
  ParentComponent,
  ChildComponent,
  RatingComponent,
  CreateStudentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],  
  bootstrap: [AppComponent]
})

export class AppModule {


 }
