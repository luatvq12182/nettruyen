"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[849],{6217:function(e,t,n){var l=n(7326),a=n(5671),o=n(9521),i=n(136),r=n(8347),s=n(7313),c=n(2500),d=n(2624),u=n(6417),h={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function m(e){return"blockquote"===e.getType()?"RichEditor-blockquote":null}var g=function(e){(0,i.Z)(n,e);var t=(0,r.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return(0,o.Z)(n,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),(0,u.jsx)("span",{className:e,onMouseDown:this.onToggle,children:this.props.label})}}]),n}(s.Component),p=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],y=function(e){var t=e.editorState,n=t.getSelection(),l=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return(0,u.jsx)("div",{className:"RichEditor-controls",children:p.map((function(t){return(0,u.jsx)(g,{active:t.style===l,label:t.label,onToggle:e.onToggle,style:t.style},t.label)}))})},v=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],f=function(e){var t=e.editorState.getCurrentInlineStyle();return(0,u.jsx)("div",{className:"RichEditor-controls",children:v.map((function(n){return(0,u.jsx)(g,{active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style},n.label)}))})},b=function(e){(0,i.Z)(n,e);var t=(0,r.Z)(n);function n(e){var o;return(0,a.Z)(this,n),(o=t.call(this,e)).componentDidMount=function(){o.props.defaultValue&&o.setState({editorState:c.EditorState.createWithContent(c.ContentState.createFromBlockArray((0,c.convertFromHTML)(o.props.defaultValue)))})},o.state={editorState:c.EditorState.createEmpty()},o.onChange=function(e){o.setState({editorState:e},(function(){o.props.callback((0,d.E)(o.state.editorState.getCurrentContent()))}))},o.handleKeyCommand=o._handleKeyCommand.bind((0,l.Z)(o)),o.mapKeyToEditorCommand=o._mapKeyToEditorCommand.bind((0,l.Z)(o)),o.toggleBlockType=o._toggleBlockType.bind((0,l.Z)(o)),o.toggleInlineStyle=o._toggleInlineStyle.bind((0,l.Z)(o)),o}return(0,o.Z)(n,[{key:"_handleKeyCommand",value:function(e,t){var n=c.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return(0,c.getDefaultKeyBinding)(e);var t=c.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleBlockType",value:function(e){this.onChange(c.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(c.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),(0,u.jsxs)("div",{className:"RichEditor-root",children:[(0,u.jsx)(y,{editorState:e,onToggle:this.toggleBlockType}),(0,u.jsx)(f,{editorState:e,onToggle:this.toggleInlineStyle}),(0,u.jsx)("div",{className:t,children:(0,u.jsx)(c.Editor,{blockStyleFn:m,customStyleMap:h,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,spellCheck:!0})})]})}}]),n}(s.Component);t.Z=b},6110:function(e,t,n){var l=n(1413),a=n(4042),o=n(5234),i=n(6417);t.Z=function(e){var t=e.label,n=e.required,r=void 0!==n&&n,s=e.register,c=e.name,d=e.errors;return(0,i.jsxs)("div",{className:"mb-1",children:[(0,i.jsxs)("label",{htmlFor:c,style:{paddingBottom:"5px",display:"inline-block"},className:(0,o.AK)({"p-error":!!d[c]}),children:[t,r?(0,i.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,i.jsx)(a.o,(0,l.Z)({type:"text",className:(0,o.AK)({"p-invalid":!!d[c]},"w-100")},s(c,{required:{value:r,message:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"}}))),d[c]&&(0,i.jsx)("small",{className:"p-error",children:d[c].message})]})}},4187:function(e,t,n){n.d(t,{r:function(){return o}});var l=n(7313),a=n(5833),o=function(){var e=(0,l.useContext)(a.Q);return{showLoading:e.showLoading,hideLoading:e.hideLoading}}},5849:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var l=n(1413),a=n(5861),o=n(885),i=n(7757),r=n.n(i),s=n(7313),c=n(9975),d=n(4187),u=n(3830),h=n(6130),m=n(764),g=n(2713),p=n.n(g),y=n(9821),v=n(6217),f=n(6110),b=n(4216),x=n(3499),C=n(5973),S=n(7855),j=n(6230),k=n(5234),T=n(6417),E=function(){var e=(0,u.k6)(),t=(0,c.cI)(),n=t.formState.errors,i=t.register,g=t.handleSubmit,E=(0,h.Z)({page:1,limit:999}),Z=E.isLoading,R=E.error,_=E.data,N=E.isFetching,B=(0,m.Z)({page:1,limit:10}).refetch,w=(0,s.useState)(""),L=(0,o.Z)(w,2),O=L[0],K=L[1],D=(0,s.useState)(1),A=(0,o.Z)(D,2),I=A[0],U=A[1],F=(0,s.useState)(2),P=(0,o.Z)(F,2),H=P[0],M=P[1],q=(0,s.useState)({_id:null,src:null}),z=(0,o.Z)(q,2),W=z[0],G=z[1],Q=(0,s.useState)([]),V=(0,o.Z)(Q,2),X=V[0],J=V[1],Y=(0,d.r)(),$=Y.showLoading,ee=Y.hideLoading,te=(0,s.useState)({type:"none",msg:""}),ne=(0,o.Z)(te,2),le=ne[0],ae=ne[1];if((0,s.useEffect)((function(){N&&$(),N||ee()}),[N]),Z)return"";if(R)return"C\xf3 l\u1ed7i x\u1ea3y ra: "+R.message;var oe=function(){var e=(0,a.Z)(r().mark((function e(t){var n,a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,l.Z)((0,l.Z)({},t),{},{slug:t.slug?t.slug:p()(t.name,{remove:void 0,lower:!0,strict:!1,locale:"vi"}),intro:O,attachmentId:W._id,progress:I,status:H,categories:X.map((function(e){return e._id}))}),$(),e.prev=2,e.next=5,y.Gr.createStory(n);case 5:ae({type:"SUCCESS",msg:"Th\xe0nh c\xf4ng"}),window.scrollTo(0,0),B(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log({error:e.t0}),ae({type:"ERROR",msg:null===(a=e.t0.response)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.msg});case 14:ee();case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return(0,T.jsxs)("div",{className:"row",children:[(0,T.jsx)("div",{className:"col-12",children:(0,T.jsx)(x.z,{icon:"pi pi-angle-left",label:"Danh s\xe1ch truy\u1ec7n",onClick:function(){return e.push("/story")},className:"mb-1 p-button-outlined",type:"submit"})}),(0,T.jsx)("div",{className:"col-8",children:(0,T.jsxs)(C.Z,{children:[(0,T.jsx)("div",{className:(0,k.AK)({"alert-success":"SUCCESS"===le.type,"alert-danger":"ERROR"===le.type,"d-none":"none"===le.type},"alert"),children:le.msg}),(0,T.jsxs)("form",{onSubmit:g(oe),children:[(0,T.jsx)(f.Z,{label:"T\xean truy\u1ec7n",register:i,errors:n,name:"name",required:!0}),(0,T.jsx)(f.Z,{label:"Slug",register:i,errors:n,name:"slug"}),(0,T.jsx)(f.Z,{label:"T\xe1c gi\u1ea3",register:i,errors:n,name:"author"}),(0,T.jsxs)("div",{className:"mb-1",children:[(0,T.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Danh m\u1ee5c"}),(0,T.jsx)(j.N,{className:"w-100",value:X,filter:!0,options:_.data,onChange:function(e){return J(e.value)},optionLabel:"name",display:"chip"})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Gi\u1edbi thi\u1ec7u"}),(0,T.jsx)(v.Z,{callback:function(e){return K(e)}})]}),(0,T.jsx)(x.z,{className:"mt-1 p-button-outlined",type:"submit",children:"Th\xeam truy\u1ec7n"})]})]})}),(0,T.jsx)("div",{className:"col-4",children:(0,T.jsxs)("div",{className:"row",children:[(0,T.jsx)("div",{className:"col-12",children:(0,T.jsxs)(C.Z,{children:[(0,T.jsx)(b.Z,{callback:function(e){G(e)}}),W.src&&(0,T.jsx)("img",{src:{NODE_ENV:"production",PUBLIC_URL:"/admin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"/admin",REACT_APP_BASE_API:"https://gamemodvip28.net/api",REACT_APP_URL_IMG:"https://gamemodvip28.net/upload/"}.REACT_APP_URL+W.src,className:"w-75 mt-1",alt:"imgPreview"})]})}),(0,T.jsx)("div",{className:"col-12 mt-1",children:(0,T.jsxs)(C.Z,{children:[(0,T.jsxs)("div",{children:[(0,T.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"T\xecnh tr\u1ea1ng"}),(0,T.jsx)(S.U,{value:I,options:[{name:"\u0110ang c\u1eadp nh\u1eadt",value:1},{name:"Ho\xe0n th\xe0nh",value:2}],onChange:function(e){return U(e.value)},optionLabel:"name"})]}),(0,T.jsxs)("div",{className:"mt-1",children:[(0,T.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Tr\u1ea1ng th\xe1i"}),(0,T.jsx)(S.U,{value:H,options:[{name:"Nh\xe1p",value:1},{name:"C\xf4ng khai",value:2},{name:"\u1ea8n",value:3}],onChange:function(e){return M(e.value)},optionLabel:"name"})]})]})})]})})]})}},4216:function(e,t,n){var l=n(885),a=n(6814),o=n(7313),i=n(3499),r=n(6417),s=(0,o.lazy)((function(){return Promise.all([n.e(963),n.e(858)]).then(n.bind(n,9858))}));t.Z=function(e){var t=e.callback,n=e.label,c=void 0===n?"Ch\u1ecdn \u1ea3nh \u0111\u1ea1i di\u1ec7n":n,d=(0,o.useState)(!1),u=(0,l.Z)(d,2),h=u[0],m=u[1],g=(0,o.useState)({_id:null,src:null}),p=(0,l.Z)(g,2),y=p[0],v=p[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.V,{header:"Ch\u1ecdn \u1ea3nh",visible:h,style:{width:"80%"},position:"top",footer:(0,r.jsxs)("div",{children:[(0,r.jsx)(i.z,{label:"\u0110\xf3ng",onClick:function(){return m(!1)},className:"p-button-secondary"}),(0,r.jsx)(i.z,{label:"X\xe1c nh\u1eadn",onClick:function(){t(y),m(!1)},autoFocus:!0})]}),onHide:function(){return m(!1)},children:(0,r.jsx)(o.Suspense,{fallback:"Loading...",children:(0,r.jsx)(s,{callback:function(e){var t=e.value,n=e.src;v({_id:t,src:n})}})})}),(0,r.jsx)(i.z,{onClick:function(){return m(!0)},className:"p-button-outlined",type:"submit",children:c})]})}},6130:function(e,t,n){var l=n(56),a=n(9821),o=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data};t.Z=function(e){var t=e.page,n=e.limit,i=e.select,r=void 0===i?o:i;return(0,l.useQuery)(["categories",t,n],(function(){return a.GN.getCategories({page:t,limit:n})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:r})}},764:function(e,t,n){n.d(t,{t:function(){return i}});var l=n(56),a=n(9821),o=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return(0,l.useQuery)(["storyDetail",e],(function(){return a.Gr.getStoryDetail(e)}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:t})};t.Z=function(e){var t=e.page,n=e.limit,i=e.select,r=void 0===i?o:i;return(0,l.useQuery)(["stories",t,n],(function(){return a.Gr.getStories({page:t,limit:n})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:r})}}}]);