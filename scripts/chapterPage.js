console.log('hi');

import {selectedProductArray} from "./selectedProductPage.js";



//chapter-content
const chapterContainer=document.querySelector(".chapter-main-container");
  //this function stores in local storage temporarly so the data will not be lost even after refresh
  
  const nextButton=document.querySelector(".next-button");
  const previousButton=document.querySelector(".previous-button");
  






















let chaptersArray=JSON.parse(localStorage.getItem('chaptersArray'));
let convertedArray=Object.values(chaptersArray);
let i=localStorage.getItem('i');
savetostorage();


export function savetostorage() {
  localStorage.setItem('chaptersArray', JSON.stringify(chaptersArray));
  localStorage.setItem('i',i-1);//name,data 
}
console.log(i);





export function productchapters(chapters){

  let newchapters=[];
    
  
  newchapters.push(chapters)

        if(newchapters){
         chaptersArray=newchapters[0];
          newchapters=[];
        }
    
    savetostorage();
    
}


console.log(chaptersArray[0].chapterNumber);










console.log(i);
  export function selectedChapter(chapterNumber){
  
console.log(chapterNumber);
   

       i=chapterNumber;
       console.log(i);
        savetostorage();
      
   }

  ;
 

//the page that you see first
//defaultValue();



  

if(chapterContainer){

  nextButton.addEventListener('click',()=>{


    if(i==chaptersArray.length-1){
    i=chaptersArray.length-1;
    }
    else{
      i++;
      right();
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
    left()
  }
  savetostorage();
 } );
 

}

//handles all right logic
function right(){
  chapterContainer.innerHTML=`<div class="chapter-sub-container">
    
  <p class="chapter-title">${chaptersArray[i].chapterNumber} .${chaptersArray[i].chapterName}</p>
  <p class="chapter-content">${chaptersArray[i].chapterStory}</p>

</div>
`;
  

}

//handles all left logic
function left(){
  chapterContainer.innerHTML=`<div class="chapter-sub-container">
    
  <p class="chapter-title">${chaptersArray[i].chapterNumber} .${chaptersArray[i].chapterName}</p>
  <p class="chapter-content">${chaptersArray[i].chapterStory}</p>

</div>
`

savetostorage();
}

if(chapterContainer){
  chapterContainer.innerHTML=`<div class="chapter-sub-container">
    
  <p class="chapter-title">${chaptersArray[i].chapterNumber} .${chaptersArray[i].chapterName}</p>
  <p class="chapter-content">${chaptersArray[i].chapterStory}</p>
  
  </div>`

  //creates dots on the length of array
}
  //first thing you see on page





  
  

 
  
      

 



  

   
   
  

   
   
 


    
    