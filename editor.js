
 containerdiv = document.getElementById("container");
overlayContainerdiv = document.getElementById("overlayContainer");
galleryImages = new Array(); 
height="200px";
width="200px";
  

function init() {
   
  var  imageWidthBtn = document.getElementById("imageWidthRange");
  var  imageHeightBtn = document.getElementById("imageHeightRange");
        
    imageWidthBtn.addEventListener("input", changeImageWidth, false);
    imageHeightBtn.addEventListener("input", changeImageHeight, false);
    
}

window.addEventListener('load', init, false);

function changeImageWidth() {
  var string = this.value;
  width= string+"px";
}


function changeImageHeight() {
 var string = this.value;
   height =string+"px";
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

galleryImages[0].style="-webkit-box-reflect: below 0 linear-gradient(transparent,white)";  
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
el.style.height="30%";
el.style.visibility="visible";
}

function slideClose(el){
  
 
el.style.transition="height 1.0s linear 0s";
el.style.height="0px";
el.style.border="none";
}



