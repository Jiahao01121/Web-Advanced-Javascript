import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { ProblemDetailComponent } from '../components/problem-detail/problem-detail.component'
import { ProblemListComponent } from '../components/problem-list/problem-list.component'
import { NewProblemComponent } from '../components/new-problem/new-problem.component'

const routes: Routes = [
  {
    path: 'problems',
    component: ProblemListComponent
  },
  {
    path: 'problems/:id',
    component: ProblemDetailComponent
  },
  {
    path: '',
    redirectTo: 'problems',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: NewProblemComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
