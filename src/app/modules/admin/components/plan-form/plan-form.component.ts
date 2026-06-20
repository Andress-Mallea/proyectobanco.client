import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BankService } from '../../../../core/services/bank.service';

@Component({
  selector: 'app-plan-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './plan-form.component.html'
})
export class PlanFormComponent {
  planForm: FormGroup;
  constructor(private fb: FormBuilder, private bankService: BankService) {
    this.planForm = this.fb.group({
      name: ['', Validators.required],
      minAmount: [0, [Validators.required, Validators.min(1)]],
      maxAmount: [0, Validators.required],
      interestRate: [0, Validators.required],
      isVariableRate: [false],
      penaltyRate: [0, [Validators.required, Validators.min(0)]],
      graceDays: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.planForm.valid) {
      this.bankService.AddPlan(this.planForm.value);
      this.planForm.reset({ isVariableRate: false, graceDays: 0 });
      alert('Plan Creado Exitosamente');
    }
  }
}
