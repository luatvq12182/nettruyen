"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[361],{2670:function(e,i,n){var t=n(182),l=n(6417);i.Z=function(e){var i=e.title,n=e.description;return(0,l.jsxs)(t.q,{children:[(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("title",{children:i}),(0,l.jsx)("meta",{name:"keywords",content:"doc truyen, doc truyen online, truyen hay, truyen chu"}),(0,l.jsx)("meta",{name:"description",content:n})]})}},2578:function(e,i,n){var t=n(885),l=n(7313),s=n(6417);i.Z=function(e){var i=e.current,n=void 0===i?1:i,r=e.pageSize,a=void 0===r?10:r,o=e.pageSizeOptions,c=void 0===o?[5,10,20,50,100]:o,d=e.showQuickJumper,u=void 0!==d&&d,v=e.showSizeChanger,m=void 0===v||v,h=e.total,x=void 0===h?0:h,j=e.onChange,p=(0,l.useState)(n),f=(0,t.Z)(p,2),g=f[0],N=f[1],y=(0,l.useState)(a),Z=(0,t.Z)(y,2),S=Z[0],w=Z[1],C=(0,l.useState)(),k=(0,t.Z)(C,2),_=k[0],b=k[1],z=function(e){var i=Number(e.target.value),n=Math.ceil(x/i);g>n?(N(1),w(i),j(1,i)):(w(i),j(g,i))},T=(0,l.useMemo)((function(){var e=Math.ceil(x/S),i=[];if(e<=1)i=[1];else if(e<=5)for(var n=1;n<=e;n++)i.push(n);else i=g<=3?[1,2,3,4,"...",e]:g>3&&g<e-2?[1,"...",g-1,g,g+1,"...",e]:[1,"...",e-3,e-2,e-1,e];return i.map((function(e){return(0,s.jsx)("li",{onClick:"..."!==e?function(){return N(i=e),void j(i,S);var i}:function(){},className:"pagination__item ".concat(e===g?"active":""),children:e})}))}),[x,S,g]);return(0,s.jsxs)("ul",{style:{paddingLeft:"0"},className:"pagination",children:[T,m&&(0,s.jsx)("li",{className:"pagination__options",children:(0,s.jsx)("select",{onChange:z,value:S,children:c.map((function(e){return(0,s.jsx)("option",{value:e,children:e},e)}))})}),u&&(0,s.jsxs)("li",{className:"pagination__jumber",children:["Go to"," ",(0,s.jsx)("input",{type:"number",value:_||"",onChange:function(e){b(e.target.value)},onBlur:function(){if(!isNaN(_))if(_<1)N(1);else{var e=Math.ceil(x/S);if(_>e)return N(e),void j(e,S);N(Number(_)),j(Number(_),S)}}})]})]})}},3539:function(e,i,n){var t=n(7313),l=n(8303),s=n(6572),r=n(6417);i.Z=function(e){var i=e.ids;return(0,r.jsx)(s.a,{render:function(e){return i.map((function(i){return(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)(l.rU,{itemProp:"genre",to:"/the-loai/"+e[i].slug,title:e[i].name,children:e[i].name}),","," "]},i)}))},convertToObj:!0})}},1998:function(e,i,n){var t=n(8303),l=n(3539),s=n(6417);i.Z=function(e){var i=e.title,n=e.slug,r=e.value,a=void 0===r?[]:r;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"title-list",children:(0,s.jsx)("h2",{children:(0,s.jsx)(t.rU,{to:n||"#",title:i,children:i})})}),a.map((function(e){var i=e._id,n=e.name,r=e.slug,a=e.categories,o=e.views;return(0,s.jsxs)("div",{className:"row",itemScope:"",itemType:"https://schema.org/Book",children:[(0,s.jsxs)("div",{className:"col-xs-9 col-sm-6 col-md-5 col-title",children:[(0,s.jsx)("span",{className:"glyphicon glyphicon-chevron-right"})," ",(0,s.jsx)("h3",{itemProp:"name",children:(0,s.jsx)(t.rU,{to:"/truyen/"+r,title:n,itemProp:"url",children:n})})]}),(0,s.jsx)("div",{className:"hidden-xs col-sm-3 col-md-3 col-cat text-888",children:(0,s.jsx)(l.Z,{ids:a})}),(0,s.jsx)("div",{className:"hidden-xs hidden-sm col-md-2 col-chap text-info"}),(0,s.jsxs)("div",{className:"col-xs-3 col-sm-3 col-md-2 col-time text-888",children:[o," l\u01b0\u1ee3t xem"]})]},i)}))]})}},6126:function(e,i,n){var t=n(8683),l=n(6572),s=n(8303),r=n(6417),a=function(e){var i=e.name,n=e.slug;return(0,r.jsx)("div",{className:"col-xs-6",children:(0,r.jsx)(s.rU,{to:"/the-loai/"+n,title:i,children:i})})};i.Z=function(){return(0,r.jsxs)("div",{className:"list list-truyen list-cat",children:[(0,r.jsx)("div",{className:"title-list",children:(0,r.jsx)("h4",{children:"Th\u1ec3 lo\u1ea1i truy\u1ec7n"})}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)(l.a,{render:function(e){return e.map((function(e){return(0,r.jsx)(a,(0,t.Z)({},e),e._id)}))}})})]})}},361:function(e,i,n){n.r(i);var t=n(8683),l=n(885),s=n(7313),r=n(4461),a=n(3830),o=n(1060),c=n(6126),d=n(1998),u=n(2670),v=n(3444),m=n(2578),h=n(6417),x=function(e){var i;if(null!==e&&void 0!==e&&null!==(i=e.data)&&void 0!==i&&i.data){var n,t,l=null===e||void 0===e||null===(n=e.data)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data,s={};return l.forEach((function(e){return s[e.slug]=e})),s}};i.default=function(){var e,i,n,j,p,f,g=(0,s.useContext)(o.h),N=(0,s.useState)({current:1,pageSize:10}),y=(0,l.Z)(N,2),Z=y[0],S=y[1],w=(0,r.L_)(x),C=w.isLoading,k=w.data,_=(0,a.UO)().slug,b=(0,r.AJ)({page:Z.current,limit:Z.pageSize,categories:[null===k||void 0===k||null===(e=k[_])||void 0===e?void 0:e._id]}),z=b.isLoading,T=b.error,U=b.data;(0,s.useEffect)((function(){var e;g.setBreadCrumb([{title:null===k||void 0===k||null===(e=k[_])||void 0===e?void 0:e.name,to:_}])}),[k,_]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.Z,{title:null===k||void 0===k||null===(i=k[_])||void 0===i?void 0:i.title,description:null===k||void 0===k||null===(n=k[_])||void 0===n?void 0:n.description}),(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{style:{padding:"0 15px",marginBottom:"15px"},className:"list list-truyen list-new col-xs-12 col-sm-12 col-md-8 col-truyen-main",children:[(z||C)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"title-list",children:(0,h.jsx)("h2",{children:"\u0110ang t\xecm ki\u1ebfm d\u1eef li\u1ec7u"})}),(0,h.jsx)(v.Z,{count:10,height:38})]}),T&&"C\xf3 l\u1ed7i x\u1ea3y ra: "+T.message,(null===U||void 0===U?void 0:U.data)&&(0,h.jsx)(d.Z,{value:null===U||void 0===U?void 0:U.data,title:null!==k&&void 0!==k&&null!==(j=k[_])&&void 0!==j&&j.name?"Truy\u1ec7n "+(null===k||void 0===k||null===(p=k[_])||void 0===p?void 0:p.name):"Trang kh\xf4ng t\u1ed3n t\u1ea1i"}),(0,h.jsx)(m.Z,(0,t.Z)({showSizeChanger:!1,showQuickJumper:!0,onChange:function(e,i){S({current:e,pageSize:i})},total:(null===U||void 0===U?void 0:U.total)||0},Z)),(0,h.jsx)("div",{style:{marginTop:"15px"},children:(0,h.jsx)("p",{children:null===k||void 0===k||null===(f=k[_])||void 0===f?void 0:f.intro})})]}),(0,h.jsx)("div",{className:"col-md-4 col-truyen-side",children:(0,h.jsx)(c.Z,{})})]})]})}}}]);