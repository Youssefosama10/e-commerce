
export interface ProductType 
{
  id : string , 
  title : string , 
  images : string[] , 
  imageCover : string , 
  description : string , 
  quantity : number , 
  price : number , 
  priceAfterDiscount? : number , 
  ratingsAverage : number , 
  ratingsQuantity : number , 
  category : CategoryType 
  brand : brandType
}

export interface CategoryType 
{
  _id: string,
  name: string,
  slug: string,
  image: string
}
export interface brandType 
{
  _id: string,
  name: string,
  slug: string,
  image: string 
}


export interface CartResponse 
{
  _id : string
  cartOwner : string
  products : ItemType[]
  totalCartPrice : number
}

export interface ItemType
{
   count : number
   _id : string 
   price : number
   product : ProductType
}

export interface Order 
{
  shippingAddress: {
    details : string , 
    phone : string , 
    city : string , 
    postalCode : string
  }
}

export interface Brands {
  name : string
  image : string 
  _id : string 
}


export interface userwishlist {
  title : string
  imageCover : string 
  _id : string 
  price : string
}