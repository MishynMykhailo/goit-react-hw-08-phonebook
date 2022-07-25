"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[890],{7500:function(n,e,t){t.r(e),t.d(e,{ContactForm:function(){return h}});var a=t(885),r=t(2791),o="ContactForm_form__dhl+T",u=t(4141),c=t(9434),i=t(4554),s=t(4741),l=t(6151),m=t(5036),f=t(5264),d=t(184),h=function(){var n=(0,r.useState)(""),e=(0,a.Z)(n,2),t=e[0],h=e[1],v=(0,r.useState)(""),b=(0,a.Z)(v,2),x=b[0],p=b[1],C=(0,c.v9)(u.S),j=(0,c.I0)(),Z=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":h(a);break;case"number":p(a);break;default:return}},_=function(){h(""),p("")};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(i.Z,{component:"form",onSubmit:function(n){return n.preventDefault(),_(),function(n){var e=n.name,t=n.number,a=e.toLowerCase();if(!C.find((function(n){return n.name.toLowerCase()===a})))return j(m.uK({name:e,number:t}));f.Notify.failure("".concat(e," is already in contacts"))}({name:t,number:x})},className:o,children:[(0,d.jsx)(s.Z,{type:"text",name:"name",label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:Z,value:t,variant:"standard",autoComplete:"off"}),(0,d.jsx)(s.Z,{type:"tel",name:"number",label:"Number",onChange:Z,title:"The phone number must be 13 digits long and may contain numbers, spaces, dashes, paunches, and may begin with +",value:x,variant:"standard",sx:{mb:2,mt:2},autoComplete:"off"}),(0,d.jsx)(l.Z,{type:"submit",variant:"contained",children:"Add contact"})]})})}},5651:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var a="ContactItem_li__ltr0+",r="ContactItem_divItemContainer__PTtWU",o=t(6151),u=t(7247),c=t(184),i=function(n){var e=n.name,t=n.number,i=n.id,s=n.onDeleteContacts;return(0,c.jsx)("li",{className:a,children:(0,c.jsxs)("div",{className:r,children:[e,": ",t,(0,c.jsx)(o.Z,{variant:"outlined",onClick:function(){return s(i)},startIcon:(0,c.jsx)(u.Z,{}),children:"Delete"})]})})},s=t(9434),l=t(4141),m=t(5036),f=t(2791),d=function(){var n=(0,s.I0)();(0,f.useEffect)((function(){n(m.NJ())}),[n]);var e=(0,s.v9)(l.S),t=(0,s.v9)(l.Y),a=function(e){n(m.GK(e))};return(0,c.jsx)("ul",{children:function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(n){var e=n.name,t=n.number,r=n.id;return(0,c.jsx)(i,{name:e,number:t,id:r,onDeleteContacts:a},r)}))})}},8636:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var a=t(9434),r=t(4443),o=t(4141),u=t(4741),c=t(184),i=function(){var n=(0,a.I0)(),e=(0,a.v9)(o.Y);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(u.Z,{variant:"outlined",type:"text",name:"filter",label:"Find contacts by name",value:e,onChange:function(e){n(r.M6(e.currentTarget.value))},sx:{mb:2,mt:2}})})}},6890:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var a=t(4554),r=t(890),o=t(184),u=t(7500).ContactForm,c=t(5651).default,i=t(8636).default,s=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.Z,{sx:{mb:4},children:[(0,o.jsx)(r.Z,{variant:"h6",component:"h2",children:"Phonebook"}),(0,o.jsx)(u,{})]}),(0,o.jsx)(r.Z,{variant:"h6",component:"h2",children:"Contacts"}),(0,o.jsx)(i,{}),(0,o.jsx)(c,{})]})}},4141:function(n,e,t){t.d(e,{S:function(){return r},Y:function(){return a}});var a=function(n){return n.contacts.filter},r=function(n){return n.contacts.items}},7247:function(n,e,t){var a=t(5318);e.Z=void 0;var r=a(t(5649)),o=t(184),u=(0,r.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=u}}]);
//# sourceMappingURL=890.11ccba61.chunk.js.map