import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortEvent } from 'primeng/api';
import { ManageCategories } from '_models/ManageCategories';
import { AdminMCategoriesService } from '_services/admin-mcategories.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  // styleUrls: ['./manage-categories.component.css'],
  styles: [`
        :host ::ng-deep .p-cell-editing {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    `]
})
export class ManageCategoriesComponent implements OnInit {
  allCategories: ManageCategories[];
  cols: any[];
  newCategory : ManageCategories;

  constructor(private adminMCategoriesServ: AdminMCategoriesService, private router : Router) { }

  ngOnInit(): void {
    this.adminMCategoriesServ.getCategories().subscribe(d=>{
      this.allCategories = d;
    });

  this.cols = [
    // { field: 'id' ,  header: 'id'},
    { field: 'categoryName', header: 'اسم الفئـــــة' },
]

  } //end oninit
  ///neeeeeeeeeew
  // responsiveOptions: any[] = [
  //   {
  //     breakpoint: '1024px',
  //     numVisible: 5
  //   },
  //   {
  //     breakpoint: '768px',
  //     numVisible: 3
  //   },
  //   {
  //     breakpoint: '560px',
  //     numVisible: 1
  //   }
  // ];
    ///neeeeeeeeeew

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
}
Back(){
  this.router.navigateByUrl(" ");
}

// onRowEditSave(category: ManageCategories) {
// this.adminMCategoriesServ.Update(category.id,category.categoryName).subscribe(a=>{
// alert("hiii");
// });
// }
} // end class






