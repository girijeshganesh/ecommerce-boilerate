import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LocationComponent } from './location/location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { SurchargesDiscountsComponent } from './surcharges-discounts/surcharges-discounts.component';
import { TaxRatesComponent } from './tax-rates/tax-rates.component';
import { InnerMenuComponent } from './inner-menu/inner-menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SimpleModalModule } from 'ngx-simple-modal';
import { LocationStaffComponent } from './location-staff/location-staff.component';
import { DiningComponent } from './dining/dining.component';
import { PrintersComponent } from './printers/printers.component';
import { DeliverySettingsComponent } from './delivery-settings/delivery-settings.component';
import { SelfOrderingComponent } from './self-ordering/self-ordering.component';
import { StaffComponent } from './staff/staff.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddSurchargeComponent } from './add-surcharge/add-surcharge.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AddOrderDiscountComponent } from './add-order-discount/add-order-discount.component';
import { AddItemDiscountComponent } from './add-item-discount/add-item-discount.component';
import { AddSalesTaxComponent } from './add-sales-tax/add-sales-tax.component';
import { AddDiningComponent } from './add-dining/add-dining.component';
import { DeliveryAreaComponent } from './delivery-area/delivery-area.component';
import { DeliveryManagerComponent } from './delivery-manager/delivery-manager.component';
import { AddDeliveryAreaComponent } from './add-delivery-area/add-delivery-area.component';
import { UploadDeliveryAreaComponent } from './upload-delivery-area/upload-delivery-area.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MenuSetupComponent } from './menu-setup/menu-setup.component';
import { UploadMenuComponent } from './upload-menu/upload-menu.component';
import { AddMenuCategoryComponent } from './add-menu-category/add-menu-category.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { ManageMenuComponent } from './manage-menu/manage-menu.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditMenuItemComponent } from './edit-menu-item/edit-menu-item.component';

@NgModule({
  declarations: [
    SetupComponent,
    LocationComponent,
    EditLocationComponent,
    GeneralDetailsComponent,
    MenuManagementComponent,
    SurchargesDiscountsComponent,
    TaxRatesComponent,
    InnerMenuComponent,
    LocationStaffComponent,
    DiningComponent,
    PrintersComponent,
    DeliverySettingsComponent,
    SelfOrderingComponent,
    StaffComponent,
    AddSurchargeComponent,
    AddLocationComponent,
    AddOrderDiscountComponent,
    AddItemDiscountComponent,
    AddSalesTaxComponent,
    AddDiningComponent,
    DeliveryAreaComponent,
    DeliveryManagerComponent,
    AddDeliveryAreaComponent,
    UploadDeliveryAreaComponent,
    MenuSetupComponent,
    UploadMenuComponent,
    AddMenuCategoryComponent,
    AddMenuItemComponent,
    ManageMenuComponent,
    AddGroupComponent,
    EditMenuItemComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    SharedModule,
    MatTabsModule,
    SimpleModalModule,
    MatDialogModule,
    MatSlideToggleModule
  ]
})
export class SetupModule { }
