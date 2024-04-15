import { products} from "../data/products.js";
import { selectedProduct } from "./selectedProductPage.js";
import { addToWishlist, removeFromWishlist, savetostorage, wishList } from "../features/sideBarItems.js";
import { extractDataFromIdForAdding, extractDataFromIdForRemoving, formatCurrency } from "../utils/utils.js";
//

const subProductContainer = document.querySelector('.sub-product-container');





//generating products from the products array
products.forEach((data) => {

  let newHTML = '';

  newHTML += `
  <div class='container'>



  <button class="wish-list-button js-wish-list-button-${data.id/*for giving unique class name for add to widh list button*/} js-wish-list-button-link"data-product-id="${data.id}">

  <img class="wish-list-icon" src="icons/wishlist.png">
</button>


<a class="product-link-to-second-page" href="selectedProductPage.html"><div class="product-container js-product-container-${data.id/*for giving unique class name fir product container */} js-product-container-link"data-product-id="${data.id/*for extracting id of the clicked container */}">

<div class="image-container">
<div class="price-Container js-price-container-${data.id}"></div>
    <img class="product-image" src="${data.getProductImage()}">
    
    <span class="rank-container">#${data.ratings.rank}</span>
</div>


<div class="options-container">


 

    <p class="product-name-container">${data.title}</p>
    
   
</div>


<div class="extra-info-container" >
<span class="genre-container ">
  genre:${data.genre}
</span>
<br>
  <span class="author-container">author:${data.author}</span>
  
  
</div>
<span class="ratings-container js-rating-container-${data.id}">${data.ratings.count}/10</span>

</div></a></div>`

  //if this element is present then
  if (subProductContainer) {
    subProductContainer.innerHTML += newHTML;
  }

}
);

if (subProductContainer) {
  createPrices();
}
//js-price-Container
//shows price on the product 
function createPrices() {
  products.forEach((data) => {

    if (data.priceCents) {

      const priceContainer = document.querySelector(`.js-price-container-${data.id}`);
      priceContainer.innerHTML = `Price:$${data.getPrice()}`
      priceContainer.classList.add('js-price-Container')

    }
  })
}



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
      

    }
    else {
      addToWishlist(productId)

    }

  });
})




//changes colour of wishlist buttom 
export function addedToWishlistButtonColourChange(value) {
  if (subProductContainer) {
    const wishListButton = document.querySelector(`.js-wish-list-button-${value}`);
    wishListButton.classList.add('added-To-Wishlist');
  }

}


/**
 

//if its array button always put selector all
document.querySelectorAll('.js-book-mark-button').forEach((link) => {

  const productId = link.dataset.productId;

  const wishListButton = document.querySelector(`.js-book-mark-button`);
  //uses class list for adding and removing
  link.addEventListener('click', () => {
    if (wishListButton.classList.contains('selected-page-added-To-Wishlist')) {

      removeFromWishlist(productId)
      wishListButton.classList.remove('selected-page-added-To-Wishlist');
   

    }
    else {
      console.log(wishList);
      addToWishlist(productId)

    }

  });
})
export function addedToWishlistSelectedPageButtonColourChange(value) {
  const wishListButton = document.querySelector(`.js-wish-list-button-${value}`);
  wishListButton.classList.add('added-To-Wishlist');

}
 */




