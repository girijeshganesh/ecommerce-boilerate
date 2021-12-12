import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { LocationComponent } from './location/location.component';
import { SetupComponent } from './setup.component';

const routes: Routes = [
  {
    path: '',
    component:SetupComponent
  },
  {
    path: 'location',
    component:LocationComponent
  },
  {
    path: 'editLocation',
    component:EditLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
