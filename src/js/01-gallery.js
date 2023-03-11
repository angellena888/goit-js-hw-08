// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imagesList = galleryItems.map(
    ({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}" 
        />
    </a> `;
}).join('');

gallery.insertAdjacentHTML('beforeend', imagesList);


const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionData: 'alt',
});

console.log(imagesList);

// console.log(galleryItems);
