window.global = window;

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';
const loader = document.querySelector('.loader');
const btn = document.querySelector('button');
const gallery = document.querySelector('.gallery');
let lightbox = null;
let key = '56102185-c22f62e167e3da8dca248fc51';

function initLightbox() {
  if (!lightbox) {
    lightbox = new SimpleLightbox.default('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
btn.addEventListener('click', e => {
  e.preventDefault();
  gallery.innerHTML = '';
  loader.classList.remove('hidden');
  let query = document.querySelector('input').value;
  document.querySelector('input').value = '';
  fetch(
    `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then(data => {
      if (!data.hits.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }

      yazdır(data.hits);
    })
    .catch(err => {
      iziToast.error({
        message: err.message,
        position: 'topRight',
        timeout: 4000,
      });
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});
function yazdır(data) {
  let markup = data
    .map(item => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = item;

      return `
<li class="gallery-item">
  <a href="${largeImageURL}" class="gallery-link">
    <img
      src="${webformatURL}"
      alt="${tags.split(', ').slice(0, 3).join(', ')}"
      class="gallery-image"
    />
  </a>

  <table class="info-table">
    <thead>
      <tr>
        <th>Likes</th>
        <th>Views</th>
        <th>Comments</th>
        <th>Downloads</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>${likes}</td>
        <td>${views}</td>
        <td>${comments}</td>
        <td>${downloads}</td>
      </tr>
    </tbody>
  </table>
</li>
`;
    })
    .join('');

  gallery.innerHTML = markup;
  gallery.innerHTML = markup;
  initLightbox();
}
