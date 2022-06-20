const section_2 = document.getElementById("section-2");

function resizeContainer() {
    
    var currHeight = window.innerHeight - 200;
    
    if (window.innerWidth <= 1200 && window.innerWidth >= 992){
        currHeight += 80;
    }
    else if (window.innerWidth < 992){
        currHeight += 10;
    }
    
    section_2.style.height = currHeight + "px";   
}

window.onresize = resizeContainer;
window.onload = resizeContainer;

/*
section_2.onscroll = function(event){
    if (section_2.scrollTop > 0){

    }
}
*/