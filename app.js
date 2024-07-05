let menu_icon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let close_icon = document.querySelector(".close-icon");
let navlink_sidebar = document.querySelectorAll('.nav-link-sidebar');
menu_icon.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
});
close_icon.addEventListener("click", () => {
  sidebar.classList.add("hidden");
});
navlink_sidebar.forEach((item)=>{
     item.addEventListener('click', ()=>{
  sidebar.classList.add("hidden");
         
     })
})
