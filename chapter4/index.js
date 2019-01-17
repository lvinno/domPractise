
//jquery selector for fade style
$(document).ready(function () {
    onLoading();
});

function onLoading(){
    setTimeout(()=>($("h1").fadeIn("slow")),500);
    setTimeout(()=>($("h2").fadeIn("slow")),1000);
    setInterval(()=>{
        let date = new Date();
        $("h2").html(date);
    },1000)
    setTimeout(()=>($("#imagegallerys").fadeIn("slow")),1500); 
    setTimeout(()=>($("#placeholder").fadeIn("slow")),2000); 
    setTimeout(()=>($("#description").fadeIn("slow")),2500); 
}

window.onload = preparelinks;


function preparelinks(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallerys")) return false;

    var gallery = document.getElementById("imagegallerys");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onmouseover = function(){
            return !showPic(this);
        }
    }
}

function showPic(whichpic){
    if(!document.getElementById) return false;
    var source = whichpic.getAttribute("href");
    document.getElementById("placeholder").setAttribute("src",source);
    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title");
        document.getElementById("description").innerHTML = text;
    }
    return true;
}
