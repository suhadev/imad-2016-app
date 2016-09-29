console.log('Loaded!');
var image=document.getElementById("img");
function moveRight(){
    var marginLeft=0;
    marginLeft=marginLeft+10;
    img.style.marginleft=marginLeft+'px';
}
image.onclick=function(){
   
   var interval=setInterval(moveRight,100);
};