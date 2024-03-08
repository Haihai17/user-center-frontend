"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[134],{81643:function(ae,b,t){t.d(b,{Z:function(){return e}});const e=p=>p?typeof p=="function"?p():p:null},7134:function(ae,b,t){t.d(b,{C:function(){return pe}});var e=t(67294),p=t(93967),P=t.n(p),W=t(48555),j=t(42550),G=t(74443),A=t(53124),F=t(98675),V=t(25378),c=e.createContext({}),n=t(6731),a=t(14747),o=t(91945),l=t(45503);const r=s=>{const{antCls:d,componentCls:g,iconCls:i,avatarBg:f,avatarColor:Q,containerSize:z,containerSizeLG:O,containerSizeSM:I,textFontSize:y,textFontSizeLG:N,textFontSizeSM:ne,borderRadius:M,borderRadiusLG:_,borderRadiusSM:U,lineWidth:Y,lineType:k}=s,K=(Z,R,q)=>({width:Z,height:Z,borderRadius:"50%",[`&${g}-square`]:{borderRadius:q},[`&${g}-icon`]:{fontSize:R,[`> ${i}`]:{margin:0}}});return{[g]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,a.Wf)(s)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:Q,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:f,border:`${(0,n.unit)(Y)} ${k} transparent`,["&-image"]:{background:"transparent"},[`${d}-image-img`]:{display:"block"}}),K(z,y,M)),{["&-lg"]:Object.assign({},K(O,N,_)),["&-sm"]:Object.assign({},K(I,ne,U)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},u=s=>{const{componentCls:d,groupBorderColor:g,groupOverlapping:i,groupSpace:f}=s;return{[`${d}-group`]:{display:"inline-flex",[`${d}`]:{borderColor:g},["> *:not(:first-child)"]:{marginInlineStart:i}},[`${d}-group-popover`]:{[`${d} + ${d}`]:{marginInlineStart:f}}}},h=s=>{const{controlHeight:d,controlHeightLG:g,controlHeightSM:i,fontSize:f,fontSizeLG:Q,fontSizeXL:z,fontSizeHeading3:O,marginXS:I,marginXXS:y,colorBorderBg:N}=s;return{containerSize:d,containerSizeLG:g,containerSizeSM:i,textFontSize:Math.round((Q+z)/2),textFontSizeLG:O,textFontSizeSM:f,groupSpace:y,groupOverlapping:-I,groupBorderColor:N}};var E=(0,o.I$)("Avatar",s=>{const{colorTextLightSolid:d,colorTextPlaceholder:g}=s,i=(0,l.TS)(s,{avatarBg:g,avatarColor:d});return[r(i),u(i)]},h),C=t(35792),w=function(s,d){var g={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&d.indexOf(i)<0&&(g[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,i=Object.getOwnPropertySymbols(s);f<i.length;f++)d.indexOf(i[f])<0&&Object.prototype.propertyIsEnumerable.call(s,i[f])&&(g[i[f]]=s[i[f]]);return g};const H=(s,d)=>{const[g,i]=e.useState(1),[f,Q]=e.useState(!1),[z,O]=e.useState(!0),I=e.useRef(null),y=e.useRef(null),N=(0,j.sQ)(d,I),{getPrefixCls:ne,avatar:M}=e.useContext(A.E_),_=e.useContext(c),U=()=>{if(!y.current||!I.current)return;const m=y.current.offsetWidth,v=I.current.offsetWidth;if(m!==0&&v!==0){const{gap:T=4}=s;T*2<v&&i(v-T*2<m?(v-T*2)/m:1)}};e.useEffect(()=>{Q(!0)},[]),e.useEffect(()=>{O(!0),i(1)},[s.src]),e.useEffect(U,[s.gap]);const Y=()=>{const{onError:m}=s;(m==null?void 0:m())!==!1&&O(!1)},{prefixCls:k,shape:K,size:Z,src:R,srcSet:q,icon:D,className:re,rootClassName:ee,alt:oe,draggable:Ee,children:ge,crossOrigin:Ce}=s,ie=w(s,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),S=(0,F.Z)(m=>{var v,T;return(T=(v=Z!=null?Z:_==null?void 0:_.size)!==null&&v!==void 0?v:m)!==null&&T!==void 0?T:"default"}),Oe=Object.keys(typeof S=="object"?S||{}:{}).some(m=>["xs","sm","md","lg","xl","xxl"].includes(m)),me=(0,V.Z)(Oe),Pe=e.useMemo(()=>{if(typeof S!="object")return{};const m=G.c4.find(T=>me[T]),v=S[m];return v?{width:v,height:v,fontSize:v&&(D||ge)?v/2:18}:{}},[me,S]),$=ne("avatar",k),ve=(0,C.Z)($),[he,ye,Se]=E($,ve),xe=P()({[`${$}-lg`]:S==="large",[`${$}-sm`]:S==="small"}),fe=e.isValidElement(R),Me=K||(_==null?void 0:_.shape)||"circle",_e=P()($,xe,M==null?void 0:M.className,`${$}-${Me}`,{[`${$}-image`]:fe||R&&z,[`${$}-icon`]:!!D},Se,ve,re,ee,ye),De=typeof S=="number"?{width:S,height:S,fontSize:D?S/2:18}:{};let te;if(typeof R=="string"&&z)te=e.createElement("img",{src:R,draggable:Ee,srcSet:q,onError:Y,alt:oe,crossOrigin:Ce});else if(fe)te=R;else if(D)te=D;else if(f||g!==1){const m=`scale(${g})`,v={msTransform:m,WebkitTransform:m,transform:m};te=e.createElement(W.default,{onResize:U},e.createElement("span",{className:`${$}-string`,ref:y,style:Object.assign({},v)},ge))}else te=e.createElement("span",{className:`${$}-string`,style:{opacity:0},ref:y},ge);return delete ie.onError,delete ie.gap,he(e.createElement("span",Object.assign({},ie,{style:Object.assign(Object.assign(Object.assign(Object.assign({},De),Pe),M==null?void 0:M.style),ie.style),className:_e,ref:N}),te))};var B=e.forwardRef(H),L=t(50344),x=t(55241),ce=t(96159);const se=s=>{const{size:d,shape:g}=e.useContext(c),i=e.useMemo(()=>({size:s.size||d,shape:s.shape||g}),[s.size,s.shape,d,g]);return e.createElement(c.Provider,{value:i},s.children)};var de=s=>{const{getPrefixCls:d,direction:g}=e.useContext(A.E_),{prefixCls:i,className:f,rootClassName:Q,style:z,maxCount:O,maxStyle:I,size:y,shape:N,maxPopoverPlacement:ne="top",maxPopoverTrigger:M="hover",children:_}=s,U=d("avatar",i),Y=`${U}-group`,k=(0,C.Z)(U),[K,Z,R]=E(U,k),q=P()(Y,{[`${Y}-rtl`]:g==="rtl"},R,k,f,Q,Z),D=(0,L.Z)(_).map((ee,oe)=>(0,ce.Tm)(ee,{key:`avatar-key-${oe}`})),re=D.length;if(O&&O<re){const ee=D.slice(0,O),oe=D.slice(O,re);return ee.push(e.createElement(x.Z,{key:"avatar-popover-key",content:oe,trigger:M,placement:ne,overlayClassName:`${Y}-popover`},e.createElement(B,{style:I},`+${re-O}`))),K(e.createElement(se,{shape:N,size:y},e.createElement("div",{className:q,style:z},ee)))}return K(e.createElement(se,{shape:N,size:y},e.createElement("div",{className:q,style:z},D)))};const le=B;le.Group=de;var pe=le},66330:function(ae,b,t){var e=t(67294),p=t(93967),P=t.n(p),W=t(92419),j=t(81643),G=t(53124),A=t(20136),F=function(n,a){var o={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&a.indexOf(l)<0&&(o[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(n);r<l.length;r++)a.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(n,l[r])&&(o[l[r]]=n[l[r]]);return o};const V=(n,a,o)=>!a&&!o?null:e.createElement(e.Fragment,null,a&&e.createElement("div",{className:`${n}-title`},(0,j.Z)(a)),e.createElement("div",{className:`${n}-inner-content`},(0,j.Z)(o))),J=n=>{const{hashId:a,prefixCls:o,className:l,style:r,placement:u="top",title:h,content:E,children:C}=n;return e.createElement("div",{className:P()(a,o,`${o}-pure`,`${o}-placement-${u}`,l),style:r},e.createElement("div",{className:`${o}-arrow`}),e.createElement(W.Popup,Object.assign({},n,{className:a,prefixCls:o}),C||V(o,h,E)))},c=n=>{const{prefixCls:a,className:o}=n,l=F(n,["prefixCls","className"]),{getPrefixCls:r}=e.useContext(G.E_),u=r("popover",a),[h,E,C]=(0,A.Z)(u);return h(e.createElement(J,Object.assign({},l,{prefixCls:u,hashId:E,className:P()(o,C)})))};b.ZP=c},55241:function(ae,b,t){var e=t(67294),p=t(93967),P=t.n(p),W=t(81643),j=t(33603),G=t(53124),A=t(83062),F=t(66330),V=t(20136),J=function(a,o){var l={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&o.indexOf(r)<0&&(l[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(a);u<r.length;u++)o.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(a,r[u])&&(l[r[u]]=a[r[u]]);return l};const c=a=>{let{title:o,content:l,prefixCls:r}=a;return e.createElement(e.Fragment,null,o&&e.createElement("div",{className:`${r}-title`},(0,W.Z)(o)),e.createElement("div",{className:`${r}-inner-content`},(0,W.Z)(l)))},n=e.forwardRef((a,o)=>{const{prefixCls:l,title:r,content:u,overlayClassName:h,placement:E="top",trigger:C="hover",mouseEnterDelay:w=.1,mouseLeaveDelay:H=.1,overlayStyle:X={}}=a,B=J(a,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:L}=e.useContext(G.E_),x=L("popover",l),[ce,se,ue]=(0,V.Z)(x),de=L(),le=P()(h,se,ue);return ce(e.createElement(A.Z,Object.assign({placement:E,trigger:C,mouseEnterDelay:w,mouseLeaveDelay:H,overlayStyle:X},B,{prefixCls:x,overlayClassName:le,ref:o,overlay:r||u?e.createElement(c,{prefixCls:x,title:r,content:u}):null,transitionName:(0,j.m)(de,"zoom-big",B.transitionName),"data-popover-inject":!0})))});n._InternalPanelDoNotUseOrYouWillBeFired=F.ZP,b.Z=n},20136:function(ae,b,t){var e=t(14747),p=t(50438),P=t(97414),W=t(8796),j=t(91945),G=t(45503),A=t(79511);const F=c=>{const{componentCls:n,popoverColor:a,titleMinWidth:o,fontWeightStrong:l,innerPadding:r,boxShadowSecondary:u,colorTextHeading:h,borderRadiusLG:E,zIndexPopup:C,titleMarginBottom:w,colorBgElevated:H,popoverBg:X,titleBorderBottom:B,innerContentPadding:L,titlePadding:x}=c;return[{[n]:Object.assign(Object.assign({},(0,e.Wf)(c)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:C,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":H,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:X,backgroundClip:"padding-box",borderRadius:E,boxShadow:u,padding:r},[`${n}-title`]:{minWidth:o,marginBottom:w,color:h,fontWeight:l,borderBottom:B,padding:x},[`${n}-inner-content`]:{color:a,padding:L}})},(0,P.ZP)(c,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:c.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},V=c=>{const{componentCls:n}=c;return{[n]:W.i.map(a=>{const o=c[`${a}6`];return{[`&${n}-${a}`]:{"--antd-arrow-background-color":o,[`${n}-inner`]:{backgroundColor:o},[`${n}-arrow`]:{background:"transparent"}}}})}},J=c=>{const{lineWidth:n,controlHeight:a,fontHeight:o,padding:l,wireframe:r,zIndexPopupBase:u,borderRadiusLG:h,marginXS:E,lineType:C,colorSplit:w,paddingSM:H}=c,X=a-o,B=X/2,L=X/2-n,x=l;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:u+30},(0,A.w)(c)),(0,P.wZ)({contentRadius:h,limitVerticalRadius:!0})),{innerPadding:r?0:12,titleMarginBottom:r?0:E,titlePadding:r?`${B}px ${x}px ${L}px`:0,titleBorderBottom:r?`${n}px ${C} ${w}`:"none",innerContentPadding:r?`${H}px ${x}px`:0})};b.Z=(0,j.I$)("Popover",c=>{const{colorBgElevated:n,colorText:a}=c,o=(0,G.TS)(c,{popoverBg:n,popoverColor:a});return[F(o),V(o),(0,p._y)(o,"zoom-big")]},J,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);
