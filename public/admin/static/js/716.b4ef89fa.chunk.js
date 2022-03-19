"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[716],{6217:function(e,t,n){var l=n(7326),o=n(5671),a=n(9521),r=n(136),i=n(8347),s=n(7313),c=n(2500),d=n(2624),u=n(6417),h={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function g(e){return"blockquote"===e.getType()?"RichEditor-blockquote":null}var m=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return(0,a.Z)(n,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),(0,u.jsx)("span",{className:e,onMouseDown:this.onToggle,children:this.props.label})}}]),n}(s.Component),y=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],p=function(e){var t=e.editorState,n=t.getSelection(),l=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return(0,u.jsx)("div",{className:"RichEditor-controls",children:y.map((function(t){return(0,u.jsx)(m,{active:t.style===l,label:t.label,onToggle:e.onToggle,style:t.style},t.label)}))})},v=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],f=function(e){var t=e.editorState.getCurrentInlineStyle();return(0,u.jsx)("div",{className:"RichEditor-controls",children:v.map((function(n){return(0,u.jsx)(m,{active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style},n.label)}))})},b=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(e){var a;return(0,o.Z)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.props.defaultValue&&a.setState({editorState:c.EditorState.createWithContent(c.ContentState.createFromBlockArray((0,c.convertFromHTML)(a.props.defaultValue)))})},a.state={editorState:c.EditorState.createEmpty()},a.onChange=function(e){a.setState({editorState:e},(function(){a.props.callback((0,d.E)(a.state.editorState.getCurrentContent()))}))},a.handleKeyCommand=a._handleKeyCommand.bind((0,l.Z)(a)),a.mapKeyToEditorCommand=a._mapKeyToEditorCommand.bind((0,l.Z)(a)),a.toggleBlockType=a._toggleBlockType.bind((0,l.Z)(a)),a.toggleInlineStyle=a._toggleInlineStyle.bind((0,l.Z)(a)),a}return(0,a.Z)(n,[{key:"_handleKeyCommand",value:function(e,t){var n=c.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return(0,c.getDefaultKeyBinding)(e);var t=c.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleBlockType",value:function(e){this.onChange(c.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(c.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),(0,u.jsxs)("div",{className:"RichEditor-root",children:[(0,u.jsx)(p,{editorState:e,onToggle:this.toggleBlockType}),(0,u.jsx)(f,{editorState:e,onToggle:this.toggleInlineStyle}),(0,u.jsx)("div",{className:t,children:(0,u.jsx)(c.Editor,{blockStyleFn:g,customStyleMap:h,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,spellCheck:!0})})]})}}]),n}(s.Component);t.Z=b},6110:function(e,t,n){var l=n(1413),o=n(4042),a=n(5234),r=n(6417);t.Z=function(e){var t=e.label,n=e.required,i=void 0!==n&&n,s=e.register,c=e.name,d=e.errors;return(0,r.jsxs)("div",{className:"mb-1",children:[(0,r.jsxs)("label",{htmlFor:c,style:{paddingBottom:"5px",display:"inline-block"},className:(0,a.AK)({"p-error":!!d[c]}),children:[t,i?(0,r.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,r.jsx)(o.o,(0,l.Z)({type:"text",className:(0,a.AK)({"p-invalid":!!d[c]},"w-100")},s(c,{required:{value:i,message:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"}}))),d[c]&&(0,r.jsx)("small",{className:"p-error",children:d[c].message})]})}},4187:function(e,t,n){n.d(t,{r:function(){return a}});var l=n(7313),o=n(5833),a=function(){var e=(0,l.useContext)(o.Q);return{showLoading:e.showLoading,hideLoading:e.hideLoading}}},8716:function(e,t,n){n.r(t);var l=n(1413),o=n(5861),a=n(885),r=n(7757),i=n.n(r),s=n(7313),c=n(9975),d=n(4187),u=n(3830),h=n(1906),g=n(1128),m=n(6217),y=n(6110),p=n(3499),v=n(5973),f=n(7855),b=n(6417);t.default=function(){var e=(0,u.k6)(),t=(0,u.UO)().storyId,n=(0,h.Z)({page:1,limit:10,storyId:t}).refetch,r=(0,c.cI)(),C=r.formState.errors,x=r.register,k=r.handleSubmit,j=(0,s.useState)(""),S=(0,a.Z)(j,2),T=S[0],Z=S[1],E=(0,s.useState)(2),N=(0,a.Z)(E,2),B=N[0],I=N[1],R=(0,d.r)(),K=R.showLoading,w=R.hideLoading,L=function(){var a=(0,o.Z)(i().mark((function o(a){var r;return i().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=(0,l.Z)((0,l.Z)({},a),{},{storyId:t,content:T,status:B}),K(),o.prev=2,o.next=5,g.jj.createChapter(r);case 5:n(),e.push("/chapter/story-"+t),o.next=13;break;case 9:o.prev=9,o.t0=o.catch(2),alert("ERROR"),console.log({error:o.t0});case 13:w();case 14:case"end":return o.stop()}}),o,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}();return(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("div",{className:"col-12",children:(0,b.jsx)(p.z,{icon:"pi pi-angle-left",label:"Danh s\xe1ch ch\u01b0\u01a1ng",onClick:function(){return e.push("/chapter/story-"+t)},className:"mb-1 p-button-outlined",type:"submit"})}),(0,b.jsx)("div",{className:"col-9",children:(0,b.jsx)(v.Z,{children:(0,b.jsxs)("form",{onSubmit:k(L),children:[(0,b.jsx)(y.Z,{label:"T\xean ch\u01b0\u01a1ng",register:x,errors:C,name:"name"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"N\u1ed9i dung"}),(0,b.jsx)(m.Z,{callback:function(e){return Z(e)}})]}),(0,b.jsx)(p.z,{className:"mt-1 p-button-outlined",type:"submit",children:"Th\xeam ch\u01b0\u01a1ng"})]})})}),(0,b.jsx)("div",{className:"col-3",children:(0,b.jsx)("div",{className:"row",children:(0,b.jsx)("div",{className:"col-12",children:(0,b.jsx)(v.Z,{children:(0,b.jsxs)("div",{className:"mt-1",children:[(0,b.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Tr\u1ea1ng th\xe1i"}),(0,b.jsx)(f.U,{value:B,options:[{name:"Nh\xe1p",value:1},{name:"C\xf4ng khai",value:2},{name:"\u1ea8n",value:3}],onChange:function(e){return I(e.value)},optionLabel:"name"})]})})})})})]})}},1906:function(e,t,n){var l=n(56),o=n(1128),a=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data};t.Z=function(e){var t=e.page,n=e.limit,r=e.storyId,i=e.select,s=void 0===i?a:i;return(0,l.useQuery)(["chapters",t,n,r],(function(){return o.jj.getChaptersByStory({page:t,limit:n,storyId:r})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:s})}}}]);