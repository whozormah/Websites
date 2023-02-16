//hide and display FAQs

const faq = document.querySelectorAll('.faqs');
faq.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        //change plus Icon
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'uil uil-angle-right-b'){
            icon.className = 'uil uil-angle-down';
        }
        else{
            icon.className = 'uil uil-angle-right-b';
        }
    })
})

// menubtn------------!SECTION
const menuBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav-menu');


// open MEnu------------!SECTION
menuBtn.addEventListener('click', () => {
     menu.style.display = 'block';
     menuBtn.style.display = 'none';
     closeBtn.style.display = 'block';
})

// Close MEnu------------!SECTION
const closeNav = () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
} 

closeBtn.addEventListener('click', closeNav);


//close Menu list when items are clicked

if(window.innerWidth < 1024){
    document.querySelectorAll(".nav-menu li a").forEach(navItem => {
        navItem.addEventListener('click', closeNav);
    })
}       