(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{123:function(e,t,n){e.exports=n(236)},138:function(e,t,n){e.exports=n(234)},234:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=(n(143),n(38)),l=n(10),u=n(22),s=n(23),m=n(26),p=n(25),d=n(31),h=n(54),f=n(125),g=n(85),b=Object(f.a)({palette:{type:"light",primary:{main:"#5E68ED"},secondary:{light:g.a[700],main:"#FDB915"}},typography:{fontFamily:"sans-serif"},props:{MuiButtonBase:{disableRipple:!0},MuiDialog:{transitionDuration:100}},overrides:{MuiButton:{root:{"&:hover":{transition:"none"}}}}}),v=b.zIndex.modal+100+100+100,E=n(33),y=n(24),x=n(91),k=n(94),O=n(278),j=n(84),w=n(268),C=n(279),A=n(280),S=n(283),T=n(28);function _(){var e=Object(l.a)(["\n  h1 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 28px;\n    margin: 0 0 12px;\n  }\n  h2 {\n    font-size: 20px;\n    line-height: 24px;\n    margin: 16px 0 8px;\n  }\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: 600;\n    margin: 0 0 8px;\n  }\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: 16px;\n    line-height: 20px;\n  }\n  ol,\n  ul {\n    margin: 8px 0;\n    padding: 0;\n    margin-block-start: 0.25em;\n    margin-block-end: 0.25em;\n    padding-inline-start: 16px;\n  }\n  li {\n    margin-bottom: 0;\n  }\n  p {\n    margin: 0;\n    margin-bottom: 10px;\n    line-height: 20px;\n  }\n  pre {\n    padding: 10px 16px;\n    line-height: 16px;\n  }\n  code {\n    font-size: 12px;\n  }\n  blockquote p {\n    margin: 0;\n  }\n"]);return _=function(){return e},e}function I(){var e=Object(l.a)(["\n  height: 2rem;\n  width: 2rem;\n  font-size: 12px;\n  margin-left: -4px;\n"]);return I=function(){return e},e}function D(){var e=Object(l.a)(["\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  margin: 1px;\n  color: rgba(0, 0, 0, 0.5);\n  opacity: 0.9;\n  &:hover {\n    opacity: 1;\n    background: rgba(220, 220, 220, 1);\n  }\n"]);return D=function(){return e},e}Object(T.c)(D());var N=Object(T.c)(I()),M=(Object(T.c)(_()),n(57)),U=n.n(M);n(60);function z(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}U.a.create({baseUrl:"/",withCredentials:"true",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFToken"}).interceptors.request.use((function(e){return e.headers={Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},e}),(function(e){return Promise.reject(e)}));var F=n(41);function R(e){console.log(e),localStorage.setItem("token",e);var t=new Date((new Date).getTime()+36e5);return localStorage.setItem("expirationDate",t),{type:F.c,payload:{token:e}}}var B=function(e){return function(t){setTimeout((function(){t(Y())}),1e3*e)}};function H(){return{type:F.e}}function L(e,t){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:F.a,payload:{status:e,statusText:t}}}function P(){return{type:F.b}}function Y(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:F.d}}function J(){var e=Object(l.a)(["\n                    min-height: 1.5rem;\n                    padding: 0;\n                    border-radius: 50%:\n                    &:hover {\n                        background-color: initital;\n                    }\n                "]);return J=function(){return e},e}function G(){var e=Object(l.a)(["\n  color: #333;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 0.5rem;\n  max-width: 200px;\n  word-break: break-all;\n  padding: 0.25rem 1rem 0.5rem 1rem;\n  &:focus {\n    outline: none;\n  }\n"]);return G=function(){return e},e}var V=E.a.div(G()),q=function(){var e=r.a.useState(null),t=Object(j.a)(e,2),n=t[0],a=t[1],o=Object(c.c)(),i=Object(h.g)();return r.a.createElement("div",null,r.a.createElement(w.a,{"aria-controls":"user-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},css:Object(T.c)(J())},r.a.createElement(C.a,{css:N,src:"",alt:"user-avatar"},"user")),r.a.createElement(A.a,{anchorEl:n,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},open:Boolean(n),onClose:function(){a(null)},transitionDuration:0,keepMounted:!0},r.a.createElement(V,null,"user"),r.a.createElement(S.a,{onClick:function(){a(null),o(Y()),i.push("/")}},"Logout")))};function W(){var e=Object(l.a)(["\n  font-size: 1.25rem;\n  a {\n    color: #888;\n    &:hover {\n      color: #333;\n    }\n  }\n  .active {\n    color: #333;\n  }\n"]);return W=function(){return e},e}function Q(){var e=Object(l.a)(["\n  font-size: 1rem;\n  color: #333;\n"]);return Q=function(){return e},e}function X(){var e=Object(l.a)(["\n  min-height: ","px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  border-bottom: 1px solid #999;\n"]);return X=function(){return e},e}var $=E.a.div(X(),50),K=E.a.div(Q()),Z=E.a.div(W()),ee=function(){return r.a.createElement($,null,r.a.createElement(K,null,r.a.createElement(Z,null,r.a.createElement(O.a,{smUp:!0,implementation:"css"},r.a.createElement(x.a,{icon:k.a})),r.a.createElement(O.a,{xsDown:!0,implementation:"css"},r.a.createElement(x.a,{icon:k.b})))),r.a.createElement(K,null,"DopeJob"),r.a.createElement(K,null,r.a.createElement(q,null)))},te=n(281),ne=n(271);function ae(){var e=Object(l.a)(["\n          width: ","px;\n          margin-top: 40px;\n        "]);return ae=function(){return e},e}function re(){var e=Object(l.a)(["\n  position: absolute;\n  left: 0px;\n  bottom: 2rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return re=function(){return e},e}function oe(){var e=Object(l.a)(["\n  display: block;\n  color: #8e97d8;\n  font-weight: bold;\n  padding: 6px 20px;\n  text-decoration: none;\n  &:hover {\n    color: #fff;\n    cursor: pointer;\n  }\n  &.active {\n    color: #fff;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n"]);return ie=function(){return e},e}function ce(){var e=Object(l.a)(["\n  height: 100%;\n  background-color: #666eee;\n"]);return ce=function(){return e},e}var le=E.a.div(ce()),ue=E.a.div(ie()),se=Object(T.c)(oe()),me=E.a.div(re()),pe=function(){Object(h.g)();return r.a.createElement(le,null,r.a.createElement(ue,null,"Logo"),r.a.createElement(ne.a,{css:Object(T.c)(ae(),120)},r.a.createElement(d.c,{to:"/",exact:!0,css:se},"Home")),r.a.createElement(me,null))},de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{smUp:!0,implementation:"css"},r.a.createElement(te.a,{variant:"temporary",anchor:"left",ModalProps:{keepMounted:!0}},r.a.createElement(pe,null))),r.a.createElement(O.a,{xsDown:!0,implementation:"css"},r.a.createElement(te.a,{anchor:"left",variant:"permanent"},r.a.createElement(pe,null))))};function he(){var e=Object(l.a)(["\n  "," {\n    margin-left: ","px;\n  }\n"]);return he=function(){return e},e}function fe(){var e=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 0.75rem;\n"]);return fe=function(){return e},e}function ge(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ge=function(){return e},e}var be=E.a.div(ge()),ve=E.a.h1(fe()),Ee=E.a.div(he(),(function(e){return e.theme.breakpoints.up("sm")}),128),ye=function(e){var t=e.children;Object(y.a)();return r.a.createElement(be,null,r.a.createElement(ve,null,"DopeJob"),r.a.createElement("div",null,t),r.a.createElement("div",{className:"fl-l",dangerouslySetInnerHTML:function(){var e=(new Date).getFullYear();return{__html:"&copy; ".concat(e," DopeJob")}}()}))},xe=function(e){var t=e.children,n=Object(y.a)();return r.a.createElement("div",null,r.a.createElement(de,null),r.a.createElement(Ee,{theme:n},r.a.createElement(ee,null),t,r.a.createElement("div",{className:"fl-l",dangerouslySetInnerHTML:function(){var e=(new Date).getFullYear();return{__html:"&copy; ".concat(e," DopeJob")}}()})))},ke=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={theme:"light-theme"},e.toggleThemes=function(){return"light-theme"===e.state.theme?e.setState({theme:"dark-theme"}):e.setState({theme:"light-theme"})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,n=e.children;e.location.pathname,this.state.theme;return r.a.createElement("div",{id:"app"},t?r.a.createElement(xe,null,n):r.a.createElement(ye,null,n))}}]),n}(a.Component),Oe=Object(h.h)(Object(c.b)((function(e){return{isAuthenticated:!!e.auth.isAuthenticated}}))(ke)),je=n(61),we=n(16),Ce=n.n(we),Ae=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleChange=function(t){e.setState(Object(je.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password;e.props.login(a,r)},e}return Object(s.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.props.isAuthenticated||this.props.reset()}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.isAuthenticated,a=this.state,o=a.username,i=a.password,c=null;if(this.props.statusText){var l=Ce()({alert:!0,"alert-danger":0===this.props.statusText.indexOf("Authentication Error"),"alert-success":0!==this.props.statusText.indexOf("Authentication Error")});if(n)return r.a.createElement(h.a,{to:"/mon-compte/profil"});c=r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:l},this.props.statusText)))}return r.a.createElement("div",{className:"container login"},r.a.createElement("h1",null,"Connexion"),r.a.createElement("div",null,c,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"email",onChange:this.handleChange,value:o,name:"username",placeholder:"E-mail"}),r.a.createElement("input",{type:"password",onChange:this.handleChange,value:i,placeholder:"Mot de passe",name:"password"}),r.a.createElement("button",{type:"submit",loading:t.toString(),disabled:t||n},"Connexion")),r.a.createElement("div",null,"Vous n\u2019\xeates pas encore membre ? ",r.a.createElement(d.b,{className:"link",to:"/signup"},"Cr\xe9ez un compte gratuitement"))))}}]),n}(a.Component),Se=Object(c.b)((function(e){return{loading:e.auth.loading,isAuthenticated:e.auth.isAuthenticated,isAuthenticating:e.auth.isAuthenticating,statusText:e.auth.statusText}}),(function(e){return{login:function(t,n){return e(function(e,t){return function(n){n(P()),U.a.post("/rest-auth/login/",{email:e,password:t}).then(z).then((function(e){n(R(e.data.key)),n(B(3600))})).catch((function(e){return e&&"undefined"!==typeof e.response&&401===e.response.status?e.response.json().then((function(e){n(L(401,e.non_field_errors[0]))})):(e&&"undefined"!==typeof e.response&&e.response.status>=500?n(L(500,"A server error occurred while sending your data!")):n(L("Connection Error","An error occurred while sending your data!")),Promise.resolve())}))}}(t,n))},reset:function(){return e(H())}}}))(Ae),Te=n(50),_e=(n(169),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password1:"",password2:""},e.handleChange=function(t){e.setState(Object(je.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.email,r=n.password1,o=n.password2;e.props.signupStudent(a,r,o)},e}return Object(s.a)(n,[{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var e=this.props.loading,t=this.state,n=t.email,a=t.password1,o=t.password2,i=null;if(this.props.statusText){var c=Ce()({alert:!0,"alert-danger":0===this.props.statusText.indexOf("Authentication Error"),"alert-success":0!==this.props.statusText.indexOf("Authentication Error")});i=r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:c},this.props.statusText)))}return r.a.createElement("div",{className:"container signup"},r.a.createElement("h1",null,"Cr\xe9er un compte gratuitement"),r.a.createElement(Te.d,null,r.a.createElement(Te.b,null,r.a.createElement(Te.a,null,"Etudiant"),r.a.createElement(Te.a,null,"Employ\xe9"),r.a.createElement(Te.a,null,"Entreprise")),r.a.createElement(Te.c,null,r.a.createElement("h2",null,"Any content 1")),r.a.createElement(Te.c,null,r.a.createElement("h2",null,"Any content 2")),r.a.createElement(Te.c,null,r.a.createElement("h2",null,"Any content 3"),r.a.createElement("div",null,i,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"email",onChange:this.handleChange,value:n,name:"email",placeholder:"E-mail"}),r.a.createElement("input",{type:"password",onChange:this.handleChange,value:a,placeholder:"Mot de passe",name:"password1"}),r.a.createElement("input",{type:"password",onChange:this.handleChange,value:o,placeholder:"Confirmer mot de passe",name:"password2"}),r.a.createElement("button",{type:"submit",loading:e.toString(),disabled:e},"Connexion")),r.a.createElement("div",null,"Vous avez un compte ? ",r.a.createElement(d.b,{to:"/login"},"Connectez-vous")),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/"},"Mot de passe oubli\xe9 ?"))))))}}]),n}(a.Component)),Ie=Object(c.b)((function(e){return{loading:e.auth.loading,isAuthenticated:e.auth.isAuthenticated,isAuthenticating:e.auth.isAuthenticating,statusText:e.auth.statusText}}),(function(e){return{signupStudent:function(t,n,a,r,o,i,c,l,u,s,m,p){return e(function(e,t,n,a,r,o,i,c,l,u,s,m){return function(p){p(P()),U.a.post("/api-authentication/student-registration",{username:e,email:t,password1:n,password2:a,last_name:r,first_name:o,birth_date:i,home_phone_number:c,mobile_phone_number:l,year:u,cursus:s,faculty:m}).then((function(e){p(R(e.data.key)),p(B(3600))})).catch((function(e){p(L(401,e))}))}}(t,n,a,r,o,i,c,l,u,s,m,p))},signupEmployee:function(t,n,a,r,o,i,c,l,u,s,m,p){return e(function(e,t,n,a,r,o,i,c,l,u,s,m){return function(p){p(P()),U.a.post("/api-authentication/employee-registration",{username:e,email:t,password1:n,password2:a,last_name:r,first_name:o,birth_date:i,home_phone_number:c,mobile_phone_number:l,office:u,job:m,faculty:s}).then((function(e){p(R(e.data.key)),p(B(3600))})).catch((function(e){p(L(401,e))}))}}(t,n,a,r,o,i,c,l,u,s,m,p))},signupEnterprise:function(t,n,a,r,o,i,c,l,u,s,m,p,d,h){return e(function(e,t,n,a,r,o,i,c,l,u,s,m,p,d){return function(h){h(P()),U.a.post("/api-authentication/enterprise-registration",{username:e,email:t,password1:n,password2:a,last_name:r,first_name:o,birth_date:i,home_phone_number:c,mobile_phone_number:l,logo:u,office:s,company_url:m,address:p,description:d}).then((function(e){h(R(e.data.key)),h(B(3600))})).catch((function(e){h(L(401,e))}))}}(t,n,a,r,o,i,c,l,u,s,m,p,d,h))},reset:function(){return e(H())}}}))(_e),De=n(126),Ne=n(282),Me=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=r.a.useState(t),a=Object(j.a)(n,2),o=a[0],i=a[1],c=r.a.useMemo((function(){var t=Object(De.a)(e);return null!==o&&t.sort((function(e,t){return e[o.key]<t[o.key]?"ascending"===o.direction?-1:1:e[o.key]>t[o.key]?"ascending"===o.direction?1:-1:0})),t}),[e,o]),l=function(e){var t="ascending";o&&o.key===e&&"ascending"===o.direction&&(t="descending"),i({key:e,direction:t})};return{items:c,requestSort:l,sortConfig:o}}(e.products),n=t.items,a=t.requestSort,o=t.sortConfig,i=function(e){if(o)return o.key===e?o.direction:void 0};return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(Ne.a,{onClick:function(){return a("name")},className:i("name")},"Name")),r.a.createElement("th",null,r.a.createElement(Ne.a,{onClick:function(){return a("price")},className:i("price")},"Price")),r.a.createElement("th",null,r.a.createElement(Ne.a,{onClick:function(){return a("stock")},className:i("stock")},"In Stock")))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.stock))}))))},Ue=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Profil"),r.a.createElement(Me,{products:[{id:1,name:"Cheese",price:4.9,stock:20},{id:2,name:"Milk",price:1.9,stock:32},{id:3,name:"Yoghurt",price:2.4,stock:12},{id:4,name:"Heavy Cream",price:3.9,stock:9},{id:5,name:"Butter",price:.9,stock:99},{id:6,name:"Sour Cream ",price:2.9,stock:86},{id:7,name:"Fancy French Cheese \ud83c\uddeb\ud83c\uddf7",price:99,stock:12},{id:11,name:"Cheese",price:4.9,stock:20},{id:22,name:"Milk",price:1.9,stock:32},{id:33,name:"Yoghurt",price:2.4,stock:12},{id:44,name:"Heavy Cream",price:3.9,stock:9},{id:55,name:"Butter",price:.9,stock:99},{id:66,name:"Sour Cream ",price:2.9,stock:86},{id:77,name:"Fancy French Cheese \ud83c\uddeb\ud83c\uddf7",price:99,stock:12},{id:111,name:"Cheese",price:4.9,stock:20},{id:122,name:"Milk",price:1.9,stock:32},{id:133,name:"Yoghurt",price:2.4,stock:12},{id:144,name:"Heavy Cream",price:3.9,stock:9},{id:155,name:"Butter",price:.9,stock:99},{id:166,name:"Sour Cream ",price:2.9,stock:86},{id:177,name:"Fancy French Cheese \ud83c\uddeb\ud83c\uddf7",price:99,stock:12}]}),r.a.createElement(Ne.a,null,"I am using ",r.a.createElement("span",{role:"img","aria-label":""},"\ud83c\udf32")," Evergreen!"),"profile")}}]),n}(a.Component),ze=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Notifications"))}}]),n}(a.Component),Fe=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Vos Annonces"))}}]),n}(a.Component),Re=n(273),Be=n(274),He=n(285),Le=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={selectedIndex:null,tabs:[{id:1,title:"Profil",url:"/mon-compte/profil"},{id:2,title:"Vos annonces",url:"/mon-compte/vos-annonces"},{id:3,title:"Notifications",url:"/mon-compte/notifications"}]},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(Re.a,{display:"flex"},r.a.createElement(Be.a,{marginBottom:16,flexBasis:240,marginRight:24},this.state.tabs.map((function(t,n){return r.a.createElement(He.a,{key:t.id,id:t.id,onSelect:function(){return e.setState({selectedIndex:n})},isSelected:n===e.state.selectedIndex,"aria-controls":"panel-".concat(t.id)},r.a.createElement(d.b,{to:t.url},t.title))}))),r.a.createElement(Re.a,{padding:16,background:"tint1",flex:"1"},this.state.tabs.map((function(t,n){return r.a.createElement(Re.a,{key:t.id,id:"panel-".concat(t.id),role:"tabpanel","aria-labelledby":t.id,"aria-hidden":n!==e.state.selectedIndex,display:n===e.state.selectedIndex?"block":"none"},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/mon-compte/profil",component:Ue}),r.a.createElement(h.b,{path:"/mon-compte/notifications",component:ze}),r.a.createElement(h.b,{path:"/mon-compte/vos-annonces",component:Fe})))}))))}}]),n}(a.Component);var Pe=function(){return r.a.createElement("div",null,"search")};var Ye=function(){return r.a.createElement("div",null,"StaticPage")};var Je=function(){return r.a.createElement("div",null,"StaticPageDetail")};var Ge=function(){return r.a.createElement("div",null,"NoMatchPage")},Ve=function(){return r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/login",component:Se}),r.a.createElement(h.b,{exact:!0,path:"/signup",component:Ie}),r.a.createElement(h.b,{exact:!0,path:"/legal",component:Ye}),r.a.createElement(h.b,{exact:!0,path:"/legal/:slug",component:Je}),r.a.createElement(h.b,{path:"/mon-compte",component:Le}),r.a.createElement(h.b,{exact:!0,path:"/",component:Pe}),r.a.createElement(h.b,{path:"*",component:Ge}))},qe=n(275),We=n(276);function Qe(){var e=Object(l.a)(["\n              .Mui-focusVisible {\n                box-shadow: 0 0 3px 2px ",";\n              }\n              textarea {\n                font-family: inherit;\n              }\n              .MuiAutocomplete-popper {\n                z-index: "," !important;\n              }\n            "]);return Qe=function(){return e},e}var Xe=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(qe.a,{theme:b},r.a.createElement(We.a,null),r.a.createElement(T.a,{styles:Object(T.c)(Qe(),"#98a2de",v)}),r.a.createElement(Oe,this.props,r.a.createElement(Ve,null))))}}]),n}(a.Component),$e=Object(c.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(localStorage.getItem("user"),void 0===t)e(Y());else{var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(Y()):(e(R(t)),e(B((n.getTime()-(new Date).getTime())/1e3)))}}))}}}))(Xe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ke=n(123),Ze=n.n(Ke)()(),et=r.a.createElement(c.a,{store:Ze},r.a.createElement($e,null));i.a.render(et,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},236:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(124),r=n(56),o=n(60),i=n(41),c=(n(95),{token:null,isAuthenticated:!1,isAuthenticating:!1,statusText:null,loading:!1});var l=Object(r.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.b:return Object.assign({},e,{isAuthenticating:!0,statusText:null,loading:!0});case i.c:return Object.assign({},e,{isAuthenticating:!1,isAuthenticated:!0,token:t.payload.token,statusText:"You have been successfully logged in.",loading:!1});case i.a:return Object.assign({},e,{isAuthenticating:!1,isAuthenticated:!1,token:null,statusText:"Authentication Error: ".concat(t.payload.status," - ").concat(t.payload.statusText),loading:!1});case i.e:return Object.assign({},e,{isAuthenticated:!1,token:null,statusText:null});case i.d:return Object.assign({},e,{isAuthenticated:!1,token:null,statusText:"You have been successfully logged out."});default:return e}},routing:o.routerReducer});function u(e,t){var n=Object(o.routerMiddleware)(t),i=Object(r.a)(a.a,n);return Object(r.d)(l,e,i)}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return c}));var a="AUTH_LOGIN_USER_REQUEST",r="AUTH_LOGIN_USER_FAILURE",o="AUTH_LOGIN_USER_SUCCESS",i="AUTH_LOGOUT_USER",c="RESET_AUTH_LOGIN_USER_FAILURE"}},[[138,1,2]]]);
//# sourceMappingURL=main.52e39a07.chunk.js.map