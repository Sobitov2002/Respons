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




let sigUpBtn = document.querySelector('.signUpBtn');
let modal = document.querySelector('.modal');
let blur = document.querySelector('.blur');
let sigUp = true;

sigUpBtn.addEventListener('click',(e) =>{
    if(sigUp === true){
        modal.style.display = 'block';
        blur.style.display = 'block';
        sigUp = false;
    }
    else if(sigUp == false){
        modal.style.display = 'none';
        blur.style.display = 'none';
        sigUp = true;
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
