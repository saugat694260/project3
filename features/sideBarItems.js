
import { products } from "../data/products.js";
import { addedToWishlistButtonColourChange } from "../scripts/mainPage.js";
import { selectedProduct } from "../scripts/selectedProductPage.js";

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
    wishList.push({ id: productId});
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





//generating html for wishlist
let wishlistProductContainer=document.querySelector('.wishlist-sub-container');

 
products.forEach((data)=>{

  wishList.forEach((value)=>{

    if(data.id==value.id){
        
        let html=''
                  html+=`
      <div class="wishlist-container js-wishlist-container-${data.id}">
  <button class="wishlist-remove-button " data-product-id=${data.id}>
  <img class="remove-from-wishlist-image" src="/icons/close.png">
  </button>
<a class="" href="/selectedProductPage.html">
  <div class="wishlist-product-container "data-product-id=${data.id}>

  <div class="wishlist-image-container">
  <img class="wishlist-product-image" src="${data.image}">
  </div>

  <div class="wishlist-info-container">
    <p class="author-name">${data.author}</p>
    <p class="genre"> ${data.genre}</p>
  </div>
 

  </div> 
  </a>
  
  </div>`
  
  
      if(wishlistProductContainer){
  
        wishlistProductContainer.innerHTML+=html;
 
      }}
    }) 
  })

//remove button and action of wishlist
document.querySelectorAll('.wishlist-remove-button').forEach((link)=>{


const productId=link.dataset.productId;
    const productHtml=document.querySelector(`.js-wishlist-container-${productId}`)

        link.addEventListener('click',()=>{
        removeFromWishlist(productId);
        productHtml.remove();


    })
});


// this is for giving id of selected product redirects to the secondpage 
document.querySelectorAll('.wishlist-product-container').forEach((link)=>{

  let productId=link.dataset.productId;
link.addEventListener('click',()=>{
selectedProduct(productId);

})


})
  
  



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












