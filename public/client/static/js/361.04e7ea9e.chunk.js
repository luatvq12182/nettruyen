"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[361],{1998:function(i,l,e){var t=e(7313),n=e(490),a=e(8303),s=e(6417),r=function(i){var l;if(null!==i&&void 0!==i&&null!==(l=i.data)&&void 0!==l&&l.data){var e,t,n=null===i||void 0===i||null===(e=i.data)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data,a={};return n.forEach((function(i){return a[i._id]=i})),a}};l.Z=function(i){var l=i.title,e=i.value,c=void 0===e?[]:e,d=(0,n.L_)(r),o=d.isLoading,u=d.error,m=d.data;return o?"":u?"C\xf3 l\u1ed7i x\u1ea3y ra":(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"title-list",children:(0,s.jsx)("h2",{children:(0,s.jsx)(a.rU,{to:"#",title:l,children:l})})}),c.map((function(i){var l=i._id,e=i.name,n=i.slug,r=i.categories,c=i.views;return(0,s.jsxs)("div",{className:"row",itemScope:"",itemType:"https://schema.org/Book",children:[(0,s.jsxs)("div",{className:"col-xs-9 col-sm-6 col-md-5 col-title",children:[(0,s.jsx)("span",{className:"glyphicon glyphicon-chevron-right"})," ",(0,s.jsx)("h3",{itemProp:"name",children:(0,s.jsx)(a.rU,{to:"/truyen/"+n,title:e,itemProp:"url",children:e})})]}),(0,s.jsx)("div",{className:"hidden-xs col-sm-3 col-md-3 col-cat text-888",children:r.map((function(i){return(0,s.jsxs)(t.Fragment,{children:[(0,s.jsx)(a.rU,{itemProp:"genre",to:"/the-loai/"+m[i].slug,title:m[i].name,children:m[i].name}),","," "]},i)}))}),(0,s.jsx)("div",{className:"col-xs-3 col-sm-3 col-md-2 col-chap text-info"}),(0,s.jsxs)("div",{className:"col-md-2 col-time text-888",children:[c," l\u01b0\u1ee3t xem"]})]},l)}))]})}},6126:function(i,l,e){var t=e(490),n=e(8303),a=e(6417);l.Z=function(){var i=(0,t.L_)().data;return(0,a.jsxs)("div",{className:"list list-truyen list-cat col-xs-12",children:[" ",(0,a.jsx)("div",{className:"title-list",children:(0,a.jsx)("h4",{children:"Th\u1ec3 lo\u1ea1i truy\u1ec7n"})})," ",(0,a.jsx)("div",{className:"row",children:(null===i||void 0===i?void 0:i.data)&&i.data.map((function(i){var l=i._id,e=i.name,t=i.slug;return(0,a.jsx)("div",{className:"col-xs-6",children:(0,a.jsx)(n.rU,{to:"/the-loai/"+t,title:e,children:e})},l)}))})," "]})}},361:function(i,l,e){e.r(l);var t=e(182),n=e(6126),a=e(1998),s=e(490),r=e(3830),c=e(6417),d=function(i){var l;if(null!==i&&void 0!==i&&null!==(l=i.data)&&void 0!==l&&l.data){var e,t,n=null===i||void 0===i||null===(e=i.data)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data,a={};return n.forEach((function(i){return a[i.slug]=i})),a}};l.default=function(){var i,l=(0,s.L_)(d),e=l.isLoading,o=l.data,u=(0,r.UO)().slug,m=(0,s.AJ)({page:1,limit:10,categories:[null===o||void 0===o||null===(i=o[u])||void 0===i?void 0:i._id]}),h=m.isLoading,v=m.error,x=m.data;return e?"":(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("meta",{charSet:"utf-8"}),(0,c.jsxs)("title",{children:["T\u1ed5ng h\u1ee3p truy\u1ec7n: ",o[u].name]}),(0,c.jsx)("meta",{name:"keywords",content:"doc truyen, doc truyen online, truyen hay, truyen chu"}),(0,c.jsx)("meta",{name:"description",content:"Danh s\xe1ch truy\u1ec7n thu\u1ed9c th\u1ec3 lo\u1ea1i '".concat(o[u].name,"'")})]}),(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"list list-truyen list-new col-xs-12 col-sm-12 col-md-8 col-truyen-main",children:[h&&"\u0110ang l\u1ea5y d\u1eef li\u1ec7u...",v&&"C\xf3 l\u1ed7i x\u1ea3y ra: "+v.message,(null===x||void 0===x?void 0:x.data)&&(0,c.jsx)(a.Z,{value:null===x||void 0===x?void 0:x.data,title:"Truy\u1ec7n "+o[u].name})]}),(0,c.jsx)("div",{className:"col-md-4 col-truyen-side",children:(0,c.jsx)(n.Z,{})})]})]})}}}]);