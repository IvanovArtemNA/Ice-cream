const galleryImages=document.querySelectorAll(".gallery__image");let galleryInterval,currentNumber=0;function SlideShow(e){galleryInterval=setInterval((function(){currentNumber<galleryImages.length||(currentNumber=0),ShowNextImage(currentNumber),currentNumber++}),e)}function ShowNextImage(e){e>0?galleryImages[e-1].classList.toggle("show"):galleryImages[galleryImages.length-1].classList.toggle("show"),galleryImages[e].classList.toggle("show")}SlideShow(2e3);
//# sourceMappingURL=index.a95710c2.js.map
