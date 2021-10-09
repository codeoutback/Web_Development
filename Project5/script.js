var img = [
    "assets/cookies.jpg", 
    "assets/strudel.jpg", 
    "assets/fruitSpongeCake.jpg",
    "assets/gummyBear.jpg",
    "assets/cakePops.jpg",
    "assets/crepe.jpg"
];
var index = 1;

function nextPic(){
    var nextImg = img[index];
    document.querySelector("img").setAttribute("src", nextImg);
    index++;
  
    if(index >= img.length){
        index = 0;
    }
    //console.log(`Current index is ${index}`)
}

function prevPic(){
    var nextImg = img[index];
    document.querySelector("img").setAttribute("src", nextImg);
    index--;
    if(index < 0){
        index = img.length-1;
    }
   
    //console.log(`Current index is ${index}`)
}

document.getElementById("butt1").addEventListener("click", nextPic);

document.getElementById("butt2").addEventListener("click", prevPic);
 


