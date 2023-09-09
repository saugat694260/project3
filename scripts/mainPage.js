import { products } from "../data/products.js";
import { selectedProduct } from "./selectedProductPage.js";
import { addToWishlist, removeFromWishlist, savetostorage, wishList } from "../features/extras.js";
import { extractDataFromIdForAdding, extractDataFromIdForRemoving } from "../utils/utils.js";
//

const subProductContainer = document.querySelector('.sub-product-container');





//generating products from the products array
products.forEach((data) => {

  let newHTML = '';

  newHTML += `
<a class="product-link-to-second-page" href="selectedProductPage.html"><div class="product-container js-product-container-${data.id/*for giving unique class name fir product container */} js-product-container-link"data-product-id="${data.id/*for extracting id of the clicked container */}">

<div class="image-container">

    <img class="product-image" src="${data.image}">
    
    <span class="rank-container">#${data.ratings.rank}</span>
</div>


<div class="options-container">


  <button class="wish-list-button js-wish-list-button-${data.id/*for giving unique class name for add to widh list button*/} js-wish-list-button-link"data-product-id="${data.id}">

    <img class="wish-list-icon" src="icons/later.png">
  </button>

    <p class="product-name-container">${data.title}</p>
    
   
</div>


<div class="extra-info-container">
<span class="genre-container">
  genre:${data.genre}
</span>
<br>
  <span class="chapters-container">chapters:${data.chapters}</span>
  
  
</div>
<span class="ratings-container">${data.ratings.count}/10</span>

</div></a>`


  subProductContainer.innerHTML += newHTML;

}
);


//this is for getting id from clicked container and sending the id in to function to selectedproductpage.js
document.querySelectorAll('.js-product-container-link').forEach((link) => {

  const productId = link.dataset.productId;
  link.addEventListener('click', () => {
    selectedProduct(productId);
  });
})



//this is for getting id from clicked wishlist button and sending the id in to function
document.querySelectorAll('.js-wish-list-button-link').forEach((link) => {

  const productId = link.dataset.productId;

  const wishListButton = document.querySelector(`.js-wish-list-button-${productId}`);
  //uses class list for adding and removing
  link.addEventListener('click', () => {
    if (wishListButton.classList.contains('added-To-Wishlist')) {

      removeFromWishlist(productId)
      wishListButton.classList.remove('added-To-Wishlist');
      console.log(wishList);

    }
    else {
      console.log(wishList);
      addToWishlist(productId)

    }

  });
})




//changes colour of wishlist buttom
export function addedToWishlistButtonColourChange(value) {
  const wishListButton = document.querySelector(`.js-wish-list-button-${value}`);
  wishListButton.classList.add('added-To-Wishlist');

}


//




