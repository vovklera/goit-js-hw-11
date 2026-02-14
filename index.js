import{a as p,S as f,i as d}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="54644986-605fde0d6b0637c4334fe436a";function y(o){return p("https://pixabay.com/api/",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{console.log("Error",r)})}const n=document.querySelector(".gallery"),c=document.querySelector("#loader"),h=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function x(o){const r=o.map(({webformatURL:i,tags:s,largeImageURL:e,likes:t,views:a,comments:m,downloads:u})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${i}"
                    alt="${s}"
                />
            </a>
            <ul class="image-details">
                <li class="image-item">
                    <p class="imageText">Likes</p>
                    <p class="imageText-item">${t}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Views</p>
                    <p class="imageText-item">${a}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Comments</p>
                    <p class="imageText-item">${m}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Downloads</p>
                    <p class="imageText-item">${u}</p>
                </li>
            </ul>
        </li>
    `).join("");n.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){n.innerHTML=""}function T(){c.hidden=!1}function b(){c.hidden=!0}const S=document.querySelector(".form"),l=document.querySelector(".formInput");S.addEventListener("submit",q);function q(o){o.preventDefault();const r=l.value.trim();l.value="",L(),T(),y(r).then(i=>{if(i.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}x(i.hits)}).catch(i=>{console.log("Error",i)}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
