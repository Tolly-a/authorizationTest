import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsersService } from '../../shared/services/users.service';
import { LoginHelperService } from '../../shared/services/login-helper.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: Message;
  user: User;
  currentEmail: string = '';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private loginHelper: LoginHelperService,
    private authService: AuthService) { }

  ngOnInit() {
    this.message = new Message('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage('in System', 'success')
        } else if (params['accessDenied']) {
          this.showMessage('You nedd loggedIn', 'warning');
        }
      });

    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'rememberMe': new FormControl(false)
    })
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = ''
    }, 4000);
  }

  onSubmit() {
    const formData = this.loginForm.value;

    this.usersService.login(formData)
      .subscribe((res) => {
        if (res.error) {
          if (res.error.code === 2) {
            this.showMessage(res.error.description, 'danger');
            this.currentEmail = formData.email;
          } else if (res.error.code === 1) {
            this.showMessage(res.error.description, 'danger');
          }
        } else {
          this.message.text = '';
          this.authService.login();
          this.user = res.user;
          window.localStorage.setItem('user', JSON.stringify(this.user));
          this.router.navigate(['/system', 'home']);
        }
      });
  }

  goToForgotPassword() {
    if (this.loginForm.value.email !== '' && this.loginForm.get('email').valid) {
      this.currentEmail = this.loginForm.value.email;
    }
    this.loginHelper.setData(this.currentEmail);
    this.router.navigate(['/forgot-password']);
  }

}
