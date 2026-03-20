// const result= document.getElementById("para");
// console.log(result)
// result.innerHTML= "<b>Hello</b>";
// result.title= "myName"
// // result.innerText= "<b>hi</b>";
// const hi= document.getElementsByClassName("p1")
// console.log(hi)
// hi[0].innerHTML= "<b>Aadi</b>"
// hi[1].innerHTML= "<b>Krishnatraya</b>"

const { createElement } = require("react");

// const tag= document.getElementsByTagName("p");
// console.log(tag);
// tag[1].innerHTML= "My para";
// tag[1].style.color= "blue"

// querySelector only get firts element 
// const test= document.querySelectorAll("p");
// test[1].innerHTML= "Hello"
// test[1].style.color= "red";

// const test2= document.querySelectorAll("ul li");
// for(x in test2){
//     test2[x].style.backgroundColor="green";
//     test2[x].style.margin= "10px";
//     test2[x].style.color="Yellow"
// }

// function myfunction(){
//    let num= document.getElementById("myh1").setAttribute("class","democlass");
//    alert("Done");
// }

// const head=document.createElement("h2");
// const body=document.getElementsByTagName("body");
// body[0].appendChild(head);

let promise =new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("data Loaded");
    } else {
        reject("Error Occured");
    }
});
promise.then((message)=>{
    console.log(message);
})

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>{return response.json();})
// .then((data)=>{console.log(data);})
// .catch((error)=>{console.log(error);})


// try{    
//     var x=y+10;
// }
// catch(error){
//     console.log("Error Occured");
// }

localStorage.setItem("name","Aaryan");

//retrieving data

let name= localStorage.getItem("name");
console.log(name);

// remove item
localStorage.removeItem("name");

// store data

let user={name:"Aaryan",age:20,}
localStorage.setItem("user",JSON.stringify(user));

// retrieve data
let userData= localStorage.getItem("user");
console.log(JSON.parse(userData));