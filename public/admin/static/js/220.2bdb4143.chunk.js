"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[220],{6217:function(e,t,n){var l=n(7326),a=n(5671),i=n(9521),r=n(136),o=n(8347),s=n(7313),c=n(2500),d=n(2624),u=n(6417),h={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function m(e){return"blockquote"===e.getType()?"RichEditor-blockquote":null}var g=function(e){(0,r.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return(0,i.Z)(n,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),(0,u.jsx)("span",{className:e,onMouseDown:this.onToggle,children:this.props.label})}}]),n}(s.Component),p=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],v=function(e){var t=e.editorState,n=t.getSelection(),l=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return(0,u.jsx)("div",{className:"RichEditor-controls",children:p.map((function(t){return(0,u.jsx)(g,{active:t.style===l,label:t.label,onToggle:e.onToggle,style:t.style},t.label)}))})},y=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],f=function(e){var t=e.editorState.getCurrentInlineStyle();return(0,u.jsx)("div",{className:"RichEditor-controls",children:y.map((function(n){return(0,u.jsx)(g,{active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style},n.label)}))})},x=function(e){(0,r.Z)(n,e);var t=(0,o.Z)(n);function n(e){var i;return(0,a.Z)(this,n),(i=t.call(this,e)).componentDidMount=function(){i.props.defaultValue&&i.setState({editorState:c.EditorState.createWithContent(c.ContentState.createFromBlockArray((0,c.convertFromHTML)(i.props.defaultValue)))})},i.state={editorState:c.EditorState.createEmpty()},i.onChange=function(e){i.setState({editorState:e},(function(){i.props.callback((0,d.E)(i.state.editorState.getCurrentContent()))}))},i.handleKeyCommand=i._handleKeyCommand.bind((0,l.Z)(i)),i.mapKeyToEditorCommand=i._mapKeyToEditorCommand.bind((0,l.Z)(i)),i.toggleBlockType=i._toggleBlockType.bind((0,l.Z)(i)),i.toggleInlineStyle=i._toggleInlineStyle.bind((0,l.Z)(i)),i}return(0,i.Z)(n,[{key:"_handleKeyCommand",value:function(e,t){var n=c.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return(0,c.getDefaultKeyBinding)(e);var t=c.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleBlockType",value:function(e){this.onChange(c.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(c.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),(0,u.jsxs)("div",{className:"RichEditor-root",children:[(0,u.jsx)(v,{editorState:e,onToggle:this.toggleBlockType}),(0,u.jsx)(f,{editorState:e,onToggle:this.toggleInlineStyle}),(0,u.jsx)("div",{className:t,children:(0,u.jsx)(c.Editor,{blockStyleFn:m,customStyleMap:h,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,spellCheck:!0})})]})}}]),n}(s.Component);t.Z=x},2008:function(e,t,n){var l=n(1413),a=n(5987),i=n(4042),r=n(5234),o=n(6417),s=["label","required","name","errors"];t.Z=function(e){var t=e.label,n=e.required,c=void 0!==n&&n,d=e.name,u=e.errors,h=(0,a.Z)(e,s);return(0,o.jsxs)("div",{className:"mb-1",children:[(0,o.jsxs)("label",{htmlFor:d,style:{paddingBottom:"5px",display:"inline-block"},className:(0,r.AK)({"p-error":!!u[d]}),children:[t,c?(0,o.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,o.jsx)(i.o,(0,l.Z)({type:"text",className:(0,r.AK)({"p-invalid":!!u[d]},"w-100")},h)),u[d]&&(0,o.jsx)("small",{className:"p-error",children:u[d].message})]})}},1430:function(e,t,n){var l=n(1413),a=n(5987),i=n(9094),r=n(5234),o=n(6417),s=["label","required","name","errors"];t.Z=function(e){var t=e.label,n=e.required,c=void 0!==n&&n,d=e.name,u=e.errors,h=(0,a.Z)(e,s);return(0,o.jsxs)("div",{className:"mb-1",children:[(0,o.jsxs)("label",{htmlFor:d,style:{paddingBottom:"5px",display:"inline-block"},className:(0,r.AK)({"p-error":!!u[d]}),children:[t,c?(0,o.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,o.jsx)(i.g,(0,l.Z)({type:"text",rows:5,style:{lineHeight:"1.4"},className:(0,r.AK)({"p-invalid":!!u[d]},"w-100")},h)),u[d]&&(0,o.jsx)("small",{className:"p-error",children:u[d].message})]})}},4187:function(e,t,n){n.d(t,{r:function(){return i}});var l=n(7313),a=n(5833),i=function(){var e=(0,l.useContext)(a.Q);return{showLoading:e.showLoading,hideLoading:e.hideLoading}}},6556:function(e,t,n){var l=n(56),a=n(6702),i=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data};t.Z=function(e){var t=e.page,n=e.limit,r=e.select,o=void 0===r?i:r;return(0,l.useQuery)(["tags",t,n],(function(){return a.kU.getTags({page:t,limit:n})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:o})}},4216:function(e,t,n){var l=n(885),a=n(6814),i=n(7313),r=n(3499),o=n(6417),s=(0,i.lazy)((function(){return Promise.all([n.e(188),n.e(346),n.e(858)]).then(n.bind(n,9858))}));t.Z=function(e){var t=e.callback,n=e.label,c=void 0===n?"Ch\u1ecdn \u1ea3nh \u0111\u1ea1i di\u1ec7n":n,d=(0,i.useState)(!1),u=(0,l.Z)(d,2),h=u[0],m=u[1],g=(0,i.useState)({_id:null,src:null}),p=(0,l.Z)(g,2),v=p[0],y=p[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.V,{header:"Ch\u1ecdn \u1ea3nh",visible:h,style:{width:"80%"},position:"top",footer:(0,o.jsxs)("div",{children:[(0,o.jsx)(r.z,{label:"\u0110\xf3ng",onClick:function(){return m(!1)},className:"p-button-secondary"}),(0,o.jsx)(r.z,{label:"X\xe1c nh\u1eadn",onClick:function(){t(v),m(!1)},autoFocus:!0})]}),onHide:function(){return m(!1)},children:(0,o.jsx)(i.Suspense,{fallback:"Loading...",children:(0,o.jsx)(s,{callback:function(e){var t=e.value,n=e.src;y({_id:t,src:n})}})})}),(0,o.jsx)(r.z,{onClick:function(){return m(!0)},className:"p-button-outlined",type:"submit",children:c})]})}},6130:function(e,t,n){var l=n(56),a=n(6702),i=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data};t.Z=function(e){var t=e.page,n=e.limit,r=e.select,o=void 0===r?i:r;return(0,l.useQuery)(["categories",t,n],(function(){return a.GN.getCategories({page:t,limit:n})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:o})}},6220:function(e,t,n){n.r(t);var l=n(5861),a=n(4942),i=n(885),r=n(1413),o=n(7757),s=n.n(o),c=n(7313),d=n(3830),u=n(4187),h=n(764),m=n(6130),g=n(2713),p=n.n(g),v=n(6217),y=n(2008),f=n(1430),x=n(4216),b=n(7855),j=n(5973),C=n(3499),Z=n(6230),k=n(5234),S=n(6702),N=n(6556),T=n(6417),w=function(e){var t,n,l,a,i;if(null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.data)return null===e||void 0===e||null===(l=e.data)||void 0===l||null===(a=l.data)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{value:e._id})}))};t.default=function(){var e,t,n,o,g=(0,d.k6)(),E=(0,d.UO)().slug,B=(0,h.t)(E),R=B.isLoading,K=B.data,L=B.error,O=B.refetch,_=(0,m.Z)({page:1,limit:999,select:w}),D=_.isLoading,F=_.error,M=_.data,U=(0,N.Z)({page:1,limit:999,select:w}),q=U.data,I=U.isLoading,H=(0,h.Z)({page:1,limit:10}).refetch,z=(0,c.useState)({}),A=(0,i.Z)(z,2),G=A[0],Q=A[1],V=(0,c.useState)({}),W=(0,i.Z)(V,1)[0],P=(0,c.useState)([]),X=(0,i.Z)(P,2),J=X[0],Y=X[1],$=(0,c.useState)([]),ee=(0,i.Z)($,2),te=ee[0],ne=ee[1],le=(0,c.useState)({}),ae=(0,i.Z)(le,2),ie=ae[0],re=ae[1],oe=(0,c.useState)(1),se=(0,i.Z)(oe,2),ce=se[0],de=se[1],ue=(0,c.useState)(2),he=(0,i.Z)(ue,2),me=he[0],ge=he[1],pe=(0,c.useState)(""),ve=(0,i.Z)(pe,2),ye=ve[0],fe=ve[1],xe=(0,c.useState)({type:"none",msg:""}),be=(0,i.Z)(xe,2),je=be[0],Ce=be[1],Ze=(0,u.r)(),ke=Ze.showLoading,Se=Ze.hideLoading;if((0,c.useEffect)((function(){(R||D)&&ke(),R||D||I||Se()}),[R,D,I]),(0,c.useEffect)((function(){var e,t;K&&(Q({_id:K._id,name:K.name,slug:K.slug,author:K.author,title:K.title,description:K.description}),Y(K.categories||[]),ne(K.tags||[]),fe(K.intro||"<p>Gi\u1edbi thi\u1ec7u</p>"),de(K.progress),ge(K.status),re({_id:null===(e=K.attachment)||void 0===e?void 0:e._id,src:null===(t=K.attachment)||void 0===t?void 0:t.filename}))}),[K]),R||D||I)return"";if(L)return"C\xf3 l\u1ed7i x\u1ea3y ra: "+L.message;if(F)return"C\xf3 l\u1ed7i x\u1ea3y ra: "+F.message;if(!K)return"Kh\xf4ng t\xecm th\u1ea5y truy\u1ec7n :((";var Ne=function(e){return function(t){Q((0,r.Z)((0,r.Z)({},G),{},(0,a.Z)({},e,t.target.value)))}},Te=function(){var e=(0,l.Z)(s().mark((function e(t){var n,l,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=(0,r.Z)((0,r.Z)({},G),{},{slug:G.slug?G.slug:p()(G.name,{remove:void 0,lower:!0,strict:!1,locale:"vi"}),intro:ye,attachmentId:ie._id,progress:ce,status:me,categories:J,tags:te}),ke(),e.prev=3,e.next=6,S.Gr.editStory(n);case 6:Ce({type:"SUCCESS",msg:"Th\xe0nh c\xf4ng"}),window.scrollTo(0,0),H(),O(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log({error:e.t0}),Ce({type:"ERROR",msg:(null===(l=e.t0.response)||void 0===l||null===(a=l.data)||void 0===a?void 0:a.msg)||"Th\u1ea5t b\u1ea1i! Kh\xf4ng x\xe1c \u0111\u1ecbnh r\xf5 l\u1ed7i. Vui l\xf2ng th\xf4ng b\xe1o cho qu\u1ea3n tr\u1ecb vi\xean"});case 16:Se();case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return console.log(K.tags,q),(0,T.jsxs)("div",{className:"row",children:[(0,T.jsx)("div",{className:"col-12",children:(0,T.jsx)(C.z,{icon:"pi pi-angle-left",label:"Danh s\xe1ch truy\u1ec7n",onClick:function(){return g.push("/story")},className:"mb-1 p-button-outlined",type:"submit"})}),(0,T.jsxs)("div",{className:"col-8",children:[(0,T.jsxs)(j.Z,{children:[(0,T.jsx)("div",{className:(0,k.AK)({"alert-success":"SUCCESS"===je.type,"alert-danger":"ERROR"===je.type,"d-none":"none"===je.type},"alert"),children:je.msg}),(0,T.jsxs)("form",{onSubmit:Te,children:[(0,T.jsx)(y.Z,{label:"T\xean truy\u1ec7n",errors:W,name:"name",value:G.name||"",onChange:Ne("name"),required:!0}),(0,T.jsx)(y.Z,{label:"Slug",errors:W,name:"slug",value:G.slug||"",onChange:Ne("slug")}),(0,T.jsx)(y.Z,{label:"T\xe1c gi\u1ea3",errors:W,name:"author",value:G.author||"",onChange:Ne("author")}),(0,T.jsxs)("div",{className:"mb-1",children:[(0,T.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Danh m\u1ee5c"}),(0,T.jsx)(Z.N,{className:"w-100",value:J,filter:!0,options:M,onChange:function(e){return Y(e.value)},optionLabel:"name",display:"chip"})]}),(0,T.jsxs)("div",{className:"mb-1",children:[(0,T.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Tags"}),(0,T.jsx)(Z.N,{className:"w-100",value:te,filter:!0,options:q||[],onChange:function(e){return ne(e.value)},optionLabel:"name",display:"chip"})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Gi\u1edbi thi\u1ec7u"}),ye&&(0,T.jsx)(v.Z,{callback:function(e){return fe(e)},defaultValue:ye})]}),(0,T.jsx)(C.z,{className:"mt-1 p-button-outlined",type:"submit",children:"X\xe1c nh\u1eadn"})]})]}),(0,T.jsxs)(j.Z,{title:"Meta SEO",className:"mt-1",children:[(0,T.jsx)(y.Z,{label:(0,T.jsxs)("span",{children:["Meta title"," ",(0,T.jsxs)("i",{children:["(",(null===(e=G.title)||void 0===e?void 0:e.length)||0," k\xed t\u1ef1)"]})]}),errors:{},name:"title",value:G.title||"",onChange:Ne("title")}),(0,T.jsx)(f.Z,{label:(0,T.jsxs)("span",{children:["Meta description"," ",(0,T.jsxs)("i",{children:["(",(null===(t=G.description)||void 0===t?void 0:t.length)||0," k\xed t\u1ef1)"]})]}),errors:{},name:"description",value:G.description||"",onChange:Ne("description")}),(0,T.jsx)("h2",{children:"Preview"}),(0,T.jsx)("i",{children:"(Ch\xfa \xfd: K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm th\u1ef1c t\u1ebf c\xf3 th\u1ec3 hi\u1ec3n th\u1ecb kh\xe1c th\u1ebf n\xe0y)"}),(0,T.jsxs)("div",{className:"preview_google_search",children:[(0,T.jsxs)("p",{className:"url",children:["https://"+window.location.hostname,(0,T.jsx)("span",{className:"breadcrumb",children:" \u203a truyen \u203a ".concat(G.slug)})]}),(0,T.jsx)("h3",{className:"title",children:G.title||""}),(0,T.jsxs)("span",{className:"description",children:[(null===(n=G.description)||void 0===n?void 0:n.substr(0,153))||"",(null===(o=G.description)||void 0===o?void 0:o.length)>153&&" ..."]})]})]})]}),(0,T.jsx)("div",{className:"col-4",children:(0,T.jsxs)("div",{className:"row",children:[(0,T.jsx)("div",{className:"col-12",children:(0,T.jsxs)(j.Z,{children:[(0,T.jsx)(x.Z,{callback:function(e){re(e)}}),ie.src&&(0,T.jsx)("img",{src:"https://gamemodvip28.net/upload/"+ie.src,className:"w-75 mt-1",alt:"imgPreview"})]})}),(0,T.jsx)("div",{className:"col-12 mt-1",children:(0,T.jsxs)(j.Z,{children:[(0,T.jsxs)("div",{children:[(0,T.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"T\xecnh tr\u1ea1ng"}),(0,T.jsx)(b.U,{value:ce,options:[{name:"\u0110ang c\u1eadp nh\u1eadt",value:1},{name:"Ho\xe0n th\xe0nh",value:2}],onChange:function(e){return de(e.value)},optionLabel:"name"})]}),(0,T.jsxs)("div",{className:"mt-1",children:[(0,T.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Tr\u1ea1ng th\xe1i"}),(0,T.jsx)(b.U,{value:me,options:[{name:"Nh\xe1p",value:1},{name:"C\xf4ng khai",value:2},{name:"\u1ea8n",value:3}],onChange:function(e){return ge(e.value)},optionLabel:"name"})]})]})})]})})]})}},764:function(e,t,n){n.d(t,{t:function(){return r}});var l=n(56),a=n(6702),i=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return(0,l.useQuery)(["storyDetail",e],(function(){return a.Gr.getStoryDetail(e)}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:t})};t.Z=function(e){var t=e.page,n=e.limit,r=e.name,o=e.categories,s=e.select,c=void 0===s?i:s;return(0,l.useQuery)(["stories",t,n,r,o],(function(){return a.Gr.queryStories({page:t,limit:n,name:r,categories:o})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:c})}}}]);