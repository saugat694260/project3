console.log('hi');

import {selectedProductArray} from "./selectedProductPage.js";



//chapter-content
const chapterContainer=document.querySelector(".chapter-main-container");
  //this function stores in local storage temporarly so the data will not be lost even after refresh
  
  const nextButton=document.querySelector(".next-button");
  const previousButton=document.querySelector(".previous-button");
  






















let chaptersArray=JSON.parse(localStorage.getItem('chaptersArray'));
let chapter=JSON.parse(localStorage.getItem('chapter'));
savetostorage();
export function savetostorage() {
  localStorage.setItem('chaptersArray', JSON.stringify(chaptersArray));
  localStorage.setItem('chapter', JSON.stringify(chapter));//name,data 
}






export function productchapters(chapters){

  let newchapters=[];
    
  
  newchapters.push(chapters)

        if(newchapters){
         chaptersArray=newchapters;
          newchapters=[];
        }
    
    savetostorage();
    
}














  export function selectedChapter(chapterNumber){
    
    let newchapter=[];
    chaptersArray[0].forEach((data)=>{

if(data.chapterNumber==chapterNumber){
  newchapter.push(data)

  
  chapter=newchapter;
  


  }

 
  newchapter=[];
  

    })
    savetostorage();


    }
    
    
    
  if(chapterContainer){
    nextButton.addEventListener('click',()=>{
      for(let i=0;i<=chaptersArray.length-1;i++){
        let array=[];
        chaptersArray.forEach((data)=>{
         
        array.push(data[i+1]);
        chapter=array;
        array=[]
       
       

      })}html()
      savetostorage();
      
})
     
     
      previousButton.addEventListener('click',()=>{
        
        
        for(let i=0;i>=0;i--){
          let array=[];
          chaptersArray.forEach((data)=>{
           
          array.push(data[i]);
          chapter=array;
          array=[]
       
console.log(chapter);

        })}html();
        savetostorage();
      
      })
  }
      


html()


 function html(){
  chapter.forEach((data)=>{
    
    
    if(chapterContainer){
          
      chapterContainer.innerHTML=`
    
    <div class="chapter-sub-container">
    
      <p class="chapter-title">${data.chapterNumber} .${data.chapterName}</p>
      <p class="chapter-content">${data.chapterStory}</p>
    
    </div>
    
    `
    }
        
             })
 }

 
  
      

 



  

   
   
  

   
   
 


    
    