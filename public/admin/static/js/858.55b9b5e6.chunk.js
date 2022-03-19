"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[858],{3746:function(e,t,r){var n=r(2982),o=r(5861),i=r(7757),c=r.n(i),a=r(4187),u=r(3499),s=r(7313),l=r(9821),f=r(6417);t.Z=function(e){var t=e.refetch,r=(0,s.createRef)(),i=(0,a.r)(),p=i.showLoading,d=i.hideLoading,h=function(){var e=(0,o.Z)(c().mark((function e(){var o,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,n.Z)(r.current.files),i=new FormData,o.forEach((function(e){i.append("imgs",e)})),p(),e.prev=4,e.next=7,l.n9.uploadFiles(i);case 7:t(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log({error:e.t0});case 13:d();case 14:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.z,{onClick:function(){r.current.click()},className:"mr-1 p-button-outlined",type:"submit",children:"Upload file"}),(0,f.jsx)("input",{onChange:h,ref:r,hidden:!0,type:"file",multiple:!0,accept:"image/*",name:"imgs"})]})}},7434:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(1413),o=r(885),i=r(5987),c=r(5234),a=r(7313);function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var y,m,v,b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(i,e);var t,r,n,o=h(i);function i(){return u(this,i),o.apply(this,arguments)}return t=i,(r=[{key:"skeletonStyle",value:function(){return this.props.size?{width:this.props.size,height:this.props.size,borderRadius:this.props.borderRadius}:{width:this.props.width,height:this.props.height,borderRadius:this.props.borderRadius}}},{key:"render",value:function(){var e=(0,c.AK)("p-skeleton p-component",{"p-skeleton-circle":"circle"===this.props.shape,"p-skeleton-none":"none"===this.props.animation},this.props.className),t=this.skeletonStyle();return a.createElement("div",{style:t,className:e})}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.Component);v={shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null},(m="defaultProps")in(y=b)?Object.defineProperty(y,m,{value:v,enumerable:!0,configurable:!0,writable:!0}):y[m]=v;var g=r(6417),w=["id","src","callback","type"],k=function(e){var t=e.id,r=e.src,u=e.callback,s=e.type,l=void 0===s?"checkbox":s,f=(0,i.Z)(e,w),p=(0,a.useState)(),d=(0,o.Z)(p,2),h=d[0],y=d[1],m=(0,a.useState)(!1),v=(0,o.Z)(m,2),k=v[0],j=v[1],x=(0,a.createRef)(),O=(0,a.createRef)();(0,a.useEffect)((function(){var e;y(null===(e=x.current)||void 0===e?void 0:e.checked)}),[x]);var R=(0,c.AK)("col","img_card",{check:h});return(0,g.jsxs)("label",{className:R,children:[(0,g.jsx)("input",(0,n.Z)({ref:x,onChange:function(e){var t=e.target,n=t.checked,o=t.value;u({checked:n,value:o,src:r})},type:l,name:"_id",value:t},f)),(0,g.jsx)("img",{ref:O,onLoad:function(){j(O.current.complete)},className:"w-100",src:"http://gamemodvip28.net/"+r,alt:"attachment",style:{height:k?"auto":"0px"}}),!k&&(0,g.jsx)(b,{width:"100%",height:"12rem"})]})}},9858:function(e,t,r){r.r(t);var n=r(885),o=r(4187),i=r(7313),c=r(4918),a=(r(4098),r(7434)),u=r(7346),s=r(3746),l=r(6417);t.default=function(e){var t=e.callback,r=(0,i.useState)({first:0,rows:10,page:0}),f=(0,n.Z)(r,2),p=f[0],d=f[1],h=(0,c.Z)({page:p.page+1,limit:p.rows}),y=h.isLoading,m=h.error,v=h.data,b=h.refetch,g=h.isFetching,w=(0,o.r)(),k=w.showLoading,j=w.hideLoading;if((0,i.useEffect)((function(){g&&k(),g||j()}),[g]),y)return"";if(m)return"C\xf3 l\u1ed7i x\u1ea3y ra: "+m.message;var x=function(e){var r=e.checked,n=e.value,o=e.src;t({checked:r,value:n,src:o})};return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"mb-1",children:(0,l.jsx)(s.Z,{refetch:b})}),(0,l.jsx)("div",{className:"row row-cols-5",children:v.data.map((function(e){var t=e._id,r=e.filename;return(0,l.jsx)(a.Z,{callback:x,src:r,id:t,type:"radio",name:"attachmentId"},t)}))}),(0,l.jsx)(u.D,{first:p.first,rows:p.rows,totalRecords:v.total||0,rowsPerPageOptions:[5,10,25,50,100],onPageChange:function(e){d(e)}})]})}},4918:function(e,t,r){var n=r(56),o=r(9821),i=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data};t.Z=function(e){var t=e.page,r=e.limit,c=e.select,a=void 0===c?i:c;return(0,n.useQuery)(["attachments",t,r],(function(){return o.n9.getAttachments({page:t,limit:r})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:a})}},4098:function(){}}]);