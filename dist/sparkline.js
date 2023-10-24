var sparkline=function(t){var e={};function n(r){var o;return(e[r]||(o=e[r]={i:r,l:!1,exports:{}},t[r].call(o.exports,o,o.exports,n),o.l=!0,o)).exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){var r=n(2),o=n(3),i=n(4);t.exports=function(t){return r(t)||o(t)||i()}},function(t,e,n){"use strict";n.r(e),n.d(e,"sparkline",function(){return c});var r=n(0),o=n.n(r);function i(t,e,n,r){return 0===t?+e:parseFloat((e-r*e/t+n).toFixed(2))}function a(t){return t.value}function u(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg",t);for(n in e)r.setAttribute(n,e[n]);return r}function c(t,e,n){var r,c,l,s,f,p,d,b,h,v,y,x,m,g,A,w,j,k,O,S;r=t,o()(r.querySelectorAll("*")).forEach(function(t){return r.removeChild(t)}),e.length<=1||(n=n||{},"number"==typeof e[0]&&(e=e.map(function(t){return{value:t}})),c=n.onmousemove,l=n.onmouseout,s="interactive"in n?n.interactive:!!c,f=n.spotRadius||2,p=2*f,d=n.cursorWidth||2,b=parseFloat(t.attributes["stroke-width"].value),h=n.fetch||a,n=e.map(function(t){return h(t)}),k=parseFloat(t.attributes.width.value)-2*p,v=parseFloat(t.attributes.height.value),y=v-2*b-p,x=Math.max.apply(Math,o()(n)),m=-1e3,g=n.length-1,A=k/g,w=[],k=i(x,y,b+f,n[0]),j="M".concat(p," ").concat(k),n.forEach(function(t,n){var r=n*A+p;t=i(x,y,b+f,t);w.push(Object.assign({},e[n],{index:n,x:r,y:t})),j+=" L ".concat(r," ").concat(t)}),k=u("path",{class:"sparkline--line",d:j,fill:"none"}),n=u("path",{class:"sparkline--fill",d:"".concat(j," V ").concat(v," L ").concat(p," ").concat(v," Z"),stroke:"none"}),t.appendChild(n),t.appendChild(k),s&&(O=u("line",{class:"sparkline--cursor",x1:m,x2:m,y1:0,y2:v,"stroke-width":d}),S=u("circle",{class:"sparkline--spot",cx:m,cy:m,r:f}),t.appendChild(O),t.appendChild(S),n=u("rect",{width:t.attributes.width.value,height:t.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"}),t.appendChild(n),n.addEventListener("mouseout",function(t){O.setAttribute("x1",m),O.setAttribute("x2",m),S.setAttribute("cx",m),l&&l(t)}),n.addEventListener("mousemove",function(t){var e=t.offsetX,n=(n=w.find(function(t){return t.x>=e}))||w[g],r=(n=!(r=w[w.indexOf(n)-1])||r.x+(n.x-r.x)/2<=e?n:r).x,o=n.y;S.setAttribute("cx",r),S.setAttribute("cy",o),O.setAttribute("x1",r),O.setAttribute("x2",r),c&&c(t,n)})))}e.default=c},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]);
//# sourceMappingURL=sparkline.js.map