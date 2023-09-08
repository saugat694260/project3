import {  products} from "../data/products.js";

//this function takes the id and adds the data for the selected container only
export function selectedProduct(productId){

  let matchingProduct;
  
  products.forEach((data)=>{
  if(data.id==productId){
  matchingProduct=data;
  }
  })
  }