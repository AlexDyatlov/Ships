"use strict";const listSelects=()=>{document.querySelectorAll(".select-default").forEach(e=>{new Choices(e,{searchEnabled:!1,itemSelectText:""});let t=e.getAttribute("aria-label");e.closest(".choices").setAttribute("aria-label",t)})};document.querySelectorAll(".select-default").forEach(e=>{new Choices(e,{searchEnabled:!1,itemSelectText:""});let t=e.getAttribute("aria-label");e.closest(".choices").setAttribute("aria-label",t)}),window.addEventListener("DOMContentLoaded",()=>{let e=[];function t(){document.querySelector(".ships__list").innerHTML="",e.filter(e=>e.title.toLowerCase().includes(n)||e.nation.toLowerCase().includes(n)).forEach(e=>{let t=document.createElement("li");t.classList.add("ships__item"),t.innerHTML=`\n          <arcticle class="ship" style="background-image: url('img/ship.png');">\n            <div class="ship__nation">${e.nation} /\n              <span class="ship__type">${e.type}</span>\n            </div>\n            <div class="ship__level">${e.level}\n              <span class="ship__title">${e.title}</span>\n            </div>\n          </arcticle>\n          `,document.querySelector(".ships__list").appendChild(t)})}document.querySelector("button").addEventListener("click",(function(){(async function(e){const t=await fetch(""+e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("ships.json").then(s=>{e=s,t()}).catch(e=>console.error(e)),this.remove()}),{once:!0});const s=document.getElementById("search");let n="";s.addEventListener("input",e=>{n=e.target.value.toLowerCase(),t()})});