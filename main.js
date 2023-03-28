'use strict';

{
 const menu = document.querySelector('.menu');
 const hambergar = document.querySelector('.hambergar');
 const bar1 = document.getElementById('bar1');
 const bar2 = document.getElementById('bar2');
 const bar3 = document.getElementById('bar3');
 const mask = document.querySelector('.mask')


 hambergar.addEventListener('click' , () =>{
  bar1.classList.toggle('active')
  bar3.classList.toggle('active');
  bar2.classList.toggle('hidden');
  menu.classList.toggle('remove')
  mask.classList.toggle('remove')
 })




}