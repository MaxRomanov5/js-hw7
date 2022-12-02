import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", galleryOnClick);

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt='${description}'
      />
    </a>
  </div>`;
  })
  .join("");
  
gallery.insertAdjacentHTML("beforeend", markup);

function galleryOnClick(e) {
  e.preventDefault();
  const bigUrl = e.target.dataset.source;
  if (!bigUrl) {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${bigUrl}" >
    </div>`,{
      onShow: (instance) => {
      document.addEventListener("keydown", closeModal);
  },
     onClose: (instance) => {
      document.removeEventListener("keydown", closeModal);
},
})
  instance.show();
  function closeModal (e){
    console.log(e);
    if (e.key === "Escape") {
      instance.close();

      
    }
  }

  document.addEventListener("keydown", closeModal);
}
