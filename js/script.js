 // vanila
  document.querySelectorAll(".korea-image-container img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});

document.querySelector(".popup-image span").onclick = () =>{
    document.querySelector(".popup-image").style.display = "none";
}
 
/* function upDate(previewPic){
    console.log('previewPic.src is: ' + previewPic.src);
    console.log('previewPic.alt is: ' + previewPic.alt);
    document.getElementById('gallery').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('gallery').innerHTML = previewPic.alt;
      }
  
  function unDo(){
      document.getElementById('gallery').style.backgroundImage = "url('')";
      document.getElementById('gallery').innerHTML = "Hover over an image below to display here.";
  }
  
  function setTab() {
      var im = document.getElementsByClassName('preview');
      console.log(im);
      for (var i=0; i<im.length; i++) {
        im[i].setAttribute("tabindex", "0");
       }
  }
*/