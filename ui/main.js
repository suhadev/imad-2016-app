/*console.log('Loaded!');
var image=document.getElementById("img");
var marginLeft=0;
function moveRight(){
    
    marginLeft= marginLeft + 5;
    image.style.marginLeft= marginLeft + 'px';
}
image.onclick=function(){
   
   setInterval(moveRight,50);
};*/
var counter=0;
var button=document.getElementById('count');
console.log("button identified");
button.onclick = function(){
    console.log("button clicked");
    counter = counter + 1;
    var span=document.getElementById('counter');
    span.innerHTML=counter.toString();
};