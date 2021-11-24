// import { Category } from "./Category";
// import { Image } from "./Image";
// import { MarketingProduct } from "./MarketingProduct";
// import { Option } from "./Option";
// import { ProductOptionCart } from "./ProductOptionCart";
// import { User } from "./user";

import { Option } from "./Option";

// export class Product {
//     constructor(public id?:number, public productName?:string, public weight?:number, public description?:string,
//         public brand?:string, public date?:Date, public dimension?:string, public category?:Category,
//         public categoryId?:number, public options?:Option[], public images?:Image[],
//             public productCarts?:ProductOptionCart[], public marketingProducts?:MarketingProduct[],
//             public user?:User[], public userId?:number){

//     }
// } 

export interface Product {
    id:number;
    productName:string;
    stockIn:number;
    price:number;
    images:string[];
    options: Option[];

}

