$(document).ready(function (){
    var logged = sessionStorage.getItem("Logged");
    if(logged != "1"){
        window.location.href = "index.html";
    }
})

function ChangeValue(e){
    document.getElementById("MemeTitle").innerHTML = e.value;
}

function SizeChange(e)
{
    document.getElementById("MemeTitle").style.fontSize = e.value + "px"; 
}

function Next(){
    var x = 0;
    var srcF = "Images/Memes/";
    var count = document.getElementById("MemeImg").src.split("/");
    var src = count[count.length - 1].split(".", 1);
    if(src == '10'){
        srcF += '1.png'; 
    }else{
        x = parseInt(src) + 1;
        srcF +=  x.toString() + ".png";
    }
    document.getElementById("MemeImg").src = srcF;
}
function Previous(){
    var x = 0;
    var srcF = "Images/Memes/";
    var count = document.getElementById("MemeImg").src.split("/");
    var src = count[count.length - 1].split(".", 1);
    if(src == '1'){
        srcF += '10.png'; 
    }else{
        x = parseInt(src) - 1;
        srcF +=  x.toString() + ".png";
    }
    document.getElementById("MemeImg").src = srcF;
}