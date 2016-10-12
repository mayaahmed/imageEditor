
 containerdiv = document.getElementById("container");
overlayContainerdiv = document.getElementById("overlayContainer");
galleryImages = new Array(); 
height="300px"; 
width="300px"; 

blurValue="0px";
brightnessValue="100%";
contrastValue="100%";
grayscaleValue="0%";
belowValue="0px";
reflectChoice="below ";






function init() {
   
  var  imageWidthBtn = document.getElementById("imageWidthRange");
  var  imageHeightBtn = document.getElementById("imageHeightRange");
  var blurBtn = document.getElementById("blurRange");
  var brightnessBtn = document.getElementById("brightnessRange");
  var contrastBtn = document.getElementById("contrastRange");
  var grayscaleBtn = document.getElementById("grayscaleRange");
  var reflectBtn = document.getElementById("reflectRange");
    imageWidthBtn.addEventListener("input", changeImageWidth, false);
    imageHeightBtn.addEventListener("input", changeImageHeight, false);
    blurBtn.addEventListener("input", changeBlur, false);
     brightnessBtn.addEventListener("input", changeBrightness, false);
    contrastBtn.addEventListener("input", changeContrast, false);
    grayscaleBtn.addEventListener("input", changeGrayscale, false);
      reflectBtn.addEventListener("input", changeReflect, false);
}

window.addEventListener('load', init, false);


function changeReflectAxis(string) {
  reflectChoice = string;
  reflect();
}


function changeReflect() {
  var string = this.value;
  belowValue= string+"px";
  reflect();
}


function changeBlur() {
  var string = this.value;
  blurValue= string+"px";
  updateStyle();
}

function changeBrightness() {
  var string = this.value;
  brightnessValue= string+"%";
   updateStyle();
}

function changeContrast() {
  var string = this.value;
  contrastValue= string+"%";
  updateStyle();
 }

function changeGrayscale() {
  var string = this.value;
  grayscaleValue= string+"%";
 updateStyle();
}


function updateStyle(){
var styleString= "-webkit-filter: blur("
+blurValue+ ") brightness(" +brightnessValue+ ") contrast(" +contrastValue+ ") grayscale("+ grayscaleValue +")";
  console.log(styleString);
galleryImages[0].style= styleString;
}






function changeImageWidth() {
  var string = this.value;
  width= string+"px";
  resize();
}


function changeImageHeight() {
 var string = this.value;
   height =string+"px";
   resize();
    }



function loadImageFileAsURL()
{

   var containerdiv = document.getElementById("container");

    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
              length=galleryImages.length;
              galleryImages[length]           = document.createElement("img");
               galleryImages[length].src = fileLoadedEvent.target.result;
              galleryImages[length].style.height=height;
              galleryImages[length].style.width=width;
                containerdiv.appendChild(galleryImages[length]  );       
                // document.body.appendChild(imageLoaded);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}


function reflect(){

var string = "-webkit-box-reflect:" +reflectChoice +belowValue +" linear-gradient(transparent,white)";  
console.log(string);
galleryImages[0].style= string;
}

function mask(name){
  console.log(name);
  if(name=='circle')
  galleryImages[0].style= "-webkit-mask-box-image:url(circle.png)";
  else if(name=='heart')
  galleryImages[0].style= "-webkit-mask-box-image:url(heart.png)";
 else if(name=='pipal')
 galleryImages[0].style= "-webkit-mask-box-image:url(pipalleaf.png)";
else if(name=='polygon')
 galleryImages[0].style= "-webkit-mask-box-image:url(polygon.png)";
opacity:1;

}






function resize(){

 console.log(height);
 console.log(width);
 galleryImages[0].style.height= height;
 galleryImages[0].style.width= width;
 
}


function slideOpen(el){
el.style.transition="height 0.5s linear 0s";
el.style.height="20%";
el.style.visibility="visible";
}


function slideOpenE(el){
el.style.transition="height 0.5s linear 0s";
el.style.height="70%";
el.style.visibility="visible";
}

function slideOpenM(el){
el.style.transition="height 0.5s linear 0s";
el.style.height="100%";
el.style.visibility="visible";
}

function slideClose(el){
  
 
el.style.transition="height 1.0s linear 0s";
el.style.height="0px";
el.style.border="none";
}



