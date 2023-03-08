
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



