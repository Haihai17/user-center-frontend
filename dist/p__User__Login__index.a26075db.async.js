"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[366],{2067:function(le,P,s){s.r(P);var L=s(15009),c=s.n(L),B=s(97857),E=s.n(B),I=s(99289),h=s.n(I),x=s(5574),D=s.n(x),T=s(39418),R=s(79822),W=s(88777),S=s(96833),K=s(97487),b=s(87547),F=s(94149),Z=s(68262),j=s(5966),N=s(63434),t=s(80854),$=s(38925),O=s(2453),z=s(82494),H=s(96074),G=s(67610),A=s(67294),V=s(73935),Q=s(409),J=s(69215),e=s(85893),p=(0,Q.kc)(function(g){var n=g.token;return{action:{marginLeft:"8px",color:"rgba(0, 0, 0, 0.2)",fontSize:"24px",verticalAlign:"middle",cursor:"pointer",transition:"color 0.3s","&:hover":{color:n.colorPrimaryActive}},lang:{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:n.borderRadius,":hover":{backgroundColor:n.colorBgTextHover}},container:{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% 100%"}}}),X=function(){var n=p(),r=n.styles;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(W.Z,{className:r.action},"AlipayCircleOutlined"),(0,e.jsx)(S.Z,{className:r.action},"TaobaoCircleOutlined"),(0,e.jsx)(K.Z,{className:r.action},"WeiboCircleOutlined")]})},Y=function(){var n=p(),r=n.styles;return(0,e.jsx)("div",{className:r.lang,"data-lang":!0,children:t.SelectLang&&(0,e.jsx)(t.SelectLang,{})})},w=function(n){var r=n.content;return(0,e.jsx)($.Z,{style:{marginBottom:24},message:r,type:"error",showIcon:!0})},k=function(){var n=(0,A.useState)({}),r=D()(n,2),y=r[0],q=r[1],ee=(0,A.useState)("account"),U=D()(ee,2),v=U[0],se=U[1],C=(0,t.useModel)("@@initialState"),M=C.initialState,ae=C.setInitialState,te=p(),ne=te.styles,i=(0,t.useIntl)(),re=function(){var m=h()(c()().mark(function l(){var u,o;return c()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,M==null||(u=M.fetchUserInfo)===null||u===void 0?void 0:u.call(M);case 2:o=_.sent,o&&(0,V.flushSync)(function(){ae(function(f){return E()(E()({},f),{},{currentUser:o})})});case 4:case"end":return _.stop()}},l)}));return function(){return m.apply(this,arguments)}}(),_e=function(){var m=h()(c()().mark(function l(u){var o,d,_,f;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,R.x4)(E()(E()({},u),{},{type:v}));case 3:if(o=a.sent,!o){a.next=13;break}return d=i.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),O.ZP.success(d),a.next=9,re();case 9:return _=new URL(window.location.href).searchParams,console.log(_.values()),_.get("redirect")===null?t.history.push("/welcome"):t.history.push("/user"+_.get("redirect")),a.abrupt("return");case 13:console.log(o),q(o),a.next=22;break;case 17:a.prev=17,a.t0=a.catch(0),f=i.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),console.log(a.t0),O.ZP.error(f);case 22:case"end":return a.stop()}},l,null,[[0,17]])}));return function(u){return m.apply(this,arguments)}}(),oe=y.status,ie=y.type;return(0,e.jsxs)("div",{className:ne.container,children:[(0,e.jsx)(t.Helmet,{children:(0,e.jsxs)("title",{children:[i.formatMessage({id:"menu.login",defaultMessage:"\u767B\u5F55\u9875"}),"- ",G.Z.title]})}),(0,e.jsx)(Y,{}),(0,e.jsx)("div",{style:{flex:"1",padding:"32px 0"},children:(0,e.jsxs)(Z.U,{contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(0,e.jsx)("img",{alt:"logo",src:"/logo.svg"}),title:"Ant Design",subTitle:i.formatMessage({id:"pages.layouts.userLayout.title"}),initialValues:{autoLogin:!0},actions:[(0,e.jsx)(t.FormattedMessage,{id:"pages.login.loginWith",defaultMessage:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"},"loginWith"),(0,e.jsx)(X,{},"icons")],onFinish:function(){var m=h()(c()().mark(function l(u){return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,_e(u);case 2:case"end":return d.stop()}},l)}));return function(l){return m.apply(this,arguments)}}(),children:[(0,e.jsx)(z.Z,{activeKey:v,onChange:se,centered:!0,items:[{key:"account",label:i.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})}]}),oe==="error"&&ie==="account"&&(0,e.jsx)(w,{content:i.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF(admin/ant.design)"})}),v==="account"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j.Z,{name:"userAccount",fieldProps:{size:"large",prefix:(0,e.jsx)(b.Z,{})},placeholder:i.formatMessage({id:"pages.login.userAccount.placeholder",defaultMessage:"\u7528\u6237\u540D"}),rules:[{required:!0,message:(0,e.jsx)(t.FormattedMessage,{id:"pages.login.userAccount.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,e.jsx)(j.Z.Password,{name:"userPassword",fieldProps:{size:"large",prefix:(0,e.jsx)(F.Z,{})},placeholder:i.formatMessage({id:"pages.login.userPassword.placeholder",defaultMessage:"\u5BC6\u7801"}),rules:[{required:!0,message:(0,e.jsx)(t.FormattedMessage,{id:"pages.login.userPassword.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})},{min:8,type:"string",message:"\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E8"}]})]}),(0,e.jsx)("div",{style:{marginBottom:24},children:(0,e.jsxs)(J.T,{split:(0,e.jsx)(H.Z,{type:"vertical"}),children:[(0,e.jsx)(N.Z,{noStyle:!0,name:"autoLogin",children:(0,e.jsx)(t.FormattedMessage,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55"})}),(0,e.jsx)(t.Link,{to:"/user/register",children:"\u7ACB\u5373\u6CE8\u518C "}),(0,e.jsx)("a",{style:{float:"right"},children:"\u5FD8\u8BB0\u5BC6\u7801"})]})})]})}),(0,e.jsx)(T.$_,{})]})};P.default=k}}]);