let menu=document.querySelector('#menu-bars');
let header=document.querySelector('header');

menu.onclick=()=>{
    menu.classList.toggle(' fa fa-times');
    header.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa fa-times');
    header.classList.remove('active');
}
let cursor1=document.querySelector(".cursor-1");

window.onmousemove =(e) =>{
     cursor1.style.top=e.pageY +'px';
     cursor1.style.left=e.pageX+'px';

}
document.querySelectorAll('a').forEach(links=>{
     links.onmouseenter =()=>{
       cursor1.classList.add('active')
     }
     links.onmouseleave =()=>{
        cursor1.classList.remove('active')
      }
})