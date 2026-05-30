import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanService } from '../../../../core/services/plan.service';
import { ReactiveFormsModule } from '@angular/forms';  // Add this import
@Component({
  selector: 'app-plan-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './plan-form.component.html'
})
export class PlanFormComponent {
  planForm: FormGroup;

  constructor(private fb: FormBuilder, private planService: PlanService) {
    this.planForm = this.fb.group({
      name: ['', Validators.required],
      minAmount: [0, [Validators.required, Validators.min(1)]],
      maxAmount: [0, Validators.required],
      interestRate: [0, Validators.required],
      isVariableRate: [false],
      penaltyRate: [0, [Validators.required, Validators.min(0)]], // HU-02
      graceDays: [0, [Validators.required, Validators.min(0)]]    // HU-03
    });
  }

  onSubmit() {
    if (this.planForm.valid) {
      this.planService.addPlan(this.planForm.value);
      this.planForm.reset({ isVariableRate: false, graceDays: 0 });
      alert('Plan Creado Exitosamente');
    }
  }
}
