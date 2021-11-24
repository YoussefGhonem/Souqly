import { ProductOption } from './../../../Dtos/productOption';
import { SupplierOrderService } from '_services/supplierService.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductForUploadDto } from './../../../Dtos/ProductForUploadDto';
//import { Image } from './../../../../../_models/Image';
import { AuthServicesService } from './../../../../../_services/AuthServices.service';
import { environment } from './../../../../environments/environment';
import { ImageForCreate } from './../../../Dtos/imageForCreate';
import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-uploadProductImages',
  templateUrl: './uploadProductImages.component.html',
  styleUrls: ['./uploadProductImages.component.css']
})



export class UploadProductImagesComponent implements OnInit {

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseurl = environment.ApiUrl;
  id:number;
  //hasAnotherDropZoneOver=false;
  //response:string;

  constructor(private authService: AuthServicesService , private supplierService:SupplierOrderService) {

  }
  productadded:boolean=true;
  tafasel=false;

  ngOnInit() {
   this.initializeUploader();
  }//end of oninit
  productid:any;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: "https://localhost:44309/api/"+this.id,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

     this.uploader.onAfterAddingFile=(file)=>{file.withCredentials=false;};

  }//end of initializeUploader




  ////////////////////////////////////////////////////////////////////////////

  @Input() productForUploadDto:ProductForUploadDto=new ProductForUploadDto();


  productForm=new FormGroup({
    'productName':new FormControl(100,[Validators.required]),
    'Weight':new FormControl(),
    'Description':new FormControl(),
    'Brand':new FormControl(),
    'Dimension':new FormControl(),
    'CategoryId':new FormControl(),
     'Codes':new FormArray([]),
     'StockIns':new FormArray([]),
     'ItemPrices':new FormArray([]),
     'AvailableOptions':new FormArray([]),

  });

  //To get the control and catch the errors
  // get productName(){
  //   return this.productForm.get('productName') as FormControl
  // }

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

  addoption(){
    this.Codes.push(new FormControl);
    this.StockIns.push(new FormControl);
    this.ItemPrices.push(new FormControl);
    this.AvailableOptions.push(new FormControl);
  }//end of add option

  removeoption(i:number){
    this.Codes.removeAt(i);
    this.StockIns.removeAt(i);
    this.ItemPrices.removeAt(i);
    this.AvailableOptions.removeAt(i);
  }//end of removeoption

productoption:ProductOption;

  Addproductoption(){
    console.log("=========>" + this.productForm.get('Codes').value.length);
    // this.productForUploadDto=this.productForm.value;
    for (let index = 0; index < this.productForm.get('Codes').value.length; index++) {

      // console.log(this.productForm.get('productOptions').value[index]+"asd");

      console.log(this.productForm.get('Codes').value[index]);
      this.productoption.Code=this.productForm.get('Codes').value[index];


      this.productoption.ItemPrice=this.productForm.get('ItemPrices').value[index];


      this.productoption.StockIn=this.productForm.get('StockIns').value[index];


      this.productoption.AvailableOptions=this.productForm.get('AvailableOptions').value[index];


      this.productoption.productId=this.id;

      this.supplierService.addproductoption(this.productoption).subscribe(a=>{
        console.log("DataAdded");
      });

    }


  }



  //callAddproduct    lazm yrag3 ProductId   ????




  addproductdata(){
    console.log(this.productForm.value);
    this.productForUploadDto.ProductName=this.productForm.get('productName').value;
    this.productForUploadDto.Weight=this.productForm.get('Weight').value;
    this.productForUploadDto.Description=this.productForm.get('Description').value;
    this.productForUploadDto.Dimension=this.productForm.get('Dimension').value;
    this.productForUploadDto.Brand=this.productForm.get('Brand').value;
    this.productForUploadDto.CategoryId=this.productForm.get('CategoryId').value;

    console.log( this.productForUploadDto);

    //this.productForUploadDto=this.productForm.value;
    console.log("==> ana Hnaaaa");
    this.supplierService.addproduct(this.productForUploadDto).subscribe(a=>{
    this.productid=a;
    console.log("=======>"+this.productid);
    this.id=this.productid;
    console.log(this.id);
    this.productadded=true;
    // this.initializeUploader();
    });

  }





  //callAddOptions

  //call bta3 el soraa


}//end of class
