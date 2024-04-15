
import {formatCurrency } from "../utils/utils.js";
export class Product{
  id;
  title;
  author;
  image;
  status;
  genre;
  chapters;
  ratings;
  description;
  keywords;
  priceCents;

  //constructor
  constructor(productDetails){

this.id=productDetails.id;
this.title=productDetails.title;
this.author=productDetails.author;
this.image=productDetails.image;
this.status=productDetails.status;
this.genre=productDetails.genre;
this.chapters=productDetails.chapters;
this.ratings=productDetails.ratings;
this.description=productDetails.description;
this.keywords=productDetails.keywords;
this.priceCents=productDetails.priceCents;


  };

  getProductImage(){

return `/images/${this.image}`;

  }
  getPrice(){
   return `${formatCurrency(this.priceCents)}`
  }
  



}


export let products=[
  {
    id:1,
    title:"kung fu",
    author:"dannelialet",
    image:"018.jpg",
    status:"ongoing",
    genre:"horror",
    chapters:[
{chapterNumber:1,
chapterName:"kunfu",
chapterStory:
"today i met a bitch who was rich"
},
{chapterNumber:2,
  chapterName:"lol",
  chapterStory:
  "today i met a bitch who was rich wo wo"
  }

    ],
   
    ratings:{
      rank:1,
      count:3
    },
    description:"this story is writen byy human lol wow",
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]

  },
  {
    id:2,
    title:"fuka ku",
    image:"028.jpg",
    author:"dannelialet",
    status:"ongoing",
    genre:"horror",
    chapters:[
      {chapterNumber:1,
      chapterName:"kunfu",
      chapterStory:
      "today i met a bitch who was rich"
      }
      
          ],
    ratings:{
      rank:1,
      count:3
    },
    description:"this story is writen gorrarar no bai ne ore?",
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]

  },
  {
    id:3,
    title:"im coming through",
    image:"18191ff4986cb63cfe5e1c0a3fd2b04f.jpg",
    author:"morning",
    status:"ongoing",
    genre:"horror",
    chapters:[
      {chapterNumber:1,
      chapterName:"kunfu",
      chapterStory:
      "today i met a bitch who was rich"
      }
      
          ],
    ratings:{
      rank:1,
      count:3
    },
    description:"this story is khishi shi",
    priceCents:3000,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]

  },
  {
    id:4,
    title:"what was that",
    image:"35-1.jpg",
    author:"kaido",
    status:"ongoing",
    genre:"horror",
    chapters:[
      {chapterNumber:1,
      chapterName:"kunfu",
      chapterStory:
      "today i met a bitch who was rich"
      }
      
          ],
    description:"this story isfuka ka",
    priceCents:3000000,
    ratings:{
      rank:1,
      count:3
    },
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]

  },
  {
    id:5,
    title:"monkey oh yeah",
    image:"788771a65d75c063b2c056c1d5992f58.jpg",
    author:"novacane",
    status:"ongoing",
    genre:"horror",
    chapters:[
      {chapterNumber:1,
      chapterName:"kunfu",
      chapterStory:
      "today i met a bitch who was rich"
      }
      
          ],
    ratings:{
      rank:1,
      count:3
    },
    description:"this story is writen sick monkey",

    keywords: [
      "socks",
      "sports",
      "apparel"
    ]

  },
  {
    id:6,
    title:"non non",
    image:"817.png",
    author:"damn dannel",
    status:"ongoing",
    genre:"horror",
    
    chapters:[
      {chapterNumber:1,
      chapterName:"kunfu",
      chapterStory:
      "today i met a bitch who was rich"
      }
      
          ],
    ratings:{
      rank:1,
      count:3
    },
    description:"this story is writen wororo",
    priceCents:20000,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]

  },
  {
    id:7,
    title:"kore de sode",
    image:"AIH_DIO (1).png",
    author:"dannel",
    status:"ongoing",
    genre:"horror",
    chapters:[
      {chapterNumber:1,
      chapterName:"kunfu",
      chapterStory:
     `In 1995 three mothers decided to harness the new power of the internet to provide an alternative to the negative mass media. The MY HERO website was launched with a mission to use media, art and technology to celebrate the best of humanity. Its mission today is more relevant than ever. As a commercial-free, child-friendly destination, MY HERO embodies the best of what the internet can be. Today the website reaches millions of students of all ages around the world and serves teachers globally.

     The current crisis our nation is experiencing, with hate crimes on the rise and continued racial injustice and inequity, underscores the pressing need to acknowledge and celebrate diversity, to honor those working for human rights and to champion the values we hold dear.
     
     Today, the media programs MY HERO offers educate and inspire youth to understand their own ability to create a more just, equitable, and peaceful world. Learning about the heroic journeys of well-known leaders like Nelson Mandela, Congressman John Lewis, Ruth Bader Ginsberg, Wangari Maathai and others helps students understand that positive change in this complex and challenging time is truly possible.
     
     Teachers in K-12 and college use MY HERO to support emotional and social learning for students of all ages. ESL teachers use MY HERO for language studies and character education. Every submission is reviewed by staff to make sure it is appropriate and does not promote hatred, racism, sexism or violence.
     
     MY HERO promotes digital literacy, critical thinking and media arts education. We mentor teachers, students and others who want to learn to use media and technology to share their hero stories. Our staff also supports and trains teachers who use our online tools. To encourage and reward creativity and self-expression, we award prizes to students and professionals for outstanding films, art, essays and music.
     
     It is especially rewarding in these difficult times to see students of all faiths and from diverse backgrounds utilizing MY HEROs resources as we continue to meet the growing need to educate and inspire future heroes.`
      },
      {chapterNumber:2,
        chapterName:"kunfu",
        chapterStory:
        "today i met a bitch who was rich"
        },
        {chapterNumber:3,
          chapterName:"kunfu",
          chapterStory:
          "today i met a bitch who was rich"
          },
          {chapterNumber:4,
            chapterName:"kunfu",
            chapterStory:
            "today i met a bitch who was rich"
            },
            {chapterNumber:5,
              chapterName:"kunfu",
              chapterStory:
              "today i met a bitch who was rich"
              }
      
          ],
    ratings:{
      rank:1,
      count:3
    },
    description:"this story is writen byy your damn!",
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]

  }
].map((productDetails)=>{
return new Product(productDetails);
});
products.forEach((value)=>{

});



//map basically loops through array and runs a function in each value
//each object will be looped and a function willl run
//.map creates new array

//to randomize the product
/**
 * 
 * //for shuffeling the products
function shuffle(products) {
  let currentIndex = products.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [products[currentIndex],products[randomIndex]] = [
      products[randomIndex], products[currentIndex]];
  }

  return products;
}
console.log(products);

shuffle(products);
 */
shuffle(products);

function shuffle(array){

let currentIndex=array.length;

while(currentIndex!=0){
let randomIndex=Math.floor(Math.random()*array.length);
currentIndex--;

let temp=array[currentIndex];
array[currentIndex]=array[randomIndex];
array[randomIndex]=temp;

}


}