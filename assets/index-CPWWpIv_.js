import{S as B,c as G,b as H,dt as i,df as Z,a as Q,du as W}from"./vendor-three-Cd3Jw7uJ.js";import{r as d}from"./vendor-react-OXzYy3Vh.js";import{G as X,g as tt}from"./vendor-globe-D_NarD-h.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();function et(e,t,o=0){const n=(90-e)*Math.PI/180,a=(90-t)*Math.PI/180,s=100*(1+o),c=Math.sin(n);return new Q(s*c*Math.cos(a),s*Math.cos(n),s*c*Math.sin(a))}function ot(e,t,o,r){const n=l=>l*Math.PI/180,a=n(t),s=n(r),c=n(e),h=n(o);return Math.acos(Math.max(-1,Math.min(1,Math.sin(a)*Math.sin(s)+Math.cos(a)*Math.cos(s)*Math.cos(h-c))))}function nt(e,t,o,r,n=.5){const a=[t,e],s=[r,o],h=ot(t,e,r,o)/2*n,l=tt(a,s),u=0,g=0,f=(v,A)=>A+(A-v)*(v<A?.5:.25),m=l(.25),b=l(.75),x=f(u,h),p=f(g,h),y=(v,A,j)=>et(A,v,j),k=y(t,e,u),w=y(m[0],m[1],x),L=y(b[0],b[1],p),R=y(r,o,g);return new Z(k,w,L,R)}const at=({arcsData:e=[],commitArcs:t=[],pointsData:o=[],ringsData:r=[]})=>{const n=d.useRef(),a=d.useRef([]),s=d.useRef();return d.useEffect(()=>{n.current&&(n.current.controls().autoRotate=!0,n.current.controls().autoRotateSpeed=.5,n.current.pointOfView({lat:20,lng:0,altitude:2.5}))},[]),d.useEffect(()=>{if(!n.current)return;const c=n.current.scene();a.current.forEach(l=>{var u,g;c.remove(l),(u=l.geometry)==null||u.dispose(),(g=l.material)==null||g.dispose()}),a.current=[],t.forEach((l,u)=>{const g=nt(l.startLat,l.startLng,l.endLat,l.endLng,.5),f=Math.min(l.ballCount||3,5);for(let m=0;m<f;m++){const b=new B(.8,16,16),x=new G({color:"#39d353",transparent:!0,opacity:.9}),p=new H(b,x),y=new B(1.2,16,16),k=new G({color:"#26a641",transparent:!0,opacity:.3}),w=new H(y,k);p.add(w),p.userData={curve:g,offset:m/f,speed:l.speed||15e-5+Math.random()*1e-4},c.add(p),a.current.push(p)}});const h=()=>{const l=Date.now();a.current.forEach(u=>{const{curve:g,offset:f,speed:m}=u.userData,b=(l*m+f)%1,x=g.getPoint(b);u.position.copy(x)}),s.current=requestAnimationFrame(h)};return t.length>0&&h(),()=>{s.current&&cancelAnimationFrame(s.current)}},[t]),i.jsx(X,{ref:n,globeImageUrl:"//unpkg.com/three-globe/example/img/earth-night.jpg",bumpImageUrl:"//unpkg.com/three-globe/example/img/earth-topology.png",backgroundImageUrl:"//unpkg.com/three-globe/example/img/night-sky.png",atmosphereColor:"#3a228a",atmosphereAltitude:.25,arcsData:e,arcColor:c=>c.color||"#ff5c00",arcStroke:.5,arcAltitudeAutoScale:.5,pointsData:o,pointColor:c=>c.color||"#3d444d",pointAltitude:c=>c.altitude||.1,pointRadius:c=>c.size||.5,ringsData:r,ringColor:()=>"#26a641",ringMaxRadius:5,ringPropagationSpeed:2,ringRepeatPeriod:1e3})};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),st=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,r)=>r?r.toUpperCase():o.toLowerCase()),q=e=>{const t=st(e);return t.charAt(0).toUpperCase()+t.slice(1)},V=(...e)=>e.filter((t,o,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===o).join(" ").trim(),it=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ct={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=d.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:n="",children:a,iconNode:s,...c},h)=>d.createElement("svg",{ref:h,...ct,width:t,height:t,stroke:e,strokeWidth:r?Number(o)*24/Number(t):o,className:V("lucide",n),...!a&&!it(c)&&{"aria-hidden":"true"},...c},[...s.map(([l,u])=>d.createElement(l,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(e,t)=>{const o=d.forwardRef(({className:r,...n},a)=>d.createElement(lt,{ref:a,iconNode:t,className:V(`lucide-${rt(q(e))}`,`lucide-${e}`,r),...n}));return o.displayName=q(e),o};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],dt=pt("log-out",ut),ht=({onSearch:e,isLoading:t,processedCount:o,totalCount:r})=>{const[n,a]=d.useState(localStorage.getItem("github_token")||""),[s,c]=d.useState(localStorage.getItem("github_username")||""),[h,l]=d.useState(!1);d.useEffect(()=>{const b=new URLSearchParams(window.location.search).get("code");if(b){const x="https://fabxdysznpwdjifermqs.supabase.co/functions/v1/github-auth";l(!0),fetch(x,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:b})}).then(p=>p.json()).then(p=>{p.access_token?(a(p.access_token),localStorage.setItem("github_token",p.access_token),p.login&&(c(p.login),localStorage.setItem("github_username",p.login)),window.history.replaceState({},document.title,window.location.pathname),e&&p.login&&e(p.login,p.access_token)):console.error("Auth failed:",p)}).catch(p=>console.error("Auth error:",p)).finally(()=>l(!1))}},[e]);const u=()=>{const m="Iv23lieHicqJZy5tcE9L";window.location.href=`https://github.com/login/oauth/authorize?client_id=${m}&scope=read:user`},g=()=>{e&&s&&e(s,n)},f=()=>{a(""),localStorage.removeItem("github_token"),localStorage.removeItem("github_username")};return i.jsxs("div",{className:"overlay-container",children:[i.jsxs("div",{className:"overlay-top-bar",children:[i.jsx("div",{className:"overlay-header",children:i.jsx("h1",{className:"overlay-title",children:"CommitCampfire"})}),i.jsx("div",{className:"overlay-actions",children:n?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"overlay-profile",children:[i.jsx("img",{src:`https://github.com/${s}.png`,className:"overlay-avatar",alt:"avatar"}),i.jsx("span",{className:"overlay-username",children:s}),i.jsx(dt,{size:14,className:"overlay-logout hover-white",onClick:f})]}),i.jsx("button",{className:"overlay-sync-btn",style:{opacity:t?.7:1},onClick:g,disabled:t,children:t?"Syncing...":"Sync"})]}):i.jsx("button",{className:"overlay-auth-btn",style:{opacity:h?.7:1},onClick:u,disabled:h,children:h?"Connecting...":i.jsxs(i.Fragment,{children:[i.jsx("img",{src:"/CommitCampfire/github-mark.svg",style:{width:18,height:18},alt:"GitHub"}),i.jsx("span",{children:"Login with GitHub"})]})})})]}),t&&i.jsxs("div",{className:"overlay-loading",children:[i.jsx("div",{className:"pulse-dot"}),"Kindling Fire ",r>0?`(${o}/${r})`:"","..."]}),i.jsxs("a",{href:"https://github.com/HearSilent",target:"_blank",rel:"noopener noreferrer",className:"overlay-footer hover-white",children:[i.jsx("img",{src:"https://github.com/HearSilent.png",className:"overlay-footer-avatar",alt:"HearSilent"}),"Built by @HearSilent"]}),i.jsx("style",{children:`
                .overlay-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 100;
                    font-family: system-ui, -apple-system, sans-serif;
                }

                .overlay-top-bar {
                    position: absolute;
                    top: calc(21px + env(safe-area-inset-top));
                    left: 24px;
                    right: 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    pointer-events: none;
                }

                .overlay-header {
                    pointer-events: auto;
                }

                .overlay-title {
                    margin: 0;
                    font-size: 30px;
                    font-weight: bold;
                    color: #ff5c00;
                    font-family: 'Malvides', sans-serif;
                    letter-spacing: 2px;
                    text-shadow: 0 0 10px rgba(255, 64, 129, 0.5);
                    line-height: 1;
                    transform: translateY(4px);
                }

                .overlay-actions {
                    pointer-events: auto;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .overlay-auth-btn {
                    background: white;
                    color: black;
                    border: none;
                    border-radius: 12px;
                    padding: 10px 20px;
                    font-weight: bold;
                    font-size: 14px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.2s ease;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                }

                .overlay-sync-btn {
                    background: linear-gradient(45deg, #1b4721, #46954a);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    padding: 10px 20px;
                    font-weight: bold;
                    font-size: 14px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.2s ease;
                    box-shadow: 0 4px 15px rgba(35, 134, 54, 0.3);
                }

                .overlay-profile {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(0, 0, 0, 0.6);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 6px 12px 6px 6px;
                }

                .overlay-avatar {
                    width: 28px;
                    height: 28px;
                    border-radius: 8px;
                    border: 1.5px solid #238636;
                }

                .overlay-username {
                    color: white;
                    font-size: 13px;
                    font-weight: bold;
                }

                .overlay-logout {
                    color: #888;
                    cursor: pointer;
                    margin-left: 4px;
                }

                .overlay-loading {
                    position: absolute;
                    bottom: calc(40px + env(safe-area-inset-bottom));
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0,0,0,0.7);
                    backdrop-filter: blur(10px);
                    padding: 12px 24px;
                    border-radius: 30px;
                    border: 1px solid rgba(255, 64, 129, 0.3);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: white;
                    font-size: 13px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    pointer-events: auto;
                    white-space: nowrap;
                }

                .overlay-footer {
                    position: absolute;
                    bottom: calc(24px + env(safe-area-inset-bottom));
                    right: 24px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 14px;
                    font-weight: 500;
                    pointer-events: auto;
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .overlay-footer-avatar {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .pulse-dot {
                    width: 8px;
                    height: 8px;
                    background: #ff4081;
                    border-radius: 50%;
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
                .hover-white:hover { color: white !important; }

                /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    .overlay-top-bar {
                        top: calc(16px + env(safe-area-inset-top));
                        left: 16px;
                        right: 16px;
                        flex-direction: row; /* Force row layout */
                        align-items: center;
                        gap: 12px;
                    }

                    .overlay-title {
                        font-size: 20px; /* Reduce size to fit on one line */
                        white-space: nowrap;
                    }

                    .overlay-actions {
                        width: auto; /* Allow it to shrink/grow as needed, don't force full width */
                        justify-content: flex-end;
                        flex-shrink: 0; /* Prevent buttons from squishing effectively, but title shrinks first */
                    }

                    .overlay-auth-btn {
                        padding: 8px 12px; /* Smaller padding on mobile */
                        font-size: 13px;
                    }

                    .overlay-auth-btn span {
                        display: none; /* Hide text on mobile to save space */
                    }
                    
                    .overlay-loading {
                        bottom: calc(80px + env(safe-area-inset-bottom));
                        width: auto; /* Auto width based on content */
                        min-width: 200px; /* Min width for stability */
                        justify-content: center;
                        font-size: 12px;
                    }

                    .overlay-footer {
                        bottom: calc(20px + env(safe-area-inset-bottom)); /* More clearance */
                        right: auto; /* Reset right positioning */
                        left: 50%; /* Center horizontally */
                        transform: translateX(-50%);
                        width: auto;
                        justify-content: center;
                        white-space: nowrap;
                    }
                }
            `})]})},P="https://api.github.com",gt=async(e,t)=>{let o=[],r=1;const n=t?{Authorization:`token ${t}`}:{};try{for(;o.length<1e3;){const a=await fetch(`${P}/users/${e}/following?per_page=100&page=${r}`,{headers:n});if(!a.ok)break;const s=await a.json();if(!s||s.length===0||(o=[...o,...s],s.length<100))break;r++}return o.slice(0,1e3)}catch(a){return console.error(a),o}},mt=async(e,t,o,r)=>{var a,s,c;if(!t)return 0;const n=`
      query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
          }
        }
      }
    `;try{const h=await fetch("https://api.github.com/graphql",{method:"POST",headers:{Authorization:`bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({query:n,variables:{login:e,from:o,to:r}})});return h.ok&&((c=(s=(a=(await h.json()).data)==null?void 0:a.user)==null?void 0:s.contributionsCollection)==null?void 0:c.totalCommitContributions)||0}catch(h){return console.error("GraphQL Fetch Error:",h),0}},ft=async(e,t)=>{const o=new Date,r=new Date(o);r.setDate(o.getDate()-3);const n=u=>{const g=u.getFullYear(),f=String(u.getMonth()+1).padStart(2,"0"),m=String(u.getDate()).padStart(2,"0");return`${g}-${f}-${m}`},a=n(r),s=n(o),c=`${a}T00:00:00Z`,h=o.toISOString();if(t)try{return await mt(e,t,c,h)}catch(u){console.warn(`GraphQL fetch failed for ${e}, falling back to REST:`,u)}const l={Accept:"application/vnd.github.cloak-preview+json",...t?{Authorization:`token ${t}`}:{}};try{const u=`author:${e} committer-date:${a}..${s}`,g=`${P}/search/commits?q=${encodeURIComponent(u).replace(/%20/g,"+")}`,f=await fetch(g,{headers:l});return f.ok&&(await f.json()).total_count||0}catch{return 0}},Y="github_location_cache";let I=null;const yt=()=>{if(I)return I;try{const e=localStorage.getItem(Y);I=e?JSON.parse(e):{}}catch{I={}}return I},bt=()=>{try{localStorage.setItem(Y,JSON.stringify(I))}catch(e){console.error("Failed to save location cache to localStorage",e)}},xt=["New York, USA","London, UK","Tokyo, Japan","Paris, France","Berlin, Germany","Sydney, Australia","Toronto, Canada","San Francisco, USA","Singapore","Seoul, South Korea","Mumbai, India","Cape Town, South Africa","Sao Paulo, Brazil","Mexico City, Mexico","Bangkok, Thailand","Amsterdam, Netherlands","Stockholm, Sweden","Vienna, Austria","Madrid, Spain","Rome, Italy","Taipei, Taiwan","Hong Kong","Shanghai, China","Dubai, UAE","Moscow, Russia","Istanbul, Turkey"];let S=[];const z=e=>{if(S.length===0){S=[...xt];for(let o=S.length-1;o>0;o--){const r=Math.floor(Math.random()*(o+1));[S[o],S[r]]=[S[r],S[o]]}}const t=S.pop();return console.log(`[LocationFallback] Assigned random location "${t}" to user "${e||"unknown"}"`),t},K=async(e,t)=>{const o=yt();if(o[e])return o[e];const r=t?{Authorization:`token ${t}`}:{};try{const n=await fetch(`${P}/users/${e}`,{headers:r});if(!n.ok)return z(e);const s=(await n.json()).location||z(e);return o[e]=s,bt(),s}catch{return z(e)}},D=new Map,wt=[{name:"Tokyo",lat:35.6895,lng:139.6917},{name:"New York",lat:40.7128,lng:-74.006},{name:"London",lat:51.5074,lng:-.1278},{name:"Paris",lat:48.8566,lng:2.3522},{name:"Seoul",lat:37.5665,lng:126.978},{name:"Singapore",lat:1.3521,lng:103.8198},{name:"Sydney",lat:-33.8688,lng:151.2093},{name:"Berlin",lat:52.52,lng:13.405},{name:"Toronto",lat:43.6532,lng:-79.3832},{name:"San Francisco",lat:37.7749,lng:-122.4194},{name:"Mumbai",lat:19.076,lng:72.8777},{name:"Dubai",lat:25.2048,lng:55.2708},{name:"Sao Paulo",lat:-23.5505,lng:-46.6333},{name:"Istanbul",lat:41.0082,lng:28.9784},{name:"Amsterdam",lat:52.3676,lng:4.9041},{name:"Bangkok",lat:13.7563,lng:100.5018},{name:"Taipei",lat:25.033,lng:121.5654},{name:"Stockholm",lat:59.3293,lng:18.0686},{name:"Barcelona",lat:41.3851,lng:2.1734},{name:"Vancouver",lat:49.2827,lng:-123.1207}];let C=[];const vt=()=>{if(C.length===0){C=[...wt];for(let t=C.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[C[t],C[o]]=[C[o],C[t]]}}const e=C.pop();return{lat:e.lat,lng:e.lng}},J=async e=>{if(!e)return null;const t=e.toLowerCase().trim();if(D.has(t))return D.get(t);try{const o=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(e)}&limit=1`,{headers:{"User-Agent":"CommitCampfire"}});if(!o.ok)throw new Error("Geocoding failed");const r=await o.json();if(r&&r.length>0){const n={lat:parseFloat(r[0].lat),lng:parseFloat(r[0].lon)};return D.set(t,n),n}}catch(o){console.warn(`Could not geocode location: ${e}`,o)}return vt()};function St(){const[e,t]=d.useState(!1),[o,r]=d.useState([]),[n,a]=d.useState([]),[s,c]=d.useState([]),[h,l]=d.useState([]),[u,g]=d.useState(0),[f,m]=d.useState(0),b=d.useRef(!1);d.useEffect(()=>{if(b.current)return;b.current=!0;const p=localStorage.getItem("github_token"),y=localStorage.getItem("github_username");p&&y&&x(y,p)},[]);const x=d.useCallback(async(p,y)=>{if(p){t(!0),g(0),m(0);try{const k=await K(p,y),w=await J(k),L=w?w.lat:20,R=w?w.lng:0,v=await gt(p,y);console.log(`Found ${v.length} followed users.`),r([]),a([]),c([]),l([]),m(v.length);const A=v.map(async j=>{const O=await K(j.login,y);if(!O)return;const N=await J(O);if(!N)return;const T=()=>(Math.random()-.5)*.5,E=N.lat+T(),_=N.lng+T(),U=await ft(j.login,y),F=U>0;if(r(M=>[...M,{lat:E,lng:_,size:.5,color:F?"#6bc46d":"#1b4721",name:j.login,avatarUrl:j.avatar_url}]),F){const M={startLat:E,startLng:_,endLat:L,endLng:R,color:"#ff5c00"};a($=>[...$,M]),c($=>[...$,{...M,ballCount:Math.min(U,5),speed:15e-5+Math.random()*1e-4}]),l($=>[...$,{lat:E,lng:_,maxRadius:5,propagationSpeed:2,repeatPeriod:1e3}])}g(M=>M+1)});await Promise.all(A)}catch(k){console.error("Error during visualization update:",k)}finally{t(!1)}}},[]);return i.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",backgroundColor:"black",overflow:"hidden"},children:[i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},children:i.jsx(at,{pointsData:o,arcsData:n,commitArcs:s,ringsData:h})}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:50,pointerEvents:"none"},children:i.jsx(ht,{onSearch:x,isLoading:e,processedCount:u,totalCount:f})})]})}W.createRoot(document.getElementById("root")).render(i.jsx(d.StrictMode,{children:i.jsx(St,{})}));
