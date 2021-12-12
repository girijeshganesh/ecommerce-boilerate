import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LocationComponent } from './location/location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';



@NgModule({
  declarations: [
    SetupComponent,
    LocationComponent,
    EditLocationComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    SharedModule
  ]
})
export class SetupModule { }
