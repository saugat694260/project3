
import { products } from "../data/products.js";
import { addedToWishlistButtonColourChange } from "../scripts/mainPage.js";

//this page include the feature of wishlist
export let wishList = []//JSON.parse(localStorage.getItem('wishList'))


//this function stores in local storage temporarly so the data will not be lost even after refresh
export function savetostorage() {
  localStorage.setItem('wishList', JSON.stringify(wishList));//name,data 
}




//this check whether the product is in array or not and make button clicked continously
setInterval(() => {
  wishList.forEach((item) => {
    if (item.id) {

      addedToWishlistButtonColourChange(item.id);
     
    }

  })
}, 1)



//adds to wishist takes value from extrantdatafromidforaddinf function form utils.js
export function addToWishlist(productId) {
  let matchingItem;


  wishList.forEach((data) => {

    if (productId === data.id) {
      matchingItem = data;

    }
  });


  if (!matchingItem) {
    wishList.push({ id: productId });
  }
  savetostorage();

}

//adds to wishist takes id for removing function of utils.js
export function removeFromWishlist(productId) {

  let newWishlist = [];

  wishList.forEach((data) => {
    if (data.id !== productId) {
      newWishlist.push(data);
    }

  });
  wishList = newWishlist;
  savetostorage();
}












