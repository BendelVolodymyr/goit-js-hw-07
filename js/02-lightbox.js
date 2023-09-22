import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');


const newImages = [];

const newFotoGallery = (object) => {
    object.map(({ preview, original, description }) => {
        newImages.push(`<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`)
    })
    gallery.insertAdjacentHTML('beforeend', newImages.join(''));
};

newFotoGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
    sourceAttr: 'href', // завантаження файла з ...
    overlayOpacity: 0.4, // прозорість фону
    animationSpeed: 500, // Анімація перемикання слайдів (швидкість)
    captionsData: 'alt', // додаємо з опису
    captionPosition: 'bottom', // позиція
    captionDelay: 250, // затримка опису '250 ms'
});




