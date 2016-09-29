console.log('Loaded!');
var image=document.getElementById("img");
function moveRight(){
    var marginLeft=0;
    marginLeft=marginLeft+10;
    img.style.marginleft=marginLeft+10;
}
image.onclick=function(){
   image.style.marginLeft='100px';
   setinterval(moveRight,100);
};