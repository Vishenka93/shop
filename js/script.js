"use strict"

const burger = document.querySelector(".menu__icon"),
      headerMenu = document.querySelector('.menu__body'),
       bg = document.querySelectorAll('.icons-main-block__item'),
       image = document.querySelector('.images-work__item');

      if(burger) {

        burger.addEventListener('click', (event) => {
               burger.classList.toggle("_active");
               headerMenu.classList.toggle('_active');
               document.body.classList.toggle('_lock'); 
            
        });
      }


      
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });    
}


  window.addEventListener('mousemove', function(e) { 
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;     
      image.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 100 + 'px)';
  });    




