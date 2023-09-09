export let products=[
  {
    id:1,
    title:"kung fu",
    author:"dannelialet",
    image:"/images/018.jpg",
    status:"ongoing",
    genre:"horror",
    chapters:1,
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
    image:"/images/028.jpg",
    author:"dannelialet",
    status:"ongoing",
    genre:"horror",
    chapters:2,
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
    image:"/images/18191ff4986cb63cfe5e1c0a3fd2b04f.jpg",
    author:"morning",
    status:"ongoing",
    genre:"horror",
    chapters:3,
    ratings:{
      rank:1,
      count:3
    },
    description:"this story is khishi shi",
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]

  },
  {
    id:4,
    title:"what was that",
    image:"/images/35-1.jpg",
    author:"kaido",
    status:"ongoing",
    genre:"horror",
    chapters:8,
    description:"this story isfuka ka",
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
    image:"/images/788771a65d75c063b2c056c1d5992f58.jpg",
    author:"novacane",
    status:"ongoing",
    genre:"horror",
    chapters:9,
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
    image:"/images/817.png",
    author:"damn dannel",
    status:"ongoing",
    genre:"horror",
    chapters:18,
    ratings:{
      rank:1,
      count:3
    },
    description:"this story is writen wororo",
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]

  },
  {
    id:7,
    title:"kore de sode",
    image:"/images/AIH_DIO (1).png",
    author:"dannel",
    status:"ongoing",
    genre:"horror",
    chapters:0,
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

  },
  {
    id:8,
    title:"kore de sode",
    image:"/images/AIH_DIO (1).png",
    author:"dannel",
    status:"ongoing",
    genre:"horror",
    chapters:0,
    ratings:{
      rank:1,
      count:3
    },
    price:20,
    description:"this story is writen byy your damn!",
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]

  }
  
]
products.forEach((data)=>{

if(data.price){
  console.log('hi');
}

});