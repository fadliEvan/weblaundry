document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
});
});
});

window.addEventListener("scroll",function(){
let navbar=document.querySelector(".navbar");
if(window.scrollY>50){
navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.2)";
}else{
navbar.style.boxShadow="none";
}
});
