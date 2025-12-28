import{r as jS,a as JS}from"./vendor-react-OXzYy3Vh.js";var t_={exports:{}},fu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=Symbol.for("react.transitional.element"),KS=Symbol.for("react.fragment");function e_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:QS,type:e,key:i,ref:t!==void 0?t:null,props:n}}fu.Fragment=KS;fu.jsx=e_;fu.jsxs=e_;t_.exports=fu;var X2=t_.exports,n_={exports:{}},hu={},i_={exports:{}},a_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,I){var G=L.length;L.push(I);t:for(;0<G;){var nt=G-1>>>1,et=L[nt];if(0<a(et,I))L[nt]=I,L[G]=et,G=nt;else break t}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var I=L[0],G=L.pop();if(G!==I){L[0]=G;t:for(var nt=0,et=L.length,lt=et>>>1;nt<lt;){var Bt=2*(nt+1)-1,Nt=L[Bt],$t=Bt+1,ae=L[$t];if(0>a(Nt,G))$t<et&&0>a(ae,Nt)?(L[nt]=ae,L[$t]=G,nt=$t):(L[nt]=Nt,L[Bt]=G,nt=Bt);else if($t<et&&0>a(ae,G))L[nt]=ae,L[$t]=G,nt=$t;else break t}}return I}function a(L,I){var G=L.sortIndex-I.sortIndex;return G!==0?G:L.id-I.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],u=1,h=null,d=3,p=!1,m=!1,y=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function x(L){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=L)i(c),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(c)}}function T(L){if(y=!1,x(L),!m)if(n(l)!==null)m=!0,R||(R=!0,F());else{var I=n(c);I!==null&&q(T,I.startTime-L)}}var R=!1,A=-1,D=5,M=-1;function b(){return g?!0:!(e.unstable_now()-M<D)}function U(){if(g=!1,R){var L=e.unstable_now();M=L;var I=!0;try{t:{m=!1,y&&(y=!1,v(A),A=-1),p=!0;var G=d;try{e:{for(x(L),h=n(l);h!==null&&!(h.expirationTime>L&&b());){var nt=h.callback;if(typeof nt=="function"){h.callback=null,d=h.priorityLevel;var et=nt(h.expirationTime<=L);if(L=e.unstable_now(),typeof et=="function"){h.callback=et,x(L),I=!0;break e}h===n(l)&&i(l),x(L)}else i(l);h=n(l)}if(h!==null)I=!0;else{var lt=n(c);lt!==null&&q(T,lt.startTime-L),I=!1}}break t}finally{h=null,d=G,p=!1}I=void 0}}finally{I?F():R=!1}}}var F;if(typeof _=="function")F=function(){_(U)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,k=H.port2;H.port1.onmessage=U,F=function(){k.postMessage(null)}}else F=function(){f(U,0)};function q(L,I){A=f(function(){L(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_next=function(L){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var G=d;d=I;try{return L()}finally{d=G}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=d;d=L;try{return I()}finally{d=G}},e.unstable_scheduleCallback=function(L,I,G){var nt=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?nt+G:nt):G=nt,L){case 1:var et=-1;break;case 2:et=250;break;case 5:et=1073741823;break;case 4:et=1e4;break;default:et=5e3}return et=G+et,L={id:u++,callback:I,priorityLevel:L,startTime:G,expirationTime:et,sortIndex:-1},G>nt?(L.sortIndex=G,t(c,L),n(l)===null&&L===n(c)&&(y?(v(A),A=-1):y=!0,q(T,G-nt))):(L.sortIndex=et,t(l,L),m||p||(m=!0,R||(R=!0,F()))),L},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(L){var I=d;return function(){var G=d;d=I;try{return L.apply(this,arguments)}finally{d=G}}}})(a_);i_.exports=a_;var $S=i_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We=$S,s_=jS,ty=JS;function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function o_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xm(e){if($o(e)!==e)throw Error(j(188))}function ey(e){var t=e.alternate;if(!t){if(t=$o(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return xm(a),e;if(s===i)return xm(a),t;s=s.sibling}throw Error(j(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function c_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=c_(e),t!==null)return t;e=e.sibling}return null}var Re=Object.assign,ny=Symbol.for("react.element"),_l=Symbol.for("react.transitional.element"),so=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),u_=Symbol.for("react.strict_mode"),ah=Symbol.for("react.profiler"),f_=Symbol.for("react.consumer"),Wi=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),rh=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),ma=Symbol.for("react.lazy"),oh=Symbol.for("react.activity"),iy=Symbol.for("react.memo_cache_sentinel"),Sm=Symbol.iterator;function Wr(e){return e===null||typeof e!="object"?null:(e=Sm&&e[Sm]||e["@@iterator"],typeof e=="function"?e:null)}var ay=Symbol.for("react.client.reference");function lh(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ay?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qs:return"Fragment";case ah:return"Profiler";case u_:return"StrictMode";case sh:return"Suspense";case rh:return"SuspenseList";case oh:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case so:return"Portal";case Wi:return e.displayName||"Context";case f_:return(e._context.displayName||"Context")+".Consumer";case Kd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $d:return t=e.displayName||null,t!==null?t:lh(e.type)||"Memo";case ma:t=e._payload,e=e._init;try{return lh(e(t))}catch{}}return null}var ro=Array.isArray,Gt=s_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=ty.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cs={pending:!1,data:null,method:null,action:null},ch=[],Ks=-1;function Ri(e){return{current:e}}function Qe(e){0>Ks||(e.current=ch[Ks],ch[Ks]=null,Ks--)}function be(e,t){Ks++,ch[Ks]=e.current,e.current=t}var yi=Ri(null),Uo=Ri(null),Ca=Ri(null),Dc=Ri(null);function Uc(e,t){switch(be(Ca,t),be(Uo,e),be(yi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?A0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=A0(t),e=Ux(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Qe(yi),be(yi,e)}function vr(){Qe(yi),Qe(Uo),Qe(Ca)}function uh(e){e.memoizedState!==null&&be(Dc,e);var t=yi.current,n=Ux(t,e.type);t!==n&&(be(Uo,e),be(yi,n))}function Lc(e){Uo.current===e&&(Qe(yi),Qe(Uo)),Dc.current===e&&(Qe(Dc),Go._currentValue=cs)}var Fu,ym;function $a(e){if(Fu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fu=t&&t[1]||"",ym=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fu+e+ym}var Hu=!1;function Vu(e,t){if(!e||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var d=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){d=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){d=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$a(n):""}function sy(e,t){switch(e.tag){case 26:case 27:case 5:return $a(e.type);case 16:return $a("Lazy");case 13:return e.child!==t&&t!==null?$a("Suspense Fallback"):$a("Suspense");case 19:return $a("SuspenseList");case 0:case 15:return Vu(e.type,!1);case 11:return Vu(e.type.render,!1);case 1:return Vu(e.type,!0);case 31:return $a("Activity");default:return""}}function Mm(e){try{var t="",n=null;do t+=sy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var fh=Object.prototype.hasOwnProperty,tp=We.unstable_scheduleCallback,Gu=We.unstable_cancelCallback,ry=We.unstable_shouldYield,oy=We.unstable_requestPaint,zn=We.unstable_now,ly=We.unstable_getCurrentPriorityLevel,h_=We.unstable_ImmediatePriority,d_=We.unstable_UserBlockingPriority,Nc=We.unstable_NormalPriority,cy=We.unstable_LowPriority,p_=We.unstable_IdlePriority,uy=We.log,fy=We.unstable_setDisableYieldValue,tl=null,In=null;function Ma(e){if(typeof uy=="function"&&fy(e),In&&typeof In.setStrictMode=="function")try{In.setStrictMode(tl,e)}catch{}}var Bn=Math.clz32?Math.clz32:py,hy=Math.log,dy=Math.LN2;function py(e){return e>>>=0,e===0?32:31-(hy(e)/dy|0)|0}var vl=256,xl=262144,Sl=4194304;function ts(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function du(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ts(i):(r&=o,r!==0?a=ts(r):n||(n=o&~e,n!==0&&(a=ts(n))))):(o=i&~s,o!==0?a=ts(o):r!==0?a=ts(r):n||(n=i&~e,n!==0&&(a=ts(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function el(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function my(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m_(){var e=Sl;return Sl<<=1,!(Sl&62914560)&&(Sl=4194304),e}function Xu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gy(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-Bn(n),h=1<<u;o[u]=0,l[u]=-1;var d=c[u];if(d!==null)for(c[u]=null,u=0;u<d.length;u++){var p=d[u];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&g_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function g_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Bn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function __(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Bn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function v_(e,t){var n=t&-t;return n=n&42?1:ep(n),n&(e.suspendedLanes|t)?0:n}function ep(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function np(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function x_(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:Gx(e.type))}function bm(e,t){var n=le.p;try{return le.p=e,t()}finally{le.p=n}}var Ga=Math.random().toString(36).slice(2),tn="__reactFiber$"+Ga,Mn="__reactProps$"+Ga,zr="__reactContainer$"+Ga,hh="__reactEvents$"+Ga,_y="__reactListeners$"+Ga,vy="__reactHandles$"+Ga,Em="__reactResources$"+Ga,il="__reactMarker$"+Ga;function ip(e){delete e[tn],delete e[Mn],delete e[hh],delete e[_y],delete e[vy]}function $s(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zr]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=U0(e);e!==null;){if(n=e[tn])return n;e=U0(e)}return t}e=n,n=e.parentNode}return null}function Ir(e){if(e=e[tn]||e[zr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function oo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function cr(e){var t=e[Em];return t||(t=e[Em]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[il]=!0}var S_=new Set,y_={};function ys(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(y_[e]=t,e=0;e<t.length;e++)S_.add(t[e])}var xy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tm={},Am={};function Sy(e){return fh.call(Am,e)?!0:fh.call(Tm,e)?!1:xy.test(e)?Am[e]=!0:(Tm[e]=!0,!1)}function lc(e,t,n){if(Sy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function yl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ui(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dh(e){if(!e._valueTracker){var t=M_(e)?"checked":"value";e._valueTracker=yy(e,t,""+e[t])}}function b_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=M_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Oc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var My=/[\n"\\]/g;function Jn(e){return e.replace(My,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ph(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yn(t)):e.value!==""+Yn(t)&&(e.value=""+Yn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?mh(e,r,Yn(t)):n!=null?mh(e,r,Yn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Yn(o):e.removeAttribute("name")}function E_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){dh(e);return}n=n!=null?""+Yn(n):"",t=t!=null?""+Yn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),dh(e)}function mh(e,t,n){t==="number"&&Oc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ur(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function T_(e,t,n){if(t!=null&&(t=""+Yn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yn(n):""}function A_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(ro(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Yn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),dh(e)}function Sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var by=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||by.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function R_(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Rm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Rm(e,s,t[s])}function ap(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ey=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ty=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cc(e){return Ty.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var gh=null;function sp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tr=null,fr=null;function Cm(e){var t=Ir(e);if(t&&(e=t.stateNode)){var n=e[Mn]||null;t:switch(e=t.stateNode,t.type){case"input":if(ph(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Jn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Mn]||null;if(!a)throw Error(j(90));ph(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&b_(i)}break t;case"textarea":T_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}}}var ku=!1;function C_(e,t,n){if(ku)return e(t,n);ku=!0;try{var i=e(t);return i}finally{if(ku=!1,(tr!==null||fr!==null)&&(Tu(),tr&&(t=tr,e=fr,fr=tr=null,Cm(t),e)))for(t=0;t<e.length;t++)Cm(e[t])}}function Lo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Mn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_h=!1;if(ta)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){_h=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{_h=!1}var ba=null,rp=null,uc=null;function w_(){if(uc)return uc;var e,t=rp,n=t.length,i,a="value"in ba?ba.value:ba.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return uc=a.slice(e,1<i?1-i:void 0)}function fc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ml(){return!0}function wm(){return!1}function bn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ml:wm,this.isPropagationStopped=wm,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),t}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=bn(Ms),al=Re({},Ms,{view:0,detail:0}),Ay=bn(al),Wu,qu,Yr,mu=Re({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(Wu=e.screenX-Yr.screenX,qu=e.screenY-Yr.screenY):qu=Wu=0,Yr=e),Wu)},movementY:function(e){return"movementY"in e?e.movementY:qu}}),Dm=bn(mu),Ry=Re({},mu,{dataTransfer:0}),Cy=bn(Ry),wy=Re({},al,{relatedTarget:0}),Yu=bn(wy),Dy=Re({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Uy=bn(Dy),Ly=Re({},Ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ny=bn(Ly),Oy=Re({},Ms,{data:0}),Um=bn(Oy),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Iy[e])?!!t[e]:!1}function op(){return By}var Fy=Re({},al,{key:function(e){if(e.key){var t=Py[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(e){return e.type==="keypress"?fc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hy=bn(Fy),Vy=Re({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=bn(Vy),Gy=Re({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),Xy=bn(Gy),ky=Re({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=bn(ky),qy=Re({},mu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=bn(qy),Zy=Re({},Ms,{newState:0,oldState:0}),jy=bn(Zy),Jy=[9,13,27,32],lp=ta&&"CompositionEvent"in window,po=null;ta&&"documentMode"in document&&(po=document.documentMode);var Qy=ta&&"TextEvent"in window&&!po,D_=ta&&(!lp||po&&8<po&&11>=po),Nm=" ",Om=!1;function U_(e,t){switch(e){case"keyup":return Jy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function Ky(e,t){switch(e){case"compositionend":return L_(t);case"keypress":return t.which!==32?null:(Om=!0,Nm);case"textInput":return e=t.data,e===Nm&&Om?null:e;default:return null}}function $y(e,t){if(er)return e==="compositionend"||!lp&&U_(e,t)?(e=w_(),uc=rp=ba=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return D_&&t.locale!=="ko"?null:t.data;default:return null}}var tM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tM[e.type]:t==="textarea"}function N_(e,t,n,i){tr?fr?fr.push(i):fr=[i]:tr=i,t=Kc(t,"onChange"),0<t.length&&(n=new pu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var mo=null,No=null;function eM(e){Cx(e,0)}function gu(e){var t=oo(e);if(b_(t))return e}function zm(e,t){if(e==="change")return t}var O_=!1;if(ta){var Zu;if(ta){var ju="oninput"in document;if(!ju){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),ju=typeof Im.oninput=="function"}Zu=ju}else Zu=!1;O_=Zu&&(!document.documentMode||9<document.documentMode)}function Bm(){mo&&(mo.detachEvent("onpropertychange",P_),No=mo=null)}function P_(e){if(e.propertyName==="value"&&gu(No)){var t=[];N_(t,No,e,sp(e)),C_(eM,t)}}function nM(e,t,n){e==="focusin"?(Bm(),mo=t,No=n,mo.attachEvent("onpropertychange",P_)):e==="focusout"&&Bm()}function iM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gu(No)}function aM(e,t){if(e==="click")return gu(t)}function sM(e,t){if(e==="input"||e==="change")return gu(t)}function rM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vn=typeof Object.is=="function"?Object.is:rM;function Oo(e,t){if(Vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!fh.call(t,a)||!Vn(e[a],t[a]))return!1}return!0}function Fm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hm(e,t){var n=Fm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Fm(n)}}function z_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?z_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Oc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oc(e.document)}return t}function cp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var oM=ta&&"documentMode"in document&&11>=document.documentMode,nr=null,vh=null,go=null,xh=!1;function Vm(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xh||nr==null||nr!==Oc(i)||(i=nr,"selectionStart"in i&&cp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),go&&Oo(go,i)||(go=i,i=Kc(vh,"onSelect"),0<i.length&&(t=new pu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=nr)))}function qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Ju={},B_={};ta&&(B_=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function bs(e){if(Ju[e])return Ju[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in B_)return Ju[e]=t[n];return e}var F_=bs("animationend"),H_=bs("animationiteration"),V_=bs("animationstart"),lM=bs("transitionrun"),cM=bs("transitionstart"),uM=bs("transitioncancel"),G_=bs("transitionend"),X_=new Map,Sh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sh.push("scrollEnd");function fi(e,t){X_.set(e,t),ys(t,[e])}var Pc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wn=[],ar=0,up=0;function _u(){for(var e=ar,t=up=ar=0;t<e;){var n=Wn[t];Wn[t++]=null;var i=Wn[t];Wn[t++]=null;var a=Wn[t];Wn[t++]=null;var s=Wn[t];if(Wn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&k_(n,a,s)}}function vu(e,t,n,i){Wn[ar++]=e,Wn[ar++]=t,Wn[ar++]=n,Wn[ar++]=i,up|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function fp(e,t,n,i){return vu(e,t,n,i),zc(e)}function Es(e,t){return vu(e,null,null,t),zc(e)}function k_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Bn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function zc(e){if(50<To)throw To=0,Vh=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sr={};function fM(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,t,n,i){return new fM(e,t,n,i)}function hp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,t){var n=e.alternate;return n===null?(n=Nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function W_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")hp(e)&&(r=1);else if(typeof e=="string")r=gb(e,n,yi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case oh:return e=Nn(31,n,t,a),e.elementType=oh,e.lanes=s,e;case Qs:return us(n.children,a,s,t);case u_:r=8,a|=24;break;case ah:return e=Nn(12,n,t,a|2),e.elementType=ah,e.lanes=s,e;case sh:return e=Nn(13,n,t,a),e.elementType=sh,e.lanes=s,e;case rh:return e=Nn(19,n,t,a),e.elementType=rh,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wi:r=10;break t;case f_:r=9;break t;case Kd:r=11;break t;case $d:r=14;break t;case ma:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=Nn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function us(e,t,n,i){return e=Nn(7,e,i,t),e.lanes=n,e}function Qu(e,t,n){return e=Nn(6,e,null,t),e.lanes=n,e}function q_(e){var t=Nn(18,null,null,0);return t.stateNode=e,t}function Ku(e,t,n){return t=Nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gm=new WeakMap;function Qn(e,t){if(typeof e=="object"&&e!==null){var n=Gm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Mm(t)},Gm.set(e,t),t)}return{value:e,source:t,stack:Mm(t)}}var rr=[],or=0,Ic=null,Po=0,Zn=[],jn=0,Ia=null,_i=1,vi="";function Vi(e,t){rr[or++]=Po,rr[or++]=Ic,Ic=e,Po=t}function Y_(e,t,n){Zn[jn++]=_i,Zn[jn++]=vi,Zn[jn++]=Ia,Ia=e;var i=_i;e=vi;var a=32-Bn(i)-1;i&=~(1<<a),n+=1;var s=32-Bn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,_i=1<<32-Bn(t)+a|n<<a|i,vi=s+e}else _i=1<<s|n<<a|i,vi=e}function dp(e){e.return!==null&&(Vi(e,1),Y_(e,1,0))}function pp(e){for(;e===Ic;)Ic=rr[--or],rr[or]=null,Po=rr[--or],rr[or]=null;for(;e===Ia;)Ia=Zn[--jn],Zn[jn]=null,vi=Zn[--jn],Zn[jn]=null,_i=Zn[--jn],Zn[jn]=null}function Z_(e,t){Zn[jn++]=_i,Zn[jn++]=vi,Zn[jn++]=Ia,_i=t.id,vi=t.overflow,Ia=e}var en=null,Ae=null,ee=!1,wa=null,Kn=!1,yh=Error(j(519));function Ba(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(Qn(t,e)),yh}function Xm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[tn]=e,t[Mn]=i,n){case"dialog":Qt("cancel",t),Qt("close",t);break;case"iframe":case"object":case"embed":Qt("load",t);break;case"video":case"audio":for(n=0;n<Ho.length;n++)Qt(Ho[n],t);break;case"source":Qt("error",t);break;case"img":case"image":case"link":Qt("error",t),Qt("load",t);break;case"details":Qt("toggle",t);break;case"input":Qt("invalid",t),E_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Qt("invalid",t);break;case"textarea":Qt("invalid",t),A_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Dx(t.textContent,n)?(i.popover!=null&&(Qt("beforetoggle",t),Qt("toggle",t)),i.onScroll!=null&&Qt("scroll",t),i.onScrollEnd!=null&&Qt("scrollend",t),i.onClick!=null&&(t.onclick=qi),t=!0):t=!1,t||Ba(e,!0)}function km(e){for(en=e.return;en;)switch(en.tag){case 5:case 31:case 13:Kn=!1;return;case 27:case 3:Kn=!0;return;default:en=en.return}}function Ds(e){if(e!==en)return!1;if(!ee)return km(e),ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||qh(e.type,e.memoizedProps)),n=!n),n&&Ae&&Ba(e),km(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Ae=D0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Ae=D0(e)}else t===27?(t=Ae,Xa(e.type)?(e=Jh,Jh=null,Ae=e):Ae=t):Ae=en?ti(e.stateNode.nextSibling):null;return!0}function ps(){Ae=en=null,ee=!1}function $u(){var e=wa;return e!==null&&(xn===null?xn=e:xn.push.apply(xn,e),wa=null),e}function zo(e){wa===null?wa=[e]:wa.push(e)}var Mh=Ri(null),Ts=null,Yi=null;function _a(e,t,n){be(Mh,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Mh.current,Qe(Mh)}function bh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Eh(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),bh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(j(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),bh(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Br(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=a.type;Vn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Dc.current){if(r=a.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}a=a.return}e!==null&&Eh(t,e,n,i),t.flags|=262144}function Bc(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){Ts=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return j_(Ts,e)}function bl(e,t){return Ts===null&&ms(e),j_(e,t)}function j_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(j(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var hM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},dM=We.unstable_scheduleCallback,pM=We.unstable_NormalPriority,Ve={$$typeof:Wi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mp(){return{controller:new hM,data:new Map,refCount:0}}function sl(e){e.refCount--,e.refCount===0&&dM(pM,function(){e.controller.abort()})}var _o=null,Th=0,yr=0,hr=null;function mM(e,t){if(_o===null){var n=_o=[];Th=0,yr=Hp(),hr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Th++,t.then(Wm,Wm),t}function Wm(){if(--Th===0&&_o!==null){hr!==null&&(hr.status="fulfilled");var e=_o;_o=null,yr=0,hr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var qm=Gt.S;Gt.S=function(e,t){cx=zn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&mM(e,t),qm!==null&&qm(e,t)};var fs=Ri(null);function gp(){var e=fs.current;return e!==null?e:xe.pooledCache}function dc(e,t){t===null?be(fs,fs.current):be(fs,t.pool)}function J_(){var e=gp();return e===null?null:{parent:Ve._currentValue,pool:e}}var Fr=Error(j(460)),_p=Error(j(474)),xu=Error(j(542)),Fc={then:function(){}};function Ym(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Q_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qi,qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jm(e),e;default:if(typeof t.status=="string")t.then(qi,qi);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jm(e),e}throw hs=t,Fr}}function es(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(hs=n,Fr):n}}var hs=null;function Zm(){if(hs===null)throw Error(j(459));var e=hs;return hs=null,e}function jm(e){if(e===Fr||e===xu)throw Error(j(483))}var dr=null,Io=0;function El(e){var t=Io;return Io+=1,dr===null&&(dr=[]),Q_(dr,e,t)}function Zr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tl(e,t){throw t.$$typeof===ny?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function K_(e){function t(f,v){if(e){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function n(f,v){if(!e)return null;for(;v!==null;)t(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function a(f,v){return f=ji(f,v),f.index=0,f.sibling=null,f}function s(f,v,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=67108866,v):_):(f.flags|=67108866,v)):(f.flags|=1048576,v)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,v,_,x){return v===null||v.tag!==6?(v=Qu(_,f.mode,x),v.return=f,v):(v=a(v,_),v.return=f,v)}function l(f,v,_,x){var T=_.type;return T===Qs?u(f,v,_.props.children,x,_.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ma&&es(T)===v.type)?(v=a(v,_.props),Zr(v,_),v.return=f,v):(v=hc(_.type,_.key,_.props,null,f.mode,x),Zr(v,_),v.return=f,v)}function c(f,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Ku(_,f.mode,x),v.return=f,v):(v=a(v,_.children||[]),v.return=f,v)}function u(f,v,_,x,T){return v===null||v.tag!==7?(v=us(_,f.mode,x,T),v.return=f,v):(v=a(v,_),v.return=f,v)}function h(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Qu(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:return _=hc(v.type,v.key,v.props,null,f.mode,_),Zr(_,v),_.return=f,_;case so:return v=Ku(v,f.mode,_),v.return=f,v;case ma:return v=es(v),h(f,v,_)}if(ro(v)||Wr(v))return v=us(v,f.mode,_,null),v.return=f,v;if(typeof v.then=="function")return h(f,El(v),_);if(v.$$typeof===Wi)return h(f,bl(f,v),_);Tl(f,v)}return null}function d(f,v,_,x){var T=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return T!==null?null:o(f,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case _l:return _.key===T?l(f,v,_,x):null;case so:return _.key===T?c(f,v,_,x):null;case ma:return _=es(_),d(f,v,_,x)}if(ro(_)||Wr(_))return T!==null?null:u(f,v,_,x,null);if(typeof _.then=="function")return d(f,v,El(_),x);if(_.$$typeof===Wi)return d(f,v,bl(f,_),x);Tl(f,_)}return null}function p(f,v,_,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return f=f.get(_)||null,o(v,f,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _l:return f=f.get(x.key===null?_:x.key)||null,l(v,f,x,T);case so:return f=f.get(x.key===null?_:x.key)||null,c(v,f,x,T);case ma:return x=es(x),p(f,v,_,x,T)}if(ro(x)||Wr(x))return f=f.get(_)||null,u(v,f,x,T,null);if(typeof x.then=="function")return p(f,v,_,El(x),T);if(x.$$typeof===Wi)return p(f,v,_,bl(v,x),T);Tl(v,x)}return null}function m(f,v,_,x){for(var T=null,R=null,A=v,D=v=0,M=null;A!==null&&D<_.length;D++){A.index>D?(M=A,A=null):M=A.sibling;var b=d(f,A,_[D],x);if(b===null){A===null&&(A=M);break}e&&A&&b.alternate===null&&t(f,A),v=s(b,v,D),R===null?T=b:R.sibling=b,R=b,A=M}if(D===_.length)return n(f,A),ee&&Vi(f,D),T;if(A===null){for(;D<_.length;D++)A=h(f,_[D],x),A!==null&&(v=s(A,v,D),R===null?T=A:R.sibling=A,R=A);return ee&&Vi(f,D),T}for(A=i(A);D<_.length;D++)M=p(A,f,D,_[D],x),M!==null&&(e&&M.alternate!==null&&A.delete(M.key===null?D:M.key),v=s(M,v,D),R===null?T=M:R.sibling=M,R=M);return e&&A.forEach(function(U){return t(f,U)}),ee&&Vi(f,D),T}function y(f,v,_,x){if(_==null)throw Error(j(151));for(var T=null,R=null,A=v,D=v=0,M=null,b=_.next();A!==null&&!b.done;D++,b=_.next()){A.index>D?(M=A,A=null):M=A.sibling;var U=d(f,A,b.value,x);if(U===null){A===null&&(A=M);break}e&&A&&U.alternate===null&&t(f,A),v=s(U,v,D),R===null?T=U:R.sibling=U,R=U,A=M}if(b.done)return n(f,A),ee&&Vi(f,D),T;if(A===null){for(;!b.done;D++,b=_.next())b=h(f,b.value,x),b!==null&&(v=s(b,v,D),R===null?T=b:R.sibling=b,R=b);return ee&&Vi(f,D),T}for(A=i(A);!b.done;D++,b=_.next())b=p(A,f,D,b.value,x),b!==null&&(e&&b.alternate!==null&&A.delete(b.key===null?D:b.key),v=s(b,v,D),R===null?T=b:R.sibling=b,R=b);return e&&A.forEach(function(F){return t(f,F)}),ee&&Vi(f,D),T}function g(f,v,_,x){if(typeof _=="object"&&_!==null&&_.type===Qs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case _l:t:{for(var T=_.key;v!==null;){if(v.key===T){if(T=_.type,T===Qs){if(v.tag===7){n(f,v.sibling),x=a(v,_.props.children),x.return=f,f=x;break t}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ma&&es(T)===v.type){n(f,v.sibling),x=a(v,_.props),Zr(x,_),x.return=f,f=x;break t}n(f,v);break}else t(f,v);v=v.sibling}_.type===Qs?(x=us(_.props.children,f.mode,x,_.key),x.return=f,f=x):(x=hc(_.type,_.key,_.props,null,f.mode,x),Zr(x,_),x.return=f,f=x)}return r(f);case so:t:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(f,v.sibling),x=a(v,_.children||[]),x.return=f,f=x;break t}else{n(f,v);break}else t(f,v);v=v.sibling}x=Ku(_,f.mode,x),x.return=f,f=x}return r(f);case ma:return _=es(_),g(f,v,_,x)}if(ro(_))return m(f,v,_,x);if(Wr(_)){if(T=Wr(_),typeof T!="function")throw Error(j(150));return _=T.call(_),y(f,v,_,x)}if(typeof _.then=="function")return g(f,v,El(_),x);if(_.$$typeof===Wi)return g(f,v,bl(f,_),x);Tl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,v!==null&&v.tag===6?(n(f,v.sibling),x=a(v,_),x.return=f,f=x):(n(f,v),x=Qu(_,f.mode,x),x.return=f,f=x),r(f)):n(f,v)}return function(f,v,_,x){try{Io=0;var T=g(f,v,_,x);return dr=null,T}catch(A){if(A===Fr||A===xu)throw A;var R=Nn(29,A,null,f.mode);return R.lanes=x,R.return=f,R}finally{}}}var gs=K_(!0),$_=K_(!1),ga=!1;function vp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ah(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,oe&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=zc(e),k_(e,null,n),t}return vu(e,i,t,n),zc(e)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,__(e,n)}}function tf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Rh=!1;function xo(){if(Rh){var e=hr;if(e!==null)throw e}}function So(e,t,n,i){Rh=!1;var a=e.updateQueue;ga=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=a.baseState;r=0,u=c=l=null,o=s;do{var d=o.lane&-536870913,p=d!==o.lane;if(p?(te&d)===d:(i&d)===d){d!==0&&d===yr&&(Rh=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var m=e,y=o;d=t;var g=n;switch(y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(g,h,d);break t}h=m;break t;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(g,h,d):m,d==null)break t;h=Re({},h,d);break t;case 2:ga=!0}}d=o.callback,d!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[d]:p.push(d))}else p={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,r|=d;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);u===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=u,s===null&&(a.shared.lanes=0),Ha|=r,e.lanes=r,e.memoizedState=h}}function tv(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function ev(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)tv(n[e],t)}var Mr=Ri(null),Hc=Ri(0);function Jm(e,t){e=aa,be(Hc,e),be(Mr,t),aa=e|t.baseLanes}function Ch(){be(Hc,aa),be(Mr,Mr.current)}function xp(){aa=Hc.current,Qe(Mr),Qe(Hc)}var Gn=Ri(null),$n=null;function va(e){var t=e.alternate;be(Pe,Pe.current&1),be(Gn,e),$n===null&&(t===null||Mr.current!==null||t.memoizedState!==null)&&($n=e)}function wh(e){be(Pe,Pe.current),be(Gn,e),$n===null&&($n=e)}function nv(e){e.tag===22?(be(Pe,Pe.current),be(Gn,e),$n===null&&($n=e)):xa()}function xa(){be(Pe,Pe.current),be(Gn,Gn.current)}function Un(e){Qe(Gn),$n===e&&($n=null),Qe(Pe)}var Pe=Ri(0);function Vc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Zh(n)||jh(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=0,qt=null,_e=null,Fe=null,Gc=!1,pr=!1,_s=!1,Xc=0,Bo=0,mr=null,_M=0;function Le(){throw Error(j(321))}function Sp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vn(e[n],t[n]))return!1;return!0}function yp(e,t,n,i,a,s){return ea=s,qt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=e===null||e.memoizedState===null?Nv:Lp,_s=!1,s=n(i,a),_s=!1,pr&&(s=av(t,n,i,a)),iv(e),s}function iv(e){Gt.H=Fo;var t=_e!==null&&_e.next!==null;if(ea=0,Fe=_e=qt=null,Gc=!1,Bo=0,mr=null,t)throw Error(j(300));e===null||Ge||(e=e.dependencies,e!==null&&Bc(e)&&(Ge=!0))}function av(e,t,n,i){qt=e;var a=0;do{if(pr&&(mr=null),Bo=0,pr=!1,25<=a)throw Error(j(301));if(a+=1,Fe=_e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Gt.H=Ov,s=t(n,i)}while(pr);return s}function vM(){var e=Gt.H,t=e.useState()[0];return t=typeof t.then=="function"?rl(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(qt.flags|=1024),t}function Mp(){var e=Xc!==0;return Xc=0,e}function bp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ep(e){if(Gc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gc=!1}ea=0,Fe=_e=qt=null,pr=!1,Bo=Xc=0,mr=null}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?qt.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function ze(){if(_e===null){var e=qt.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Fe===null?qt.memoizedState:Fe.next;if(t!==null)Fe=t,_e=e;else{if(e===null)throw qt.alternate===null?Error(j(467)):Error(j(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Fe===null?qt.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rl(e){var t=Bo;return Bo+=1,mr===null&&(mr=[]),e=Q_(mr,e,t),t=qt,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?Nv:Lp),e}function yu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return rl(e);if(e.$$typeof===Wi)return nn(e)}throw Error(j(438,String(e)))}function Tp(e){var t=null,n=qt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=qt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Su(),qt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=iy;return t.index++,n}function na(e,t){return typeof t=="function"?t(e):t}function pc(e){var t=ze();return Ap(t,_e,e)}function Ap(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,u=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(te&h)===h:(ea&h)===h){var d=c.revertLane;if(d===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===yr&&(u=!0);else if((ea&d)===d){c=c.next,d===yr&&(u=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,qt.lanes|=d,Ha|=d;h=c.action,_s&&n(s,h),s=c.hasEagerState?c.eagerState:n(s,h)}else d={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,qt.lanes|=h,Ha|=h;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Vn(s,e.memoizedState)&&(Ge=!0,u&&(n=hr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ef(e){var t=ze(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Vn(s,t.memoizedState)||(Ge=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function sv(e,t,n){var i=qt,a=ze(),s=ee;if(s){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!Vn((_e||a).memoizedState,n);if(r&&(a.memoizedState=n,Ge=!0),a=a.queue,Rp(lv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,br(9,{destroy:void 0},ov.bind(null,i,a,n,t),null),xe===null)throw Error(j(349));s||ea&127||rv(i,t,n)}return n}function rv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=qt.updateQueue,t===null?(t=Su(),qt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ov(e,t,n,i){t.value=n,t.getSnapshot=i,cv(t)&&uv(e)}function lv(e,t,n){return n(function(){cv(t)&&uv(e)})}function cv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vn(e,n)}catch{return!0}}function uv(e){var t=Es(e,2);t!==null&&Sn(t,e,2)}function Dh(e){var t=hn();if(typeof e=="function"){var n=e;if(e=n(),_s){Ma(!0);try{n()}finally{Ma(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t}function fv(e,t,n,i){return e.baseState=n,Ap(e,_e,typeof i=="function"?i:na)}function xM(e,t,n,i,a){if(bu(e))throw Error(j(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Gt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,hv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function hv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Gt.T,r={};Gt.T=r;try{var o=n(a,i),l=Gt.S;l!==null&&l(r,o),Qm(e,t,o)}catch(c){Uh(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Gt.T=s}}else try{s=n(a,i),Qm(e,t,s)}catch(c){Uh(e,t,c)}}function Qm(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Km(e,t,i)},function(i){return Uh(e,t,i)}):Km(e,t,n)}function Km(e,t,n){t.status="fulfilled",t.value=n,dv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,hv(e,n)))}function Uh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,dv(t),t=t.next;while(t!==i)}e.action=null}function dv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pv(e,t){return t}function $m(e,t){if(ee){var n=xe.formState;if(n!==null){t:{var i=qt;if(ee){if(Ae){e:{for(var a=Ae,s=Kn;a.nodeType!==8;){if(!s){a=null;break e}if(a=ti(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ae=ti(a.nextSibling),i=a.data==="F!";break t}}Ba(i)}i=!1}i&&(t=n[0])}}return n=hn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pv,lastRenderedState:t},n.queue=i,n=Dv.bind(null,qt,i),i.dispatch=n,i=Dh(!1),s=Up.bind(null,qt,!1,i.queue),i=hn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=xM.bind(null,qt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function t0(e){var t=ze();return mv(t,_e,e)}function mv(e,t,n){if(t=Ap(e,t,pv)[0],e=pc(na)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=rl(t)}catch(r){throw r===Fr?xu:r}else i=t;t=ze();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(qt.flags|=2048,br(9,{destroy:void 0},SM.bind(null,a,n),null)),[i,s,e]}function SM(e,t){e.action=t}function e0(e){var t=ze(),n=_e;if(n!==null)return mv(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function br(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=qt.updateQueue,t===null&&(t=Su(),qt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function gv(){return ze().memoizedState}function mc(e,t,n,i){var a=hn();qt.flags|=e,a.memoizedState=br(1|t,{destroy:void 0},n,i===void 0?null:i)}function Mu(e,t,n,i){var a=ze();i=i===void 0?null:i;var s=a.memoizedState.inst;_e!==null&&i!==null&&Sp(i,_e.memoizedState.deps)?a.memoizedState=br(t,s,n,i):(qt.flags|=e,a.memoizedState=br(1|t,s,n,i))}function n0(e,t){mc(8390656,8,e,t)}function Rp(e,t){Mu(2048,8,e,t)}function yM(e){qt.flags|=4;var t=qt.updateQueue;if(t===null)t=Su(),qt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _v(e){var t=ze().memoizedState;return yM({ref:t,nextImpl:e}),function(){if(oe&2)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function vv(e,t){return Mu(4,2,e,t)}function xv(e,t){return Mu(4,4,e,t)}function Sv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yv(e,t,n){n=n!=null?n.concat([e]):null,Mu(4,4,Sv.bind(null,t,e),n)}function Cp(){}function Mv(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Sp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function bv(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Sp(t,i[1]))return i[0];if(i=e(),_s){Ma(!0);try{e()}finally{Ma(!1)}}return n.memoizedState=[i,t],i}function wp(e,t,n){return n===void 0||ea&1073741824&&!(te&261930)?e.memoizedState=t:(e.memoizedState=n,e=fx(),qt.lanes|=e,Ha|=e,n)}function Ev(e,t,n,i){return Vn(n,t)?n:Mr.current!==null?(e=wp(e,n,i),Vn(e,t)||(Ge=!0),e):!(ea&42)||ea&1073741824&&!(te&261930)?(Ge=!0,e.memoizedState=n):(e=fx(),qt.lanes|=e,Ha|=e,t)}function Tv(e,t,n,i,a){var s=le.p;le.p=s!==0&&8>s?s:8;var r=Gt.T,o={};Gt.T=o,Up(e,!1,t,n);try{var l=a(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=gM(l,i);yo(e,t,u,Fn(e))}else yo(e,t,i,Fn(e))}catch(h){yo(e,t,{then:function(){},status:"rejected",reason:h},Fn())}finally{le.p=s,r!==null&&o.types!==null&&(r.types=o.types),Gt.T=r}}function MM(){}function Lh(e,t,n,i){if(e.tag!==5)throw Error(j(476));var a=Av(e).queue;Tv(e,a,t,cs,n===null?MM:function(){return Rv(e),n(i)})}function Av(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:cs,baseState:cs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:cs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rv(e){var t=Av(e);t.next===null&&(t=e.alternate.memoizedState),yo(e,t.next.queue,{},Fn())}function Dp(){return nn(Go)}function Cv(){return ze().memoizedState}function wv(){return ze().memoizedState}function bM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Fn();e=Da(n);var i=Ua(t,e,n);i!==null&&(Sn(i,t,n),vo(i,t,n)),t={cache:mp()},e.payload=t;return}t=t.return}}function EM(e,t,n){var i=Fn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},bu(e)?Uv(t,n):(n=fp(e,t,n,i),n!==null&&(Sn(n,e,i),Lv(n,t,i)))}function Dv(e,t,n){var i=Fn();yo(e,t,n,i)}function yo(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(bu(e))Uv(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Vn(o,r))return vu(e,t,a,0),xe===null&&_u(),!1}catch{}finally{}if(n=fp(e,t,a,i),n!==null)return Sn(n,e,i),Lv(n,t,i),!0}return!1}function Up(e,t,n,i){if(i={lane:2,revertLane:Hp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},bu(e)){if(t)throw Error(j(479))}else t=fp(e,n,i,2),t!==null&&Sn(t,e,2)}function bu(e){var t=e.alternate;return e===qt||t!==null&&t===qt}function Uv(e,t){pr=Gc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,__(e,n)}}var Fo={readContext:nn,use:yu,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};Fo.useEffectEvent=Le;var Nv={readContext:nn,use:yu,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:n0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,mc(4194308,4,Sv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mc(4194308,4,e,t)},useInsertionEffect:function(e,t){mc(4,2,e,t)},useMemo:function(e,t){var n=hn();t=t===void 0?null:t;var i=e();if(_s){Ma(!0);try{e()}finally{Ma(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=hn();if(n!==void 0){var a=n(t);if(_s){Ma(!0);try{n(t)}finally{Ma(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=EM.bind(null,qt,e),[i.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:function(e){e=Dh(e);var t=e.queue,n=Dv.bind(null,qt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cp,useDeferredValue:function(e,t){var n=hn();return wp(n,e,t)},useTransition:function(){var e=Dh(!1);return e=Tv.bind(null,qt,e.queue,!0,!1),hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=qt,a=hn();if(ee){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),xe===null)throw Error(j(349));te&127||rv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,n0(lv.bind(null,i,s,e),[e]),i.flags|=2048,br(9,{destroy:void 0},ov.bind(null,i,s,n,t),null),n},useId:function(){var e=hn(),t=xe.identifierPrefix;if(ee){var n=vi,i=_i;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Xc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=_M++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dp,useFormState:$m,useActionState:$m,useOptimistic:function(e){var t=hn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Up.bind(null,qt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Tp,useCacheRefresh:function(){return hn().memoizedState=bM.bind(null,qt)},useEffectEvent:function(e){var t=hn(),n={impl:e};return t.memoizedState=n,function(){if(oe&2)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},Lp={readContext:nn,use:yu,useCallback:Mv,useContext:nn,useEffect:Rp,useImperativeHandle:yv,useInsertionEffect:vv,useLayoutEffect:xv,useMemo:bv,useReducer:pc,useRef:gv,useState:function(){return pc(na)},useDebugValue:Cp,useDeferredValue:function(e,t){var n=ze();return Ev(n,_e.memoizedState,e,t)},useTransition:function(){var e=pc(na)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:rl(e),t]},useSyncExternalStore:sv,useId:Cv,useHostTransitionStatus:Dp,useFormState:t0,useActionState:t0,useOptimistic:function(e,t){var n=ze();return fv(n,_e,e,t)},useMemoCache:Tp,useCacheRefresh:wv};Lp.useEffectEvent=_v;var Ov={readContext:nn,use:yu,useCallback:Mv,useContext:nn,useEffect:Rp,useImperativeHandle:yv,useInsertionEffect:vv,useLayoutEffect:xv,useMemo:bv,useReducer:ef,useRef:gv,useState:function(){return ef(na)},useDebugValue:Cp,useDeferredValue:function(e,t){var n=ze();return _e===null?wp(n,e,t):Ev(n,_e.memoizedState,e,t)},useTransition:function(){var e=ef(na)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:rl(e),t]},useSyncExternalStore:sv,useId:Cv,useHostTransitionStatus:Dp,useFormState:e0,useActionState:e0,useOptimistic:function(e,t){var n=ze();return _e!==null?fv(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Tp,useCacheRefresh:wv};Ov.useEffectEvent=_v;function nf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nh={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Fn(),a=Da(i);a.payload=t,n!=null&&(a.callback=n),t=Ua(e,a,i),t!==null&&(Sn(t,e,i),vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Fn(),a=Da(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ua(e,a,i),t!==null&&(Sn(t,e,i),vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fn(),i=Da(n);i.tag=2,t!=null&&(i.callback=t),t=Ua(e,i,n),t!==null&&(Sn(t,e,n),vo(t,e,n))}};function i0(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Oo(n,i)||!Oo(a,s):!0}function a0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Nh.enqueueReplaceState(t,t.state,null)}function vs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Re({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Pv(e){Pc(e)}function zv(e){console.error(e)}function Iv(e){Pc(e)}function kc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function s0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Oh(e,t,n){return n=Da(n),n.tag=3,n.payload={element:null},n.callback=function(){kc(e,t)},n}function Bv(e){return e=Da(e),e.tag=3,e}function Fv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){s0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){s0(t,n,i),typeof a!="function"&&(La===null?La=new Set([this]):La.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function TM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Br(t,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 31:case 13:return $n===null?jc():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Fc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),pf(e,i,a)),!1;case 22:return n.flags|=65536,i===Fc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),pf(e,i,a)),!1}throw Error(j(435,n.tag))}return pf(e,i,a),jc(),!1}if(ee)return t=Gn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==yh&&(e=Error(j(422),{cause:i}),zo(Qn(e,n)))):(i!==yh&&(t=Error(j(423),{cause:i}),zo(Qn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Qn(i,n),a=Oh(e.stateNode,i,a),tf(e,a),Ne!==4&&(Ne=2)),!1;var s=Error(j(520),{cause:i});if(s=Qn(s,n),Eo===null?Eo=[s]:Eo.push(s),Ne!==4&&(Ne=2),t===null)return!0;i=Qn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Oh(n.stateNode,i,e),tf(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(La===null||!La.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Bv(a),Fv(a,e,n,i),tf(n,a),!1}n=n.return}while(n!==null);return!1}var Np=Error(j(461)),Ge=!1;function $e(e,t,n,i){t.child=e===null?$_(t,null,n,i):gs(t,e.child,n,i)}function r0(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ms(t),i=yp(e,t,n,r,s,a),o=Mp(),e!==null&&!Ge?(bp(e,t,a),ia(e,t,a)):(ee&&o&&dp(t),t.flags|=1,$e(e,t,i,a),t.child)}function o0(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Hv(e,t,s,i,a)):(e=hc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Op(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(r,i)&&e.ref===t.ref)return ia(e,t,a)}return t.flags|=1,e=ji(s,i),e.ref=t.ref,e.return=t,t.child=e}function Hv(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Oo(s,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=s,Op(e,a))e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,ia(e,t,a)}return Ph(e,t,n,i,a)}function Vv(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return l0(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&dc(t,s!==null?s.cachePool:null),s!==null?Jm(t,s):Ch(),nv(t);else return i=t.lanes=536870912,l0(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(dc(t,s.cachePool),Jm(t,s),xa(),t.memoizedState=null):(e!==null&&dc(t,null),Ch(),xa());return $e(e,t,a,n),t.child}function lo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function l0(e,t,n,i,a){var s=gp();return s=s===null?null:{parent:Ve._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&dc(t,null),Ch(),nv(t),e!==null&&Br(e,t,i,!0),t.childLanes=a,null}function gc(e,t){return t=Wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function c0(e,t,n){return gs(t,e.child,null,n),e=gc(t,t.pendingProps),e.flags|=2,Un(t),t.memoizedState=null,e}function AM(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(i.mode==="hidden")return e=gc(t,i),t.lanes=536870912,lo(null,e);if(wh(t),(e=Ae)?(e=Nx(e,Kn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=q_(e),n.return=t,t.child=n,en=t,Ae=null)):e=null,e===null)throw Ba(t);return t.lanes=536870912,null}return gc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(wh(t),a)if(t.flags&256)t.flags&=-257,t=c0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(Ge||Br(e,t,n,!1),a=(n&e.childLanes)!==0,Ge||a){if(i=xe,i!==null&&(r=v_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Es(e,r),Sn(i,e,r),Np;jc(),t=c0(e,t,n)}else e=s.treeContext,Ae=ti(r.nextSibling),en=t,ee=!0,wa=null,Kn=!1,e!==null&&Z_(t,e),t=gc(t,i),t.flags|=4096;return t}return e=ji(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ph(e,t,n,i,a){return ms(t),n=yp(e,t,n,i,void 0,a),i=Mp(),e!==null&&!Ge?(bp(e,t,a),ia(e,t,a)):(ee&&i&&dp(t),t.flags|=1,$e(e,t,n,a),t.child)}function u0(e,t,n,i,a,s){return ms(t),t.updateQueue=null,n=av(t,i,n,a),iv(e),i=Mp(),e!==null&&!Ge?(bp(e,t,s),ia(e,t,s)):(ee&&i&&dp(t),t.flags|=1,$e(e,t,n,s),t.child)}function f0(e,t,n,i,a){if(ms(t),t.stateNode===null){var s=sr,r=n.contextType;typeof r=="object"&&r!==null&&(s=nn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Nh,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},vp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?nn(r):sr,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(nf(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Nh.enqueueReplaceState(s,s.state,null),So(t,i,s,a),xo(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=vs(n,o);s.props=l;var c=s.context,u=n.contextType;r=sr,typeof u=="object"&&u!==null&&(r=nn(u));var h=n.getDerivedStateFromProps;u=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&a0(t,s,i,r),ga=!1;var d=t.memoizedState;s.state=d,So(t,i,s,a),xo(),c=t.memoizedState,o||d!==c||ga?(typeof h=="function"&&(nf(t,n,h,i),c=t.memoizedState),(l=ga||i0(t,n,l,i,d,c,r))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Ah(e,t),r=t.memoizedProps,u=vs(n,r),s.props=u,h=t.pendingProps,d=s.context,c=n.contextType,l=sr,typeof c=="object"&&c!==null&&(l=nn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==h||d!==l)&&a0(t,s,i,l),ga=!1,d=t.memoizedState,s.state=d,So(t,i,s,a),xo();var p=t.memoizedState;r!==h||d!==p||ga||e!==null&&e.dependencies!==null&&Bc(e.dependencies)?(typeof o=="function"&&(nf(t,n,o,i),p=t.memoizedState),(u=ga||i0(t,n,u,i,d,p,l)||e!==null&&e.dependencies!==null&&Bc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,_c(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=gs(t,e.child,null,a),t.child=gs(t,null,n,a)):$e(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ia(e,t,a),e}function h0(e,t,n,i){return ps(),t.flags|=256,$e(e,t,n,i),t.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(e){return{baseLanes:e,cachePool:J_()}}function rf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pn),e}function Gv(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(a?va(t):xa(),(e=Ae)?(e=Nx(e,Kn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=q_(e),n.return=t,t.child=n,en=t,Ae=null)):e=null,e===null)throw Ba(t);return jh(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(xa(),a=t.mode,o=Wc({mode:"hidden",children:o},a),i=us(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=sf(n),i.childLanes=rf(e,r,n),t.memoizedState=af,lo(null,i)):(va(t),zh(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(va(t),t.flags&=-257,t=of(e,t,n)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,t=null):(xa(),o=i.fallback,a=t.mode,i=Wc({mode:"visible",children:i.children},a),o=us(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,gs(t,e.child,null,n),i=t.child,i.memoizedState=sf(n),i.childLanes=rf(e,r,n),t.memoizedState=af,t=lo(null,i));else if(va(t),jh(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(j(419)),i.stack="",i.digest=r,zo({value:i,source:null,stack:null}),t=of(e,t,n)}else if(Ge||Br(e,t,n,!1),r=(n&e.childLanes)!==0,Ge||r){if(r=xe,r!==null&&(i=v_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Es(e,i),Sn(r,e,i),Np;Zh(o)||jc(),t=of(e,t,n)}else Zh(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ae=ti(o.nextSibling),en=t,ee=!0,wa=null,Kn=!1,e!==null&&Z_(t,e),t=zh(t,i.children),t.flags|=4096);return t}return a?(xa(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=ji(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ji(c,o):(o=us(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,lo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=sf(n):(a=o.cachePool,a!==null?(l=Ve._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=J_(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=rf(e,r,n),t.memoizedState=af,lo(e.child,i)):(va(t),n=e.child,e=n.sibling,n=ji(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function zh(e,t){return t=Wc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Wc(e,t){return e=Nn(22,e,null,t),e.lanes=0,e}function of(e,t,n){return gs(t,e.child,null,n),e=zh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bh(e.return,t,n)}function lf(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Xv(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Pe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,be(Pe,r),$e(e,t,i,n),i=ee?Po:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&d0(e,n,t);else if(e.tag===19)d0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Vc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),lf(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Vc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}lf(t,!0,n,null,s,i);break;case"together":lf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ia(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ha|=t.lanes,!(n&t.childLanes))if(e!==null){if(Br(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=ji(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ji(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Op(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Bc(e)))}function RM(e,t,n){switch(t.tag){case 3:Uc(t,t.stateNode.containerInfo),_a(t,Ve,e.memoizedState.cache),ps();break;case 27:case 5:uh(t);break;case 4:Uc(t,t.stateNode.containerInfo);break;case 10:_a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wh(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(va(t),t.flags|=128,null):n&t.child.childLanes?Gv(e,t,n):(va(t),e=ia(e,t,n),e!==null?e.sibling:null);va(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Br(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Xv(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),be(Pe,Pe.current),i)break;return null;case 22:return t.lanes=0,Vv(e,t,n,t.pendingProps);case 24:_a(t,Ve,e.memoizedState.cache)}return ia(e,t,n)}function kv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!Op(e,n)&&!(t.flags&128))return Ge=!1,RM(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,ee&&t.flags&1048576&&Y_(t,Po,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=es(t.elementType),t.type=e,typeof e=="function")hp(e)?(i=vs(e,i),t.tag=1,t=f0(null,t,e,i,n)):(t.tag=0,t=Ph(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Kd){t.tag=11,t=r0(null,t,e,i,n);break t}else if(a===$d){t.tag=14,t=o0(null,t,e,i,n);break t}}throw t=lh(e)||e,Error(j(306,t,""))}}return t;case 0:return Ph(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=vs(i,t.pendingProps),f0(e,t,i,a,n);case 3:t:{if(Uc(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Ah(e,t),So(t,i,null,n);var r=t.memoizedState;if(i=r.cache,_a(t,Ve,i),i!==s.cache&&Eh(t,[Ve],n,!0),xo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=h0(e,t,i,n);break t}else if(i!==a){a=Qn(Error(j(424)),t),zo(a),t=h0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=ti(e.firstChild),en=t,ee=!0,wa=null,Kn=!0,n=$_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ps(),i===a){t=ia(e,t,n);break t}$e(e,t,i,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=N0(t.type,null,t.pendingProps,null))?t.memoizedState=n:ee||(n=t.type,e=t.pendingProps,i=$c(Ca.current).createElement(n),i[tn]=t,i[Mn]=e,an(i,n,e),Je(i),t.stateNode=i):t.memoizedState=N0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return uh(t),e===null&&ee&&(i=t.stateNode=Ox(t.type,t.pendingProps,Ca.current),en=t,Kn=!0,a=Ae,Xa(t.type)?(Jh=a,Ae=ti(i.firstChild)):Ae=a),$e(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((a=i=Ae)&&(i=ib(i,t.type,t.pendingProps,Kn),i!==null?(t.stateNode=i,en=t,Ae=ti(i.firstChild),Kn=!1,a=!0):a=!1),a||Ba(t)),uh(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,qh(a,s)?i=null:r!==null&&qh(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=yp(e,t,vM,null,null,n),Go._currentValue=a),_c(e,t),$e(e,t,i,n),t.child;case 6:return e===null&&ee&&((e=n=Ae)&&(n=ab(n,t.pendingProps,Kn),n!==null?(t.stateNode=n,en=t,Ae=null,e=!0):e=!1),e||Ba(t)),null;case 13:return Gv(e,t,n);case 4:return Uc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=gs(t,null,i,n):$e(e,t,i,n),t.child;case 11:return r0(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,_a(t,t.type,i.value),$e(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,ms(t),a=nn(a),i=i(a),t.flags|=1,$e(e,t,i,n),t.child;case 14:return o0(e,t,t.type,t.pendingProps,n);case 15:return Hv(e,t,t.type,t.pendingProps,n);case 19:return Xv(e,t,n);case 31:return AM(e,t,n);case 22:return Vv(e,t,n,t.pendingProps);case 24:return ms(t),i=nn(Ve),e===null?(a=gp(),a===null&&(a=xe,s=mp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},vp(t),_a(t,Ve,a)):(e.lanes&n&&(Ah(e,t),So(t,null,null,n),xo()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),_a(t,Ve,i)):(i=s.cache,_a(t,Ve,i),i!==a.cache&&Eh(t,[Ve],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function Li(e){e.flags|=4}function cf(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(px())e.flags|=8192;else throw hs=Fc,_p}else e.flags&=-16777217}function p0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ix(t))if(px())e.flags|=8192;else throw hs=Fc,_p}function Al(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?m_():536870912,e.lanes|=t,Er|=t)}function jr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function CM(e,t,n){var i=t.pendingProps;switch(pp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ji(Ve),vr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?Li(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$u())),Te(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Li(t),s!==null?(Te(t),p0(t,s)):(Te(t),cf(t,a,null,i,n))):s?s!==e.memoizedState?(Li(t),Te(t),p0(t,s)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Li(t),Te(t),cf(t,a,e,i,n)),null;case 27:if(Lc(t),n=Ca.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Te(t),null}e=yi.current,Ds(t)?Xm(t):(e=Ox(a,i,n),t.stateNode=e,Li(t))}return Te(t),null;case 5:if(Lc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Te(t),null}if(s=yi.current,Ds(t))Xm(t);else{var r=$c(Ca.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[tn]=t,s[Mn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(an(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Li(t)}}return Te(t),cf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Li(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=Ca.current,Ds(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=en,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[tn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Dx(e.nodeValue,n)),e||Ba(t,!0)}else e=$c(e).createTextNode(i),e[tn]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ds(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[tn]=t}else ps(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Un(t),t):(Un(t),null);if(t.flags&128)throw Error(j(558))}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ds(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(j(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[tn]=t}else ps(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Un(t),t):(Un(t),null)}return Un(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Al(t,t.updateQueue),Te(t),null);case 4:return vr(),e===null&&Vp(t.stateNode.containerInfo),Te(t),null;case 10:return Ji(t.type),Te(t),null;case 19:if(Qe(Pe),i=t.memoizedState,i===null)return Te(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)jr(i,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Vc(e),s!==null){for(t.flags|=128,jr(i,!1),e=s.updateQueue,t.updateQueue=e,Al(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)W_(n,e),n=n.sibling;return be(Pe,Pe.current&1|2),ee&&Vi(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&zn()>Yc&&(t.flags|=128,a=!0,jr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Vc(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Al(t,e),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ee)return Te(t),null}else 2*zn()-i.renderingStartTime>Yc&&n!==536870912&&(t.flags|=128,a=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=zn(),e.sibling=null,n=Pe.current,be(Pe,a?n&1|2:n&1),ee&&Vi(t,i.treeForkCount),e):(Te(t),null);case 22:case 23:return Un(t),xp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&Al(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Qe(fs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(Ve),Te(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function wM(e,t){switch(pp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(Ve),vr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Lc(t),null;case 31:if(t.memoizedState!==null){if(Un(t),t.alternate===null)throw Error(j(340));ps()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Un(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));ps()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Qe(Pe),null;case 4:return vr(),null;case 10:return Ji(t.type),null;case 22:case 23:return Un(t),xp(),e!==null&&Qe(fs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ji(Ve),null;case 25:return null;default:return null}}function Wv(e,t){switch(pp(t),t.tag){case 3:Ji(Ve),vr();break;case 26:case 27:case 5:Lc(t);break;case 4:vr();break;case 31:t.memoizedState!==null&&Un(t);break;case 13:Un(t);break;case 19:Qe(Pe);break;case 10:Ji(t.type);break;case 22:case 23:Un(t),xp(),e!==null&&Qe(fs);break;case 24:Ji(Ve)}}function ol(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){de(t,t.return,o)}}function Fa(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(u){de(a,l,u)}}}i=i.next}while(i!==s)}}catch(u){de(t,t.return,u)}}function qv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ev(t,n)}catch(i){de(e,e.return,i)}}}function Yv(e,t,n){n.props=vs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){de(e,t,i)}}function Mo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){de(e,t,a)}}function xi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){de(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){de(e,t,a)}else n.current=null}function Zv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){de(e,e.return,a)}}function uf(e,t,n){try{var i=e.stateNode;QM(i,e.type,n,t),i[Mn]=t}catch(a){de(e,e.return,a)}}function jv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||jv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ih(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(i!==4&&(i===27&&Xa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ih(e,t,n),e=e.sibling;e!==null;)Ih(e,t,n),e=e.sibling}function qc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Xa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);an(t,i,n),t[tn]=e,t[Mn]=n}catch(s){de(e,e.return,s)}}var Gi=!1,He=!1,hf=!1,m0=typeof WeakSet=="function"?WeakSet:Set,je=null;function DM(e,t){if(e=e.containerInfo,kh=iu,e=I_(e),cp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,u=0,h=e,d=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=r+a),h!==s||i!==0&&h.nodeType!==3||(l=r+i),h.nodeType===3&&(r+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===e)break e;if(d===n&&++c===a&&(o=r),d===s&&++u===i&&(l=r),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wh={focusedElem:e,selectionRange:n},iu=!1,je=t;je!==null;)if(t=je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,je=e;else for(;je!==null;){switch(t=je,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var m=vs(n.type,a);e=i.getSnapshotBeforeUpdate(m,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(y){de(n,n.return,y)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Yh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(j(163))}if(e=t.sibling,e!==null){e.return=t.return,je=e;break}je=t.return}}function Qv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n),i&4&&ol(5,n);break;case 1:if(Oi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){de(n,n.return,r)}else{var a=vs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){de(n,n.return,r)}}i&64&&qv(n),i&512&&Mo(n,n.return);break;case 3:if(Oi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ev(e,t)}catch(r){de(n,n.return,r)}}break;case 27:t===null&&i&4&&Jv(n);case 26:case 5:Oi(e,n),t===null&&i&4&&Zv(n),i&512&&Mo(n,n.return);break;case 12:Oi(e,n);break;case 31:Oi(e,n),i&4&&tx(e,n);break;case 13:Oi(e,n),i&4&&ex(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=FM.bind(null,n),sb(e,n))));break;case 22:if(i=n.memoizedState!==null||Gi,!i){t=t!==null&&t.memoizedState!==null||He,a=Gi;var s=He;Gi=i,(He=t)&&!s?Hi(e,n,(n.subtreeFlags&8772)!==0):Oi(e,n),Gi=a,He=s}break;case 30:break;default:Oi(e,n)}}function Kv(e){var t=e.alternate;t!==null&&(e.alternate=null,Kv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ip(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,vn=!1;function Ni(e,t,n){for(n=n.child;n!==null;)$v(e,t,n),n=n.sibling}function $v(e,t,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 26:He||xi(n,t),Ni(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||xi(n,t);var i=Ce,a=vn;Xa(n.type)&&(Ce=n.stateNode,vn=!1),Ni(e,t,n),Ao(n.stateNode),Ce=i,vn=a;break;case 5:He||xi(n,t);case 6:if(i=Ce,a=vn,Ce=null,Ni(e,t,n),Ce=i,vn=a,Ce!==null)if(vn)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(s){de(n,t,s)}else try{Ce.removeChild(n.stateNode)}catch(s){de(n,t,s)}break;case 18:Ce!==null&&(vn?(e=Ce,C0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Cr(e)):C0(Ce,n.stateNode));break;case 4:i=Ce,a=vn,Ce=n.stateNode.containerInfo,vn=!0,Ni(e,t,n),Ce=i,vn=a;break;case 0:case 11:case 14:case 15:Fa(2,n,t),He||Fa(4,n,t),Ni(e,t,n);break;case 1:He||(xi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Yv(n,t,i)),Ni(e,t,n);break;case 21:Ni(e,t,n);break;case 22:He=(i=He)||n.memoizedState!==null,Ni(e,t,n),He=i;break;default:Ni(e,t,n)}}function tx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cr(e)}catch(n){de(t,t.return,n)}}}function ex(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cr(e)}catch(n){de(t,t.return,n)}}function UM(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new m0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new m0),t;default:throw Error(j(435,e.tag))}}function Rl(e,t){var n=UM(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=HM.bind(null,e,i);i.then(a,a)}})}function gn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Xa(o.type)){Ce=o.stateNode,vn=!1;break t}break;case 5:Ce=o.stateNode,vn=!1;break t;case 3:case 4:Ce=o.stateNode.containerInfo,vn=!0;break t}o=o.return}if(Ce===null)throw Error(j(160));$v(s,r,a),Ce=null,vn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)nx(t,e),t=t.sibling}var oi=null;function nx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gn(t,e),_n(e),i&4&&(Fa(3,e,e.return),ol(3,e),Fa(5,e,e.return));break;case 1:gn(t,e),_n(e),i&512&&(He||n===null||xi(n,n.return)),i&64&&Gi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=oi;if(gn(t,e),_n(e),i&512&&(He||n===null||xi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[il]||s[tn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),an(s,i,n),s[tn]=e,Je(s),i=s;break t;case"link":var r=P0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),an(s,i,n),a.head.appendChild(s);break;case"meta":if(r=P0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),an(s,i,n),a.head.appendChild(s);break;default:throw Error(j(468,i))}s[tn]=e,Je(s),i=s}e.stateNode=i}else z0(a,e.type,e.stateNode);else e.stateNode=O0(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?z0(a,e.type,e.stateNode):O0(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&uf(e,e.memoizedProps,n.memoizedProps)}break;case 27:gn(t,e),_n(e),i&512&&(He||n===null||xi(n,n.return)),n!==null&&i&4&&uf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gn(t,e),_n(e),i&512&&(He||n===null||xi(n,n.return)),e.flags&32){a=e.stateNode;try{Sr(a,"")}catch(m){de(e,e.return,m)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,uf(e,a,n!==null?n.memoizedProps:a)),i&1024&&(hf=!0);break;case 6:if(gn(t,e),_n(e),i&4){if(e.stateNode===null)throw Error(j(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(m){de(e,e.return,m)}}break;case 3:if(Sc=null,a=oi,oi=tu(t.containerInfo),gn(t,e),oi=a,_n(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(m){de(e,e.return,m)}hf&&(hf=!1,ix(e));break;case 4:i=oi,oi=tu(e.stateNode.containerInfo),gn(t,e),_n(e),oi=i;break;case 12:gn(t,e),_n(e);break;case 31:gn(t,e),_n(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 13:gn(t,e),_n(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Eu=zn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Gi,u=He;if(Gi=c||a,He=u||l,gn(t,e),He=u,Gi=c,_n(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Gi||He||ns(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(m){de(l,l.return,m)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(m){de(l,l.return,m)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?w0(p,!0):w0(l.stateNode,!1)}catch(m){de(l,l.return,m)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Rl(e,n))));break;case 19:gn(t,e),_n(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 30:break;case 21:break;default:gn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(jv(i)){n=i;break}i=i.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var a=n.stateNode,s=ff(e);qc(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Sr(r,""),n.flags&=-33);var o=ff(e);qc(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=ff(e);Ih(e,c,l);break;default:throw Error(j(161))}}catch(u){de(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ix(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ix(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Oi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qv(e,t.alternate,t),t=t.sibling}function ns(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fa(4,t,t.return),ns(t);break;case 1:xi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Yv(t,t.return,n),ns(t);break;case 27:Ao(t.stateNode);case 26:case 5:xi(t,t.return),ns(t);break;case 22:t.memoizedState===null&&ns(t);break;case 30:ns(t);break;default:ns(t)}e=e.sibling}}function Hi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Hi(a,s,n),ol(4,s);break;case 1:if(Hi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){de(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)tv(l[a],o)}catch(c){de(i,i.return,c)}}n&&r&64&&qv(s),Mo(s,s.return);break;case 27:Jv(s);case 26:case 5:Hi(a,s,n),n&&i===null&&r&4&&Zv(s),Mo(s,s.return);break;case 12:Hi(a,s,n);break;case 31:Hi(a,s,n),n&&r&4&&tx(a,s);break;case 13:Hi(a,s,n),n&&r&4&&ex(a,s);break;case 22:s.memoizedState===null&&Hi(a,s,n),Mo(s,s.return);break;case 30:break;default:Hi(a,s,n)}t=t.sibling}}function Pp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sl(n))}function zp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sl(e))}function ii(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ax(e,t,n,i),t=t.sibling}function ax(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ii(e,t,n,i),a&2048&&ol(9,t);break;case 1:ii(e,t,n,i);break;case 3:ii(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sl(e)));break;case 12:if(a&2048){ii(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){de(t,t.return,l)}}else ii(e,t,n,i);break;case 31:ii(e,t,n,i);break;case 13:ii(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?ii(e,t,n,i):bo(e,t):s._visibility&2?ii(e,t,n,i):(s._visibility|=2,js(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Pp(r,t);break;case 24:ii(e,t,n,i),a&2048&&zp(t.alternate,t);break;default:ii(e,t,n,i)}}function js(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:js(s,r,o,l,a),ol(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?js(s,r,o,l,a):bo(s,r):(u._visibility|=2,js(s,r,o,l,a)),a&&c&2048&&Pp(r.alternate,r);break;case 24:js(s,r,o,l,a),a&&c&2048&&zp(r.alternate,r);break;default:js(s,r,o,l,a)}t=t.sibling}}function bo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:bo(n,i),a&2048&&Pp(i.alternate,i);break;case 24:bo(n,i),a&2048&&zp(i.alternate,i);break;default:bo(n,i)}t=t.sibling}}var co=8192;function Us(e,t,n){if(e.subtreeFlags&co)for(e=e.child;e!==null;)sx(e,t,n),e=e.sibling}function sx(e,t,n){switch(e.tag){case 26:Us(e,t,n),e.flags&co&&e.memoizedState!==null&&_b(n,oi,e.memoizedState,e.memoizedProps);break;case 5:Us(e,t,n);break;case 3:case 4:var i=oi;oi=tu(e.stateNode.containerInfo),Us(e,t,n),oi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=co,co=16777216,Us(e,t,n),co=i):Us(e,t,n));break;default:Us(e,t,n)}}function rx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Jr(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];je=i,lx(i,e)}rx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ox(e),e=e.sibling}function ox(e){switch(e.tag){case 0:case 11:case 15:Jr(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Jr(e);break;case 12:Jr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vc(e)):Jr(e);break;default:Jr(e)}}function vc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];je=i,lx(i,e)}rx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fa(8,t,t.return),vc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,vc(t));break;default:vc(t)}e=e.sibling}}function lx(e,t){for(;je!==null;){var n=je;switch(n.tag){case 0:case 11:case 15:Fa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:sl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,je=i;else t:for(n=e;je!==null;){i=je;var a=i.sibling,s=i.return;if(Kv(i),i===n){je=null;break t}if(a!==null){a.return=s,je=a;break t}je=s}}}var LM={getCacheForType:function(e){var t=nn(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return nn(Ve).controller.signal}},NM=typeof WeakMap=="function"?WeakMap:Map,oe=0,xe=null,Kt=null,te=0,he=0,Dn=null,Ea=!1,Hr=!1,Ip=!1,aa=0,Ne=0,Ha=0,ds=0,Bp=0,Pn=0,Er=0,Eo=null,xn=null,Bh=!1,Eu=0,cx=0,Yc=1/0,Zc=null,La=null,Xe=0,Na=null,Tr=null,Qi=0,Fh=0,Hh=null,ux=null,To=0,Vh=null;function Fn(){return oe&2&&te!==0?te&-te:Gt.T!==null?Hp():x_()}function fx(){if(Pn===0)if(!(te&536870912)||ee){var e=xl;xl<<=1,!(xl&3932160)&&(xl=262144),Pn=e}else Pn=536870912;return e=Gn.current,e!==null&&(e.flags|=32),Pn}function Sn(e,t,n){(e===xe&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(Ar(e,0),Ta(e,te,Pn,!1)),nl(e,n),(!(oe&2)||e!==xe)&&(e===xe&&(!(oe&2)&&(ds|=n),Ne===4&&Ta(e,te,Pn,!1)),Ci(e))}function hx(e,t,n){if(oe&6)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||el(e,t),a=i?zM(e,t):df(e,t,!0),s=i;do{if(a===0){Hr&&!i&&Ta(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!OM(n)){a=df(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Eo;var l=o.current.memoizedState.isDehydrated;if(l&&(Ar(o,r).flags|=256),r=df(o,r,!1),r!==2){if(Ip&&!l){o.errorRecoveryDisabledLanes|=s,ds|=s,a=4;break t}s=xn,xn=a,s!==null&&(xn===null?xn=s:xn.push.apply(xn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Ar(e,0),Ta(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:Ta(i,t,Pn,!Ea);break t;case 2:xn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(a=Eu+300-zn(),10<a)){if(Ta(i,t,Pn,!Ea),du(i,0,!0)!==0)break t;Qi=t,i.timeoutHandle=Lx(g0.bind(null,i,n,xn,Zc,Bh,t,Pn,ds,Er,Ea,s,"Throttled",-0,0),a);break t}g0(i,n,xn,Zc,Bh,t,Pn,ds,Er,Ea,s,null,-0,0)}}break}while(!0);Ci(e)}function g0(e,t,n,i,a,s,r,o,l,c,u,h,d,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},sx(t,s,h);var m=(s&62914560)===s?Eu-zn():(s&4194048)===s?cx-zn():0;if(m=vb(h,m),m!==null){Qi=s,e.cancelPendingCommit=m(v0.bind(null,e,t,s,n,i,a,r,o,l,u,h,null,d,p)),Ta(e,s,r,!c);return}}v0(e,t,s,n,i,a,r,o,l)}function OM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Vn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,n,i){t&=~Bp,t&=~ds,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Bn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&g_(e,n,t)}function Tu(){return oe&6?!0:(ll(0),!1)}function Fp(){if(Kt!==null){if(he===0)var e=Kt.return;else e=Kt,Yi=Ts=null,Ep(e),dr=null,Io=0,e=Kt;for(;e!==null;)Wv(e.alternate,e),e=e.return;Kt=null}}function Ar(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,tb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qi=0,Fp(),xe=e,Kt=n=ji(e.current,null),te=t,he=0,Dn=null,Ea=!1,Hr=el(e,t),Ip=!1,Er=Pn=Bp=ds=Ha=Ne=0,xn=Eo=null,Bh=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Bn(i),s=1<<a;t|=e[a],i&=~s}return aa=t,_u(),n}function dx(e,t){qt=null,Gt.H=Fo,t===Fr||t===xu?(t=Zm(),he=3):t===_p?(t=Zm(),he=4):he=t===Np?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dn=t,Kt===null&&(Ne=1,kc(e,Qn(t,e.current)))}function px(){var e=Gn.current;return e===null?!0:(te&4194048)===te?$n===null:(te&62914560)===te||te&536870912?e===$n:!1}function mx(){var e=Gt.H;return Gt.H=Fo,e===null?Fo:e}function gx(){var e=Gt.A;return Gt.A=LM,e}function jc(){Ne=4,Ea||(te&4194048)!==te&&Gn.current!==null||(Hr=!0),!(Ha&134217727)&&!(ds&134217727)||xe===null||Ta(xe,te,Pn,!1)}function df(e,t,n){var i=oe;oe|=2;var a=mx(),s=gx();(xe!==e||te!==t)&&(Zc=null,Ar(e,t)),t=!1;var r=Ne;t:do try{if(he!==0&&Kt!==null){var o=Kt,l=Dn;switch(he){case 8:Fp(),r=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(t=!0);var c=he;if(he=0,Dn=null,lr(e,o,l,c),n&&Hr){r=0;break t}break;default:c=he,he=0,Dn=null,lr(e,o,l,c)}}PM(),r=Ne;break}catch(u){dx(e,u)}while(!0);return t&&e.shellSuspendCounter++,Yi=Ts=null,oe=i,Gt.H=a,Gt.A=s,Kt===null&&(xe=null,te=0,_u()),r}function PM(){for(;Kt!==null;)_x(Kt)}function zM(e,t){var n=oe;oe|=2;var i=mx(),a=gx();xe!==e||te!==t?(Zc=null,Yc=zn()+500,Ar(e,t)):Hr=el(e,t);t:do try{if(he!==0&&Kt!==null){t=Kt;var s=Dn;e:switch(he){case 1:he=0,Dn=null,lr(e,t,s,1);break;case 2:case 9:if(Ym(s)){he=0,Dn=null,_0(t);break}t=function(){he!==2&&he!==9||xe!==e||(he=7),Ci(e)},s.then(t,t);break t;case 3:he=7;break t;case 4:he=5;break t;case 7:Ym(s)?(he=0,Dn=null,_0(t)):(he=0,Dn=null,lr(e,t,s,7));break;case 5:var r=null;switch(Kt.tag){case 26:r=Kt.memoizedState;case 5:case 27:var o=Kt;if(r?Ix(r):o.stateNode.complete){he=0,Dn=null;var l=o.sibling;if(l!==null)Kt=l;else{var c=o.return;c!==null?(Kt=c,Au(c)):Kt=null}break e}}he=0,Dn=null,lr(e,t,s,5);break;case 6:he=0,Dn=null,lr(e,t,s,6);break;case 8:Fp(),Ne=6;break t;default:throw Error(j(462))}}IM();break}catch(u){dx(e,u)}while(!0);return Yi=Ts=null,Gt.H=i,Gt.A=a,oe=n,Kt!==null?0:(xe=null,te=0,_u(),Ne)}function IM(){for(;Kt!==null&&!ry();)_x(Kt)}function _x(e){var t=kv(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?Au(e):Kt=t}function _0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=u0(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=u0(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:Ep(t);default:Wv(n,t),t=Kt=W_(t,aa),t=kv(n,t,aa)}e.memoizedProps=e.pendingProps,t===null?Au(e):Kt=t}function lr(e,t,n,i){Yi=Ts=null,Ep(t),dr=null,Io=0;var a=t.return;try{if(TM(e,a,t,n,te)){Ne=1,kc(e,Qn(n,e.current)),Kt=null;return}}catch(s){if(a!==null)throw Kt=a,s;Ne=1,kc(e,Qn(n,e.current)),Kt=null;return}t.flags&32768?(ee||i===1?e=!0:Hr||te&536870912?e=!1:(Ea=e=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),vx(t,e)):Au(t)}function Au(e){var t=e;do{if(t.flags&32768){vx(t,Ea);return}e=t.return;var n=CM(t.alternate,t,aa);if(n!==null){Kt=n;return}if(t=t.sibling,t!==null){Kt=t;return}Kt=t=e}while(t!==null);Ne===0&&(Ne=5)}function vx(e,t){do{var n=wM(e.alternate,e);if(n!==null){n.flags&=32767,Kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Kt=e;return}Kt=e=n}while(e!==null);Ne=6,Kt=null}function v0(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do Ru();while(Xe!==0);if(oe&6)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));if(s=t.lanes|t.childLanes,s|=up,gy(e,n,s,r,o,l),e===xe&&(Kt=xe=null,te=0),Tr=t,Na=e,Qi=n,Fh=s,Hh=a,ux=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,VM(Nc,function(){return bx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Gt.T,Gt.T=null,a=le.p,le.p=2,r=oe,oe|=4;try{DM(e,t,n)}finally{oe=r,le.p=a,Gt.T=i}}Xe=1,xx(),Sx(),yx()}}function xx(){if(Xe===1){Xe=0;var e=Na,t=Tr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Gt.T,Gt.T=null;var i=le.p;le.p=2;var a=oe;oe|=4;try{nx(t,e);var s=Wh,r=I_(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&z_(o.ownerDocument.documentElement,o)){if(l!==null&&cp(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var h=o.ownerDocument||document,d=h&&h.defaultView||window;if(d.getSelection){var p=d.getSelection(),m=o.textContent.length,y=Math.min(l.start,m),g=l.end===void 0?y:Math.min(l.end,m);!p.extend&&y>g&&(r=g,g=y,y=r);var f=Hm(o,y),v=Hm(o,g);if(f&&v&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var _=h.createRange();_.setStart(f.node,f.offset),p.removeAllRanges(),y>g?(p.addRange(_),p.extend(v.node,v.offset)):(_.setEnd(v.node,v.offset),p.addRange(_))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var x=h[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}iu=!!kh,Wh=kh=null}finally{oe=a,le.p=i,Gt.T=n}}e.current=t,Xe=2}}function Sx(){if(Xe===2){Xe=0;var e=Na,t=Tr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Gt.T,Gt.T=null;var i=le.p;le.p=2;var a=oe;oe|=4;try{Qv(e,t.alternate,t)}finally{oe=a,le.p=i,Gt.T=n}}Xe=3}}function yx(){if(Xe===4||Xe===3){Xe=0,oy();var e=Na,t=Tr,n=Qi,i=ux;t.subtreeFlags&10256||t.flags&10256?Xe=5:(Xe=0,Tr=Na=null,Mx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(La=null),np(n),t=t.stateNode,In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(tl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Gt.T,a=le.p,le.p=2,Gt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Gt.T=t,le.p=a}}Qi&3&&Ru(),Ci(e),a=e.pendingLanes,n&261930&&a&42?e===Vh?To++:(To=0,Vh=e):To=0,ll(0)}}function Mx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sl(t)))}function Ru(){return xx(),Sx(),yx(),bx()}function bx(){if(Xe!==5)return!1;var e=Na,t=Fh;Fh=0;var n=np(Qi),i=Gt.T,a=le.p;try{le.p=32>n?32:n,Gt.T=null,n=Hh,Hh=null;var s=Na,r=Qi;if(Xe=0,Tr=Na=null,Qi=0,oe&6)throw Error(j(331));var o=oe;if(oe|=4,ox(s.current),ax(s,s.current,r,n),oe=o,ll(0,!1),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(tl,s)}catch{}return!0}finally{le.p=a,Gt.T=i,Mx(e,t)}}function x0(e,t,n){t=Qn(n,t),t=Oh(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&(nl(e,2),Ci(e))}function de(e,t,n){if(e.tag===3)x0(e,e,n);else for(;t!==null;){if(t.tag===3){x0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(La===null||!La.has(i))){e=Qn(n,e),n=Bv(2),i=Ua(t,n,2),i!==null&&(Fv(n,i,t,e),nl(i,2),Ci(i));break}}t=t.return}}function pf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new NM;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Ip=!0,a.add(n),e=BM.bind(null,e,t,n),t.then(e,e))}function BM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xe===e&&(te&n)===n&&(Ne===4||Ne===3&&(te&62914560)===te&&300>zn()-Eu?!(oe&2)&&Ar(e,0):Bp|=n,Er===te&&(Er=0)),Ci(e)}function Ex(e,t){t===0&&(t=m_()),e=Es(e,t),e!==null&&(nl(e,t),Ci(e))}function FM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ex(e,n)}function HM(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),Ex(e,n)}function VM(e,t){return tp(e,t)}var Jc=null,Js=null,Gh=!1,Qc=!1,mf=!1,Aa=0;function Ci(e){e!==Js&&e.next===null&&(Js===null?Jc=Js=e:Js=Js.next=e),Qc=!0,Gh||(Gh=!0,XM())}function ll(e,t){if(!mf&&Qc){mf=!0;do for(var n=!1,i=Jc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Bn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,S0(i,s))}else s=te,s=du(i,i===xe?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||el(i,s)||(n=!0,S0(i,s));i=i.next}while(n);mf=!1}}function GM(){Tx()}function Tx(){Qc=Gh=!1;var e=0;Aa!==0&&$M()&&(e=Aa);for(var t=zn(),n=null,i=Jc;i!==null;){var a=i.next,s=Ax(i,t);s===0?(i.next=null,n===null?Jc=a:n.next=a,a===null&&(Js=n)):(n=i,(e!==0||s&3)&&(Qc=!0)),i=a}Xe!==0&&Xe!==5||ll(e),Aa!==0&&(Aa=0)}function Ax(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Bn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=my(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=xe,n=te,n=du(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Gu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||el(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Gu(i),np(n)){case 2:case 8:n=d_;break;case 32:n=Nc;break;case 268435456:n=p_;break;default:n=Nc}return i=Rx.bind(null,e),n=tp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Gu(i),e.callbackPriority=2,e.callbackNode=null,2}function Rx(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ru()&&e.callbackNode!==n)return null;var i=te;return i=du(e,e===xe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(hx(e,i,t),Ax(e,zn()),e.callbackNode!=null&&e.callbackNode===n?Rx.bind(null,e):null)}function S0(e,t){if(Ru())return null;hx(e,t,!0)}function XM(){eb(function(){oe&6?tp(h_,GM):Tx()})}function Hp(){if(Aa===0){var e=yr;e===0&&(e=vl,vl<<=1,!(vl&261888)&&(vl=256)),Aa=e}return Aa}function y0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cc(""+e)}function M0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function kM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=y0((a[Mn]||null).action),r=i.submitter;r&&(t=(t=r[Mn]||null)?y0(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new pu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Aa!==0){var l=r?M0(a,r):new FormData(a);Lh(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?M0(a,r):new FormData(a),Lh(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var gf=0;gf<Sh.length;gf++){var _f=Sh[gf],WM=_f.toLowerCase(),qM=_f[0].toUpperCase()+_f.slice(1);fi(WM,"on"+qM)}fi(F_,"onAnimationEnd");fi(H_,"onAnimationIteration");fi(V_,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(lM,"onTransitionRun");fi(cM,"onTransitionStart");fi(uM,"onTransitionCancel");fi(G_,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Cx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(u){Pc(u)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(u){Pc(u)}a.currentTarget=null,s=l}}}}function Qt(e,t){var n=t[hh];n===void 0&&(n=t[hh]=new Set);var i=e+"__bubble";n.has(i)||(wx(t,e,2,!1),n.add(i))}function vf(e,t,n){var i=0;t&&(i|=4),wx(n,e,i,t)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function Vp(e){if(!e[Cl]){e[Cl]=!0,S_.forEach(function(n){n!=="selectionchange"&&(YM.has(n)||vf(n,!1,e),vf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cl]||(t[Cl]=!0,vf("selectionchange",!1,t))}}function wx(e,t,n,i){switch(Gx(t)){case 2:var a=yb;break;case 8:a=Mb;break;default:a=Wp}n=a.bind(null,t,n,e),a=void 0,!_h||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function xf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=$s(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}C_(function(){var c=s,u=sp(n),h=[];t:{var d=X_.get(e);if(d!==void 0){var p=pu,m=e;switch(e){case"keypress":if(fc(n)===0)break t;case"keydown":case"keyup":p=Hy;break;case"focusin":m="focus",p=Yu;break;case"focusout":m="blur",p=Yu;break;case"beforeblur":case"afterblur":p=Yu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Xy;break;case F_:case H_:case V_:p=Uy;break;case G_:p=Wy;break;case"scroll":case"scrollend":p=Ay;break;case"wheel":p=Yy;break;case"copy":case"cut":case"paste":p=Ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lm;break;case"toggle":case"beforetoggle":p=jy}var y=(t&4)!==0,g=!y&&(e==="scroll"||e==="scrollend"),f=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,_;v!==null;){var x=v;if(_=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||_===null||f===null||(x=Lo(v,f),x!=null&&y.push(Vo(v,x,_))),g)break;v=v.return}0<y.length&&(d=new p(d,m,null,n,u),h.push({event:d,listeners:y}))}}if(!(t&7)){t:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==gh&&(m=n.relatedTarget||n.fromElement)&&($s(m)||m[zr]))break t;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?$s(m):null,m!==null&&(g=$o(m),y=m.tag,m!==g||y!==5&&y!==27&&y!==6)&&(m=null)):(p=null,m=c),p!==m)){if(y=Dm,x="onMouseLeave",f="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(y=Lm,x="onPointerLeave",f="onPointerEnter",v="pointer"),g=p==null?d:oo(p),_=m==null?d:oo(m),d=new y(x,v+"leave",p,n,u),d.target=g,d.relatedTarget=_,x=null,$s(u)===c&&(y=new y(f,v+"enter",m,n,u),y.target=_,y.relatedTarget=g,x=y),g=x,p&&m)e:{for(y=ZM,f=p,v=m,_=0,x=f;x;x=y(x))_++;x=0;for(var T=v;T;T=y(T))x++;for(;0<_-x;)f=y(f),_--;for(;0<x-_;)v=y(v),x--;for(;_--;){if(f===v||v!==null&&f===v.alternate){y=f;break e}f=y(f),v=y(v)}y=null}else y=null;p!==null&&b0(h,d,p,y,!1),m!==null&&g!==null&&b0(h,g,m,y,!0)}}t:{if(d=c?oo(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=zm;else if(Pm(d))if(O_)R=sM;else{R=iM;var A=nM}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?c&&ap(c.elementType)&&(R=zm):R=aM;if(R&&(R=R(e,c))){N_(h,R,n,u);break t}A&&A(e,d,c),e==="focusout"&&c&&d.type==="number"&&c.memoizedProps.value!=null&&mh(d,"number",d.value)}switch(A=c?oo(c):window,e){case"focusin":(Pm(A)||A.contentEditable==="true")&&(nr=A,vh=c,go=null);break;case"focusout":go=vh=nr=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,Vm(h,n,u);break;case"selectionchange":if(oM)break;case"keydown":case"keyup":Vm(h,n,u)}var D;if(lp)t:{switch(e){case"compositionstart":var M="onCompositionStart";break t;case"compositionend":M="onCompositionEnd";break t;case"compositionupdate":M="onCompositionUpdate";break t}M=void 0}else er?U_(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(D_&&n.locale!=="ko"&&(er||M!=="onCompositionStart"?M==="onCompositionEnd"&&er&&(D=w_()):(ba=u,rp="value"in ba?ba.value:ba.textContent,er=!0)),A=Kc(c,M),0<A.length&&(M=new Um(M,e,null,n,u),h.push({event:M,listeners:A}),D?M.data=D:(D=L_(n),D!==null&&(M.data=D)))),(D=Qy?Ky(e,n):$y(e,n))&&(M=Kc(c,"onBeforeInput"),0<M.length&&(A=new Um("onBeforeInput","beforeinput",null,n,u),h.push({event:A,listeners:M}),A.data=D)),kM(h,e,c,n,u)}Cx(h,t)})}function Vo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Lo(e,n),a!=null&&i.unshift(Vo(e,a,s)),a=Lo(e,t),a!=null&&i.push(Vo(e,a,s))),e.tag===3)return i;e=e.return}return[]}function ZM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Lo(n,s),c!=null&&r.unshift(Vo(n,c,l))):a||(c=Lo(n,s),c!=null&&r.push(Vo(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var jM=/\r\n?/g,JM=/\u0000|\uFFFD/g;function E0(e){return(typeof e=="string"?e:""+e).replace(jM,`
`).replace(JM,"")}function Dx(e,t){return t=E0(t),E0(e)===t}function ge(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Sr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Sr(e,""+i);break;case"className":yl(e,"class",i);break;case"tabIndex":yl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":yl(e,n,i);break;case"style":R_(e,i,s);break;case"data":if(t!=="object"){yl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=cc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ge(e,t,"name",a.name,a,null),ge(e,t,"formEncType",a.formEncType,a,null),ge(e,t,"formMethod",a.formMethod,a,null),ge(e,t,"formTarget",a.formTarget,a,null)):(ge(e,t,"encType",a.encType,a,null),ge(e,t,"method",a.method,a,null),ge(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=cc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=qi);break;case"onScroll":i!=null&&Qt("scroll",e);break;case"onScrollEnd":i!=null&&Qt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=cc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Qt("beforetoggle",e),Qt("toggle",e),lc(e,"popover",i);break;case"xlinkActuate":Ui(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ui(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ui(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ui(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ui(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ui(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ui(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":lc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ey.get(n)||n,lc(e,n,i))}}function Xh(e,t,n,i,a,s){switch(n){case"style":R_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Sr(e,i):(typeof i=="number"||typeof i=="bigint")&&Sr(e,""+i);break;case"onScroll":i!=null&&Qt("scroll",e);break;case"onScrollEnd":i!=null&&Qt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!y_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Mn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):lc(e,n,i)}}}function an(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qt("error",e),Qt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:ge(e,t,s,r,n,null)}}a&&ge(e,t,"srcSet",n.srcSet,n,null),i&&ge(e,t,"src",n.src,n,null);return;case"input":Qt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":a=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":s=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(137,t));break;default:ge(e,t,i,u,n,null)}}E_(e,s,o,l,c,r,a,!1);return;case"select":Qt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ge(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?ur(e,!!i,t,!1):n!=null&&ur(e,!!i,n,!0);return;case"textarea":Qt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:ge(e,t,r,o,n,null)}A_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ge(e,t,l,i,n,null)}return;case"dialog":Qt("beforetoggle",e),Qt("toggle",e),Qt("cancel",e),Qt("close",e);break;case"iframe":case"object":Qt("load",e);break;case"video":case"audio":for(i=0;i<Ho.length;i++)Qt(Ho[i],e);break;case"image":Qt("error",e),Qt("load",e);break;case"details":Qt("toggle",e);break;case"embed":case"source":case"link":Qt("error",e),Qt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:ge(e,t,c,i,n,null)}return;default:if(ap(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&Xh(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ge(e,t,o,i,n,null))}function QM(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,u=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||ge(e,t,p,null,i,h)}}for(var d in i){var p=i[d];if(h=n[d],i.hasOwnProperty(d)&&(p!=null||h!=null))switch(d){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,t));break;default:p!==h&&ge(e,t,d,p,i,h)}}ph(e,r,o,l,c,u,s,a);return;case"select":p=r=o=d=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||ge(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":d=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ge(e,t,a,s,i,l)}t=o,n=r,i=p,d!=null?ur(e,!!n,d,!1):!!i!=!!n&&(t!=null?ur(e,!!n,t,!0):ur(e,!!n,n?[]:"",!1));return;case"textarea":p=d=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ge(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":d=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(j(91));break;default:a!==s&&ge(e,t,r,a,i,s)}T_(e,d,p);return;case"option":for(var m in n)if(d=n[m],n.hasOwnProperty(m)&&d!=null&&!i.hasOwnProperty(m))switch(m){case"selected":e.selected=!1;break;default:ge(e,t,m,null,i,d)}for(l in i)if(d=i[l],p=n[l],i.hasOwnProperty(l)&&d!==p&&(d!=null||p!=null))switch(l){case"selected":e.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:ge(e,t,l,d,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)d=n[y],n.hasOwnProperty(y)&&d!=null&&!i.hasOwnProperty(y)&&ge(e,t,y,null,i,d);for(c in i)if(d=i[c],p=n[c],i.hasOwnProperty(c)&&d!==p&&(d!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(j(137,t));break;default:ge(e,t,c,d,i,p)}return;default:if(ap(t)){for(var g in n)d=n[g],n.hasOwnProperty(g)&&d!==void 0&&!i.hasOwnProperty(g)&&Xh(e,t,g,void 0,i,d);for(u in i)d=i[u],p=n[u],!i.hasOwnProperty(u)||d===p||d===void 0&&p===void 0||Xh(e,t,u,d,i,p);return}}for(var f in n)d=n[f],n.hasOwnProperty(f)&&d!=null&&!i.hasOwnProperty(f)&&ge(e,t,f,null,i,d);for(h in i)d=i[h],p=n[h],!i.hasOwnProperty(h)||d===p||d==null&&p==null||ge(e,t,h,d,i,p)}function T0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function KM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&T0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,h=l.initiatorType;u&&T0(h)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kh=null,Wh=null;function $c(e){return e.nodeType===9?e:e.ownerDocument}function A0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ux(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sf=null;function $M(){var e=window.event;return e&&e.type==="popstate"?e===Sf?!1:(Sf=e,!0):(Sf=null,!1)}var Lx=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(e){return R0.resolve(null).then(e).catch(nb)}:Lx;function nb(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function C0(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Cr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ao(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ao(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[il]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Ao(e.ownerDocument.body);n=a}while(n);Cr(t)}function w0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Yh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Yh(n),ip(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ib(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[il])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function ab(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ti(e.nextSibling),e===null))return null;return e}function Nx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ti(e.nextSibling),e===null))return null;return e}function Zh(e){return e.data==="$?"||e.data==="$~"}function jh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ti(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jh=null;function D0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ti(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function U0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Ox(e,t,n){switch(t=$c(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function Ao(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ip(e)}var ei=new Map,L0=new Set;function tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=le.d;le.d={f:rb,r:ob,D:lb,C:cb,L:ub,m:fb,X:db,S:hb,M:pb};function rb(){var e=la.f(),t=Tu();return e||t}function ob(e){var t=Ir(e);t!==null&&t.tag===5&&t.type==="form"?Rv(t):la.r(e)}var Vr=typeof document>"u"?null:document;function Px(e,t,n){var i=Vr;if(i&&typeof t=="string"&&t){var a=Jn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),L0.has(a)||(L0.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),an(t,"link",e),Je(t),i.head.appendChild(t)))}}function lb(e){la.D(e),Px("dns-prefetch",e,null)}function cb(e,t){la.C(e,t),Px("preconnect",e,t)}function ub(e,t,n){la.L(e,t,n);var i=Vr;if(i&&e&&t){var a='link[rel="preload"][as="'+Jn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Jn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Jn(n.imageSizes)+'"]')):a+='[href="'+Jn(e)+'"]';var s=a;switch(t){case"style":s=Rr(e);break;case"script":s=Gr(e)}ei.has(s)||(e=Re({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ei.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(cl(s))||t==="script"&&i.querySelector(ul(s))||(t=i.createElement("link"),an(t,"link",e),Je(t),i.head.appendChild(t)))}}function fb(e,t){la.m(e,t);var n=Vr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Jn(i)+'"][href="'+Jn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Gr(e)}if(!ei.has(s)&&(e=Re({rel:"modulepreload",href:e},t),ei.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ul(s)))return}i=n.createElement("link"),an(i,"link",e),Je(i),n.head.appendChild(i)}}}function hb(e,t,n){la.S(e,t,n);var i=Vr;if(i&&e){var a=cr(i).hoistableStyles,s=Rr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(cl(s)))o.loading=5;else{e=Re({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ei.get(s))&&Gp(e,n);var l=r=i.createElement("link");Je(l),an(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,xc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function db(e,t){la.X(e,t);var n=Vr;if(n&&e){var i=cr(n).hoistableScripts,a=Gr(e),s=i.get(a);s||(s=n.querySelector(ul(a)),s||(e=Re({src:e,async:!0},t),(t=ei.get(a))&&Xp(e,t),s=n.createElement("script"),Je(s),an(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function pb(e,t){la.M(e,t);var n=Vr;if(n&&e){var i=cr(n).hoistableScripts,a=Gr(e),s=i.get(a);s||(s=n.querySelector(ul(a)),s||(e=Re({src:e,async:!0,type:"module"},t),(t=ei.get(a))&&Xp(e,t),s=n.createElement("script"),Je(s),an(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function N0(e,t,n,i){var a=(a=Ca.current)?tu(a):null;if(!a)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Rr(n.href),n=cr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Rr(n.href);var s=cr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(cl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),ei.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ei.set(e,n),s||mb(a,e,n,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Gr(n),n=cr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function Rr(e){return'href="'+Jn(e)+'"'}function cl(e){return'link[rel="stylesheet"]['+e+"]"}function zx(e){return Re({},e,{"data-precedence":e.precedence,precedence:null})}function mb(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),an(t,"link",n),Je(t),e.head.appendChild(t))}function Gr(e){return'[src="'+Jn(e)+'"]'}function ul(e){return"script[async]"+e}function O0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Jn(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var a=Re({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),an(i,"style",a),xc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Rr(n.href);var s=e.querySelector(cl(a));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;i=zx(n),(a=ei.get(a))&&Gp(i,a),s=(e.ownerDocument||e).createElement("link"),Je(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),an(s,"link",i),t.state.loading|=4,xc(s,n.precedence,e),t.instance=s;case"script":return s=Gr(n.src),(a=e.querySelector(ul(s)))?(t.instance=a,Je(a),a):(i=n,(a=ei.get(s))&&(i=Re({},n),Xp(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Je(a),an(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,xc(i,n.precedence,e));return t.instance}function xc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Sc=null;function P0(e,t,n){if(Sc===null){var i=new Map,a=Sc=new Map;a.set(n,i)}else a=Sc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[il]||s[tn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function z0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function gb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ix(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function _b(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Rr(i.href),s=t.querySelector(cl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=eu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Je(s);return}s=t.ownerDocument||t,i=zx(i),(a=ei.get(a))&&Gp(i,a),s=s.createElement("link"),Je(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),an(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=eu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var yf=0;function vb(e,t){return e.stylesheets&&e.count===0&&yc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&yf===0&&(yf=62500*KM());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>yf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function eu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nu=null;function yc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nu=new Map,t.forEach(xb,e),nu=null,eu.call(e))}function xb(e,t){if(!(t.state.loading&4)){var n=nu.get(e);if(n)var i=n.get(null);else{n=new Map,nu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=eu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Go={$$typeof:Wi,Provider:null,Consumer:null,_currentValue:cs,_currentValue2:cs,_threadCount:0};function Sb(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.hiddenUpdates=Xu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Bx(e,t,n,i,a,s,r,o,l,c,u,h){return e=new Sb(e,t,n,r,l,c,u,h,o),t=1,s===!0&&(t|=24),s=Nn(3,null,null,t),e.current=s,s.stateNode=e,t=mp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},vp(s),e}function Fx(e){return e?(e=sr,e):sr}function Hx(e,t,n,i,a,s){a=Fx(a),i.context===null?i.context=a:i.pendingContext=a,i=Da(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ua(e,i,t),n!==null&&(Sn(n,e,t),vo(n,e,t))}function I0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kp(e,t){I0(e,t),(e=e.alternate)&&I0(e,t)}function Vx(e){if(e.tag===13||e.tag===31){var t=Es(e,67108864);t!==null&&Sn(t,e,67108864),kp(e,67108864)}}function B0(e){if(e.tag===13||e.tag===31){var t=Fn();t=ep(t);var n=Es(e,t);n!==null&&Sn(n,e,t),kp(e,t)}}var iu=!0;function yb(e,t,n,i){var a=Gt.T;Gt.T=null;var s=le.p;try{le.p=2,Wp(e,t,n,i)}finally{le.p=s,Gt.T=a}}function Mb(e,t,n,i){var a=Gt.T;Gt.T=null;var s=le.p;try{le.p=8,Wp(e,t,n,i)}finally{le.p=s,Gt.T=a}}function Wp(e,t,n,i){if(iu){var a=Qh(i);if(a===null)xf(e,t,i,au,n),F0(e,i);else if(Eb(a,e,t,n,i))i.stopPropagation();else if(F0(e,i),t&4&&-1<bb.indexOf(e)){for(;a!==null;){var s=Ir(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ts(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Bn(r);o.entanglements[1]|=l,r&=~l}Ci(s),!(oe&6)&&(Yc=zn()+500,ll(0))}}break;case 31:case 13:o=Es(s,2),o!==null&&Sn(o,s,2),Tu(),kp(s,2)}if(s=Qh(i),s===null&&xf(e,t,i,au,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else xf(e,t,i,null,n)}}function Qh(e){return e=sp(e),qp(e)}var au=null;function qp(e){if(au=null,e=$s(e),e!==null){var t=$o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=o_(t),e!==null)return e;e=null}else if(n===31){if(e=l_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return au=e,null}function Gx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ly()){case h_:return 2;case d_:return 8;case Nc:case cy:return 32;case p_:return 268435456;default:return 32}default:return 32}}var Kh=!1,Oa=null,Pa=null,za=null,Xo=new Map,ko=new Map,Sa=[],bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F0(e,t){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(t.pointerId)}}function Qr(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Ir(t),t!==null&&Vx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Eb(e,t,n,i,a){switch(t){case"focusin":return Oa=Qr(Oa,e,t,n,i,a),!0;case"dragenter":return Pa=Qr(Pa,e,t,n,i,a),!0;case"mouseover":return za=Qr(za,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Xo.set(s,Qr(Xo.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,ko.set(s,Qr(ko.get(s)||null,e,t,n,i,a)),!0}return!1}function Xx(e){var t=$s(e.target);if(t!==null){var n=$o(t);if(n!==null){if(t=n.tag,t===13){if(t=o_(n),t!==null){e.blockedOn=t,bm(e.priority,function(){B0(n)});return}}else if(t===31){if(t=l_(n),t!==null){e.blockedOn=t,bm(e.priority,function(){B0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);gh=i,n.target.dispatchEvent(i),gh=null}else return t=Ir(n),t!==null&&Vx(t),e.blockedOn=n,!1;t.shift()}return!0}function H0(e,t,n){Mc(e)&&n.delete(t)}function Tb(){Kh=!1,Oa!==null&&Mc(Oa)&&(Oa=null),Pa!==null&&Mc(Pa)&&(Pa=null),za!==null&&Mc(za)&&(za=null),Xo.forEach(H0),ko.forEach(H0)}function wl(e,t){e.blockedOn===t&&(e.blockedOn=null,Kh||(Kh=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Tb)))}var Dl=null;function V0(e){Dl!==e&&(Dl=e,We.unstable_scheduleCallback(We.unstable_NormalPriority,function(){Dl===e&&(Dl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(qp(i||n)===null)continue;break}var s=Ir(n);s!==null&&(e.splice(t,3),t-=3,Lh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Cr(e){function t(l){return wl(l,e)}Oa!==null&&wl(Oa,e),Pa!==null&&wl(Pa,e),za!==null&&wl(za,e),Xo.forEach(t),ko.forEach(t);for(var n=0;n<Sa.length;n++){var i=Sa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Sa.length&&(n=Sa[0],n.blockedOn===null);)Xx(n),n.blockedOn===null&&Sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Mn]||null;if(typeof s=="function")r||V0(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Mn]||null)o=r.formAction;else if(qp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),V0(n)}}}function kx(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Yp(e){this._internalRoot=e}Cu.prototype.render=Yp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=Fn();Hx(n,i,e,t,null,null)};Cu.prototype.unmount=Yp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hx(e.current,2,null,e,null,null),Tu(),t[zr]=null}};function Cu(e){this._internalRoot=e}Cu.prototype.unstable_scheduleHydration=function(e){if(e){var t=x_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sa.length&&t!==0&&t<Sa[n].priority;n++);Sa.splice(n,0,e),n===0&&Xx(e)}};var G0=s_.version;if(G0!=="19.2.3")throw Error(j(527,G0,"19.2.3"));le.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=ey(t),e=e!==null?c_(e):null,e=e===null?null:e.stateNode,e};var Ab={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:Gt,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{tl=Ul.inject(Ab),In=Ul}catch{}}hu.createRoot=function(e,t){if(!r_(e))throw Error(j(299));var n=!1,i="",a=Pv,s=zv,r=Iv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Bx(e,1,!1,null,null,n,i,null,a,s,r,kx),e[zr]=t.current,Vp(e),new Yp(t)};hu.hydrateRoot=function(e,t,n){if(!r_(e))throw Error(j(299));var i=!1,a="",s=Pv,r=zv,o=Iv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Bx(e,1,!0,t,n??null,i,a,l,s,r,o,kx),t.context=Fx(null),n=t.current,i=Fn(),i=ep(i),a=Da(i),a.callback=null,Ua(n,a,i),n=i,t.current.lanes=n,nl(t,n),Ci(t),e[zr]=t.current,Vp(e),new Cu(t)};hu.version="19.2.3";function Wx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wx)}catch(e){console.error(e)}}Wx(),n_.exports=hu;var k2=n_.exports;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zp="182",W2={ROTATE:0,DOLLY:1,PAN:2},q2={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rb=0,X0=1,Cb=2,Y2=0,bc=1,wb=2,uo=3,Va=0,yn=1,Xi=2,Ki=0,gr=1,k0=2,W0=3,q0=4,Db=5,as=100,Ub=101,Lb=102,Nb=103,Ob=104,Pb=200,zb=201,Ib=202,Bb=203,$h=204,td=205,Fb=206,Hb=207,Vb=208,Gb=209,Xb=210,kb=211,Wb=212,qb=213,Yb=214,ed=0,nd=1,id=2,wr=3,ad=4,sd=5,rd=6,od=7,wu=0,Zb=1,jb=2,Mi=0,qx=1,Yx=2,Zx=3,jx=4,Jx=5,Qx=6,Kx=7,$x=300,xs=301,Dr=302,ld=303,cd=304,Du=306,ud=1e3,Zi=1001,fd=1002,ke=1003,Jb=1004,Ll=1005,ln=1006,Mf=1007,rs=1008,Z2=1008,On=1009,tS=1010,eS=1011,Wo=1012,jp=1013,Ti=1014,Si=1015,sa=1016,Jp=1017,Qp=1018,qo=1020,nS=35902,iS=35899,aS=1021,sS=1022,ci=1023,ra=1026,os=1027,rS=1028,Kp=1029,Ur=1030,$p=1031,j2=1032,tm=1033,Ec=33776,Tc=33777,Ac=33778,Rc=33779,hd=35840,dd=35841,pd=35842,md=35843,gd=36196,_d=37492,vd=37496,xd=37488,Sd=37489,yd=37490,Md=37491,bd=37808,Ed=37809,Td=37810,Ad=37811,Rd=37812,Cd=37813,wd=37814,Dd=37815,Ud=37816,Ld=37817,Nd=37818,Od=37819,Pd=37820,zd=37821,Id=36492,Bd=36494,Fd=36495,Hd=36283,Vd=36284,Gd=36285,Xd=36286,J2=0,Q2=1,K2=2,Qb=3200,As=0,Kb=1,ya="",qn="srgb",Lr="srgb-linear",su="linear",fe="srgb",$2="",tC="rg",eC="ga",nC=0,Ls=7680,iC=7681,aC=7682,sC=7683,rC=34055,oC=34056,lC=5386,cC=512,uC=513,fC=514,hC=515,dC=516,pC=517,mC=518,Y0=519,$b=512,tE=513,eE=514,em=515,nE=516,iE=517,nm=518,aE=519,kd=35044,gC=35048,Z0="300 es",ui=2e3,ru=2001,_C={COMPUTE:"compute",RENDER:"render"};function oS(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function vC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Yo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function sE(){const e=Yo("canvas");return e.style.display="block",e}const j0={};function ou(...e){const t="THREE."+e.shift();console.log(t,...e)}function It(...e){const t="THREE."+e.shift();console.warn(t,...e)}function ie(...e){const t="THREE."+e.shift();console.error(t,...e)}function Zo(...e){const t=e.join(" ");t in j0||(j0[t]=!0,It(...e))}function rE(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Rs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let J0=1234567;const Ro=Math.PI/180,Nr=180/Math.PI;function bi(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[e&255]+rn[e>>8&255]+rn[e>>16&255]+rn[e>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Ht(e,t,n){return Math.max(t,Math.min(n,e))}function im(e,t){return(e%t+t)%t}function oE(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function lE(e,t,n){return e!==t?(n-e)/(t-e):0}function Co(e,t,n){return(1-n)*e+n*t}function cE(e,t,n,i){return Co(e,t,1-Math.exp(-n*i))}function uE(e,t=1){return t-Math.abs(im(e,t*2)-t)}function fE(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function hE(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function dE(e,t){return e+Math.floor(Math.random()*(t-e+1))}function pE(e,t){return e+Math.random()*(t-e)}function mE(e){return e*(.5-Math.random())}function gE(e){e!==void 0&&(J0=e);let t=J0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _E(e){return e*Ro}function vE(e){return e*Nr}function xE(e){return(e&e-1)===0&&e!==0}function SE(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function yE(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function ME(e,t,n,i,a){const s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),u=r((t+i)/2),h=s((t-i)/2),d=r((t-i)/2),p=s((i-t)/2),m=r((i-t)/2);switch(a){case"XYX":e.set(o*u,l*h,l*d,o*c);break;case"YZY":e.set(l*d,o*u,l*h,o*c);break;case"ZXZ":e.set(l*h,l*d,o*u,o*c);break;case"XZX":e.set(o*u,l*m,l*p,o*c);break;case"YXY":e.set(l*p,o*u,l*m,o*c);break;case"ZYZ":e.set(l*m,l*p,o*u,o*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function dn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const xC={DEG2RAD:Ro,RAD2DEG:Nr,generateUUID:bi,clamp:Ht,euclideanModulo:im,mapLinear:oE,inverseLerp:lE,lerp:Co,damp:cE,pingpong:uE,smoothstep:fE,smootherstep:hE,randInt:dE,randFloat:pE,randFloatSpread:mE,seededRandom:gE,degToRad:_E,radToDeg:vE,isPowerOfTwo:xE,ceilPowerOfTwo:SE,floorPowerOfTwo:yE,setQuaternionFromProperEuler:ME,normalize:Wt,denormalize:dn};class ct{constructor(t=0,n=0){ct.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ht(this.x,t.x,n.x),this.y=Ht(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ht(this.x,t,n),this.y=Ht(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ht(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],u=i[a+2],h=i[a+3],d=s[r+0],p=s[r+1],m=s[r+2],y=s[r+3];if(o<=0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h;return}if(o>=1){t[n+0]=d,t[n+1]=p,t[n+2]=m,t[n+3]=y;return}if(h!==y||l!==d||c!==p||u!==m){let g=l*d+c*p+u*m+h*y;g<0&&(d=-d,p=-p,m=-m,y=-y,g=-g);let f=1-o;if(g<.9995){const v=Math.acos(g),_=Math.sin(v);f=Math.sin(f*v)/_,o=Math.sin(o*v)/_,l=l*f+d*o,c=c*f+p*o,u=u*f+m*o,h=h*f+y*o}else{l=l*f+d*o,c=c*f+p*o,u=u*f+m*o,h=h*f+y*o;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],h=s[r],d=s[r+1],p=s[r+2],m=s[r+3];return t[n]=o*m+u*h+l*p-c*d,t[n+1]=l*m+u*d+c*h-o*p,t[n+2]=c*m+u*p+o*d-l*h,t[n+3]=u*m-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),h=o(s/2),d=l(i/2),p=l(a/2),m=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"YZX":this._x=d*u*h+c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h-d*p*m;break;case"XZY":this._x=d*u*h-c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h+d*p*m;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+a*c-s*l,this._y=a*u+r*l+s*o-i*c,this._z=s*u+r*c+i*l-a*o,this._w=r*u-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,n=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Q0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Q0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),u=2*(o*n-s*a),h=2*(s*i-r*n);return this.x=n+l*c+r*h-o*u,this.y=i+l*u+o*c-s*h,this.z=a+l*h+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ht(this.x,t.x,n.x),this.y=Ht(this.y,t.y,n.y),this.z=Ht(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ht(this.x,t,n),this.y=Ht(this.y,t,n),this.z=Ht(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bf.copy(this).projectOnVector(t),this.sub(bf)}reflect(t){return this.sub(bf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ht(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bf=new N,Q0=new fl;class Yt{constructor(t,n,i,a,s,r,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],y=a[0],g=a[3],f=a[6],v=a[1],_=a[4],x=a[7],T=a[2],R=a[5],A=a[8];return s[0]=r*y+o*v+l*T,s[3]=r*g+o*_+l*R,s[6]=r*f+o*x+l*A,s[1]=c*y+u*v+h*T,s[4]=c*g+u*_+h*R,s[7]=c*f+u*x+h*A,s[2]=d*y+p*v+m*T,s[5]=d*g+p*_+m*R,s[8]=d*f+p*x+m*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*s*u+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*r-o*c,d=o*l-u*s,p=c*s-r*l,m=n*h+i*d+a*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return t[0]=h*y,t[1]=(a*c-u*i)*y,t[2]=(o*i-a*r)*y,t[3]=d*y,t[4]=(u*n-a*l)*y,t[5]=(a*s-o*n)*y,t[6]=p*y,t[7]=(i*l-c*n)*y,t[8]=(r*n-i*s)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Ef.makeScale(t,n)),this}rotate(t){return this.premultiply(Ef.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ef.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ef=new Yt,K0=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$0=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bE(){const e={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===fe&&(a.r=$i(a.r),a.g=$i(a.g),a.b=$i(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(a.r=_r(a.r),a.g=_r(a.g),a.b=_r(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ya?su:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Lr]:{primaries:t,whitePoint:i,transfer:su,toXYZ:K0,fromXYZ:$0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:K0,fromXYZ:$0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),e}const se=bE();function $i(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function _r(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ns;class EE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ns===void 0&&(Ns=Yo("canvas")),Ns.width=t.width,Ns.height=t.height;const a=Ns.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Ns}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Yo("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=$i(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let TE=0;class am{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Tf(a[r].image)):s.push(Tf(a[r]))}else s=Tf(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Tf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?EE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let AE=0;const Af=new N;class sn extends Rs{constructor(t=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Zi,a=Zi,s=ln,r=rs,o=ci,l=On,c=sn.DEFAULT_ANISOTROPY,u=ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=bi(),this.name="",this.source=new am(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Af).x}get height(){return this.source.getSize(Af).y}get depth(){return this.source.getSize(Af).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){It(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){It(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$x)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ud:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case fd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ud:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case fd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=$x;sn.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,n=0,i=0,a=1){Oe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],m=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,x=(p+1)/2,T=(f+1)/2,R=(u+d)/4,A=(h+y)/4,D=(m+g)/4;return _>x&&_>T?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=R/i,s=A/i):x>T?x<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(x),i=R/a,s=D/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=A/s,a=D/s),this.set(i,a,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ht(this.x,t.x,n.x),this.y=Ht(this.y,t.y,n.y),this.z=Ht(this.z,t.z,n.z),this.w=Ht(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ht(this.x,t,n),this.y=Ht(this.y,t,n),this.z=Ht(this.z,t,n),this.w=Ht(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ht(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RE extends Rs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Oe(0,0,t,n),this.scissorTest=!1,this.viewport=new Oe(0,0,t,n);const a={width:t,height:n,depth:i.depth},s=new sn(a);this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new am(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends RE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class lS extends sn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ke,this.minFilter=ke,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class CE extends sn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ke,this.minFilter=ke,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ai.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ai.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ai.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ai):ai.fromBufferAttribute(s,r),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(t.matrixWorld),this.union(Nl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),Ol.subVectors(this.max,Kr),Os.subVectors(t.a,Kr),Ps.subVectors(t.b,Kr),zs.subVectors(t.c,Kr),ca.subVectors(Ps,Os),ua.subVectors(zs,Ps),Ya.subVectors(Os,zs);let n=[0,-ca.z,ca.y,0,-ua.z,ua.y,0,-Ya.z,Ya.y,ca.z,0,-ca.x,ua.z,0,-ua.x,Ya.z,0,-Ya.x,-ca.y,ca.x,0,-ua.y,ua.x,0,-Ya.y,Ya.x,0];return!Rf(n,Os,Ps,zs,Ol)||(n=[1,0,0,0,1,0,0,0,1],!Rf(n,Os,Ps,zs,Ol))?!1:(Pl.crossVectors(ca,ua),n=[Pl.x,Pl.y,Pl.z],Rf(n,Os,Ps,zs,Ol))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pi=[new N,new N,new N,new N,new N,new N,new N,new N],ai=new N,Nl=new hl,Os=new N,Ps=new N,zs=new N,ca=new N,ua=new N,Ya=new N,Kr=new N,Ol=new N,Pl=new N,Za=new N;function Rf(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Za.fromArray(e,s);const o=a.x*Math.abs(Za.x)+a.y*Math.abs(Za.y)+a.z*Math.abs(Za.z),l=t.dot(Za),c=n.dot(Za),u=i.dot(Za);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wE=new hl,$r=new N,Cf=new N;class dl{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):wE.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);const n=$r.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector($r,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(Cf)),this.expandByPoint($r.copy(t.center).sub(Cf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const zi=new N,wf=new N,zl=new N,fa=new N,Df=new N,Il=new N,Uf=new N;class Uu{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=zi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){wf.copy(t).add(n).multiplyScalar(.5),zl.copy(n).sub(t).normalize(),fa.copy(this.origin).sub(wf);const s=t.distanceTo(n)*.5,r=-this.direction.dot(zl),o=fa.dot(this.direction),l=-fa.dot(zl),c=fa.lengthSq(),u=Math.abs(1-r*r);let h,d,p,m;if(u>0)if(h=r*l-o,d=r*o-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const y=1/u;h*=y,d*=y,p=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-r*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(r*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(wf).addScaledVector(zl,d),p}intersectSphere(t,n){zi.subVectors(t.center,this.origin);const i=zi.dot(this.direction),a=zi.dot(zi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,a=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,a=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,n,i,a,s){Df.subVectors(n,t),Il.subVectors(i,t),Uf.crossVectors(Df,Il);let r=this.direction.dot(Uf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;fa.subVectors(this.origin,t);const l=o*this.direction.dot(Il.crossVectors(fa,Il));if(l<0)return null;const c=o*this.direction.dot(Df.cross(fa));if(c<0||l+c>r)return null;const u=-o*fa.dot(Uf);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,n,i,a,s,r,o,l,c,u,h,d,p,m,y,g){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,u,h,d,p,m,y,g)}set(t,n,i,a,s,r,o,l,c,u,h,d,p,m,y,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=m,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Is.setFromMatrixColumn(t,0).length(),s=1/Is.setFromMatrixColumn(t,1).length(),r=1/Is.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=r*u,p=r*h,m=o*u,y=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+m*c,n[5]=d-y*c,n[9]=-o*l,n[2]=y-d*c,n[6]=m+p*c,n[10]=r*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,m=c*u,y=c*h;n[0]=d+y*o,n[4]=m*o-p,n[8]=r*c,n[1]=r*h,n[5]=r*u,n[9]=-o,n[2]=p*o-m,n[6]=y+d*o,n[10]=r*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,m=c*u,y=c*h;n[0]=d-y*o,n[4]=-r*h,n[8]=m+p*o,n[1]=p+m*o,n[5]=r*u,n[9]=y-d*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const d=r*u,p=r*h,m=o*u,y=o*h;n[0]=l*u,n[4]=m*c-p,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=p*c-m,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,m=o*l,y=o*c;n[0]=l*u,n[4]=y-d*h,n[8]=m*h+p,n[1]=h,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+m,n[10]=d-y*h}else if(t.order==="XZY"){const d=r*l,p=r*c,m=o*l,y=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+y,n[5]=r*u,n[9]=p*h-m,n[2]=m*h-p,n[6]=o*u,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(DE,t,UE)}lookAt(t,n,i){const a=this.elements;return Rn.subVectors(t,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),ha.crossVectors(i,Rn),ha.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),ha.crossVectors(i,Rn)),ha.normalize(),Bl.crossVectors(Rn,ha),a[0]=ha.x,a[4]=Bl.x,a[8]=Rn.x,a[1]=ha.y,a[5]=Bl.y,a[9]=Rn.y,a[2]=ha.z,a[6]=Bl.z,a[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],y=i[6],g=i[10],f=i[14],v=i[3],_=i[7],x=i[11],T=i[15],R=a[0],A=a[4],D=a[8],M=a[12],b=a[1],U=a[5],F=a[9],H=a[13],k=a[2],q=a[6],L=a[10],I=a[14],G=a[3],nt=a[7],et=a[11],lt=a[15];return s[0]=r*R+o*b+l*k+c*G,s[4]=r*A+o*U+l*q+c*nt,s[8]=r*D+o*F+l*L+c*et,s[12]=r*M+o*H+l*I+c*lt,s[1]=u*R+h*b+d*k+p*G,s[5]=u*A+h*U+d*q+p*nt,s[9]=u*D+h*F+d*L+p*et,s[13]=u*M+h*H+d*I+p*lt,s[2]=m*R+y*b+g*k+f*G,s[6]=m*A+y*U+g*q+f*nt,s[10]=m*D+y*F+g*L+f*et,s[14]=m*M+y*H+g*I+f*lt,s[3]=v*R+_*b+x*k+T*G,s[7]=v*A+_*U+x*q+T*nt,s[11]=v*D+_*F+x*L+T*et,s[15]=v*M+_*H+x*I+T*lt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],m=t[3],y=t[7],g=t[11],f=t[15],v=l*p-c*d,_=o*p-c*h,x=o*d-l*h,T=r*p-c*u,R=r*d-l*u,A=r*h-o*u;return n*(y*v-g*_+f*x)-i*(m*v-g*T+f*R)+a*(m*_-y*T+f*A)-s*(m*x-y*R+g*A)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],m=t[12],y=t[13],g=t[14],f=t[15],v=h*g*c-y*d*c+y*l*p-o*g*p-h*l*f+o*d*f,_=m*d*c-u*g*c-m*l*p+r*g*p+u*l*f-r*d*f,x=u*y*c-m*h*c+m*o*p-r*y*p-u*o*f+r*h*f,T=m*h*l-u*y*l-m*o*d+r*y*d+u*o*g-r*h*g,R=n*v+i*_+a*x+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=v*A,t[1]=(y*d*s-h*g*s-y*a*p+i*g*p+h*a*f-i*d*f)*A,t[2]=(o*g*s-y*l*s+y*a*c-i*g*c-o*a*f+i*l*f)*A,t[3]=(h*l*s-o*d*s-h*a*c+i*d*c+o*a*p-i*l*p)*A,t[4]=_*A,t[5]=(u*g*s-m*d*s+m*a*p-n*g*p-u*a*f+n*d*f)*A,t[6]=(m*l*s-r*g*s-m*a*c+n*g*c+r*a*f-n*l*f)*A,t[7]=(r*d*s-u*l*s+u*a*c-n*d*c-r*a*p+n*l*p)*A,t[8]=x*A,t[9]=(m*h*s-u*y*s-m*i*p+n*y*p+u*i*f-n*h*f)*A,t[10]=(r*y*s-m*o*s+m*i*c-n*y*c-r*i*f+n*o*f)*A,t[11]=(u*o*s-r*h*s-u*i*c+n*h*c+r*i*p-n*o*p)*A,t[12]=T*A,t[13]=(u*y*a-m*h*a+m*i*d-n*y*d-u*i*g+n*h*g)*A,t[14]=(m*o*a-r*y*a-m*i*l+n*y*l+r*i*g-n*o*g)*A,t[15]=(r*h*a-u*o*a+u*i*l-n*h*l-r*i*d+n*o*d)*A,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,u=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*r,0,c*l-a*o,u*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,u=r+r,h=o+o,d=s*c,p=s*u,m=s*h,y=r*u,g=r*h,f=o*h,v=l*c,_=l*u,x=l*h,T=i.x,R=i.y,A=i.z;return a[0]=(1-(y+f))*T,a[1]=(p+x)*T,a[2]=(m-_)*T,a[3]=0,a[4]=(p-x)*R,a[5]=(1-(d+f))*R,a[6]=(g+v)*R,a[7]=0,a[8]=(m+_)*A,a[9]=(g-v)*A,a[10]=(1-(d+y))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;if(t.x=a[12],t.y=a[13],t.z=a[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Is.set(a[0],a[1],a[2]).length();const r=Is.set(a[4],a[5],a[6]).length(),o=Is.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),si.copy(this);const c=1/s,u=1/r,h=1/o;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,n.setFromRotationMatrix(si),i.x=s,i.y=r,i.z=o,this}makePerspective(t,n,i,a,s,r,o=ui,l=!1){const c=this.elements,u=2*s/(n-t),h=2*s/(i-a),d=(n+t)/(n-t),p=(i+a)/(i-a);let m,y;if(l)m=s/(r-s),y=r*s/(r-s);else if(o===ui)m=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===ru)m=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=ui,l=!1){const c=this.elements,u=2/(n-t),h=2/(i-a),d=-(n+t)/(n-t),p=-(i+a)/(i-a);let m,y;if(l)m=1/(r-s),y=r/(r-s);else if(o===ui)m=-2/(r-s),y=-(r+s)/(r-s);else if(o===ru)m=-1/(r-s),y=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Is=new N,si=new Se,DE=new N(0,0,0),UE=new N(1,1,1),ha=new N,Bl=new N,Rn=new N,tg=new Se,eg=new fl;class ni{constructor(t=0,n=0,i=0,a=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],u=a[9],h=a[2],d=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ht(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return tg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tg,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return eg.setFromEuler(this),this.setFromQuaternion(eg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let LE=0;const ng=new N,Bs=new fl,Ii=new Se,Fl=new N,to=new N,NE=new N,OE=new fl,ig=new N(1,0,0),ag=new N(0,1,0),sg=new N(0,0,1),rg={type:"added"},PE={type:"removed"},Fs={type:"childadded",child:null},Lf={type:"childremoved",child:null};class Ie extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new N,n=new ni,i=new fl,a=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Se},normalMatrix:{value:new Yt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(ig,t)}rotateY(t){return this.rotateOnAxis(ag,t)}rotateZ(t){return this.rotateOnAxis(sg,t)}translateOnAxis(t,n){return ng.copy(t).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ig,t)}translateY(t){return this.translateOnAxis(ag,t)}translateZ(t){return this.translateOnAxis(sg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Fl.copy(t):Fl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(to,Fl,this.up):Ii.lookAt(Fl,to,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Bs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rg),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(PE),Lf.child=t,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rg),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,NE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,OE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),p=r(t.animations),m=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=a,i;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Ie.DEFAULT_UP=new N(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new N,Bi=new N,Nf=new N,Fi=new N,Hs=new N,Vs=new N,og=new N,Of=new N,Pf=new N,zf=new N,If=new Oe,Bf=new Oe,Ff=new Oe;class li{constructor(t=new N,n=new N,i=new N){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),ri.subVectors(t,n),a.cross(ri);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){ri.subVectors(a,n),Bi.subVectors(i,n),Nf.subVectors(t,n);const r=ri.dot(ri),o=ri.dot(Bi),l=ri.dot(Nf),c=Bi.dot(Bi),u=Bi.dot(Nf),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,m=(r*u-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(r,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return If.setScalar(0),Bf.setScalar(0),Ff.setScalar(0),If.fromBufferAttribute(t,n),Bf.fromBufferAttribute(t,i),Ff.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(If,s.x),r.addScaledVector(Bf,s.y),r.addScaledVector(Ff,s.z),r}static isFrontFacing(t,n,i,a){return ri.subVectors(i,n),Bi.subVectors(t,n),ri.cross(Bi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ri.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return li.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return li.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Hs.subVectors(a,i),Vs.subVectors(s,i),Of.subVectors(t,i);const l=Hs.dot(Of),c=Vs.dot(Of);if(l<=0&&c<=0)return n.copy(i);Pf.subVectors(t,a);const u=Hs.dot(Pf),h=Vs.dot(Pf);if(u>=0&&h<=u)return n.copy(a);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Hs,r);zf.subVectors(t,s);const p=Hs.dot(zf),m=Vs.dot(zf);if(m>=0&&p<=m)return n.copy(s);const y=p*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),n.copy(i).addScaledVector(Vs,o);const g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return og.subVectors(s,a),o=(h-u)/(h-u+(p-m)),n.copy(a).addScaledVector(og,o);const f=1/(g+y+d);return r=y*f,o=d*f,n.copy(i).addScaledVector(Hs,r).addScaledVector(Vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Hf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Vt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=se.workingColorSpace){return this.r=t,this.g=n,this.b=i,se.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=se.workingColorSpace){if(t=im(t,1),n=Ht(n,0,1),i=Ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Hf(r,s,t+1/3),this.g=Hf(r,s,t),this.b=Hf(r,s,t-1/3)}return se.colorSpaceToWorking(this,a),this}setStyle(t,n=qn){function i(s){s!==void 0&&parseFloat(s)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:It("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=qn){const i=cS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return se.workingToColorSpace(on.copy(this),t),Math.round(Ht(on.r*255,0,255))*65536+Math.round(Ht(on.g*255,0,255))*256+Math.round(Ht(on.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=se.workingColorSpace){se.workingToColorSpace(on.copy(this),n);const i=on.r,a=on.g,s=on.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=se.workingColorSpace){return se.workingToColorSpace(on.copy(this),n),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=qn){se.workingToColorSpace(on.copy(this),t);const n=on.r,i=on.g,a=on.b;return t!==qn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(da),this.setHSL(da.h+t,da.s+n,da.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(da),t.getHSL(Hl);const i=Co(da.h,Hl.h,n),a=Co(da.s,Hl.s,n),s=Co(da.l,Hl.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Vt;Vt.NAMES=cS;let zE=0;class En extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=gr,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=td,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){It(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){It(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Va&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$h&&(i.blendSrc=this.blendSrc),this.blendDst!==td&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class uS extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ki=IE();function IE(){const e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),i=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,a[l]=24,a[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,a[l]=-c-1,a[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,a[l]=13,a[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,a[l]=24,a[l|256]=24):(i[l]=31744,i[l|256]=64512,a[l]=13,a[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:n,baseTable:i,shiftTable:a,mantissaTable:s,exponentTable:r,offsetTable:o}}function Cn(e){Math.abs(e)>65504&&It("DataUtils.toHalfFloat(): Value out of range."),e=Ht(e,-65504,65504),ki.floatView[0]=e;const t=ki.uint32View[0],n=t>>23&511;return ki.baseTable[n]+((t&8388607)>>ki.shiftTable[n])}function Vl(e){const t=e>>10;return ki.uint32View[0]=ki.mantissaTable[ki.offsetTable[t]+(e&1023)]+ki.exponentTable[t],ki.floatView[0]}const Be=new N,Gl=new ct;let BE=0;class Hn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=kd,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Gl.fromBufferAttribute(this,n),Gl.applyMatrix3(t),this.setXY(n,Gl.x,Gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix3(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyMatrix4(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.applyNormalMatrix(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Be.fromBufferAttribute(this,n),Be.transformDirection(t),this.setXYZ(n,Be.x,Be.y,Be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=dn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Wt(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=dn(n,this.array)),n}setX(t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=dn(n,this.array)),n}setY(t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=dn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=dn(n,this.array)),n}setW(t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),a=Wt(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),a=Wt(a,this.array),s=Wt(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kd&&(t.usage=this.usage),t}}class fS extends Hn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class hS extends Hn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class SC extends Hn{constructor(t,n,i){super(new Uint16Array(t),n,i),this.isFloat16BufferAttribute=!0}getX(t){let n=Vl(this.array[t*this.itemSize]);return this.normalized&&(n=dn(n,this.array)),n}setX(t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[t*this.itemSize]=Cn(n),this}getY(t){let n=Vl(this.array[t*this.itemSize+1]);return this.normalized&&(n=dn(n,this.array)),n}setY(t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[t*this.itemSize+1]=Cn(n),this}getZ(t){let n=Vl(this.array[t*this.itemSize+2]);return this.normalized&&(n=dn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[t*this.itemSize+2]=Cn(n),this}getW(t){let n=Vl(this.array[t*this.itemSize+3]);return this.normalized&&(n=dn(n,this.array)),n}setW(t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[t*this.itemSize+3]=Cn(n),this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[t+0]=Cn(n),this.array[t+1]=Cn(i),this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),a=Wt(a,this.array)),this.array[t+0]=Cn(n),this.array[t+1]=Cn(i),this.array[t+2]=Cn(a),this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),a=Wt(a,this.array),s=Wt(s,this.array)),this.array[t+0]=Cn(n),this.array[t+1]=Cn(i),this.array[t+2]=Cn(a),this.array[t+3]=Cn(s),this}}class Ee extends Hn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let FE=0;const kn=new Se,Vf=new Ie,Gs=new N,wn=new hl,eo=new hl,Ze=new N;class Ke extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oS(t)?hS:fS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,n,i){return kn.makeTranslation(t,n,i),this.applyMatrix4(kn),this}scale(t,n,i){return kn.makeScale(t,n,i),this.applyMatrix4(kn),this}lookAt(t){return Vf.lookAt(t),Vf.updateMatrix(),this.applyMatrix4(Vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ee(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];eo.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(wn.min,eo.min),wn.expandByPoint(Ze),Ze.addVectors(wn.max,eo.max),wn.expandByPoint(Ze)):(wn.expandByPoint(eo.min),wn.expandByPoint(eo.max))}wn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Ze.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Ze));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ze.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(t,c),Ze.add(Gs)),a=Math.max(a,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new N,l[D]=new N;const c=new N,u=new N,h=new N,d=new ct,p=new ct,m=new ct,y=new N,g=new N;function f(D,M,b){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,b),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,b),u.sub(c),h.sub(c),p.sub(d),m.sub(d);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(U),o[D].add(y),o[M].add(y),o[b].add(y),l[D].add(g),l[M].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,M=v.length;D<M;++D){const b=v[D],U=b.start,F=b.count;for(let H=U,k=U+F;H<k;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const _=new N,x=new N,T=new N,R=new N;function A(D){T.fromBufferAttribute(a,D),R.copy(T);const M=o[D];_.copy(M),_.sub(T.multiplyScalar(T.dot(M))).normalize(),x.crossVectors(R,M);const U=x.dot(l[D])<0?-1:1;r.setXYZW(D,_.x,_.y,_.z,U)}for(let D=0,M=v.length;D<M;++D){const b=v[D],U=b.start,F=b.count;for(let H=U,k=U+F;H<k;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new N,s=new N,r=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const m=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);a.fromBufferAttribute(n,m),s.fromBufferAttribute(n,y),r.fromBufferAttribute(n,g),u.subVectors(r,s),h.subVectors(a,s),u.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)a.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),r.fromBufferAttribute(n,d+2),u.subVectors(r,s),h.subVectors(a,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ze.fromBufferAttribute(t,n),Ze.normalize(),t.setXYZ(n,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)d[m++]=c[p++]}return new Hn(d,u,h)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ke,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(a[l]=u,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(n))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lg=new Se,ja=new Uu,Xl=new dl,cg=new N,kl=new N,Wl=new N,ql=new N,Gf=new N,Yl=new N,ug=new N,Zl=new N;class oa extends Ie{constructor(t=new Ke,n=new uS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){Yl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Gf.fromBufferAttribute(h,t),r?Yl.addScaledVector(Gf,u):Yl.addScaledVector(Gf.sub(n),u))}n.add(Yl)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(s),ja.copy(t.ray).recast(t.near),!(Xl.containsPoint(ja.origin)===!1&&(ja.intersectSphere(Xl,cg)===null||ja.origin.distanceToSquared(cg)>(t.far-t.near)**2))&&(lg.copy(s).invert(),ja.copy(t.ray).applyMatrix4(lg),!(i.boundingBox!==null&&ja.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ja)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,y=d.length;m<y;m++){const g=d[m],f=r[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,T=_;x<T;x+=3){const R=o.getX(x),A=o.getX(x+1),D=o.getX(x+2);a=jl(this,f,t,i,c,u,h,R,A,D),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const m=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){const v=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);a=jl(this,r,t,i,c,u,h,v,_,x),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,y=d.length;m<y;m++){const g=d[m],f=r[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,T=_;x<T;x+=3){const R=x,A=x+1,D=x+2;a=jl(this,f,t,i,c,u,h,R,A,D),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){const v=g,_=g+1,x=g+2;a=jl(this,r,t,i,c,u,h,v,_,x),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function HE(e,t,n,i,a,s,r,o){let l;if(t.side===yn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===Va,o),l===null)return null;Zl.copy(o),Zl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Zl);return c<n.near||c>n.far?null:{distance:c,point:Zl.clone(),object:e}}function jl(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,kl),e.getVertexPosition(l,Wl),e.getVertexPosition(c,ql);const u=HE(e,t,n,i,kl,Wl,ql,ug);if(u){const h=new N;li.getBarycoord(ug,kl,Wl,ql,h),a&&(u.uv=li.getInterpolatedAttribute(a,o,l,c,h,new ct)),s&&(u.uv1=li.getInterpolatedAttribute(s,o,l,c,h,new ct)),r&&(u.normal=li.getInterpolatedAttribute(r,o,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};li.getNormal(kl,Wl,ql,d.normal),u.face=d,u.barycoord=h}return u}class pl extends Ke{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,n,t,r,s,0),m("z","y","x",1,-1,i,n,-t,r,s,1),m("x","z","y",1,1,t,i,n,a,r,2),m("x","z","y",1,-1,t,i,-n,a,r,3),m("x","y","z",1,-1,t,n,i,a,s,4),m("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(h,2));function m(y,g,f,v,_,x,T,R,A,D,M){const b=x/A,U=T/D,F=x/2,H=T/2,k=R/2,q=A+1,L=D+1;let I=0,G=0;const nt=new N;for(let et=0;et<L;et++){const lt=et*U-H;for(let Bt=0;Bt<q;Bt++){const Nt=Bt*b-F;nt[y]=Nt*v,nt[g]=lt*_,nt[f]=k,c.push(nt.x,nt.y,nt.z),nt[y]=0,nt[g]=0,nt[f]=R>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Bt/A),h.push(1-et/D),I+=1}}for(let et=0;et<D;et++)for(let lt=0;lt<A;lt++){const Bt=d+lt+q*et,Nt=d+lt+q*(et+1),$t=d+(lt+1)+q*(et+1),ae=d+(lt+1)+q*et;l.push(Bt,Nt,ae),l.push(Nt,$t,ae),G+=6}o.addGroup(p,G,M),p+=G,d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function fn(e){const t={};for(let n=0;n<e.length;n++){const i=Or(e[n]);for(const a in i)t[a]=i[a]}return t}function VE(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function dS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const GE={clone:Or,merge:fn};var XE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XE,this.fragmentShader=kE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=VE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class pS extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pa=new N,fg=new ct,hg=new ct;class Ln extends pS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Nr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pa.x,pa.y).multiplyScalar(-t/pa.z),pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pa.x,pa.y).multiplyScalar(-t/pa.z)}getViewSize(t,n){return this.getViewBounds(t,fg,hg),n.subVectors(hg,fg)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ro*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xs=-90,ks=1;class WE extends Ie{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ln(Xs,ks,t,n);a.layers=this.layers,this.add(a);const s=new Ln(Xs,ks,t,n);s.layers=this.layers,this.add(s);const r=new Ln(Xs,ks,t,n);r.layers=this.layers,this.add(r);const o=new Ln(Xs,ks,t,n);o.layers=this.layers,this.add(o);const l=new Ln(Xs,ks,t,n);l.layers=this.layers,this.add(l);const c=new Ln(Xs,ks,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===ui)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ru)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,s),t.setRenderTarget(i,1,a),t.render(n,r),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,a),t.render(n,u),t.setRenderTarget(h,d,p),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class mS extends sn{constructor(t=[],n=xs,i,a,s,r,o,l,c,u){super(t,n,i,a,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gS extends Ei{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new mS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new pl(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Ki});s.uniforms.tEquirect.value=n;const r=new oa(a,s),o=n.minFilter;return n.minFilter===rs&&(n.minFilter=ln),new WE(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}class Jl extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qE={type:"move"};class Xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const y of t.hand.values()){const g=n.getJointPose(y,i),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Jl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class yC extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class YE{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=kd,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let a=0,s=this.stride;a<s;a++)this.array[t+a]=n.array[i+a];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new N;class _S{constructor(t,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(t),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.transformDirection(t),this.setXYZ(n,un.x,un.y,un.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=dn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=dn(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=dn(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=dn(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=dn(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),a=Wt(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),a=Wt(a,this.array),s=Wt(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ou("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return new Hn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _S(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ou("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class MC extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}class ZE extends sn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=ke,u=ke,h,d){super(null,r,o,l,c,u,a,s,h,d),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bC extends Hn{constructor(t,n,i,a=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const kf=new N,jE=new N,JE=new Yt;class is{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=kf.subVectors(i,n).cross(jE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(kf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||JE.getNormalMatrix(t),a=this.coplanarPoint(kf).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ja=new dl,QE=new ct(.5,.5),Ql=new N;class Lu{constructor(t=new is,n=new is,i=new is,a=new is,s=new is,r=new is){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ui,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],m=s[8],y=s[9],g=s[10],f=s[11],v=s[12],_=s[13],x=s[14],T=s[15];if(a[0].setComponents(c-r,p-u,f-m,T-v).normalize(),a[1].setComponents(c+r,p+u,f+m,T+v).normalize(),a[2].setComponents(c+o,p+h,f+y,T+_).normalize(),a[3].setComponents(c-o,p-h,f-y,T-_).normalize(),i)a[4].setComponents(l,d,g,x).normalize(),a[5].setComponents(c-l,p-d,f-g,T-x).normalize();else if(a[4].setComponents(c-l,p-d,f-g,T-x).normalize(),n===ui)a[5].setComponents(c+l,p+d,f+g,T+x).normalize();else if(n===ru)a[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ja.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ja)}intersectsSprite(t){Ja.center.set(0,0,0);const n=QE.distanceTo(t.center);return Ja.radius=.7071067811865476+n,Ja.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ja)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Ql.x=a.normal.x>0?t.max.x:t.min.x,Ql.y=a.normal.y>0?t.max.y:t.min.y,Ql.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const di=new Se,pi=new Lu;class vS{constructor(){this.coordinateSystem=ui}intersectsObject(t,n){if(!n.isArrayCamera||n.cameras.length===0)return!1;for(let i=0;i<n.cameras.length;i++){const a=n.cameras[i];if(di.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),pi.setFromProjectionMatrix(di,a.coordinateSystem,a.reversedDepth),pi.intersectsObject(t))return!0}return!1}intersectsSprite(t,n){if(!n||!n.cameras||n.cameras.length===0)return!1;for(let i=0;i<n.cameras.length;i++){const a=n.cameras[i];if(di.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),pi.setFromProjectionMatrix(di,a.coordinateSystem,a.reversedDepth),pi.intersectsSprite(t))return!0}return!1}intersectsSphere(t,n){if(!n||!n.cameras||n.cameras.length===0)return!1;for(let i=0;i<n.cameras.length;i++){const a=n.cameras[i];if(di.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),pi.setFromProjectionMatrix(di,a.coordinateSystem,a.reversedDepth),pi.intersectsSphere(t))return!0}return!1}intersectsBox(t,n){if(!n||!n.cameras||n.cameras.length===0)return!1;for(let i=0;i<n.cameras.length;i++){const a=n.cameras[i];if(di.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),pi.setFromProjectionMatrix(di,a.coordinateSystem,a.reversedDepth),pi.intersectsBox(t))return!0}return!1}containsPoint(t,n){if(!n||!n.cameras||n.cameras.length===0)return!1;for(let i=0;i<n.cameras.length;i++){const a=n.cameras[i];if(di.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),pi.setFromProjectionMatrix(di,a.coordinateSystem,a.reversedDepth),pi.containsPoint(t))return!0}return!1}clone(){return new vS}}class xS extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lu=new N,cu=new N,dg=new Se,no=new Uu,Kl=new dl,Wf=new N,pg=new N;class KE extends Ie{constructor(t=new Ke,n=new xS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)lu.fromBufferAttribute(n,a-1),cu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=lu.distanceTo(cu);t.setAttribute("lineDistance",new Ee(i,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(a),Kl.radius+=s,t.ray.intersectsSphere(Kl)===!1)return;dg.copy(a).invert(),no.copy(t.ray).applyMatrix4(dg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let y=p,g=m-1;y<g;y+=c){const f=u.getX(y),v=u.getX(y+1),_=$l(this,t,no,l,f,v,y);_&&n.push(_)}if(this.isLineLoop){const y=u.getX(m-1),g=u.getX(p),f=$l(this,t,no,l,y,g,m-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let y=p,g=m-1;y<g;y+=c){const f=$l(this,t,no,l,y,y+1,y);f&&n.push(f)}if(this.isLineLoop){const y=$l(this,t,no,l,m-1,p,m-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $l(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(lu.fromBufferAttribute(o,a),cu.fromBufferAttribute(o,s),n.distanceSqToSegment(lu,cu,Wf,pg)>i)return;Wf.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Wf);if(!(c<t.near||c>t.far))return{distance:c,point:pg.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}const mg=new N,gg=new N;class EC extends KE{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)mg.fromBufferAttribute(n,a),gg.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+mg.distanceTo(gg);t.setAttribute("lineDistance",new Ee(i,1))}else It("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $E extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _g=new Se,Wd=new Uu,tc=new dl,ec=new N;class TC extends Ie{constructor(t=new Ke,n=new $E){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(a),tc.radius+=s,t.ray.intersectsSphere(tc)===!1)return;_g.copy(a).invert(),Wd.copy(t.ray).applyMatrix4(_g);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let m=d,y=p;m<y;m++){const g=c.getX(m);ec.fromBufferAttribute(h,g),vg(ec,g,l,a,t,n,this)}}else{const d=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let m=d,y=p;m<y;m++)ec.fromBufferAttribute(h,m),vg(ec,m,l,a,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vg(e,t,n,i,a,s,r){const o=Wd.distanceSqToPoint(e);if(o<n){const l=new N;Wd.closestPointToPoint(e,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class AC extends sn{constructor(t,n){super({width:t,height:n}),this.isFramebufferTexture=!0,this.magFilter=ke,this.minFilter=ke,this.generateMipmaps=!1,this.needsUpdate=!0}}class jo extends sn{constructor(t,n,i=Ti,a,s,r,o=ke,l=ke,c,u=ra,h=1){if(u!==ra&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:n,depth:h};super(d,a,s,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new am(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class t1 extends jo{constructor(t,n=Ti,i=xs,a,s,r=ke,o=ke,l,c=ra){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,n,i,a,s,r,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class SS extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class yS extends Ke{constructor(t=1,n=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:a},n=Math.max(3,n);const s=[],r=[],o=[],l=[],c=new N,u=new ct;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){const p=i+h/n*a;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yS(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class MS extends Ke{constructor(t=1,n=1,i=1,a=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const u=[],h=[],d=[],p=[];let m=0;const y=[],g=i/2;let f=0;v(),r===!1&&(t>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(p,2));function v(){const x=new N,T=new N;let R=0;const A=(n-t)/i;for(let D=0;D<=s;D++){const M=[],b=D/s,U=b*(n-t)+t;for(let F=0;F<=a;F++){const H=F/a,k=H*l+o,q=Math.sin(k),L=Math.cos(k);T.x=U*q,T.y=-b*i+g,T.z=U*L,h.push(T.x,T.y,T.z),x.set(q,A,L).normalize(),d.push(x.x,x.y,x.z),p.push(H,1-b),M.push(m++)}y.push(M)}for(let D=0;D<a;D++)for(let M=0;M<s;M++){const b=y[M][D],U=y[M+1][D],F=y[M+1][D+1],H=y[M][D+1];(t>0||M!==0)&&(u.push(b,U,H),R+=3),(n>0||M!==s-1)&&(u.push(U,F,H),R+=3)}c.addGroup(f,R,0),f+=R}function _(x){const T=m,R=new ct,A=new N;let D=0;const M=x===!0?t:n,b=x===!0?1:-1;for(let F=1;F<=a;F++)h.push(0,g*b,0),d.push(0,b,0),p.push(.5,.5),m++;const U=m;for(let F=0;F<=a;F++){const k=F/a*l+o,q=Math.cos(k),L=Math.sin(k);A.x=M*L,A.y=g*b,A.z=M*q,h.push(A.x,A.y,A.z),d.push(0,b,0),R.x=q*.5+.5,R.y=L*.5*b+.5,p.push(R.x,R.y),m++}for(let F=0;F<a;F++){const H=T+F,k=U+F;x===!0?u.push(k,k+1,H):u.push(k+1,k,H),D+=3}c.addGroup(f,D,x===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new MS(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,n){const i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,a=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(a),n.push(s),a=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const i=this.getLengths();let a=0;const s=i.length;let r;n?r=n:r=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);const u=i[a],d=i[a+1]-u,p=(r-u)/d;return(a+p)/(s-1)}getTangent(t,n){let a=t-1e-4,s=t+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),l=n||(r.isVector2?new ct:new N);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){const i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){const i=new N,a=[],s=[],r=[],o=new N,l=new Se;for(let p=0;p<=t;p++){const m=p/t;a[p]=this.getTangentAt(m,new N)}s[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(a[0].x),h=Math.abs(a[0].y),d=Math.abs(a[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ht(a[p-1].dot(a[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}r[p].crossVectors(a[p],s[p])}if(n===!0){let p=Math.acos(Ht(s[0].dot(s[t]),-1,1));p/=t,a[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(a[m],p*m)),r[m].crossVectors(a[m],s[m])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rm extends wi{constructor(t=0,n=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new ct){const i=n,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class e1 extends rm{constructor(t,n,i,a,s,r){super(t,n,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function om(){let e=0,t=0,n=0,i=0;function a(s,r,o,l){e=s,t=o,n=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){a(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,u,h){let d=(r-s)/c-(o-s)/(c+u)+(o-r)/u,p=(o-r)/u-(l-r)/(u+h)+(l-o)/h;d*=u,p*=u,a(r,o,d,p)},calc:function(s){const r=s*s,o=r*s;return e+t*s+n*r+i*o}}}const nc=new N,qf=new om,Yf=new om,Zf=new om;class n1 extends wi{constructor(t=[],n=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=a}getPoint(t,n=new N){const i=n,a=this.points,s=a.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=a[(o-1)%s]:(nc.subVectors(a[0],a[1]).add(a[0]),c=nc);const h=a[o%s],d=a[(o+1)%s];if(this.closed||o+2<s?u=a[(o+2)%s]:(nc.subVectors(a[s-1],a[s-2]).add(a[s-1]),u=nc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),qf.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,y,g),Yf.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,y,g),Zf.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,y,g)}else this.curveType==="catmullrom"&&(qf.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Yf.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Zf.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(qf.calc(l),Yf.calc(l),Zf.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const a=t.points[n];this.points.push(a.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const a=this.points[n];t.points.push(a.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const a=t.points[n];this.points.push(new N().fromArray(a))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xg(e,t,n,i,a){const s=(i-t)*.5,r=(a-n)*.5,o=e*e,l=e*o;return(2*n-2*i+s+r)*l+(-3*n+3*i-2*s-r)*o+s*e+n}function i1(e,t){const n=1-e;return n*n*t}function a1(e,t){return 2*(1-e)*e*t}function s1(e,t){return e*e*t}function wo(e,t,n,i){return i1(e,t)+a1(e,n)+s1(e,i)}function r1(e,t){const n=1-e;return n*n*n*t}function o1(e,t){const n=1-e;return 3*n*n*e*t}function l1(e,t){return 3*(1-e)*e*e*t}function c1(e,t){return e*e*e*t}function Do(e,t,n,i,a){return r1(e,t)+o1(e,n)+l1(e,i)+c1(e,a)}class bS extends wi{constructor(t=new ct,n=new ct,i=new ct,a=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=a}getPoint(t,n=new ct){const i=n,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Do(t,a.x,s.x,r.x,o.x),Do(t,a.y,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class u1 extends wi{constructor(t=new N,n=new N,i=new N,a=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=a}getPoint(t,n=new N){const i=n,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Do(t,a.x,s.x,r.x,o.x),Do(t,a.y,s.y,r.y,o.y),Do(t,a.z,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ES extends wi{constructor(t=new ct,n=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new ct){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new ct){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f1 extends wi{constructor(t=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new N){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class TS extends wi{constructor(t=new ct,n=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new ct){const i=n,a=this.v0,s=this.v1,r=this.v2;return i.set(wo(t,a.x,s.x,r.x),wo(t,a.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class AS extends wi{constructor(t=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new N){const i=n,a=this.v0,s=this.v1,r=this.v2;return i.set(wo(t,a.x,s.x,r.x),wo(t,a.y,s.y,r.y),wo(t,a.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class RS extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new ct){const i=n,a=this.points,s=(a.length-1)*t,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],c=a[r],u=a[r>a.length-2?a.length-1:r+1],h=a[r>a.length-3?a.length-1:r+2];return i.set(xg(o,l.x,c.x,u.x,h.x),xg(o,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const a=t.points[n];this.points.push(a.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const a=this.points[n];t.points.push(a.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const a=t.points[n];this.points.push(new ct().fromArray(a))}return this}}var uu=Object.freeze({__proto__:null,ArcCurve:e1,CatmullRomCurve3:n1,CubicBezierCurve:bS,CubicBezierCurve3:u1,EllipseCurve:rm,LineCurve:ES,LineCurve3:f1,QuadraticBezierCurve:TS,QuadraticBezierCurve3:AS,SplineCurve:RS});class h1 extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uu[i](n,t))}return this}getPoint(t,n){const i=t*this.getLength(),a=this.getCurveLengths();let s=0;for(;s<a.length;){if(a[s]>=i){const r=a[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let i=0,a=this.curves.length;i<a;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let i;for(let a=0,s=this.curves;a<s.length;a++){const r=s[a],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const a=t.curves[n];this.curves.push(a.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const a=this.curves[n];t.curves.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const a=t.curves[n];this.curves.push(new uu[a.type]().fromJSON(a))}return this}}class qd extends h1{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const i=new ES(this.currentPoint.clone(),new ct(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,a){const s=new TS(this.currentPoint.clone(),new ct(t,n),new ct(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(t,n,i,a,s,r){const o=new bS(this.currentPoint.clone(),new ct(t,n),new ct(i,a),new ct(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),i=new RS(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,a,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,a,s,r),this}absarc(t,n,i,a,s,r){return this.absellipse(t,n,i,i,a,s,r),this}ellipse(t,n,i,a,s,r,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,n+u,i,a,s,r,o,l),this}absellipse(t,n,i,a,s,r,o,l){const c=new rm(t,n,i,a,s,r,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cc extends qd{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let i=0,a=this.holes.length;i<a;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const a=t.holes[n];this.holes.push(a.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const a=this.holes[n];t.holes.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const a=t.holes[n];this.holes.push(new qd().fromJSON(a))}return this}}function d1(e,t,n=2){const i=t&&t.length,a=i?t[0]*n:e.length;let s=CS(e,0,a,n,!0);const r=[];if(!s||s.next===s.prev)return r;let o,l,c;if(i&&(s=v1(e,t,s,n)),e.length>80*n){o=e[0],l=e[1];let u=o,h=l;for(let d=n;d<a;d+=n){const p=e[d],m=e[d+1];p<o&&(o=p),m<l&&(l=m),p>u&&(u=p),m>h&&(h=m)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Jo(s,r,n,o,l,c,0),r}function CS(e,t,n,i,a){let s;if(a===w1(e,t,n,i)>0)for(let r=t;r<n;r+=i)s=Sg(r/i|0,e[r],e[r+1],s);else for(let r=n-i;r>=t;r-=i)s=Sg(r/i|0,e[r],e[r+1],s);return s&&Pr(s,s.next)&&(Ko(s),s=s.next),s}function Ss(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Pr(n,n.next)||we(n.prev,n,n.next)===0)){if(Ko(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function Jo(e,t,n,i,a,s,r){if(!e)return;!r&&s&&b1(e,i,a,s);let o=e;for(;e.prev!==e.next;){const l=e.prev,c=e.next;if(s?m1(e,i,a,s):p1(e)){t.push(l.i,e.i,c.i),Ko(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=g1(Ss(e),t),Jo(e,t,n,i,a,s,2)):r===2&&_1(e,t,n,i,a,s):Jo(Ss(e),t,n,i,a,s,1);break}}}function p1(e){const t=e.prev,n=e,i=e.next;if(we(t,n,i)>=0)return!1;const a=t.x,s=n.x,r=i.x,o=t.y,l=n.y,c=i.y,u=Math.min(a,s,r),h=Math.min(o,l,c),d=Math.max(a,s,r),p=Math.max(o,l,c);let m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&fo(a,o,s,l,r,c,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function m1(e,t,n,i){const a=e.prev,s=e,r=e.next;if(we(a,s,r)>=0)return!1;const o=a.x,l=s.x,c=r.x,u=a.y,h=s.y,d=r.y,p=Math.min(o,l,c),m=Math.min(u,h,d),y=Math.max(o,l,c),g=Math.max(u,h,d),f=Yd(p,m,t,n,i),v=Yd(y,g,t,n,i);let _=e.prevZ,x=e.nextZ;for(;_&&_.z>=f&&x&&x.z<=v;){if(_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==a&&_!==r&&fo(o,u,l,h,c,d,_.x,_.y)&&we(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=y&&x.y>=m&&x.y<=g&&x!==a&&x!==r&&fo(o,u,l,h,c,d,x.x,x.y)&&we(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==a&&_!==r&&fo(o,u,l,h,c,d,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=y&&x.y>=m&&x.y<=g&&x!==a&&x!==r&&fo(o,u,l,h,c,d,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function g1(e,t){let n=e;do{const i=n.prev,a=n.next.next;!Pr(i,a)&&DS(i,n,n.next,a)&&Qo(i,a)&&Qo(a,i)&&(t.push(i.i,n.i,a.i),Ko(n),Ko(n.next),n=e=a),n=n.next}while(n!==e);return Ss(n)}function _1(e,t,n,i,a,s){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&A1(r,o)){let l=US(r,o);r=Ss(r,r.next),l=Ss(l,l.next),Jo(r,t,n,i,a,s,0),Jo(l,t,n,i,a,s,0);return}o=o.next}r=r.next}while(r!==e)}function v1(e,t,n,i){const a=[];for(let s=0,r=t.length;s<r;s++){const o=t[s]*i,l=s<r-1?t[s+1]*i:e.length,c=CS(e,o,l,i,!1);c===c.next&&(c.steiner=!0),a.push(T1(c))}a.sort(x1);for(let s=0;s<a.length;s++)n=S1(a[s],n);return n}function x1(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){const i=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);n=i-a}return n}function S1(e,t){const n=y1(e,t);if(!n)return t;const i=US(n,e);return Ss(i,i.next),Ss(n,n.next)}function y1(e,t){let n=t;const i=e.x,a=e.y;let s=-1/0,r;if(Pr(e,n))return n;do{if(Pr(e,n.next))return n.next;if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){const h=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>s&&(s=h,r=n.x<n.next.x?n:n.next,h===i))return r}n=n.next}while(n!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&wS(a<c?i:s,a,l,c,a<c?s:i,a,n.x,n.y)){const h=Math.abs(a-n.y)/(i-n.x);Qo(n,e)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&M1(r,n)))&&(r=n,u=h)}n=n.next}while(n!==o);return r}function M1(e,t){return we(e.prev,e,t.prev)<0&&we(t.next,e,e.next)<0}function b1(e,t,n,i){let a=e;do a.z===0&&(a.z=Yd(a.x,a.y,t,n,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,E1(a)}function E1(e){let t,n=1;do{let i=e,a;e=null;let s=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,n*=2}while(t>1);return e}function Yd(e,t,n,i,a){return e=(e-n)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function T1(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function wS(e,t,n,i,a,s,r,o){return(a-r)*(t-o)>=(e-r)*(s-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(s-o)>=(a-r)*(i-o)}function fo(e,t,n,i,a,s,r,o){return!(e===r&&t===o)&&wS(e,t,n,i,a,s,r,o)}function A1(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!R1(e,t)&&(Qo(e,t)&&Qo(t,e)&&C1(e,t)&&(we(e.prev,e,t.prev)||we(e,t.prev,t))||Pr(e,t)&&we(e.prev,e,e.next)>0&&we(t.prev,t,t.next)>0)}function we(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Pr(e,t){return e.x===t.x&&e.y===t.y}function DS(e,t,n,i){const a=ac(we(e,t,n)),s=ac(we(e,t,i)),r=ac(we(n,i,e)),o=ac(we(n,i,t));return!!(a!==s&&r!==o||a===0&&ic(e,n,t)||s===0&&ic(e,i,t)||r===0&&ic(n,e,i)||o===0&&ic(n,t,i))}function ic(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ac(e){return e>0?1:e<0?-1:0}function R1(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&DS(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Qo(e,t){return we(e.prev,e,e.next)<0?we(e,t,e.next)>=0&&we(e,e.prev,t)>=0:we(e,t,e.prev)<0||we(e,e.next,t)<0}function C1(e,t){let n=e,i=!1;const a=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&a<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function US(e,t){const n=Zd(e.i,e.x,e.y),i=Zd(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=a,a.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Sg(e,t,n,i){const a=Zd(e,t,n);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function Ko(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Zd(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function w1(e,t,n,i){let a=0;for(let s=t,r=n-i;s<n;s+=i)a+=(e[r]-e[s])*(e[s+1]+e[r+1]),r=s;return a}class D1{static triangulate(t,n,i=2){return d1(t,n,i)}}class ls{static area(t){const n=t.length;let i=0;for(let a=n-1,s=0;s<n;a=s++)i+=t[a].x*t[s].y-t[s].x*t[a].y;return i*.5}static isClockWise(t){return ls.area(t)<0}static triangulateShape(t,n){const i=[],a=[],s=[];yg(t),Mg(i,t);let r=t.length;n.forEach(yg);for(let l=0;l<n.length;l++)a.push(r),r+=n[l].length,Mg(i,n[l]);const o=D1.triangulate(i,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function yg(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Mg(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class LS extends Ke{constructor(t=new Cc([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const i=this,a=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new Ee(a,3)),this.setAttribute("uv",new Ee(s,2)),this.computeVertexNormals();function r(o){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:U1;let _,x=!1,T,R,A,D;if(f){_=f.getSpacedPoints(u),x=!0,d=!1;const K=f.isCatmullRomCurve3?f.closed:!1;T=f.computeFrenetFrames(u,K),R=new N,A=new N,D=new N}d||(g=0,p=0,m=0,y=0);const M=o.extractPoints(c);let b=M.shape;const U=M.holes;if(!ls.isClockWise(b)){b=b.reverse();for(let K=0,at=U.length;K<at;K++){const $=U[K];ls.isClockWise($)&&(U[K]=$.reverse())}}function H(K){const $=10000000000000001e-36;let gt=K[0];for(let w=1;w<=K.length;w++){const Dt=w%K.length,xt=K[Dt],Pt=xt.x-gt.x,ot=xt.y-gt.y,C=Pt*Pt+ot*ot,S=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(gt.x),Math.abs(gt.y)),P=$*S*S;if(C<=P){K.splice(Dt,1),w--;continue}gt=xt}}H(b),U.forEach(H);const k=U.length,q=b;for(let K=0;K<k;K++){const at=U[K];b=b.concat(at)}function L(K,at,$){return at||ie("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(at,$)}const I=b.length;function G(K,at,$){let gt,w,Dt;const xt=K.x-at.x,Pt=K.y-at.y,ot=$.x-K.x,C=$.y-K.y,S=xt*xt+Pt*Pt,P=xt*C-Pt*ot;if(Math.abs(P)>Number.EPSILON){const W=Math.sqrt(S),J=Math.sqrt(ot*ot+C*C),Y=at.x-Pt/W,Rt=at.y+xt/W,ut=$.x-C/J,Tt=$.y+ot/J,zt=((ut-Y)*C-(Tt-Rt)*ot)/(xt*C-Pt*ot);gt=Y+xt*zt-K.x,w=Rt+Pt*zt-K.y;const it=gt*gt+w*w;if(it<=2)return new ct(gt,w);Dt=Math.sqrt(it/2)}else{let W=!1;xt>Number.EPSILON?ot>Number.EPSILON&&(W=!0):xt<-Number.EPSILON?ot<-Number.EPSILON&&(W=!0):Math.sign(Pt)===Math.sign(C)&&(W=!0),W?(gt=-Pt,w=xt,Dt=Math.sqrt(S)):(gt=xt,w=Pt,Dt=Math.sqrt(S/2))}return new ct(gt/Dt,w/Dt)}const nt=[];for(let K=0,at=q.length,$=at-1,gt=K+1;K<at;K++,$++,gt++)$===at&&($=0),gt===at&&(gt=0),nt[K]=G(q[K],q[$],q[gt]);const et=[];let lt,Bt=nt.concat();for(let K=0,at=k;K<at;K++){const $=U[K];lt=[];for(let gt=0,w=$.length,Dt=w-1,xt=gt+1;gt<w;gt++,Dt++,xt++)Dt===w&&(Dt=0),xt===w&&(xt=0),lt[gt]=G($[gt],$[Dt],$[xt]);et.push(lt),Bt=Bt.concat(lt)}let Nt;if(g===0)Nt=ls.triangulateShape(q,U);else{const K=[],at=[];for(let $=0;$<g;$++){const gt=$/g,w=p*Math.cos(gt*Math.PI/2),Dt=m*Math.sin(gt*Math.PI/2)+y;for(let xt=0,Pt=q.length;xt<Pt;xt++){const ot=L(q[xt],nt[xt],Dt);Ot(ot.x,ot.y,-w),gt===0&&K.push(ot)}for(let xt=0,Pt=k;xt<Pt;xt++){const ot=U[xt];lt=et[xt];const C=[];for(let S=0,P=ot.length;S<P;S++){const W=L(ot[S],lt[S],Dt);Ot(W.x,W.y,-w),gt===0&&C.push(W)}gt===0&&at.push(C)}}Nt=ls.triangulateShape(K,at)}const $t=Nt.length,ae=m+y;for(let K=0;K<I;K++){const at=d?L(b[K],Bt[K],ae):b[K];x?(A.copy(T.normals[0]).multiplyScalar(at.x),R.copy(T.binormals[0]).multiplyScalar(at.y),D.copy(_[0]).add(A).add(R),Ot(D.x,D.y,D.z)):Ot(at.x,at.y,0)}for(let K=1;K<=u;K++)for(let at=0;at<I;at++){const $=d?L(b[at],Bt[at],ae):b[at];x?(A.copy(T.normals[K]).multiplyScalar($.x),R.copy(T.binormals[K]).multiplyScalar($.y),D.copy(_[K]).add(A).add(R),Ot(D.x,D.y,D.z)):Ot($.x,$.y,h/u*K)}for(let K=g-1;K>=0;K--){const at=K/g,$=p*Math.cos(at*Math.PI/2),gt=m*Math.sin(at*Math.PI/2)+y;for(let w=0,Dt=q.length;w<Dt;w++){const xt=L(q[w],nt[w],gt);Ot(xt.x,xt.y,h+$)}for(let w=0,Dt=U.length;w<Dt;w++){const xt=U[w];lt=et[w];for(let Pt=0,ot=xt.length;Pt<ot;Pt++){const C=L(xt[Pt],lt[Pt],gt);x?Ot(C.x,C.y+_[u-1].y,_[u-1].x+$):Ot(C.x,C.y,h+$)}}}Z(),tt();function Z(){const K=a.length/3;if(d){let at=0,$=I*at;for(let gt=0;gt<$t;gt++){const w=Nt[gt];bt(w[2]+$,w[1]+$,w[0]+$)}at=u+g*2,$=I*at;for(let gt=0;gt<$t;gt++){const w=Nt[gt];bt(w[0]+$,w[1]+$,w[2]+$)}}else{for(let at=0;at<$t;at++){const $=Nt[at];bt($[2],$[1],$[0])}for(let at=0;at<$t;at++){const $=Nt[at];bt($[0]+I*u,$[1]+I*u,$[2]+I*u)}}i.addGroup(K,a.length/3-K,0)}function tt(){const K=a.length/3;let at=0;yt(q,at),at+=q.length;for(let $=0,gt=U.length;$<gt;$++){const w=U[$];yt(w,at),at+=w.length}i.addGroup(K,a.length/3-K,1)}function yt(K,at){let $=K.length;for(;--$>=0;){const gt=$;let w=$-1;w<0&&(w=K.length-1);for(let Dt=0,xt=u+g*2;Dt<xt;Dt++){const Pt=I*Dt,ot=I*(Dt+1),C=at+gt+Pt,S=at+w+Pt,P=at+w+ot,W=at+gt+ot;ne(C,S,P,W)}}}function Ot(K,at,$){l.push(K),l.push(at),l.push($)}function bt(K,at,$){pe(K),pe(at),pe($);const gt=a.length/3,w=v.generateTopUV(i,a,gt-3,gt-2,gt-1);kt(w[0]),kt(w[1]),kt(w[2])}function ne(K,at,$,gt){pe(K),pe(at),pe(gt),pe(at),pe($),pe(gt);const w=a.length/3,Dt=v.generateSideWallUV(i,a,w-6,w-3,w-2,w-1);kt(Dt[0]),kt(Dt[1]),kt(Dt[3]),kt(Dt[1]),kt(Dt[2]),kt(Dt[3])}function pe(K){a.push(l[K*3+0]),a.push(l[K*3+1]),a.push(l[K*3+2])}function kt(K){s.push(K.x),s.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return L1(n,i,t)}static fromJSON(t,n){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=n[t.shapes[s]];i.push(o)}const a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new uu[a.type]().fromJSON(a)),new LS(i,t.options)}}const U1={generateTopUV:function(e,t,n,i,a){const s=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[a*3],u=t[a*3+1];return[new ct(s,r),new ct(o,l),new ct(c,u)]},generateSideWallUV:function(e,t,n,i,a,s){const r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[a*3],p=t[a*3+1],m=t[a*3+2],y=t[s*3],g=t[s*3+1],f=t[s*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new ct(r,1-l),new ct(c,1-h),new ct(d,1-m),new ct(y,1-f)]:[new ct(o,1-l),new ct(u,1-h),new ct(p,1-m),new ct(g,1-f)]}};function L1(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,a=e.length;i<a;i++){const s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Nu extends Ke{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,h=t/o,d=n/l,p=[],m=[],y=[],g=[];for(let f=0;f<u;f++){const v=f*d-r;for(let _=0;_<c;_++){const x=_*h-s;m.push(x,-v,0),y.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const _=v+c*f,x=v+c*(f+1),T=v+1+c*(f+1),R=v+1+c*f;p.push(_,x,R),p.push(x,T,R)}this.setIndex(p),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(y,3)),this.setAttribute("uv",new Ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nu(t.width,t.height,t.widthSegments,t.heightSegments)}}class NS extends Ke{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const u=[],h=new N,d=new N,p=[],m=[],y=[],g=[];for(let f=0;f<=i;f++){const v=[],_=f/i;let x=0;f===0&&r===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let T=0;T<=n;T++){const R=T/n;h.x=-t*Math.cos(a+R*s)*Math.sin(r+_*o),h.y=t*Math.cos(r+_*o),h.z=t*Math.sin(a+R*s)*Math.sin(r+_*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),g.push(R+x,1-_),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const _=u[f][v+1],x=u[f][v],T=u[f+1][v],R=u[f+1][v+1];(f!==0||r>0)&&p.push(_,x,R),(f!==i-1||l<Math.PI)&&p.push(x,T,R)}this.setIndex(p),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(y,3)),this.setAttribute("uv",new Ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new NS(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class OS extends Ke{constructor(t=new AS(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),n=64,i=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:a,closed:s};const r=t.computeFrenetFrames(n,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new N,l=new N,c=new ct;let u=new N;const h=[],d=[],p=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(p,2));function y(){for(let _=0;_<n;_++)g(_);g(s===!1?n:0),v(),f()}function g(_){u=t.getPointAt(_/n,u);const x=r.normals[_],T=r.binormals[_];for(let R=0;R<=a;R++){const A=R/a*Math.PI*2,D=Math.sin(A),M=-Math.cos(A);l.x=M*x.x+D*T.x,l.y=M*x.y+D*T.y,l.z=M*x.z+D*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function f(){for(let _=1;_<=n;_++)for(let x=1;x<=a;x++){const T=(a+1)*(_-1)+(x-1),R=(a+1)*_+(x-1),A=(a+1)*_+x,D=(a+1)*(_-1)+x;m.push(T,R,D),m.push(R,A,D)}}function v(){for(let _=0;_<=n;_++)for(let x=0;x<=a;x++)c.x=_/n,c.y=x/a,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new OS(new uu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class RC extends Ke{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const n=[],i=new Set,a=new N,s=new N;if(t.index!==null){const r=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,p=h.count;for(let m=d,y=d+p;m<y;m+=3)for(let g=0;g<3;g++){const f=o.getX(m+g),v=o.getX(m+(g+1)%3);a.fromBufferAttribute(r,f),s.fromBufferAttribute(r,v),bg(a,s,i)===!0&&(n.push(a.x,a.y,a.z),n.push(s.x,s.y,s.z))}}}else{const r=t.attributes.position;for(let o=0,l=r.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,h=3*o+(c+1)%3;a.fromBufferAttribute(r,u),s.fromBufferAttribute(r,h),bg(a,s,i)===!0&&(n.push(a.x,a.y,a.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ee(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function bg(e,t,n){const i=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(i)===!0||n.has(a)===!0?!1:(n.add(i),n.add(a),!0)}class CC extends En{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Vt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class N1 extends Ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class O1 extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=As,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wC extends O1{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class DC extends En{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Vt(16777215),this.specular=new Vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=As,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class UC extends En{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Vt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=As,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class LC extends En{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=As,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class NC extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=As,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class P1 extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z1 extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class OC extends En{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Vt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=As,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class PC extends xS{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const jf={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class I1{constructor(t,n,i){const a=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&a.onStart!==void 0&&a.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,a.onProgress!==void 0&&a.onProgress(u,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const B1=new I1;class lm{constructor(t){this.manager=t!==void 0?t:B1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}lm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ws=new WeakMap;class F1 extends lm{constructor(t){super(t)}load(t,n,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=jf.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(t),setTimeout(function(){n&&n(r),s.manager.itemEnd(t)},0);else{let h=Ws.get(r);h===void 0&&(h=[],Ws.set(r,h)),h.push({onLoad:n,onError:a})}return r}const o=Yo("img");function l(){u(),n&&n(this);const h=Ws.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Ws.delete(this),s.manager.itemEnd(t)}function c(h){u(),a&&a(h),jf.remove(`image:${t}`);const d=Ws.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onError&&m.onError(h)}Ws.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),jf.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class zC extends lm{constructor(t){super(t)}load(t,n,i,a){const s=new sn,r=new F1(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,a),s}}class Cs extends Ie{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class IC extends Cs{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const Jf=new Se,Eg=new N,Tg=new N;class cm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lu,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Eg.setFromMatrixPosition(t.matrixWorld),n.position.copy(Eg),Tg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Tg),n.updateMatrixWorld(),Jf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jf,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class H1 extends cm{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,i=Nr*2*t.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||n.far;(i!==n.fov||a!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=a,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class BC extends Cs{constructor(t,n,i=0,a=Math.PI/3,s=0,r=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=i,this.angle=a,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new H1}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}}class V1 extends cm{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0}}class FC extends Cs{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new V1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class um extends pS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class G1 extends cm{constructor(){super(new um(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class HC extends Cs{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new G1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class VC extends Cs{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class GC extends Cs{constructor(t,n,i=10,a=10){super(t,n),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=a}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const n=super.toJSON(t);return n.object.width=this.width,n.object.height=this.height,n}}class X1{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new N)}set(t){for(let n=0;n<9;n++)this.coefficients[n].copy(t[n]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,n){const i=t.x,a=t.y,s=t.z,r=this.coefficients;return n.copy(r[0]).multiplyScalar(.282095),n.addScaledVector(r[1],.488603*a),n.addScaledVector(r[2],.488603*s),n.addScaledVector(r[3],.488603*i),n.addScaledVector(r[4],1.092548*(i*a)),n.addScaledVector(r[5],1.092548*(a*s)),n.addScaledVector(r[6],.315392*(3*s*s-1)),n.addScaledVector(r[7],1.092548*(i*s)),n.addScaledVector(r[8],.546274*(i*i-a*a)),n}getIrradianceAt(t,n){const i=t.x,a=t.y,s=t.z,r=this.coefficients;return n.copy(r[0]).multiplyScalar(.886227),n.addScaledVector(r[1],2*.511664*a),n.addScaledVector(r[2],2*.511664*s),n.addScaledVector(r[3],2*.511664*i),n.addScaledVector(r[4],2*.429043*i*a),n.addScaledVector(r[5],2*.429043*a*s),n.addScaledVector(r[6],.743125*s*s-.247708),n.addScaledVector(r[7],2*.429043*i*s),n.addScaledVector(r[8],.429043*(i*i-a*a)),n}add(t){for(let n=0;n<9;n++)this.coefficients[n].add(t.coefficients[n]);return this}addScaledSH(t,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(t.coefficients[i],n);return this}scale(t){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(t);return this}lerp(t,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(t.coefficients[i],n);return this}equals(t){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(t.coefficients[n]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,n=0){const i=this.coefficients;for(let a=0;a<9;a++)i[a].fromArray(t,n+a*3);return this}toArray(t=[],n=0){const i=this.coefficients;for(let a=0;a<9;a++)i[a].toArray(t,n+a*3);return t}static getBasisAt(t,n){const i=t.x,a=t.y,s=t.z;n[0]=.282095,n[1]=.488603*a,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*a,n[5]=1.092548*a*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-a*a)}}class XC extends Cs{constructor(t=new X1,n=1){super(void 0,n),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const n=super.toJSON(t);return n.object.sh=this.sh.toArray(),n}}class kC extends Ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class k1 extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class WC{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class qC extends YE{constructor(t,n,i=1){super(t,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const n=super.clone(t);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(t){const n=super.toJSON(t);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}const Ag=new Se;class YC{constructor(t,n,i=0,a=1/0){this.ray=new Uu(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new sm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ie("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Ag.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ag),this}intersectObject(t,n=!0,i=[]){return jd(t,this,i,n),i.sort(Rg),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)jd(t[a],this,i,n);return i.sort(Rg),i}}function Rg(e,t){return e.distance-t.distance}function jd(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){const s=e.children;for(let r=0,o=s.length;r<o;r++)jd(s[r],t,n,!0)}}class ZC{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ht(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class PS{constructor(t,n,i,a){PS.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}}const Cg=new N,sc=new N,qs=new N,Ys=new N,Qf=new N,W1=new N,q1=new N;class jC{constructor(t=new N,n=new N){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){Cg.subVectors(t,this.start),sc.subVectors(this.end,this.start);const i=sc.dot(sc);let s=sc.dot(Cg)/i;return n&&(s=Ht(s,0,1)),s}closestPointToPoint(t,n,i){const a=this.closestPointToPointParameter(t,n);return this.delta(i).multiplyScalar(a).add(this.start)}distanceSqToLine3(t,n=W1,i=q1){const a=10000000000000001e-32;let s,r;const o=this.start,l=t.start,c=this.end,u=t.end;qs.subVectors(c,o),Ys.subVectors(u,l),Qf.subVectors(o,l);const h=qs.dot(qs),d=Ys.dot(Ys),p=Ys.dot(Qf);if(h<=a&&d<=a)return n.copy(o),i.copy(l),n.sub(i),n.dot(n);if(h<=a)s=0,r=p/d,r=Ht(r,0,1);else{const m=qs.dot(Qf);if(d<=a)r=0,s=Ht(-m/h,0,1);else{const y=qs.dot(Ys),g=h*d-y*y;g!==0?s=Ht((y*p-m*d)/g,0,1):s=0,r=(y*s+p)/d,r<0?(r=0,s=Ht(-m/h,0,1)):r>1&&(r=1,s=Ht((y-m)/h,0,1))}}return n.copy(o).add(qs.multiplyScalar(s)),i.copy(l).add(Ys.multiplyScalar(r)),n.sub(i),n.dot(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class JC{constructor(){this.type="ShapePath",this.color=new Vt,this.subPaths=[],this.currentPath=null}moveTo(t,n){return this.currentPath=new qd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,n),this}lineTo(t,n){return this.currentPath.lineTo(t,n),this}quadraticCurveTo(t,n,i,a){return this.currentPath.quadraticCurveTo(t,n,i,a),this}bezierCurveTo(t,n,i,a,s,r){return this.currentPath.bezierCurveTo(t,n,i,a,s,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function n(f){const v=[];for(let _=0,x=f.length;_<x;_++){const T=f[_],R=new Cc;R.curves=T.curves,v.push(R)}return v}function i(f,v){const _=v.length;let x=!1;for(let T=_-1,R=0;R<_;T=R++){let A=v[T],D=v[R],M=D.x-A.x,b=D.y-A.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(A=v[R],M=-M,D=v[T],b=-b),f.y<A.y||f.y>D.y)continue;if(f.y===A.y){if(f.x===A.x)return!0}else{const U=b*(f.x-A.x)-M*(f.y-A.y);if(U===0)return!0;if(U<0)continue;x=!x}}else{if(f.y!==A.y)continue;if(D.x<=f.x&&f.x<=A.x||A.x<=f.x&&f.x<=D.x)return!0}}return x}const a=ls.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,o,l;const c=[];if(s.length===1)return o=s[0],l=new Cc,l.curves=o.curves,c.push(l),c;let u=!a(s[0].getPoints());u=t?!u:u;const h=[],d=[];let p=[],m=0,y;d[m]=void 0,p[m]=[];for(let f=0,v=s.length;f<v;f++)o=s[f],y=o.getPoints(),r=a(y),r=t?!r:r,r?(!u&&d[m]&&m++,d[m]={s:new Cc,p:y},d[m].s.curves=o.curves,u&&m++,p[m]=[]):p[m].push({h:o,p:y[0]});if(!d[0])return n(s);if(d.length>1){let f=!1,v=0;for(let _=0,x=d.length;_<x;_++)h[_]=[];for(let _=0,x=d.length;_<x;_++){const T=p[_];for(let R=0;R<T.length;R++){const A=T[R];let D=!0;for(let M=0;M<d.length;M++)i(A.p,d[M].p)&&(_!==M&&v++,D?(D=!1,h[M].push(A)):f=!0);D&&h[_].push(A)}}v>0&&f===!1&&(p=h)}let g;for(let f=0,v=d.length;f<v;f++){l=d[f].s,c.push(l),g=p[f];for(let _=0,x=g.length;_<x;_++)l.holes.push(g[_].h)}return c}}class QC extends Rs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){It("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function wg(e,t,n,i){const a=Y1(i);switch(n){case aS:return e*t;case rS:return e*t/a.components*a.byteLength;case Kp:return e*t/a.components*a.byteLength;case Ur:return e*t*2/a.components*a.byteLength;case $p:return e*t*2/a.components*a.byteLength;case sS:return e*t*3/a.components*a.byteLength;case ci:return e*t*4/a.components*a.byteLength;case tm:return e*t*4/a.components*a.byteLength;case Ec:case Tc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ac:case Rc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dd:case md:return Math.max(e,16)*Math.max(t,8)/4;case hd:case pd:return Math.max(e,8)*Math.max(t,8)/2;case gd:case _d:case xd:case Sd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vd:case yd:case Md:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Td:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case wd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Od:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case zd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Id:case Bd:case Fd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Hd:case Vd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Gd:case Xd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Y1(e){switch(e){case On:case tS:return{byteLength:1,components:1};case Wo:case eS:case sa:return{byteLength:2,components:1};case Jp:case Qp:return{byteLength:2,components:4};case Ti:case jp:case Si:return{byteLength:4,components:1};case nS:case iS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Z1(e){const t=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(e.bindBuffer(c,o),h.length===0)e.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],y=h[p];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const y=h[p];e.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var j1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ST=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TT="gl_FragColor = linearToOutputTexel( gl_FragColor );",AT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_A=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,UA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,e3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,n3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,a3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,A3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:j1,alphahash_pars_fragment:J1,alphamap_fragment:Q1,alphamap_pars_fragment:K1,alphatest_fragment:$1,alphatest_pars_fragment:tT,aomap_fragment:eT,aomap_pars_fragment:nT,batching_pars_vertex:iT,batching_vertex:aT,begin_vertex:sT,beginnormal_vertex:rT,bsdfs:oT,iridescence_fragment:lT,bumpmap_pars_fragment:cT,clipping_planes_fragment:uT,clipping_planes_pars_fragment:fT,clipping_planes_pars_vertex:hT,clipping_planes_vertex:dT,color_fragment:pT,color_pars_fragment:mT,color_pars_vertex:gT,color_vertex:_T,common:vT,cube_uv_reflection_fragment:xT,defaultnormal_vertex:ST,displacementmap_pars_vertex:yT,displacementmap_vertex:MT,emissivemap_fragment:bT,emissivemap_pars_fragment:ET,colorspace_fragment:TT,colorspace_pars_fragment:AT,envmap_fragment:RT,envmap_common_pars_fragment:CT,envmap_pars_fragment:wT,envmap_pars_vertex:DT,envmap_physical_pars_fragment:VT,envmap_vertex:UT,fog_vertex:LT,fog_pars_vertex:NT,fog_fragment:OT,fog_pars_fragment:PT,gradientmap_pars_fragment:zT,lightmap_pars_fragment:IT,lights_lambert_fragment:BT,lights_lambert_pars_fragment:FT,lights_pars_begin:HT,lights_toon_fragment:GT,lights_toon_pars_fragment:XT,lights_phong_fragment:kT,lights_phong_pars_fragment:WT,lights_physical_fragment:qT,lights_physical_pars_fragment:YT,lights_fragment_begin:ZT,lights_fragment_maps:jT,lights_fragment_end:JT,logdepthbuf_fragment:QT,logdepthbuf_pars_fragment:KT,logdepthbuf_pars_vertex:$T,logdepthbuf_vertex:tA,map_fragment:eA,map_pars_fragment:nA,map_particle_fragment:iA,map_particle_pars_fragment:aA,metalnessmap_fragment:sA,metalnessmap_pars_fragment:rA,morphinstance_vertex:oA,morphcolor_vertex:lA,morphnormal_vertex:cA,morphtarget_pars_vertex:uA,morphtarget_vertex:fA,normal_fragment_begin:hA,normal_fragment_maps:dA,normal_pars_fragment:pA,normal_pars_vertex:mA,normal_vertex:gA,normalmap_pars_fragment:_A,clearcoat_normal_fragment_begin:vA,clearcoat_normal_fragment_maps:xA,clearcoat_pars_fragment:SA,iridescence_pars_fragment:yA,opaque_fragment:MA,packing:bA,premultiplied_alpha_fragment:EA,project_vertex:TA,dithering_fragment:AA,dithering_pars_fragment:RA,roughnessmap_fragment:CA,roughnessmap_pars_fragment:wA,shadowmap_pars_fragment:DA,shadowmap_pars_vertex:UA,shadowmap_vertex:LA,shadowmask_pars_fragment:NA,skinbase_vertex:OA,skinning_pars_vertex:PA,skinning_vertex:zA,skinnormal_vertex:IA,specularmap_fragment:BA,specularmap_pars_fragment:FA,tonemapping_fragment:HA,tonemapping_pars_fragment:VA,transmission_fragment:GA,transmission_pars_fragment:XA,uv_pars_fragment:kA,uv_pars_vertex:WA,uv_vertex:qA,worldpos_vertex:YA,background_vert:ZA,background_frag:jA,backgroundCube_vert:JA,backgroundCube_frag:QA,cube_vert:KA,cube_frag:$A,depth_vert:t3,depth_frag:e3,distance_vert:n3,distance_frag:i3,equirect_vert:a3,equirect_frag:s3,linedashed_vert:r3,linedashed_frag:o3,meshbasic_vert:l3,meshbasic_frag:c3,meshlambert_vert:u3,meshlambert_frag:f3,meshmatcap_vert:h3,meshmatcap_frag:d3,meshnormal_vert:p3,meshnormal_frag:m3,meshphong_vert:g3,meshphong_frag:_3,meshphysical_vert:v3,meshphysical_frag:x3,meshtoon_vert:S3,meshtoon_frag:y3,points_vert:M3,points_frag:b3,shadow_vert:E3,shadow_frag:T3,sprite_vert:A3,sprite_frag:R3},mt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},gi={basic:{uniforms:fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:fn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:fn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:fn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:fn([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:fn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:fn([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:fn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:fn([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:fn([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:fn([mt.lights,mt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};gi.physical={uniforms:fn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const rc={r:0,b:0,g:0},Qa=new ni,C3=new Se;function w3(e,t,n,i,a,s,r){const o=new Vt(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:t).get(x)),x}function y(_){let x=!1;const T=m(_);T===null?f(o,l):T&&T.isColor&&(f(T,1),x=!0);const R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(_,x){const T=m(x);T&&(T.isCubeTexture||T.mapping===Du)?(u===void 0&&(u=new oa(new pl(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Or(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Qa.copy(x.backgroundRotation),Qa.x*=-1,Qa.y*=-1,Qa.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Qa.y*=-1,Qa.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(C3.makeRotationFromEuler(Qa)),u.material.toneMapped=se.getTransfer(T.colorSpace)!==fe,(h!==T||d!==T.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=e.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new oa(new Nu(2,2),new Ai({name:"BackgroundMaterial",uniforms:Or(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=se.getTransfer(T.colorSpace)!==fe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,x){_.getRGB(rc,dS(e)),i.buffers.color.setClear(rc.r,rc.g,rc.b,x,r)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:y,addToRenderList:g,dispose:v}}function D3(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=d(null);let s=a,r=!1;function o(b,U,F,H,k){let q=!1;const L=h(H,F,U);s!==L&&(s=L,c(s.object)),q=p(b,H,F,k),q&&m(b,H,F,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,x(b,U,F,H),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function u(b){return e.deleteVertexArray(b)}function h(b,U,F){const H=F.wireframe===!0;let k=i[b.id];k===void 0&&(k={},i[b.id]=k);let q=k[U.id];q===void 0&&(q={},k[U.id]=q);let L=q[H];return L===void 0&&(L=d(l()),q[H]=L),L}function d(b){const U=[],F=[],H=[];for(let k=0;k<n;k++)U[k]=0,F[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:H,object:b,attributes:{},index:null}}function p(b,U,F,H){const k=s.attributes,q=U.attributes;let L=0;const I=F.getAttributes();for(const G in I)if(I[G].location>=0){const et=k[G];let lt=q[G];if(lt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),et===void 0||et.attribute!==lt||lt&&et.data!==lt.data)return!0;L++}return s.attributesNum!==L||s.index!==H}function m(b,U,F,H){const k={},q=U.attributes;let L=0;const I=F.getAttributes();for(const G in I)if(I[G].location>=0){let et=q[G];et===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));const lt={};lt.attribute=et,et&&et.data&&(lt.data=et.data),k[G]=lt,L++}s.attributes=k,s.attributesNum=L,s.index=H}function y(){const b=s.newAttributes;for(let U=0,F=b.length;U<F;U++)b[U]=0}function g(b){f(b,0)}function f(b,U){const F=s.newAttributes,H=s.enabledAttributes,k=s.attributeDivisors;F[b]=1,H[b]===0&&(e.enableVertexAttribArray(b),H[b]=1),k[b]!==U&&(e.vertexAttribDivisor(b,U),k[b]=U)}function v(){const b=s.newAttributes,U=s.enabledAttributes;for(let F=0,H=U.length;F<H;F++)U[F]!==b[F]&&(e.disableVertexAttribArray(F),U[F]=0)}function _(b,U,F,H,k,q,L){L===!0?e.vertexAttribIPointer(b,U,F,k,q):e.vertexAttribPointer(b,U,F,H,k,q)}function x(b,U,F,H){y();const k=H.attributes,q=F.getAttributes(),L=U.defaultAttributeValues;for(const I in q){const G=q[I];if(G.location>=0){let nt=k[I];if(nt===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){const et=nt.normalized,lt=nt.itemSize,Bt=t.get(nt);if(Bt===void 0)continue;const Nt=Bt.buffer,$t=Bt.type,ae=Bt.bytesPerElement,Z=$t===e.INT||$t===e.UNSIGNED_INT||nt.gpuType===jp;if(nt.isInterleavedBufferAttribute){const tt=nt.data,yt=tt.stride,Ot=nt.offset;if(tt.isInstancedInterleavedBuffer){for(let bt=0;bt<G.locationSize;bt++)f(G.location+bt,tt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let bt=0;bt<G.locationSize;bt++)g(G.location+bt);e.bindBuffer(e.ARRAY_BUFFER,Nt);for(let bt=0;bt<G.locationSize;bt++)_(G.location+bt,lt/G.locationSize,$t,et,yt*ae,(Ot+lt/G.locationSize*bt)*ae,Z)}else{if(nt.isInstancedBufferAttribute){for(let tt=0;tt<G.locationSize;tt++)f(G.location+tt,nt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let tt=0;tt<G.locationSize;tt++)g(G.location+tt);e.bindBuffer(e.ARRAY_BUFFER,Nt);for(let tt=0;tt<G.locationSize;tt++)_(G.location+tt,lt/G.locationSize,$t,et,lt*ae,lt/G.locationSize*tt*ae,Z)}}else if(L!==void 0){const et=L[I];if(et!==void 0)switch(et.length){case 2:e.vertexAttrib2fv(G.location,et);break;case 3:e.vertexAttrib3fv(G.location,et);break;case 4:e.vertexAttrib4fv(G.location,et);break;default:e.vertexAttrib1fv(G.location,et)}}}}v()}function T(){D();for(const b in i){const U=i[b];for(const F in U){const H=U[F];for(const k in H)u(H[k].object),delete H[k];delete U[F]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;const U=i[b.id];for(const F in U){const H=U[F];for(const k in H)u(H[k].object),delete H[k];delete U[F]}delete i[b.id]}function A(b){for(const U in i){const F=i[U];if(F[b.id]===void 0)continue;const H=F[b.id];for(const k in H)u(H[k].object),delete H[k];delete F[b.id]}}function D(){M(),r=!0,s!==a&&(s=a,c(s.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function U3(e,t,n){let i;function a(c){i=c}function s(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,h){h!==0&&(e.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];n.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)r(c[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let m=0;for(let y=0;y<h;y++)m+=u[y]*d[y];n.update(m,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function L3(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==ci&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==On&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Si&&!D)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(It("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,maxSamples:T,samples:R}}function N3(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new is,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,f=e.get(h);if(!a||m===null||m.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,_=v*4;let x=f.clippingState||null;l.value=x,x=u(m,d,_,p);for(let T=0;T!==_;++T)x[T]=n[T];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,m){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const f=p+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,x=p;_!==y;++_,x+=4)r.copy(h[_]).applyMatrix4(v,o),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function O3(e){let t=new WeakMap;function n(r,o){return o===ld?r.mapping=xs:o===cd&&(r.mapping=Dr),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===ld||o===cd)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new gS(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Ra=4,Dg=[.125,.215,.35,.446,.526,.582],ss=20,P3=256,io=new um,Ug=new Vt;let Kf=null,$f=0,th=0,eh=!1;const z3=new N;class Lg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=z3}=s;Kf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kf,$f,th),this._renderer.xr.enabled=eh,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===xs||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kf=this._renderer.getRenderTarget(),$f=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:sa,format:ci,colorSpace:Lr,depthBuffer:!1},a=Ng(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I3(s)),this._blurMaterial=F3(s,t,n),this._ggxMaterial=B3(s,t,n)}return a}_compileMaterial(t){const n=new oa(new Ke,t);this._renderer.compile(n,io)}_sceneToCubeUV(t,n,i,a,s){const l=new Ln(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Ug),h.toneMapping=Mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oa(new pl,new uS({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let f=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,f=!0):(g.color.copy(Ug),f=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const T=this._cubeSize;Zs(a,x*T,_>2?T:0,T,T),h.setRenderTarget(a),f&&h.render(y,l),h.render(t,l)}h.toneMapping=p,h.autoClear=d,t.background=v}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===xs||t.mapping===Dr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Og());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Zs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,io)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,p=h*d,{_lodMax:m}=this,y=this._sizeLods[i],g=3*y*(i>m-Ra?i-m+Ra:0),f=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=m-n,Zs(s,g,f,3*y,2*y),a.setRenderTarget(s),a.render(o,io),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Zs(t,g,f,3*y,2*y),a.setRenderTarget(t),a.render(o,io)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ie("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[a];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ss-1),y=s/m,g=isFinite(s)?1+Math.floor(u*y):ss;g>ss&&It(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ss}`);const f=[];let v=0;for(let A=0;A<ss;++A){const D=A/y,M=Math.exp(-D*D/2);f.push(M),A===0?v+=M:A<g&&(v+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-i;const x=this._sizeLods[a],T=3*x*(a>_-Ra?a-_+Ra:0),R=4*(this._cubeSize-x);Zs(n,T,R,3*x,2*x),l.setRenderTarget(n),l.render(h,io)}}function I3(e){const t=[],n=[],i=[];let a=e;const s=e-Ra+1+Dg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Ra?l=Dg[r-e+Ra-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,y=3,g=2,f=1,v=new Float32Array(y*m*p),_=new Float32Array(g*m*p),x=new Float32Array(f*m*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,D=R>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];v.set(M,y*m*R),_.set(d,g*m*R);const b=[R,R,R,R,R,R];x.set(b,f*m*R)}const T=new Ke;T.setAttribute("position",new Hn(v,y)),T.setAttribute("uv",new Hn(_,g)),T.setAttribute("faceIndex",new Hn(x,f)),i.push(new oa(T,null)),a>Ra&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Ng(e,t,n){const i=new Ei(e,t,n);return i.texture.mapping=Du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function B3(e,t,n){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function F3(e,t,n){const i=new Float32Array(ss),a=new N(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Og(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Pg(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ld||l===cd,u=l===xs||l===Dr;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Lg(e)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&a(p)?(n===null&&(n=new Lg(e)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function V3(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Zo("WebGLRenderer: "+i+" extension not supported."),a}}}function G3(e,t,n,i){const a={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete a[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",r),a[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)t.update(d[p],e.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,m=h.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,x=v.length;_<x;_+=3){const T=v[_+0],R=v[_+1],A=v[_+2];d.push(T,R,R,A,A,T)}}else if(m!==void 0){const v=m.array;y=m.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const T=_+0,R=_+1,A=_+2;d.push(T,R,R,A,A,T)}}else return;const g=new(oS(d)?hS:fS)(d,1);g.version=y;const f=s.get(h);f&&t.remove(f),s.set(h,g)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function X3(e,t,n){let i;function a(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,p){e.drawElements(i,p,s,d*r),n.update(p,i,1)}function c(d,p,m){m!==0&&(e.drawElementsInstanced(i,p,s,d*r,m),n.update(p,i,m))}function u(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];n.update(g,i,1)}function h(d,p,m,y){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/r,p[f],y[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,m);let f=0;for(let v=0;v<m;v++)f+=p[v]*y[v];n.update(f,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function k3(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:ie("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function W3(e,t,n){const i=new WeakMap,a=new Oe;function s(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),m===!0&&(_=2),y===!0&&(_=3);let x=o.attributes.position.count*_,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const R=new Float32Array(x*T*4*h),A=new lS(R,x,T,h);A.type=Si,A.needsUpdate=!0;const D=_*4;for(let b=0;b<h;b++){const U=g[b],F=f[b],H=v[b],k=x*T*4*b;for(let q=0;q<U.count;q++){const L=q*D;p===!0&&(a.fromBufferAttribute(U,q),R[k+L+0]=a.x,R[k+L+1]=a.y,R[k+L+2]=a.z,R[k+L+3]=0),m===!0&&(a.fromBufferAttribute(F,q),R[k+L+4]=a.x,R[k+L+5]=a.y,R[k+L+6]=a.z,R[k+L+7]=0),y===!0&&(a.fromBufferAttribute(H,q),R[k+L+8]=a.x,R[k+L+9]=a.y,R[k+L+10]=a.z,R[k+L+11]=H.itemSize===4?a.w:1)}}d={count:h,texture:A,size:new ct(x,T)},i.set(o,d),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function q3(e,t,n,i){let a=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(a.get(h)!==c&&(t.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return h}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}const Y3={[qx]:"LINEAR_TONE_MAPPING",[Yx]:"REINHARD_TONE_MAPPING",[Zx]:"CINEON_TONE_MAPPING",[jx]:"ACES_FILMIC_TONE_MAPPING",[Qx]:"AGX_TONE_MAPPING",[Kx]:"NEUTRAL_TONE_MAPPING",[Jx]:"CUSTOM_TONE_MAPPING"};function Z3(e,t,n,i,a){const s=new Ei(t,n,{type:e,depthBuffer:i,stencilBuffer:a}),r=new Ei(t,n,{type:sa,depthBuffer:!1,stencilBuffer:!1}),o=new Ke;o.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ee([0,2,0,0,2,0],2));const l=new N1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new oa(o,l),u=new um(-1,1,1,-1,0,1);let h=null,d=null,p=!1,m,y=null,g=[],f=!1;this.setSize=function(v,_){s.setSize(v,_),r.setSize(v,_);for(let x=0;x<g.length;x++){const T=g[x];T.setSize&&T.setSize(v,_)}},this.setEffects=function(v){g=v,f=g.length>0&&g[0].isRenderPass===!0;const _=s.width,x=s.height;for(let T=0;T<g.length;T++){const R=g[T];R.setSize&&R.setSize(_,x)}},this.begin=function(v,_){if(p||v.toneMapping===Mi&&g.length===0)return!1;if(y=_,_!==null){const x=_.width,T=_.height;(s.width!==x||s.height!==T)&&this.setSize(x,T)}return f===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=Mi,!0},this.hasRenderPass=function(){return f},this.end=function(v,_){v.toneMapping=m,p=!0;let x=s,T=r;for(let R=0;R<g.length;R++){const A=g[R];if(A.enabled!==!1&&(A.render(v,T,x,_),A.needsSwap!==!1)){const D=x;x=T,T=D}}if(h!==v.outputColorSpace||d!==v.toneMapping){h=v.outputColorSpace,d=v.toneMapping,l.defines={},se.getTransfer(h)===fe&&(l.defines.SRGB_TRANSFER="");const R=Y3[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(y),v.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const IS=new sn,Jd=new jo(1,1),BS=new lS,FS=new CE,HS=new mS,zg=[],Ig=[],Bg=new Float32Array(16),Fg=new Float32Array(9),Hg=new Float32Array(4);function Xr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=zg[a];if(s===void 0&&(s=new Float32Array(a),zg[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function qe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ye(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Pu(e,t){let n=Ig[t];n===void 0&&(n=new Int32Array(t),Ig[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function j3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function J3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2fv(this.addr,t),Ye(n,t)}}function Q3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qe(n,t))return;e.uniform3fv(this.addr,t),Ye(n,t)}}function K3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4fv(this.addr,t),Ye(n,t)}}function $3(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;Hg.set(i),e.uniformMatrix2fv(this.addr,!1,Hg),Ye(n,i)}}function tR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;Fg.set(i),e.uniformMatrix3fv(this.addr,!1,Fg),Ye(n,i)}}function eR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ye(n,t)}else{if(qe(n,i))return;Bg.set(i),e.uniformMatrix4fv(this.addr,!1,Bg),Ye(n,i)}}function nR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function iR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2iv(this.addr,t),Ye(n,t)}}function aR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qe(n,t))return;e.uniform3iv(this.addr,t),Ye(n,t)}}function sR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4iv(this.addr,t),Ye(n,t)}}function rR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function oR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2uiv(this.addr,t),Ye(n,t)}}function lR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qe(n,t))return;e.uniform3uiv(this.addr,t),Ye(n,t)}}function cR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4uiv(this.addr,t),Ye(n,t)}}function uR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Jd.compareFunction=n.isReversedDepthBuffer()?nm:em,s=Jd):s=IS,n.setTexture2D(t||s,a)}function fR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||FS,a)}function hR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||HS,a)}function dR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||BS,a)}function pR(e){switch(e){case 5126:return j3;case 35664:return J3;case 35665:return Q3;case 35666:return K3;case 35674:return $3;case 35675:return tR;case 35676:return eR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return aR;case 35669:case 35673:return sR;case 5125:return rR;case 36294:return oR;case 36295:return lR;case 36296:return cR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return dR}}function mR(e,t){e.uniform1fv(this.addr,t)}function gR(e,t){const n=Xr(t,this.size,2);e.uniform2fv(this.addr,n)}function _R(e,t){const n=Xr(t,this.size,3);e.uniform3fv(this.addr,n)}function vR(e,t){const n=Xr(t,this.size,4);e.uniform4fv(this.addr,n)}function xR(e,t){const n=Xr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function SR(e,t){const n=Xr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function yR(e,t){const n=Xr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function MR(e,t){e.uniform1iv(this.addr,t)}function bR(e,t){e.uniform2iv(this.addr,t)}function ER(e,t){e.uniform3iv(this.addr,t)}function TR(e,t){e.uniform4iv(this.addr,t)}function AR(e,t){e.uniform1uiv(this.addr,t)}function RR(e,t){e.uniform2uiv(this.addr,t)}function CR(e,t){e.uniform3uiv(this.addr,t)}function wR(e,t){e.uniform4uiv(this.addr,t)}function DR(e,t,n){const i=this.cache,a=t.length,s=Pu(n,a);qe(i,s)||(e.uniform1iv(this.addr,s),Ye(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Jd:r=IS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function UR(e,t,n){const i=this.cache,a=t.length,s=Pu(n,a);qe(i,s)||(e.uniform1iv(this.addr,s),Ye(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||FS,s[r])}function LR(e,t,n){const i=this.cache,a=t.length,s=Pu(n,a);qe(i,s)||(e.uniform1iv(this.addr,s),Ye(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||HS,s[r])}function NR(e,t,n){const i=this.cache,a=t.length,s=Pu(n,a);qe(i,s)||(e.uniform1iv(this.addr,s),Ye(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||BS,s[r])}function OR(e){switch(e){case 5126:return mR;case 35664:return gR;case 35665:return _R;case 35666:return vR;case 35674:return xR;case 35675:return SR;case 35676:return yR;case 5124:case 35670:return MR;case 35667:case 35671:return bR;case 35668:case 35672:return ER;case 35669:case 35673:return TR;case 5125:return AR;case 36294:return RR;case 36295:return CR;case 36296:return wR;case 35678:case 36198:case 36298:case 36306:case 35682:return DR;case 35679:case 36299:case 36307:return UR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return NR}}class PR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=pR(n.type)}}class zR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OR(n.type)}}class IR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function Vg(e,t){e.seq.push(t),e.map[t.id]=t}function BR(e,t,n){const i=e.name,a=i.length;for(nh.lastIndex=0;;){const s=nh.exec(i),r=nh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){Vg(n,c===void 0?new PR(o,e,t):new zR(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new IR(o),Vg(n,h)),n=h}}}class wc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);BR(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function Gg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const FR=37297;let HR=0;function VR(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const Xg=new Yt;function GR(e){se._getMatrix(Xg,se.workingColorSpace,e);const t=`mat3( ${Xg.elements.map(n=>n.toFixed(4))} )`;switch(se.getTransfer(e)){case su:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function kg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+VR(e.getShaderSource(t),o)}else return s}function XR(e,t){const n=GR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const kR={[qx]:"Linear",[Yx]:"Reinhard",[Zx]:"Cineon",[jx]:"ACESFilmic",[Qx]:"AgX",[Kx]:"Neutral",[Jx]:"Custom"};function WR(e,t){const n=kR[t];return n===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const oc=new N;function qR(){se.getLuminanceCoefficients(oc);const e=oc.x.toFixed(4),t=oc.y.toFixed(4),n=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function ZR(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function jR(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function ho(e){return e!==""}function Wg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const JR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(e){return e.replace(JR,KR)}const QR=new Map;function KR(e,t){let n=Zt[t];if(n===void 0){const i=QR.get(t);if(i!==void 0)n=Zt[i],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Qd(n)}const $R=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(e){return e.replace($R,t2)}function t2(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Zg(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const e2={[bc]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function n2(e){return e2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const i2={[xs]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE",[Du]:"ENVMAP_TYPE_CUBE_UV"};function a2(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":i2[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const s2={[Dr]:"ENVMAP_MODE_REFRACTION"};function r2(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":s2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const o2={[wu]:"ENVMAP_BLENDING_MULTIPLY",[Zb]:"ENVMAP_BLENDING_MIX",[jb]:"ENVMAP_BLENDING_ADD"};function l2(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":o2[e.combine]||"ENVMAP_BLENDING_NONE"}function c2(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function u2(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=n2(n),c=a2(n),u=r2(n),h=l2(n),d=c2(n),p=YR(n),m=ZR(s),y=a.createProgram();let g,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ho).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ho).join(`
`),f.length>0&&(f+=`
`)):(g=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),f=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?Zt.tonemapping_pars_fragment:"",n.toneMapping!==Mi?WR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,XR("linearToOutputTexel",n.outputColorSpace),qR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ho).join(`
`)),r=Qd(r),r=Wg(r,n),r=qg(r,n),o=Qd(o),o=Wg(o,n),o=qg(o,n),r=Yg(r),o=Yg(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=v+g+r,x=v+f+o,T=Gg(a,a.VERTEX_SHADER,_),R=Gg(a,a.FRAGMENT_SHADER,x);a.attachShader(y,T),a.attachShader(y,R),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function A(U){if(e.debug.checkShaderErrors){const F=a.getProgramInfoLog(y)||"",H=a.getShaderInfoLog(T)||"",k=a.getShaderInfoLog(R)||"",q=F.trim(),L=H.trim(),I=k.trim();let G=!0,nt=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,T,R);else{const et=kg(a,T,"vertex"),lt=kg(a,R,"fragment");ie("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+et+`
`+lt)}else q!==""?It("WebGLProgram: Program Info Log:",q):(L===""||I==="")&&(nt=!1);nt&&(U.diagnostics={runnable:G,programLog:q,vertexShader:{log:L,prefix:g},fragmentShader:{log:I,prefix:f}})}a.deleteShader(T),a.deleteShader(R),D=new wc(a,y),M=jR(a,y)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(y,FR)),b},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HR++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=R,this}let f2=0;class h2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new d2(t),n.set(t,i)),i}}class d2{constructor(t){this.id=f2++,this.code=t,this.usedTimes=0}}function p2(e,t,n,i,a,s,r){const o=new sm,l=new h2,c=new Set,u=[],h=new Map,d=a.logarithmicDepthBuffer;let p=a.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,b,U,F,H){const k=F.fog,q=H.geometry,L=M.isMeshStandardMaterial?F.environment:null,I=(M.isMeshStandardMaterial?n:t).get(M.envMap||L),G=I&&I.mapping===Du?I.image.height:null,nt=m[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&It("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=et!==void 0?et.length:0;let Bt=0;q.morphAttributes.position!==void 0&&(Bt=1),q.morphAttributes.normal!==void 0&&(Bt=2),q.morphAttributes.color!==void 0&&(Bt=3);let Nt,$t,ae,Z;if(nt){const ce=gi[nt];Nt=ce.vertexShader,$t=ce.fragmentShader}else Nt=M.vertexShader,$t=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);const tt=e.getRenderTarget(),yt=e.state.buffers.depth.getReversed(),Ot=H.isInstancedMesh===!0,bt=H.isBatchedMesh===!0,ne=!!M.map,pe=!!M.matcap,kt=!!I,K=!!M.aoMap,at=!!M.lightMap,$=!!M.bumpMap,gt=!!M.normalMap,w=!!M.displacementMap,Dt=!!M.emissiveMap,xt=!!M.metalnessMap,Pt=!!M.roughnessMap,ot=M.anisotropy>0,C=M.clearcoat>0,S=M.dispersion>0,P=M.iridescence>0,W=M.sheen>0,J=M.transmission>0,Y=ot&&!!M.anisotropyMap,Rt=C&&!!M.clearcoatMap,ut=C&&!!M.clearcoatNormalMap,Tt=C&&!!M.clearcoatRoughnessMap,zt=P&&!!M.iridescenceMap,it=P&&!!M.iridescenceThicknessMap,dt=W&&!!M.sheenColorMap,At=W&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,ht=!!M.specularColorMap,jt=!!M.specularIntensityMap,O=J&&!!M.transmissionMap,vt=J&&!!M.thicknessMap,rt=!!M.gradientMap,St=!!M.alphaMap,st=M.alphaTest>0,Q=!!M.alphaHash,ft=!!M.extensions;let Xt=Mi;M.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Xt=e.toneMapping);const ye={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:Nt,fragmentShader:$t,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:bt,batchingColor:bt&&H._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&H.instanceColor!==null,instancingMorph:Ot&&H.morphTexture!==null,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Lr,alphaToCoverage:!!M.alphaToCoverage,map:ne,matcap:pe,envMap:kt,envMapMode:kt&&I.mapping,envMapCubeUVHeight:G,aoMap:K,lightMap:at,bumpMap:$,normalMap:gt,displacementMap:w,emissiveMap:Dt,normalMapObjectSpace:gt&&M.normalMapType===Kb,normalMapTangentSpace:gt&&M.normalMapType===As,metalnessMap:xt,roughnessMap:Pt,anisotropy:ot,anisotropyMap:Y,clearcoat:C,clearcoatMap:Rt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Tt,dispersion:S,iridescence:P,iridescenceMap:zt,iridescenceThicknessMap:it,sheen:W,sheenColorMap:dt,sheenRoughnessMap:At,specularMap:Ct,specularColorMap:ht,specularIntensityMap:jt,transmission:J,transmissionMap:O,thicknessMap:vt,gradientMap:rt,opaque:M.transparent===!1&&M.blending===gr&&M.alphaToCoverage===!1,alphaMap:St,alphaTest:st,alphaHash:Q,combine:M.combine,mapUv:ne&&y(M.map.channel),aoMapUv:K&&y(M.aoMap.channel),lightMapUv:at&&y(M.lightMap.channel),bumpMapUv:$&&y(M.bumpMap.channel),normalMapUv:gt&&y(M.normalMap.channel),displacementMapUv:w&&y(M.displacementMap.channel),emissiveMapUv:Dt&&y(M.emissiveMap.channel),metalnessMapUv:xt&&y(M.metalnessMap.channel),roughnessMapUv:Pt&&y(M.roughnessMap.channel),anisotropyMapUv:Y&&y(M.anisotropyMap.channel),clearcoatMapUv:Rt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ut&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:At&&y(M.sheenRoughnessMap.channel),specularMapUv:Ct&&y(M.specularMap.channel),specularColorMapUv:ht&&y(M.specularColorMap.channel),specularIntensityMapUv:jt&&y(M.specularIntensityMap.channel),transmissionMapUv:O&&y(M.transmissionMap.channel),thicknessMapUv:vt&&y(M.thicknessMap.channel),alphaMapUv:St&&y(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(gt||ot),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(ne||St),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Bt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Xt,decodeVideoTexture:ne&&M.map.isVideoTexture===!0&&se.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:Dt&&M.emissiveMap.isVideoTexture===!0&&se.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xi,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&M.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)b.push(U),b.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(v(b,M),_(b,M),b.push(e.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const b=m[M.type];let U;if(b){const F=gi[b];U=GE.clone(F.uniforms)}else U=M.uniforms;return U}function T(M,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new u2(e,b,M,s),u.push(U),h.set(b,U)),U}function R(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),h.delete(M.cacheKey),M.destroy()}}function A(M){l.remove(M)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:x,acquireProgram:T,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:D}}function m2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function g2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function jg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Jg(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(h,d,p,m,y,g){let f=e[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:m,renderOrder:h.renderOrder,z:y,group:g},e[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=y,f.group=g),t++,f}function o(h,d,p,m,y,g){const f=r(h,d,p,m,y,g);p.transmission>0?i.push(f):p.transparent===!0?a.push(f):n.push(f)}function l(h,d,p,m,y,g){const f=r(h,d,p,m,y,g);p.transmission>0?i.unshift(f):p.transparent===!0?a.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||g2),i.length>1&&i.sort(d||jg),a.length>1&&a.sort(d||jg)}function u(){for(let h=t,d=e.length;h<d;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:u,sort:c}}function _2(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new Jg,e.set(i,[r])):a>=s.length?(r=new Jg,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function v2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new Vt};break;case"SpotLight":n={position:new N,direction:new N,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function x2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let S2=0;function y2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function M2(e){const t=new v2,n=x2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const a=new N,s=new Se,r=new Se;function o(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,m=0,y=0,g=0,f=0,v=0,_=0,x=0,T=0,R=0,A=0;c.sort(y2);for(let M=0,b=c.length;M<b;M++){const U=c[M],F=U.color,H=U.intensity,k=U.distance;let q=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ur?q=U.shadow.map.texture:q=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=F.r*H,h+=F.g*H,d+=F.b*H;else if(U.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(U.sh.coefficients[L],H);A++}else if(U.isDirectionalLight){const L=t.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const I=U.shadow,G=n.get(U);G.shadowIntensity=I.intensity,G.shadowBias=I.bias,G.shadowNormalBias=I.normalBias,G.shadowRadius=I.radius,G.shadowMapSize=I.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=L,p++}else if(U.isSpotLight){const L=t.get(U);L.position.setFromMatrixPosition(U.matrixWorld),L.color.copy(F).multiplyScalar(H),L.distance=k,L.coneCos=Math.cos(U.angle),L.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),L.decay=U.decay,i.spot[y]=L;const I=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,I.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[y]=I.matrix,U.castShadow){const G=n.get(U);G.shadowIntensity=I.intensity,G.shadowBias=I.bias,G.shadowNormalBias=I.normalBias,G.shadowRadius=I.radius,G.shadowMapSize=I.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=q,x++}y++}else if(U.isRectAreaLight){const L=t.get(U);L.color.copy(F).multiplyScalar(H),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=L,g++}else if(U.isPointLight){const L=t.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity),L.distance=U.distance,L.decay=U.decay,U.castShadow){const I=U.shadow,G=n.get(U);G.shadowIntensity=I.intensity,G.shadowBias=I.bias,G.shadowNormalBias=I.normalBias,G.shadowRadius=I.radius,G.shadowMapSize=I.mapSize,G.shadowCameraNear=I.camera.near,G.shadowCameraFar=I.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=U.shadow.matrix,_++}i.point[m]=L,m++}else if(U.isHemisphereLight){const L=t.get(U);L.skyColor.copy(U.color).multiplyScalar(H),L.groundColor.copy(U.groundColor).multiplyScalar(H),i.hemi[f]=L,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==y||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==v||D.numPointShadows!==_||D.numSpotShadows!==x||D.numSpotMaps!==T||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,D.directionalLength=p,D.pointLength=m,D.spotLength=y,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=v,D.numPointShadows=_,D.numSpotShadows=x,D.numSpotMaps=T,D.numLightProbes=A,i.version=S2++)}function l(c,u){let h=0,d=0,p=0,m=0,y=0;const g=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const _=c[f];if(_.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(g),h++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),m++}else if(_.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function Qg(e){const t=new M2(e),n=[],i=[];function a(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function r(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function b2(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new Qg(e),t.set(a,[o])):s>=r.length?(o=new Qg(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const E2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,A2=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],R2=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Kg=new Se,ao=new N,ih=new N;function C2(e,t,n){let i=new Lu;const a=new ct,s=new ct,r=new Oe,o=new P1,l=new z1,c={},u=n.maxTextureSize,h={[Va]:yn,[yn]:Va,[Xi]:Xi},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:E2,fragmentShader:T2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ke;m.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new oa(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let f=this.type;this.render=function(R,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;R.type===wb&&(It("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=bc);const M=e.getRenderTarget(),b=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Ki),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=f!==this.type;H&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(q=>q.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,q=R.length;k<q;k++){const L=R[k],I=L.shadow;if(I===void 0){It("WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;a.copy(I.mapSize);const G=I.getFrameExtents();if(a.multiply(G),s.copy(I.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/G.x),a.x=s.x*G.x,I.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/G.y),a.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null||H===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===uo){if(L.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Ei(a.x,a.y,{format:Ur,type:sa,minFilter:ln,magFilter:ln,generateMipmaps:!1}),I.map.texture.name=L.name+".shadowMap",I.map.depthTexture=new jo(a.x,a.y,Si),I.map.depthTexture.name=L.name+".shadowMapDepth",I.map.depthTexture.format=ra,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=ke,I.map.depthTexture.magFilter=ke}else{L.isPointLight?(I.map=new gS(a.x),I.map.depthTexture=new t1(a.x,Ti)):(I.map=new Ei(a.x,a.y),I.map.depthTexture=new jo(a.x,a.y,Ti)),I.map.depthTexture.name=L.name+".shadowMap",I.map.depthTexture.format=ra;const et=e.state.buffers.depth.getReversed();this.type===bc?(I.map.depthTexture.compareFunction=et?nm:em,I.map.depthTexture.minFilter=ln,I.map.depthTexture.magFilter=ln):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=ke,I.map.depthTexture.magFilter=ke)}I.camera.updateProjectionMatrix()}const nt=I.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<nt;et++){if(I.map.isWebGLCubeRenderTarget)e.setRenderTarget(I.map,et),e.clear();else{et===0&&(e.setRenderTarget(I.map),e.clear());const lt=I.getViewport(et);r.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),F.viewport(r)}if(L.isPointLight){const lt=I.camera,Bt=I.matrix,Nt=L.distance||lt.far;Nt!==lt.far&&(lt.far=Nt,lt.updateProjectionMatrix()),ao.setFromMatrixPosition(L.matrixWorld),lt.position.copy(ao),ih.copy(lt.position),ih.add(A2[et]),lt.up.copy(R2[et]),lt.lookAt(ih),lt.updateMatrixWorld(),Bt.makeTranslation(-ao.x,-ao.y,-ao.z),Kg.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Kg,lt.coordinateSystem,lt.reversedDepth)}else I.updateMatrices(L);i=I.getFrustum(),x(A,D,I.camera,L,this.type)}I.isPointLightShadow!==!0&&this.type===uo&&v(I,D),I.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(M,b,U)};function v(R,A){const D=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ei(a.x,a.y,{format:Ur,type:sa})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(A,null,D,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(A,null,D,p,y,null)}function _(R,A,D,M){let b=null;const U=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)b=U;else if(b=D.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=b.uuid,H=A.uuid;let k=c[F];k===void 0&&(k={},c[F]=k);let q=k[H];q===void 0&&(q=b.clone(),k[H]=q,A.addEventListener("dispose",T)),b=q}if(b.visible=A.visible,b.wireframe=A.wireframe,M===uo?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=e.properties.get(b);F.light=D}return b}function x(R,A,D,M,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===uo)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const H=t.update(R),k=R.material;if(Array.isArray(k)){const q=H.groups;for(let L=0,I=q.length;L<I;L++){const G=q[L],nt=k[G.materialIndex];if(nt&&nt.visible){const et=_(R,nt,M,b);R.onBeforeShadow(e,R,A,D,H,et,G),e.renderBufferDirect(D,null,H,et,R,G),R.onAfterShadow(e,R,A,D,H,et,G)}}}else if(k.visible){const q=_(R,k,M,b);R.onBeforeShadow(e,R,A,D,H,q,null),e.renderBufferDirect(D,null,H,q,R,null),R.onAfterShadow(e,R,A,D,H,q,null)}}const F=R.children;for(let H=0,k=F.length;H<k;H++)x(F[H],A,D,M,b)}function T(R){R.target.removeEventListener("dispose",T);for(const D in c){const M=c[D],b=R.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const w2={[ed]:nd,[id]:rd,[ad]:od,[wr]:sd,[nd]:ed,[rd]:id,[od]:ad,[sd]:wr};function D2(e,t){function n(){let O=!1;const vt=new Oe;let rt=null;const St=new Oe(0,0,0,0);return{setMask:function(st){rt!==st&&!O&&(e.colorMask(st,st,st,st),rt=st)},setLocked:function(st){O=st},setClear:function(st,Q,ft,Xt,ye){ye===!0&&(st*=Xt,Q*=Xt,ft*=Xt),vt.set(st,Q,ft,Xt),St.equals(vt)===!1&&(e.clearColor(st,Q,ft,Xt),St.copy(vt))},reset:function(){O=!1,rt=null,St.set(-1,0,0,0)}}}function i(){let O=!1,vt=!1,rt=null,St=null,st=null;return{setReversed:function(Q){if(vt!==Q){const ft=t.get("EXT_clip_control");Q?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),vt=Q;const Xt=st;st=null,this.setClear(Xt)}},getReversed:function(){return vt},setTest:function(Q){Q?tt(e.DEPTH_TEST):yt(e.DEPTH_TEST)},setMask:function(Q){rt!==Q&&!O&&(e.depthMask(Q),rt=Q)},setFunc:function(Q){if(vt&&(Q=w2[Q]),St!==Q){switch(Q){case ed:e.depthFunc(e.NEVER);break;case nd:e.depthFunc(e.ALWAYS);break;case id:e.depthFunc(e.LESS);break;case wr:e.depthFunc(e.LEQUAL);break;case ad:e.depthFunc(e.EQUAL);break;case sd:e.depthFunc(e.GEQUAL);break;case rd:e.depthFunc(e.GREATER);break;case od:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}St=Q}},setLocked:function(Q){O=Q},setClear:function(Q){st!==Q&&(vt&&(Q=1-Q),e.clearDepth(Q),st=Q)},reset:function(){O=!1,rt=null,St=null,st=null,vt=!1}}}function a(){let O=!1,vt=null,rt=null,St=null,st=null,Q=null,ft=null,Xt=null,ye=null;return{setTest:function(ce){O||(ce?tt(e.STENCIL_TEST):yt(e.STENCIL_TEST))},setMask:function(ce){vt!==ce&&!O&&(e.stencilMask(ce),vt=ce)},setFunc:function(ce,hi,Di){(rt!==ce||St!==hi||st!==Di)&&(e.stencilFunc(ce,hi,Di),rt=ce,St=hi,st=Di)},setOp:function(ce,hi,Di){(Q!==ce||ft!==hi||Xt!==Di)&&(e.stencilOp(ce,hi,Di),Q=ce,ft=hi,Xt=Di)},setLocked:function(ce){O=ce},setClear:function(ce){ye!==ce&&(e.clearStencil(ce),ye=ce)},reset:function(){O=!1,vt=null,rt=null,St=null,st=null,Q=null,ft=null,Xt=null,ye=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],m=null,y=!1,g=null,f=null,v=null,_=null,x=null,T=null,R=null,A=new Vt(0,0,0),D=0,M=!1,b=null,U=null,F=null,H=null,k=null;const q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,I=0;const G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(G)[1]),L=I>=1):G.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),L=I>=2);let nt=null,et={};const lt=e.getParameter(e.SCISSOR_BOX),Bt=e.getParameter(e.VIEWPORT),Nt=new Oe().fromArray(lt),$t=new Oe().fromArray(Bt);function ae(O,vt,rt,St){const st=new Uint8Array(4),Q=e.createTexture();e.bindTexture(O,Q),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ft=0;ft<rt;ft++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(vt,0,e.RGBA,1,1,St,0,e.RGBA,e.UNSIGNED_BYTE,st):e.texImage2D(vt+ft,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,st);return Q}const Z={};Z[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(wr),$(!1),gt(X0),tt(e.CULL_FACE),K(Ki);function tt(O){u[O]!==!0&&(e.enable(O),u[O]=!0)}function yt(O){u[O]!==!1&&(e.disable(O),u[O]=!1)}function Ot(O,vt){return h[O]!==vt?(e.bindFramebuffer(O,vt),h[O]=vt,O===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=vt),O===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=vt),!0):!1}function bt(O,vt){let rt=p,St=!1;if(O){rt=d.get(vt),rt===void 0&&(rt=[],d.set(vt,rt));const st=O.textures;if(rt.length!==st.length||rt[0]!==e.COLOR_ATTACHMENT0){for(let Q=0,ft=st.length;Q<ft;Q++)rt[Q]=e.COLOR_ATTACHMENT0+Q;rt.length=st.length,St=!0}}else rt[0]!==e.BACK&&(rt[0]=e.BACK,St=!0);St&&e.drawBuffers(rt)}function ne(O){return m!==O?(e.useProgram(O),m=O,!0):!1}const pe={[as]:e.FUNC_ADD,[Ub]:e.FUNC_SUBTRACT,[Lb]:e.FUNC_REVERSE_SUBTRACT};pe[Nb]=e.MIN,pe[Ob]=e.MAX;const kt={[Pb]:e.ZERO,[zb]:e.ONE,[Ib]:e.SRC_COLOR,[$h]:e.SRC_ALPHA,[Xb]:e.SRC_ALPHA_SATURATE,[Vb]:e.DST_COLOR,[Fb]:e.DST_ALPHA,[Bb]:e.ONE_MINUS_SRC_COLOR,[td]:e.ONE_MINUS_SRC_ALPHA,[Gb]:e.ONE_MINUS_DST_COLOR,[Hb]:e.ONE_MINUS_DST_ALPHA,[kb]:e.CONSTANT_COLOR,[Wb]:e.ONE_MINUS_CONSTANT_COLOR,[qb]:e.CONSTANT_ALPHA,[Yb]:e.ONE_MINUS_CONSTANT_ALPHA};function K(O,vt,rt,St,st,Q,ft,Xt,ye,ce){if(O===Ki){y===!0&&(yt(e.BLEND),y=!1);return}if(y===!1&&(tt(e.BLEND),y=!0),O!==Db){if(O!==g||ce!==M){if((f!==as||x!==as)&&(e.blendEquation(e.FUNC_ADD),f=as,x=as),ce)switch(O){case gr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case k0:e.blendFunc(e.ONE,e.ONE);break;case W0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case q0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ie("WebGLState: Invalid blending: ",O);break}else switch(O){case gr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case k0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case W0:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case q0:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",O);break}v=null,_=null,T=null,R=null,A.set(0,0,0),D=0,g=O,M=ce}return}st=st||vt,Q=Q||rt,ft=ft||St,(vt!==f||st!==x)&&(e.blendEquationSeparate(pe[vt],pe[st]),f=vt,x=st),(rt!==v||St!==_||Q!==T||ft!==R)&&(e.blendFuncSeparate(kt[rt],kt[St],kt[Q],kt[ft]),v=rt,_=St,T=Q,R=ft),(Xt.equals(A)===!1||ye!==D)&&(e.blendColor(Xt.r,Xt.g,Xt.b,ye),A.copy(Xt),D=ye),g=O,M=!1}function at(O,vt){O.side===Xi?yt(e.CULL_FACE):tt(e.CULL_FACE);let rt=O.side===yn;vt&&(rt=!rt),$(rt),O.blending===gr&&O.transparent===!1?K(Ki):K(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);const St=O.stencilWrite;o.setTest(St),St&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Dt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):yt(e.SAMPLE_ALPHA_TO_COVERAGE)}function $(O){b!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),b=O)}function gt(O){O!==Rb?(tt(e.CULL_FACE),O!==U&&(O===X0?e.cullFace(e.BACK):O===Cb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):yt(e.CULL_FACE),U=O}function w(O){O!==F&&(L&&e.lineWidth(O),F=O)}function Dt(O,vt,rt){O?(tt(e.POLYGON_OFFSET_FILL),(H!==vt||k!==rt)&&(e.polygonOffset(vt,rt),H=vt,k=rt)):yt(e.POLYGON_OFFSET_FILL)}function xt(O){O?tt(e.SCISSOR_TEST):yt(e.SCISSOR_TEST)}function Pt(O){O===void 0&&(O=e.TEXTURE0+q-1),nt!==O&&(e.activeTexture(O),nt=O)}function ot(O,vt,rt){rt===void 0&&(nt===null?rt=e.TEXTURE0+q-1:rt=nt);let St=et[rt];St===void 0&&(St={type:void 0,texture:void 0},et[rt]=St),(St.type!==O||St.texture!==vt)&&(nt!==rt&&(e.activeTexture(rt),nt=rt),e.bindTexture(O,vt||Z[O]),St.type=O,St.texture=vt)}function C(){const O=et[nt];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function W(){try{e.texSubImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function J(){try{e.texSubImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function Rt(){try{e.compressedTexSubImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function ut(){try{e.texStorage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function Tt(){try{e.texStorage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function zt(){try{e.texImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function it(){try{e.texImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function dt(O){Nt.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),Nt.copy(O))}function At(O){$t.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),$t.copy(O))}function Ct(O,vt){let rt=c.get(vt);rt===void 0&&(rt=new WeakMap,c.set(vt,rt));let St=rt.get(O);St===void 0&&(St=e.getUniformBlockIndex(vt,O.name),rt.set(O,St))}function ht(O,vt){const St=c.get(vt).get(O);l.get(vt)!==St&&(e.uniformBlockBinding(vt,St,O.__bindingPointIndex),l.set(vt,St))}function jt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},nt=null,et={},h={},d=new WeakMap,p=[],m=null,y=!1,g=null,f=null,v=null,_=null,x=null,T=null,R=null,A=new Vt(0,0,0),D=0,M=!1,b=null,U=null,F=null,H=null,k=null,Nt.set(0,0,e.canvas.width,e.canvas.height),$t.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:tt,disable:yt,bindFramebuffer:Ot,drawBuffers:bt,useProgram:ne,setBlending:K,setMaterial:at,setFlipSided:$,setCullFace:gt,setLineWidth:w,setPolygonOffset:Dt,setScissorTest:xt,activeTexture:Pt,bindTexture:ot,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:P,texImage2D:zt,texImage3D:it,updateUBOMapping:Ct,uniformBlockBinding:ht,texStorage2D:ut,texStorage3D:Tt,texSubImage2D:W,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:Rt,scissor:dt,viewport:At,reset:jt}}function U2(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return p?new OffscreenCanvas(C,S):Yo("canvas")}function y(C,S,P){let W=1;const J=ot(C);if((J.width>P||J.height>P)&&(W=P/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(W*J.width),Rt=Math.floor(W*J.height);h===void 0&&(h=m(Y,Rt));const ut=S?m(Y,Rt):h;return ut.width=Y,ut.height=Rt,ut.getContext("2d").drawImage(C,0,0,Y,Rt),It("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Rt+")."),ut}else return"data"in C&&It("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function f(C){e.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(C,S,P,W,J=!1){if(C!==null){if(e[C]!==void 0)return e[C];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===e.RED&&(P===e.FLOAT&&(Y=e.R32F),P===e.HALF_FLOAT&&(Y=e.R16F),P===e.UNSIGNED_BYTE&&(Y=e.R8)),S===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.R8UI),P===e.UNSIGNED_SHORT&&(Y=e.R16UI),P===e.UNSIGNED_INT&&(Y=e.R32UI),P===e.BYTE&&(Y=e.R8I),P===e.SHORT&&(Y=e.R16I),P===e.INT&&(Y=e.R32I)),S===e.RG&&(P===e.FLOAT&&(Y=e.RG32F),P===e.HALF_FLOAT&&(Y=e.RG16F),P===e.UNSIGNED_BYTE&&(Y=e.RG8)),S===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RG8UI),P===e.UNSIGNED_SHORT&&(Y=e.RG16UI),P===e.UNSIGNED_INT&&(Y=e.RG32UI),P===e.BYTE&&(Y=e.RG8I),P===e.SHORT&&(Y=e.RG16I),P===e.INT&&(Y=e.RG32I)),S===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),P===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),P===e.UNSIGNED_INT&&(Y=e.RGB32UI),P===e.BYTE&&(Y=e.RGB8I),P===e.SHORT&&(Y=e.RGB16I),P===e.INT&&(Y=e.RGB32I)),S===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),P===e.UNSIGNED_INT&&(Y=e.RGBA32UI),P===e.BYTE&&(Y=e.RGBA8I),P===e.SHORT&&(Y=e.RGBA16I),P===e.INT&&(Y=e.RGBA32I)),S===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),S===e.RGBA){const Rt=J?su:se.getTransfer(W);P===e.FLOAT&&(Y=e.RGBA32F),P===e.HALF_FLOAT&&(Y=e.RGBA16F),P===e.UNSIGNED_BYTE&&(Y=Rt===fe?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(C,S){let P;return C?S===null||S===Ti||S===qo?P=e.DEPTH24_STENCIL8:S===Si?P=e.DEPTH32F_STENCIL8:S===Wo&&(P=e.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ti||S===qo?P=e.DEPTH_COMPONENT24:S===Si?P=e.DEPTH_COMPONENT32F:S===Wo&&(P=e.DEPTH_COMPONENT16),P}function T(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ke&&C.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),D(S),S.isVideoTexture&&u.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),b(S)}function D(C){const S=i.get(C);if(S.__webglInit===void 0)return;const P=C.source,W=d.get(P);if(W){const J=W[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys(W).length===0&&d.delete(P)}i.remove(C)}function M(C){const S=i.get(C);e.deleteTexture(S.__webglTexture);const P=C.source,W=d.get(P);delete W[S.__cacheKey],r.memory.textures--}function b(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let J=0;J<S.__webglFramebuffer[W].length;J++)e.deleteFramebuffer(S.__webglFramebuffer[W][J]);else e.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)e.deleteFramebuffer(S.__webglFramebuffer[W]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const P=C.textures;for(let W=0,J=P.length;W<J;W++){const Y=i.get(P[W]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),r.memory.textures--),i.remove(P[W])}i.remove(C)}let U=0;function F(){U=0}function H(){const C=U;return C>=a.maxTextures&&It("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),U+=1,C}function k(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function q(C,S){const P=i.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){const W=C.image;if(W===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(P,C,S);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+S)}function L(C,S){const P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){Z(P,C,S);return}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+S)}function I(C,S){const P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){Z(P,C,S);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+S)}function G(C,S){const P=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&P.__version!==C.version){tt(P,C,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+S)}const nt={[ud]:e.REPEAT,[Zi]:e.CLAMP_TO_EDGE,[fd]:e.MIRRORED_REPEAT},et={[ke]:e.NEAREST,[Jb]:e.NEAREST_MIPMAP_NEAREST,[Ll]:e.NEAREST_MIPMAP_LINEAR,[ln]:e.LINEAR,[Mf]:e.LINEAR_MIPMAP_NEAREST,[rs]:e.LINEAR_MIPMAP_LINEAR},lt={[$b]:e.NEVER,[aE]:e.ALWAYS,[tE]:e.LESS,[em]:e.LEQUAL,[eE]:e.EQUAL,[nm]:e.GEQUAL,[nE]:e.GREATER,[iE]:e.NOTEQUAL};function Bt(C,S){if(S.type===Si&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===Mf||S.magFilter===Ll||S.magFilter===rs||S.minFilter===ln||S.minFilter===Mf||S.minFilter===Ll||S.minFilter===rs)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,nt[S.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,nt[S.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,nt[S.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,et[S.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ke||S.minFilter!==Ll&&S.minFilter!==rs||S.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Nt(C,S){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const W=S.source;let J=d.get(W);J===void 0&&(J={},d.set(W,J));const Y=k(S);if(Y!==C.__cacheKey){J[Y]===void 0&&(J[Y]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),J[Y].usedTimes++;const Rt=J[C.__cacheKey];Rt!==void 0&&(J[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(S)),C.__cacheKey=Y,C.__webglTexture=J[Y].texture}return P}function $t(C,S,P){return Math.floor(Math.floor(C/P)/S)}function ae(C,S,P,W){const Y=C.updateRanges;if(Y.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,P,W,S.data);else{Y.sort((it,dt)=>it.start-dt.start);let Rt=0;for(let it=1;it<Y.length;it++){const dt=Y[Rt],At=Y[it],Ct=dt.start+dt.count,ht=$t(At.start,S.width,4),jt=$t(dt.start,S.width,4);At.start<=Ct+1&&ht===jt&&$t(At.start+At.count-1,S.width,4)===ht?dt.count=Math.max(dt.count,At.start+At.count-dt.start):(++Rt,Y[Rt]=At)}Y.length=Rt+1;const ut=e.getParameter(e.UNPACK_ROW_LENGTH),Tt=e.getParameter(e.UNPACK_SKIP_PIXELS),zt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let it=0,dt=Y.length;it<dt;it++){const At=Y[it],Ct=Math.floor(At.start/4),ht=Math.ceil(At.count/4),jt=Ct%S.width,O=Math.floor(Ct/S.width),vt=ht,rt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,jt,O,vt,rt,P,W,S.data)}C.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ut),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(e.UNPACK_SKIP_ROWS,zt)}}function Z(C,S,P){let W=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=e.TEXTURE_3D);const J=Nt(C,S),Y=S.source;n.bindTexture(W,C.__webglTexture,e.TEXTURE0+P);const Rt=i.get(Y);if(Y.version!==Rt.__version||J===!0){n.activeTexture(e.TEXTURE0+P);const ut=se.getPrimaries(se.workingColorSpace),Tt=S.colorSpace===ya?null:se.getPrimaries(S.colorSpace),zt=S.colorSpace===ya||ut===Tt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let it=y(S.image,!1,a.maxTextureSize);it=Pt(S,it);const dt=s.convert(S.format,S.colorSpace),At=s.convert(S.type);let Ct=_(S.internalFormat,dt,At,S.colorSpace,S.isVideoTexture);Bt(W,S);let ht;const jt=S.mipmaps,O=S.isVideoTexture!==!0,vt=Rt.__version===void 0||J===!0,rt=Y.dataReady,St=T(S,it);if(S.isDepthTexture)Ct=x(S.format===os,S.type),vt&&(O?n.texStorage2D(e.TEXTURE_2D,1,Ct,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,Ct,it.width,it.height,0,dt,At,null));else if(S.isDataTexture)if(jt.length>0){O&&vt&&n.texStorage2D(e.TEXTURE_2D,St,Ct,jt[0].width,jt[0].height);for(let st=0,Q=jt.length;st<Q;st++)ht=jt[st],O?rt&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,ht.width,ht.height,dt,At,ht.data):n.texImage2D(e.TEXTURE_2D,st,Ct,ht.width,ht.height,0,dt,At,ht.data);S.generateMipmaps=!1}else O?(vt&&n.texStorage2D(e.TEXTURE_2D,St,Ct,it.width,it.height),rt&&ae(S,it,dt,At)):n.texImage2D(e.TEXTURE_2D,0,Ct,it.width,it.height,0,dt,At,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,St,Ct,jt[0].width,jt[0].height,it.depth);for(let st=0,Q=jt.length;st<Q;st++)if(ht=jt[st],S.format!==ci)if(dt!==null)if(O){if(rt)if(S.layerUpdates.size>0){const ft=wg(ht.width,ht.height,S.format,S.type);for(const Xt of S.layerUpdates){const ye=ht.data.subarray(Xt*ft/ht.data.BYTES_PER_ELEMENT,(Xt+1)*ft/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,Xt,ht.width,ht.height,1,dt,ye)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,0,ht.width,ht.height,it.depth,dt,ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,st,Ct,ht.width,ht.height,it.depth,0,ht.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?rt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,0,ht.width,ht.height,it.depth,dt,At,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,st,Ct,ht.width,ht.height,it.depth,0,dt,At,ht.data)}else{O&&vt&&n.texStorage2D(e.TEXTURE_2D,St,Ct,jt[0].width,jt[0].height);for(let st=0,Q=jt.length;st<Q;st++)ht=jt[st],S.format!==ci?dt!==null?O?rt&&n.compressedTexSubImage2D(e.TEXTURE_2D,st,0,0,ht.width,ht.height,dt,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,st,Ct,ht.width,ht.height,0,ht.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?rt&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,ht.width,ht.height,dt,At,ht.data):n.texImage2D(e.TEXTURE_2D,st,Ct,ht.width,ht.height,0,dt,At,ht.data)}else if(S.isDataArrayTexture)if(O){if(vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,St,Ct,it.width,it.height,it.depth),rt)if(S.layerUpdates.size>0){const st=wg(it.width,it.height,S.format,S.type);for(const Q of S.layerUpdates){const ft=it.data.subarray(Q*st/it.data.BYTES_PER_ELEMENT,(Q+1)*st/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,dt,At,ft)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,At,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ct,it.width,it.height,it.depth,0,dt,At,it.data);else if(S.isData3DTexture)O?(vt&&n.texStorage3D(e.TEXTURE_3D,St,Ct,it.width,it.height,it.depth),rt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,At,it.data)):n.texImage3D(e.TEXTURE_3D,0,Ct,it.width,it.height,it.depth,0,dt,At,it.data);else if(S.isFramebufferTexture){if(vt)if(O)n.texStorage2D(e.TEXTURE_2D,St,Ct,it.width,it.height);else{let st=it.width,Q=it.height;for(let ft=0;ft<St;ft++)n.texImage2D(e.TEXTURE_2D,ft,Ct,st,Q,0,dt,At,null),st>>=1,Q>>=1}}else if(jt.length>0){if(O&&vt){const st=ot(jt[0]);n.texStorage2D(e.TEXTURE_2D,St,Ct,st.width,st.height)}for(let st=0,Q=jt.length;st<Q;st++)ht=jt[st],O?rt&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,dt,At,ht):n.texImage2D(e.TEXTURE_2D,st,Ct,dt,At,ht);S.generateMipmaps=!1}else if(O){if(vt){const st=ot(it);n.texStorage2D(e.TEXTURE_2D,St,Ct,st.width,st.height)}rt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,At,it)}else n.texImage2D(e.TEXTURE_2D,0,Ct,dt,At,it);g(S)&&f(W),Rt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function tt(C,S,P){if(S.image.length!==6)return;const W=Nt(C,S),J=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+P);const Y=i.get(J);if(J.version!==Y.__version||W===!0){n.activeTexture(e.TEXTURE0+P);const Rt=se.getPrimaries(se.workingColorSpace),ut=S.colorSpace===ya?null:se.getPrimaries(S.colorSpace),Tt=S.colorSpace===ya||Rt===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const zt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let Q=0;Q<6;Q++)!zt&&!it?dt[Q]=y(S.image[Q],!0,a.maxCubemapSize):dt[Q]=it?S.image[Q].image:S.image[Q],dt[Q]=Pt(S,dt[Q]);const At=dt[0],Ct=s.convert(S.format,S.colorSpace),ht=s.convert(S.type),jt=_(S.internalFormat,Ct,ht,S.colorSpace),O=S.isVideoTexture!==!0,vt=Y.__version===void 0||W===!0,rt=J.dataReady;let St=T(S,At);Bt(e.TEXTURE_CUBE_MAP,S);let st;if(zt){O&&vt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,St,jt,At.width,At.height);for(let Q=0;Q<6;Q++){st=dt[Q].mipmaps;for(let ft=0;ft<st.length;ft++){const Xt=st[ft];S.format!==ci?Ct!==null?O?rt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,Xt.width,Xt.height,Ct,Xt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,jt,Xt.width,Xt.height,0,Xt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,Xt.width,Xt.height,Ct,ht,Xt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,jt,Xt.width,Xt.height,0,Ct,ht,Xt.data)}}}else{if(st=S.mipmaps,O&&vt){st.length>0&&St++;const Q=ot(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,St,jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){O?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,dt[Q].width,dt[Q].height,Ct,ht,dt[Q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,dt[Q].width,dt[Q].height,0,Ct,ht,dt[Q].data);for(let ft=0;ft<st.length;ft++){const ye=st[ft].image[Q].image;O?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,ye.width,ye.height,Ct,ht,ye.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,jt,ye.width,ye.height,0,Ct,ht,ye.data)}}else{O?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ct,ht,dt[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,Ct,ht,dt[Q]);for(let ft=0;ft<st.length;ft++){const Xt=st[ft];O?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Ct,ht,Xt.image[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,jt,Ct,ht,Xt.image[Q])}}}g(S)&&f(e.TEXTURE_CUBE_MAP),Y.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function yt(C,S,P,W,J,Y){const Rt=s.convert(P.format,P.colorSpace),ut=s.convert(P.type),Tt=_(P.internalFormat,Rt,ut,P.colorSpace),zt=i.get(S),it=i.get(P);if(it.__renderTarget=S,!zt.__hasExternalTextures){const dt=Math.max(1,S.width>>Y),At=Math.max(1,S.height>>Y);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,Y,Tt,dt,At,S.depth,0,Rt,ut,null):n.texImage2D(J,Y,Tt,dt,At,0,Rt,ut,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,J,it.__webglTexture,0,w(S)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,J,it.__webglTexture,Y),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ot(C,S,P){if(e.bindRenderbuffer(e.RENDERBUFFER,C),S.depthBuffer){const W=S.depthTexture,J=W&&W.isDepthTexture?W.type:null,Y=x(S.stencilBuffer,J),Rt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Dt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,w(S),Y,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,w(S),Y,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Y,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Rt,e.RENDERBUFFER,C)}else{const W=S.textures;for(let J=0;J<W.length;J++){const Y=W[J],Rt=s.convert(Y.format,Y.colorSpace),ut=s.convert(Y.type),Tt=_(Y.internalFormat,Rt,ut,Y.colorSpace);Dt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,w(S),Tt,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,w(S),Tt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Tt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function bt(C,S,P){const W=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),Bt(e.TEXTURE_CUBE_MAP,S.depthTexture);const zt=s.convert(S.depthTexture.format),it=s.convert(S.depthTexture.type);let dt;S.depthTexture.format===ra?dt=e.DEPTH_COMPONENT24:S.depthTexture.format===os&&(dt=e.DEPTH24_STENCIL8);for(let At=0;At<6;At++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,dt,S.width,S.height,0,zt,it,null)}}else q(S.depthTexture,0);const Y=J.__webglTexture,Rt=w(S),ut=W?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,Tt=S.depthTexture.format===os?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===ra)Dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Tt,ut,Y,0,Rt):e.framebufferTexture2D(e.FRAMEBUFFER,Tt,ut,Y,0);else if(S.depthTexture.format===os)Dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Tt,ut,Y,0,Rt):e.framebufferTexture2D(e.FRAMEBUFFER,Tt,ut,Y,0);else throw new Error("Unknown depthTexture format")}function ne(C){const S=i.get(C),P=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=W}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(P)for(let W=0;W<6;W++)bt(S.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?bt(S.__webglFramebuffer[0],C,0):bt(S.__webglFramebuffer,C,0)}else if(P){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=e.createRenderbuffer(),Ot(S.__webglDepthbuffer[W],C,!1);else{const J=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,Y)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Ot(S.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,Y)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(C,S,P){const W=i.get(C);S!==void 0&&yt(W.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&ne(C)}function kt(C){const S=C.texture,P=i.get(C),W=i.get(S);C.addEventListener("dispose",A);const J=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Rt=J.length>1;if(Rt||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=S.version,r.memory.textures++),Y){P.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer[ut]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)P.__webglFramebuffer[ut][Tt]=e.createFramebuffer()}else P.__webglFramebuffer[ut]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)P.__webglFramebuffer[ut]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Rt)for(let ut=0,Tt=J.length;ut<Tt;ut++){const zt=i.get(J[ut]);zt.__webglTexture===void 0&&(zt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Dt(C)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ut=0;ut<J.length;ut++){const Tt=J[ut];P.__webglColorRenderbuffer[ut]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[ut]);const zt=s.convert(Tt.format,Tt.colorSpace),it=s.convert(Tt.type),dt=_(Tt.internalFormat,zt,it,Tt.colorSpace,C.isXRRenderTarget===!0),At=w(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,At,dt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,P.__webglColorRenderbuffer[ut])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Ot(P.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){n.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),Bt(e.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)yt(P.__webglFramebuffer[ut][Tt],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt);else yt(P.__webglFramebuffer[ut],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(S)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Rt){for(let ut=0,Tt=J.length;ut<Tt;ut++){const zt=J[ut],it=i.get(zt);let dt=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(dt,it.__webglTexture),Bt(dt,zt),yt(P.__webglFramebuffer,C,zt,e.COLOR_ATTACHMENT0+ut,dt,0),g(zt)&&f(dt)}n.unbindTexture()}else{let ut=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,W.__webglTexture),Bt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)yt(P.__webglFramebuffer[Tt],C,S,e.COLOR_ATTACHMENT0,ut,Tt);else yt(P.__webglFramebuffer,C,S,e.COLOR_ATTACHMENT0,ut,0);g(S)&&f(ut),n.unbindTexture()}C.depthBuffer&&ne(C)}function K(C){const S=C.textures;for(let P=0,W=S.length;P<W;P++){const J=S[P];if(g(J)){const Y=v(C),Rt=i.get(J).__webglTexture;n.bindTexture(Y,Rt),f(Y),n.unbindTexture()}}}const at=[],$=[];function gt(C){if(C.samples>0){if(Dt(C)===!1){const S=C.textures,P=C.width,W=C.height;let J=e.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Rt=i.get(C),ut=S.length>1;if(ut)for(let zt=0;zt<S.length;zt++)n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Tt=C.texture.mipmaps;Tt&&Tt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let zt=0;zt<S.length;zt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),ut){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Rt.__webglColorRenderbuffer[zt]);const it=i.get(S[zt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,it,0)}e.blitFramebuffer(0,0,P,W,0,0,P,W,J,e.NEAREST),l===!0&&(at.length=0,$.length=0,at.push(e.COLOR_ATTACHMENT0+zt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(at.push(Y),$.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,$)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ut)for(let zt=0;zt<S.length;zt++){n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.RENDERBUFFER,Rt.__webglColorRenderbuffer[zt]);const it=i.get(S[zt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.TEXTURE_2D,it,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function w(C){return Math.min(a.maxSamples,C.samples)}function Dt(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xt(C){const S=r.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Pt(C,S){const P=C.colorSpace,W=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==Lr&&P!==ya&&(se.getTransfer(P)===fe?(W!==ci||J!==On)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",P)),S}function ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=L,this.setTexture3D=I,this.setTextureCube=G,this.rebindTextures=pe,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function L2(e,t){function n(i,a=ya){let s;const r=se.getTransfer(a);if(i===On)return e.UNSIGNED_BYTE;if(i===Jp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Qp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===nS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===iS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===tS)return e.BYTE;if(i===eS)return e.SHORT;if(i===Wo)return e.UNSIGNED_SHORT;if(i===jp)return e.INT;if(i===Ti)return e.UNSIGNED_INT;if(i===Si)return e.FLOAT;if(i===sa)return e.HALF_FLOAT;if(i===aS)return e.ALPHA;if(i===sS)return e.RGB;if(i===ci)return e.RGBA;if(i===ra)return e.DEPTH_COMPONENT;if(i===os)return e.DEPTH_STENCIL;if(i===rS)return e.RED;if(i===Kp)return e.RED_INTEGER;if(i===Ur)return e.RG;if(i===$p)return e.RG_INTEGER;if(i===tm)return e.RGBA_INTEGER;if(i===Ec||i===Tc||i===Ac||i===Rc)if(r===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hd||i===dd||i===pd||i===md)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===md)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gd||i===_d||i===vd||i===xd||i===Sd||i===yd||i===Md)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gd||i===_d)return r===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===xd)return s.COMPRESSED_R11_EAC;if(i===Sd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===yd)return s.COMPRESSED_RG11_EAC;if(i===Md)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bd||i===Ed||i===Td||i===Ad||i===Rd||i===Cd||i===wd||i===Dd||i===Ud||i===Ld||i===Nd||i===Od||i===Pd||i===zd)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ed)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ad)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ld)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Od)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Id||i===Bd||i===Fd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Id)return r===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hd||i===Vd||i===Gd||i===Xd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const N2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new SS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ai({vertexShader:N2,fragmentShader:O2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oa(new Nu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z2 extends Rs{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,m=null;const y=typeof XRWebGLBinding<"u",g=new P2,f={},v=n.getContextAttributes();let _=null,x=null;const T=[],R=[],A=new ct;let D=null;const M=new Ln;M.viewport=new Oe;const b=new Ln;b.viewport=new Oe;const U=[M,b],F=new k1;let H=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=T[Z];return tt===void 0&&(tt=new Xf,T[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=T[Z];return tt===void 0&&(tt=new Xf,T[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=T[Z];return tt===void 0&&(tt=new Xf,T[Z]=tt),tt.getHandSpace()};function q(Z){const tt=R.indexOf(Z.inputSource);if(tt===-1)return;const yt=T[tt];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,c||r),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function L(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",L),a.removeEventListener("inputsourceschange",I);for(let Z=0;Z<T.length;Z++){const tt=R[Z];tt!==null&&(R[Z]=null,T[Z].disconnect(tt))}H=null,k=null,g.reset();for(const Z in f)delete f[Z];t.setRenderTarget(_),p=null,d=null,h=null,a=null,x=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(a,n)),h},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",L),a.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await n.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ot=null,bt=null;v.depth&&(bt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=v.stencil?os:ra,Ot=v.stencil?qo:Ti);const ne={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ne),a.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ei(d.textureWidth,d.textureHeight,{format:ci,type:On,depthTexture:new jo(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,yt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ei(p.framebufferWidth,p.framebufferHeight,{format:ci,type:On,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),ae.setContext(a),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(Z){for(let tt=0;tt<Z.removed.length;tt++){const yt=Z.removed[tt],Ot=R.indexOf(yt);Ot>=0&&(R[Ot]=null,T[Ot].disconnect(yt))}for(let tt=0;tt<Z.added.length;tt++){const yt=Z.added[tt];let Ot=R.indexOf(yt);if(Ot===-1){for(let ne=0;ne<T.length;ne++)if(ne>=R.length){R.push(yt),Ot=ne;break}else if(R[ne]===null){R[ne]=yt,Ot=ne;break}if(Ot===-1)break}const bt=T[Ot];bt&&bt.connect(yt)}}const G=new N,nt=new N;function et(Z,tt,yt){G.setFromMatrixPosition(tt.matrixWorld),nt.setFromMatrixPosition(yt.matrixWorld);const Ot=G.distanceTo(nt),bt=tt.projectionMatrix.elements,ne=yt.projectionMatrix.elements,pe=bt[14]/(bt[10]-1),kt=bt[14]/(bt[10]+1),K=(bt[9]+1)/bt[5],at=(bt[9]-1)/bt[5],$=(bt[8]-1)/bt[0],gt=(ne[8]+1)/ne[0],w=pe*$,Dt=pe*gt,xt=Ot/(-$+gt),Pt=xt*-$;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pt),Z.translateZ(xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),bt[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const ot=pe+xt,C=kt+xt,S=w-Pt,P=Dt+(Ot-Pt),W=K*kt/C*ot,J=at*kt/C*ot;Z.projectionMatrix.makePerspective(S,P,W,J,ot,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let tt=Z.near,yt=Z.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),F.near=b.near=M.near=tt,F.far=b.far=M.far=yt,(H!==F.near||k!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,k=F.far),F.layers.mask=Z.layers.mask|6,M.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;const Ot=Z.parent,bt=F.cameras;lt(F,Ot);for(let ne=0;ne<bt.length;ne++)lt(bt[ne],Ot);bt.length===2?et(F,M,b):F.projectionMatrix.copy(M.projectionMatrix),Bt(Z,F,Ot)};function Bt(Z,tt,yt){yt===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Nr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Z){return f[Z]};let Nt=null;function $t(Z,tt){if(u=tt.getViewerPose(c||r),m=tt,u!==null){const yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Ot=!1;yt.length!==F.cameras.length&&(F.cameras.length=0,Ot=!0);for(let kt=0;kt<yt.length;kt++){const K=yt[kt];let at=null;if(p!==null)at=p.getViewport(K);else{const gt=h.getViewSubImage(d,K);at=gt.viewport,kt===0&&(t.setRenderTargetTextures(x,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(x))}let $=U[kt];$===void 0&&($=new Ln,$.layers.enable(kt),$.viewport=new Oe,U[kt]=$),$.matrix.fromArray(K.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(K.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(at.x,at.y,at.width,at.height),kt===0&&(F.matrix.copy($.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ot===!0&&F.cameras.push($)}const bt=a.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const kt=h.getDepthInformation(yt[0]);kt&&kt.isValid&&kt.texture&&g.init(kt,a.renderState)}if(bt&&bt.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let kt=0;kt<yt.length;kt++){const K=yt[kt].camera;if(K){let at=f[K];at||(at=new SS,f[K]=at);const $=h.getCameraImage(K);at.sourceTexture=$}}}}for(let yt=0;yt<T.length;yt++){const Ot=R[yt],bt=T[yt];Ot!==null&&bt!==void 0&&bt.update(Ot,tt,c||r)}Nt&&Nt(Z,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),m=null}const ae=new zS;ae.setAnimationLoop($t),this.setAnimationLoop=function(Z){Nt=Z},this.dispose=function(){}}}const Ka=new ni,I2=new Se;function B2(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,dS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,v,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),y(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,v,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===yn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===yn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const v=t.get(f),_=v.envMap,x=v.envMapRotation;_&&(g.envMap.value=_,Ka.copy(x),Ka.x*=-1,Ka.y*=-1,Ka.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ka.y*=-1,Ka.z*=-1),g.envMapRotation.value.setFromMatrix4(I2.makeRotationFromEuler(Ka)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,v,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const v=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function F2(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function c(v,_){let x=a[v.id];x===void 0&&(m(v),x=u(v),a[v.id]=x,v.addEventListener("dispose",g));const T=_.program;i.updateUBOMapping(v,T);const R=t.render.frame;s[v.id]!==R&&(d(v),s[v.id]=R)}function u(v){const _=h();v.__bindingPointIndex=_;const x=e.createBuffer(),T=v.__size,R=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,T,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,x),x}function h(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=a[v.id],x=v.uniforms,T=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let R=0,A=x.length;R<A;R++){const D=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,b=D.length;M<b;M++){const U=D[M];if(p(U,R,M,T)===!0){const F=U.__offset,H=Array.isArray(U.value)?U.value:[U.value];let k=0;for(let q=0;q<H.length;q++){const L=H[q],I=y(L);typeof L=="number"||typeof L=="boolean"?(U.__data[0]=L,e.bufferSubData(e.UNIFORM_BUFFER,F+k,U.__data)):L.isMatrix3?(U.__data[0]=L.elements[0],U.__data[1]=L.elements[1],U.__data[2]=L.elements[2],U.__data[3]=0,U.__data[4]=L.elements[3],U.__data[5]=L.elements[4],U.__data[6]=L.elements[5],U.__data[7]=0,U.__data[8]=L.elements[6],U.__data[9]=L.elements[7],U.__data[10]=L.elements[8],U.__data[11]=0):(L.toArray(U.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,_,x,T){const R=v.value,A=_+"_"+x;if(T[A]===void 0)return typeof R=="number"||typeof R=="boolean"?T[A]=R:T[A]=R.clone(),!0;{const D=T[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return T[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function m(v){const _=v.uniforms;let x=0;const T=16;for(let A=0,D=_.length;A<D;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,U=M.length;b<U;b++){const F=M[b],H=Array.isArray(F.value)?F.value:[F.value];for(let k=0,q=H.length;k<q;k++){const L=H[k],I=y(L),G=x%T,nt=G%I.boundary,et=G+nt;x+=nt,et!==0&&T-et<I.storage&&(x+=T-et),F.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=I.storage}}}const R=x%T;return R>0&&(x+=T-R),v.__size=x,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):It("WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const x=r.indexOf(_.__bindingPointIndex);r.splice(x,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(const v in a)e.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const H2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function V2(){return mi===null&&(mi=new ZE(H2,16,16,Ur,sa),mi.name="DFG_LUT",mi.minFilter=ln,mi.magFilter=ln,mi.wrapS=Zi,mi.wrapT=Zi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class KC{constructor(t={}){const{canvas:n=sE(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=On}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;const y=p,g=new Set([tm,$p,Kp]),f=new Set([On,Ti,Wo,qo,Jp,Qp]),v=new Uint32Array(4),_=new Int32Array(4);let x=null,T=null;const R=[],A=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let b=!1;this._outputColorSpace=qn;let U=0,F=0,H=null,k=-1,q=null;const L=new Oe,I=new Oe;let G=null;const nt=new Vt(0);let et=0,lt=n.width,Bt=n.height,Nt=1,$t=null,ae=null;const Z=new Oe(0,0,lt,Bt),tt=new Oe(0,0,lt,Bt);let yt=!1;const Ot=new Lu;let bt=!1,ne=!1;const pe=new Se,kt=new N,K=new Oe,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function gt(){return H===null?Nt:1}let w=i;function Dt(E,z){return n.getContext(E,z)}try{const E={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zp}`),n.addEventListener("webglcontextlost",Xt,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",ce,!1),w===null){const z="webgl2";if(w=Dt(z,E),w===null)throw Dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ie("WebGLRenderer: "+E.message),E}let xt,Pt,ot,C,S,P,W,J,Y,Rt,ut,Tt,zt,it,dt,At,Ct,ht,jt,O,vt,rt,St,st;function Q(){xt=new V3(w),xt.init(),rt=new L2(w,xt),Pt=new L3(w,xt,t,rt),ot=new D2(w,xt),Pt.reversedDepthBuffer&&d&&ot.buffers.depth.setReversed(!0),C=new k3(w),S=new m2,P=new U2(w,xt,ot,S,Pt,rt,C),W=new O3(M),J=new H3(M),Y=new Z1(w),St=new D3(w,Y),Rt=new G3(w,Y,C,St),ut=new q3(w,Rt,Y,C),jt=new W3(w,Pt,P),At=new N3(S),Tt=new p2(M,W,J,xt,Pt,St,At),zt=new B2(M,S),it=new _2,dt=new b2(xt),ht=new w3(M,W,J,ot,ut,m,l),Ct=new C2(M,ut,Pt),st=new F2(w,C,Pt,ot),O=new U3(w,xt,C),vt=new X3(w,xt,C),C.programs=Tt.programs,M.capabilities=Pt,M.extensions=xt,M.properties=S,M.renderLists=it,M.shadowMap=Ct,M.state=ot,M.info=C}Q(),y!==On&&(D=new Z3(y,n.width,n.height,a,s));const ft=new z2(M,w);this.xr=ft,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const E=xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(E){E!==void 0&&(Nt=E,this.setSize(lt,Bt,!1))},this.getSize=function(E){return E.set(lt,Bt)},this.setSize=function(E,z,X=!0){if(ft.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=E,Bt=z,n.width=Math.floor(E*Nt),n.height=Math.floor(z*Nt),X===!0&&(n.style.width=E+"px",n.style.height=z+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(lt*Nt,Bt*Nt).floor()},this.setDrawingBufferSize=function(E,z,X){lt=E,Bt=z,Nt=X,n.width=Math.floor(E*X),n.height=Math.floor(z*X),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(y===On){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,z,X,V){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,z,X,V),ot.viewport(L.copy(Z).multiplyScalar(Nt).round())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,z,X,V){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,z,X,V),ot.scissor(I.copy(tt).multiplyScalar(Nt).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(E){ot.setScissorTest(yt=E)},this.setOpaqueSort=function(E){$t=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,X=!0){let V=0;if(E){let B=!1;if(H!==null){const pt=H.texture.format;B=g.has(pt)}if(B){const pt=H.texture.type,Mt=f.has(pt),_t=ht.getClearColor(),Et=ht.getClearAlpha(),wt=_t.r,Ft=_t.g,Ut=_t.b;Mt?(v[0]=wt,v[1]=Ft,v[2]=Ut,v[3]=Et,w.clearBufferuiv(w.COLOR,0,v)):(_[0]=wt,_[1]=Ft,_[2]=Ut,_[3]=Et,w.clearBufferiv(w.COLOR,0,_))}else V|=w.COLOR_BUFFER_BIT}z&&(V|=w.DEPTH_BUFFER_BIT),X&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Xt,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),ht.dispose(),it.dispose(),dt.dispose(),S.dispose(),W.dispose(),J.dispose(),ut.dispose(),St.dispose(),st.dispose(),Tt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",hm),ft.removeEventListener("sessionend",dm),ka.stop()};function Xt(E){E.preventDefault(),ou("WebGLRenderer: Context Lost."),b=!0}function ye(){ou("WebGLRenderer: Context Restored."),b=!1;const E=C.autoReset,z=Ct.enabled,X=Ct.autoUpdate,V=Ct.needsUpdate,B=Ct.type;Q(),C.autoReset=E,Ct.enabled=z,Ct.autoUpdate=X,Ct.needsUpdate=V,Ct.type=B}function ce(E){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function hi(E){const z=E.target;z.removeEventListener("dispose",hi),Di(z)}function Di(E){VS(E),S.remove(E)}function VS(E){const z=S.get(E).programs;z!==void 0&&(z.forEach(function(X){Tt.releaseProgram(X)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,X,V,B,pt){z===null&&(z=at);const Mt=B.isMesh&&B.matrixWorld.determinant()<0,_t=XS(E,z,X,V,B);ot.setMaterial(V,Mt);let Et=X.index,wt=1;if(V.wireframe===!0){if(Et=Rt.getWireframeAttribute(X),Et===void 0)return;wt=2}const Ft=X.drawRange,Ut=X.attributes.position;let Jt=Ft.start*wt,me=(Ft.start+Ft.count)*wt;pt!==null&&(Jt=Math.max(Jt,pt.start*wt),me=Math.min(me,(pt.start+pt.count)*wt)),Et!==null?(Jt=Math.max(Jt,0),me=Math.min(me,Et.count)):Ut!=null&&(Jt=Math.max(Jt,0),me=Math.min(me,Ut.count));const De=me-Jt;if(De<0||De===1/0)return;St.setup(B,V,_t,X,Et);let Ue,ve=O;if(Et!==null&&(Ue=Y.get(Et),ve=vt,ve.setIndex(Ue)),B.isMesh)V.wireframe===!0?(ot.setLineWidth(V.wireframeLinewidth*gt()),ve.setMode(w.LINES)):ve.setMode(w.TRIANGLES);else if(B.isLine){let Lt=V.linewidth;Lt===void 0&&(Lt=1),ot.setLineWidth(Lt*gt()),B.isLineSegments?ve.setMode(w.LINES):B.isLineLoop?ve.setMode(w.LINE_LOOP):ve.setMode(w.LINE_STRIP)}else B.isPoints?ve.setMode(w.POINTS):B.isSprite&&ve.setMode(w.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))ve.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Lt=B._multiDrawStarts,ue=B._multiDrawCounts,re=B._multiDrawCount,Tn=Et?Y.get(Et).bytesPerElement:1,ws=S.get(V).currentProgram.getUniforms();for(let An=0;An<re;An++)ws.setValue(w,"_gl_DrawID",An),ve.render(Lt[An]/Tn,ue[An])}else if(B.isInstancedMesh)ve.renderInstances(Jt,De,B.count);else if(X.isInstancedBufferGeometry){const Lt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ue=Math.min(X.instanceCount,Lt);ve.renderInstances(Jt,De,ue)}else ve.render(Jt,De)};function fm(E,z,X){E.transparent===!0&&E.side===Xi&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,gl(E,z,X),E.side=Va,E.needsUpdate=!0,gl(E,z,X),E.side=Xi):gl(E,z,X)}this.compile=function(E,z,X=null){X===null&&(X=E),T=dt.get(X),T.init(z),A.push(T),X.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),E!==X&&E.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights();const V=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pt=B.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){const _t=pt[Mt];fm(_t,X,B),V.add(_t)}else fm(pt,X,B),V.add(pt)}),T=A.pop(),V},this.compileAsync=function(E,z,X=null){const V=this.compile(E,z,X);return new Promise(B=>{function pt(){if(V.forEach(function(Mt){S.get(Mt).currentProgram.isReady()&&V.delete(Mt)}),V.size===0){B(E);return}setTimeout(pt,10)}xt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let zu=null;function GS(E){zu&&zu(E)}function hm(){ka.stop()}function dm(){ka.start()}const ka=new zS;ka.setAnimationLoop(GS),typeof self<"u"&&ka.setContext(self),this.setAnimationLoop=function(E){zu=E,ft.setAnimationLoop(E),E===null?ka.stop():ka.start()},ft.addEventListener("sessionstart",hm),ft.addEventListener("sessionend",dm),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const X=ft.enabled===!0&&ft.isPresenting===!0,V=D!==null&&(H===null||X)&&D.begin(M,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(z),z=ft.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,z,H),T=dt.get(E,A.length),T.init(z),A.push(T),pe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ot.setFromProjectionMatrix(pe,ui,z.reversedDepth),ne=this.localClippingEnabled,bt=At.init(this.clippingPlanes,ne),x=it.get(E,R.length),x.init(),R.push(x),ft.enabled===!0&&ft.isPresenting===!0){const Mt=M.xr.getDepthSensingMesh();Mt!==null&&Iu(Mt,z,-1/0,M.sortObjects)}Iu(E,z,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort($t,ae),$=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,$&&ht.addToRenderList(x,E),this.info.render.frame++,bt===!0&&At.beginShadows();const B=T.state.shadowsArray;if(Ct.render(B,E,z),bt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&D.hasRenderPass())===!1){const Mt=x.opaque,_t=x.transmissive;if(T.setupLights(),z.isArrayCamera){const Et=z.cameras;if(_t.length>0)for(let wt=0,Ft=Et.length;wt<Ft;wt++){const Ut=Et[wt];mm(Mt,_t,E,Ut)}$&&ht.render(E);for(let wt=0,Ft=Et.length;wt<Ft;wt++){const Ut=Et[wt];pm(x,E,Ut,Ut.viewport)}}else _t.length>0&&mm(Mt,_t,E,z),$&&ht.render(E),pm(x,E,z)}H!==null&&F===0&&(P.updateMultisampleRenderTarget(H),P.updateRenderTargetMipmap(H)),V&&D.end(M),E.isScene===!0&&E.onAfterRender(M,E,z),St.resetDefaultState(),k=-1,q=null,A.pop(),A.length>0?(T=A[A.length-1],bt===!0&&At.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?x=R[R.length-1]:x=null};function Iu(E,z,X,V){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ot.intersectsSprite(E)){V&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const Mt=ut.update(E),_t=E.material;_t.visible&&x.push(E,Mt,_t,X,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ot.intersectsObject(E))){const Mt=ut.update(E),_t=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),K.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),K.copy(Mt.boundingSphere.center)),K.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(_t)){const Et=Mt.groups;for(let wt=0,Ft=Et.length;wt<Ft;wt++){const Ut=Et[wt],Jt=_t[Ut.materialIndex];Jt&&Jt.visible&&x.push(E,Mt,Jt,X,K.z,Ut)}}else _t.visible&&x.push(E,Mt,_t,X,K.z,null)}}const pt=E.children;for(let Mt=0,_t=pt.length;Mt<_t;Mt++)Iu(pt[Mt],z,X,V)}function pm(E,z,X,V){const{opaque:B,transmissive:pt,transparent:Mt}=E;T.setupLightsView(X),bt===!0&&At.setGlobalState(M.clippingPlanes,X),V&&ot.viewport(L.copy(V)),B.length>0&&ml(B,z,X),pt.length>0&&ml(pt,z,X),Mt.length>0&&ml(Mt,z,X),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function mm(E,z,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Jt=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Ei(1,1,{generateMipmaps:!0,type:Jt?sa:On,minFilter:rs,samples:Pt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace})}const pt=T.state.transmissionRenderTarget[V.id],Mt=V.viewport||L;pt.setSize(Mt.z*M.transmissionResolutionScale,Mt.w*M.transmissionResolutionScale);const _t=M.getRenderTarget(),Et=M.getActiveCubeFace(),wt=M.getActiveMipmapLevel();M.setRenderTarget(pt),M.getClearColor(nt),et=M.getClearAlpha(),et<1&&M.setClearColor(16777215,.5),M.clear(),$&&ht.render(X);const Ft=M.toneMapping;M.toneMapping=Mi;const Ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),bt===!0&&At.setGlobalState(M.clippingPlanes,V),ml(E,X,V),P.updateMultisampleRenderTarget(pt),P.updateRenderTargetMipmap(pt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let me=0,De=z.length;me<De;me++){const Ue=z[me],{object:ve,geometry:Lt,material:ue,group:re}=Ue;if(ue.side===Xi&&ve.layers.test(V.layers)){const Tn=ue.side;ue.side=yn,ue.needsUpdate=!0,gm(ve,X,V,Lt,ue,re),ue.side=Tn,ue.needsUpdate=!0,Jt=!0}}Jt===!0&&(P.updateMultisampleRenderTarget(pt),P.updateRenderTargetMipmap(pt))}M.setRenderTarget(_t,Et,wt),M.setClearColor(nt,et),Ut!==void 0&&(V.viewport=Ut),M.toneMapping=Ft}function ml(E,z,X){const V=z.isScene===!0?z.overrideMaterial:null;for(let B=0,pt=E.length;B<pt;B++){const Mt=E[B],{object:_t,geometry:Et,group:wt}=Mt;let Ft=Mt.material;Ft.allowOverride===!0&&V!==null&&(Ft=V),_t.layers.test(X.layers)&&gm(_t,z,X,Et,Ft,wt)}}function gm(E,z,X,V,B,pt){E.onBeforeRender(M,z,X,V,B,pt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(M,z,X,V,E,pt),B.transparent===!0&&B.side===Xi&&B.forceSinglePass===!1?(B.side=yn,B.needsUpdate=!0,M.renderBufferDirect(X,z,V,B,E,pt),B.side=Va,B.needsUpdate=!0,M.renderBufferDirect(X,z,V,B,E,pt),B.side=Xi):M.renderBufferDirect(X,z,V,B,E,pt),E.onAfterRender(M,z,X,V,B,pt)}function gl(E,z,X){z.isScene!==!0&&(z=at);const V=S.get(E),B=T.state.lights,pt=T.state.shadowsArray,Mt=B.state.version,_t=Tt.getParameters(E,B.state,pt,z,X),Et=Tt.getProgramCacheKey(_t);let wt=V.programs;V.environment=E.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(E.isMeshStandardMaterial?J:W).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,wt===void 0&&(E.addEventListener("dispose",hi),wt=new Map,V.programs=wt);let Ft=wt.get(Et);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===Mt)return vm(E,_t),Ft}else _t.uniforms=Tt.getUniforms(E),E.onBeforeCompile(_t,M),Ft=Tt.acquireProgram(_t,Et),wt.set(Et,Ft),V.uniforms=_t.uniforms;const Ut=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=At.uniform),vm(E,_t),V.needsLights=WS(E),V.lightsStateVersion=Mt,V.needsLights&&(Ut.ambientLightColor.value=B.state.ambient,Ut.lightProbe.value=B.state.probe,Ut.directionalLights.value=B.state.directional,Ut.directionalLightShadows.value=B.state.directionalShadow,Ut.spotLights.value=B.state.spot,Ut.spotLightShadows.value=B.state.spotShadow,Ut.rectAreaLights.value=B.state.rectArea,Ut.ltc_1.value=B.state.rectAreaLTC1,Ut.ltc_2.value=B.state.rectAreaLTC2,Ut.pointLights.value=B.state.point,Ut.pointLightShadows.value=B.state.pointShadow,Ut.hemisphereLights.value=B.state.hemi,Ut.directionalShadowMap.value=B.state.directionalShadowMap,Ut.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ut.spotShadowMap.value=B.state.spotShadowMap,Ut.spotLightMatrix.value=B.state.spotLightMatrix,Ut.spotLightMap.value=B.state.spotLightMap,Ut.pointShadowMap.value=B.state.pointShadowMap,Ut.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function _m(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=wc.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function vm(E,z){const X=S.get(E);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function XS(E,z,X,V,B){z.isScene!==!0&&(z=at),P.resetTextureUnits();const pt=z.fog,Mt=V.isMeshStandardMaterial?z.environment:null,_t=H===null?M.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Lr,Et=(V.isMeshStandardMaterial?J:W).get(V.envMap||Mt),wt=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ft=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ut=!!X.morphAttributes.position,Jt=!!X.morphAttributes.normal,me=!!X.morphAttributes.color;let De=Mi;V.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(De=M.toneMapping);const Ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=Ue!==void 0?Ue.length:0,Lt=S.get(V),ue=T.state.lights;if(bt===!0&&(ne===!0||E!==q)){const cn=E===q&&V.id===k;At.setState(V,E,cn)}let re=!1;V.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ue.state.version||Lt.outputColorSpace!==_t||B.isBatchedMesh&&Lt.batching===!1||!B.isBatchedMesh&&Lt.batching===!0||B.isBatchedMesh&&Lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Lt.instancing===!1||!B.isInstancedMesh&&Lt.instancing===!0||B.isSkinnedMesh&&Lt.skinning===!1||!B.isSkinnedMesh&&Lt.skinning===!0||B.isInstancedMesh&&Lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Lt.instancingMorph===!1&&B.morphTexture!==null||Lt.envMap!==Et||V.fog===!0&&Lt.fog!==pt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==At.numPlanes||Lt.numIntersection!==At.numIntersection)||Lt.vertexAlphas!==wt||Lt.vertexTangents!==Ft||Lt.morphTargets!==Ut||Lt.morphNormals!==Jt||Lt.morphColors!==me||Lt.toneMapping!==De||Lt.morphTargetsCount!==ve)&&(re=!0):(re=!0,Lt.__version=V.version);let Tn=Lt.currentProgram;re===!0&&(Tn=gl(V,z,B));let ws=!1,An=!1,kr=!1;const Me=Tn.getUniforms(),pn=Lt.uniforms;if(ot.useProgram(Tn.program)&&(ws=!0,An=!0,kr=!0),V.id!==k&&(k=V.id,An=!0),ws||q!==E){ot.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Me.setValue(w,"projectionMatrix",E.projectionMatrix),Me.setValue(w,"viewMatrix",E.matrixWorldInverse);const mn=Me.map.cameraPosition;mn!==void 0&&mn.setValue(w,kt.setFromMatrixPosition(E.matrixWorld)),Pt.logarithmicDepthBuffer&&Me.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Me.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),q!==E&&(q=E,An=!0,kr=!0)}if(Lt.needsLights&&(ue.state.directionalShadowMap.length>0&&Me.setValue(w,"directionalShadowMap",ue.state.directionalShadowMap,P),ue.state.spotShadowMap.length>0&&Me.setValue(w,"spotShadowMap",ue.state.spotShadowMap,P),ue.state.pointShadowMap.length>0&&Me.setValue(w,"pointShadowMap",ue.state.pointShadowMap,P)),B.isSkinnedMesh){Me.setOptional(w,B,"bindMatrix"),Me.setOptional(w,B,"bindMatrixInverse");const cn=B.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Me.setValue(w,"boneTexture",cn.boneTexture,P))}B.isBatchedMesh&&(Me.setOptional(w,B,"batchingTexture"),Me.setValue(w,"batchingTexture",B._matricesTexture,P),Me.setOptional(w,B,"batchingIdTexture"),Me.setValue(w,"batchingIdTexture",B._indirectTexture,P),Me.setOptional(w,B,"batchingColorTexture"),B._colorsTexture!==null&&Me.setValue(w,"batchingColorTexture",B._colorsTexture,P));const Xn=X.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&jt.update(B,X,Tn),(An||Lt.receiveShadow!==B.receiveShadow)&&(Lt.receiveShadow=B.receiveShadow,Me.setValue(w,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(pn.envMap.value=Et,pn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&z.environment!==null&&(pn.envMapIntensity.value=z.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=V2()),An&&(Me.setValue(w,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&kS(pn,kr),pt&&V.fog===!0&&zt.refreshFogUniforms(pn,pt),zt.refreshMaterialUniforms(pn,V,Nt,Bt,T.state.transmissionRenderTarget[E.id]),wc.upload(w,_m(Lt),pn,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(wc.upload(w,_m(Lt),pn,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Me.setValue(w,"center",B.center),Me.setValue(w,"modelViewMatrix",B.modelViewMatrix),Me.setValue(w,"normalMatrix",B.normalMatrix),Me.setValue(w,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const cn=V.uniformsGroups;for(let mn=0,Bu=cn.length;mn<Bu;mn++){const Wa=cn[mn];st.update(Wa,Tn),st.bind(Wa,Tn)}}return Tn}function kS(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function WS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,z,X){const V=S.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),S.get(E.texture).__webglTexture=z,S.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const X=S.get(E);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0};const qS=w.createFramebuffer();this.setRenderTarget=function(E,z=0,X=0){H=E,U=z,F=X;let V=null,B=!1,pt=!1;if(E){const _t=S.get(E);if(_t.__useDefaultFramebuffer!==void 0){ot.bindFramebuffer(w.FRAMEBUFFER,_t.__webglFramebuffer),L.copy(E.viewport),I.copy(E.scissor),G=E.scissorTest,ot.viewport(L),ot.scissor(I),ot.setScissorTest(G),k=-1;return}else if(_t.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(_t.__hasExternalTextures)P.rebindTextures(E,S.get(E.texture).__webglTexture,S.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ft=E.depthTexture;if(_t.__boundDepthTexture!==Ft){if(Ft!==null&&S.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(pt=!0);const wt=S.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[z])?V=wt[z][X]:V=wt[z],B=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?V=S.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?V=wt[X]:V=wt,L.copy(E.viewport),I.copy(E.scissor),G=E.scissorTest}else L.copy(Z).multiplyScalar(Nt).floor(),I.copy(tt).multiplyScalar(Nt).floor(),G=yt;if(X!==0&&(V=qS),ot.bindFramebuffer(w.FRAMEBUFFER,V)&&ot.drawBuffers(E,V),ot.viewport(L),ot.scissor(I),ot.setScissorTest(G),B){const _t=S.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+z,_t.__webglTexture,X)}else if(pt){const _t=z;for(let Et=0;Et<E.textures.length;Et++){const wt=S.get(E.textures[Et]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Et,wt.__webglTexture,X,_t)}}else if(E!==null&&X!==0){const _t=S.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,_t.__webglTexture,X)}k=-1},this.readRenderTargetPixels=function(E,z,X,V,B,pt,Mt,_t=0){if(!(E&&E.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){ot.bindFramebuffer(w.FRAMEBUFFER,Et);try{const wt=E.textures[_t],Ft=wt.format,Ut=wt.type;if(!Pt.textureFormatReadable(Ft)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Ut)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-V&&X>=0&&X<=E.height-B&&(E.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+_t),w.readPixels(z,X,V,B,rt.convert(Ft),rt.convert(Ut),pt))}finally{const wt=H!==null?S.get(H).__webglFramebuffer:null;ot.bindFramebuffer(w.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,z,X,V,B,pt,Mt,_t=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et)if(z>=0&&z<=E.width-V&&X>=0&&X<=E.height-B){ot.bindFramebuffer(w.FRAMEBUFFER,Et);const wt=E.textures[_t],Ft=wt.format,Ut=wt.type;if(!Pt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Jt),w.bufferData(w.PIXEL_PACK_BUFFER,pt.byteLength,w.STREAM_READ),E.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+_t),w.readPixels(z,X,V,B,rt.convert(Ft),rt.convert(Ut),0);const me=H!==null?S.get(H).__webglFramebuffer:null;ot.bindFramebuffer(w.FRAMEBUFFER,me);const De=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await rE(w,De,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Jt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,pt),w.deleteBuffer(Jt),w.deleteSync(De),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,X=0){const V=Math.pow(2,-X),B=Math.floor(E.image.width*V),pt=Math.floor(E.image.height*V),Mt=z!==null?z.x:0,_t=z!==null?z.y:0;P.setTexture2D(E,0),w.copyTexSubImage2D(w.TEXTURE_2D,X,0,0,Mt,_t,B,pt),ot.unbindTexture()};const YS=w.createFramebuffer(),ZS=w.createFramebuffer();this.copyTextureToTexture=function(E,z,X=null,V=null,B=0,pt=null){pt===null&&(B!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=B,B=0):pt=0);let Mt,_t,Et,wt,Ft,Ut,Jt,me,De;const Ue=E.isCompressedTexture?E.mipmaps[pt]:E.image;if(X!==null)Mt=X.max.x-X.min.x,_t=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,wt=X.min.x,Ft=X.min.y,Ut=X.isBox3?X.min.z:0;else{const Xn=Math.pow(2,-B);Mt=Math.floor(Ue.width*Xn),_t=Math.floor(Ue.height*Xn),E.isDataArrayTexture?Et=Ue.depth:E.isData3DTexture?Et=Math.floor(Ue.depth*Xn):Et=1,wt=0,Ft=0,Ut=0}V!==null?(Jt=V.x,me=V.y,De=V.z):(Jt=0,me=0,De=0);const ve=rt.convert(z.format),Lt=rt.convert(z.type);let ue;z.isData3DTexture?(P.setTexture3D(z,0),ue=w.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),ue=w.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),ue=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,z.unpackAlignment);const re=w.getParameter(w.UNPACK_ROW_LENGTH),Tn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ws=w.getParameter(w.UNPACK_SKIP_PIXELS),An=w.getParameter(w.UNPACK_SKIP_ROWS),kr=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ue.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ue.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ft),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ut);const Me=E.isDataArrayTexture||E.isData3DTexture,pn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Xn=S.get(E),cn=S.get(z),mn=S.get(Xn.__renderTarget),Bu=S.get(cn.__renderTarget);ot.bindFramebuffer(w.READ_FRAMEBUFFER,mn.__webglFramebuffer),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,Bu.__webglFramebuffer);for(let Wa=0;Wa<Et;Wa++)Me&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,S.get(E).__webglTexture,B,Ut+Wa),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,S.get(z).__webglTexture,pt,De+Wa)),w.blitFramebuffer(wt,Ft,Mt,_t,Jt,me,Mt,_t,w.DEPTH_BUFFER_BIT,w.NEAREST);ot.bindFramebuffer(w.READ_FRAMEBUFFER,null),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||S.has(E)){const Xn=S.get(E),cn=S.get(z);ot.bindFramebuffer(w.READ_FRAMEBUFFER,YS),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,ZS);for(let mn=0;mn<Et;mn++)Me?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Xn.__webglTexture,B,Ut+mn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Xn.__webglTexture,B),pn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,cn.__webglTexture,pt,De+mn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,cn.__webglTexture,pt),B!==0?w.blitFramebuffer(wt,Ft,Mt,_t,Jt,me,Mt,_t,w.COLOR_BUFFER_BIT,w.NEAREST):pn?w.copyTexSubImage3D(ue,pt,Jt,me,De+mn,wt,Ft,Mt,_t):w.copyTexSubImage2D(ue,pt,Jt,me,wt,Ft,Mt,_t);ot.bindFramebuffer(w.READ_FRAMEBUFFER,null),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else pn?E.isDataTexture||E.isData3DTexture?w.texSubImage3D(ue,pt,Jt,me,De,Mt,_t,Et,ve,Lt,Ue.data):z.isCompressedArrayTexture?w.compressedTexSubImage3D(ue,pt,Jt,me,De,Mt,_t,Et,ve,Ue.data):w.texSubImage3D(ue,pt,Jt,me,De,Mt,_t,Et,ve,Lt,Ue):E.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,pt,Jt,me,Mt,_t,ve,Lt,Ue.data):E.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,pt,Jt,me,Ue.width,Ue.height,ve,Ue.data):w.texSubImage2D(w.TEXTURE_2D,pt,Jt,me,Mt,_t,ve,Lt,Ue);w.pixelStorei(w.UNPACK_ROW_LENGTH,re),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Tn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ws),w.pixelStorei(w.UNPACK_SKIP_ROWS,An),w.pixelStorei(w.UNPACK_SKIP_IMAGES,kr),pt===0&&z.generateMipmaps&&w.generateMipmap(ue),ot.unbindTexture()},this.initRenderTarget=function(E){S.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),ot.unbindTexture()},this.resetState=function(){U=0,F=0,H=null,ot.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),n.unpackColorSpace=se._getUnpackColorSpace()}}function $g(){return $g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},$g.apply(null,arguments)}export{Rs as $,BC as A,Ke as B,pS as C,Xi as D,VC as E,Lu as F,Jl as G,sa as H,bC as I,IC as J,XC as K,ln as L,Se as M,Mi as N,Ie as O,bc as P,qx as Q,RE as R,NS as S,zC as T,Yx as U,ct as V,ui as W,Zx as X,jx as Y,Qx as Z,Kx as _,N as a,Ib as a$,AC as a0,jo as a1,um as a2,En as a3,Vt as a4,Ln as a5,k1 as a6,Nu as a7,On as a8,qo as a9,rs as aA,Mf as aB,Ll as aC,Jb as aD,ke as aE,iE as aF,nE as aG,nm as aH,eE as aI,em as aJ,tE as aK,aE as aL,$b as aM,su as aN,ya as aO,Si as aP,wg as aQ,Lb as aR,Ub as aS,Hb as aT,Gb as aU,td as aV,Bb as aW,Fb as aX,Vb as aY,Xb as aZ,$h as a_,Ti as aa,os as ab,ra as ac,Db as ad,as as ae,Pb as af,MS as ag,fl as ah,Xf as ai,ld as aj,cd as ak,Du as al,mS as am,sn as an,gC as ao,fe as ap,Yt as aq,is as ar,Zp as as,ru as at,sE as au,vC as av,jp as aw,fd as ax,Zi as ay,ud as az,oa as b,Gd as b$,zb as b0,Rb as b1,X0 as b2,Cb as b3,Ki as b4,q0 as b5,W0 as b6,k0 as b7,gr as b8,od as b9,dd as bA,pd as bB,md as bC,gd as bD,_d as bE,vd as bF,xd as bG,Sd as bH,yd as bI,Md as bJ,bd as bK,Ed as bL,Td as bM,Ad as bN,Rd as bO,Cd as bP,wd as bQ,Dd as bR,Ud as bS,Ld as bT,Nd as bU,Od as bV,Pd as bW,zd as bX,Id as bY,Hd as bZ,Vd as b_,rd as ba,sd as bb,ad as bc,wr as bd,id as be,nd as bf,ed as bg,Jp as bh,Qp as bi,nS as bj,iS as bk,tS as bl,eS as bm,Wo as bn,aS as bo,sS as bp,rS as bq,Kp as br,Ur as bs,$p as bt,tm as bu,Ec as bv,Tc as bw,Ac as bx,Rc as by,hd as bz,uS as c,ou as c$,Xd as c0,ZE as c1,DC as c2,O1 as c3,wC as c4,UC as c5,LC as c6,OC as c7,xS as c8,PC as c9,Nb as cA,SC as cB,j2 as cC,jb as cD,Zb as cE,wu as cF,Y2 as cG,t1 as cH,tC as cI,$x as cJ,ni as cK,gS as cL,pl as cM,WE as cN,uo as cO,dl as cP,xs as cQ,Dr as cR,As as cS,$2 as cT,eC as cU,Kb as cV,qC as cW,kd as cX,lS as cY,Lr as cZ,Z2 as c_,$E as ca,MC as cb,CC as cc,Nr as cd,hS as ce,fS as cf,oS as cg,PS as ch,xC as ci,pC as cj,dC as ck,mC as cl,fC as cm,hC as cn,uC as co,Y0 as cp,cC as cq,oC as cr,rC as cs,sC as ct,aC as cu,lC as cv,iC as cw,nC as cx,Ls as cy,Ob as cz,NC as d,kC as d0,RC as d1,hl as d2,Ai as d3,gi as d4,GE as d5,mt as d6,jC as d7,LS as d8,JC as d9,KE as da,TC as db,yS as dc,EC as dd,OS as de,u1 as df,wi as dg,Zt as dh,QC as di,W2 as dj,q2 as dk,ZC as dl,Uu as dm,Ei as dn,WC as dp,$g as dq,KC as dr,YC as ds,X2 as dt,k2 as du,qn as e,Ee as f,Hn as g,YE as h,_S as i,J2 as j,K2 as k,Q2 as l,yC as m,Zo as n,ie as o,se as p,ci as q,Oe as r,vS as s,yn as t,Va as u,_C as v,It as w,FC as x,HC as y,GC as z};
