import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryAreaComponent } from './delivery-area/delivery-area.component';
import { DeliveryManagerComponent } from './delivery-manager/delivery-manager.component';
import { DeliverySettingsComponent } from './delivery-settings/delivery-settings.component';
import { DiningComponent } from './dining/dining.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { InnerMenuComponent } from './inner-menu/inner-menu.component';
import { LocationStaffComponent } from './location-staff/location-staff.component';
import { LocationComponent } from './location/location.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { PrintersComponent } from './printers/printers.component';
import { SelfOrderingComponent } from './self-ordering/self-ordering.component';
import { SetupComponent } from './setup.component';
import { StaffComponent } from './staff/staff.component';
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
    path: 'staff',
    component:StaffComponent
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
  {
    path: 'location/dining',
    component:DiningComponent
  },
  {
    path: 'location/selfOrdering',
    component:SelfOrderingComponent
  },
  {
    path: 'location/printers',
    component:PrintersComponent
  },
  {
    path: 'location/delivery',
    component:DeliverySettingsComponent
  },
  {
    path: 'location/delivery/area',
    component:DeliveryAreaComponent
  },
  {
    path: 'location/delivery/manager',
    component:DeliveryManagerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
