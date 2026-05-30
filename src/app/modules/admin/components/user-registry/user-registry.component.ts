import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registry',
  templateUrl: './user-registry.component.html'
})
export class UserRegistryComponent {
  userForm: FormGroup;
  users: any[] = [];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['Staff', Validators.required]
    });
  }

  register() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset({ role: 'Staff' });
    }
  }
}
