import { galleryItems } from './gallery-items.js';
// Change code below this line



// 

const gallery = document.querySelector('.gallery');


const newImages = [];

const newFotoGallery = (object) => {
    object.map(({ preview, original, description }) => {
        newImages.push(`<li class="gallery__item"><a class="gallery__link" href="${original}" ><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/></a></li>`)
    })
    gallery.insertAdjacentHTML('beforeend', newImages.join(''));
};

newFotoGallery(galleryItems);

// const clickKeyboard = ({ key }) => {
//     if (key !== 'Escape') return;
    
//     console.log(key);
// };

// const clickImage = (event) => {
//     event.preventDefault();
//     var teg = event.target.tagName.toLowerCase();
        
//     if (teg !== 'img') return;
//     basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`).show();
//     document.addEventListener('keydown', clickKeyboard);
    
// };

// function test() {
//     basicLightbox.create().hiden();
    
// }


// gallery.addEventListener('click', clickImage);


function galleryModal(event){
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  var instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
    onShow: () => { window.addEventListener("keydown", onEsc) }, // опція-функція basicLightbox, додаємо подію при появі модалки, для кнопки 
    onClose: () => { window.removeEventListener("keydown", onEsc) }// опція-функція basicLightbox, прибираємо подію після натискання Escape
  });
  // функція перевірки чи дійсно натиснула кнопка, повертає закриття модалки
  function onEsc(event) {
     if (event.code === 'Escape') {
      instance.close();//
    }
  }
  instance.show();
};

gallery.addEventListener("click", galleryModal);

// console.log();


