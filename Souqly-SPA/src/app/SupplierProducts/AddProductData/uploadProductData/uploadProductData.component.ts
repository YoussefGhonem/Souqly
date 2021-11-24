import { ProductDataDto } from './../../../Dtos/ProductDataDto';
//import { Category } from './../../../../../_models/Category';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormControl,FormGroup,Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AuthServicesService } from '_services/AuthServices.service';
import { SupplierOrderService } from '_services/supplierService.service';
import { Category } from 'src/app/Dtos/Categories';
import { AlertService } from '_services/alertifay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadProductData',
  templateUrl: './uploadProductData.component.html',
  styleUrls: ['./uploadProductData.component.css']
})
export class UploadProductDataComponent implements OnInit {

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseurl = environment.ApiUrl;
  id:number;
  prodId:any;
  productadded:boolean=false;
  categories:Category[];
  obj:ProductDataDto;
  Photouploaded=false;
  errorMsg="";
  active:boolean;

////////////////////////////////////////////////////////////////////

  constructor(private authService: AuthServicesService , private router : Router, private supplierService:SupplierOrderService , private alertifyService: AlertService) { }

////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.supplierService.getallcategories().subscribe(a=>{
      this.categories=a;
    });
    this.active = this.authService.currentUser.emailConfirmed;
  }

////////////////////////////////////////////////////////////////////

  productForm=new FormGroup({
    'productName':new FormControl('',[Validators.required]),
    'Weight':new FormControl('',Validators.required),
    'Description':new FormControl('',Validators.required),
    'Brand':new FormControl('',Validators.required),
    'Dimension':new FormControl('',Validators.required),
    'CategoryId':new FormControl('',Validators.required),
     'Codes':new FormArray([],Validators.required),
     'StockIns':new FormArray([],Validators.required),
     'ItemPrices':new FormArray([],Validators.required),
     'AvailableOptions':new FormArray([],Validators.required),

  });

////////////////////////////////////////////////////////////////////

  get Codes(){
    return this.productForm.get('Codes') as FormArray
  }
  get StockIns(){
    return this.productForm.get('StockIns') as FormArray
  }
  get ItemPrices(){
    return this.productForm.get('ItemPrices') as FormArray
  }
  get AvailableOptions(){
    return this.productForm.get('AvailableOptions') as FormArray
  }

////////////////////////////////////////////////////////////////////

  addoption(){
    this.Codes.push(new FormControl);
    this.StockIns.push(new FormControl);
    this.ItemPrices.push(new FormControl);
    this.AvailableOptions.push(new FormControl);
  }//end of add option

////////////////////////////////////////////////////////////////////

  removeoption(i:number){
    this.Codes.removeAt(i);
    this.StockIns.removeAt(i);
    this.ItemPrices.removeAt(i);
    this.AvailableOptions.removeAt(i);
  }//end of removeoption

////////////////////////////////////////////////////////////////////

initializeUploader() {
  this.uploader = new FileUploader({
    url: "https://localhost:5001/api/"+this.id,
    authToken: 'Bearer ' + localStorage.getItem('token'),
    isHTML5: true,
    allowedFileType: ['image'],
    removeAfterUpload: true,
    autoUpload: false,
    maxFileSize: 10 * 1024 * 1024
  });
   this.uploader.onAfterAddingFile=(file)=>{file.withCredentials=false;};
   this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
    this.Photouploaded=true;
    this.alertifyService.success("تم اضافة صورة للمنتج بنجاح");
};

}//end of initializeUploader

////////////////////////////////////////////////////////////////////

public fileOverBase(e: any): void {
  this.hasBaseDropZoneOver = e;
}

////////////////////////////////////////////////////////////////////

addproductdata(){
  console.log("pressed");
   this.obj = this.productForm.value;
   this.supplierService.addnewproduct(this.obj).subscribe(a=>{
     this.prodId=a;
     this.id=this.prodId;
     console.log("===>>"+this.id);
     this.productadded=true;
     this.initializeUploader();
     this.alertifyService.success("تم إضافة المنتج بنجاح باضافة الصور");
   }, (error) => {
    this.errorMsg=error.error;
  });

}

////////////////////////////////////////////////////////////////////
newproduct(){
   this.productadded=false;
  this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    this.router.navigate(["uploadproduct"]);
});
}

}
