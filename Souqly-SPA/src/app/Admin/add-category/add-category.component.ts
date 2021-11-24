import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageCategories } from '_models/ManageCategories';
import { AdminMCategoriesService } from '_services/admin-mcategories.service';
import { AlertService } from '_services/alertifay.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {


  constructor(private addCategoryserv: AdminMCategoriesService, private router: Router,private alertifyService: AlertService) {  }
  nCategory = new ManageCategories();

  ngOnInit(): void {
  }

  Create()
  {
   if(this.nCategory.categoryName != undefined)
   {
    this.addCategoryserv.Add(this.nCategory).subscribe(d=>{
    });
    this.alertifyService.success("تـم إضاافة الفئـــة بنجــاح");
      this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(["/managecategory"]);
      });
    }
    else
    {
      this.alertifyService.error("من فضلك ادخل اســم الفئـــة");
    }
   }


  Cancle(){
    this.router.navigateByUrl("/managecategory");
   }
}


