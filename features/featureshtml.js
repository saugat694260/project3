//buttons close and open

//sidebars

//left sidebar
const menuButton=document.querySelector(".top-more-button");
const leftSidebarContainer=document.querySelector(".left-sidebar-container");

//right sidebar
const profileButton=document.querySelector(".top-profile-button");
const rightSidebarContainer=document.querySelector(".right-sidebar-container");


//menu close and open

/*
window press close
window.addEventListener('keydown',(event)=>{
    console.log(event);})
    
    
window.addEventListener('click',(event)=>{
    

    if(menuButtonClicked==true){
   
        leftSidebarContainer.style.animation="none"
        leftSidebarContainer.classList.remove("js-display");
        menuButtonClicked=false;
        
    
    }
    //
    if(profileButtonClicked==true){

        rightSidebarContainer.style.animation="none"
        rightSidebarContainer.classList.remove("js-display");
        profileButtonClicked=false;
    }
})

    */
  let menuButtonClicked=false;
  let profileButtonClicked=false;



menuButton.addEventListener('click',()=>{

if(menuButtonClicked==true){
   
    leftSidebarContainer.style.animation="none"
    leftSidebarContainer.classList.remove("js-display");
    menuButtonClicked=false;
    

}
else{

    leftSidebarContainer.style.animation="slide-out-left-sideBar 0.5s ease-out";
    leftSidebarContainer.classList.add("js-display");
    menuButtonClicked=true;
}


});

//profile menu close and open



profileButton.addEventListener('click',()=>{

if(profileButtonClicked==true){

    rightSidebarContainer.style.animation="none"
    rightSidebarContainer.classList.remove("js-display");
    profileButtonClicked=false;
}

else{

    rightSidebarContainer.style.animation=" slide-out-right-sideBar 0.5s ease-out"
    rightSidebarContainer.classList.add("js-display");
    profileButtonClicked=true;
}

});




/*might not be necessary
//search button

const searchButton=document.querySelector(".top-more-button");
const inputBar=document.querySelector(".left-sidebar-container");

//search bar close and open
*/




 

