import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';
import { CheckOutComponent } from 'shopping/components/check-out/check-out.component';
import { MyOrdersComponent } from 'shopping/components/my-orders/my-orders.component';
import { OrderSuccessComponent } from 'shopping/components/order-success/order-success.component';
import { ProductFilterComponent } from 'shopping/components/products/product-filter/product-filter.component';
import { ProductsComponent } from 'shopping/components/products/products.component';
import { ShippingFormComponent } from 'shopping/components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from 'shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from 'shopping/components/shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ProductFilterComponent,
  ]
})
export class ShoppingModule { }
