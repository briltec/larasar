(function(e){function t(t){for(var n,o,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={1:0},a={1:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={2:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{2:"ded37674",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0"}[e]+".css",a=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],d.parentNode.removeChild(d),r(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/quasar/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;i.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"0047":function(e,t,r){},2394:function(e){e.exports=JSON.parse('{"ok":"Ok","cancel":"Annuler","error_alert_title":"Oops...","error_alert_text":"Something went wrong! Please try again.","add_user":"Ajouter un utilisateur","users_list":"Liste des utilisateurs","token_expired_alert_title":"La session a expiré!","token_expired_alert_text":"Veuillez vous reconnecter pour continuer.","login":"S\'identifier","register":"S\'inscrire","page_not_found":"Page Not Found","go_home":"Page d\'accueil","logout":"Se déconnecter","email":"Email","remember_me":"Se souvient de moi","password":"Mot de passe","forgot_password":"Mot de passe oublié?","confirm_password":"Confirmez le mot de passe","name":"Nom","toggle_navigation":"Basculer la navigation","home":"Home","you_are_logged_in":"Vous êtes connecté!","reset_password":"réinitialiser le mot de passe","send_password_reset_link":"Envoyer le lien de réinitialisation du mot de passe","settings":"Paramètres","profile":"Profil","your_info":"Vos infos","info_updated":"Votre information a été mise à jour!","update":"Mise à jour","your_password":"Votre mot de passe","password_updated":"Votre mot de passe a été mis à jour!","new_password":"nouveau mot de passe","login_with":"Connectez-vous avec","register_with":"Inscrivez-vous avec","verify_email":"Vérifier les courriels","send_verification_link":"Envoyer le lien de vérification","resend_verification_link":"Renvoyer le lien de vérification?","failed_to_verify_email":"Échec de la vérification du courrier électronique.","verify_email_address":"Nous vous avons envoyé un email avec un lien de vérification."}')},"2f39":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"authGetter",(function(){return L})),r.d(n,"usersGetter",(function(){return M})),r.d(n,"tokenGetter",(function(){return R}));var o={};r.r(o),r.d(o,"loginMutation",(function(){return V})),r.d(o,"authMutation",(function(){return G})),r.d(o,"usersMutation",(function(){return I})),r.d(o,"logoutMutation",(function(){return T}));var a={};r.r(a),r.d(a,"loginAction",(function(){return H})),r.d(a,"registerAction",(function(){return Y})),r.d(a,"updateAction",(function(){return U})),r.d(a,"authAction",(function(){return K})),r.d(a,"usersAction",(function(){return W})),r.d(a,"socialAuthAction",(function(){return Z})),r.d(a,"logoutAction",(function(){return te}));var i={};r.r(i),r.d(i,"localeGetter",(function(){return ae})),r.d(i,"localesGetter",(function(){return ie})),r.d(i,"servicesGetter",(function(){return se})),r.d(i,"appNameGetter",(function(){return ue}));var s={};r.r(s),r.d(s,"configMutation",(function(){return ce}));var u={};r.r(u),r.d(u,"configAction",(function(){return pe}));var c=r("967e"),l=r.n(c),p=(r("a481"),r("96cf"),r("fa84")),d=r.n(p),f=(r("573e"),r("7d6e"),r("e54f"),r("985d"),r("0047"),r("2b0e")),m=r("42d2"),g=r("b05d"),h=r("2a19"),_=r("515f"),v=r("9c64"),w=r("18d6"),b=r("a639"),y=r("f508");f["a"].use(g["a"],{config:{},iconSet:m["a"],plugins:{Notify:h["a"],Cookies:_["a"],Meta:v["a"],LocalStorage:w["a"],SessionStorage:b["a"],Loading:y["a"]}});var k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},x=[],P={name:"App"},O=P,A=r("2877"),S=Object(A["a"])(O,k,x,!1,null,null,null),j=S.exports,N=r("2f62"),C=r("758b"),E={user:null,users:null,token:C["b"]?_["a"].get("token"):w["a"].getItem("token")||null,cookie:C["b"]};function L(e){return e.user}function M(e){return e.users}function R(e){return e.token}function V(e,t){e.token=t.access_token,e.cookie?_["a"].set("token",t.access_token,{expires:t.remember?t.expires_in:null}):w["a"].set("token",t.access_token,{expires:t.remember?t.expires_in:null})}function G(e,t){var r=t.user;e.user=r}function I(e,t){var r=t.users;e.users=r}function T(e){e.user=null,e.token=null,e.cookie?_["a"].remove("token"):w["a"].remove("token")}r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d");var z=r("c47a"),q=r.n(z);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach((function(t){q()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t){return J.apply(this,arguments)}function J(){return J=d()(l.a.mark((function e(t,r){var n,o,a,i=this;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,o=t.dispatch,e.next=3,C["a"].post("api/users",B({},{locale:C["d"]},{},r)).then((function(e){var t=e.data;n("loginMutation",B({},t,{},r)),o("authAction"),i.$router.push({path:"/"})}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}function Y(e,t){return F.apply(this,arguments)}function F(){return F=d()(l.a.mark((function e(t,r){var n,o;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=t.dispatch,e.next=3,C["a"].post("api/users",B({},{locale:C["d"]},{},r)).then((function(e){r.user="login",n("loginAction",r),h["a"].create({color:"positive",position:"top",message:e.data,icon:"check"})}));case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function U(e,t){return $.apply(this,arguments)}function $(){return $=d()(l.a.mark((function e(t,r){var n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit,n=t.dispatch,C["a"].put("api/users/"+r.id,r).then((function(e){n("authAction"),h["a"].create({color:"positive",position:"top",message:e.data,icon:"check"})}));case 2:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}function K(e){return Q.apply(this,arguments)}function Q(){return Q=d()(l.a.mark((function e(t){var r,n,o;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.getters["tokenGetter"],!r){e.next=13;break}return e.prev=2,e.next=5,C["a"].get("api/user");case 5:n=e.sent,o=n.data,t.commit("authMutation",{user:o}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),h["a"].create({color:"negative",position:"top",message:"authAction "+e.t0,icon:"report_problem"});case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),Q.apply(this,arguments)}function W(e){return X.apply(this,arguments)}function X(){return X=d()(l.a.mark((function e(t){var r,n,o;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.getters["tokenGetter"],!r){e.next=14;break}return e.prev=2,e.next=5,C["a"].get("api/users");case 5:return n=e.sent,o=n.data,t.commit("usersMutation",{users:o}),e.abrupt("return",o);case 11:e.prev=11,e.t0=e["catch"](2),h["a"].create({color:"negative",position:"top",message:"usersAction "+e.t0,icon:"report_problem"});case 14:case"end":return e.stop()}}),e,null,[[2,11]])}))),X.apply(this,arguments)}function Z(e,t){return ee.apply(this,arguments)}function ee(){return ee=d()(l.a.mark((function e(t,r){var n,o,a;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.provider,e.next=3,C["a"].post("/api/login/".concat(n));case 3:return o=e.sent,a=o.data,e.abrupt("return",a.url);case 6:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}function te(e,t){return re.apply(this,arguments)}function re(){return re=d()(l.a.mark((function e(t,r){var n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit;try{C["a"].post("api/users",r)}catch(o){}n("logoutMutation");case 3:case"end":return e.stop()}}),e)}))),re.apply(this,arguments)}var ne={namespaced:!0,state:E,getters:n,mutations:o,actions:a},oe={locale:"",locales:"",services:null,appName:null};function ae(e){return e.locale}function ie(e){return e.locales}function se(e){return e.services}function ue(e){return e.appName}function ce(e,t){var r=t.config,n=t.locale;e.locale=n,e.locales=r.locales,e.services=r.services,e.appName=r.appName}var le=r("8847");function pe(e,t){var r=e.commit;C["b"]?_["a"].set("locale",t,{expires:365}):w["a"].set("locale",t,{expires:365}),le["b"].locale=t,C["a"].post("api/users",{locale:t}).then((function(e){var n=e.data;r("configMutation",{config:n,locale:t})})).catch((function(e){h["a"].create({color:"negative",position:"top",message:"configAction"+e,icon:"report_problem"})}))}var de={namespaced:!0,getters:i,mutations:s,actions:u,state:oe};f["a"].use(N["a"]);var fe=function(){var e=new N["a"].Store({modules:{users:ne,config:de},strict:!1});return e},me=r("8c4f"),ge=[{path:"/",component:function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"f241"))},children:[{path:"/",name:"public.index",component:function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"8b24"))}},{path:"/login",name:"public.login",component:function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"e37c"))}},{path:"/register",name:"public.register",component:function(){return Promise.all([r.e(0),r.e(11)]).then(r.bind(null,"8871"))}},{path:"/password/reset",name:"public.password.reset",component:function(){return Promise.all([r.e(0),r.e(9)]).then(r.bind(null,"e2a4"))}},{path:"/password/reset/:token",name:"public.password.reset.token",component:function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,"d762"))}},{path:"/profile",name:"auth.profile",component:function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"2ff9"))}},{path:"/users",name:"auth.users",component:function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"051b"))}},{path:"/test",name:"auth.test",component:function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"c961"))}}]}];ge.push({path:"*",component:function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"e51e"))}});var he=ge;f["a"].use(me["a"]);var _e=function(){var e=new me["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:he,mode:"hash",base:""});return e},ve=function(){return we.apply(this,arguments)};function we(){return we=d()(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof fe){e.next=6;break}return e.next=3,fe({Vue:f["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=fe;case 7:if(t=e.t0,"function"!==typeof _e){e.next=14;break}return e.next=11,_e({Vue:f["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=_e;case 15:return r=e.t1,t.$router=r,n={el:"#q-app",router:r,store:t,render:function(e){return e(j)}},e.abrupt("return",{app:n,store:t,router:r});case 19:case"end":return e.stop()}}),e)}))),we.apply(this,arguments)}function be(){return ye.apply(this,arguments)}function ye(){return ye=d()(l.a.mark((function e(){var t,r,n,o,a,i,s,u,c;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ve();case 2:t=e.sent,r=t.app,n=t.store,o=t.router,a=!0,i=function(e){a=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),u=[le["a"],C["c"]],c=0;case 11:if(!(!0===a&&c<u.length)){e.next=29;break}if("function"===typeof u[c]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,u[c]({app:r,router:o,store:n,Vue:f["a"],ssrContext:null,redirect:i,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:c++,e.next=11;break;case 29:if(!1!==a){e.next=31;break}return e.abrupt("return");case 31:document.addEventListener("deviceready",(function(){f["a"].prototype.$q.cordova=window.cordova,new f["a"](r)}),!1);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),ye.apply(this,arguments)}be()},"3e1e":function(e){e.exports=JSON.parse('{"ok":"确定","cancel":"取消","error_alert_title":"错误...","error_alert_text":"遇到一些错误，请稍后重试~","add_user":"添加用户","users_list":"用户列表","token_expired_alert_title":"验证过期!","token_expired_alert_text":"请稍后重新登录系统","login":"登录","register":"注册","page_not_found":"页面不存在","go_home":"返回首页","logout":"退出","email":"邮箱","remember_me":"记住我","password":"密码","forgot_password":"忘记密码？","confirm_password":"重复密码","name":"用户名","toggle_navigation":"切换导航","home":"首页","you_are_logged_in":"您已经登录!","reset_password":"重置密码","send_password_reset_link":"发送重置链接","settings":"设置","profile":"个人设置","your_info":"您的个人信息","info_updated":"您的个人信息已经更改!","update":"更新","your_password":"您的密码","password_updated":"您的密码已经更新!","new_password":"新密码","login_with":"登录","register_with":"注册"}')},"758b":function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return l}));r("551c"),r("06db");var n=r("2a19"),o=r("515f"),a=r("18d6"),i=r("8847"),s=r("bc3a"),u=r.n(s),c="false",l=c?o["a"].get("locale"):a["a"].getItem("locale")||i["b"].locale,p=u.a.create({baseURL:"http://larasar.modemb.com"});t["c"]=function(e){var t=e.router,r=e.store,o=e.Vue;p.interceptors.request.use((function(e){var t=r.getters["users/tokenGetter"];return l=r.getters["config/localeGetter"],t&&(e.headers.common["Authorization"]="Bearer ".concat(t)),l&&(e.headers.common["Accept-Language"]=l),e})),p.interceptors.response.use((function(e){return e}),(function(e){var o=e.response.status;return o>=500&&n["a"].create({color:"negative",position:"top",message:"Response interceptor "+o,icon:"report_problem"}),401===o&&r.getters["users/authGetter"]&&n["a"].create({color:"negative",position:"top",message:"Token Expired",icon:"report_problem"}).then((function(){r.commit("users/logoutAction"),t.push({name:"public.login"})})),Promise.reject(e)})),o.prototype.$axios=p,r.dispatch("users/authAction"),r.dispatch("config/configAction",l)}},8847:function(e,t,r){"use strict";var n=r("2b0e"),o=r("a925"),a={failed:"Action failed",success:"Action was successful"},i=r("e088"),s=r("d90a"),u=r("2394"),c=r("3e1e"),l={"en-us":a,en:i,es:s,fr:u,"zh-CN":c};r.d(t,"b",(function(){return p})),n["a"].use(o["a"]);var p=new o["a"]({locale:"en",fallbackLocale:"en",messages:l});t["a"]=function(e){var t=e.app;t.i18n=p}},d90a:function(e){e.exports=JSON.parse('{"ok":"De Acuerdo","cancel":"Cancelar","error_alert_title":"Ha ocurrido un problema","add_user":"Agregar usuario","users_list":"Lista de usuarios","error_alert_text":"¡Algo salió mal! Inténtalo de nuevo.","token_expired_alert_title":"!Sesión Expirada!","token_expired_alert_text":"Por favor inicie sesión de nuevo para continuar.","login":"Iniciar Sesión","register":"Registro","page_not_found":"Página No Encontrada","go_home":"Ir a Inicio","logout":"Cerrar Sesión","email":"Correo Electrónico","remember_me":"Recuérdame","password":"Contraseña","forgot_password":"¿Olvidaste tu contraseña?","confirm_password":"Confirmar Contraseña","name":"Nombre","toggle_navigation":"Cambiar Navegación","home":"Inicio","you_are_logged_in":"¡Has iniciado sesión!","reset_password":"Restablecer la contraseña","send_password_reset_link":"Enviar Enlace de Restablecimiento de Contraseña","settings":"Configuraciones","profile":"Perfil","your_info":"Tu Información","info_updated":"¡Tu información ha sido actualizada!","update":"Actualizar","your_password":"Tu Contraseña","password_updated":"¡Tu contraseña ha sido actualizada!","new_password":"Nueva Contraseña","login_with":"Iniciar Sesión con","register_with":"Registro con"}')},e088:function(e){e.exports=JSON.parse('{"ok":"Ok","cancel":"Cancel","error_alert_title":"Oops...","add_user":"Add User","users_list":"Users List","error_alert_text":"Something went wrong! Please try again.","token_expired_alert_title":"Session Expired!","token_expired_alert_text":"Please log in again to continue.","login":"Log In","register":"Register","page_not_found":"Page Not Found","go_home":"Go Home","logout":"Logout","email":"Email","remember_me":"Remember Me","password":"Password","forgot_password":"Forgot Your Password?","confirm_password":"Confirm Password","name":"Name","toggle_navigation":"Toggle navigation","home":"Home","you_are_logged_in":"You are logged in!","reset_password":"Reset Password","send_password_reset_link":"Send Password Reset Link","settings":"Settings","profile":"Profile","your_info":"Your Info","info_updated":"Your info has been updated!","update":"Update","your_password":"Your Password","password_updated":"Your password has been updated!","new_password":"New Password","login_with":"Login with","register_with":"Register with","verify_email":"Verify Email","send_verification_link":"Send Verification Link","resend_verification_link":"Resend Verification Link ?","failed_to_verify_email":"Failed to verify email.","verify_email_address":"We sent you an email with an the verification link."}')}});