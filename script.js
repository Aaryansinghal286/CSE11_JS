// console.log("Hello World!");
// document.write("Hello World!");
// alert("Hello World!");


var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="Aaryan";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));


// function
var sayHello=function(){
    alert("Hello World!");
}
// array
var numberarr=[1,2,3];
var animals= new Array("giraffe","LION","elephant");
// object
var person={
    name:"Aaryan",
    age:20,
    city:"Bangalore"
}


const sym1= Symbol(4);
console.log(sym1);
const sym2= Symbol(4);
console.log(sym2);
if(sym1===sym2){
    console.log("True");
}
else{    console.log("False");
}


var x=6;
var y=3;
console.log(x=10 && y>1);
console.log(x==6 || y==5);
console.log(!(x==y));


var i;
for(i=0;i<3;i++){
    console.log(i);
}


var count;
document.write("Starting Loop" +"<br>");
for(count=0;count<=5;count++){
    document.write("Current Count" + count);
    document.write("<br>");
}
document.write("Loop Ended");