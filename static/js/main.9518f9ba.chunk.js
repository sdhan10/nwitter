(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),s=n(31),i=n.n(s),o=n(7),u=n(21),l=n(6),j=n(8),b=n.n(j),d=n(13),p=n(10),f=n(22),O=n(23);n(44),n(46),n(52);O.a.initializeApp({apiKey:"AIzaSyBMo0scEE8EilGP1S8uZxRPyoopnP3Pwfg",authDomain:"nwitter-7713b.firebaseapp.com",databaseURL:"https://nwitter-7713b.firebaseio.com",projectId:"nwitter-7713b",storageBucket:"nwitter-7713b.appspot.com",messagingSenderId:"386367580742",appId:"1:386367580742:web:2ea8496825688ddd493847"});var h=O.a,m=O.a.auth(),x=O.a.firestore(),g=O.a.storage(),v=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(c.useState)(!0),p=Object(o.a)(j,2),f=p[0],O=p[1],h=Object(c.useState)(""),x=Object(o.a)(h,2),g=x[0],v=x[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&l(a)},y=function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:y,className:"container",children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w,className:"authInput"}),Object(a.jsx)("input",{type:"submit",value:f?"Create Account":"Sign In",className:"authInput authSubmit"}),g&&Object(a.jsx)("span",{className:"authError",children:g})]}),Object(a.jsx)("span",{onClick:function(){O((function(e){return!e}))},className:"authSwitch",children:f?"Sign in.":"Create Account"})]})},w=function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"authContainer",children:[Object(a.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(a.jsx)(v,{}),Object(a.jsxs)("div",{className:"authBtns",children:[Object(a.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(a.jsx)(p.a,{icon:f.b})]}),Object(a.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(a.jsx)(p.a,{icon:f.a})]})]})]})},y=n(33),N=n(18),S=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(c.useState)(t.text),j=Object(o.a)(l,2),f=j[0],O=j[1],h=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,x.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,g.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){u((function(e){return!e}))},v=function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,x.doc("nweets/".concat(t.id)).update({text:f});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"nweet",children:i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(a.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;O(t)},placeholder:"Edit your nweet",value:f,required:!0,autoFocus:!0,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(a.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(a.jsx)("img",{src:t.attachmentUrl}),n&&Object(a.jsxs)("div",{class:"nweet__actions",children:[Object(a.jsx)("span",{onClick:h,children:Object(a.jsx)(p.a,{icon:N.d})}),Object(a.jsx)("span",{onClick:m,children:Object(a.jsx)(p.a,{icon:N.a})})]})]})})},k=n(54),C=function(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(o.a)(n,2),s=r[0],i=r[1],u=Object(c.useState)(""),l=Object(o.a)(u,2),j=l[0],f=l[1],O=function(){var e=Object(d.a)(b.a.mark((function e(n){var a,c,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==s){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===j){e.next=12;break}return c=g.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(j,"data_url");case 8:return r=e.sent,e.next=11,r.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,x.collection("nweets").add(o);case 15:i(""),f("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("form",{onSubmit:O,className:"factoryForm",children:[Object(a.jsxs)("div",{className:"factoryInput__container",children:[Object(a.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(a.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(a.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(a.jsx)("span",{children:"Add photos"}),Object(a.jsx)(p.a,{icon:N.b})]}),Object(a.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;f(t)},n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(a.jsxs)("div",{className:"factoryForm__attachment",children:[Object(a.jsx)("img",{src:j,style:{backgroundImage:j}}),Object(a.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return f("")},children:[Object(a.jsx)("span",{children:"Remove"}),Object(a.jsx)(p.a,{icon:N.c})]})]})]})},I=function(e){var t=e.userObj,n=Object(c.useState)([]),r=Object(o.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){x.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(C,{userObj:t}),Object(a.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(a.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},F=function(e){var t=e.userObj;return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(a.jsx)(p.a,{icon:f.c,color:"#04AAFF",size:"2x"})})}),Object(a.jsx)("li",{children:Object(a.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(a.jsx)(p.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(a.jsx)("span",{style:{marginTop:10},children:t&&t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},A=function(e){var t=e.refreshUser,n=e.userObj,r=Object(c.useState)(n.displayName),s=Object(o.a)(r,2),i=s[0],u=s[1],j=Object(l.g)(),p=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("nweets").where("creatorId","==",n.uid).orderBy("createdAt").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){p()}),[]);var f=function(){var e=Object(d.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===i){e.next=5;break}return e.next=4,n.updateProfile({displayName:i});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:f,className:"profileForm",children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:i,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(a.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),j.push("/")},children:"Log Out"})]})},P=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(a.jsxs)(u.a,{children:[n&&Object(a.jsx)(F,{userObj:c}),Object(a.jsx)(l.d,{children:n?Object(a.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(a.jsx)(l.b,{exact:!0,path:"/",children:Object(a.jsx)(I,{userObj:c})}),Object(a.jsx)(l.b,{exact:!0,path:"/profile",children:Object(a.jsx)(A,{refreshUser:t,userObj:c})}),Object(a.jsx)(l.a,{from:"*",to:"/"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/",children:Object(a.jsx)(w,{})}),Object(a.jsx)(l.a,{from:"*",to:"/"})]})})]})};var U=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(c.useState)(null),b=Object(o.a)(j,2),d=b[0],p=b[1];return Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){e?(l(!0),p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(l(!1),p(null)),r(!0)}))}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(P,{refreshUser:function(){var e=m.currentUser;p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:u,userObj:d}):"Initializing..."})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(50);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),B()}},[[51,1,2]]]);
//# sourceMappingURL=main.9518f9ba.chunk.js.map