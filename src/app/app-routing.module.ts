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
import { HomeComponent } from './home/home.component';
import { BmiComponent } from './bmi/bmi.component';
import { EmiComponent } from './emi/emi.component';



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
  // {path:'bmi',component:BmiComponent,children:[
  //   {path:'bmi',component:BmiComponent, },
  // ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'emi',component:EmiComponent, },
  ]},


  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent}
  ]},

  {path:'**',component:ErrorComponent},//wild-card componet

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




  
