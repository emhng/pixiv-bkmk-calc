(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5075)}])},3941:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var s=t(5893),a=t(7294),r=t(1269),i=t(1644),l=t(6452),c=t(1163),o=t(6853),u=function(e){var n=e.message;return(0,s.jsxs)("div",{className:"error",children:[(0,s.jsx)(o.Z,{className:"icon"}),(0,s.jsx)("p",{children:n})]})},d=function(e){var n=e.id,t=e.icon,a=e.label,r=e.onChangeHandler,i=e.onInputHandler,l=e.min,c=e.errorState,o=e.value;return(0,s.jsxs)("div",{className:"vflex input-cont",children:[(0,s.jsxs)("label",{htmlFor:n,children:[t,a]}),(0,s.jsx)("input",{onChange:r,onInput:i,type:"number",inputMode:"numeric",min:l,id:n,value:o}),(0,s.jsx)("div",{children:c})]})},h=function(e){var n,t=e.id,o=(0,a.useState)(""),h=o[0],x=o[1],m=(0,a.useState)(""),j=m[0],p=m[1],v=(0,a.useState)(""),f=v[0],g=v[1],k=(0,c.useRouter)(),N=k.query,b=k.pathname,w=!!N.likes,C="/en"===b,_=function(e){return Math.round(10*e)/10},S=_(+j/+h*100),H=_((+j+ +f)/+h*100),Z=(0,a.useState)(""),E=Z[0],y=Z[1],I=(0,a.useState)(""),P=I[0],R=I[1],q=(0,a.useState)(""),M=q[0],O=q[1],T=function(e){return function(n){var t=n.target.value,a=n.target.id,r=/^0+(?:0)?$/.test(t),i=/-/.test(t),l=/\./.test(t);e("viewCount"===a&&r?(0,s.jsx)(u,{message:C?"Please enter a number greater than 0":"\u95b2\u89a7\u6570\u306f1\u4ee5\u4e0a\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}):i||l?(0,s.jsx)(u,{message:C?"Please enter a non-negative whole number":"\u81ea\u7136\u6570\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}):""===t?(0,s.jsx)(u,{message:C?"Please enter only digits [0-9]":"\u30ab\u30f3\u30de\u306a\u3057\u3067\u6570\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}):"")}},X=function(e){return function(n){var t=n.target.value,s=n.target.id,a=/^0+(?:0)?$/.test(t),r=/-/.test(t),i=/\./.test(t);e("viewCount"===s&&a||r||i||""===t?"":t)}},$=[];!0===w?(n=!0===w&&""===h||!0===w&&""===j||!0===w&&""===f?"--":H,$.push((0,s.jsx)(d,{id:"likeCount",icon:(0,s.jsx)(l.Z,{className:"icon"}),label:C?"Likes":"\u3044\u3044\u306d",onChangeHandler:X(g),onInputHandler:T(O),min:0,errorState:M,value:f},1))):n=""===h||""===j?"--":S;var A=C?"Artwork "+t:"\u4f5c\u54c1 "+t;return(0,s.jsxs)("div",{className:"calc-cont vflex",children:[(0,s.jsx)("input",{className:"work-title",type:"text",placeholder:A}),(0,s.jsxs)("div",{className:"result",children:[(0,s.jsx)("h1",{children:C?"Engagment Rate":"\u30d6\u30af\u30de\u7387"}),(0,s.jsxs)("h1",{className:"percent",children:[n,(0,s.jsx)("span",{className:"counter",children:"%"})]})]}),(0,s.jsxs)("form",{children:[(0,s.jsx)(d,{id:"viewCount",icon:(0,s.jsx)(r.Z,{className:"icon"}),label:C?"View Count":"\u95b2\u89a7\u6570",onChangeHandler:X(x),onInputHandler:T(y),min:1,errorState:E}),(0,s.jsx)(d,{id:"bookmarkCount",icon:(0,s.jsx)(i.Z,{className:"icon"}),label:C?"Bookmarks":"\u30d6\u30c3\u30af\u30de\u30fc\u30af",onChangeHandler:X(p),onInputHandler:T(R),min:0,errorState:P}),$]})]})}},5075:function(e,n,t){"use strict";t.r(n);var s=t(797),a=t(5893),r=t(9008),i=t.n(r),l=t(1664),c=t.n(l),o=t(1163),u=t(3941),d=t(7294);n.default=function(){var e=!!(0,o.useRouter)().query.likes,n=(0,d.useState)([(0,a.jsx)(u.Z,{id:1},1)]),t=n[0],r=n[1];return(0,a.jsxs)("div",{id:"page-cont",children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"pixiv\u30d6\u30af\u30de\u7387\u8a08\u7b97\u30c4\u30fc\u30eb"}),(0,a.jsx)("meta",{name:"description",content:"pixiv\u30d6\u30af\u30de\u7387\u8a08\u7b97\u30c4\u30fc\u30eb"}),(0,a.jsx)("meta",{property:"og:image",content:"https://emhng.github.io/pixiv-bkmk-calc/preview.png"}),(0,a.jsx)("link",{rel:"icon",href:"https://emhng.github.io/pixiv-bkmk-calc/favicon.ico"})]}),(0,a.jsxs)("nav",{className:"hflex space-btwn small-gap med-space wrap",children:[(0,a.jsx)("h1",{className:"en",id:"title",children:"pixiv bkmk calc"}),(0,a.jsxs)("div",{className:"hflex small-gap",children:[(0,a.jsx)(c(),{href:e?"/":"?likes=true",children:(0,a.jsx)("a",{className:"link-button",children:e?"\u3044\u3044\u306d\u3092\u9664\u304f":"\u3044\u3044\u306d\u3092\u542b\u3080"})}),(0,a.jsx)("button",{onClick:function(){return r([(0,a.jsx)(u.Z,{id:t.length+1},t.length+1)].concat((0,s.Z)(t)))},children:"\u4f5c\u54c1\u3092\u8ffd\u52a0"})]})]}),(0,a.jsx)("section",{className:"hflex wrap small-gap",children:t}),(0,a.jsx)("footer",{className:"hflex",children:(0,a.jsx)(c(),{href:"/en",children:(0,a.jsx)("a",{className:"en",children:"English"})})})]})}}},function(e){e.O(0,[845,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);