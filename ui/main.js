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
//testing onclick
/*var counter=0;
var button=document.getElementById('count');
console.log("button identified");
button.onclick = alert("hello");*/
//clicking a button to increment counter value
/*button.onclick = function(){
    console.log("button clicked");
    counter = counter + 1;
    var span=document.getElementById('counter');
    span.innerHTML=counter.toString();
};*/
var nameInput=document.getElementById("input");
var nameEntered=nameInput.value;
var submit=document.getElementById("submitbtn");
submit.onclick=function(){
    alert("a");
    var names=["name1","name2","name3"];
    var list="";
    for(var i=0;i<=names.length;i++){
        list="<li>"+names[i]+"</li>";
    }
    
};
var unorderedList=document.getElementById("ul");
unorderedlist.innerHTML=list;