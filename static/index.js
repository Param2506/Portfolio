let a = document.getElementById('toggle');
a.addEventListener(`click` , shownav);
menuopen = false;
function shownav(){
    console.log("clicked");
    var content = document.getElementById("texts");
    var icons = document.getElementById("icons");
    icons.classList.toggle("disable");
    content.classList.toggle("disable");
    if (menuopen == false){
      a.classList.add("open");
      menuopen = true;
    }
    else{
      a.classList.remove("open");
      menuopen = false;
    }
}

