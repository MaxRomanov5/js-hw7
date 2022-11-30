import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 const gallery = document.querySelector('.gallery');

 const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href=${original}>
    <img class="gallery__image" src=${preview}
     alt="${description}"
     title="${description}"/>
  </a> `;
  })
  .join("");

  gallery.insertAdjacentHTML("beforeend", markup);

  const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    animationSpeed: 1000,
    scrollZoom: false,
    enableKeyboard: true,
  });