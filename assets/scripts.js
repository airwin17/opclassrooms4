var imagelist=gets(".gallery-item");
var imagesc=gets(".img");
var imgTarget=0;
function trier(str){
    for(var i=0;i<imagelist.length;i++){
        if(imagelist[i].classList.contains(str)||str=="Tous"){
            imagelist[i].style.display="block";
        }else{
            imagelist[i].style.display="none"
        }
    }
    for(var i=0;i<gets(".categoryElement").length;i++){
        gets(".categoryElement")[i].style.backgroundColor="white";    
    }
}
function next(){
    if(imgTarget==2){
        navto(0);
    }else{
        navto(imgTarget+1)
    }
}
function preview(){
    if(imgTarget==0){
        navto(2);
    }else{
        navto(imgTarget-1)
    }
}
function navto(int){
    imgTarget=int;
    get(".containerh").scrollTo(
        {
            left: imagesc[int].offsetLeft,
            behavior: "smooth",
          }
    );
    for(var i=0;i<gets(".but-slider").length;i++){
        gets(".but-slider")[i].style.backgroundColor="rgba(255 255 255/50%)"
    }
    gets(".but-slider")[int].style.backgroundColor="rgba(255 255 255/1)"
}
//******************************************************************************************************** */
for(var i=0;i<gets(".categoryElement").length;i++){
    gets(".categoryElement")[i].addEventListener("click",function (str){
        trier(str.target.innerHTML);
        str.target.style.backgroundColor="#BEB45A";
    })
}
/****************************************************************************************************** */
function get(str){
    return document.querySelector(str);
}
function gets(str){
    return document.querySelectorAll(str);
}
function getimgcord(img){
return img.offsetLeft;
}