import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
user:User={
  name:'navaneeth',
  email:'nava@gmail.com',
  age:28
  
};
}
