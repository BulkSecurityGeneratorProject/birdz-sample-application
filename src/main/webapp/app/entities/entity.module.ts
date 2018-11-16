import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BirdzSampleCustomerModule } from './customer/customer.module';
import { BirdzSampleProductModule } from './product/product.module';
import { BirdzSampleProductOrderModule } from './product-order/product-order.module';
import { BirdzSampleOrderItemModule } from './order-item/order-item.module';
import { BirdzSampleInvoiceModule } from './invoice/invoice.module';
import { BirdzSampleShipmentModule } from './shipment/shipment.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BirdzSampleCustomerModule,
        BirdzSampleProductModule,
        BirdzSampleProductOrderModule,
        BirdzSampleOrderItemModule,
        BirdzSampleInvoiceModule,
        BirdzSampleShipmentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BirdzSampleEntityModule {}
