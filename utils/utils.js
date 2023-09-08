
import {  products} from "../data/products.js";

import { addToWishlist,removeFromWishlist,savetostorage} from "../features/extras.js";
//wishlist from extra.js
//they are similar but i had to do it differently cause i had tp add seprately in button
//extracts the data from product id from main page 
export function extractDataFromIdForAdding(productId){
  
  products.forEach((data)=>{

    if(data.id==productId){
      
      
        }
         });
         
    
}

export function extractDataFromIdForRemoving(productId){
  
  products.forEach((data)=>{

    if(data.id==productId){
      
    }
    });
   
    
}
//

