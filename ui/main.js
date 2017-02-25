console.log('Loaded!');
//change txt
var element = document.getElementById("main");
element.innerHTML="hi";


//move img
var marginleft=0;

var img = document.getElementById("madi");
function moveRight()

{
    marginleft = marginleft + 5;
    img.style.marginleft = marginleft + "px";
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};