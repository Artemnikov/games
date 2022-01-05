import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailSpecificComponent } from './components/employee-detail-specific/employee-detail-specific.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'employee/:id', component: EmployeeDetailSpecificComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
