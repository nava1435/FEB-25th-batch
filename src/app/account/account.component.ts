import { Component } from '@angular/core';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accounts:any;

constructor(private _accountService:AccountService){
  _accountService.getAccounts().subscribe(
(data:any)=>{
  console.log(data)
  this.accounts=data;
  console.log(this.accounts);
},(err:any)=>{
  alert("Busy server");
}
      
)
}

}

// ---------------
