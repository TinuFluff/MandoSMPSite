const ddBtn = document.getElementsByClassName("dropdownBtn");
const ddInfo = document.getElementsByClassName("dropdownInfo");

ddBtn[0].onclick = function(){
    if (ddInfo[0].style.display == "none"){
        ddInfo[0].style.display = "block";
    } 
    else {
        ddInfo[0].style.display = "none";
    }
}
ddBtn[1].onclick = function(){
    if (ddInfo[1].style.display == "none"){
        ddInfo[1].style.display = "block";
    } 
    else {
        ddInfo[1].style.display = "none";
    }
}
ddBtn[2].onclick = function(){
    if (ddInfo[2].style.display == "none"){
        ddInfo[2].style.display = "block";
    } 
    else {
        ddInfo[2].style.display = "none";
    }
}
