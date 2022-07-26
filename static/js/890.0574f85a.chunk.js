"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[890],{9926:function(e,n,t){t.r(n),t.d(n,{ContactForm:function(){return f}});var r=t(885),a=t(2791),o=t(4141),i=t(9434),c=t(4554),u=t(4741),s=t(6151),l=t(5036),d=t(5264),m=t(184),f=function(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],f=n[1],h=(0,a.useState)(""),p=(0,r.Z)(h,2),v=p[0],x=p[1],b=(0,i.v9)(o.S),g=(0,i.I0)(),Z=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":f(r);break;case"number":x(r);break;default:return}},j=function(){f(""),x("")};return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(c.Z,{component:"form",onSubmit:function(e){if(e.preventDefault(),""!==t.trim()&&""!==v.trim())return j(),function(e){var n=e.name,t=e.number,r=n.toLowerCase();if(!b.find((function(e){return e.name.toLowerCase()===r})))return g(l.uK({name:n,number:t}));d.Notify.failure("".concat(n," is already in contacts"))}({name:t,number:v});d.Notify.failure("Fill in the fields before adding")},sx:{display:"flex",flexDirection:"column",padding:"15px"},children:[(0,m.jsx)(u.Z,{type:"text",name:"name",label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:Z,value:t,variant:"outlined",autoComplete:"off"}),(0,m.jsx)(u.Z,{type:"tel",name:"number",label:"Number",onChange:Z,title:"The phone number must be 13 digits long and may contain numbers, spaces, dashes, paunches, and may begin with +",value:v,variant:"outlined",sx:{mb:2,mt:2},autoComplete:"off"}),(0,m.jsx)(s.Z,{type:"submit",variant:"contained",children:"Add contact"})]})})}},2033:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(1413),a=t(885),o=t(6151),i=t(7247),c=t(2791),u=t(6934),s=t(703),l=t(4554),d=t(890),m=t(4879),f=t(1286),h=t(4741),p=t(9434),v=t(5036),x=t(5264),b=t(184),g=function(e){var n=e.id,t=e.changeModal,r=e.UserName,i=e.UserNumber,u=(0,c.useState)(r),s=(0,a.Z)(u,2),m=s[0],f=s[1],g=(0,c.useState)(i),Z=(0,a.Z)(g,2),j=Z[0],y=Z[1],C=(0,p.I0)(),k=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":f(r);break;case"number":y(r);break;default:return}};return(0,b.jsxs)(l.Z,{component:"form",onSubmit:function(e){if(e.preventDefault(),""!==m.trim()&&""!==j.trim())return C((0,v.Tk)({id:n,number:j,name:m})),t(!1);x.Notify.failure("Fill in the fields")},sx:{display:"flex",flexDirection:"column",padding:"15px"},children:[(0,b.jsx)(d.Z,{variant:"h6",component:"h2",sx:{mb:2},children:"Edit Contact"}),(0,b.jsx)(h.Z,{type:"text",name:"name",label:"Name",onChange:k,value:m,variant:"outlined",autoComplete:"off"}),(0,b.jsx)(h.Z,{type:"tel",name:"number",label:"Number",onChange:k,value:j,variant:"outlined",sx:{mb:2,mt:2},autoComplete:"off"}),(0,b.jsx)(o.Z,{type:"submit",variant:"contained",children:"Add contact"})]})},Z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},j=function(e){var n=e.name,t=e.number,h=e.id,p=e.onDeleteContacts,v=c.useState(!1),x=(0,a.Z)(v,2),j=x[0],y=x[1],C=(0,u.ZP)(s.Z)((function(e){var n=e.theme;return(0,r.Z)((0,r.Z)({backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff"},n.typography.body2),{},{padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary})}));return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(C,{component:"li",sx:{listStyle:"none",display:"flex",justifyContent:"space-between",padding:2,alignItems:"center",color:"black",border:"1px solid #1976d278"},children:[(0,b.jsxs)(l.Z,{sx:{minWidth:100,maxWidth:170,textAlign:"center",alignItems:"center"},children:[(0,b.jsxs)(d.Z,{variant:"body1",component:"h2",sx:{overflow:"hidden"},children:[n,":"]}),(0,b.jsx)(d.Z,{variant:"body1",component:"h2",sx:{overflow:"hidden"},children:t})]}),(0,b.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,b.jsxs)(l.Z,{sx:{marginRight:1},children:[(0,b.jsx)(o.Z,{variant:"outlined",onClick:function(){return y(!0)},children:(0,b.jsx)(f.Z,{})}),(0,b.jsx)(m.Z,{open:j,onClose:function(){return y(!1)},children:(0,b.jsx)(l.Z,{sx:Z,children:(0,b.jsx)(g,{id:h,changeModal:y,UserName:n,UserNumber:t})})})]}),(0,b.jsx)(o.Z,{variant:"outlined",onClick:function(){return p(h)},startIcon:(0,b.jsx)(i.Z,{}),children:"Delete"})]})]})})},y=t(4141),C=t(4942),k=t(3366),w=t(7462),S=t(1184),N=t(5682),A=t(8519),F=t(2466),M=t(1402),D=["component","direction","spacing","divider","children"];function z(e,n){var t=c.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,a){return e.push(r),a<t.length-1&&e.push(c.cloneElement(n,{key:"separator-".concat(a)})),e}),[])}var _=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,r=(0,w.Z)({display:"flex"},(0,S.k9)({theme:t},(0,S.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var a=(0,N.hB)(t),o=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),i=(0,S.P$)({values:n.direction,base:o}),c=(0,S.P$)({values:n.spacing,base:o});r=(0,F.Z)(r,(0,S.k9)({theme:t},c,(function(e,t){return{"& > :not(style) + :not(style)":(0,C.Z)({margin:0},"margin".concat((r=t?i[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,N.NA)(a,e))};var r})))}return r})),I=c.forwardRef((function(e,n){var t=(0,M.Z)({props:e,name:"MuiStack"}),r=(0,A.Z)(t),a=r.component,o=void 0===a?"div":a,i=r.direction,c=void 0===i?"column":i,u=r.spacing,s=void 0===u?0:u,l=r.divider,d=r.children,m=(0,k.Z)(r,D),f={direction:c,spacing:s};return(0,b.jsx)(_,(0,w.Z)({as:o,ownerState:f,ref:n},m,{children:l?z(d,l):d}))})),L=I,P=function(){var e=(0,p.I0)();(0,c.useEffect)((function(){e(v.NJ())}),[e]);var n=(0,p.v9)(y.S),t=(0,p.v9)(y.Y),r=function(n){e(v.GK(n))};return(0,b.jsx)(L,{component:"ul",sx:{padding:0},spacing:1,children:function(){var e=t.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))}().map((function(e){var n=e.name,t=e.number,a=e.id;return(0,b.jsx)(j,{name:n,number:t,id:a,onDeleteContacts:r},a)}))})}},8636:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(9434),a=t(4443),o=t(4141),i=t(4741),c=t(184),u=function(){var e=(0,r.I0)(),n=(0,r.v9)(o.Y);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{variant:"outlined",type:"text",name:"filter",label:"Find contacts by name",value:n,onChange:function(n){e(a.M6(n.currentTarget.value))},sx:{mb:2,mt:2}})})}},6890:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(4554),a=t(890),o=t(184),i=t(9926).ContactForm,c=t(2033).default,u=t(8636).default,s=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Z,{sx:{mb:4},children:[(0,o.jsx)(a.Z,{variant:"h6",component:"h2",children:"Phonebook"}),(0,o.jsx)(i,{})]}),(0,o.jsx)(a.Z,{variant:"h6",component:"h2",children:"Contacts"}),(0,o.jsx)(u,{}),(0,o.jsx)(c,{})]})}},4141:function(e,n,t){t.d(n,{S:function(){return a},Y:function(){return r}});var r=function(e){return e.contacts.filter},a=function(e){return e.contacts.items}},7247:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},1286:function(e,n,t){var r=t(5318);n.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=i}}]);
//# sourceMappingURL=890.0574f85a.chunk.js.map