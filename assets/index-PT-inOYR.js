const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe3D-C4o3NXkc.js","assets/vendor-three-PgM_Uo9r.js","assets/vendor-react-OXzYy3Vh.js","assets/vendor-globe-D03urT9I.js"])))=>i.map(i=>d[i]);
import{dt as s,du as J,dv as Y}from"./vendor-three-PgM_Uo9r.js";import{r as l}from"./vendor-react-OXzYy3Vh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,r)=>r?r.toUpperCase():o.toLowerCase()),R=t=>{const e=Z(t);return e.charAt(0).toUpperCase()+e.slice(1)},B=(...t)=>t.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim(),Q=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=l.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:a="",children:n,iconNode:i,...u},p)=>l.createElement("svg",{ref:p,...W,width:e,height:e,stroke:t,strokeWidth:r?Number(o)*24/Number(e):o,className:B("lucide",a),...!n&&!Q(u)&&{"aria-hidden":"true"},...u},[...i.map(([h,d])=>l.createElement(h,d)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(t,e)=>{const o=l.forwardRef(({className:r,...a},n)=>l.createElement(X,{ref:n,iconNode:e,className:B(`lucide-${V(R(t))}`,`lucide-${t}`,r),...a}));return o.displayName=R(t),o};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],ot=tt("log-out",et),at=({onSearch:t,isLoading:e,processedCount:o,totalCount:r})=>{const[a,n]=l.useState(localStorage.getItem("github_token")||""),[i,u]=l.useState(localStorage.getItem("github_username")||""),[p,h]=l.useState(!1);l.useEffect(()=>{const S=new URLSearchParams(window.location.search).get("code");if(S){const k="https://fabxdysznpwdjifermqs.supabase.co/functions/v1/github-auth";h(!0),fetch(k,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:S})}).then(c=>c.json()).then(c=>{c.access_token?(n(c.access_token),localStorage.setItem("github_token",c.access_token),c.login&&(u(c.login),localStorage.setItem("github_username",c.login)),window.history.replaceState({},document.title,window.location.pathname),t&&c.login&&t(c.login,c.access_token)):console.error("Auth failed:",c)}).catch(c=>console.error("Auth error:",c)).finally(()=>h(!1))}},[t]);const d=()=>{const f="Iv23lieHicqJZy5tcE9L";window.location.href=`https://github.com/login/oauth/authorize?client_id=${f}&scope=read:user`},g=()=>{t&&i&&t(i,a)},m=()=>{n(""),localStorage.removeItem("github_token"),localStorage.removeItem("github_username")};return s.jsxs("div",{className:"overlay-container",children:[s.jsxs("div",{className:"overlay-top-bar",children:[s.jsx("div",{className:"overlay-header",children:s.jsx("h1",{className:"overlay-title",children:"CommitCampfire"})}),s.jsx("div",{className:"overlay-actions",children:a?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"overlay-profile",children:[s.jsx("img",{src:`https://github.com/${i}.png`,className:"overlay-avatar",alt:"avatar"}),s.jsx("span",{className:"overlay-username",children:i}),s.jsx(ot,{size:14,className:"overlay-logout hover-white",onClick:m})]}),s.jsx("button",{className:"overlay-sync-btn",style:{opacity:e?.7:1},onClick:g,disabled:e,children:e?"Syncing...":"Sync"})]}):s.jsx("button",{className:"overlay-auth-btn",style:{opacity:p?.7:1},onClick:d,disabled:p,children:p?"Connecting...":s.jsxs(s.Fragment,{children:[s.jsx("img",{src:"/CommitCampfire/github-mark.svg",style:{width:18,height:18},alt:"GitHub"}),s.jsx("span",{children:"Login with GitHub"})]})})})]}),e&&s.jsxs("div",{className:"overlay-loading",children:[s.jsx("div",{className:"pulse-dot"}),"Kindling Fire ",r>0?`(${o}/${r})`:"","..."]}),s.jsxs("a",{href:"https://github.com/HearSilent",target:"_blank",rel:"noopener noreferrer",className:"overlay-footer hover-white",children:[s.jsx("img",{src:"https://github.com/HearSilent.png",className:"overlay-footer-avatar",alt:"HearSilent"}),"Built by @HearSilent"]}),s.jsx("style",{children:`
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
            `})]})},E="https://api.github.com",nt=async(t,e)=>{let o=[],r=1;const a=e?{Authorization:`token ${e}`}:{};try{for(;o.length<1e3;){const n=await fetch(`${E}/users/${t}/following?per_page=100&page=${r}`,{headers:a});if(n.status===401)return localStorage.removeItem("github_token"),localStorage.removeItem("github_username"),window.location.reload(),[];if(!n.ok)break;const i=await n.json();if(!i||i.length===0||(o=[...o,...i],i.length<100))break;r++}return o.slice(0,1e3)}catch(n){return console.error(n),o}},rt=async(t,e,o,r)=>{var n,i,u;if(!e)return 0;const a=`
      query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
          }
        }
      }
    `;try{const p=await fetch("https://api.github.com/graphql",{method:"POST",headers:{Authorization:`bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify({query:a,variables:{login:t,from:o,to:r}})});return p.ok&&((u=(i=(n=(await p.json()).data)==null?void 0:n.user)==null?void 0:i.contributionsCollection)==null?void 0:u.totalCommitContributions)||0}catch(p){return console.error("GraphQL Fetch Error:",p),0}},st=async(t,e)=>{const o=new Date,r=new Date(o);r.setDate(o.getDate()-3);const a=d=>{const g=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),f=String(d.getDate()).padStart(2,"0");return`${g}-${m}-${f}`},n=a(r),i=a(o),u=`${n}T00:00:00Z`,p=o.toISOString();if(e)try{return await rt(t,e,u,p)}catch(d){console.warn(`GraphQL fetch failed for ${t}, falling back to REST:`,d)}const h={Accept:"application/vnd.github.cloak-preview+json",...e?{Authorization:`token ${e}`}:{}};try{const d=`author:${t} committer-date:${n}..${i}`,g=`${E}/search/commits?q=${encodeURIComponent(d).replace(/%20/g,"+")}`,m=await fetch(g,{headers:h});return m.ok&&(await m.json()).total_count||0}catch{return 0}},H="github_location_cache";let v=null;const it=()=>{if(v)return v;try{const t=localStorage.getItem(H);v=t?JSON.parse(t):{}}catch{v={}}return v},lt=()=>{try{localStorage.setItem(H,JSON.stringify(v))}catch(t){console.error("Failed to save location cache to localStorage",t)}},ct=["New York, USA","London, UK","Tokyo, Japan","Paris, France","Berlin, Germany","Sydney, Australia","Toronto, Canada","San Francisco, USA","Singapore","Seoul, South Korea","Mumbai, India","Cape Town, South Africa","Sao Paulo, Brazil","Mexico City, Mexico","Bangkok, Thailand","Amsterdam, Netherlands","Stockholm, Sweden","Vienna, Austria","Madrid, Spain","Rome, Italy","Taipei, Taiwan","Hong Kong","Shanghai, China","Dubai, UAE","Moscow, Russia","Istanbul, Turkey"];let y=[];const z=t=>{if(y.length===0){y=[...ct];for(let o=y.length-1;o>0;o--){const r=Math.floor(Math.random()*(o+1));[y[o],y[r]]=[y[r],y[o]]}}const e=y.pop();return console.log(`[LocationFallback] Assigned random location "${e}" to user "${t||"unknown"}"`),e},F=async(t,e)=>{const o=it();if(o[t])return o[t];const r=e?{Authorization:`token ${e}`}:{};try{const a=await fetch(`${E}/users/${t}`,{headers:r});if(!a.ok)return z(t);const i=(await a.json()).location||z(t);return o[t]=i,lt(),i}catch{return z(t)}},T=new Map,dt=[{name:"Tokyo",lat:35.6895,lng:139.6917},{name:"New York",lat:40.7128,lng:-74.006},{name:"London",lat:51.5074,lng:-.1278},{name:"Paris",lat:48.8566,lng:2.3522},{name:"Seoul",lat:37.5665,lng:126.978},{name:"Singapore",lat:1.3521,lng:103.8198},{name:"Sydney",lat:-33.8688,lng:151.2093},{name:"Berlin",lat:52.52,lng:13.405},{name:"Toronto",lat:43.6532,lng:-79.3832},{name:"San Francisco",lat:37.7749,lng:-122.4194},{name:"Mumbai",lat:19.076,lng:72.8777},{name:"Dubai",lat:25.2048,lng:55.2708},{name:"Sao Paulo",lat:-23.5505,lng:-46.6333},{name:"Istanbul",lat:41.0082,lng:28.9784},{name:"Amsterdam",lat:52.3676,lng:4.9041},{name:"Bangkok",lat:13.7563,lng:100.5018},{name:"Taipei",lat:25.033,lng:121.5654},{name:"Stockholm",lat:59.3293,lng:18.0686},{name:"Barcelona",lat:41.3851,lng:2.1734},{name:"Vancouver",lat:49.2827,lng:-123.1207}];let b=[];const pt=()=>{if(b.length===0){b=[...dt];for(let e=b.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1));[b[e],b[o]]=[b[o],b[e]]}}const t=b.pop();return{lat:t.lat,lng:t.lng}},U=async t=>{if(!t)return null;const e=t.toLowerCase().trim();if(T.has(e))return T.get(e);try{const o=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(t)}&limit=1`,{headers:{"User-Agent":"CommitCampfire"}});if(!o.ok)throw new Error("Geocoding failed");const r=await o.json();if(r&&r.length>0){const a={lat:parseFloat(r[0].lat),lng:parseFloat(r[0].lon)};return T.set(e,a),a}}catch(o){console.warn(`Could not geocode location: ${t}`,o)}return pt()},ut=l.lazy(()=>J(()=>import("./Globe3D-C4o3NXkc.js"),__vite__mapDeps([0,1,2,3])));function ht(){const[t,e]=l.useState(!1),[o,r]=l.useState([]),[a,n]=l.useState([]),[i,u]=l.useState([]),[p,h]=l.useState([]),[d,g]=l.useState(0),[m,f]=l.useState(0),S=l.useRef(!1);l.useEffect(()=>{if(S.current)return;S.current=!0;const c=localStorage.getItem("github_token"),x=localStorage.getItem("github_username");c&&x&&k(x,c)},[]);const k=l.useCallback(async(c,x)=>{if(c){e(!0),g(0),f(0);try{const L=await F(c,x),j=await U(L),q=j?j.lat:20,G=j?j.lng:0,$=await nt(c,x);console.log(`Found ${$.length} followed users.`),r([]),n([]),u([]),h([]),f($.length);const K=$.map(async A=>{const D=await F(A.login,x);if(!D)return;const _=await U(D);if(!_)return;const M=()=>(Math.random()-.5)*.5,I=_.lat+M(),N=_.lng+M(),O=await st(A.login,x),P=O>0;if(r(w=>[...w,{lat:I,lng:N,size:.5,color:P?"#6bc46d":"#1b4721",name:A.login,avatarUrl:A.avatar_url}]),P){const w={startLat:I,startLng:N,endLat:q,endLng:G,color:"#ff5c00"};n(C=>[...C,w]),u(C=>[...C,{...w,ballCount:Math.min(O,5),speed:15e-5+Math.random()*1e-4}]),h(C=>[...C,{lat:I,lng:N,maxRadius:5,propagationSpeed:2,repeatPeriod:1e3}])}g(w=>w+1)});await Promise.all(K)}catch(L){console.error("Error during visualization update:",L)}finally{e(!1)}}},[]);return s.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",backgroundColor:"black",overflow:"hidden"},children:[s.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},children:s.jsx(l.Suspense,{fallback:s.jsx("div",{style:{color:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:"Loading Globe..."}),children:s.jsx(ut,{pointsData:o,arcsData:a,commitArcs:i,ringsData:p})})}),s.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:50,pointerEvents:"none"},children:s.jsx(at,{onSearch:k,isLoading:t,processedCount:d,totalCount:m})})]})}Y.createRoot(document.getElementById("root")).render(s.jsx(l.StrictMode,{children:s.jsx(ht,{})}));
