console.log('Loaded!');
var image=document.getElementById("img");
var marginLeft=0;
function moveRight(){
    
    marginLeft=marginLeft+10;
    img.style.marginleft=marginLeft+'px';
}
image.onclick=function(){
   
   var interval=setInterval(moveRight,100);
};