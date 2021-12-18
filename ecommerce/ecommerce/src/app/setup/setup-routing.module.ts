import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { GeneralDetailsComponent } from './general-details/general-details.component';
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
  },
  {
    path: 'generalDetails',
    component:GeneralDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
