(()=>{"use strict";var t="lazy",e="."+t,a="lazy--loaded",r="lazy--animated",s="lazy--finished",n=function(t){var e;try{e=new URL(t).pathname}catch(a){e=t}return e},c=function(t){var e=t.target;e.classList.contains(r)&&(setTimeout((function(){e.classList.remove(s)}),10),e.classList.remove(r))},o=function(t,e){var a=t.querySelector("source");return a?a.hasAttribute(e):t.hasAttribute(e)},i=function(t,e){var a=t.querySelector("source");return a?a.getAttribute(e):t.getAttribute(e)},d=function(e){var c=e.target,d=n(i(c,"src")),l=n(i(c,"data-src")),u=i(c,"srcset"),v=i(c,"data-srcset"),f=o(c,"data-src")&&l===d,L=o(c,"data-srcset")&&v===u;!f&&!L||function(e){e.classList.add(s),e.classList.add(r),e.classList.add(a),e.classList.remove(t);var n=new CustomEvent("imageLazyLoaded",{detail:e});window.dispatchEvent(n),e.classList.remove(a)}(c)};document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("transitionend",c);var t=document.querySelectorAll(e),a=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){var e=t.target;!function(t){t.onload=d,console.log(t.dataset.src),t.dataset.src&&(t.src=t.dataset.src),t.dataset.srcset&&(t.srcset=t.dataset.srcset);var e=t.closest("video");if(e){for(var a in e.children){var r=e.children[a];"string"==typeof r.tagName&&"SOURCE"===r.tagName&&(r.src=r.dataset.src)}e.onloadeddata=d,e.load()}}(e),a.unobserve(e)}}))}),{rootMargin:"30%"});t.forEach((function(t){a.observe(t)}))}));var l=document.querySelectorAll(".accordion");l.forEach((function(t){var e=t.querySelector(".accordion-title"),a=t.querySelector(".accordion-content");e.addEventListener("click",(function(){var e=t.classList.contains("open");l.forEach((function(t){t.classList.remove("open"),t.querySelector(".accordion-content").style.maxHeight="0"})),e||(t.classList.add("open"),a.style.maxHeight=a.scrollHeight+"px")}))}))})();