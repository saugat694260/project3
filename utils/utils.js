
import {  products} from "../data/products.js";

//double digit haru banauna garne functon
export function formatCurrency(priceCents) {
  return(priceCents/100).toFixed(2);
}
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
/**
 * let HTML=`
  

 
  

  <div class="container">


  
  <div class="info-container">
    <div class="title-container">
  <p class="product-title">${data.title}</p>
    </div>
    
  
  
    <div class="author-container">
  <p class="author-name-text">Author: ${data.author}</p>
      <button class="author-info-button"><img class="info-image"
        src="/icons/about.png"
        >
      </button>
    </div>
  
  
    <div class="about-product-container">
      <p class="genre-text">Genre:${data.genre}</p>
      <p class="chapters-number-text">chapters: ${data.chapters}</p>
    </div>
  
    <div class="ratings-container">
      <p class="rank-text">rank: # ${data.ratings.rank}</p>
      <p class="rating-text">Ratings: ${data.ratings.count}/10</p>
  
    </div>
  
    
    <div class="discription-container">
      <p class="text-description">description</p>
  <p class="description-text">${data.description}</p>
    </div>
  
  
  </div>
  
  <div class="image-container">
    <div class="image">
      <img class="selected-product-image" src="${data.image}">
    </div>
  
    <div class="options-container">
  
  <div class="add-to-favourite-container">
  <button class="add-to-favourite-button">
    <img class="add-to-favourite-image" src="/icons/favourite.png">
  </button>
  
  </div>
  
  <div class="share-container">
    <button class="share-button">
      <img class="share-image" src="/icons/share.png">
    </button>
  </div>
  
  <div class="book-mark-container">
    <button class="book-mark-button">
      <img class="add-to-bookmark-image" src="/icons/wishlist.png">
    </button>
  </div>
  
    </div> 
  
  </div>
  
  </div>
  
  
  
  
  
  <div class="sub-container">
  
    <div class="chapter-container">
      <p class="text-chapter">Chapters</p>
      <div class="chapter-list">
        <p class="chapters">Chapter 1: go go power</p>
        <p class="chapters">Chapter 1: go go power</p>
        <p class="chapters">Chapter 1: go go power</p>
      </div>
  
    </div>
  <div class="reviews-container">
  <p class="text-review">
    reviews
  </p>
  
  </div>
  
  </div>


  `;
 

  maincontainer.innerHTML=HTML;



 */

