window.ctFrontend=function(e){function t(t){for(var n,o,i=t[0],a=t[1],c=0,l=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);l.length;)l.shift()()}var n={},r={4:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+e+"."+{0:"4bdca086842ffc0b496a",1:"0140d196dc15939c42ac",2:"749dcdf55aed6bacbe7c",3:"03dd6dfe369f5b0587e0",5:"060a97593ada72bb2487",6:"9b440a96b09de470e57c",7:"046aabd10eb507137bb8",8:"f996b12a78a7db375674",9:"3c108d6087abf1a369b2",10:"bbf27e19a3fea948d824"}[e]+".js"}(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.blocksyJsonP=window.blocksyJsonP||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=a;return o(o.s=7)}([function(e,t){e.exports=window.ctEvents},function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){var t=e.els,n=void 0===t?[]:t,r=e.beforeLoad,o=void 0===r?function(e){}:r,i=(e.events,e.forcedEvents,e.load),c=e.mount,l=void 0===c?function(e){var t=e.mount,n=e.el;return n?t(n):t()}:c,d=e.condition;n&&"[object Function]"==={}.toString.call(n)&&(n=n());var s=(Array.isArray(n)?n:[n]).reduce((function(e,t){return[].concat(u(e),u(Array.isArray(t)?t:document.querySelectorAll(t)))}),[]);s.map(o),0!==s.length&&(d&&!d({els:n})||i().then((function(e){return s.map((function(t){l(a(a({},e),{},{el:t}))}))})))},s=function(e){/comp|inter|loaded/.test(document.readyState)?e():document.addEventListener("DOMContentLoaded",e,!1)},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.immediate,r=void 0!==n&&n,i=t.skipEvents,c=void 0!==i&&i;e.filter((function(e){var t=e.onLoad;return!!(void 0===t||t)})).map((function(e){var t=e.onLoad,n=void 0===t||t;n&&"[object Function]"==={}.toString.call(n)&&n({entryPoint:e,reload:function(){return d(e)}})})),r?e.filter((function(e){var t=e.onLoad;return!!(void 0===t||t)})).map(d):s((function(){return e.filter((function(e){var t=e.onLoad;return!!(void 0===t||t)})).map(d)})),c||u(new Set(e.reduce((function(e,t){return[].concat(u(e),u(t.events||[]),u(t.forcedEvents||[]))}),[]))).map((function(t){return o.a.on(t,(function(){e.filter((function(e){var n=e.events;return(void 0===n?[]:n).indexOf(t)>-1})).map(d),e.filter((function(e){var n=e.forcedEvents;return(void 0===n?[]:n).indexOf(t)>-1})).map((function(e){return d(a(a({},e),{},{els:["body"]}))}))}))}))}},function(e,t){e.exports=window.jQuery},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),i=null,a=matchMedia("all and (max-width: 689px)"),c=matchMedia("all and (max-width: 999px)"),u=function(){i=a.matches?"mobile":c.matches?"tablet":"desktop",o.a.trigger("ct:general:device-change",{currentScreen:i})};u(),a.addListener((function(){return u()})),c.addListener((function(){return u()}));var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.withTablet,n=void 0!==t&&t;return n?i:"tablet"===i?"mobile":i}},function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return a}));var i=null;window.IntersectionObserver&&(i=new IntersectionObserver((function(e){return e.filter((function(e){return e.isIntersecting})).map((function(e){return e.target})).filter((function(e){return(e.dataset.reveal||"").indexOf("no")>-1})).map((function(e,t){e.dataset.reveal="yes:".concat(t+1)}))})));var a=function(e){if(window.IntersectionObserver){var t=e.querySelectorAll('[data-reveal*="no"]');0!==t.length&&t[0].dataset.reveal&&r(t).map((function(e){return i.observe(e)}))}}},function(e,t,n){var r,o,i;
/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */i=function(){var e,t,n=document,r=n.getElementsByTagName("head")[0],o={},i={},a={},c={};function u(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return!1;return 1}function l(e,t){u(e,(function(e){return t(e),1}))}function d(t,n,r){t=t.push?t:[t];var f=n&&n.call,m=f?n:r,p=f?t.join(""):n,h=t.length;function y(e){return e.call?e():o[e]}function v(){if(!--h)for(var e in o[p]=1,m&&m(),a)u(e.split("|"),y)&&!l(a[e],y)&&(a[e]=[])}return setTimeout((function(){l(t,(function t(n,r){return null===n?v():(r||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),c[n]?(p&&(i[p]=1),2==c[n]?v():setTimeout((function(){t(n,!0)}),0)):(c[n]=1,p&&(i[p]=1),void s(n,v)))}))}),0),d}function s(e,o){var i,a=n.createElement("script");a.onload=a.onerror=a.onreadystatechange=function(){a.readyState&&!/^c|loade/.test(a.readyState)||i||(a.onload=a.onreadystatechange=null,i=1,c[e]=2,o())},a.async=1,a.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,r.insertBefore(a,r.lastChild)}return d.get=s,d.order=function(e,t,n){!function r(o){o=e.shift(),e.length?d(o,r):d(o,t,n)}()},d.path=function(t){e=t},d.urlArgs=function(e){t=e},d.ready=function(e,t,n){e=e.push?e:[e];var r,i=[];return!l(e,(function(e){o[e]||i.push(e)}))&&u(e,(function(e){return o[e]}))?t():(r=e.join("|"),a[r]=a[r]||[],a[r].push(t),n&&n(i)),d},d.done=function(e){d([null],e)},d},e.exports?e.exports=i():void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o)},function(e,t,n){n.p=ct_localizations.public_url,!ct_localizations.internet_explorer_template||-1===navigator.userAgent.indexOf("MSIE")&&-1===navigator.userAgent.indexOf("Trident")||(document.body.insertAdjacentHTML("beforeend",ct_localizations.internet_explorer_template),document.body.classList.add("ct-ie"))},function(e,t,n){"use strict";n.r(t),n.d(t,"getCurrentScreen",(function(){return m.a})),n.d(t,"allFrontendEntryPoints",(function(){return R}));n(6);var r=n(0),o=n.n(r),i=n(2),a=n.n(i),c=n(1),u=null,l=function(){u?u.update():n.e(10).then(n.bind(null,31)).then((function(e){var t=e.default;u=new t({data_src:"ct-lazy",data_srcset:"ct-lazy-set",elements_selector:"img[data-ct-lazy]",callback_load:function(e){var t=e.closest('[class*="ct-image-container"]'),n=function(){t&&(t.classList.remove("ct-lazy"),t.classList.add("ct-lazy-loading-start"),requestAnimationFrame((function(){var e,n,r,o;t.classList.remove("ct-lazy-loading-start"),t.classList.add("ct-lazy-loading"),e=t.firstElementChild,n=function(){t.classList.remove("ct-lazy-loading"),t.classList.add("ct-lazy-loaded")},r=function(){e.removeEventListener("transitionend",o),n()},o=function(t){t.target===e&&r()},e.addEventListener("transitionend",o)})))};navigator.userAgent.toLowerCase().indexOf("firefox")>-1?setTimeout(n,500):n()}})}))};function d(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object(c.b)((function(){a.a&&a()(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/global",(function(){return o.a.trigger("ct:images:lazyload:update")}))})),document.querySelector("img[data-ct-lazy]")&&l(),o.a.on("ct:images:lazyload:update",(function(){a.a&&a()("body").trigger("jetpack-lazy-images-load"),window.jetpackLazyImagesModule&&window.jetpackLazyImagesModule(),l()}))})),Object(c.b)((function(){if(document.querySelector(".ct-comments")){var e=d(document.querySelectorAll('.ct-comments input[type="text"], .ct-comments input[type="email"], .ct-comments textarea')),t=function(){e.map((function(e){e.classList.remove("ct-not-empty"),e.value.trim().length>0&&e.classList.add("ct-not-empty")}))};t(),e.map((function(e){return e.addEventListener("input",t)}))}})),Object(c.b)((function(){if(window.addComment&&window.addComment.moveForm){var e=addComment.moveForm;addComment.moveForm=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.apply(addComment,n),document.getElementById(n[0]).classList.add("ct-has-reply-form");var o=document.getElementById("cancel-comment-reply-link"),i=o.onclick;return o.onclick=function(){return i.call(this),document.getElementById(n[0]).classList.remove("ct-has-reply-form"),!1},!1}}}));var f=n(4),m=n(3);var p=function e(){o.a.trigger("ct:header:render-frame"),requestAnimationFrame(e)},h=n(5),y=n.n(h),v=function(e){return e.addEventListener("click",(function(t){var n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if("pinterest"===e.dataset.network)return t.preventDefault(),void(window.PinUtils?window.PinUtils.pinAny():y()("https://assets.pinterest.com/js/pinit.js",(function(){setTimeout((function(){window.PinUtils.pinAny()}),300)})));if(!n){t.preventDefault();var r=e.href,o=null!=window.screenLeft?window.screenLeft:screen.left,i=null!=window.screenTop?window.screenTop:screen.top,a=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-300+o,c=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-250+i,u=window.open(r,"","scrollbars=yes, width=600, height=500, top="+c+", left="+a);window.focus&&u.focus()}}))},g=function(){var e=document.querySelector(".ct-back-to-top");if(e){var t=!1,n=function(){var e=document.querySelector(".ct-back-to-top");e&&(window.scrollY>500?e.classList.add("ct-show"):e.classList.remove("ct-show"))};n(),window.addEventListener("scroll",(function(){t||(t=!0,requestAnimationFrame((function(){n(),t=!1})))})),e.addEventListener("click",(function(e){e.preventDefault();var t=window.scrollY,n=null;requestAnimationFrame((function e(r){n||(n=r);var o,i,a,c=r-n,u=Math.max((o=c,i=t,a=-t,(o/=700/2)<1?a/2*o*o+i:-a/2*(--o*(o-2)-1)+i),0);scrollTo(0,u),c<700&&requestAnimationFrame(e)}))}))}};var b=function(){var e=document.querySelector('.ct-share-box[data-type="type-2"]');if(e){var t=document.querySelector('.content-area article[id*="post"] .entry-content').getBoundingClientRect(),n=t.top<innerHeight/2,r=t.bottom<=0;e.classList[n&&!r?"add":"remove"]("ct-visible")}},w=function(){b(),document.addEventListener("scroll",(function(){return b()}));var e=document.querySelector('.ct-share-box[data-type="type-2"]');e&&(!function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}()?(e.addEventListener("mouseenter",(function(t){e.classList.toggle("active")})),e.addEventListener("mouseleave",(function(t){e.classList.toggle("active")}))):(e.parentNode.querySelector(".ct-share-box > span").addEventListener("click",(function(t){e.classList.toggle("active"),t.stopPropagation()})),document.body.addEventListener("click",(function(t){e.classList.remove("active")}))))};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L={};o.a.on("ct:header:update",(function(){return L={}}));var E=function(e){var t=e.getBoundingClientRect().width,n=e.parentNode.getBoundingClientRect().width;return Math.abs(n-t)>5&&(n-=Array.from(e.parentNode.children).filter((function(t){return t.dataset.id!==e.dataset.id})).reduce((function(e,t){return e+t.getBoundingClientRect().width}),0)),Math.abs(e.parentNode.getBoundingClientRect().width-e.parentNode.parentNode.getBoundingClientRect().width)>5&&(n+=j(e.parentNode.parentNode.children).filter((function(t){return t.dataset.items!==e.parentNode.dataset.items})).reduce((function(e,t){return e+(t.getBoundingClientRect().width-j(t.children).reduce((function(e,t){return e+t.getBoundingClientRect().width}),0))}),0)),e.closest('[class*="ct-container"]')&&e.closest('[data-column="middle"]')&&(n=j(e.closest('[class*="ct-container"]').children).reduce((function(e,t){return e+t.getBoundingClientRect().width}),0)-2*Math.max(j(e.closest('[class*="ct-container"]').querySelectorAll('[data-column="start"] [data-id]')).reduce((function(e,t){var n=window.getComputedStyle(t);return e+t.getBoundingClientRect().width+parseInt(n.getPropertyValue("margin-left"))+parseInt(n.getPropertyValue("margin-right"))}),0),j(e.closest('[class*="ct-container"]').querySelectorAll('[data-column="end"] [data-id]')).reduce((function(e,t){var n=window.getComputedStyle(t);return e+t.getBoundingClientRect().width+parseInt(n.getPropertyValue("margin-left"))+parseInt(n.getPropertyValue("margin-right"))}),0))),L[e.dataset.id].itemsWidth.reduce((function(e,t){return e+t}),0)>n-10?L[e.dataset.id].children.reduce((function(t,r,o){var i=t.fit,a=t.notFit;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},L[e.dataset.id].itemsWidth.slice(0,o+1).reduce((function(e,t){return e+t}),0)<n-100?{fit:[].concat(j(i),[r]),notFit:a}:{notFit:[].concat(j(a),[r]),fit:i})}),{fit:[],notFit:[]}):{fit:L[e.dataset.id].children,notFit:[]}},P=function(e){return Array.from(e.firstElementChild.children).filter((function(e){return!e.classList.contains(".more-items-container")})).map((function(e){var t=e.firstElementChild;t.innerHTML="<span>".concat(t.innerHTML,"</span>");var n=window.getComputedStyle(t,null),r=t.firstElementChild.getBoundingClientRect().width+parseInt(n.getPropertyValue("padding-left"),10)+parseInt(n.getPropertyValue("padding-right"),10)+(t.querySelector(".child-indicator")?13:0);return t.innerHTML=t.firstElementChild.innerHTML,r}))},q=function(e){if(e.firstElementChild&&(L[e.dataset.id]||(L[e.dataset.id]={el:e,previousRenderedWidth:null,children:[].concat(j(Array.from(e.firstElementChild.children).filter((function(e){return!e.classList.contains("more-items-container")}))),j(e.firstElementChild.querySelector(".more-items-container")?j(e.firstElementChild.querySelector(".more-items-container .sub-menu").children):[])),itemsWidth:P(e)},e.removeAttribute("data-responsive")),!L[e.dataset.id].previousRenderedWidth||L[e.dataset.id].previousRenderedWidth!==window.innerWidth)){L[e.dataset.id].previousRenderedWidth=window.innerWidth;var t=E(e),n=t.fit,r=t.notFit;if(0===r.length)return e.querySelector(".more-items-container")&&(n.map((function(t){e.firstElementChild.insertBefore(t,e.querySelector(".more-items-container"))})),e.querySelector(".more-items-container").remove()),C(),void o.a.trigger("ct:header:init-popper");document.querySelector('header [data-device="desktop"]')&&function(e,t){if(e.querySelector(".more-items-container"))t();else{var n=document.createElement("li");n.classList.add("menu-item-has-children"),n.classList.add("more-items-container"),n.insertAdjacentHTML("afterbegin",'<a href="#">\n      '.concat(ct_localizations.more_text,'\n      <span class="child-indicator">\n        <svg width="8" height="8" viewBox="0 0 15 15">\n            <path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path>\n        </svg>\n      </span>\n    </a>\n    <ul class="sub-menu"></ul>')),e.firstElementChild.appendChild(n),t&&t()}}(e,(function(){r.map((function(t){return e.querySelector(".more-items-container .sub-menu").appendChild(t)})),n.map((function(t){return e.firstElementChild.insertBefore(t,e.querySelector(".more-items-container"))})),C(),o.a.trigger("ct:header:init-popper")}))}},C=function(){j(document.querySelectorAll('header [data-device="desktop"] [data-id*="menu"] > .menu')).map((function(e){e.hasFirstLevelPoppers=!1,j(e.children).filter((function(e){return e.classList.contains("menu-item-has-children")||e.classList.contains("page_item_has_children")})).map((function(e){return e.querySelector(".sub-menu")})).map((function(e){j(e.querySelectorAll("[data-submenu]")).map((function(e){e.removeAttribute("data-submenu")})),e._popper&&(e._popper.destroy(),e._popper=null)}))}))};function k(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=function e(t){t.classList.contains("active")?function(e,t){var n=e.querySelector("ul");requestAnimationFrame((function(){var e=n.getBoundingClientRect().height;n.style.height="".concat(e,"px"),n.classList.add("is-animating"),requestAnimationFrame((function(){n.style.height="0px",M(n,(function(){n.classList.remove("is-animating"),n.removeAttribute("style"),t()}))}))}))}(t,(function(){t.classList.toggle("active"),k(t.querySelectorAll(".menu-item-has-children.active")).map((function(e){return e.classList.remove("active")}))})):(k(t.parentNode.children).map((function(t){return t.classList.contains("active")&&e(t)})),t.classList.toggle("active"),function(e){var t=e.querySelector("ul");requestAnimationFrame((function(){var e=t.getBoundingClientRect().height;t.style.height="0px",t.classList.add("is-animating"),requestAnimationFrame((function(){t.style.height="".concat(e,"px"),M(t,(function(){t.classList.remove("is-animating"),t.removeAttribute("style")}))}))}))}(t))},_=function(e){var t=e.parentNode.getAttribute("href");t&&"#"!==t||e.parentNode.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),I(e.closest(".menu-item-has-children"))})),e.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),I(e.closest(".menu-item-has-children"))}))};function M(e,t){var n=function(){e.removeEventListener("transitionend",r),t()},r=function(t){t.target===e&&n()};e.addEventListener("transitionend",r)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R=[{els:'body[class*="woocommerce"]',load:function(){return n.e(7).then(n.bind(null,33))}},{els:"[data-parallax]",load:function(){return n.e(9).then(n.bind(null,34))},events:["blocksy:parallax:init"]},{els:'.flexy-container[data-flexy*="no"]',load:function(){return n.e(6).then(n.bind(null,35))},events:["ct:flexy:update"]},{els:".ct-share-box [data-network]",load:function(){return new Promise((function(e){return e({mount:v})}))}},{els:[".ct-header-cart > .ct-cart-item",".ct-language-switcher > .ct-active-language"],load:function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,27))}},{els:".ct-back-to-top",load:function(){return new Promise((function(e){return e({mount:g})}))},events:["ct:back-to-top:mount"]},{els:'.ct-share-box[data-type="type-2"]',load:function(){return new Promise((function(e){return e({mount:w})}))},events:["ct:single:share-box:update"]},{els:[".entries[data-layout]","[data-products].products"],condition:function(){return!!document.querySelector('.ct-pagination:not([data-type="simple"])')},load:function(){return n.e(5).then(n.bind(null,28))},beforeLoad:function(e){return Object(f.a)(e)}},{els:function(){return[z(document.querySelectorAll(".search-form[data-live-results]")).filter((function(e){return!e.matches('[id="search-modal"] .search-form[data-live-results]')&&!e.matches(".ct-sidebar .ct-widget .woocommerce-product-search")}))]},load:function(){return n.e(0).then(n.bind(null,29))},mount:function(e){return(0,e.mount)(e.el,{})}},{els:".ct-sidebar .ct-widget .search-form:not(.woocommerce-product-search)",load:function(){return n.e(0).then(n.bind(null,29))}},{els:".ct-sidebar .ct-widget .woocommerce-product-search",load:function(){return n.e(0).then(n.bind(null,29))},mount:function(e){return(0,e.mount)(e.el,{})}},{els:'[id="search-modal"] .search-form[data-live-results]',condition:function(){return!!document.querySelector('header [data-id="search"]')},load:function(){return n.e(0).then(n.bind(null,29))},mount:function(e){return(0,e.mount)(e.el,{mode:"modal",perPage:6})}},{els:'header [data-device="desktop"] [data-id*="menu"] > .menu',condition:function(){return!!document.querySelector('header [data-device="desktop"] [data-id*="menu"] .menu-item-has-children')},load:function(){return Promise.all([n.e(2),n.e(3)]).then(n.bind(null,30))},onLoad:!1,mount:function(e){(0,e.handleFirstLevelForMenu)(e.el)},events:["ct:header:init-popper"]},{els:['header [data-device="desktop"] [data-id*="menu"] > .menu .menu-item-has-children > .sub-menu','header [data-device="desktop"] [data-id*="menu"] > .menu .page_item_has_children > .sub-menu'],load:function(){return Promise.all([n.e(2),n.e(3)]).then(n.bind(null,30))},mount:function(e){return(0,e.handleUpdate)(e.el)},onLoad:!1,events:["ct:header:init-popper"]},{els:'header [data-device="desktop"] [data-id^="menu"]',load:function(){return new Promise((function(e){return e({mount:q})}))},events:["ct:header:render-frame"]},{els:"#offcanvas .child-indicator",load:function(){return new Promise((function(e){return e({mount:_})}))}},{els:[".ct-modal-action",".ct-header-search > a[href]"],load:function(){return n.e(1).then(n.bind(null,32))},events:["ct:header:update"]}];Object(c.a)(R);var D=function(){var e=document.querySelector(".ct-header-trigger");document.querySelector("#offcanvas")&&(document.querySelector("#offcanvas").hasListener||(document.querySelector("#offcanvas").hasListener=!0,document.querySelector("#offcanvas").addEventListener("click",(function(e){if(e.target&&e.target.matches("a")){var t=document.querySelector(".ct-header-trigger");t&&t.click()}})))),e&&!e.hasListener&&(e.hasListener=!0,e.addEventListener("click",(function(e){e.preventDefault(),n.e(1).then(n.bind(null,32)).then((function(t){return(0,t.handleClick)(e,{container:document.querySelector(document.querySelector(".ct-header-trigger").hash)})}))})))};Object(c.b)((function(){setTimeout((function(){return document.body.classList.remove("ct-loading")}),1500),D(),window.wp&&wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",(function(e){o.a.trigger("ct:header:update"),o.a.trigger("ct:header:render-frame")})),requestAnimationFrame(p)})),o.a.on("blocksy:frontend:init",(function(){Object(c.a)(R,{immediate:!0,skipEvents:!0}),D()})),o.a.on("ct:overlay:handle-click",(function(e){var t=e.e,r=e.href,o=e.options,i=void 0===o?{}:o;n.e(1).then(n.bind(null,32)).then((function(e){(0,e.handleClick)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({container:document.querySelector(r)},i))}))})),a.a&&(a()(document).on("uael_quick_view_loader_stop",(function(){o.a.trigger("ct:add-to-cart:quantity")})),a()(document).on("facetwp-loaded",(function(){o.a.trigger("ct:custom-select:init"),o.a.trigger("ct:images:lazyload:update")})))}]);