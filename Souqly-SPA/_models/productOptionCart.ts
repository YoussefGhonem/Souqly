import { Option } from "./Option";

export interface ProductOptionCart {
  id:number;
  quantity:number;
  option:Option;
  cartId:number;
  optionId:number;
  newPrice:number;

}

