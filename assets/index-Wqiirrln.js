const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Globe3D-C4o3NXkc.js","assets/vendor-three-PgM_Uo9r.js","assets/vendor-react-OXzYy3Vh.js","assets/vendor-globe-D03urT9I.js"])))=>i.map(i=>d[i]);
import{dt as i,du as J,dv as Y}from"./vendor-three-PgM_Uo9r.js";import{r as l}from"./vendor-react-OXzYy3Vh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,r)=>r?r.toUpperCase():o.toLowerCase()),R=e=>{const t=Z(e);return t.charAt(0).toUpperCase()+t.slice(1)},B=(...e)=>e.filter((t,o,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===o).join(" ").trim(),Q=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=l.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:n="",children:a,iconNode:s,...p},u)=>l.createElement("svg",{ref:u,...W,width:t,height:t,stroke:e,strokeWidth:r?Number(o)*24/Number(t):o,className:B("lucide",n),...!a&&!Q(p)&&{"aria-hidden":"true"},...p},[...s.map(([h,d])=>l.createElement(h,d)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(e,t)=>{const o=l.forwardRef(({className:r,...n},a)=>l.createElement(X,{ref:a,iconNode:t,className:B(`lucide-${V(R(e))}`,`lucide-${e}`,r),...n}));return o.displayName=R(e),o};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],oe=ee("log-out",te),ae=({onSearch:e,isLoading:t,processedCount:o,totalCount:r})=>{const[n,a]=l.useState(localStorage.getItem("github_token")||""),[s,p]=l.useState(localStorage.getItem("github_username")||""),[u,h]=l.useState(!1);l.useEffect(()=>{const S=new URLSearchParams(window.location.search).get("code");if(S){const A="https://fabxdysznpwdjifermqs.supabase.co/functions/v1/github-auth";h(!0),fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:S})}).then(c=>c.json()).then(c=>{c.access_token?(a(c.access_token),localStorage.setItem("github_token",c.access_token),c.login&&(p(c.login),localStorage.setItem("github_username",c.login)),window.history.replaceState({},document.title,window.location.pathname),e&&c.login&&e(c.login,c.access_token)):console.error("Auth failed:",c)}).catch(c=>console.error("Auth error:",c)).finally(()=>h(!1))}},[e]);const d=()=>{const f="Iv23lieHicqJZy5tcE9L";window.location.href=`https://github.com/login/oauth/authorize?client_id=${f}&scope=read:user`},g=()=>{e&&s&&e(s,n)},m=()=>{a(""),localStorage.removeItem("github_token"),localStorage.removeItem("github_username")};return i.jsxs("div",{className:"overlay-container",children:[i.jsxs("div",{className:"overlay-top-bar",children:[i.jsx("div",{className:"overlay-header",children:i.jsx("h1",{className:"overlay-title",children:"CommitCampfire"})}),i.jsx("div",{className:"overlay-actions",children:n?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"overlay-profile",children:[i.jsx("img",{src:`https://github.com/${s}.png`,className:"overlay-avatar",alt:"avatar"}),i.jsx("span",{className:"overlay-username",children:s}),i.jsx(oe,{size:14,className:"overlay-logout hover-white",onClick:m})]}),i.jsx("button",{className:"overlay-sync-btn",style:{opacity:t?.7:1},onClick:g,disabled:t,children:t?"Syncing...":"Sync"})]}):i.jsx("button",{className:"overlay-auth-btn",style:{opacity:u?.7:1},onClick:d,disabled:u,children:u?"Connecting...":i.jsxs(i.Fragment,{children:[i.jsx("img",{src:"/CommitCampfire/github-mark.svg",style:{width:18,height:18},alt:"GitHub"}),i.jsx("span",{children:"Login with GitHub"})]})})})]}),t&&i.jsxs("div",{className:"overlay-loading",children:[i.jsx("div",{className:"pulse-dot"}),"Kindling Fire ",r>0?`(${o}/${r})`:"","..."]}),i.jsxs("a",{href:"https://github.com/HearSilent",target:"_blank",rel:"noopener noreferrer",className:"overlay-footer hover-white",children:[i.jsx("img",{src:"https://github.com/HearSilent.png",className:"overlay-footer-avatar",alt:"HearSilent"}),"Built by @HearSilent"]}),i.jsx("style",{children:`
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
            `})]})},M="https://api.github.com",ne=async(e,t)=>{let o=[],r=1;const n=t?{Authorization:`token ${t}`}:{};try{for(;o.length<1e3;){const a=await fetch(`${M}/users/${e}/following?per_page=100&page=${r}`,{headers:n});if(a.status===401)return localStorage.removeItem("github_token"),localStorage.removeItem("github_username"),window.location.reload(),[];if(!a.ok)break;const s=await a.json();if(!s||s.length===0||(o=[...o,...s],s.length<100))break;r++}return o.slice(0,1e3)}catch(a){return console.error(a),o}},re=async(e,t,o,r)=>{var a,s,p;if(!t)return 0;const n=`
      query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
          }
        }
      }
    `;try{const u=await fetch("https://api.github.com/graphql",{method:"POST",headers:{Authorization:`bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({query:n,variables:{login:e,from:o,to:r}})});return u.ok&&((p=(s=(a=(await u.json()).data)==null?void 0:a.user)==null?void 0:s.contributionsCollection)==null?void 0:p.totalCommitContributions)||0}catch(u){return console.error("GraphQL Fetch Error:",u),0}},ie=async(e,t)=>{const o=new Date,r=new Date(o);r.setDate(o.getDate()-3);const n=d=>{const g=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),f=String(d.getDate()).padStart(2,"0");return`${g}-${m}-${f}`},a=n(r),s=n(o),p=`${a}T00:00:00Z`,u=o.toISOString();if(t)try{return await re(e,t,p,u)}catch(d){console.warn(`GraphQL fetch failed for ${e}, falling back to REST:`,d)}const h={Accept:"application/vnd.github.cloak-preview+json",...t?{Authorization:`token ${t}`}:{}};try{const d=`author:${e} committer-date:${a}..${s}`,g=`${M}/search/commits?q=${encodeURIComponent(d).replace(/%20/g,"+")}`,m=await fetch(g,{headers:h});return m.ok&&(await m.json()).total_count||0}catch{return 0}},H="github_location_cache";let v=null;const se=()=>{if(v)return v;try{const e=localStorage.getItem(H);v=e?JSON.parse(e):{}}catch{v={}}return v},le=()=>{try{localStorage.setItem(H,JSON.stringify(v))}catch(e){console.error("Failed to save location cache to localStorage",e)}},ce=["New York, USA","London, UK","Tokyo, Japan","Paris, France","Berlin, Germany","Sydney, Australia","Toronto, Canada","San Francisco, USA","Singapore","Seoul, South Korea","Mumbai, India","Cape Town, South Africa","Sao Paulo, Brazil","Mexico City, Mexico","Bangkok, Thailand","Amsterdam, Netherlands","Stockholm, Sweden","Vienna, Austria","Madrid, Spain","Rome, Italy","Taipei, Taiwan","Hong Kong","Shanghai, China","Dubai, UAE","Moscow, Russia","Istanbul, Turkey"],de={"Asia/Tokyo":"Tokyo, Japan","Asia/Seoul":"Seoul, South Korea","Asia/Shanghai":"Shanghai, China","Asia/Hong_Kong":"Hong Kong","Asia/Taipei":"Taipei, Taiwan","Asia/Singapore":"Singapore","Asia/Bangkok":"Bangkok, Thailand","Asia/Kolkata":"Mumbai, India","Asia/Dubai":"Dubai, UAE","Asia/Istanbul":"Istanbul, Turkey","Europe/London":"London, UK","Europe/Paris":"Paris, France","Europe/Berlin":"Berlin, Germany","Europe/Amsterdam":"Amsterdam, Netherlands","Europe/Stockholm":"Stockholm, Sweden","Europe/Vienna":"Vienna, Austria","Europe/Madrid":"Madrid, Spain","Europe/Rome":"Rome, Italy","Europe/Moscow":"Moscow, Russia","America/New_York":"New York, USA","America/Los_Angeles":"San Francisco, USA","America/Toronto":"Toronto, Canada","America/Mexico_City":"Mexico City, Mexico","America/Sao_Paulo":"Sao Paulo, Brazil","Australia/Sydney":"Sydney, Australia","Africa/Johannesburg":"Cape Town, South Africa"},ue=(e,t)=>{if(!e)return null;const o=de[e];return o&&console.log(`[LocationFallback] Inferred location "${o}" from timezone "${e}" for user "${t||"unknown"}"`),o||null};let y=[];const E=e=>{if(y.length===0){y=[...ce];for(let o=y.length-1;o>0;o--){const r=Math.floor(Math.random()*(o+1));[y[o],y[r]]=[y[r],y[o]]}}const t=y.pop();return console.log(`[LocationFallback] Assigned random location "${t}" to user "${e||"unknown"}"`),t},F=async(e,t)=>{const o=se();if(o[e])return o[e];const r=t?{Authorization:`token ${t}`}:{};try{const n=await fetch(`${M}/users/${e}`,{headers:r});if(!n.ok)return E(e);const a=await n.json(),s=a.location||ue(a.timezone,e)||E(e);return o[e]=s,le(),s}catch{return E(e)}},N=new Map,pe=[{name:"Tokyo",lat:35.6895,lng:139.6917},{name:"New York",lat:40.7128,lng:-74.006},{name:"London",lat:51.5074,lng:-.1278},{name:"Paris",lat:48.8566,lng:2.3522},{name:"Seoul",lat:37.5665,lng:126.978},{name:"Singapore",lat:1.3521,lng:103.8198},{name:"Sydney",lat:-33.8688,lng:151.2093},{name:"Berlin",lat:52.52,lng:13.405},{name:"Toronto",lat:43.6532,lng:-79.3832},{name:"San Francisco",lat:37.7749,lng:-122.4194},{name:"Mumbai",lat:19.076,lng:72.8777},{name:"Dubai",lat:25.2048,lng:55.2708},{name:"Sao Paulo",lat:-23.5505,lng:-46.6333},{name:"Istanbul",lat:41.0082,lng:28.9784},{name:"Amsterdam",lat:52.3676,lng:4.9041},{name:"Bangkok",lat:13.7563,lng:100.5018},{name:"Taipei",lat:25.033,lng:121.5654},{name:"Stockholm",lat:59.3293,lng:18.0686},{name:"Barcelona",lat:41.3851,lng:2.1734},{name:"Vancouver",lat:49.2827,lng:-123.1207}];let b=[];const he=()=>{if(b.length===0){b=[...pe];for(let t=b.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[b[t],b[o]]=[b[o],b[t]]}}const e=b.pop();return{lat:e.lat,lng:e.lng}},U=async e=>{if(!e)return null;const t=e.toLowerCase().trim();if(N.has(t))return N.get(t);try{const o=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(e)}&limit=1`,{headers:{"User-Agent":"CommitCampfire"}});if(!o.ok)throw new Error("Geocoding failed");const r=await o.json();if(r&&r.length>0){const n={lat:parseFloat(r[0].lat),lng:parseFloat(r[0].lon)};return N.set(t,n),n}}catch(o){console.warn(`Could not geocode location: ${e}`,o)}return he()},ge=l.lazy(()=>J(()=>import("./Globe3D-C4o3NXkc.js"),__vite__mapDeps([0,1,2,3])));function me(){const[e,t]=l.useState(!1),[o,r]=l.useState([]),[n,a]=l.useState([]),[s,p]=l.useState([]),[u,h]=l.useState([]),[d,g]=l.useState(0),[m,f]=l.useState(0),S=l.useRef(!1);l.useEffect(()=>{if(S.current)return;S.current=!0;const c=localStorage.getItem("github_token"),x=localStorage.getItem("github_username");c&&x&&A(x,c)},[]);const A=l.useCallback(async(c,x)=>{if(c){t(!0),g(0),f(0);try{const L=await F(c,x),k=await U(L),K=k?k.lat:20,q=k?k.lng:0,_=await ne(c,x);console.log(`Found ${_.length} followed users.`),r([]),a([]),p([]),h([]),f(_.length);const G=_.map(async j=>{const z=await F(j.login,x);if(!z)return;const I=await U(z);if(!I)return;const O=()=>(Math.random()-.5)*.5,$=I.lat+O(),T=I.lng+O(),P=await ie(j.login,x),D=P>0;if(r(w=>[...w,{lat:$,lng:T,size:.5,color:D?"#6bc46d":"#1b4721",name:j.login,avatarUrl:j.avatar_url}]),D){const w={startLat:$,startLng:T,endLat:K,endLng:q,color:"#ff5c00"};a(C=>[...C,w]),p(C=>[...C,{...w,ballCount:Math.min(P,5),speed:15e-5+Math.random()*1e-4}]),h(C=>[...C,{lat:$,lng:T,maxRadius:5,propagationSpeed:2,repeatPeriod:1e3}])}g(w=>w+1)});await Promise.all(G)}catch(L){console.error("Error during visualization update:",L)}finally{t(!1)}}},[]);return i.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",backgroundColor:"black",overflow:"hidden"},children:[i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},children:i.jsx(l.Suspense,{fallback:i.jsx("div",{style:{color:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:"Loading Globe..."}),children:i.jsx(ge,{pointsData:o,arcsData:n,commitArcs:s,ringsData:u})})}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:50,pointerEvents:"none"},children:i.jsx(ae,{onSearch:A,isLoading:e,processedCount:d,totalCount:m})})]})}Y.createRoot(document.getElementById("root")).render(i.jsx(l.StrictMode,{children:i.jsx(me,{})}));
