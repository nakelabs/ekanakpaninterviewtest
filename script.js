
(function () {
  'use strict';

  // Ensure all 5 placeholder images have a clean fallback title attribute
  const images = document.querySelectorAll('.image-frame img');
  images.forEach(function (img, index) {
    if (!img.getAttribute('title')) {
      img.setAttribute('title', 'Editorial Image Placeholder 0' + (index + 1));
    }
  });
})();
