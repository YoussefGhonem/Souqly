export interface ProductDataDto {

   //product main data
    productName:string
     weight:number
     description:string
     brand:string
     dimension:string
     categoryId:number
     supplierId:number

   //options
     codes:string[]
    stockIns:number[]
    itemPrices:number[]
    availableOptions:string[]

}
