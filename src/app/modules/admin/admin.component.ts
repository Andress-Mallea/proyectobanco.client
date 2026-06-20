import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../core/services/bank.service';
import { UserService } from '../../core/services/user.service';
import { UserRole } from '../../core/models/enums.model';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports : [ReactiveFormsModule,CurrencyPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  planForm: FormGroup;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, public bankService: BankService, public userService: UserService, private router: Router) {
    this.planForm = this.fb.group({
      usuarioSeleccionado: ['', Validators.required],
      monto: [0, [Validators.required, Validators.min(1)]],
      plazoMeses: [1, [Validators.required, Validators.min(1)]],
      interestRate: [0, [Validators.required, Validators.min(0)]],
      penaltyRate: [0, [Validators.required, Validators.min(0)]],
      graceDays: [0, [Validators.required, Validators.min(0)]],
      esFija: [true]
    });
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      ci: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      role: [UserRole.CLIENT]
    });
  }
  savePlan() {
    if (this.planForm.valid) {
      this.bankService.AddPlan(this.planForm.value);
      this.planForm.reset({ isVariableRate: false, graceDays: 0 });
    }
  }
  saveUser() {
    if (this.userForm.valid) {
      const error = this.userService.addUser(this.userForm.value);
      if (error) {
        alert(error);
      } else {
        this.userForm.reset({ role: 'Client' });
      }
    }
  }
  esRutaPlanes(): boolean {
    return this.router.url.includes('plans');
  }
}

