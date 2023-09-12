

import {selectedProductArray} from "./selectedProductPage.js";



//chapter-content
const chaptermainContainer=document.querySelector(".chapter-main-container");
const chapterTitleContainer=document.querySelector(".chapter-title-container");
const chapterPageContainer=document.querySelector(".chapter-page-container");
  
  const nextButton=document.querySelector(".next-button");
  const previousButton=document.querySelector(".previous-button");
  

let chaptersArray=JSON.parse(localStorage.getItem('chaptersArray'));
let i=localStorage.getItem('i');
savetostorage();

//to store in local storage
export function savetostorage() {
  localStorage.setItem('chaptersArray', JSON.stringify(chaptersArray));//name,data  this is for saving strings
  localStorage.setItem('i',i);//this is for saving integers
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





if(chaptermainContainer){
  changeHtml();//opening page
}

//changes html accordingingly changed i
  function changeHtml(){
    chapterTitleContainer.innerHTML=`<div class="chapter-sub-container"><br>
      
    <p class="chapter-title">${chaptersArray[i].chapterNumber} .${chaptersArray[i].chapterName}</p>
  
  </div>
  `;
  chapterPageContainer.innerHTML=`
  <p class="chapter-content">${chaptersArray[i].chapterStory}</p>`

   
  
  }

 if(chaptermainContainer){
  buttonVisiblity();
 }

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



  
  

 
  
      

 



  

   
   
  

   
   
 


    
    