"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[506],{2670:function(s,e,i){var n=i(182),t=i(6417);e.Z=function(s){var e=s.title,i=s.description;return(0,t.jsxs)(n.q,{children:[(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("title",{children:e}),(0,t.jsx)("meta",{name:"keywords",content:"doc truyen, doc truyen online, truyen hay, truyen chu"}),(0,t.jsx)("meta",{name:"description",content:i})]})}},3539:function(s,e,i){var n=i(7313),t=i(8303),l=i(6572),c=i(6417);e.Z=function(s){var e=s.ids;return(0,c.jsx)(l.a,{render:function(s){return e.map((function(e){return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(t.rU,{itemProp:"genre",to:"/the-loai/"+s[e].slug,title:s[e].name,children:s[e].name}),","," "]},e)}))},convertToObj:!0})}},7506:function(s,e,i){i.r(e),i.d(e,{default:function(){return j}});var n=i(7313),t=i(1060),l=i(8303),c=i(3830),r=i(3444),d=i(1099),o=i(6417),a=function(s){var e=s.storyId,i=s.storySlug,n=(0,d.HV)({page:1,limit:999,storyId:e}),t=n.isLoading,c=n.error,a=n.data;return c?"C\xf3 l\u1ed7i x\u1ea3y ra: "+c.message:(0,o.jsxs)("div",{className:"col-xs-12",id:"list-chapter",children:[(0,o.jsx)("div",{className:"title-list",children:(0,o.jsx)("h2",{children:"Danh s\xe1ch ch\u01b0\u01a1ng"})}),(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-6",children:[t&&(0,o.jsx)(r.Z,{count:10,height:25}),(0,o.jsx)("ul",{className:"list-chapter",children:(null===a||void 0===a?void 0:a.data)&&(null===a||void 0===a?void 0:a.data.map((function(s){var e=s._id,n=s.order,t=s.name;return(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"glyphicon glyphicon-certificate"})," ",(0,o.jsxs)(l.rU,{to:"/truyen/"+i+"/chuong-".concat(n),children:[(0,o.jsx)("span",{className:"chapter-text",children:(0,o.jsx)("span",{children:"Ch\u01b0\u01a1ng "})}),n,": ",t]})]},e)})))})]})})]})},h=i(3539),u=i(2670),x=i(6572),m=function(s){var e=s.ids,i=void 0===e?[]:e;return(0,o.jsx)(x.S,{render:function(s){return Array.isArray(i)?i.map((function(e){return(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)(l.rU,{itemProp:"genre",to:"/tag/"+s[e].slug,title:s[e].name,children:s[e].name}),","," "]},e)})):""},convertToObj:!0})},j=function(){var s,e=(0,n.useContext)(t.h),i=(0,c.UO)().slug,x=(0,d.tD)(i),j=x.isLoading,v=x.error,g=x.data;return(0,n.useEffect)((function(){e.setBreadCrumb([{title:null===g||void 0===g?void 0:g.name,to:i}])}),[g,i]),v?"C\xf3 l\u1ed7i x\u1ea3y ra: "+v.message:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)(u.Z,{title:null===g||void 0===g?void 0:g.title,descrHeadiption:null===g||void 0===g?void 0:g.description}),(0,o.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-9 col-truyen-main",children:[(0,o.jsxs)("div",{className:"col-xs-12 col-info-desc",children:[(0,o.jsx)("div",{className:"title-list book-intro",children:(0,o.jsx)("h2",{children:"Th\xf4ng tin truy\u1ec7n"})}),(0,o.jsxs)("h3",{className:"title",itemProp:"name",children:[j&&(0,o.jsx)(r.Z,{count:1,height:35}),g?null===g||void 0===g?void 0:g.name:""]}),(0,o.jsxs)("div",{className:"col-xs-12 col-sm-4 col-md-4 info-holder",children:[(0,o.jsx)("div",{className:"books",children:(0,o.jsxs)("div",{className:"book",children:[j&&(0,o.jsx)(r.Z,{count:1,height:100}),g&&(0,o.jsx)("img",{src:"https://gamemodvip28.net/upload/"+(null===g||void 0===g||null===(s=g.attachment)||void 0===s?void 0:s.filename),alt:"Th\u1ebf Gi\u1edbi Ho\xe0n M\u1ef9",itemProp:"image"})]})}),(0,o.jsxs)("div",{className:"info",children:[j&&(0,o.jsx)(r.Z,{count:1,height:25}),g&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"T\xe1c gi\u1ea3:"}),(0,o.jsx)(l.rU,{to:"/tac-gia/".concat(null===g||void 0===g?void 0:g.author),children:null===g||void 0===g?void 0:g.author})]}),j&&(0,o.jsx)(r.Z,{count:1,height:25}),g&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Th\u1ec3 lo\u1ea1i:"}),(0,o.jsx)(h.Z,{ids:g.categories})]}),j&&(0,o.jsx)(r.Z,{count:1,height:25}),g&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Tag:"}),(0,o.jsx)(m,{ids:g.tags||[]})]}),j&&(0,o.jsx)(r.Z,{count:1,height:25}),g&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Tr\u1ea1ng th\xe1i:"}),(0,o.jsx)("span",{className:"text-success",children:1===(null===g||void 0===g?void 0:g.progress)?"\u0110ang c\u1eadp nh\u1eadt":"Full"})]})]})]}),(0,o.jsxs)("div",{className:"col-xs-12 col-sm-8 col-md-8 desc",children:[j&&(0,o.jsx)(r.Z,{count:1,height:150}),g&&(0,o.jsx)("div",{className:"desc-text desc-text-full",dangerouslySetInnerHTML:{__html:null===g||void 0===g?void 0:g.intro}})]})]}),g&&(0,o.jsx)(a,{storySlug:i,storyId:null===g||void 0===g?void 0:g._id})]}),(0,o.jsx)("div",{className:"visible-md-block visible-lg-block col-md-3 text-center col-truyen-side",children:(0,o.jsx)("div",{className:"list list-truyen col-xs-12",children:(0,o.jsx)("div",{className:"title-list",children:(0,o.jsx)("h4",{children:"Truy\u1ec7n c\xf9ng t\xe1c gi\u1ea3"})})})})]})}}}]);