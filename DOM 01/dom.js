//adding   and   removing   elements  from  the  tre
//change  css  of  ele
//change  element  atribute
//changing content  

//rules   to  follow  in   dom  manipulation 
//how   to   select   /  target  an  element 

//all   possible  ways   to   target   an   element  for  manipulation

// console.log(document);

// //document  gives  you  functions   to  target  elements  
// document.getElementById("para");
// console.log(document.getElementById("para"));

// //inner text  property  changes  the text  inside 
// document.getElementById("para").innerText = "hello world";

// //
// //selecting  elements  using  Classname
// //get  elements  by  classname  gives  u  an  array  access  it  using  index

// console.log(document.getElementsByClassName("ele"));
// let arrEle =  document.getElementsByClassName("ele");
// console.log(ele[0]);

// //select  elements  using  tag name 
// //returns  an  array 
// let eles  = document.getElementsByTagName("p");
// let ele = eles[0];
// console.log(ele);

// //selecting  elements  using   id 
// //id  unique key 
// console.log(document.getElementById("para"));

// //manipulating   content  
// //content  is   watever   is  inside  a   tag  
// let   box  =   document.getElementById("box");aQ2- 5    


// //to  fetch   any  text  inside  an  element 
// console.log(box.innerText);
// //change the  text
// box.innerText = "Reject  the  bill";

// //inner  html  understands text  and  a  tag ;
// box.innerHTML("Reject ");

// //manipulate  css \\
// //select   the   element  
// let index  = document.getElementById("ele")[0].innerHTML  =  "Connected   to  mongoose";
// console.log(index);

// //  manipulating  css
// //.styler  property
// index.style.height  =  "  500px";
// //change  color   margin  bg  color  
// index.style.backgroundColor =  "rgba ( 255  , 255, 255)";

//EVENT  HANDLING 
//what  is   event handling in  js
//Any   interaction   you  perform  in  the  web  is  an  event 
//click  scroll hover  

// let  name  = "peter"
//   function  logName  () {
//     console.log(`my  name  is ${name}`)
//   }

  //onclick 
  //on mouseenter
  //on mouse leave
  //on hover
  let manipulate  = document.getElementById("click-event")
  console.log(manipulate);
  manipulate.addEventListener("click" , ()=>{
    console.log("Clicked")
  })