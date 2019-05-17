import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertsService) { }

  authUser: any;
  debug = false;

  getUser(username: string, password: string): void {
    this.authenticationService.login(username, password);
    this.router.navigate(['/home']);
    // .then(data => console.log(data));
    // console.log(localStorage.getItem('user'))

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      // checks to make sure form is valid, regardless of user being able to login or not
      // This needs to be fixed, if the user accidentaly puts in invalid login credentials the
      // .loading freezes the login button, thus [disabled] was commented out in the html
      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value);
    }

  }

}
