const display1=document.querySelector(".dis1");
const display2=document.querySelector(".dis2");
const buttons=document.querySelectorAll('button');

if('serviceWorker' in navigator){
   window.addEventListener('load', e => {
      navigator.serviceWorker.register('./sw.js')
   })
}


const btnN0=document.querySelector(".n0");
btnN0.addEventListener("click",function(){
	display1.innerText+='0';
});
const btnN1=document.querySelector(".n1");
btnN1.addEventListener("click",function(){
	display1.innerText+='1';
});
const btnN2=document.querySelector(".n2");
btnN2.addEventListener("click",function(){
	display1.innerText+='2';
});
const btnN3=document.querySelector(".n3");
btnN3.addEventListener("click",function(){
	display1.innerText+='3';
});
const btnN4=document.querySelector(".n4");
btnN4.addEventListener("click",function(){
	display1.innerText+='4';
});
const btnN5=document.querySelector(".n5");
btnN5.addEventListener("click",function(){
	display1.innerText+='5';
});
const btnN6=document.querySelector(".n6");
btnN6.addEventListener("click",function(){
	display1.innerText+='6';
});
const btnN7=document.querySelector(".n7");
btnN7.addEventListener("click",function(){
	display1.innerText+='7';
});
const btnN8=document.querySelector(".n8");
btnN8.addEventListener("click",function(){
	display1.innerText+='8'
});
const btnN9=document.querySelector(".n9");
btnN9.addEventListener("click",function(){
	display1.innerText+='9';
});
const btnNDot=document.querySelector(".nDot");
btnNDot.addEventListener("click",function(){
	display1.innerText+='.';
});

const btnNEq=document.querySelector(".nEq");
btnNEq.addEventListener("click",function(){
	let ans =display1.innerText;
	display2.innerText=`${eval(ans)}`
});

const btnclr=document.querySelector(".clr");
btnclr.addEventListener("click",function(){
	let text=display1.innerText;
	text=text.slice(0,text.length-1);
	display1.innerText=`${text}`;
});

const btndiv=document.querySelector(".div");
btndiv.addEventListener("click",function(){
	display1.innerText+='/';
});

const btnmul=document.querySelector(".mul");
btnmul.addEventListener("click",function(){
	display1.innerText+='*';
});

const btnsub=document.querySelector(".sub");
btnsub.addEventListener("click",function(){
	display1.innerText+='-';
});

const btnadd=document.querySelector(".add");
btnadd.addEventListener("click",function(){
	display1.innerText+='+';
});
