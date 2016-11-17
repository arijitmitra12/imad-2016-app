console.log('Loaded!');
var element= document.getElementById('maintext');
element.innerHTML ="arijit";

//move the image
var img= document.getElementById('image');
var marginLeft=0;
function moveRight(){   
    marginleft=marginleft +5;
    img.style.marginleft =marginleft +'px';
    
}
img.onclick = function(){
    
    
    var interval= setInterval(moveRight,50);
    
};