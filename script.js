let favicon = document.getElementsByClassName("favicon")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

favicon.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
