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

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BmiComponent } from './bmi/bmi.component';
import { EmiComponent } from './emi/emi.component';
import { DirectivesComponent } from './directives/directives.component';


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
  HomeComponent, 
  HeaderComponent, 
  DatabindingComponent, 
  EmiComponent, 
  DirectivesComponent, 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],  
  bootstrap: [AppComponent]
})

export class AppModule { }
