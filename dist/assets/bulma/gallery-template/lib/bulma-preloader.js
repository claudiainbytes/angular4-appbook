window.onload = function() {

   function fadder(idElement){
      var box = document.getElementById(idElement);
      box.style.opacity = window.getComputedStyle(box, null).getPropertyValue("opacity");
      box.style.opacity = (box.style.opacity == 1) ? 0 : 1;
   }

   setTimeout( fadder("myLoader") , 1000);
   document.getElementById("myLoader").style.display = "none";
   setTimeout( fadder("allTheContent") , 1000);

};