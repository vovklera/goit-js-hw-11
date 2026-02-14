import{a as g,S as f,i as n}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="54644986-605fde0d6b0637c4334fe436a";function y(o){return g("https://pixabay.com/api/",{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{console.log("Error",r)})}const c=document.querySelector(".gallery"),m=document.querySelector("#loader"),h=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function x(o){const r=o.map(({webformatURL:i,tags:s,largeImageURL:e,likes:t,views:a,comments:u,downloads:p})=>`
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
                    <p class="imageText-item">${u}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Downloads</p>
                    <p class="imageText-item">${p}</p>
                </li>
            </ul>
        </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function b(){m.hidden=!1}function T(){m.hidden=!0}const S=document.querySelector(".form"),l=document.querySelector(".formInput");S.addEventListener("submit",q);function q(o){o.preventDefault();const r=l.value.trim();if(!r){n.warning({message:"Input cannot be empty!",position:"topRight"});return}l.value="",L(),b(),y(r).then(i=>{if(i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}x(i.hits)}).catch(i=>{console.log("Error",i),n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{T()})}
//# sourceMappingURL=index.js.map
