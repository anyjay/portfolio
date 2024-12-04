let navBar= document.querySelector(".nav-bar");

function openMenu(){
    /*console.log("open!"); System.out.print("") Equivelant*/
    navBar.style.width="90%";
    navBar.style.opacity="1";
}

function closeMenu(){
    navBar.style.width="0%";
    navBar.style.opacity="0%";
}