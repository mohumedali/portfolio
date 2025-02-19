const boxes = document.querySelectorAll('.box');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });
boxes.forEach(box => observer.observe(box));

const boxLeft = document.querySelectorAll('.box-left');
const observerr = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });
boxLeft.forEach(box => observer.observe(box));

const boxRight = document.querySelectorAll('.box-right');
const observerrr = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });
boxRight.forEach(box => observer.observe(box));

const boxTop = document.querySelectorAll('.box-top');
const observerrrr = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });
boxTop.forEach(box => observer.observe(box));

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
let soft_skill=document.getElementById('soft-skill')
let btn_readMore=document.getElementById('btn-readMore');
let btn_readLess=document.getElementById('btn-readLess');
btn_readMore.onclick=function(){
    soft_skill.style.display='block';
    btn_readMore.style.display='none';
    btn_readLess.style.display='block'
}
btn_readLess.onclick=function(){
    soft_skill.style.display='none';
    btn_readMore.style.display='block';
    btn_readLess.style.display='none';
}
let username=document.getElementById('username');
let email=document.getElementById('email');
let textarea=document.getElementById('text-area');
let btnsend=document.getElementById('btn-send');
btnsend.onclick=function(){
    username.value='';
    email.value='';
    textarea.value='';
}


