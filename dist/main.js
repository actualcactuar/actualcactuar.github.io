!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2);document.body.setAttribute("user-agent",navigator.userAgent);let n=document.querySelector("#menu-trigger"),o=document.querySelector(".navigation");if(n&&o){o.toggle=(()=>{o.classList.toggle("active"),n.classList.toggle("active")}),console.log(n),n.addEventListener("click",e=>{o.toggle()}),o.querySelectorAll("a").forEach(e=>{e.addEventListener("click",e=>{o.toggle()})})}document.querySelector("#contactForm").addEventListener("submit",e=>{e.preventDefault();let t=e.target,r=t.querySelector("button");r.classList.add("active");let n={};t.querySelectorAll("input,textarea").forEach(e=>{let t=e.getAttribute("name"),r=e.value;n[t]=r}),t.classList.add("sending"),fetch(t.getAttribute("action"),{method:t.getAttribute("method"),headers:{"Content-Type":t.getAttribute("enctype")},body:JSON.stringify(n)}).then(e=>e.json()).then(e=>{t.classList.remove("sending"),t.classList.add("completed"),r.classList.remove("active"),t.reset(),setTimeout(()=>{t.classList.remove("completed")},1e3)})})},function(e,t,r){}]);