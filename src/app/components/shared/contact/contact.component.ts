import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
  
})
export class ContactComponent implements OnInit{
//social icons
isOpen = false;

toggle() {
  this.isOpen = !this.isOpen;
}

panelOpenState = false;
  //forms
  allUsers: any[] = JSON.parse(localStorage.getItem('allUsers') || '[]');
  signUpForm: FormGroup;
 

  constructor(private snackBar: MatSnackBar, private router: Router){
    this.signUpForm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)]),
      cellNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
     
    })
  }

  ngOnInit() {
  }

  submit():void {
    if(this.signUpForm.invalid) return;
    //comparing the users password  to the conPassword if it matches also with the pattern
    
    //assigning the form Values entered to formValue and converting the email to lowercase
    let formValue = this.signUpForm.value;
    const foundUser = this.allUsers.find(user => user.email.toLowerCase() === this.signUpForm.get('email')?.value.toLowerCase());

    if(foundUser) {
      this.snackBar.open('User already exist, please login.', 'Ok', {
        duration: 3000
      })
    } else {
      delete formValue.confirmPassword;
//Pushing the users to the existing users in the local storage
      this.allUsers.push(formValue);
//Saves them then go to the sign-in page
      localStorage.setItem('allUsers', JSON.stringify(this.allUsers));
      this.signUpForm.reset();
      this.router.navigate(['/sign-in']);
    }
  }

}
