


/*-------------------------------------
testimonial slider
---------------------------------------*/
function testimonialSlider(){
console.log("hello world");
const carouselOne = document.getElementById('carouselOn');
if(carouselOne){ /* if the element exists */
carouselOne.addEventListener('slid.bs.carousel', function (){
       const acitveItem = this.querySelector(".active");
       document.querySelector(".js-testimonial-img").src=
       acitveItem.getAttribute("data-js-testimonial-img");
})

}
}
testimonialSlider();

/* header menu */
function headerMenu(){
const menu = document.querySelector(".js-header-menu"),
backdrop =  document.querySelector(".js-header-backdrp"),
menuCollapseBreakpoint = 991;

function toggleMenu(){
menu.classList.toggle("open");
backdrop.classList.toggle("active");
document.body.classList.toggle("overflow-hidden")
}

document.querySelectorAll(".js-header-menu-toggler").forEach((item)=>{
    item.addEventListener("click", toggleMenu);
});

 // close the menu by cliking outside of it
function collapse(){
    menu.querySelector(".active .js-sub-menu").removeAttribute("style");
    menu.querySelector(".active").classList.remove("active");
}

menu.addEventListener("click", (event) => {
const{ target } = event ;

if(target.classList.contains("js-toggle-sub-menu") && 
window.innerWidth <= menuCollapseBreakpoint){
    // prevent defafult anchor click behaviour
    event.preventDefault();

    // if menu-item already expanded,collapse it and exit
    if(target.parentElement.classList.contains("active")){
        collapse();
        return;
    }

    // if not already expaned...... run below code


    // collapse the other expanded menu-item if exists
    if(menu.querySelector(".active")){
collapse();
    };

    //expand new menu-item
    target.parentElement.classList.add("active");
    target.nextElement.Sibling.scrollHeight + "px";
}
});

// when resizing window
window.addEventListener("resize", function(){
if(this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")){
    toggleMenu();
}
if(this.innerWidth > menuCollapseBreakpoint && menu.classList.contains(".active")){
    collapse();
}
});

}
/*headerMenu();*/