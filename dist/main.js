"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[179],{192:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,'*{margin:0;padding:0;box-sizing:border-box;user-select:none}.material-symbols-outlined{font-variation-settings:"FILL" .5,"wght" 400;cursor:pointer;width:30px;height:30px;display:flex;justify-content:flex-end;align-items:center}.material-symbols-outlined.md-18{font-size:18px}.material-symbols-outlined.md-20{font-size:20px}.material-symbols-outlined.md-24{font-size:24px}.material-symbols-outlined.md-36{font-size:36px}.material-symbols-outlined.md-48{font-size:48px}body{height:100vh;display:flex;justify-content:center;align-items:center;font-family:sans-serif}#container{width:80%;max-width:500px;height:max-content;max-height:80vh;overflow-y:auto;border:1px solid #c5c4c4;box-shadow:0 10px 10px 3px #f0f0f0;display:flex;flex-direction:column}#container button{padding:20px;border:none;color:gray;cursor:pointer;font-size:15px}#container ul{list-style:none}#container ul li{padding:0 20px;border-bottom:2px solid #f0f0f0;display:flex;align-items:center;gap:10px;font-size:15px}#container ul li input[type=checkbox]{height:16px;width:16px}#container ul li .task-description{flex:1 1 auto;padding:20px 0}#container ul li .edit-task-input{flex:1 1 auto;padding:20px 0;border:none;outline:none;font-size:15px}#header{padding:20px;display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #f0f0f0;font-size:18px}#add-to-do{padding:10px 20px;display:flex;align-items:center;gap:5px;border-bottom:2px solid #f0f0f0}#add-to-do input{border:none;outline:none;padding:10px 0;flex:1 1 auto;font-style:italic}',""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},918:(e,t,n)=>{var o=n(379),r=n.n(o),i=n(795),a=n.n(i),s=n(569),c=n.n(s),d=n(565),l=n.n(d),p=n(216),u=n.n(p),f=n(589),m=n.n(f),x=n(192),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),r()(x.Z,h),x.Z&&x.Z.locals&&x.Z.locals;let y=JSON.parse(localStorage.getItem("tasks"))||[];const v=()=>{localStorage.setItem("tasks",JSON.stringify(y))},g=e=>{0!==e.value.trim().length&&(y.push({description:e.value.trim(),completed:!1,index:y.length}),e.value="",v())},b=()=>{document.querySelectorAll("#todo-list > li").forEach(((e,t)=>{e.style.backgroundColor="";const n=document.createElement("span");n.innerText=y[t].description,n.classList.add("task-description");const o=e.children[0],r=e.children[2];r.innerText="more_vert",e.innerHTML="",e.append(o,n,r)}))},k=()=>{const e=document.querySelector("#todo-list");e.innerHTML="",y.forEach((t=>{const n=document.createElement("li"),o=document.createElement("input");o.type="checkbox";const r=document.createElement("span");r.innerText=t.description,r.classList.add("task-description");const i=document.createElement("span");i.classList.add("material-symbols-outlined","md-20"),i.innerText="more_vert",i.addEventListener("click",(()=>{if("delete"===i.innerText)return e=t.index,y=y.filter((t=>t.index!==e)),y.forEach(((e,t)=>{e.index=t})),v(),void k();var e;b(),i.innerText="delete",n.style.backgroundColor="#feffdc";const a=document.createElement("input");a.value=t.description,a.style.backgroundColor="#feffdc",a.classList.add("edit-task-input"),a.addEventListener("keyup",(e=>{"Enter"===e.key&&a.value.trim().length>0&&((e=>{y[e.index].description=e.description,v()})({...t,description:a.value.trim()}),r.innerText=t.description,n.innerHTML="",n.style.backgroundColor="",n.append(o,r,i),b())})),n.innerHTML="",n.append(o,a,i),a.focus()})),n.append(o,r,i),e.appendChild(n)}))},E=document.querySelector("#add-to-do > input"),T=document.querySelector("#add-task-button");E.addEventListener("keyup",(e=>{"Enter"===e.key&&(g(E),k())})),T.addEventListener("click",(()=>{g(E),k()})),k()}},e=>{e(e.s=918)}]);