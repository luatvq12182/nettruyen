(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[187],{6915:function(e,t,r){"use strict";var n=r(1413),o=r(5987),i=r(4706),s=r(3479),a=r(6417),l=["children"];t.Z=function(e){var t=e.children,r=(0,o.Z)(e,l);return(0,a.jsxs)(i.w,(0,n.Z)((0,n.Z)({dataKey:"_id",paginator:!0,size:"small",responsiveLayout:"scroll",showGridlines:!0,stripedRows:!0,rows:10,rowsPerPageOptions:[5,10,25,50,100]},r),{},{children:[(0,a.jsx)(s.s,{selectionMode:"multiple",style:{textAlign:"center"},headerStyle:{width:"3em"}}),t]}))}},6110:function(e,t,r){"use strict";var n=r(1413),o=r(4042),i=r(5234),s=r(6417);t.Z=function(e){var t=e.label,r=e.required,a=void 0!==r&&r,l=e.register,c=e.name,u=e.errors;return(0,s.jsxs)("div",{className:"mb-1",children:[(0,s.jsxs)("label",{htmlFor:c,style:{paddingBottom:"5px",display:"inline-block"},className:(0,i.AK)({"p-error":!!u[c]}),children:[t,a?(0,s.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,s.jsx)(o.o,(0,n.Z)({type:"text",className:(0,i.AK)({"p-invalid":!!u[c]},"w-100")},l(c,{required:{value:a,message:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"}}))),u[c]&&(0,s.jsx)("small",{className:"p-error",children:u[c].message})]})}},2002:function(e,t,r){"use strict";var n=r(1413),o=r(5987),i=r(9094),s=r(5234),a=r(6417),l=["label","required","register","name","errors"];t.Z=function(e){var t=e.label,r=e.required,c=void 0!==r&&r,u=e.register,p=e.name,f=e.errors,h=(0,o.Z)(e,l);return(0,a.jsxs)("div",{className:"mb-1",children:[(0,a.jsxs)("label",{htmlFor:p,style:{paddingBottom:"5px",display:"inline-block"},className:(0,s.AK)({"p-error":!!f[p]}),children:[t,c?(0,a.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,a.jsx)(i.g,(0,n.Z)((0,n.Z)({type:"text",className:(0,s.AK)({"p-invalid":!!f[p]},"w-100"),rows:5},u(p,{required:{value:c,message:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"}})),h)),f[p]&&(0,a.jsx)("small",{className:"p-error",children:f[p].message})]})}},4187:function(e,t,r){"use strict";r.d(t,{r:function(){return i}});var n=r(7313),o=r(5833),i=function(){var e=(0,n.useContext)(o.Q);return{showLoading:e.showLoading,hideLoading:e.hideLoading}}},9187:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5861),o=r(885),i=r(7757),s=r.n(i),a=r(4187),l=r(7313),c=r(6130),u=r(1128),p=r(6915),f=r(9975),h=r(2713),d=r.n(h),y=r(5234),m=r(6110),g=r(3499),b=r(2002),v=r(6417),O=function(e){var t=e.refetch,r=(0,f.cI)(),i=r.formState.errors,c=r.register,p=r.handleSubmit,h=(0,a.r)(),O=h.showLoading,w=h.hideLoading,j=(0,l.useState)({type:"none",msg:""}),x=(0,o.Z)(j,2),E=x[0],S=x[1];(0,l.useEffect)((function(){"none"!==E.type&&setTimeout((function(){S({type:"none",msg:""})}),5e3)}),[E]);var k=function(){var e=(0,n.Z)(s().mark((function e(r){var n,o,i,a,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.name,o=r.slug,i={name:n,slug:o||d()(n)},O(),e.prev=3,e.next=6,u.GN.createCategory(i);case 6:S({type:"SUCCESS",msg:"Th\xe0nh c\xf4ng"}),t(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),S({type:"ERROR",msg:null===(a=e.t0.response)||void 0===a||null===(l=a.data)||void 0===l?void 0:l.msg});case 13:w();case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:(0,y.AK)({"alert-success":"SUCCESS"===E.type,"alert-danger":"ERROR"===E.type,"d-none":"none"===E.type},"alert"),children:E.msg}),(0,v.jsxs)("form",{onSubmit:p(k),children:[(0,v.jsx)(m.Z,{label:"T\xean danh m\u1ee5c",register:c,errors:i,name:"name",required:!0}),(0,v.jsx)(m.Z,{label:"Slug",register:c,errors:i,name:"slug"}),(0,v.jsx)(m.Z,{label:"Meta title",register:c,errors:{},name:"title"}),(0,v.jsx)(b.Z,{label:"Meta description",register:c,errors:{},name:"description",rows:10}),(0,v.jsx)(g.z,{className:"mt-1 p-button-outlined",type:"submit",children:"Th\xeam danh m\u1ee5c"})]})]})},w=r(5973),j=r(3479),x=function(){var e=(0,l.useState)([]),t=(0,o.Z)(e,2),r=t[0],i=t[1],f=(0,l.useState)(0),h=(0,o.Z)(f,2),d=h[0],y=h[1],m=(0,l.useState)({first:0,rows:10,page:0}),b=(0,o.Z)(m,2),x=b[0],E=b[1],S=(0,c.Z)({page:x.page+1,limit:x.rows}),k=S.isLoading,R=S.error,A=S.data,N=S.refetch,z=S.isFetching,P=(0,a.r)(),Z=P.showLoading,U=P.hideLoading;if((0,l.useEffect)((function(){z&&Z(),z||U()}),[z]),(0,l.useEffect)((function(){y((null===A||void 0===A?void 0:A.total)||0)}),[A]),k)return"";if(R)return"C\xf3 l\u1ed7i x\u1ea3y ra: "+R.message;var C=function(e){console.log(e)},T=function(){var e=(0,n.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a danh m\u1ee5c n\xe0y kh\xf4ng ?")){e.next=7;break}return Z(),e.next=6,u.GN.deleteCategory(t);case 6:N();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log({error:e.t0});case 12:U();case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=(0,n.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a t\u1ea5t c\u1ea3 nh\u1eefng danh m\u1ee5c \u0111\xe3 ch\u1ecdn kh\xf4ng ?")){e.next=8;break}return Z(),e.next=6,u.GN.deleteBatch(r.map((function(e){return e._id})));case 6:N(),i([]);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log({error:e.t0});case 13:U();case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsx)("div",{className:"container",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-4",children:(0,v.jsx)(w.Z,{children:(0,v.jsx)(O,{refetch:N})})}),(0,v.jsx)("div",{className:"col-8",children:(0,v.jsxs)(p.Z,{header:function(){return(0,v.jsx)(g.z,{label:"X\xf3a",icon:"pi pi-trash",className:"p-button-danger p-button-outlined",onClick:H,disabled:!r||!r.length})},value:A.data,lazy:!0,totalRecords:d,onPage:function(e){E(e),console.log(e)},rows:x.rows,first:x.first,selection:r,onSelectionChange:function(e){return i(e.value)},children:[(0,v.jsx)(j.s,{field:"name",header:"T\xean danh m\u1ee5c",style:{minWidth:"14rem"}}),(0,v.jsx)(j.s,{field:"slug",header:"Slug",style:{minWidth:"14rem"}}),(0,v.jsx)(j.s,{header:(0,v.jsx)("i",{className:"pi pi-cog"}),body:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g.z,{onClick:function(){return C(e)},icon:"pi pi-pencil",className:"p-button-rounded p-button-text p-button-success"}),(0,v.jsx)(g.z,{onClick:function(){return T(e._id)},icon:"pi pi-trash",className:"p-button-rounded p-button-text p-button-danger"})]})},style:{textAlign:"center"}})]})})]})})}},6130:function(e,t,r){"use strict";var n=r(56),o=r(1128),i=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data};t.Z=function(e){var t=e.page,r=e.limit,s=e.select,a=void 0===s?i:s;return(0,n.useQuery)(["categories",t,r],(function(){return o.GN.getCategories({page:t,limit:r})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:a})}},5973:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(7313),o=r(5234);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var f,h,d,y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(u,e);var t,r,l,c=p(u);function u(){return i(this,u),c.apply(this,arguments)}return t=u,(r=[{key:"renderHeader",value:function(){return this.props.header?n.createElement("div",{className:"p-card-header"},o.gb.getJSXElement(this.props.header,this.props)):null}},{key:"renderBody",value:function(){var e=this.props.title&&n.createElement("div",{className:"p-card-title"},o.gb.getJSXElement(this.props.title,this.props)),t=this.props.subTitle&&n.createElement("div",{className:"p-card-subtitle"},o.gb.getJSXElement(this.props.subTitle,this.props)),r=this.props.children&&n.createElement("div",{className:"p-card-content"},this.props.children),i=this.props.footer&&n.createElement("div",{className:"p-card-footer"},o.gb.getJSXElement(this.props.footer,this.props));return n.createElement("div",{className:"p-card-body"},e,t,r,i)}},{key:"render",value:function(){var e=this.renderHeader(),t=this.renderBody(),r=(0,o.AK)("p-card p-component",this.props.className);return n.createElement("div",{className:r,style:this.props.style,id:this.props.id},e,t)}}])&&s(t.prototype,r),l&&s(t,l),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.Component);d={id:null,header:null,footer:null,title:null,subTitle:null,style:null,className:null},(h="defaultProps")in(f=y)?Object.defineProperty(f,h,{value:d,enumerable:!0,configurable:!0,writable:!0}):f[h]=d},9094:function(e,t,r){"use strict";r.d(t,{g:function(){return g}});var n=r(7313),o=r(5234),i=r(2328);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e,t){if(t&&("object"===u(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var t,r,u,p=y(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=p.call(this,e)).onFocus=t.onFocus.bind(l(t)),t.onBlur=t.onBlur.bind(l(t)),t.onKeyUp=t.onKeyUp.bind(l(t)),t.onInput=t.onInput.bind(l(t)),t.elementRef=(0,n.createRef)(t.props.forwardRef),t}return t=f,r=[{key:"onFocus",value:function(e){this.props.autoResize&&this.resize(),this.props.onFocus&&this.props.onFocus(e)}},{key:"onBlur",value:function(e){this.props.autoResize&&this.resize(),this.props.onBlur&&this.props.onBlur(e)}},{key:"onKeyUp",value:function(e){this.props.autoResize&&this.resize(),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"onInput",value:function(e){this.props.autoResize&&this.resize(),e.target.value.length>0?o.p7.addClass(e.target,"p-filled"):o.p7.removeClass(e.target,"p-filled"),this.props.onInput&&this.props.onInput(e)}},{key:"resize",value:function(e){var t=this.elementRef&&this.elementRef.current;t&&o.p7.isVisible(t)&&(this.cachedScrollHeight||(this.cachedScrollHeight=t.scrollHeight,t.style.overflow="hidden"),(this.cachedScrollHeight!==t.scrollHeight||e)&&(t.style.height="",t.style.height=t.scrollHeight+"px",parseFloat(t.style.height)>=parseFloat(t.style.maxHeight)?(t.style.overflowY="scroll",t.style.height=t.style.maxHeight):t.style.overflow="hidden",this.cachedScrollHeight=t.scrollHeight))}},{key:"isFilled",value:function(){return null!=this.props.value&&this.props.value.toString().length>0||null!=this.props.defaultValue&&this.props.defaultValue.toString().length>0||this.elementRef&&this.elementRef.current&&this.elementRef.current.value.toString().length>0}},{key:"updateForwardRef",value:function(){var e=this.props.forwardRef;e&&("function"===typeof e?e(this.elementRef.current):e.current=this.elementRef.current)}},{key:"componentDidMount",value:function(){this.updateForwardRef(),this.props.tooltip&&this.renderTooltip(),this.props.autoResize&&this.resize(!0)}},{key:"componentDidUpdate",value:function(e){e.tooltip===this.props.tooltip&&e.tooltipOptions===this.props.tooltipOptions||(this.tooltip?this.tooltip.update(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({content:this.props.tooltip},this.props.tooltipOptions||{})):this.renderTooltip()),this.props.autoResize&&this.resize(!0)}},{key:"componentWillUnmount",value:function(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null)}},{key:"renderTooltip",value:function(){this.tooltip=(0,i.I)({target:this.elementRef.current,content:this.props.tooltip,options:this.props.tooltipOptions})}},{key:"render",value:function(){var e=(0,o.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":this.props.disabled,"p-filled":this.isFilled(),"p-inputtextarea-resizable":this.props.autoResize},this.props.className),t=o.gb.findDiffKeys(this.props,f.defaultProps);return n.createElement("textarea",s({ref:this.elementRef},t,{className:e,onFocus:this.onFocus,onBlur:this.onBlur,onKeyUp:this.onKeyUp,onInput:this.onInput}))}}],r&&a(t.prototype,r),u&&a(t,u),Object.defineProperty(t,"prototype",{writable:!1}),f}(n.Component);h(m,"defaultProps",{autoResize:!1,tooltip:null,tooltipOptions:null,onInput:null,forwardRef:null});var g=n.forwardRef((function(e,t){return n.createElement(m,s({forwardRef:t},e))}))},2713:function(e){var t;t=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014c":"O","\u014d":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u018f":"E","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u0259":"e","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045d":"u","\u045f":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049a":"KH","\u049b":"kh","\u04a2":"NG","\u04a3":"ng","\u04ae":"UE","\u04af":"ue","\u04b0":"U","\u04b1":"u","\u04ba":"H","\u04bb":"h","\u04d8":"AE","\u04d9":"ae","\u04e8":"OE","\u04e9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E\'","\u0538":"Y\'","\u0539":"T\'","\u053a":"JH","\u053b":"I","\u053c":"L","\u053d":"X","\u053e":"C\'","\u053f":"K","\u0540":"H","\u0541":"D\'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054a":"P","\u054b":"J","\u054c":"R\'","\u054d":"S","\u054e":"V","\u054f":"T","\u0550":"R","\u0551":"C","\u0553":"P\'","\u0554":"Q\'","\u0555":"O\'\'","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062a":"t","\u062b":"th","\u062c":"j","\u062d":"h","\u062e":"kh","\u062f":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063a":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064a":"y","\u064b":"an","\u064c":"on","\u064d":"en","\u064e":"a","\u064f":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067e":"p","\u0686":"ch","\u0698":"zh","\u06a9":"k","\u06af":"g","\u06cc":"y","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e62":"S","\u1e63":"s","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2013":"-","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u201e":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b8":"kazakhstani tenge","\u20b9":"indian rupee","\u20ba":"turkish lira","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial","\ufef5":"laa","\ufef7":"laa","\ufef9":"lai","\ufefb":"la"}'),t=JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042a":"A","\u042c":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044a":"a","\u044c":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221e":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","\u20a3":"francos","\u2211":"suma","\u221e":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","\u20a3":"franc","\u2211":"somme","\u221e":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","\u2211":"soma","\xa3":"libra","\u221e":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}');function r(r,n){if("string"!==typeof r)throw new Error("slugify: string argument expected");var o=t[(n="string"===typeof n?{replacement:n}:n||{}).locale]||{},i=void 0===n.replacement?"-":n.replacement,s=void 0===n.trim||n.trim,a=r.normalize().split("").reduce((function(t,r){var s=o[r]||e[r]||r;return s===i&&(s=" "),t+s.replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return n.strict&&(a=a.replace(/[^A-Za-z0-9\s]/g,"")),s&&(a=a.trim()),a=a.replace(/\s+/g,i),n.lower&&(a=a.toLowerCase()),a}return r.extend=function(t){Object.assign(e,t)},r},e.exports=t(),e.exports.default=t()}}]);