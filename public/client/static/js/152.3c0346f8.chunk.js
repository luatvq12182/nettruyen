"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[152],{2670:function(e,t,n){var s=n(182),i=n(6417);t.Z=function(e){var t=e.title,n=e.description;return(0,i.jsxs)(s.q,{children:[(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("title",{children:t}),(0,i.jsx)("meta",{name:"keywords",content:"doc truyen, doc truyen online, truyen hay, truyen chu"}),(0,i.jsx)("meta",{name:"description",content:n})]})}},3539:function(e,t,n){var s=n(7313),i=n(8303),r=n(6572),l=n(6417);t.Z=function(e){var t=e.ids;return(0,l.jsx)(r.a,{render:function(e){return t.map((function(t){return(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)(i.rU,{itemProp:"genre",to:"/the-loai/"+e[t].slug,title:e[t].name,children:e[t].name}),","," "]},t)}))},convertToObj:!0})}},1998:function(e,t,n){var s=n(8303),i=n(3539),r=n(6417);t.Z=function(e){var t=e.title,n=e.slug,l=e.value,c=void 0===l?[]:l;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"title-list",children:(0,r.jsx)("h2",{children:(0,r.jsx)(s.rU,{to:n||"#",title:t,children:t})})}),c.map((function(e){var t=e._id,n=e.name,l=e.slug,c=e.categories,a=e.views;return(0,r.jsxs)("div",{className:"row",itemScope:"",itemType:"https://schema.org/Book",children:[(0,r.jsxs)("div",{className:"col-xs-9 col-sm-6 col-md-5 col-title",children:[(0,r.jsx)("span",{className:"glyphicon glyphicon-chevron-right"})," ",(0,r.jsx)("h3",{itemProp:"name",children:(0,r.jsx)(s.rU,{to:"/truyen/"+l,title:n,itemProp:"url",children:n})})]}),(0,r.jsx)("div",{className:"hidden-xs col-sm-3 col-md-3 col-cat text-888",children:(0,r.jsx)(i.Z,{ids:c})}),(0,r.jsx)("div",{className:"hidden-xs hidden-sm col-md-2 col-chap text-info"}),(0,r.jsxs)("div",{className:"col-xs-3 col-sm-3 col-md-2 col-time text-888",children:[a," l\u01b0\u1ee3t xem"]})]},t)}))]})}},8426:function(e,t,n){var s=n(4461),i=n(1998),r=n(3444),l=n(6417);t.Z=function(){var e=(0,s.AJ)({page:1,limit:10,categories:null,tags:null,sort:{views:-1}}),t=e.isLoading,n=e.error,c=e.data;return(0,l.jsxs)("div",{className:"list list-truyen list-new col-xs-12 col-sm-12 col-md-8",children:[t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"title-list",children:(0,l.jsx)("h2",{children:"Truy\u1ec7n hot"})}),(0,l.jsx)(r.Z,{count:10,height:38})]}),n&&"C\xf3 l\u1ed7i x\u1ea3y ra: "+n.message,(null===c||void 0===c?void 0:c.data)&&(0,l.jsx)(i.Z,{value:null===c||void 0===c?void 0:c.data,title:"Truy\u1ec7n hot",slug:"/phan-loai/truyen-hot"})]})}},6126:function(e,t,n){var s=n(8683),i=n(6572),r=n(8303),l=n(6417),c=function(e){var t=e.name,n=e.slug;return(0,l.jsx)("div",{className:"col-xs-6",children:(0,l.jsx)(r.rU,{to:"/the-loai/"+n,title:t,children:t})})};t.Z=function(){return(0,l.jsxs)("div",{className:"list list-truyen list-cat",children:[(0,l.jsx)("div",{className:"title-list",children:(0,l.jsx)("h4",{children:"Th\u1ec3 lo\u1ea1i truy\u1ec7n"})}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(i.a,{render:function(e){return e.map((function(e){return(0,l.jsx)(c,(0,s.Z)({},e),e._id)}))}})})]})}},3152:function(e,t,n){n.r(t);var s=n(1060),i=n(2670),r=n(6126),l=n(8426),c=n(7313),a=n(6417);t.default=function(){var e=(0,c.useContext)(s.h);return(0,c.useEffect)((function(){e.setBreadCrumb([{title:"Truy\u1ec7n Hot",to:"/phan-loai/truyen-hot"}])}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{title:"T\u1ed5ng h\u1ee3p truy\u1ec7n ch\u1eef c\u1ef1c hay v\xe0 hot",description:"Danh s\xe1ch nh\u1eefng truy\u1ec7n \u0111ang hot, c\xf3 nhi\u1ec1u ng\u01b0\u1eddi \u0111\u1ecdc v\xe0 quan t\xe2m nh\u1ea5t trong th\xe1ng n\xe0y."}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)("div",{className:"col-md-4 col-truyen-side",children:(0,a.jsx)(r.Z,{})})]})]})}}}]);