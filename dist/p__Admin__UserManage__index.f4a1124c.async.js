"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[901],{38905:function(q,C,t){t.r(C),t.d(C,{default:function(){return X},waitTime:function(){return V},waitTimePromise:function(){return b}});var B=t(97857),T=t.n(B),w=t(15009),d=t.n(w),N=t(99289),y=t.n(N),D=t(51042),O=t(91),c=t(1413),$=t(56874),A=t(87462),m=t(67294),U=t(29245),F=t(78026),G=function(n,e){return m.createElement(F.Z,(0,A.Z)({},n,{ref:e,icon:U.Z}))},k=m.forwardRef(G),Z=t(86413),j=t(28459),P=t(85418),S=t(14726),z=t(93967),E=t.n(z),o=t(85893),K=["key","name"],Q=function(n){var e=n.children,r=n.menus,a=n.onSelect,l=n.className,s=n.style,f=(0,m.useContext)(j.ZP.ConfigContext),u=f.getPrefixCls,g=u("pro-table-dropdown"),h=(0,Z.Q)({onClick:function(v){return a&&a(v.key)},items:r==null?void 0:r.map(function(p){return{label:p.name,key:p.key}})});return(0,o.jsx)(P.Z,(0,c.Z)((0,c.Z)({},h),{},{className:E()(g,l),children:(0,o.jsxs)(S.ZP,{style:s,children:[e," ",(0,o.jsx)($.Z,{})]})}))},I=function(n){var e=n.className,r=n.style,a=n.onSelect,l=n.menus,s=l===void 0?[]:l,f=n.children,u=(0,m.useContext)(j.ZP.ConfigContext),g=u.getPrefixCls,h=g("pro-table-dropdown"),p=(0,Z.Q)({onClick:function(x){a==null||a(x.key)},items:s.map(function(v){var x=v.key,Y=v.name,R=(0,O.Z)(v,K);return(0,c.Z)((0,c.Z)({key:x},R),{},{title:R.title,label:Y})})});return(0,o.jsx)(P.Z,(0,c.Z)((0,c.Z)({},p),{},{className:E()(h,e),children:(0,o.jsx)("a",{style:r,children:f||(0,o.jsx)(k,{})})}))};I.Button=Q;var W=I,H=t(1794),L=t(43289),M=t(79822),b=function(){var i=y()(d()().mark(function n(){var e,r=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return e=r.length>0&&r[0]!==void 0?r[0]:100,l.abrupt("return",new Promise(function(s){setTimeout(function(){s(!0)},e)}));case 2:case"end":return l.stop()}},n)}));return function(){return i.apply(this,arguments)}}(),V=function(){var i=y()(d()().mark(function n(){var e,r=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return e=r.length>0&&r[0]!==void 0?r[0]:100,l.next=3,b(e);case 3:case"end":return l.stop()}},n)}));return function(){return i.apply(this,arguments)}}(),J=[{dataIndex:"id",valueType:"indexBorder",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",copyable:!0},{title:"\u8D26\u53F7",dataIndex:"userAccount",copyable:!0},{title:"\u5934\u50CF",dataIndex:"avatarUrl",copyable:!0,render:function(n,e){return(0,o.jsx)("div",{children:(0,o.jsx)(L.Z,{src:e.avatarUrl})})}},{title:"\u6027\u522B",dataIndex:"gender",copyable:!0},{title:"\u624B\u673A",dataIndex:"phone",copyable:!0},{title:"\u90AE\u7BB1",dataIndex:"email",copyable:!0},{title:"\u72B6\u6001",dataIndex:"userStatus",copyable:!0},{title:"\u661F\u7403\u7F16\u53F7",dataIndex:"planetCode",copyable:!0},{title:"\u89D2\u8272",dataIndex:"userRole",copyable:!0,valueType:"select",valueEnum:{0:{text:"\u666E\u901A\u7528\u6237",status:"Success"},1:{text:"\u7BA1\u7406\u5458",status:"Error"}}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",valueType:"date",copyable:!0},{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(n,e,r,a){return[(0,o.jsx)("a",{onClick:function(){var s;a==null||(s=a.startEditable)===null||s===void 0||s.call(a,e.id)},children:"\u7F16\u8F91"},"editable"),(0,o.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view"),(0,o.jsx)(W,{onSelect:function(){return a==null?void 0:a.reload()},menus:[{key:"copy",name:"\u590D\u5236"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}],X=function(){var i=(0,m.useRef)();return(0,o.jsx)(H.Z,{columns:J,actionRef:i,cardBordered:!0,request:function(){var n=y()(d()().mark(function e(r,a,l){var s;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return console.log(a,l),u.next=3,(0,M.pz)();case 3:return s=u.sent,u.abrupt("return",{data:s});case 5:case"end":return u.stop()}},e)}));return function(e,r,a){return n.apply(this,arguments)}}(),editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",defaultValue:{option:{fixed:"right",disable:!0}},onChange:function(e){console.log("value: ",e)}},rowKey:"id",search:{labelWidth:"auto"},options:{setting:{listsHeight:400}},form:{syncToUrl:function(e,r){return r==="get"?T()(T()({},e),{},{created_at:[e.startTime,e.endTime]}):e}},pagination:{pageSize:5,onChange:function(e){return console.log(e)}},dateFormatter:"string",headerTitle:"\u9AD8\u7EA7\u8868\u683C",toolBarRender:function(){return[(0,o.jsx)(S.ZP,{icon:(0,o.jsx)(D.Z,{}),onClick:function(){var r;(r=i.current)===null||r===void 0||r.reload()},type:"primary",children:"\u65B0\u5EFA"},"button")]}})}}}]);