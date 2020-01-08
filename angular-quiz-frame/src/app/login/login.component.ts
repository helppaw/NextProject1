import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service' ;
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  credentials = {
    username: '',
    password: ''
  };
  errorMessage = '';
  errorMessageSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.authService.logout();
    this.errorMessageSubscription = this.authService.$loginError.subscribe(errorMessage => {
      this.errorMessage = errorMessage;
    });

}

login() {
  this.authService.login(this.credentials);
}

ngOnDestroy(): void {
  this.errorMessageSubscription.unsubscribe();
}
}