function setActive(){
    let windowLocation = window.location.pathname;
    console.log(windowLocation)

    let urlDirname = "/Any-Gelatto-ERP/"

    switch(windowLocation){
        case urlDirname+"pages/dashboard/" :
            document.getElementById("sidebar-dashboard").classList.add("active")
            break;
        default : break;
    }
}

setActive();