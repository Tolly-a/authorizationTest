import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../shared/services/users.service';
import { LoginHelperService } from '../../shared/services/login-helper.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

    fpForm: FormGroup;
    message: Message = new Message('', '');
    user: User;
    currentEmail: string = '';
    sub: Subscription;
    emailFocus: boolean = false;


    constructor(private usersService: UsersService,
        private loginHelper: LoginHelperService) { }

    ngOnInit() {
        this.message = new Message('danger', '');

        this.loginHelper.getData()
            .subscribe(res =>
                this.currentEmail = res
            );

        if (this.currentEmail !== '') {
            this.emailFocus = true;
        }

        this.fpForm = new FormGroup({
            'email': new FormControl(this.currentEmail, [Validators.required, Validators.email]),
        })

    }


    private showMessage(text: string, type: string = 'danger') {
        this.message = new Message(type, text);
        window.setTimeout(() => {
            this.message.text = ''
        }, 4000);
    }

    onSubmit() {
        const formData = this.fpForm.value;
        this.usersService.sendRequestToInstructions(formData)
            .subscribe((res: any) => {
                console.log(res);
                if (res.error === null) {
                    this.showMessage(this.message.text = "The instructions for password recovery were sent to your email", 'success');
                }
                if (res.error && res.error.code === 1) {
                    this.showMessage(res.error.description, 'danger');
                }
            });
    }

}
