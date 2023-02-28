
/**
 * navbar toggle
 */

export const toggleNav = ()=>{
  let navbar = document.querySelector(".navbar");
  let navToggler = document.querySelector(".nav-toggle-btn");

    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
    document.body.classList.toggle("active");


}





// /**
// * toggle active on add to fav
// */

// const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

// const toggleActive = function () {
// this.classList.toggle("active");
// }



