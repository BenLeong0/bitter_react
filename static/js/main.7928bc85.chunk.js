(this.webpackJsonpbitter=this.webpackJsonpbitter||[]).push([[0],{39:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(30),a=n.n(r),i=(n(39),n(2)),o=n(7),l=n(6),u=n(0),j=function(){return document.title="Admin / Bitter",Object(u.jsx)("div",{children:"Admin page"})},d=n(9),b=n(31),O=n(3),f=n.n(O),h=n(4),p=n(14),m=new p.d({UserPoolId:"eu-west-2_QLAkrTR47",ClientId:"4m544sn8a7kf2023cq5qs4polc"}),x=Object(s.createContext)(void 0),g=function(e){var t=e.isLoggedIn,n=e.setIsLoggedIn,c=e.myHandle,r=e.setMyHandle,a=e.children,o="http://localhost:8000/",l=Object(s.useState)(""),j=Object(i.a)(l,2),O=j[0],g=j[1],v=Object(s.useState)(""),w=Object(i.a)(v,2),N=w[0],y=w[1],S=Object(s.useState)(!1),k=Object(i.a)(S,2),I=k[0],C=k[1],F=function(){var e=Object(h.a)(f.a.mark((function e(t,n){var s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"is-following/get?source_id=").concat(t,"&destination_id=").concat(n));case 2:return s=e.sent,e.next=5,s.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){_().then((function(e){n(!0),g(e.sub),r(e.user.username)})).catch((function(e){console.log("yo"),g("")}))}),[]);var _=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){var n=m.getCurrentUser();n?n.getSession(function(){var s=Object(h.a)(f.a.mark((function s(c,r){var a,i;return f.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!c){s.next=4;break}t(),s.next=10;break;case 4:if(!r){s.next=10;break}return s.next=7,new Promise((function(e,t){n.getUserAttributes((function(n,s){if(n)t(n);else if(s){var c,r={},a=Object(b.a)(s);try{for(a.s();!(c=a.n()).done;){var i=c.value,o=i.Name,l=i.Value;r[o]=l}}catch(n){a.e(n)}finally{a.f()}e(r)}}))}));case 7:a=s.sent,i=r.getIdToken().getJwtToken(),e(Object(d.a)(Object(d.a)({user:n,headers:{Authorization:i,"x-api-key":a["custom:apikey"]}},r),a));case 10:case"end":return s.stop()}}),s)})));return function(e,t){return s.apply(this,arguments)}}()):t("Not logged in")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(h.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(o,"create-follow/post?source_id=").concat(t,"&destination_id=").concat(n),{method:"POST"}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.error("Follow error:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(h.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(o,"delete-follow/post?source_id=").concat(t,"&destination_id=").concat(n),{method:"POST"}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.error("Unfollow error:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(h.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,s){var c=new p.b({Username:t,Pool:m}),r=new p.a({Username:t,Password:n});c.authenticateUser(r,{onSuccess:function(t){console.log("onSuccess:",t),e(t)},onFailure:function(e){console.error("onFailure:",e),s(e)},newPasswordRequired:function(t){console.log("newPasswordRequired:",t),e(t)}})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://wvv2lnqscf.execute-api.eu-west-2.amazonaws.com/dev/user-exists?email=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(x.Provider,{value:{authenticate:E,getSession:_,logout:function(){var e=m.getCurrentUser();e&&(e.signOut(),g(""),r(""),n(!1))},isLoggedIn:t,setIsLoggedIn:n,checkIfFollowing:F,currId:N,setCurrId:y,API_URL:o,isFollowing:I,setIsFollowing:C,myId:O,setMyId:g,myHandle:c,createFollowEdge:P,deleteFollowEdge:L,isEmailUsed:A},children:a})},v=(n(47),n(32)),w=(n(48),function(e){var t=e.title,n=e.logo,s=e.link;return Object(u.jsx)("div",{className:"option",children:Object(u.jsxs)(o.b,{to:s,children:[Object(u.jsx)("div",{className:"option-logo-box",children:Object(u.jsx)("img",{src:n,alt:"logo",className:"option-logo"})}),Object(u.jsx)("div",{className:"option-title",children:t})]})})}),N=function(){var e=Object(s.useContext)(x).myHandle;return Object(u.jsxs)("div",{className:"options-userbox",children:["Logged in as: ",Object(u.jsxs)(o.b,{to:"/u/".concat(e),children:["@",e]})]})},y=n.p+"static/media/home.671555e9.svg",S=n.p+"static/media/user.279444fa.svg",k=n.p+"static/media/settings.949b2aef.svg",I=n.p+"static/media/login.58b554af.svg",C=n.p+"static/media/register.2c6615d2.svg",F=function(){var e=Object(s.useContext)(x).isLoggedIn,t=function e(t,n,s){Object(v.a)(this,e),this.title=void 0,this.link=void 0,this.logo=void 0,this.title=t,this.link=n,this.logo=s},n=new t("Home","/home",y),c=new t("My Page","/me",S),r=new t("Settings","/settings",k),a=new t("Login","/login",I),i=new t("Register","/register",C);return Object(u.jsxs)("div",{className:"options-box",children:[Object(u.jsx)(w,Object(d.a)({},n)),e?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(w,Object(d.a)({},c)),Object(u.jsx)(w,Object(d.a)({},r)),Object(u.jsx)("hr",{}),Object(u.jsx)(N,{})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(w,Object(d.a)({},a)),Object(u.jsx)(w,Object(d.a)({},i))]})]})},_=(n(53),function(){return Object(u.jsx)("div",{className:"app-title-box",children:Object(u.jsx)(o.b,{to:"/home",children:Object(u.jsx)("div",{className:"app-title",children:"BitteR"})})})}),P=function(){return Object(u.jsxs)("div",{id:"left-col",className:"main-col",children:[Object(u.jsx)(_,{}),Object(u.jsx)(F,{})]})},L=(n(54),function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)([!1,"50%"]),a=Object(i.a)(r,2),o=a[0],j=a[1],d=Object(l.g)(),b=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),d.push("/u/".concat(n)),c("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("form",{children:[Object(u.jsxs)("span",{className:"textbox",children:["@",Object(u.jsx)("input",{type:"text",name:"url",id:"find-user-input-field",value:n,placeholder:"handle",onChange:function(e){var t=e.target.value;c(t),0===t.length?j([!1,"50%"]):j([!0,"100%"])}})]}),Object(u.jsx)("button",{type:"submit",className:"button-primary",onClick:b,disabled:!o[0],style:{opacity:o[1]},children:"Search"})]})}),E=function(){return Object(u.jsxs)("div",{className:"find-user",children:[Object(u.jsx)("div",{className:"find-user-title",children:"Go to user's page:"}),Object(u.jsx)(L,{})]})},A=(n(55),function(e){var t=e.setIsFollowingSuggested,n=e.user_id,c=Object(s.useContext)(x),r=c.myId,a=c.currId,i=c.setIsFollowing,o=c.createFollowEdge,l=c.isLoggedIn,j=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l?(t(!0),n===a&&i(!0),o(r,n)):console.log("not logged in!");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("button",{className:"button",onClick:j,children:"Follow"})}),U=function(e){var t=e.setIsFollowingSuggested,n=e.user_id,c=Object(s.useContext)(x),r=c.myId,a=c.currId,i=c.setIsFollowing,o=c.deleteFollowEdge,l=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r!==n?(t(!1),n===a&&i(!1),o(r,n)):console.log("can't unfollow yourself!");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("button",{className:"button-primary",onClick:l,children:"Following"})},D=function(e){var t=e.className,n=e.user_id,c=Object(s.useState)(!1),r=Object(i.a)(c,2),a=r[0],o=r[1],l=Object(s.useContext)(x),j=l.checkIfFollowing,d=l.currId,b=l.myId,O=l.isFollowing;return Object(s.useEffect)((function(){j(b,n).then((function(e){return o(e)}))}),[]),Object(s.useEffect)((function(){n===d&&o(O)}),[O]),Object(u.jsx)("div",{className:t,children:a?Object(u.jsx)(U,{user_id:n,setIsFollowingSuggested:o}):Object(u.jsx)(A,{user_id:n,setIsFollowingSuggested:o})})},M=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("hr",{className:"solid"}),Object(u.jsxs)("div",{className:"user-suggestion",children:[Object(u.jsxs)(o.b,{to:"/u/"+e.handle,children:[Object(u.jsx)("div",{className:"user-suggestion-pfp",children:Object(u.jsx)("img",{src:"https://via.placeholder.com/48",alt:"profile pic"})}),Object(u.jsxs)("div",{className:"user-suggestion-info",children:[Object(u.jsx)("div",{className:"user-suggestion-displayname",children:e.display_name}),Object(u.jsxs)("div",{className:"user-suggestion-handle",children:["@",e.handle]})]})]}),Object(u.jsx)(D,{className:"user-suggestion-follow",user_id:e.user_id})]})]})},R=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!1),a=Object(i.a)(r,2),o=a[0],l=a[1],j=Object(s.useContext)(x),b=j.API_URL,O=j.isLoggedIn,p=function(){var e=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch("".concat(b,"user-suggestions/get"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),l(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){p()}),[O]),Object(u.jsxs)("div",{className:"user-suggestions",children:[Object(u.jsx)("div",{className:"user-suggestions-title",children:"Suggested users"}),o?Object(u.jsx)("div",{className:"user-suggestions-loader",children:Object(u.jsx)("div",{className:"loader"})}):Object(u.jsxs)(u.Fragment,{children:[n.map((function(e){return Object(s.createElement)(M,Object(d.a)(Object(d.a)({},e),{},{key:e.handle}))})),Object(u.jsx)("div",{className:"user-suggestions-reroller",children:Object(u.jsx)("button",{onClick:p,children:" Reroll "})})]})]})},H=function(){return Object(u.jsxs)("div",{id:"right-col",className:"main-col",children:[Object(u.jsx)(E,{}),Object(u.jsx)(R,{})]})},T=n(34),B=function(){var e=Object(s.useContext)(x),t=e.API_URL,n=e.myId,c=Object(s.useState)(""),r=Object(i.a)(c,2),a=r[0],o=r[1],l=Object(s.useState)(140),j=Object(i.a)(l,2),d=j[0],b=j[1],O=Object(s.useState)("black"),p=Object(i.a)(O,2),m=p[0],g=p[1],v=Object(s.useState)([!1,"50%"]),w=Object(i.a)(v,2),N=w[0],y=w[1],S=function(){y([!0,"100%"])},k=function(){var e=Object(h.a)(f.a.mark((function e(s){var c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),!(d<0||d>=140)){e.next=4;break}return console.error("Invalid post length."),e.abrupt("return");case 4:(c=new FormData).append("user_id",n),c.append("content",a),r={method:"POST",body:c},fetch("".concat(t,"bit/post"),r).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)})),o("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"postbox-input",children:Object(u.jsxs)("form",{children:[Object(u.jsx)(T.a,{className:"bit-content",id:"postbox-input-field",placeholder:"Post a bit!",value:a,onChange:function(e){var t=e.target.value;o(t),b(140-t.length),t.length>140?(y([!1,"50%"]),g("red")):t.length>110?(S(),g("orange")):(S(),g("black"))}}),Object(u.jsx)("button",{type:"submit",className:"button-primary",onClick:k,disabled:!N[0],style:{opacity:N[1]},children:"Post"}),Object(u.jsxs)("div",{id:"postbox-charcount",style:{color:m},children:["Remaining characters: ",d]})]})})},J=(n(56),function(){return Object(u.jsxs)("div",{className:"postbox",children:[Object(u.jsx)("div",{className:"postbox-pfp",children:Object(u.jsx)("img",{src:"https://via.placeholder.com/48",alt:"profile pic"})}),Object(u.jsx)(B,{})]})}),z=n.p+"static/media/reply.34834fc8.svg",Y=n.p+"static/media/rebit.e12d3005.svg",q=n.p+"static/media/like.231952c6.svg",V=n.p+"static/media/dislike.4c5bf648.svg",G=function(e){var t=Object(s.useContext)(x).API_URL,n=function(){var e=Object(h.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=new FormData).append("username","userben"),n.append("password","passwordman"),fetch("".concat(t,"rest-auth/login/"),{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.log("error",e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(e){console.log(e)};return Object(u.jsxs)("div",{className:"bit-buttons",children:[Object(u.jsx)("input",{type:"image",src:z,alt:"reply button",onClick:function(){console.log("reply to tweet ".concat(e.post_id)),console.log(JSON.stringify(e))}}),Object(u.jsx)("input",{type:"image",src:Y,alt:"rebit button",onClick:function(){console.log("rebit tweet ".concat(e.post_id))}}),Object(u.jsx)("input",{type:"image",src:q,alt:"like button",onClick:n}),Object(u.jsx)("input",{type:"image",src:V,alt:"dislike button",onClick:function(){console.log("dislike tweet ".concat(e.post_id))}})]})};var Q=function(e){var t=function(e){var t=Date.now()-e.getTime(),n=Math.floor(t/1e3),s=Math.floor((n%=31536e3)/86400);if(s){if(s>30){var c=String(e.getDate());return["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "][e.getMonth()]+c+(e.getFullYear()===(new Date).getFullYear()?"":", bitTime.getFullYear()")}return s+"d"}var r=Math.floor((n%=86400)/3600);if(r)return r+"h";var a=Math.floor((n%=3600)/60);if(a)return a+"m";var i=n%60;return i?i+"s":"less than a second"}(new Date(e.post_time));return Object(u.jsxs)("div",{className:"bit",children:[Object(u.jsx)(o.b,{to:"/u/".concat(e.handle),children:Object(u.jsx)("div",{className:"bit-pfp",children:Object(u.jsx)("img",{src:"https://via.placeholder.com/48",alt:"profile pic"})})}),Object(u.jsxs)("div",{className:"bit-content",children:[Object(u.jsxs)("div",{className:"bit-info",children:[Object(u.jsxs)(o.b,{to:"/u/".concat(e.handle),children:[Object(u.jsx)("span",{className:"bit-info-displayname",children:e.display_name}),Object(u.jsxs)("span",{className:"bit-info-handle",children:["@",e.handle]})]}),"\u30fb",Object(u.jsx)(o.b,{to:"/t/".concat(e.post_id),children:Object(u.jsx)("span",{className:"bit-info-time",children:t})})]}),Object(u.jsxs)("div",{className:"bit-text",children:[" ",e.content," "]}),Object(u.jsx)(G,Object(d.a)({},e))]})]})},K=(n(57),function(e){var t=e.bits,n=e.isLoading;return Object(u.jsx)(u.Fragment,{children:n?Object(u.jsx)("div",{className:"bitlist-loader",children:Object(u.jsx)("div",{className:"loader"})}):t.length>0?t.map((function(e,t){return Object(s.createElement)(Q,Object(d.a)(Object(d.a)({},e),{},{key:e.post_id,index:t}))})):Object(u.jsx)("div",{className:"no-bits",children:"No bits found"})})}),W=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!1),a=Object(i.a)(r,2),o=a[0],l=a[1],j=Object(s.useContext)(x),d=(j.API_URL,j.myId);j.getSession;Object(s.useEffect)((function(){b()}),[d]);var b=function(){var e=Object(h.a)(f.a.mark((function e(){var t,n,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),c([]),console.log("fetching bits...",d),t="https://7z39hjjfg1.execute-api.eu-west-2.amazonaws.com/dev/bits/timeline?user_id=".concat(d),e.next=6,fetch(t);case 6:return n=e.sent,e.next=9,n.json();case 9:s=e.sent,c(s),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(K,{bits:n,isLoading:o})},X=(n(58),function(){return document.title="Home / Bitter",Object(u.jsxs)("div",{className:"timeline",children:[Object(u.jsx)(J,{}),Object(u.jsx)(W,{})]})}),Z=(n(59),function(e){e.user_id;return Object(u.jsx)("div",{className:"user-banner",children:Object(u.jsx)("img",{src:"https://via.placeholder.com/600x".concat(150,"?text=Banner"),alt:"profile banner"})})}),$=function(e){e.user_id;return Object(u.jsx)("div",{className:"user-photo",children:Object(u.jsx)("img",{src:"https://via.placeholder.com/".concat(140,"x").concat(140,"/000000/FFFFFF/?text=Profile+picture"),alt:"profile pic"})})},ee=function(e){var t=e.user_id,n=Object(s.useContext)(x),c=n.myId,r=n.setIsFollowing,a=n.createFollowEdge,i=n.isLoggedIn,o=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i?(r(!0),a(c,t)):console.log("not logged in");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("button",{className:"button",onClick:o,children:"Follow"})},te=function(e){var t=e.user_id,n=Object(s.useContext)(x),c=n.myId,r=n.setIsFollowing,a=n.deleteFollowEdge,i=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!1),a(c,t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("button",{className:"button-primary",onClick:i,children:"Following"})},ne=function(){return Object(u.jsx)("button",{className:"button-primary",onClick:function(){return console.log("You can't unfollow yourself!")},children:"Following"})},se=function(e){var t=e.user_id,n=Object(s.useContext)(x),c=n.myId,r=n.isFollowing,a=n.checkIfFollowing,i=n.setIsFollowing;return Object(s.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(c,t);case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a&&i&&function(){e.apply(this,arguments)}()}),[t]),Object(u.jsx)("div",{className:"user-follow-button",children:t===c?Object(u.jsx)(ne,{}):r?Object(u.jsx)(te,{user_id:t}):Object(u.jsx)(ee,{user_id:t})})},ce=function(e){e.updatePageState;var t=e.user,n=["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "];return Object(u.jsxs)("div",{className:"user-info",children:[Object(u.jsx)("div",{className:"user-displayname",onClick:function(){console.log("yo",t)},children:t.display_name}),Object(u.jsx)("div",{id:"user-joindate",children:function(e){if(!e)return"";var t=new Date(e),s=t.getMonth(),c=t.getFullYear();return"Joined: "+n[s]+" "+c}(t.created_on)}),Object(u.jsx)("div",{className:"user-handle",children:t.handle}),Object(u.jsx)("div",{className:"user-bio",children:t.bio}),Object(u.jsxs)("div",{className:"user-tabs",children:[Object(u.jsxs)("div",{className:"user-tab-bits user-current-tab",children:[Object(u.jsx)("b",{children:"5"})," Bits"]}),Object(u.jsxs)("div",{className:"user-tab-replies ",children:[Object(u.jsx)("b",{children:"7"})," Bits and replies"]}),Object(u.jsxs)("div",{className:"user-following",children:[Object(u.jsx)("b",{children:t.following_count})," Following"]}),Object(u.jsxs)("div",{className:"user-followers",children:[Object(u.jsx)("b",{children:t.follower_count})," Followers"]}),Object(u.jsxs)("div",{className:"user-likes",children:[Object(u.jsx)("b",{children:"5"})," Likes"]})]})]})},re=function(e){var t=e.updatePageState,n=e.user;return Object(u.jsxs)("div",{className:"user-header",children:[Object(u.jsx)(Z,{user_id:n.user_id}),Object(u.jsxs)("div",{className:"user-pfp-follow",children:[Object(u.jsx)($,{user_id:n.user_id}),Object(u.jsx)(se,{user_id:n.user_id})]}),Object(u.jsx)(ce,{updatePageState:t,user:n})]})},ae=(n(60),function(e){e.replies;var t=Object(s.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1],a=Object(s.useState)(!1),o=Object(i.a)(a,2),l=o[0],j=o[1],d=Object(s.useContext)(x),b=d.API_URL,O=d.currId;Object(s.useEffect)((function(){p()}),[O]);var p=function(){var e=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("".concat(b,"bits/user?user_id=").concat(O));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n),j(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(K,{bits:c,isLoading:l})}),ie=(n(61),function(e){var t=e.handle;return Object(u.jsxs)("div",{className:"user-not-found",children:["User ",Object(u.jsxs)("span",{className:"user-not-found-handle",children:["@",t]})," could not be found."]})}),oe=(n(62),function(){var e=Object(s.useState)({user_id:""}),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!1),a=Object(i.a)(r,2),o=a[0],j=a[1],d=Object(s.useState)(Object(u.jsx)(ae,{replies:!1})),b=Object(i.a)(d,2),O=b[0],p=b[1];document.title=(n.handle?"@"+n.handle:"user")+" / Bitter";var m=Object(s.useContext)(x),g=m.API_URL,v=m.currId,w=m.setCurrId,N=Object(l.h)().pathname.slice(3),y=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("".concat(g,"user/get?handle=").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,c(s),w(s.user_id),j(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){y(N)}),[]);var S=Object(l.g)();return Object(s.useEffect)((function(){return S.listen((function(e){y(e.pathname.slice(3))}))}),[]),Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)("div",{className:"user-loader",children:Object(u.jsx)("div",{className:"loader"})}):Object(u.jsx)("div",{className:"user-page",children:""!==v?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(re,{updatePageState:function(e){0===e?p(Object(u.jsx)(ae,{replies:!1})):1===e&&p(Object(u.jsx)(ae,{replies:!0}))},user:n}),O]}):Object(u.jsx)(ie,{handle:N})})})}),le=(n(63),function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),a=Object(i.a)(r,2),o=a[0],l=a[1],j=Object(s.useState)(!1),d=Object(i.a)(j,2),b=d[0],O=d[1],m=Object(s.useState)(!0),g=Object(i.a)(m,2),v=g[0],w=g[1],N=Object(s.useState)(!1),y=Object(i.a)(N,2),S=y[0],k=y[1],I=Object(s.useContext)(x),C=I.authenticate,F=I.getSession,_=I.isEmailUsed,P=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("change email"),e.next=4,_(n);case 4:if(!e.sent){e.next=7;break}return O(!0),e.abrupt("return");case 7:F().then((function(e){var t=e.user;C(t.username,o).then((function(){var e=[new p.c({Name:"email",Value:n})];t.updateAttributes(e,(function(e,t){e?console.error(e):k(!0),console.log(t)}))})).catch((function(e){switch(e.code){case"NotAuthorizedException":w(!1)}}))})).catch((function(e){return console.error(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"settings-field",children:[Object(u.jsx)("div",{className:"settings-header",children:"Change email"}),Object(u.jsxs)("form",{onSubmit:P,children:[Object(u.jsxs)("div",{className:"settings-input-field",children:[Object(u.jsx)("div",{className:"settings-input-label",children:"New email:"}),Object(u.jsxs)("div",{className:"settings-input-wrapper",children:[Object(u.jsx)("input",{value:n,onChange:function(e){O(!1),c(e.target.value)},type:"email",className:b?"invalid":""}),b?Object(u.jsx)("div",{className:"form-error-message",children:"An account with this email already exists"}):""]})]}),Object(u.jsxs)("div",{className:"settings-input-field",children:[Object(u.jsx)("div",{className:"settings-input-label",children:"Password:"}),Object(u.jsxs)("div",{className:"settings-input-wrapper",children:[Object(u.jsx)("input",{value:o,onChange:function(e){w(!0),l(e.target.value)},type:"password",className:v?"":"invalid"}),v?"":Object(u.jsx)("div",{className:"form-error-message",children:"Incorrect password"})]})]}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]}),S?Object(u.jsx)("div",{className:"form-success-message",children:"Success! Please check your email to verify the new address"}):"",Object(u.jsx)("hr",{})]})}),ue=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),a=Object(i.a)(r,2),o=a[0],l=a[1],j=Object(s.useState)(""),d=Object(i.a)(j,2),b=d[0],O=d[1];return Object(u.jsxs)("div",{className:"settings-field",children:[Object(u.jsx)("div",{className:"settings-header",children:"Current password:"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("change password")},children:[Object(u.jsxs)("div",{className:"settings-input-field",children:[Object(u.jsx)("div",{className:"settings-input-label",children:"Password:"}),Object(u.jsx)("div",{className:"settings-input-wrapper",children:Object(u.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},type:"password"})})]}),Object(u.jsxs)("div",{className:"settings-input-field",children:[Object(u.jsx)("div",{className:"settings-input-label",children:"New password:"}),Object(u.jsx)("div",{className:"settings-input-wrapper",children:Object(u.jsx)("input",{value:o,onChange:function(e){return l(e.target.value)},type:"password"})})]}),Object(u.jsxs)("div",{className:"settings-input-field",children:[Object(u.jsx)("div",{className:"settings-input-label",children:"Confirm password:"}),Object(u.jsx)("div",{className:"settings-input-wrapper",children:Object(u.jsx)("input",{value:b,onChange:function(e){return O(e.target.value)},type:"password"})})]}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]}),Object(u.jsx)("hr",{})]})},je=function(){var e=Object(s.useContext)(x).logout;return Object(u.jsx)("div",{id:"logout-button",children:Object(u.jsx)("button",{className:"button-primary",onClick:function(t){t.preventDefault(),console.log("logout"),e()},children:"Logout"})})},de=function(){return Object(u.jsx)("div",{id:"delete-account-button",children:Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("delete account")},className:"button-primary",children:"Delete account"})})},be=function(){return document.title="Settings / Bitter",Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsx)("div",{className:"settings-title",children:"Settings"}),Object(u.jsx)(le,{}),Object(u.jsx)(ue,{}),Object(u.jsx)(je,{}),Object(u.jsx)(de,{})]})},Oe=(n(64),function(e){var t=e.setMyHandle;document.title="Login / Bitter";var n=Object(s.useState)(""),c=Object(i.a)(n,2),r=c[0],a=c[1],l=Object(s.useState)(""),j=Object(i.a)(l,2),d=j[0],b=j[1],O=Object(s.useState)(!1),f=Object(i.a)(O,2),h=f[0],p=f[1],m=Object(s.useState)(!1),g=Object(i.a)(m,2),v=g[0],w=g[1],N=Object(s.useContext)(x),y=N.authenticate,S=N.setIsLoggedIn,k=N.setMyId;return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("div",{className:"login-title",children:"Login"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(r,d).then((function(e){console.log("Logged in!",e),k(e.getIdToken().payload.sub),t(e.getIdToken().payload["cognito:username"]),S(!0)})).catch((function(e){switch(e.code){case"UserNotConfirmedException":console.error("Email not verified"),p(!0);break;case"NotAuthorizedException":console.error("Incorrect username or password"),w(!0);break;default:console.error("Failed to login!",e)}}))},children:[Object(u.jsxs)("div",{className:"login-input-field",children:[Object(u.jsx)("div",{className:"login-input-label",children:"Email / Handle:"}),Object(u.jsx)("input",{value:r,onChange:function(e){p(!1),w(!1),a(e.target.value)},type:"text",className:h||v?"invalid":""}),h?Object(u.jsx)("div",{className:"form-error-message",children:"You need to verify your email before logging in"}):""]}),Object(u.jsxs)("div",{className:"login-input-field",children:[Object(u.jsx)("div",{className:"login-input-label",children:"Password:"}),Object(u.jsx)("input",{value:d,onChange:function(e){w(!1),b(e.target.value)},type:"password",className:v?"invalid":""}),v?Object(u.jsx)("div",{className:"form-error-message",children:"Incorrect username or password"}):""]}),Object(u.jsx)("button",{type:"submit",children:"Submit"}),Object(u.jsx)("div",{id:"login-register-link",children:Object(u.jsx)(o.b,{to:"/register",children:"Create an account"})})]})]})}),fe=(n(65),function(){document.title="Register / Bitter";var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),a=Object(i.a)(r,2),l=a[0],j=a[1],d=Object(s.useState)(""),b=Object(i.a)(d,2),O=b[0],g=b[1],v=Object(s.useState)(""),w=Object(i.a)(v,2),N=w[0],y=w[1],S=Object(s.useState)(!1),k=Object(i.a)(S,2),I=k[0],C=k[1],F=Object(s.useState)(!1),_=Object(i.a)(F,2),P=_[0],L=_[1],E=Object(s.useState)(!1),A=Object(i.a)(E,2),U=A[0],D=A[1],M=Object(s.useState)(!1),R=Object(i.a)(M,2),H=R[0],T=R[1],B=Object(s.useState)(!1),J=Object(i.a)(B,2),z=J[0],Y=J[1],q=Object(s.useState)(!1),V=Object(i.a)(q,2),G=V[0],Q=V[1],K=Object(s.useState)(!0),W=Object(i.a)(K,2),X=W[0],Z=W[1],$=Object(s.useState)(!0),ee=Object(i.a)($,2),te=ee[0],ne=ee[1],se=Object(s.useState)(!0),ce=Object(i.a)(se,2),re=ce[0],ae=ce[1],ie=Object(s.useContext)(x).isEmailUsed,oe=function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("register"),!le()){e.next=5;break}return console.log("empty fields!"),e.abrupt("return");case 5:return e.next=7,ie(l);case 7:if(!e.sent){e.next=10;break}return Y(!0),e.abrupt("return");case 10:m.signUp(n,O,[new p.c({Name:"email",Value:l})],[],(function(e,t){if(e){var n=e.code;switch(console.log(e),n){case"UsernameExistsException":T(!0);break;case"InvalidPasswordException":ae(!1);break;default:console.log("an error occured")}}console.log(t)}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=!1;return n.length<1?(console.log("no handle!"),C(!0),e=!0):n.length>25?(console.log("handle too long!"),L(!0),e=!0):ue(n)||(console.log("invalid handle"),Z(!1),e=!0),l.length<1&&(console.log("no email!"),D(!0),e=!0),je(O)||(console.log("invalid password"),ae(!1),e=!0),O!==N&&(Q(!0),e=!0),e},ue=function(e){if(e.length<1)return!1;for(var t=e.split(""),n=0;n<t.length;n++)if(!"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".includes(t[n]))return!1;return!0},je=function(e){if(e.length<8)return!1;var t=e.split(""),n=[!1,!1,!1,!1];return t.forEach((function(e){"abcdefghijklmnopqrstuvwxyz".includes(e)?n[0]=!0:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(e)?n[1]=!0:"0123456789".includes(e)?n[2]=!0:"=+-^$*.[]{}()?\"!@#%&/\\,><':;|_~`".includes(e)&&(n[3]=!0)})),n.every((function(e){return e}))};return Object(u.jsxs)("div",{className:"register",children:[Object(u.jsx)("div",{className:"register-title",children:"Register"}),Object(u.jsxs)("form",{onSubmit:oe,children:[Object(u.jsxs)("div",{className:"register-input-field",children:[Object(u.jsx)("div",{className:"register-input-label ",children:"Handle:"}),Object(u.jsx)("input",{value:n,onChange:function(e){C(!1),L(!1),Z(!0),T(!1),c(e.target.value)},type:"text",className:I||!X||H||P?"invalid":""}),I?Object(u.jsx)("div",{className:"form-error-message",children:"Handle field is empty"}):"",P?Object(u.jsx)("div",{className:"form-error-message",children:"Handle is too long"}):"",X?"":Object(u.jsx)("div",{className:"form-error-message",children:"Invalid handle (no special characters allowed)"}),H?Object(u.jsx)("div",{className:"form-error-message",children:"An account with this handle already exists"}):""]}),Object(u.jsxs)("div",{className:"register-input-field",children:[Object(u.jsx)("div",{className:"register-input-label",children:"Email:"}),Object(u.jsx)("input",{value:l,onChange:function(e){D(!1),Y(!1),ne(!0),j(e.target.value)},type:"email",className:U||z?"invalid":""}),U?Object(u.jsx)("div",{className:"form-error-message",children:"Email field is empty"}):"",z?Object(u.jsx)("div",{className:"form-error-message",children:"An account with this email already exists"}):"",te?"":Object(u.jsx)("div",{className:"form-error-message",children:"Invalid email"})]}),Object(u.jsxs)("div",{className:"register-input-field",children:[Object(u.jsx)("div",{className:"register-input-label",children:"Password:"}),Object(u.jsx)("input",{value:O,onChange:function(e){Q(!1),ae(!0),g(e.target.value)},type:"password",className:!re||G?"invalid":""}),re?"":Object(u.jsx)("div",{className:"form-error-message",children:"Password must be at least 8 characters long, and contain at least one uppercase, lowercase, number and special character."}),Object(u.jsxs)("div",{className:"register-input-field",children:[Object(u.jsx)("div",{className:"register-input-label",children:"Confirm Password:"}),Object(u.jsx)("input",{value:N,onChange:function(e){Q(!1),y(e.target.value)},type:"password",className:!re||G?"invalid":""})]}),G&&re?Object(u.jsx)("div",{className:"form-error-message",children:"! Passwords do not match !"}):""]}),Object(u.jsx)("button",{type:"submit",children:"Submit"}),Object(u.jsxs)("div",{id:"register-login-link",children:["Already have an account? ",Object(u.jsx)(o.b,{to:"/login",children:"Login here"})]})]})]})}),he=function(e){var t=e.Component,n=(e.path,Object(s.useContext)(x).isLoggedIn);return Object(u.jsx)(l.b,{render:function(){return!0===n?Object(u.jsx)(t,{}):Object(u.jsx)(l.a,{to:{pathname:"/login"}})}})},pe=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),a=Object(i.a)(r,2),d=a[0],b=a[1];return Object(u.jsx)(g,{isLoggedIn:n,setIsLoggedIn:c,myHandle:d,setMyHandle:b,children:Object(u.jsx)(o.a,{basename:"/",children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(P,{}),Object(u.jsx)("div",{id:"mid-col",className:"main-col",children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/login",render:function(){return!0===n?Object(u.jsx)(l.a,{to:{pathname:"/home"}}):Object(u.jsx)(Oe,{setMyHandle:b})}}),Object(u.jsx)(l.b,{path:"/register",render:function(){return!0===n?Object(u.jsx)(l.a,{to:{pathname:"/home"}}):Object(u.jsx)(fe,{})}}),Object(u.jsx)(l.b,{path:"/home",exact:!0,render:function(){return Object(u.jsx)(X,{})}}),Object(u.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(l.a,{to:{pathname:"/home"}})}}),Object(u.jsx)(he,{path:"/admin",Component:j}),Object(u.jsx)(he,{path:"/settings",Component:be}),Object(u.jsx)(l.b,{path:"/me",render:function(){return!0===n?Object(u.jsx)(l.a,{to:{pathname:"/u/".concat(d)}}):Object(u.jsx)(l.a,{to:{pathname:"/login"}})}}),Object(u.jsx)(l.b,{path:"/u/:handle",render:function(){return Object(u.jsx)(oe,{})}})]})}),Object(u.jsx)(H,{})]})})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(pe,{})}),document.getElementById("root")),me()}},[[66,1,2]]]);
//# sourceMappingURL=main.7928bc85.chunk.js.map