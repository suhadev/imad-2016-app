console.log('Loaded!');
var image=document.getElementById("img");
var marginLeft=0;
function moveRight(){
    
    marginLeft= marginLeft + 5;
    image.style.marginLeft= marginLeft + 'px';
}
image.onclick=function(){
   
   setInterval(moveRight,50);
};