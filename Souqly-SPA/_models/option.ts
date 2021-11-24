import { Product } from "./Product";

export interface Option {
    id?: number
    code?: string
    stockIn?: string
    name?: string
    itemPrice?: number
    availableOptions?: string
    productId?: number
    product:Product
  }
