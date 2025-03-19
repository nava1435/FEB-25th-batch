import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { EmiComponent } from './emi/emi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { AccountComponent } from './account/account.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';




const routes: Routes = [{path:'dashboard',component:DashboardComponent,children:[
                            {path:'welcome',component:WelcomeComponent}
                              ]},//parent routing
  {path:'dashboard',component:DashboardComponent,children:[
  {path:'Databinding',component:DatabindingComponent},]},
 

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'calculator',component:CalculatorComponent},
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'rectangle',component:RectangleComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'circle',component:CircleComponent}
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'bmi',component:BmiComponent, },
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'employee',component:EmployeeComponent, },
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'directives',component:DirectivesComponent, },
  ]},
  // {path:'bmi',component:BmiComponent,children:[
  //   {path:'bmi',component:BmiComponent, },
  // ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'emi',component:EmiComponent, },
  ]},


  // {path:'dashboard',component:DashboardComponent,children:[
  //   {path:'home',component:HomeComponent}
  // ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'vehicle', component:VehicleComponent},
  ]},

  {path:'dashboard',component:DashboardComponent,children:[
    {path:'flipkart', component:FlipkartComponent},
  ]},


  {path:'dashboard',component:DashboardComponent,children:[
    {path:'account',component:AccountComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'weather',component:WeatherComponent}
  ]},





  {path:'dashboard',component:DashboardComponent,children:[
    {path:'mail',component:MailComponent}
  ]},




  {path:'**',component:ErrorComponent},//wild-card componet

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
