(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{34:function(e,r,t){"use strict";t.r(r),t.d(r,"validateFileInputs",(function(){return f}));var n=Object.freeze({image:25,video:50}),a=["image"];function i(e,r){var t=e,n=document.createElement("div");n.style.color="red",n.innerHTML=r,n.classList.add("file-upload-error"),t.parentNode.append(n)}function o(e,r,t){var a=t.dataset.maxFileSizeMb,o=t.dataset.fileSizeErrorHandler,l=(e.size/1048576).toFixed(2),c=l<=(a=Number(a||n[r]));return c||function(e,r,t,n){if(r.value=null,e)e();else{var a="File size too large (".concat(t," MB).");n>=0&&(a+=" The limit is ".concat(n," MB.")),i(r,a)}}(o,t,l,a),c}function l(e,r,t){var n=t.dataset.permittedFileTypes;n&&(n=JSON.parse(n)),n=n||a;var o=t.dataset.fileTypeErrorHandler,l=n.includes(r);return l||function(e,r,t,n){r.value=null,e?e():i(r,"Invalid file format (".concat(t,"). Only ").concat(n.join(", ")," files are permitted."))}(o,t,r,n),l}function c(e,r){var t=r.dataset.maxFileNameLength;t=Number(t||250);var n=r.dataset.fileNameLengthErrorHandler,a=e.name.length<=t;return a||function(e,r,t){r.value=null,e?e():i(r,"File name is too long. It can't be longer than ".concat(t," characters."))}(n,r,t),a}function u(e){var r=!0;!function(e){var r=e.parentNode.querySelector("div.file-upload-error");r&&r.remove()}(e);for(var t=Array.from(e.files),n=0;n<t.length;n+=1){var a=t[n],i=a.type.split("/")[0];if(!o(a,i,e)){r=!1;break}if(!l(0,i,e)){r=!1;break}if(!c(a,e)){r=!1;break}}return r}function f(){for(var e=!0,r=document.querySelectorAll('input[type="file"]'),t=0;t<r.length;t+=1){if(!u(r[t])){e=!1;break}}return e}document.querySelectorAll('input[type="file"]').forEach((function(e){e.addEventListener("change",(function(){u(e)}))}))}},[[34,51]]]);
//# sourceMappingURL=validateFileInputs-aa7d14d9404691794847.chunk.js.map