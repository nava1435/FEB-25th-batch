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
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { PracticeComponent } from './practice/practice.component';
import { AuthenticationGuard } from './authentication.guard';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { CreateStudentComponent } from './create-student/create-student.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,canActivate:[AuthenticationGuard], children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'Databinding', component: DatabindingComponent },
      { path: 'flipkart', component: FlipkartComponent },
      { path: 'account', component: AccountComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'mail', component: MailComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'circle', component: CircleComponent },
      { path: 'bmi', component: BmiComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'emi', component: EmiComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'create-vehicle', component: CreateVehicleComponent },
      {path:'create-account', component:CreateAccountComponent},
      {path:'student-card', component:StudentCardComponent},
      {path:'create-student', component:CreateStudentComponent},


      {path:'create-user', component:CreateUserComponent},
      {path:'vehicle-details/:id', component:VehicleDetailsComponent},
      {path:'edit-vehicle/:id', component:CreateVehicleComponent},
      {path:'practice',component:PracticeComponent},
      {path:'sibling',component:Sibling1Component},
      {path:'parent',component:ParentComponent},
      // {path:'home',component:HomeComponent},
    ],
  }, 
 

  {path:"",component:LoginComponent},
  {path:"Sibling",component:LoginComponent},
  { path: '**', component: ErrorComponent }, //wild-card componet
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

