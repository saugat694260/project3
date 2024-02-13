import{products}from "./products.js";
export let reviewDatabase=[]//JSON.parse(localStorage.getItem('reviewDatabase'));


saveReviewsInDatabase();
export function saveReviewsInDatabase(){

localStorage.setItem('reviewDatabase',JSON.stringify(reviewDatabase))

};

if(reviewDatabase && reviewDatabase.length==0){
  products.forEach((data)=>{

    reviewDatabase.push({id:data.id,data:[]});
  
  })
}
