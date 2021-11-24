export interface MarketeerOrders {
  //orderDetails
  quantity: number

  totalOptionPrice: number // سعر المنتجات 

  orderId: number

  //order
  orderDate: Date

  status: string

  clientName: string

  phone: number

  address: string

  //option
  availableOptions: string

  //product
  productName: string

  //bills
  dealPrice: number  //مبلغ التحصيل من العميل

  marktingProfits: number
  }

