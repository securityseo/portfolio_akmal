/*==================toggle icon navbar=================*/



// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };
/*==================scroll section active link=================*/
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

const menuIcon = document.getElementById('menu-icon')
const navbar = document.querySelector('.navbar')

let isOpen = false
function Burger() {
    if (isOpen == true) {
        navbar.classList.add('close')
        menuIcon.className= 'bx bx-menu'
        isOpen = false
    }else {
        navbar.classList.remove('close')
        menuIcon.className = 'bx bx-x'
        isOpen = true
    }
}

menuIcon.onclick = Burger

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top>= offset && top <offset+height) {
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================scroll section active link=================*/

    let header = document.querySelector('header')

    header.classList.toggle('sticky' , window.scrollY >100);
};

 /*==================typed js=================*/

const typed = new Typed('.multiple-text',{
    strings:['Frontend Devolper' , 'Grafic Disinger', 'Treyder',],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

