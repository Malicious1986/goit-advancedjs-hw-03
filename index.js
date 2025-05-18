import{S as h,i as g}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/";function b(o){return"?"+new URLSearchParams({key:"50351330-2fc0fc2b1e2442bcaa307ce6b",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}function L(o){const r=y+b(o);return fetch(r).then(a=>a.json()).catch(a=>console.error(a))}function S({src:o,originalSrc:r,description:a,likes:n,views:e,comments:t,downloads:i}){return`<li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img
                    class="gallery-image"
                    src="${o}"
                    data-source="${r}"
                    alt="${a}"
                    width=360
                    height=200
                />

            </a>
            <ul class='metadata'>
                <li>
                    <p class='metadata-heading'>Likes</p>
                    <p>${n}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Views</p>
                    <p>${e}</p>
                </li>
                <li>
                    <p class='metadata-heading'>Comments</p>
                    <p>${t}</p>
                </li>
                <li>
                    <p metadata-heading>Downloads</p>
                    <p>${i}</p>
                </li>
            </ul>
        </li>`}function q(o){o.innerHTML=""}function v(o,r){if(o){const a=r.map(({webformatURL:e,largeImageURL:t,tags:i,likes:d,views:m,comments:p,downloads:f})=>S({src:e,originalSrc:t,description:i,likes:d,views:m,comments:p,downloads:f})).join("");o.innerHTML=a,new h(".gallery a").refresh()}}const s=document.querySelector(".gallery"),w=document.querySelector("form"),l=document.querySelector("input"),c=document.querySelector(".loader"),u=document.querySelector("button");w.addEventListener("submit",o=>{if(o.preventDefault(),!s)return;const r=l.value;l.value="",r&&(q(s),c.classList.remove("hidden"),u.setAttribute("disabled","disabled"),L(r).then(a=>{if(u.removeAttribute("disabled"),c.classList.add("hidden"),!a.hits.length)return g.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});v(s,a.hits)}))});
//# sourceMappingURL=index.js.map
