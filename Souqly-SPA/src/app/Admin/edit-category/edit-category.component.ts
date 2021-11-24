import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageCategories } from '_models/ManageCategories';
import { AdminMCategoriesService } from '_services/admin-mcategories.service';
import { AlertService } from '_services/alertifay.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private adminMCategoriesserv : AdminMCategoriesService, private ac : ActivatedRoute,
     private router: Router, private alertifyService: AlertService) { }
  UpadtedCat : ManageCategories;
  updatedName : string;

  ngOnInit(): void {
    this.ac.params.subscribe(d=>{
      this.adminMCategoriesserv.getById(d.id).subscribe(a=>{
        this.UpadtedCat = a;
        this.updatedName = this.UpadtedCat.categoryName;

      })
    })
    // this.updatedName = "Shahy";
  }

  UpdateCategory()
  {
    this.ac.params.subscribe(a=>{
      this.adminMCategoriesserv.Update(a.id ,this.updatedName).subscribe(d=>{
        this.alertifyService.success("تـم تعديل الفئـــة بنجــاح");
        setTimeout(() => {
          this.router.navigateByUrl("/managecategory");
        }, 1000);
    });
  })


}

  Cancle()
  {
  this.router.navigateByUrl("/managecategory");
  }

}
