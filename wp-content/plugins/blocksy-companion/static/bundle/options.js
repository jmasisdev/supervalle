!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.blocksyOptions},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=ctEvents},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.components},function(e,t,n){var r=n(10);function o(e,t,n,r,c){var a=new Error(n,r,c);return a.name="UseFetchError",a.status=e,a.statusText=t,Object.setPrototypeOf(a,Object.getPrototypeOf(this)),Error.captureStackTrace&&Error.captureStackTrace(a,o),a}o.prototype=Object.create(Error.prototype,{constructor:{value:Error,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf(o,Error),e.exports=function(e,t,n){var c=(n&&n.depends||t&&t.depends||[]).reduce((function(e,t){return e||!t}),!1);return r(!c&&function(e,t,n){return fetch(e,t).then(n&&n.formatter||t&&t.formatter||function(e){if(!e.ok)throw new o(e.status,e.statusText,"Fetch error");return e.json()})},e,t||{},n||{})}},function(e,t,n){var r=n(12);e.exports=function(){var e=function(){e.id=r(),e.subscribers.forEach((function(e){e()}))};return e.id=r(),e.subscribers=[],e.subscribe=function(t){e.subscribers.push(t)},e.unsubscribe=function(t){e.subscribers.indexOf(t)>=0&&e.subscribers.splice(e.subscribers.indexOf(t),1)},e}},function(e,t,n){var r=n(5);e.exports=function(e){var t=r.useState(e.id),n=function(){return t[1](e.id)};return r.useEffect((function(){return e.subscribe(n),function(){return e.unsubscribe(n)}}),[]),t[0]}},function(e,t,n){var r=n(5),o=n(11);e.exports=function(e){var t=Array.prototype.slice.call(arguments,[1]),n=r.useState({isLoading:!!e});return r.useEffect((function(){e&&(!n[0].isLoading&&n[1]({data:n[0].data,isLoading:!0}),e.apply(null,t).then((function(e){n[1]({data:e,isLoading:!1})})).catch((function(e){n[1]({error:e,isLoading:!1})})))}),o(t)),n[0]}},function(e,t){e.exports=function e(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r instanceof Array)for(var o=0;o<r.length;o++)t=t.concat(e(r[o]));else if("undefined"!=typeof URL&&r instanceof URL)t=t.concat(r.toJSON());else if(r instanceof Object)for(var c=Object.keys(r),a=0;a<c.length;a++){var i=c[a];t=t.concat([i]).concat(e(r[i]))}else t=t.concat(r)}return t}},function(e,t,n){for(var r=self.crypto||self.msCrypto,o="-_",c=36;c--;)o+=c.toString(36);for(c=36;c---10;)o+=c.toString(36).toUpperCase();e.exports=function(e){var t="",n=r.getRandomValues(new Uint8Array(e||21));for(c=e||21;c--;)t+=o[63&n[c]];return t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(6),c=n(1),a=n(2),i=n(3),u=n.n(i);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=[],v=[],j=function(e){var t=e.value,n=e.onChange,o=blocksy_admin.all_condition_rules.reduce((function(e,t){var n=t.rules,r=t.title;return[].concat(b(e),b(n.map((function(e){return p(p({},e),{},{group:r})}))))}),[]).reduce((function(e,t){var n=t.title,r=t.id,o=s(t,["title","id"]);return[].concat(b(e),[p({key:r,value:n},o)])}),[]),i=l(Object(r.useState)(O),2),f=i[0],d=i[1],y=l(Object(r.useState)(v),2),m=y[0],j=y[1],h=function(e){return"post_ids"===e.rule||"page_ids"===e.rule||"taxonomy_ids"===e.rule};return Object(r.useEffect)((function(){Promise.all(["posts","pages"].map((function(e){return fetch("".concat(blocksy_admin.rest_url,"wp/v2/").concat(e).concat(blocksy_admin.rest_url.indexOf("?")>-1?"&":"?","_embed&per_page=100")).then((function(e){return e.json()}))}))).then((function(e){var t=e.reduce((function(e,t){return[].concat(b(e),b(t))}),[]);d(t),O=t})),Promise.all(["categories","tags"].map((function(e){return fetch("".concat(blocksy_admin.rest_url,"wp/v2/").concat(e).concat(blocksy_admin.rest_url.indexOf("?")>-1?"&":"?","_embed&per_page=100")).then((function(e){return e.json()}))}))).then((function(e){var t=e.reduce((function(e,t){return[].concat(b(e),b(t))}),[]);j(t),v=t}))}),[]),Object(r.createElement)("div",{className:"ct-display-conditions"},t.map((function(e,i){return Object(r.createElement)("div",{className:u()("ct-condition-group",{"ct-cols-3":h(e),"ct-cols-2":!h(e)}),key:i},Object(r.createElement)(a.Select,{option:{inputClassName:"ct-condition-type",selectInputStart:function(){return Object(r.createElement)("span",{className:"ct-".concat(e.type)})},placeholder:Object(c.__)("Select variation","blc"),choices:{include:Object(c.__)("Include","blc"),exclude:Object(c.__)("Exclude","blc")}},value:e.type,onChange:function(r){n(t.map((function(t,n){return p({},n===i?p(p({},e),{},{type:r}):t)})))}}),Object(r.createElement)(a.Select,{option:{placeholder:Object(c.__)("Select rule","blc"),choices:o,search:!0},value:e.rule,onChange:function(r){n(t.map((function(t,n){return p({},n===i?p(p({},e),{},{rule:r}):t)})))}}),("post_ids"===e.rule||"page_ids"===e.rule)&&Object(r.createElement)(a.Select,{option:{defaultToFirstItem:!1,placeholder:"post_ids"===e.rule?Object(c.__)("Select post","blc"):Object(c.__)("Select page","blc"),choices:f.filter((function(t){var n=t.type;return"post_ids"===e.rule?"post"===n:"post"!==n})).map((function(e){return{key:e.id,value:e.title.rendered}})),search:!0},value:e.payload.post_id||"",onChange:function(r){n(t.map((function(t,n){return p({},n===i?p(p({},e),{},{payload:p(p({},e.payload),{},{post_id:r})}):t)})))}}),"taxonomy_ids"===e.rule&&Object(r.createElement)(a.Select,{option:{defaultToFirstItem:!1,placeholder:Object(c.__)("Select taxonomy","blc"),choices:m.map((function(e){return{key:e.id,value:e.name}})),search:!0},value:e.payload.taxonomy_id||"",onChange:function(r){n(t.map((function(t,n){return p({},n===i?p(p({},e),{},{payload:p(p({},e.payload),{},{taxonomy_id:r})}):t)})))}}),Object(r.createElement)("button",{type:"button",onClick:function(e){e.preventDefault();var r=b(t);r.splice(i,1),n(r)}},"×"))})),Object(r.createElement)("button",{type:"button",className:"button add-condition",onClick:function(e){e.preventDefault(),n([].concat(b(t),[{type:"include",rule:"everywhere",payload:{}}]))}},Object(c.__)("Add New Condition","blc")))};function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=function(e){var t=e.option.display,n=void 0===t?"inline":t,o=e.value,i=e.onChange,u=h(Object(r.useState)(!1),2),l=u[0],s=u[1],f=h(Object(r.useState)(null),2),p=f[0],d=f[1];return"inline"===n?Object(r.createElement)(j,{value:o,onChange:i}):Object(r.createElement)(r.Fragment,null,Object(r.createElement)("button",{className:"button",style:{width:"100%"},onClick:function(e){e.preventDefault(),s(!0),d(null)}},Object(c.__)("Add/Edit Conditions","blc")),Object(r.createElement)(a.Overlay,{items:l,className:"ct-admin-modal ct-conditions-modal",onDismiss:function(){s(!1),d(null)},render:function(){return Object(r.createElement)("div",{className:"ct-header-conditions"},Object(r.createElement)("h1",null,Object(c.__)("Transparent Header Display Conditions","blc")),Object(r.createElement)("p",null,Object(c.__)("Add one or more conditions to display the transparent header.","blc")),Object(r.createElement)(j,{value:p||o,onChange:function(e){d(e)}}),Object(r.createElement)("div",{className:"ct-conditions-actions"},Object(r.createElement)("button",{className:"button-primary",disabled:!p,onClick:function(){i(p),s(!1)}},Object(c.__)("Save Conditions","blc"))))}}))},E=n(4),w=n.n(E),S=n(7),x=n.n(S),P=n(8),A=n.n(P),C=n(9),k=n.n(C);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||F(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t,n,r,o,c,a){try{var i=e[c](a),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}(e,t)||F(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R=A()(),U=function(e){e.forcedEdit;var t,n,o=e.headerId,i=T(Object(r.useState)(!1),2),u=i[0],l=i[1],s=T(Object(r.useState)(null),2),f=s[0],p=s[1],d=Object(r.useContext)(a.PlacementsDragDropContext),b=(d.builderValueCollection,d.builderValueDispatch,Object(r.useRef)()),y=k()(R),m=x()("".concat(blocksy_admin.ajax_url,"?action=blocksy_header_get_all_conditions"),{method:"POST",formatter:(t=regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,r=n.success,o=n.data,r&&o.conditions){e.next=7;break}throw new Error;case 7:return e.abrupt("return",o.conditions);case 8:case"end":return e.stop()}}),e)})),n=function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(e){D(c,r,o,a,i,"next",e)}function i(e){D(c,r,o,a,i,"throw",e)}a(void 0)}))},function(e){return n.apply(this,arguments)}),depends:[y]}),O=m.data,v=m.isLoading;m.error;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"ct-instance-button-conditions",onClick:function(e){v||(e.stopPropagation(),l(!0))}},Object(r.createElement)("i",{className:"ct-tooltip-top"},sprintf(Object(c.__)("Display Conditions","blc")))),Object(r.createElement)(a.Overlay,{items:u,initialFocusRef:b,className:"ct-admin-modal ct-conditions-modal",onDismiss:function(){l(!1),p(null)},render:function(){var e;return Object(r.createElement)("div",{className:"ct-header-conditions",ref:b},Object(r.createElement)("h1",null,sprintf(Object(c.__)("Display Conditions","blc"))),Object(r.createElement)("p",null,Object(c.__)("Add one or more conditions in order to display your header.","blc")),Object(r.createElement)(a.OptionsPanel,{onChange:function(e,t){p((function(e){return[].concat(N((e||O).filter((function(e){return e.id!==o}))),[{id:o,conditions:t}])}))},options:{conditions:(e={type:"blocksy-display-condition",design:"none",value:[]},I(e,"design","none"),I(e,"label",!1),e)},value:{conditions:((f||O).find((function(e){return e.id===o}))||{conditions:[]}).conditions},hasRevertButton:!1}),Object(r.createElement)("div",{className:"ct-conditions-actions"},Object(r.createElement)("button",{className:"button-primary",disabled:!f,onClick:function(){wp.ajax.send({url:"".concat(wp.ajax.settings.url,"?action=blocksy_header_update_all_conditions"),contentType:"application/json",data:JSON.stringify(f)}).then((function(){R(),l(!1)}))}},Object(c.__)("Save Conditions","blc"))))}}))};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(){ct_customizer_localizations.header_builder_data.secondary_items.header,ct_customizer_localizations.header_builder_data.header;var e=Object(r.useContext)(a.PlacementsDragDropContext),t=e.builderValueDispatch,n=e.builderValue,o=(e.option,e.builderValueCollection),i=e.panelsActions,l=o.sections.filter((function(e){var t=e.id;return"type-2"!==t&&"type-3"!==t&&"ct-custom-transparent"!==t}));return Object(r.createElement)("ul",{className:u()("ct-panels-manager")},l.map((function(e){var o=e.name,l=e.id,s=o||{"type-1":Object(c.__)("Global Header","blocksy")}[l]||l,f="builder_header_panel_".concat(l),p=ct_customizer_localizations.header_builder_data.header_data.header_options,d={label:s,"inner-options":p};return Object(r.createElement)(a.PanelMetaWrapper,M({id:f,key:l,option:d},i,{getActualOption:function(e){var o=e.open;return Object(r.createElement)(r.Fragment,null,l===n.id&&Object(r.createElement)(a.Panel,{id:f,getValues:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:l},n.settings||{})},option:d,onChangeFor:function(e,r){t({type:"BUILDER_GLOBAL_SETTING_ON_CHANGE",payload:{optionId:e,optionValue:r,values:Object(a.getValueFromInput)(p,Array.isArray(n.settings)?{}:n.settings||{})}})},view:"simple"}),Object(r.createElement)("li",{className:u()({active:l===n.id,"ct-global":"type-1"===l}),onClick:function(){l===n.id?o():t({type:"PICK_BUILDER_SECTION",payload:{id:l}})}},Object(r.createElement)("span",{className:"ct-panel-name"},s),l.indexOf("ct-custom")>-1&&Object(r.createElement)(U,{headerId:l})))}}))})))};w.a.on("blocksy:options:before-option",(function(e){if(e.option&&"ct-header-builder"===e.option.type){var t=e.content;e.content=Object(r.createElement)(r.Fragment,null,t,Object(r.createElement)(o.Fill,{name:"PlacementsBuilderPanelsManager"},Object(r.createElement)(B,null)))}})),w.a.on("blocksy:options:register",(function(e){e["blocksy-display-condition"]=_}))}]);