import{n as e}from"./assets/rolldown-runtime-Bh1tDfsg.js";/* empty css                      */import{n as t,t as n}from"./assets/vendor-CsRacASQ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=e(t(),1),i=e(n(),1);window.global=window;var a=document.querySelector(`.loader`),o=document.querySelector(`button`),s=document.querySelector(`.gallery`),c=null,l=`56102185-c22f62e167e3da8dca248fc51`;function u(){c?c.refresh():c=new r.default.default(`.gallery a`,{captionsData:`alt`,captionDelay:250})}o.addEventListener(`click`,e=>{e.preventDefault(),s.innerHTML=``,a.classList.remove(`hidden`);let t=document.querySelector(`input`).value;document.querySelector(`input`).value=``,fetch(`https://pixabay.com/api/?key=${l}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>{if(!e.hits.length)throw Error(`Sorry, there are no images matching your search query. Please try again!`);d(e.hits)}).catch(e=>{console.log(e),i.default.error({message:e.message,position:`topRight`,timeout:4e3,iconUrl:`./img/izitoast.png`,class:`custom-toast`})}).finally(()=>{a.classList.add(`hidden`)})});function d(e){let t=e.map(e=>{let{webformatURL:t,largeImageURL:n,tags:r,likes:i,views:a,comments:o,downloads:s}=e;return`
<li class="gallery-item">
  <a href="${n}" class="gallery-link">
    <img
      src="${t}"
      alt="${r.split(`, `).slice(0,3).join(`, `)}"
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
        <td>${i}</td>
        <td>${a}</td>
        <td>${o}</td>
        <td>${s}</td>
      </tr>
    </tbody>
  </table>
</li>
`}).join(``);s.innerHTML=t,s.innerHTML=t,u()}console.log(r.default);
//# sourceMappingURL=index.js.map