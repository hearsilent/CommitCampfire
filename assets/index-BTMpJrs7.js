const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe3D-C4o3NXkc.js","assets/vendor-three-PgM_Uo9r.js","assets/vendor-react-OXzYy3Vh.js","assets/vendor-globe-D03urT9I.js"])))=>i.map(i=>d[i]);
import{dt as s,du as Y,dv as V}from"./vendor-three-PgM_Uo9r.js";import{r as l}from"./vendor-react-OXzYy3Vh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,r)=>r?r.toUpperCase():o.toLowerCase()),M=t=>{const e=Q(t);return e.charAt(0).toUpperCase()+e.slice(1)},U=(...t)=>t.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim(),W=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=l.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:n="",children:a,iconNode:i,...u},p)=>l.createElement("svg",{ref:p,...X,width:e,height:e,stroke:t,strokeWidth:r?Number(o)*24/Number(e):o,className:U("lucide",n),...!a&&!W(u)&&{"aria-hidden":"true"},...u},[...i.map(([h,d])=>l.createElement(h,d)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=(t,e)=>{const o=l.forwardRef(({className:r,...n},a)=>l.createElement(tt,{ref:a,iconNode:e,className:U(`lucide-${Z(M(t))}`,`lucide-${t}`,r),...n}));return o.displayName=M(t),o};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],at=et("log-out",ot),nt=({onSearch:t,isLoading:e,processedCount:o,totalCount:r})=>{const[n,a]=l.useState(localStorage.getItem("github_token")||""),[i,u]=l.useState(localStorage.getItem("github_username")||""),[p,h]=l.useState(!1);l.useEffect(()=>{const S=new URLSearchParams(window.location.search).get("code");if(S){const k="https://fabxdysznpwdjifermqs.supabase.co/functions/v1/github-auth";h(!0),fetch(k,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:S})}).then(c=>c.json()).then(c=>{c.access_token?(a(c.access_token),localStorage.setItem("github_token",c.access_token),c.login&&(u(c.login),localStorage.setItem("github_username",c.login)),window.history.replaceState({},document.title,window.location.pathname),t&&c.login&&t(c.login,c.access_token)):console.error("Auth failed:",c)}).catch(c=>console.error("Auth error:",c)).finally(()=>h(!1))}},[t]);const d=()=>{const f="Iv23lieHicqJZy5tcE9L";window.location.href=`https://github.com/login/oauth/authorize?client_id=${f}&scope=read:user`},g=()=>{t&&i&&t(i,n)},m=()=>{a(""),localStorage.removeItem("github_token"),localStorage.removeItem("github_username")};return s.jsxs("div",{className:"overlay-container",children:[s.jsxs("div",{className:"overlay-top-bar",children:[s.jsx("div",{className:"overlay-header",children:s.jsx("h1",{className:"overlay-title",children:"CommitCampfire"})}),s.jsx("div",{className:"overlay-actions",children:n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"overlay-profile",children:[s.jsx("img",{src:`https://github.com/${i}.png`,className:"overlay-avatar",alt:"avatar"}),s.jsx("span",{className:"overlay-username",children:i}),s.jsx(at,{size:14,className:"overlay-logout hover-white",onClick:m})]}),s.jsx("button",{className:"overlay-sync-btn",style:{opacity:e?.7:1},onClick:g,disabled:e,children:e?"Syncing...":"Sync"})]}):s.jsx("button",{className:"overlay-auth-btn",style:{opacity:p?.7:1},onClick:d,disabled:p,children:p?"Connecting...":s.jsxs(s.Fragment,{children:[s.jsx("img",{src:"/CommitCampfire/github-mark.svg",style:{width:18,height:18},alt:"GitHub"}),s.jsx("span",{children:"Login with GitHub"})]})})})]}),e&&s.jsxs("div",{className:"overlay-loading",children:[s.jsx("div",{className:"pulse-dot"}),"Kindling Fire ",r>0?`(${o}/${r})`:"","..."]}),s.jsxs("a",{href:"https://github.com/HearSilent",target:"_blank",rel:"noopener noreferrer",className:"overlay-footer hover-white",children:[s.jsx("img",{src:"https://github.com/HearSilent.png",className:"overlay-footer-avatar",alt:"HearSilent"}),"Built by @HearSilent"]}),s.jsx("style",{children:`
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
                    font-family: 'BoldPixels', sans-serif;
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
                    border: 1px solid rgba(229, 83, 75, 0.3);
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
                    background: #e5534b;
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

                    .overlay-username {
                        display: none; /* Hide username on mobile to save space */
                    }
                    
                    .overlay-loading {
                        bottom: calc(100px + env(safe-area-inset-bottom));
                        width: auto; /* Auto width based on content */
                        min-width: 200px; /* Min width for stability */
                        justify-content: center;
                        font-size: 12px;
                    }

                    .overlay-footer {
                        bottom: calc(60px + env(safe-area-inset-bottom)); /* Significantly more clearance */
                        right: auto; /* Reset right positioning */
                        left: 50%; /* Center horizontally */
                        transform: translateX(-50%);
                        width: auto;
                        justify-content: center;
                        white-space: nowrap;
                    }
                }
            `})]})},E="https://api.github.com",rt=async(t,e)=>{let o=[],r=1;const n=e?{Authorization:`token ${e}`}:{};try{for(;o.length<1e3;){const a=await fetch(`${E}/users/${t}/following?per_page=100&page=${r}`,{headers:n});if(a.status===401)return localStorage.removeItem("github_token"),localStorage.removeItem("github_username"),window.location.reload(),[];if(!a.ok)break;const i=await a.json();if(!i||i.length===0||(o=[...o,...i],i.length<100))break;r++}return o.slice(0,1e3)}catch(a){return console.error(a),o}},st=async(t,e,o,r)=>{var a,i,u;if(!e)return 0;const n=`
      query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
          }
        }
      }
    `;try{const p=await fetch("https://api.github.com/graphql",{method:"POST",headers:{Authorization:`bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify({query:n,variables:{login:t,from:o,to:r}})});return p.ok&&((u=(i=(a=(await p.json()).data)==null?void 0:a.user)==null?void 0:i.contributionsCollection)==null?void 0:u.totalCommitContributions)||0}catch(p){return console.error("GraphQL Fetch Error:",p),0}},it=async(t,e)=>{const o=new Date,r=new Date(o);r.setDate(o.getDate()-3);const n=d=>{const g=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),f=String(d.getDate()).padStart(2,"0");return`${g}-${m}-${f}`},a=n(r),i=n(o),u=`${a}T00:00:00Z`,p=o.toISOString();if(e)try{return await st(t,e,u,p)}catch(d){console.warn(`GraphQL fetch failed for ${t}, falling back to REST:`,d)}const h={Accept:"application/vnd.github.cloak-preview+json",...e?{Authorization:`token ${e}`}:{}};try{const d=`author:${t} committer-date:${a}..${i}`,g=`${E}/search/commits?q=${encodeURIComponent(d).replace(/%20/g,"+")}`,m=await fetch(g,{headers:h});return m.ok&&(await m.json()).total_count||0}catch{return 0}},H="github_location_cache";let v=null;const lt=()=>{if(v)return v;try{const t=localStorage.getItem(H);v=t?JSON.parse(t):{}}catch{v={}}return v},ct=()=>{try{localStorage.setItem(H,JSON.stringify(v))}catch(t){console.error("Failed to save location cache to localStorage",t)}},dt=["New York, USA","London, UK","Tokyo, Japan","Paris, France","Berlin, Germany","Sydney, Australia","Toronto, Canada","San Francisco, USA","Singapore","Seoul, South Korea","Mumbai, India","Cape Town, South Africa","Sao Paulo, Brazil","Mexico City, Mexico","Bangkok, Thailand","Amsterdam, Netherlands","Stockholm, Sweden","Vienna, Austria","Madrid, Spain","Rome, Italy","Taipei, Taiwan","Hong Kong","Shanghai, China","Dubai, UAE","Moscow, Russia","Istanbul, Turkey"];let y=[];const z=t=>{if(y.length===0){y=[...dt];for(let o=y.length-1;o>0;o--){const r=Math.floor(Math.random()*(o+1));[y[o],y[r]]=[y[r],y[o]]}}const e=y.pop();return console.log(`[LocationFallback] Assigned random location "${e}" to user "${t||"unknown"}"`),e},R=async(t,e)=>{const o=lt();if(o[t])return o[t];const r=e?{Authorization:`token ${e}`}:{};try{const n=await fetch(`${E}/users/${t}`,{headers:r});if(!n.ok)return z(t);const a=await n.json();if(a.type!=="User")return null;const i=a.location||z(t);return o[t]=i,ct(),i}catch{return z(t)}},B="geocoding_cache",q=()=>{try{const t=localStorage.getItem(B);return t?JSON.parse(t):{}}catch{return{}}},pt=(t,e)=>{try{const o=q();o[t]=e,localStorage.setItem(B,JSON.stringify(o))}catch{}},ut=[{name:"Tokyo",lat:35.6895,lng:139.6917},{name:"New York",lat:40.7128,lng:-74.006},{name:"London",lat:51.5074,lng:-.1278},{name:"Paris",lat:48.8566,lng:2.3522},{name:"Seoul",lat:37.5665,lng:126.978},{name:"Singapore",lat:1.3521,lng:103.8198},{name:"Sydney",lat:-33.8688,lng:151.2093},{name:"Berlin",lat:52.52,lng:13.405},{name:"Toronto",lat:43.6532,lng:-79.3832},{name:"San Francisco",lat:37.7749,lng:-122.4194},{name:"Mumbai",lat:19.076,lng:72.8777},{name:"Dubai",lat:25.2048,lng:55.2708},{name:"Sao Paulo",lat:-23.5505,lng:-46.6333},{name:"Istanbul",lat:41.0082,lng:28.9784},{name:"Amsterdam",lat:52.3676,lng:4.9041},{name:"Bangkok",lat:13.7563,lng:100.5018},{name:"Taipei",lat:25.033,lng:121.5654},{name:"Stockholm",lat:59.3293,lng:18.0686},{name:"Barcelona",lat:41.3851,lng:2.1734},{name:"Vancouver",lat:49.2827,lng:-123.1207}];let b=[];const ht=()=>{if(b.length===0){b=[...ut];for(let e=b.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[b[e],b[o]]=[b[o],b[e]]}}const t=b.pop();return{lat:t.lat,lng:t.lng}},F=async t=>{if(!t)return null;const e=t.toLowerCase().trim(),o=q();if(o[e])return o[e];try{const r=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(t)}&limit=1`,{headers:{"User-Agent":"CommitCampfire"}});if(!r.ok)throw new Error("Geocoding failed");const n=await r.json();if(n&&n.length>0){const a={lat:parseFloat(n[0].lat),lng:parseFloat(n[0].lon)};return pt(e,a),a}}catch(r){console.warn(`Could not geocode location: ${t}`,r)}return ht()},gt=l.lazy(()=>Y(()=>import("./Globe3D-C4o3NXkc.js"),__vite__mapDeps([0,1,2,3])));function mt(){const[t,e]=l.useState(!1),[o,r]=l.useState([]),[n,a]=l.useState([]),[i,u]=l.useState([]),[p,h]=l.useState([]),[d,g]=l.useState(0),[m,f]=l.useState(0),S=l.useRef(!1);l.useEffect(()=>{if(S.current)return;S.current=!0;const c=localStorage.getItem("github_token"),x=localStorage.getItem("github_username");c&&x&&k(x,c)},[]);const k=l.useCallback(async(c,x)=>{if(c){e(!0),g(0),f(0);try{const L=await R(c,x),j=await F(L),G=j?j.lat:20,K=j?j.lng:0,$=await rt(c,x);console.log(`Found ${$.length} followed users.`),r([]),a([]),u([]),h([]),f($.length);const J=$.map(async A=>{const T=await R(A.login,x);if(!T)return;const _=await F(T);if(!_)return;const O=()=>(Math.random()-.5)*.5,I=_.lat+O(),N=_.lng+O(),D=await it(A.login,x),P=D>0;if(r(w=>[...w,{lat:I,lng:N,size:.5,color:P?"#6bc46d":"#1b4721",name:A.login,avatarUrl:A.avatar_url}]),P){const w={startLat:I,startLng:N,endLat:G,endLng:K,color:"#ff5c00"};a(C=>[...C,w]),u(C=>[...C,{...w,ballCount:Math.min(D,5),speed:15e-5+Math.random()*1e-4}]),h(C=>[...C,{lat:I,lng:N,maxRadius:5,propagationSpeed:2,repeatPeriod:1e3}])}g(w=>w+1)});await Promise.all(J)}catch(L){console.error("Error during visualization update:",L)}finally{e(!1)}}},[]);return s.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",backgroundColor:"black",overflow:"hidden"},children:[s.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},children:s.jsx(l.Suspense,{fallback:s.jsx("div",{style:{color:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:"Loading Globe..."}),children:s.jsx(gt,{pointsData:o,arcsData:n,commitArcs:i,ringsData:p})})}),s.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:50,pointerEvents:"none"},children:s.jsx(nt,{onSearch:k,isLoading:t,processedCount:d,totalCount:m})})]})}V.createRoot(document.getElementById("root")).render(s.jsx(l.StrictMode,{children:s.jsx(mt,{})}));
