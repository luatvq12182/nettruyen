"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[728],{6217:function(e,t,n){var l=n(7326),r=n(5671),a=n(9521),i=n(136),o=n(8347),s=n(7313),c=n(2500),d=n(2624),u=n(6417),h={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function m(e){return"blockquote"===e.getType()?"RichEditor-blockquote":null}var g=function(e){(0,i.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return(0,a.Z)(n,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),(0,u.jsx)("span",{className:e,onMouseDown:this.onToggle,children:this.props.label})}}]),n}(s.Component),p=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],v=function(e){var t=e.editorState,n=t.getSelection(),l=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return(0,u.jsx)("div",{className:"RichEditor-controls",children:p.map((function(t){return(0,u.jsx)(g,{active:t.style===l,label:t.label,onToggle:e.onToggle,style:t.style},t.label)}))})},y=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],f=function(e){var t=e.editorState.getCurrentInlineStyle();return(0,u.jsx)("div",{className:"RichEditor-controls",children:y.map((function(n){return(0,u.jsx)(g,{active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style},n.label)}))})},b=function(e){(0,i.Z)(n,e);var t=(0,o.Z)(n);function n(e){var a;return(0,r.Z)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.props.defaultValue&&a.setState({editorState:c.EditorState.createWithContent(c.ContentState.createFromBlockArray((0,c.convertFromHTML)(a.props.defaultValue)))})},a.state={editorState:c.EditorState.createEmpty()},a.onChange=function(e){a.setState({editorState:e},(function(){a.props.callback((0,d.E)(a.state.editorState.getCurrentContent()))}))},a.handleKeyCommand=a._handleKeyCommand.bind((0,l.Z)(a)),a.mapKeyToEditorCommand=a._mapKeyToEditorCommand.bind((0,l.Z)(a)),a.toggleBlockType=a._toggleBlockType.bind((0,l.Z)(a)),a.toggleInlineStyle=a._toggleInlineStyle.bind((0,l.Z)(a)),a}return(0,a.Z)(n,[{key:"_handleKeyCommand",value:function(e,t){var n=c.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return(0,c.getDefaultKeyBinding)(e);var t=c.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleBlockType",value:function(e){this.onChange(c.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(c.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),(0,u.jsxs)("div",{className:"RichEditor-root",children:[(0,u.jsx)(v,{editorState:e,onToggle:this.toggleBlockType}),(0,u.jsx)(f,{editorState:e,onToggle:this.toggleInlineStyle}),(0,u.jsx)("div",{className:t,children:(0,u.jsx)(c.Editor,{blockStyleFn:m,customStyleMap:h,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,spellCheck:!0})})]})}}]),n}(s.Component);t.Z=b},6110:function(e,t,n){var l=n(1413),r=n(4042),a=n(5234),i=n(6417);t.Z=function(e){var t=e.label,n=e.required,o=void 0!==n&&n,s=e.register,c=e.name,d=e.errors;return(0,i.jsxs)("div",{className:"mb-1",children:[(0,i.jsxs)("label",{htmlFor:c,style:{paddingBottom:"5px",display:"inline-block"},className:(0,a.AK)({"p-error":!!d[c]}),children:[t,o?(0,i.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,i.jsx)(r.o,(0,l.Z)({type:"text",className:(0,a.AK)({"p-invalid":!!d[c]},"w-100")},s(c,{required:{value:o,message:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"}}))),d[c]&&(0,i.jsx)("small",{className:"p-error",children:d[c].message})]})}},2002:function(e,t,n){var l=n(1413),r=n(5987),a=n(9094),i=n(5234),o=n(6417),s=["label","required","register","name","errors"];t.Z=function(e){var t=e.label,n=e.required,c=void 0!==n&&n,d=e.register,u=e.name,h=e.errors,m=(0,r.Z)(e,s);return(0,o.jsxs)("div",{className:"mb-1",children:[(0,o.jsxs)("label",{htmlFor:u,style:{paddingBottom:"5px",display:"inline-block"},className:(0,i.AK)({"p-error":!!h[u]}),children:[t,c?(0,o.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,o.jsx)(a.g,(0,l.Z)((0,l.Z)({type:"text",className:(0,i.AK)({"p-invalid":!!h[u]},"w-100"),rows:5},d(u,{required:{value:c,message:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"}})),m)),h[u]&&(0,o.jsx)("small",{className:"p-error",children:h[u].message})]})}},8900:function(e,t,n){var l=n(2713),r=n.n(l),a=n(5973),i=n(7313),o=n(2002),s=n(6110),c=n(6417);t.Z=function(e){var t,n,l,d,u=e.register,h=e.watchFields,m=e.page,g=e.showPreview,p=void 0===g||g;(0,i.useEffect)((function(){console.log(h)}),[h]);var v=(null===(t=h[0])||void 0===t?void 0:t.length)<63?h[0]:(null===(n=h[0])||void 0===n?void 0:n.substr(0,63))+" ...",y=(null===(l=h[2])||void 0===l?void 0:l.length)<153?h[2]:(null===(d=h[2])||void 0===d?void 0:d.substr(0,153))+" ...",f="\u203a truyen \u203a ".concat(h[1]?h[1]:r()(h[3]||"",{remove:void 0,lower:!0,strict:!1,locale:"vi"}));return(0,c.jsxs)(a.Z,{title:"Meta SEO",className:"mt-1",children:[(0,c.jsx)(s.Z,{label:"Meta title",register:u,errors:{},name:"title"}),(0,c.jsx)(o.Z,{label:"Meta description",register:u,errors:{},name:"description"}),p?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"Preview"}),(0,c.jsx)("i",{children:"(Ch\xfa \xfd: K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm th\u1ef1c t\u1ebf c\xf3 th\u1ec3 hi\u1ec3n th\u1ecb kh\xe1c th\u1ebf n\xe0y)"}),(0,c.jsxs)("div",{className:"preview_google_search",children:[(0,c.jsxs)("p",{className:"url",children:["https://"+window.location.hostname,(0,c.jsxs)("span",{className:"breadcrumb",children:[" ","story"===m?f:"\u203a truyen \u203a ten-truyen \u203a chuong-..."]})]}),(0,c.jsx)("h3",{className:"title",children:v||"Title"}),(0,c.jsx)("span",{className:"description",children:y||"description"})]})]}):""]})}},4187:function(e,t,n){n.d(t,{r:function(){return a}});var l=n(7313),r=n(5833),a=function(){var e=(0,l.useContext)(r.Q);return{showLoading:e.showLoading,hideLoading:e.hideLoading}}},7728:function(e,t,n){n.r(t);var l=n(1413),r=n(5861),a=n(885),i=n(7757),o=n.n(i),s=n(7313),c=n(9975),d=n(4187),u=n(3830),h=n(6130),m=n(764),g=n(2713),p=n.n(g),v=n(1128),y=n(6217),f=n(6110),b=n(8900),x=n(4216),j=n(3499),C=n(5973),S=n(7855),k=n(6230),Z=n(5234),N=n(6417);t.default=function(){var e=(0,u.k6)(),t=(0,c.cI)(),n=t.formState.errors,i=t.register,g=t.handleSubmit,w=t.watch,T=(0,h.Z)({page:1,limit:999}),E=T.isLoading,B=T.error,R=T.data,K=T.isFetching,F=(0,m.Z)({page:1,limit:10}).refetch,L=(0,s.useState)(""),O=(0,a.Z)(L,2),D=O[0],_=O[1],I=(0,s.useState)(1),M=(0,a.Z)(I,2),q=M[0],U=M[1],H=(0,s.useState)(2),z=(0,a.Z)(H,2),A=z[0],G=z[1],P=(0,s.useState)({_id:null,src:null}),Q=(0,a.Z)(P,2),W=Q[0],V=Q[1],X=(0,s.useState)([]),J=(0,a.Z)(X,2),Y=J[0],$=J[1],ee=(0,d.r)(),te=ee.showLoading,ne=ee.hideLoading,le=(0,s.useState)({type:"none",msg:""}),re=(0,a.Z)(le,2),ae=re[0],ie=re[1],oe=w(["title","slug","description","name"]);if((0,s.useEffect)((function(){K&&te(),K||ne()}),[K]),E)return"";if(B)return"C\xf3 l\u1ed7i x\u1ea3y ra: "+B.message;var se=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,l.Z)((0,l.Z)({},t),{},{slug:t.slug?t.slug:p()(t.name,{remove:void 0,lower:!0,strict:!1,locale:"vi"}),intro:D,attachmentId:W._id,progress:q,status:A,categories:Y.map((function(e){return e._id}))}),te(),e.prev=2,e.next=5,v.Gr.createStory(n);case 5:ie({type:"SUCCESS",msg:"Th\xe0nh c\xf4ng"}),window.scrollTo(0,0),F(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log({error:e.t0}),ie({type:"ERROR",msg:null===(r=e.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.msg});case 14:ne();case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-12",children:(0,N.jsx)(j.z,{icon:"pi pi-angle-left",label:"Danh s\xe1ch truy\u1ec7n",onClick:function(){return e.push("/story")},className:"mb-1 p-button-outlined",type:"submit"})}),(0,N.jsxs)("div",{className:"col-8",children:[(0,N.jsxs)(C.Z,{children:[(0,N.jsx)("div",{className:(0,Z.AK)({"alert-success":"SUCCESS"===ae.type,"alert-danger":"ERROR"===ae.type,"d-none":"none"===ae.type},"alert"),children:ae.msg}),(0,N.jsxs)("form",{onSubmit:g(se),children:[(0,N.jsx)(f.Z,{label:"T\xean truy\u1ec7n",register:i,errors:n,name:"name",required:!0}),(0,N.jsx)(f.Z,{label:"Slug",register:i,errors:n,name:"slug"}),(0,N.jsx)(f.Z,{label:"T\xe1c gi\u1ea3",register:i,errors:n,name:"author"}),(0,N.jsxs)("div",{className:"mb-1",children:[(0,N.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Danh m\u1ee5c"}),(0,N.jsx)(k.N,{className:"w-100",value:Y,filter:!0,options:R.data,onChange:function(e){return $(e.value)},optionLabel:"name",display:"chip"})]}),(0,N.jsxs)("div",{children:[(0,N.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Gi\u1edbi thi\u1ec7u"}),(0,N.jsx)(y.Z,{callback:function(e){return _(e)}})]}),(0,N.jsx)(j.z,{className:"mt-1 p-button-outlined",type:"submit",children:"Th\xeam truy\u1ec7n"})]})]}),(0,N.jsx)(b.Z,{register:i,watchFields:oe,page:"story"})]}),(0,N.jsx)("div",{className:"col-4",children:(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-12",children:(0,N.jsxs)(C.Z,{children:[(0,N.jsx)(x.Z,{callback:function(e){V(e)}}),W.src&&(0,N.jsx)("img",{src:"http://localhost:3000/upload/"+W.src,className:"w-75 mt-1",alt:"imgPreview"})]})}),(0,N.jsx)("div",{className:"col-12 mt-1",children:(0,N.jsxs)(C.Z,{children:[(0,N.jsxs)("div",{children:[(0,N.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"T\xecnh tr\u1ea1ng"}),(0,N.jsx)(S.U,{value:q,options:[{name:"\u0110ang c\u1eadp nh\u1eadt",value:1},{name:"Ho\xe0n th\xe0nh",value:2}],onChange:function(e){return U(e.value)},optionLabel:"name"})]}),(0,N.jsxs)("div",{className:"mt-1",children:[(0,N.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Tr\u1ea1ng th\xe1i"}),(0,N.jsx)(S.U,{value:A,options:[{name:"Nh\xe1p",value:1},{name:"C\xf4ng khai",value:2},{name:"\u1ea8n",value:3}],onChange:function(e){return G(e.value)},optionLabel:"name"})]})]})})]})})]})}},4216:function(e,t,n){var l=n(885),r=n(6814),a=n(7313),i=n(3499),o=n(6417),s=(0,a.lazy)((function(){return Promise.all([n.e(346),n.e(858)]).then(n.bind(n,9858))}));t.Z=function(e){var t=e.callback,n=e.label,c=void 0===n?"Ch\u1ecdn \u1ea3nh \u0111\u1ea1i di\u1ec7n":n,d=(0,a.useState)(!1),u=(0,l.Z)(d,2),h=u[0],m=u[1],g=(0,a.useState)({_id:null,src:null}),p=(0,l.Z)(g,2),v=p[0],y=p[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.V,{header:"Ch\u1ecdn \u1ea3nh",visible:h,style:{width:"80%"},position:"top",footer:(0,o.jsxs)("div",{children:[(0,o.jsx)(i.z,{label:"\u0110\xf3ng",onClick:function(){return m(!1)},className:"p-button-secondary"}),(0,o.jsx)(i.z,{label:"X\xe1c nh\u1eadn",onClick:function(){t(v),m(!1)},autoFocus:!0})]}),onHide:function(){return m(!1)},children:(0,o.jsx)(a.Suspense,{fallback:"Loading...",children:(0,o.jsx)(s,{callback:function(e){var t=e.value,n=e.src;y({_id:t,src:n})}})})}),(0,o.jsx)(i.z,{onClick:function(){return m(!0)},className:"p-button-outlined",type:"submit",children:c})]})}},6130:function(e,t,n){var l=n(56),r=n(1128),a=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data};t.Z=function(e){var t=e.page,n=e.limit,i=e.select,o=void 0===i?a:i;return(0,l.useQuery)(["categories",t,n],(function(){return r.GN.getCategories({page:t,limit:n})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:o})}},764:function(e,t,n){n.d(t,{t:function(){return i}});var l=n(56),r=n(1128),a=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return(0,l.useQuery)(["storyDetail",e],(function(){return r.Gr.getStoryDetail(e)}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:t})};t.Z=function(e){var t=e.page,n=e.limit,i=e.name,o=e.categories,s=e.select,c=void 0===s?a:s;return(0,l.useQuery)(["stories",t,n,i,o],(function(){return r.Gr.queryStories({page:t,limit:n,name:i,categories:o})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:c})}}}]);