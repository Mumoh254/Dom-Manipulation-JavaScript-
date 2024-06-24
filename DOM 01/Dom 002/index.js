//dom  man  002
console.log("Dom  manipulation 002");

//creating   real  dom  elements 
//creating  /    generating   html   elements   using   javascript  
//data   in   html  is  static  

//generate  this  
// <div class="product">
// <h1>Oranges</h1>
// <h2>230</h2>
// </div>

//function  to  generate  elements  is   create  element  and  pass  whatever   element  you  want  to  create 

let  div  =  document.createElement("div")
console.log(div);

//add  class  inside  the  element 
div.classList.add("product");
console.log(div);

//add   h1   to  the   div  
//in  h1   store  the  name  of  the  product  you  want  to  store  

let pName  =  document.createElement("h2")
pName.innerText  = "Potatoes";
div.appendChild(pName);

console.log(div);
let  pPrice  =  document.createElement("h3");
pPrice.innerText=  "3000";
div.appendChild(pPrice);

//put   your   complete  div  to  ur  html 
console.log("hello")
console.log(div);
let parent  = document.getElementById("p");
console.log(parent);
parent.appendChild(div);
console.log(parent);

//generate   news   card using  js


{/* <div class="news-cards">
<div class="news-card">
    <h1 class="heading">Latest  news  updates </h1>
    <p class="para ">Lorem, ipsum dolor sit amet consectetur adipisicing 
        elit. Itaque totam maxime iste officiis tempora iusto qui,
         explicabo facere sapiente aliquid voluptatibus deserunt ad 
         fuga quo enim cumque eligendi vero vel.</p>

         <button class="btn ">Read more</button>
</div>
</div> */}

let  apiData  =  [
    {
        para: "hellow json"
    },
    {
        para: "Generating  card  two  in js para   scheme "

    },
    {
        para: "Generating  Card   three  in  js para  scheme "
    },
    {
        para: "Generating  card   four  in  js  para   scheme"
    }
]
let elements  = apiData.forEach( ( ele ,  index)=>{
   return ele;
})
console.log(elements)
console.log(apiData);

console.log("generating  News  cards ")
let newsCards  = document.createElement("div");
newsCards.classList.add("newsCard");

console.log(newsCards);
let h1 = document.createElement("h1");

h1.classList.add("heading");
console.log(h1);
newsCards.appendChild(h1);
h1.innerText =  "apiData.para";

let paragraph  =  document.createElement("P");
console.log(paragraph);
paragraph.classList.add("para");
paragraph.innerText = " Fetching   news   from   an  application programming    interface";
newsCards.appendChild(paragraph);
console.log(newsCards);

let btn  =  document.createElement("button")  ;
console.log(btn);
btn.classList.add("btn");

btn.innerText = "Read  More";
console.log(btn);

newsCards.appendChild(btn);
console.log(newsCards);
let  parent2  =   document.getElementById("news-parent");
console.log(parent2);
parent2.appendChild(newsCards);

 let  products   =  [
    {
        name: "Samsung  s22",
        price: 12000
    },
    {
        name: "i  phone  12  ",
        price: "180000"
    },
    {
        name: "Oppo  reno 11",
        price:  7000
    }
 ]
for(i=0; i< products.length; i++)  
    {

    }

    //ways   of   selecting   elements 
    //query  selector
    //query   selector   only   gives  you  the  first   occurance
     console.log(document.querySelector("img"));
     console.log()
   

     //select   a  classname   using  query   selector 
     console.log(document.querySelector(.img1)) ;
     document.querySelectorAll(".one")//gets  all  elements

     //manipulating   attributes 
     //atribute src  input  tag  ,,  extra  properties  that   the  tags   have  in  html


     function  changeImage  ()

     {
         document.getElementById("image").src  = "//new   source "
     }