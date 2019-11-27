import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './operators/creating/create/create.component';
import { HomeComponent } from './home/home.component';
import { DeferComponent } from './operators/creating/defer/defer.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'operators',
    children: [
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'defer',
        component: DeferComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
