import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  term: string = '';
  accounts: any = [];

  constructor(private _accountService: AccountService) {
    this.loadAccounts();
    _accountService.getAccounts().subscribe(
      (data: any) => {
        console.log(data);
        this.accounts = data;
        console.log(this.accounts);
      },
      (err: any) => {
        alert('Busy server');
      }
    );
  }

  filter() {
    this._accountService.getFilterAccounts(this.term).subscribe(
      (data: any) => {
        console.log(data);
        this.accounts = data;
      },
      (err: any) => {
        alert('internal Server Error');
      }
    );
  }

  column: string = '';
  order: string = '';
  sort() {
    this._accountService.getSortedAccounts(this.column, this.order).subscribe(
      (data: any) => {
        console.log(data);
        this.accounts = data;
      },
      (err: any) => {
        alert('Internal Ser er Error');
      }
    );
  }
  loadAccounts() {
    this._accountService.getAccounts().subscribe(
      (data: any) => {
        console.log(this.accounts);
      },
      (err: any) => {
        alert('Internal server Error');
      }
    );
  }
  delete(id: any) {
    if (confirm('Are you sure to delete') == true) {
      this._accountService.deleteAccounts(id).subscribe(
        // this._vehicleService.deleteVehicle(id).subscribe(
        (data: any) => {
          alert('Record Deleted Succesfully');
        },
        (err: any) => {
          alert('Internal Server Error');
        }
      );
    } else {
      alert('you have cancelled');
    }
  }
  limit: string = '';
  page: string = '';
  pagination() {
    this._accountService.getPaginatedAccounts(this.limit, this.page).subscribe(
      (data: any) => {
        // console.log(data);
        this.accounts = data;
        console.log(this.accounts);
        
      },

      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
}
