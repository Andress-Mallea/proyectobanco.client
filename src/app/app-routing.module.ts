import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  // Redirigimos al panel administrativo por defecto
  { path: 'admin/plans', component: AdminComponent },
  { path: 'admin/users', component: AdminComponent }, // Comparten componente en este ejemplo rápido
  { path: '', redirectTo: 'admin/plans', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin/plans' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
