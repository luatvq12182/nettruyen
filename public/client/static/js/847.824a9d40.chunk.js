"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[847],{2670:function(e,i,n){var t=n(182),l=n(6417);i.Z=function(e){var i=e.title,n=e.description;return(0,l.jsxs)(t.q,{children:[(0,l.jsx)("meta",{charSet:"utf-8"}),(0,l.jsx)("title",{children:i}),(0,l.jsx)("meta",{name:"keywords",content:"doc truyen, doc truyen online, truyen hay, truyen chu"}),(0,l.jsx)("meta",{name:"description",content:n})]})}},2578:function(e,i,n){var t=n(885),l=n(7313),a=n(6417);i.Z=function(e){var i=e.current,n=void 0===i?1:i,s=e.pageSize,r=void 0===s?10:s,o=e.pageSizeOptions,c=void 0===o?[5,10,20,50,100]:o,d=e.showQuickJumper,u=void 0!==d&&d,v=e.showSizeChanger,m=void 0===v||v,h=e.total,x=void 0===h?0:h,j=e.onChange,g=(0,l.useState)(n),p=(0,t.Z)(g,2),f=p[0],N=p[1],y=(0,l.useState)(r),Z=(0,t.Z)(y,2),S=Z[0],w=Z[1],C=(0,l.useState)(),k=(0,t.Z)(C,2),_=k[0],b=k[1],z=function(e){var i=Number(e.target.value),n=Math.ceil(x/i);f>n?(N(1),w(i),j(1,i)):(w(i),j(f,i))},T=(0,l.useMemo)((function(){var e=Math.ceil(x/S),i=[];if(e<=1)i=[1];else if(e<=5)for(var n=1;n<=e;n++)i.push(n);else i=f<=3?[1,2,3,4,"...",e]:f>3&&f<e-2?[1,"...",f-1,f,f+1,"...",e]:[1,"...",e-3,e-2,e-1,e];return i.map((function(e){return(0,a.jsx)("li",{onClick:"..."!==e?function(){return N(i=e),void j(i,S);var i}:function(){},className:"pagination__item ".concat(e===f?"active":""),children:e})}))}),[x,S,f]);return(0,a.jsxs)("ul",{style:{paddingLeft:"0"},className:"pagination",children:[T,m&&(0,a.jsx)("li",{className:"pagination__options",children:(0,a.jsx)("select",{onChange:z,value:S,children:c.map((function(e){return(0,a.jsx)("option",{value:e,children:e},e)}))})}),u&&(0,a.jsxs)("li",{className:"pagination__jumber",children:["Go to"," ",(0,a.jsx)("input",{type:"number",value:_||"",onChange:function(e){b(e.target.value)},onBlur:function(){if(!isNaN(_))if(_<1)N(1);else{var e=Math.ceil(x/S);if(_>e)return N(e),void j(e,S);N(Number(_)),j(Number(_),S)}}})]})]})}},3539:function(e,i,n){var t=n(7313),l=n(8303),a=n(6572),s=n(6417);i.Z=function(e){var i=e.ids;return(0,s.jsx)(a.a,{render:function(e){return i.map((function(i){return(0,s.jsxs)(t.Fragment,{children:[(0,s.jsx)(l.rU,{itemProp:"genre",to:"/the-loai/"+e[i].slug,title:e[i].name,children:e[i].name}),","," "]},i)}))},convertToObj:!0})}},1998:function(e,i,n){var t=n(8303),l=n(3539),a=n(6417);i.Z=function(e){var i=e.title,n=e.slug,s=e.value,r=void 0===s?[]:s;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"title-list",children:(0,a.jsx)("h2",{children:(0,a.jsx)(t.rU,{to:n||"#",title:i,children:i})})}),r.map((function(e){var i=e._id,n=e.name,s=e.slug,r=e.categories,o=e.views;return(0,a.jsxs)("div",{className:"row",itemScope:"",itemType:"https://schema.org/Book",children:[(0,a.jsxs)("div",{className:"col-xs-9 col-sm-6 col-md-5 col-title",children:[(0,a.jsx)("span",{className:"glyphicon glyphicon-chevron-right"})," ",(0,a.jsx)("h3",{itemProp:"name",children:(0,a.jsx)(t.rU,{to:"/truyen/"+s,title:n,itemProp:"url",children:n})})]}),(0,a.jsx)("div",{className:"hidden-xs col-sm-3 col-md-3 col-cat text-888",children:(0,a.jsx)(l.Z,{ids:r})}),(0,a.jsx)("div",{className:"hidden-xs hidden-sm col-md-2 col-chap text-info"}),(0,a.jsxs)("div",{className:"col-xs-3 col-sm-3 col-md-2 col-time text-888",children:[o," l\u01b0\u1ee3t xem"]})]},i)}))]})}},6126:function(e,i,n){var t=n(8683),l=n(6572),a=n(8303),s=n(6417),r=function(e){var i=e.name,n=e.slug;return(0,s.jsx)("div",{className:"col-xs-6",children:(0,s.jsx)(a.rU,{to:"/the-loai/"+n,title:i,children:i})})};i.Z=function(){return(0,s.jsxs)("div",{className:"list list-truyen list-cat",children:[(0,s.jsx)("div",{className:"title-list",children:(0,s.jsx)("h4",{children:"Th\u1ec3 lo\u1ea1i truy\u1ec7n"})}),(0,s.jsx)("div",{className:"row",children:(0,s.jsx)(l.a,{render:function(e){return e.map((function(e){return(0,s.jsx)(r,(0,t.Z)({},e),e._id)}))}})})]})}},4847:function(e,i,n){n.r(i);var t=n(8683),l=n(885),a=n(4461),s=n(7313),r=n(3830),o=n(3444),c=n(1060),d=n(6126),u=n(1998),v=n(2670),m=n(2578),h=n(6417),x=function(e){var i,n;if(null!==e&&void 0!==e&&null!==(i=e.data)&&void 0!==i&&null!==(n=i.data)&&void 0!==n&&n.data){var t,l,a=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(l=t.data)||void 0===l?void 0:l.data,s={};return a.forEach((function(e){return s[e.slug]=e})),s}};i.default=function(){var e,i,n,j,g,p,f,N=(0,s.useContext)(c.h),y=(0,a.e0)(x),Z=y.isLoading,S=y.data,w=(0,r.UO)().slug,C=(0,s.useState)({current:1,pageSize:10}),k=(0,l.Z)(C,2),_=k[0],b=k[1],z=(0,a.AJ)({page:_.current,limit:_.pageSize,tags:null!==S&&void 0!==S&&null!==(e=S[w])&&void 0!==e&&e._id?[null===S||void 0===S||null===(i=S[w])||void 0===i?void 0:i._id]:[]}),T=z.isLoading,U=z.error,B=z.data;(0,s.useEffect)((function(){var e;N.setBreadCrumb([{title:null===S||void 0===S||null===(e=S[w])||void 0===e?void 0:e.name,to:w}])}),[S,w]);return Z?"":(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v.Z,{title:null===S||void 0===S||null===(n=S[w])||void 0===n?void 0:n.title,description:null===S||void 0===S||null===(j=S[w])||void 0===j?void 0:j.description}),(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{style:{padding:"0 15px",marginBottom:"15px"},className:"list list-truyen list-new col-xs-12 col-sm-12 col-md-8 col-truyen-main",children:[(T||Z)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"title-list",children:(0,h.jsx)("h2",{children:"\u0110ang t\xecm ki\u1ebfm d\u1eef li\u1ec7u"})}),(0,h.jsx)(o.Z,{count:10,height:38})]}),U&&"C\xf3 l\u1ed7i x\u1ea3y ra: "+U.message,(null===B||void 0===B?void 0:B.data)&&(0,h.jsx)(u.Z,{value:null===B||void 0===B?void 0:B.data,title:null!==S&&void 0!==S&&null!==(g=S[w])&&void 0!==g&&g.name?"Tag: "+(null===S||void 0===S||null===(p=S[w])||void 0===p?void 0:p.name):"Trang kh\xf4ng t\u1ed3n t\u1ea1i"}),(0,h.jsx)(m.Z,(0,t.Z)({showSizeChanger:!1,showQuickJumper:!0,onChange:function(e,i){b({current:e,pageSize:i})},total:(null===B||void 0===B?void 0:B.total)||0},_)),(0,h.jsx)("div",{style:{marginTop:"15px"},children:(0,h.jsx)("p",{children:null===S||void 0===S||null===(f=S[w])||void 0===f?void 0:f.intro})})]}),(0,h.jsx)("div",{className:"col-md-4 col-truyen-side",children:(0,h.jsx)(d.Z,{})})]})]})}}}]);