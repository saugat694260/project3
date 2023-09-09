import {  products} from "../data/products.js";

const maincontainer=document.querySelector(".selectedProductPage-main-container")


let selectedProductArray=JSON.parse(localStorage.getItem('selectedProductArray'));
savetostorage();
  //this function stores in local storage temporarly so the data will not be lost even after refresh
  export function savetostorage() {
    localStorage.setItem('selectedProductArray', JSON.stringify(selectedProductArray));//name,data 
  }




//this function takes the id and adds the data for the selected container only
//takes the data pushes in to in to array and becomes empty again so it can only give one array to new array if itself is not empty ..the new array is stored in local storage so it wont dissapear
export function selectedProduct(productId){


let newselectedProductArray=[];

products.forEach((data)=>{
  if(data.id==productId){
  newselectedProductArray.push(data)
      if(newselectedProductArray){
        selectedProductArray=newselectedProductArray;
        newselectedProductArray=[];
      }
  }
  })
  savetostorage();
}
  

//generating html
selectedProductArray.forEach((data)=>{

  let newHTML=`
  


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
 //make sure the dom is present when going to another page else there will be null error
if(maincontainer)
  maincontainer.innerHTML=newHTML;



})

 