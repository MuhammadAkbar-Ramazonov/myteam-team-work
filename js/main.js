var elopenModalBtn = document.querySelectorAll(".meeting__item-btn");
var elLinks = document.querySelectorAll(".meeting__wrapper-link");

elLinks.forEach(link => {
    link.addEventListener("click",()=>{
        console.log("clicked");
    })
})


elopenModalBtn.forEach(function(link){

    link.addEventListener("click" , function(evt){
        
        link.classList.toggle("meeting__item-btn--active")
    })
})