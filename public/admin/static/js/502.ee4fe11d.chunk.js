"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[502],{6217:function(e,t,n){var a=n(7326),r=n(5671),o=n(9521),l=n(136),i=n(8347),s=n(7313),c=n(2500),d=n(2624),u=n(6417),h={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function g(e){return"blockquote"===e.getType()?"RichEditor-blockquote":null}var p=function(e){(0,l.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return(0,o.Z)(n,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),(0,u.jsx)("span",{className:e,onMouseDown:this.onToggle,children:this.props.label})}}]),n}(s.Component),y=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],m=function(e){var t=e.editorState,n=t.getSelection(),a=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return(0,u.jsx)("div",{className:"RichEditor-controls",children:y.map((function(t){return(0,u.jsx)(p,{active:t.style===a,label:t.label,onToggle:e.onToggle,style:t.style},t.label)}))})},f=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],v=function(e){var t=e.editorState.getCurrentInlineStyle();return(0,u.jsx)("div",{className:"RichEditor-controls",children:f.map((function(n){return(0,u.jsx)(p,{active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style},n.label)}))})},b=function(e){(0,l.Z)(n,e);var t=(0,i.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).componentDidMount=function(){o.props.defaultValue&&o.setState({editorState:c.EditorState.createWithContent(c.ContentState.createFromBlockArray((0,c.convertFromHTML)(o.props.defaultValue)))})},o.state={editorState:c.EditorState.createEmpty()},o.onChange=function(e){o.setState({editorState:e},(function(){o.props.callback((0,d.E)(o.state.editorState.getCurrentContent()))}))},o.handleKeyCommand=o._handleKeyCommand.bind((0,a.Z)(o)),o.mapKeyToEditorCommand=o._mapKeyToEditorCommand.bind((0,a.Z)(o)),o.toggleBlockType=o._toggleBlockType.bind((0,a.Z)(o)),o.toggleInlineStyle=o._toggleInlineStyle.bind((0,a.Z)(o)),o}return(0,o.Z)(n,[{key:"_handleKeyCommand",value:function(e,t){var n=c.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return(0,c.getDefaultKeyBinding)(e);var t=c.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleBlockType",value:function(e){this.onChange(c.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(c.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),(0,u.jsxs)("div",{className:"RichEditor-root",children:[(0,u.jsx)(m,{editorState:e,onToggle:this.toggleBlockType}),(0,u.jsx)(v,{editorState:e,onToggle:this.toggleInlineStyle}),(0,u.jsx)("div",{className:t,children:(0,u.jsx)(c.Editor,{blockStyleFn:g,customStyleMap:h,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,spellCheck:!0})})]})}}]),n}(s.Component);t.Z=b},2008:function(e,t,n){var a=n(1413),r=n(5987),o=n(4042),l=n(5234),i=n(6417),s=["label","required","name","errors"];t.Z=function(e){var t=e.label,n=e.required,c=void 0!==n&&n,d=e.name,u=e.errors,h=(0,r.Z)(e,s);return(0,i.jsxs)("div",{className:"mb-1",children:[(0,i.jsxs)("label",{htmlFor:d,style:{paddingBottom:"5px",display:"inline-block"},className:(0,l.AK)({"p-error":!!u[d]}),children:[t,c?(0,i.jsx)("span",{style:{color:"#f19ea6"},children:"*"}):""]}),(0,i.jsx)(o.o,(0,a.Z)({type:"text",className:(0,l.AK)({"p-invalid":!!u[d]},"w-100")},h)),u[d]&&(0,i.jsx)("small",{className:"p-error",children:u[d].message})]})}},4187:function(e,t,n){n.d(t,{r:function(){return o}});var a=n(7313),r=n(5833),o=function(){var e=(0,a.useContext)(r.Q);return{showLoading:e.showLoading,hideLoading:e.hideLoading}}},1906:function(e,t,n){var a=n(56),r=n(1128),o=function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data};t.Z=function(e){var t=e.page,n=e.limit,l=e.storyId,i=e.select,s=void 0===i?o:i;return(0,a.useQuery)(["chapters",t,n,l],(function(){return r.jj.getChaptersByStory({page:t,limit:n,storyId:l})}),{retryDelay:5e3,refetchOnReconnect:!0,refetchOnWindowFocus:!1,refetchOnMount:!1,select:s})}},1502:function(e,t,n){n.r(t);var a=n(4942),r=n(1413),o=n(5861),l=n(885),i=n(7757),s=n.n(i),c=n(7313),d=n(4187),u=n(3830),h=n(1906),g=n(1128),p=n(6217),y=n(3499),m=n(5973),f=n(7855),v=n(2008),b=n(6417);t.default=function(){var e=(0,u.k6)(),t=(0,u.UO)().storyId,n=(0,u.UO)().order,i=(0,h.Z)({page:1,limit:10,storyId:t}).refetch,x=(0,c.useState)({data:void 0,isLoading:!1,error:void 0}),C=(0,l.Z)(x,2),j=C[0],k=j.data,S=j.isLoading,Z=j.error,E=C[1],T=(0,c.useState)({}),N=(0,l.Z)(T,2),B=N[0],I=N[1],L=(0,c.useState)({}),w=(0,l.Z)(L,1)[0],O=(0,c.useState)(""),R=(0,l.Z)(O,2),K=R[0],D=R[1],U=(0,c.useState)(2),_=(0,l.Z)(U,2),F=_[0],M=_[1],q=(0,d.r)(),H=q.showLoading,A=q.hideLoading;(0,c.useEffect)((function(){S&&H(),S||A()}),[S]),(0,c.useEffect)((function(){k&&(I({name:k.name,_id:k._id}),M(k.status||2),D(k.content))}),[k]);var z=function(){var e=(0,o.Z)(s().mark((function e(){var a,r,o,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E({isLoading:!0,error:null,data:void 0}),e.prev=1,e.next=4,g.jj.getChapterOfStory({storyId:t,order:n});case 4:null!==(a=e.sent)&&void 0!==a&&a.data&&E({isLoading:!1,error:null,data:null===a||void 0===a||null===(r=a.data)||void 0===r?void 0:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),E({isLoading:!1,error:(null===(o=e.t0.response)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.msg)||"Error",data:null});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();if((0,c.useEffect)((function(){z()}),[]),S)return"";if(Z)return"C\xf3 l\u1ed7i x\u1ea3y ra: "+Z.message;if(!k)return"Kh\xf4ng t\xecm th\u1ea5y ch\u01b0\u01a1ng :((";var P,V=function(){var n=(0,o.Z)(s().mark((function n(a){var o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),o=(0,r.Z)((0,r.Z)({},B),{},{storyId:t,content:K,status:F}),H(),n.prev=3,n.next=6,g.jj.editChapter(o);case 6:i(),e.push("/chapter/story-"+t),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(3),alert("ERROR"),console.log({error:n.t0});case 14:A();case 15:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("div",{className:"col-12",children:(0,b.jsx)(y.z,{icon:"pi pi-angle-left",label:"Danh s\xe1ch ch\u01b0\u01a1ng",onClick:function(){return e.push("/chapter/story-"+t)},className:"mb-1 p-button-outlined",type:"submit"})}),(0,b.jsx)("div",{className:"col-9",children:(0,b.jsx)(m.Z,{children:(0,b.jsxs)("form",{onSubmit:V,children:[(0,b.jsx)(v.Z,{label:"T\xean ch\u01b0\u01a1ng",errors:w,name:"name",value:B.name||"",onChange:(P="name",function(e){I((0,r.Z)((0,r.Z)({},B),{},(0,a.Z)({},P,e.target.value)))}),required:!0}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"N\u1ed9i dung"}),K?(0,b.jsx)(p.Z,{callback:function(e){return D(e)},defaultValue:K}):""]}),(0,b.jsx)(y.z,{className:"mt-1 p-button-outlined",type:"submit",children:"X\xe1c nh\u1eadn"})]})})}),(0,b.jsx)("div",{className:"col-3",children:(0,b.jsx)("div",{className:"row",children:(0,b.jsx)("div",{className:"col-12",children:(0,b.jsx)(m.Z,{children:(0,b.jsxs)("div",{className:"mt-1",children:[(0,b.jsx)("label",{style:{paddingBottom:"5px",display:"inline-block"},children:"Tr\u1ea1ng th\xe1i"}),(0,b.jsx)(f.U,{value:F,options:[{name:"Nh\xe1p",value:1},{name:"C\xf4ng khai",value:2},{name:"\u1ea8n",value:3}],onChange:function(e){return M(e.value)},optionLabel:"name"})]})})})})})]})}},5987:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(3366);function r(e,t){if(null==e)return{};var n,r,o=(0,a.Z)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}}}]);