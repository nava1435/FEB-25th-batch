import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
public accountForm:FormGroup=new FormGroup({
  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  city:new FormControl(),

})
constructor(private accountService:AccountService,private _router:Router){}
create(){
  console.log(this.accountForm.value);
  this.accountService.createAccount(this.accountForm.value).subscribe(
    (data:any)=>{
console.log(data);
alert("new Account created succesgully");
  this._router .navigateByUrl("/dashboard/create-account");
    },(err:any)=>{
      alert("Internal Server Error")
    }
  
  )
}
}
