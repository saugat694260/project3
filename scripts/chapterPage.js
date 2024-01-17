

import dayjs from "../utils/utils.js";
import {selectedProductArray} from "./selectedProductPage.js";
import {  RandomNumber} from "../utils/utils.js";



//chapter-content
const chaptermainContainer=document.querySelector(".chapter-main-container");
const chapterTitleContainer=document.querySelector(".chapter-title-container");
const chapterPageContainer=document.querySelector(".chapter-page-container");
  
  const nextButton=document.querySelector(".next-button");
  const previousButton=document.querySelector(".previous-button");
  

let chaptersArray=JSON.parse(localStorage.getItem('chaptersArray'));
let i=localStorage.getItem('i');
let usersReviewArray=JSON.parse(localStorage.getItem('usersReviewArray'));
savetostorage();

//to store in local storage
export function savetostorage() {
  localStorage.setItem('chaptersArray', JSON.stringify(chaptersArray));//name,data  this is for saving strings
  localStorage.setItem('i',i);//this is for saving integers
  localStorage.setItem('usersReviewArray', JSON.stringify(usersReviewArray));
}
//this function stores all the chapters of product
export function productchapters(chapters){

  let newchapters=[];
    
  
  newchapters.push(chapters)

        if(newchapters){
         chaptersArray=newchapters[0];
          newchapters=[];
        }
    
    savetostorage();
    
}

//this function is for opening the selected page
  export function selectedChapter(chapterNumber){
  

let temp;

 temp=chapterNumber-1;
    if(temp){
      i=temp;
      temp;
    }
    if(temp==0){
      i=0;
      temp;
    }
    
    

savetostorage();

   }
  ;
 



  //this condition is here cause this only run if the element is present

if(chaptermainContainer){

  nextButton.addEventListener('click',()=>{

//next chapter button
    if(i==chaptersArray.length-1){
        i=chaptersArray.length-1;
    }
    else{
        i++;
        changeHtml();
        buttonVisiblity();
    }
    savetostorage();
    }

  );
 
  //previous button
  previousButton.addEventListener('click',()=>{
  
  
    if(i==0){
      i=0;
    }
    else{
      i--;
      changeHtml();
      buttonVisiblity();
    }
  savetostorage();
 } );
 

}




//will only work if main container is present
if(chaptermainContainer){
  changeHtml();//opening page
  buttonVisiblity();
 }

//changes html accordingingly changed i
  function changeHtml(){
    chapterTitleContainer.innerHTML=`<div class="chapter-sub-container"><br>
      
    <p class="chapter-title">${chaptersArray[i].chapterNumber} .${chaptersArray[i].chapterName}</p>
  
  </div>
  `;
  chapterPageContainer.innerHTML=`
  <p class="chapter-content">${chaptersArray[i].chapterStory}</p>`

   
  
  };

 //this function handles the button visibility when reaching ed or start
function buttonVisiblity(){

if(i>0){
  previousButton.style.display="initial"

}
else{
  previousButton.style.display="none"
}

if(i<chaptersArray.length-1){
  nextButton.style.display="initial"
}
else{
  nextButton.style.display="none"

}

}


//function review



//reviews section


//takes input

const userReviews=document.querySelector('.input-review');
const userReviewsContainer=document.querySelector('.user-reviews');
let postReview=document.querySelector('.post-review-button')



//post
 
//post by button
postReview.addEventListener('click',()=>{
  uploadReviews();
  console.log('hi');
});


//post by enter

//active node element is used to know whether the area is active or not
userReviews.addEventListener('keydown', (event) => {
      if (event.key == "Enter" && document.activeElement.nodeName == 'INPUT') {
        
          uploadReviews();
      
      }
});

;
console.log(usersReviewArray);


  //post a review
function uploadReviews(){
  let userReviewValue=userReviews.value;

  //userReviewValue.trim() is used to remove white spaces
  
    if(userReviewValue && userReviewValue.trim()){

      usersReviewArray.push({id:RandomNumber(),day:dayjs().format('DD/MM/YYYY'),time:dayjs().format('HH:MM:ss'),review:userReviewValue});
    console.log(usersReviewArray);
    savetostorage();
    reviewsSectionHtml();
      }

  };
reviewsSectionHtml();

  //change html
  function reviewsSectionHtml(){
    let html;
    usersReviewArray.forEach((data)=>{

          html+=`
          <div class="review-container-js-${data.id}">
          <span>${data.day}</span>
          <span>${data.time}<span>
          <span class='review-delete-js'data-review-id=${data.id}>delete</span>
          <p>${data.review}</p>
          </div>`;
          userReviews.value='';
          
        });

    userReviewsContainer.innerHTML=html;

//delete reviews
document.querySelectorAll('.review-delete-js').forEach((link)=>{

  const reviewId=link.dataset.reviewId;
  const reviewContainer=document.querySelector(`.review-container-js-${reviewId}`)


link.addEventListener('click',()=>{

  removeUsersReview(reviewId);
reviewContainer.remove();
})


    })

  }
  ;
  

  //review delete
 function removeUsersReview(id){
  let temp=[];
  usersReviewArray.forEach((data)=>{

    if(id!==data.id){
temp.push(data);


    };
    usersReviewArray=temp;
    savetostorage();
  console.log(usersReviewArray);
    
  })
 }


 





  
  

 
  
      

 



  

   
   
  

   
   
 


    
    