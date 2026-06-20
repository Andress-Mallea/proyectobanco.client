import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  { path: 'admin/plans', component: AdminComponent },
  { path: 'admin/users', component: AdminComponent },
  { path: '', redirectTo: 'admin/plans', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin/plans' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
