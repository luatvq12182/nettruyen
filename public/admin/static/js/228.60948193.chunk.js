"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[228],{6217:function(e,t,n){var l=n(7326),a=n(5671),o=n(9521),r=n(136),i=n(8347),s=n(7313),c=n(2500),u=n(2624),d=n(6417),h={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function g(e){return"blockquote"===e.getType()?"RichEditor-blockquote":null}var m=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return(0,o.Z)(n,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),(0,d.jsx)("span",{className:e,onMouseDown:this.onToggle,children:this.props.label})}}]),n}(s.Component),v=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],p=function(e){var t=e.editorState,n=t.getSelection(),l=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return(0,d.jsx)("div",{className:"RichEditor-controls",children:v.map((function(t){return(0,d.jsx)(m,{active:t.style===l,label:t.label,onToggle:e.onToggle,style:t.style},t.label)}))})},y=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],f=function(e){var t=e.editorState.getCurrentInlineStyle();return(0,d.jsx)("div",{className:"RichEditor-controls",children:y.map((function(n){return(0,d.jsx)(m,{active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style},n.label)}))})},b=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(e){var o;return(0,a.Z)(this,n),(o=t.call(this,e)).componentDidMount=function(){o.props.defaultValue&&o.setState({editorState:c.EditorState.createWithContent(c.ContentState.createFromBlockArray((0,c.convertFromHTML)(o.props.defaultValue)))})},o.state={editorState:c.EditorState.createEmpty()},o.onChange=function(e){o.setState({editorState:e},(function(){o.props.callback((0,u.E)(o.state.editorState.getCurrentContent()))}))},o.handleKeyCommand=o._handleKeyCommand.bind((0,l.Z)(o)),o.mapKeyToEditorCommand=o._mapKeyToEditorCommand.bind((0,l.Z)(o)),o.toggleBlockType=o._toggleBlockType.bind((0,l.Z)(o)),o.toggleInlineStyle=o._toggleInlineStyle.bind((0,l.Z)(o)),o}return(0,o.Z)(n,[{key:"_handleKeyCommand",value:function(e,t){var n=c.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return(0,c.getDefaultKeyBinding)(e);var t=c.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleBlockType",value:function(e){this.onChange(c.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(c.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),(0,d.jsxs)("div",{className:"RichEditor-root",children:[(0,d.jsx)(p,{editorState:e,onToggle:this.toggleBlockType}),(0,d.jsx)(f,{editorState:e,onToggle:this.toggleInlineStyle}),(0,d.jsx)("div",{className:t,children:(0,d.jsx)(c.Editor,{blockStyleFn:g,customStyleMap:h,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,spellCheck:!0})})]})}}]),n}(s.Component);t.Z=b},4187:function(e,t,n){n.d(t,{r:function(){return o}});var l=n(7313),a=n(5833),o=function(){var e=(0,l.useContext)(a.Q);return{showLoading:e.showLoading,hideLoading:e.hideLoading}}},4216:function(e,t,n){var l=n(885),a=n(6814),o=n(7313),r=n(3499),i=n(6417),s=(0,o.lazy)((function(){return Promise.all([n.e(963),n.e(858)]).then(n.bind(n,9858))}));t.Z=function(e){var t=e.callback,n=e.label,c=void 0===n?"Ch\u1ecdn \u1ea3nh \u0111\u1ea1i di\u1ec7n":n,u=(0,o.useState)(!1),d=(0,l.Z)(u,2),h=d[0],g=d[1],m=(0,o.useState)({_id:null,src:null}),v=(0,l.Z)(m,2),p=v[0],y=v[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.V,{header:"Ch\u1ecdn \u1ea3nh",visible:h,style:{width:"80%"},position:"top",footer:(0,i.jsxs)("div",{children:[(0,i.jsx)(r.z,{label:"\u0110\xf3ng",onClick:function(){return g(!1)},className:"p-button-secondary"}),(0,i.jsx)(r.z,{label:"X\xe1c nh\u1eadn",onClick:function(){t(p),g(!1)},autoFocus:!0})]}),onHide:function(){return g(!1)},children:(0,i.jsx)(o.Suspense,{fallback:"Loading...",children:(0,i.jsx)(s,{callback:function(e){var t=e.value,n=e.src;y({_id:t,src:n})}})})}),(0,i.jsx)(r.z,{onClick:function(){return g(!0)},className:"p-button-outlined",type:"submit",children:c})]})}},6130:function(e,t,n){var l=n(56),a=n(9821),o=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data};t.Z=function(e){var t=e.page,n=e.limit,r=e.select,i=void 0===r?o:r;return(0,l.useQuery)(["categories",t,n],(function(){return a.GN.getCategories({page:t,limit:n})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:i})}},8228:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var l=n(5861),a=n(4942),o=n(885),r=n(1413),i=n(7757),s=n.n(i),c=n(7313),u=n(3830),d=n(4187),h=n(764),g=n(6130),m=n(2713),v=n.n(m),p=n(6217),y=n(5987),f=n(4042),b=n(5234),x=n(6417),C=["label","required","name","errors"],j=function(e){var t=e.label,n=e.required,l=void 0!==n&&n,a=e.name,o=e.errors,i=(0,y.Z)(e,C);return(0,x.jsxs)("div",{className:"mb-1",children:[(0,x.jsxs)("label",{htmlFor:a,style:{paddingBottom:"5px",display:"inline-block"},className:(0,b.AK)({"p-error":!!o[a]}),children:[t,l?(0,x.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,x.jsx)(f.o,(0,r.Z)({type:"text",className:(0,b.AK)({"p-invalid":!!o[a]},"w-100")},i)),o[a]&&(0,x.jsx)("small",{className:"p-error",children:o[a].message})]})},S=n(4216),k=n(7855),Z=n(5973),T=n(3499),N=n(6230),E=n(9821),w=function(e){var t,n,l,a,o;if(null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.data)return null===e||void 0===e||null===(l=e.data)||void 0===l||null===(a=l.data)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{value:e._id})}))},O=function(){var e=(0,u.k6)(),t=(0,u.UO)().slug,n=(0,h.t)(t),i=n.isLoading,m=n.data,y=n.error,f=n.refetch,C=(0,g.Z)({page:1,limit:999,select:w}),O=C.isLoading,R=C.error,B=C.data,K=(0,h.Z)({page:1,limit:10}).refetch,L=(0,c.useState)({}),D=(0,o.Z)(L,2),_=D[0],I=D[1],F=(0,c.useState)({}),U=(0,o.Z)(F,2),M=U[0],H=(U[1],(0,c.useState)([])),q=(0,o.Z)(H,2),z=q[0],G=q[1],A=(0,c.useState)({}),P=(0,o.Z)(A,2),V=P[0],Q=P[1],W=(0,c.useState)(1),X=(0,o.Z)(W,2),J=X[0],Y=X[1],$=(0,c.useState)(2),ee=(0,o.Z)($,2),te=ee[0],ne=ee[1],le=(0,c.useState)(""),ae=(0,o.Z)(le,2),oe=ae[0],re=ae[1],ie=(0,c.useState)({type:"none",msg:""}),se=(0,o.Z)(ie,2),ce=se[0],ue=se[1],de=(0,d.r)(),he=de.showLoading,ge=de.hideLoading;if((0,c.useEffect)((function(){(i||O)&&he(),i||O||ge()}),[i,O]),(0,c.useEffect)((function(){var e,t;m&&(I({_id:m._id,name:m.name,slug:m.slug,author:m.author}),G(m.categories),re(m.intro||"<p>Gi\u1edbi thi\u1ec7u</p>"),Y(m.progress),ne(m.status),Q({_id:null===(e=m.attachment)||void 0===e?void 0:e._id,src:null===(t=m.attachment)||void 0===t?void 0:t.filename}))}),[m]),i||O)return"";if(y)return"C\xf3 l\u1ed7i x\u1ea3y ra: "+y.message;if(R)return"C\xf3 l\u1ed7i x\u1ea3y ra: "+R.message;if(!m)return"Kh\xf4ng t\xecm th\u1ea5y truy\u1ec7n :((";var me=function(e){return function(t){I((0,r.Z)((0,r.Z)({},_),{},(0,a.Z)({},e,t.target.value)))}},ve=function(){var e=(0,l.Z)(s().mark((function e(t){var n,l,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=(0,r.Z)((0,r.Z)({},_),{},{slug:_.slug?_.slug:v()(_.name,{remove:void 0,lower:!0,strict:!1,locale:"vi"}),intro:oe,attachmentId:V._id,progress:J,status:te,categories:z}),he(),e.prev=3,e.next=6,E.Gr.editStory(n);case 6:ue({type:"SUCCESS",msg:"Th\xe0nh c\xf4ng"}),window.scrollTo(0,0),K(),f(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log({error:e.t0}),ue({type:"ERROR",msg:(null===(l=e.t0.response)||void 0===l||null===(a=l.data)||void 0===a?void 0:a.msg)||"Th\u1ea5t b\u1ea1i! Kh\xf4ng x\xe1c \u0111\u1ecbnh r\xf5 l\u1ed7i. Vui l\xf2ng th\xf4ng b\xe1o cho qu\u1ea3n tr\u1ecb vi\xean"});case 16:ge();case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)(T.z,{icon:"pi pi-angle-left",label:"Danh s\xe1ch truy\u1ec7n",onClick:function(){return e.push("/story")},className:"mb-1 p-button-outlined",type:"submit"})}),(0,x.jsx)("div",{className:"col-8",children:(0,x.jsxs)(Z.Z,{children:[(0,x.jsx)("div",{className:(0,b.AK)({"alert-success":"SUCCESS"===ce.type,"alert-danger":"ERROR"===ce.type,"d-none":"none"===ce.type},"alert"),children:ce.msg}),(0,x.jsxs)("form",{onSubmit:ve,children:[(0,x.jsx)(j,{label:"T\xean truy\u1ec7n",errors:M,name:"name",value:_.name||"",onChange:me("name"),required:!0}),(0,x.jsx)(j,{label:"Slug",errors:M,name:"slug",value:_.slug||"",onChange:me("slug")}),(0,x.jsx)(j,{label:"T\xe1c gi\u1ea3",errors:M,name:"author",value:_.author||"",onChange:me("author")}),(0,x.jsxs)("div",{className:"mb-1",children:[(0,x.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Danh m\u1ee5c"}),(0,x.jsx)(N.N,{className:"w-100",value:z,filter:!0,options:B,onChange:function(e){return G(e.value)},optionLabel:"name",display:"chip"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Gi\u1edbi thi\u1ec7u"}),oe&&(0,x.jsx)(p.Z,{callback:function(e){return re(e)},defaultValue:oe})]}),(0,x.jsx)(T.z,{className:"mt-1 p-button-outlined",type:"submit",children:"X\xe1c nh\u1eadn"})]})]})}),(0,x.jsx)("div",{className:"col-4",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)(Z.Z,{children:[(0,x.jsx)(S.Z,{callback:function(e){Q(e)}}),V.src&&(0,x.jsx)("img",{src:"https://gamemodvip28.net/"+V.src,className:"w-75 mt-1",alt:"imgPreview"})]})}),(0,x.jsx)("div",{className:"col-12 mt-1",children:(0,x.jsxs)(Z.Z,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"T\xecnh tr\u1ea1ng"}),(0,x.jsx)(k.U,{value:J,options:[{name:"\u0110ang c\u1eadp nh\u1eadt",value:1},{name:"Ho\xe0n th\xe0nh",value:2}],onChange:function(e){return Y(e.value)},optionLabel:"name"})]}),(0,x.jsxs)("div",{className:"mt-1",children:[(0,x.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Tr\u1ea1ng th\xe1i"}),(0,x.jsx)(k.U,{value:te,options:[{name:"Nh\xe1p",value:1},{name:"C\xf4ng khai",value:2},{name:"\u1ea8n",value:3}],onChange:function(e){return ne(e.value)},optionLabel:"name"})]})]})})]})})]})}},764:function(e,t,n){n.d(t,{t:function(){return r}});var l=n(56),a=n(9821),o=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return(0,l.useQuery)(["storyDetail",e],(function(){return a.Gr.getStoryDetail(e)}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:t})};t.Z=function(e){var t=e.page,n=e.limit,r=e.select,i=void 0===r?o:r;return(0,l.useQuery)(["stories",t,n],(function(){return a.Gr.getStories({page:t,limit:n})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:i})}},5987:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(3366);function a(e,t){if(null==e)return{};var n,a,o=(0,l.Z)(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}}}]);