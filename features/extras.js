
import { products } from "../data/products.js";
import { addedToWishlistButtonColourChange } from "../scripts/mainPage.js";

//this page include the feature of wishlist and favourites
export let wishList = []//JSON.parse(localStorage.getItem('wishList'))
export let favourite = []//JSON.parse(localStorage.getItem('favourite'))


//this function stores in local storage temporarly so the data will not be lost even after refresh
export function savetostorage() {
  localStorage.setItem('wishList', JSON.stringify(wishList));//name,data 
  localStorage.setItem('favourite', JSON.stringify(favourite));//name,data 
}




//this check whether the product is in array or not and make button clicked continously
setInterval(() => {
  wishList.forEach((item) => {
    if (item.id) {

      addedToWishlistButtonColourChange(item.id);
     
    }

  })
}, 1)



////includes function of adding and removing of id in wishlist
//it takes idfrom selected product page
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




//add to favoutite part i could use same function but now this will be east to understand
//includes function of adding and removing of id in favourites
//it takes idfrom selected product page
export function addToFavourite(productId) {
  let matchingItem;


  favourite.forEach((data) => {

    if (productId === data.id) {
      matchingItem = data;

    }
  });


  if (!matchingItem) {
    favourite.push({ id: productId });
  }
  savetostorage();

}


export function removeFromFavourite(productId) {

  let newFavourite = [];

  wishList.forEach((data) => {
    if (data.id !== productId) {
      newFavourite.push(data);
    }

  });
  favourite = newFavourite;
  savetostorage();
}












