import {  products} from "../data/products.js";
import { addToWishlist, removeFromWishlist, wishList } from "../features/extras.js";
import { selectedChapter,productchapters } from "./chapterPage.js";

const maincontainer=document.querySelector(".selectedProductPage-upper-container");
const wishlistButton=document.querySelector(".js-book-mark-button");//
let chapterList=document.querySelector(".chapter-list");

export let selectedProductArray=JSON.parse(localStorage.getItem('selectedProductArray'));
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
      <p class="chapters-number-text">chapters:${data.chapters.length}</p>
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
    <button class="book-mark-button js-book-mark-button .js-book-mark-button-${data.id}" data-product-id=${data.id}>
      <img class="add-to-bookmark-image" src="/icons/wishlist.png">
    </button>
  </div>
  
    </div> 
  
  </div>
  
  </div>
  
  
  
  
 


  `;
 //make sure the dom is present when going to another page else there will be null error
if(maincontainer){
  maincontainer.innerHTML=newHTML;






//chapter list html

data.chapters.forEach((data)=>{

  let chapterHtml='';
  chapterHtml+=`
  
  <a href="/chapter.html"><p class="chapters  js-chapter-${data.chapterNumber}" data-chapter-number="${data.chapterNumber}">Chapter ${data.chapterNumber}: ${data.chapterName}</p></a>
       
  
  `;
  //had to use this beacouse the div which i wanted to add to was object
  chapterList.insertAdjacentHTML( 'beforeend',chapterHtml);

});
}; 

});

//lower container


//if its array button always put selector all
document.querySelectorAll('.js-book-mark-button').forEach((link) => {

  const productId = link.dataset.productId;

  const wishListButton = document.querySelector(`.js-book-mark-button`);
  //uses class list for adding and removing
  link.addEventListener('click', () => {
    if (wishListButton.classList.contains('added-To-Wishlist')) {

      removeFromWishlist(productId)
      wishListButton.classList.remove('added-To-Wishlist');
   

    }
    else {
      console.log(wishList);
      addToWishlist(productId)
    

    }

  });
})

//checks main container if present then runs this
//adds the colour in button
if(maincontainer){

  setInterval(() => {
    wishList.forEach((item) => {
     if(selectedProductArray[0].id==item.id){
      const wishListButton = document.querySelector(`.js-book-mark-button`);
      wishListButton.classList.add('added-To-Wishlist');
     }
  
    })
  }, 1)

}
//chapters

document.querySelectorAll('.chapters').forEach((link)=>{

const chapterNumber=link.dataset.chapterNumber;

link.addEventListener('click',()=>{
  selectedChapter(chapterNumber)

  productchapters(selectedProductArray[0].chapters);

})


})












 