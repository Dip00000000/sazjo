'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



/**
 * filter function
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all") {

      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");

    } else {

      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");

    }
  }
}

addEventOnElem(filterBtns, "click", filter);

var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');
  
//javascript for quick view button
var popup = function(popupClick){
  popupViews[popupClick].classList.add('active');
}
  
popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});
  
//javascript for close button
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
       popupView.classList.remove('active');
      });
    });
});

const product = [
  {
    id: 0,
    image: 'download-removebg-preview.png',
    title: 'product',
    price: 150,
  },
  {
    id: 1,
    image: 'download-removebg-preview.png',
    title: 'product',
    price: 150,
  },
  {
    id: 2,
    image: 'download-removebg-preview.png',
    title: 'product',
    price: 150,
  },
  {
    id: 3,
    image: 'download-removebg-preview.png',
    title: 'product',
    price: 150,
  }
];
const categories = [...new Set(product.map((item)=>
 {return item}))]
 let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var{image, title, price} = item;
  return(
    `<div class ='box>
      <div class= 'img-box'>
        <img class= 'images' src=${image}></img>
      </div>
    <div class= 'bottom'>
    <p>${title}</p>
    <h2>$ ${price}.00</h2>`+
    "<button onclick= 'addtocart("+(i++)+")'>Add to cart</button>"+
    `</div>
    </div>`
  )
}).join('')