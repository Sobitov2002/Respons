let hamburgerMenu = document.getElementById('hamburger');
let navMenu = document.querySelector('.nav_menu');
let burgerIcon = document.getElementById('burgerIcon')
let bol= true;

hamburgerMenu.addEventListener('click',()=>{
    if (bol == true){
        navMenu.style.display = 'block';
        burgerIcon.classList.remove('fa-bars')
        burgerIcon.classList.add('fa-xmark');
     
        bol = false;
    }
    else if (bol == false){
        navMenu.style.display = 'none';
        burgerIcon.classList.remove('fa-xmark')
        burgerIcon.classList.add('fa-bars'); 
        bol = true;
    }
})


// let header = document.querySelector('nav');
// window.addEventListener('scroll',(e)=>{
    
//     if(window.screenY < header.clientHeight){
//         header.classList.add('sticy')
       
//     } 

//     else{
        
//             header.classList.r('sticy')
       
        

//     }
    
// })
