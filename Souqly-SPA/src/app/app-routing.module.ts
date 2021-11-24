import { SupplierProductsListComponent } from './product-explore/SupplierProductsList/SupplierProductsList.component';
import { BindingOrdersComponent } from './ManageShipping/BindingOrders/BindingOrders.component';


import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './CartManagement/check-out/check-out.component';
import { OptionCartListresolver } from '_resolvers/OptionCartList.resolver';
import { ShippingListResolver } from '_resolvers/ShippingList.resolver';
import { OrderDetailsComponent } from './CartManagement/order-details/order-details.component';
import { OrderListResolver } from '_resolvers/OrderList.resolver';
import { OrderDetailsResolver } from '_resolvers/OrderDetails.resolver';
import { OrderListComponent } from './CartManagement/order-list/order-list.component';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';
import { ManageAccountComponent } from './Marketing/manage-account/manage-account.component';
import {ProductListComponent} from './product-explore/product-list/product-list.component';
import { ProfitsComponent } from './profits/profits.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './crudUser/user-list/user-list.component';
import { UserDetailsComponent } from './crudUser/user-details/user-details.component';
import { FollowOrdersComponent } from './Marketing/follow-orders/follow-orders.component';
import { ManageCategoriesComponent } from './Admin/manage-categories/manage-categories.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';

import { EditeUserComponent } from './crudUser/edite-user/edite-user.component';
import { DeleteUserComponent } from './crudUser/delete-user/delete-user.component';
import { SupplierDetailsComponent } from './crudUser/supplier-details/supplier-details.component';
import { ManageWithdrawnRequestsComponent } from './admin/manage-withdrawn-requests/manage-withdrawn-requests.component';
import { UserDataComponent } from './admin/user-data/user-data.component';


import { RegisterShippingComponent } from './Admin/register-shipping/register-shipping.component';
import { UpdateOrderStatusComponent } from './ShippingEmployee/update-order-status/update-order-status.component';
import { UploadProductDataComponent } from './SupplierProducts/AddProductData/uploadProductData/uploadProductData.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
const routes: Routes = [
  {path:'',component:HomePageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {path: 'myorders', component: SupplierOrdersComponent},
  {path: 'manageaccount', component: ManageAccountComponent},
  {path: 'uploadproduct', component: UploadProductDataComponent},

  { path: 'payment', component:PaymentComponent},
  { path: 'dashboard', component:AdminDashboardComponent},
  { path: 'UserList', component:UserListComponent},
  { path: 'supplierDetails', component:SupplierDetailsComponent},
  { path: 'supplierDetails/editUser/:id', component:EditeUserComponent},
  { path: 'UserList/details/:id', component:UserDetailsComponent},
  { path: 'UserList/editUser/:id', component:EditeUserComponent},
  { path: 'UserList/deleteUser/:id', component:DeleteUserComponent},


  { path: 'ShippingStatus', component:UpdateOrderStatusComponent},
  { path: 'UserList/details/:id', component:UserDetailsComponent},
  { path: 'shippingregister', component: RegisterShippingComponent},
  {path: 'followorders', component: FollowOrdersComponent},
  {path: 'managecategory', component: ManageCategoriesComponent, children:[
  {path: 'addcategory' , component: AddCategoryComponent }
  ]
   },
   //try
  {path: 'editcategory/:id' , component: EditCategoryComponent},
  ///
  {path: 'products', component: ProductListComponent},
  { path: 'Checkout', component: CheckOutComponent,resolve:{checkout:OptionCartListresolver,shipping:ShippingListResolver}},//b7ml el data 3la el route
  { path: 'OrderList', component: OrderListComponent,resolve:{order:OrderListResolver}},
  { path: 'OrderDetails/:id', component: OrderDetailsComponent,resolve:{OrderDetails:OrderDetailsResolver}},
  { path: 'withdraw', component: ProfitsComponent},
  { path: 'manageWithdrawRequest', component: ManageWithdrawnRequestsComponent},
  { path: 'userdata', component:UserDataComponent},
  {path:'home',component:HomePageComponent},
  { path: 'bindingorders', component:BindingOrdersComponent},
  { path: 'supplierProductsList', component:SupplierProductsListComponent},
  { path: '**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
