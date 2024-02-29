import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

   //checks the localstorage first to see if theres a matching user
   allUsers: any[] = JSON.parse(localStorage.getItem('allUsers') || '[]');
   signUpForm: FormGroup;
   
  // roles: string[] = ['admin', 'supplier', 'customer'];

  constructor(private snackbar: MatSnackBar, private router: Router){
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)]),
      cellNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      address: new FormGroup({
        streetName: new FormControl('', [Validators.required]),
        streetNumber: new FormControl(null, [Validators.required]),
        suburb: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        code: new FormControl(null, [Validators.required]),
      }),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }
  ngOnInit():void {
  }

  submit():void {
    console.log('Working')
    if(this.signUpForm.invalid) {
      this.snackbar.open('Form is invalid', 'OK', {duration: 3000})
      return;
    } 
    //comparing the users password  to the conPassword if it matches also with the pattern
    if(this.signUpForm.get('password')?.value !== this.signUpForm.get('confirmPassword')?.value) {
      this.signUpForm.get('confirmPassword')?.setErrors({'pattern': true});
      return;
    }
    //assigning the form Values entered to formValue and converting the email to lowercase
    let formValue = this.signUpForm.value;
    const foundUser = this.allUsers.find(user => user.email.toLowerCase() === this.signUpForm.get('email')?.value.toLowerCase());

    if(foundUser) {
      this.snackbar.open('User already exist, please login.', 'Ok', {
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
