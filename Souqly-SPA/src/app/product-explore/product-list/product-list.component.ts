import { Component, OnInit } from '@angular/core';
import { ManageCategories } from '_models/ManageCategories';
import { Product } from '_models/ola/Product';
import { AdminMCategoriesService } from '_services/admin-mcategories.service';
import { Pagination, PaginationResult } from '_models/Pagination';
import { AlertService } from '_services/alertifay.service';
import { ProductServiceService } from '_services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  topProducts:Product[];
  allCategories: ManageCategories[];
  selectedCategory: ManageCategories;
  testProds:Product[]=[];
//   pagination:Pagination;

//   constructor(private productServ:ProductServiceService,private alert:AlertService) { }
//   pageNumber = 1;
//   pageSize = 8;

//   ngOnInit(): void {
//     this.productServ.getProducts(this.pageNumber,this.pageSize).subscribe(
//       prods => {
//         this.products = prods.result;
//         this.pagination = prods.pagination
//         }
//       )
//   }
//   pageChanged(event: any): void {
//     this.pagination.currentPage = event.page;
//     this.loadproducts();
//   }

//   loadproducts(){

//     this.productServ.getProducts(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((res: PaginationResult<Product[]>) => {
//       this.products = res.result;
//       this.pagination = res.pagination;
//   }, error => this.alert.error(error))
// }



  sortOptions: any[];
  sortOrder: number;
  sortField: string;

  constructor(private productServ:ProductServiceService,private adminMCategoriesServ: AdminMCategoriesService) { }

  ngOnInit(): void {

      this.productServ.getProducts().subscribe(
        prods => this.products = prods
      );
      this.productServ.getTopProducts(3).subscribe(
        prods => this.topProducts = prods
      );

      this.allCategories = [new ManageCategories(0, "كل الأقسام")];
      this.sortOptions = [
        {label: 'حسب الأعلى سعر', value: '!price'},
        {label: 'حسب الأقل سعر', value: 'price'}
      ];
    this.loadCategories();

  }
  loadCategories(){
    this.adminMCategoriesServ.getCategories().subscribe(d=>{
      d.forEach(x => this.allCategories.push(x));
    });
  }
  CategoryChanging( ID :number)
  {
    if(ID != 0){
      this.productServ.getCategoryProducts(ID).subscribe(
        prods => this.products = prods
      )
      this.productServ.getCatgoreyTopProducts(ID,3).subscribe(
        prods =>{
          this.topProducts = prods;
        }
      )
    }
    else{
      this.productServ.getProducts().subscribe(
        prods => this.products = prods
      );
      this.productServ.getTopProducts(3).subscribe(
        prods => this.topProducts = prods
      );
    }
    

  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}
