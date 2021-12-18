import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { InnerMenuComponent } from './inner-menu/inner-menu.component';
import { LocationStaffComponent } from './location-staff/location-staff.component';
import { LocationComponent } from './location/location.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { SetupComponent } from './setup.component';
import { SurchargesDiscountsComponent } from './surcharges-discounts/surcharges-discounts.component';
import { TaxRatesComponent } from './tax-rates/tax-rates.component';

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
    path: 'location/generalDetails',
    component:GeneralDetailsComponent
  },
  {
    path: 'location/menuManagement',
    component:MenuManagementComponent
  },
  {
    path: 'location/menuManagement/subchargesDiscount',
    component:SurchargesDiscountsComponent
  },
  {
    path: 'location/menuManagement/menuInner',
    component:InnerMenuComponent
  },
  {
    path: 'location/menuManagement/taxRates',
    component:TaxRatesComponent
  },
  {
    path: 'location/staff',
    component:LocationStaffComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
