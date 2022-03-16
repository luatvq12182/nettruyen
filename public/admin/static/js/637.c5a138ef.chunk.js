"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[637],{4637:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(5861),s=t(885),a=t(7757),i=t.n(a),c=t(7313),o=t(5833),l=function(){var e=(0,c.useContext)(o.Q);return{showLoading:e.showLoading,hideLoading:e.hideLoading}},u=t(56),d=t(182),h=function(e){var n;return null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data},p=function(e){var n=e.page,t=e.limit,r=e.select,s=void 0===r?h:r;return(0,u.useQuery)(["categories",n,t],(function(){return d.GN.getCategories({page:n,limit:t})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:s})},f=t(1413),m=t(5987),g=t(2693),x=t(3479),v=t(6417),y=["children"],b=function(e){var n=e.children,t=(0,m.Z)(e,y);return(0,v.jsxs)(g.w,(0,f.Z)((0,f.Z)({dataKey:"_id",paginator:!0,size:"small",responsiveLayout:"scroll",showGridlines:!0,stripedRows:!0,rows:10,rowsPerPageOptions:[5,10,25,50,100]},t),{},{children:[(0,v.jsx)(x.s,{selectionMode:"multiple",style:{textAlign:"center"},headerStyle:{width:"3em"}}),n]}))},w=t(4960),j=t(2713),S=t.n(j),k=t(5234),N=t(4042),C=function(e){var n=e.label,t=e.required,r=void 0!==t&&t,s=e.register,a=e.name,i=e.errors;return(0,v.jsxs)("div",{className:"mb-1",children:[(0,v.jsxs)("label",{htmlFor:a,style:{paddingBottom:"5px",display:"inline-block"},className:(0,k.AK)({"p-error":!!i[a]}),children:[n,r?(0,v.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,v.jsx)(N.o,(0,f.Z)({type:"text",className:(0,k.AK)({"p-invalid":!!i[a]},"w-100")},s(a,{required:{value:r,message:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"}}))),i[a]&&(0,v.jsx)("small",{className:"p-error",children:i[a].message})]})},Z=t(3499),L=function(e){var n=e.refetch,t=(0,w.cI)(),a=t.formState.errors,o=t.register,u=t.handleSubmit,h=l(),p=h.showLoading,f=h.hideLoading,m=(0,c.useState)({type:"none",msg:""}),g=(0,s.Z)(m,2),x=g[0],y=g[1];(0,c.useEffect)((function(){"none"!==x.type&&setTimeout((function(){y({type:"none",msg:""})}),5e3)}),[x]);var b=function(){var e=(0,r.Z)(i().mark((function e(t){var r,s,a,c,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,s=t.slug,a={name:r,slug:s||S()(r)},p(),e.prev=3,e.next=6,d.GN.createCategory(a);case 6:y({type:"SUCCESS",msg:"Th\xe0nh c\xf4ng"}),n(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),y({type:"ERROR",msg:null===(c=e.t0.response)||void 0===c||null===(o=c.data)||void 0===o?void 0:o.msg});case 13:f();case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:(0,k.AK)({"alert-success":"SUCCESS"===x.type,"alert-danger":"ERROR"===x.type,"d-none":"none"===x.type},"alert"),children:x.msg}),(0,v.jsxs)("form",{onSubmit:u(b),children:[(0,v.jsx)(C,{label:"T\xean danh m\u1ee5c",register:o,errors:a,name:"name",required:!0}),(0,v.jsx)(C,{label:"Slug",register:o,errors:a,name:"slug"}),(0,v.jsx)(Z.z,{className:"mt-1 p-button-outlined",type:"submit",children:"X\xe1c nh\u1eadn"})]})]})},R=t(5973),E=function(){var e=(0,c.useState)([]),n=(0,s.Z)(e,2),t=n[0],a=n[1],o=(0,c.useState)(0),u=(0,s.Z)(o,2),h=u[0],f=u[1],m=(0,c.useState)({first:0,rows:10,page:0}),g=(0,s.Z)(m,2),y=g[0],w=g[1],j=p({page:y.page+1,limit:y.rows}),S=j.isLoading,k=j.error,N=j.data,C=j.refetch,E=j.isFetching,z=l(),O=z.showLoading,A=z.hideLoading;if((0,c.useEffect)((function(){E&&O(),E||A()}),[E]),(0,c.useEffect)((function(){f((null===N||void 0===N?void 0:N.total)||0)}),[N]),S)return"";if(k)return"C\xf3 l\u1ed7i x\u1ea3y ra: "+k.message;var F=function(e){console.log(e)},G=function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a danh m\u1ee5c n\xe0y kh\xf4ng ?")){e.next=7;break}return O(),e.next=6,d.GN.deleteCategory(n);case 6:C();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log({error:e.t0});case 12:A();case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),K=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a t\u1ea5t c\u1ea3 nh\u1eefng danh m\u1ee5c \u0111\xe3 ch\u1ecdn kh\xf4ng ?")){e.next=7;break}return O(),e.next=6,d.GN.deleteBatch(t.map((function(e){return e._id})));case 6:C();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log({error:e.t0});case 12:A();case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsx)("div",{className:"container",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-4",children:(0,v.jsx)(R.Z,{children:(0,v.jsx)(L,{refetch:C})})}),(0,v.jsx)("div",{className:"col-8",children:(0,v.jsxs)(b,{header:function(){return(0,v.jsx)(Z.z,{label:"X\xf3a",icon:"pi pi-trash",className:"p-button-danger p-button-outlined",onClick:K,disabled:!t||!t.length})},value:N.data,lazy:!0,totalRecords:h,onPage:function(e){w(e),console.log(e)},rows:y.rows,first:y.first,selection:t,onSelectionChange:function(e){return a(e.value)},children:[(0,v.jsx)(x.s,{field:"name",header:"T\xean danh m\u1ee5c",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),(0,v.jsx)(x.s,{field:"slug",header:"Slug",sortable:!0,filter:!0,filterPlaceholder:"Search by slug",style:{minWidth:"14rem"}}),(0,v.jsx)(x.s,{header:(0,v.jsx)("i",{className:"pi pi-cog"}),body:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z.z,{onClick:function(){return F(e)},icon:"pi pi-pencil",className:"p-button-rounded p-button-text p-button-success"}),(0,v.jsx)(Z.z,{onClick:function(){return G(e._id)},icon:"pi pi-trash",className:"p-button-rounded p-button-text p-button-danger"})]})},style:{textAlign:"center"}})]})})]})})}}}]);