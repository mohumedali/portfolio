const boxes = document.querySelectorAll('.box');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });

boxes.forEach(box => observer.observe(box));

let arrow=document.getElementById('arrow');
window.onscroll=function(){
    if(scrollY >= 400)
    {
        arrow.style.opacity='1';
        arrow.style.transition='0.4s';
    }
    else{
        arrow.style.opacity='0'
        
    }
}
arrow.onclick=function(){
    scroll({
        behavior:"smooth",
        top:'0'
    })
}
let tech=document.getElementById('tech-skills')
let btn_read=document.getElementById('btn-read')
let soft=document.getElementById('soft-skills')
btn_read.onclick=function(){
    tech.style.display='none'
    soft.style.display='block'
}