(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function F(){}function me(t,e){for(const n in e)t[n]=e[n];return t}function gt(t){return t()}function at(){return Object.create(null)}function ge(t){t.forEach(gt)}function Ge(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Re;function X(t,e){return Re||(Re=document.createElement("a")),Re.href=e,t===Re.href}function Nt(t){return Object.keys(t).length===0}function vt(t,...e){if(t==null)return F;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pe(t,e,n){t.$$.on_destroy.push(vt(e,n))}function Fe(t,e,n,s){if(t){const r=$t(t,e,n,s);return t[0](r)}}function $t(t,e,n,s){return t[1]&&s?me(n.ctx.slice(),t[1](s(e))):n.ctx}function Be(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],u=Math.max(e.dirty.length,r.length);for(let c=0;c<u;c+=1)a[c]=e.dirty[c]|r[c];return a}return e.dirty|r}return e.dirty}function Ye(t,e,n,s,r,a){if(r){const u=$t(e,n,s,a);t.p(u,r)}}function Ke(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function He(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function it(t,e){const n={};e=new Set(e);for(const s in t)!e.has(s)&&s[0]!=="$"&&(n[s]=t[s]);return n}function l(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function $(){return Q(" ")}function Ue(){return Q("")}function zt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function lt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)e[s]==null?t.removeAttribute(s):s==="style"?t.style.cssText=e[s]:s==="__value"?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:p(t,s,e[s])}function xt(t){return Array.from(t.childNodes)}function V(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Mt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function ot(t,e){return new t(e)}let we;function ke(t){we=t}function je(){if(!we)throw new Error("Function called outside component initialization");return we}function Rt(t){je().$$.on_mount.push(t)}function Tt(t){je().$$.on_destroy.push(t)}function St(){const t=je();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const a=Mt(e,n,{cancelable:s});return r.slice().forEach(u=>{u.call(t,a)}),!a.defaultPrevented}return!0}}function ct(t,e){return je().$$.context.set(t,e),e}function he(t){return je().$$.context.get(t)}const $e=[],ut=[],Se=[],ft=[],Zt=Promise.resolve();let Oe=!1;function At(){Oe||(Oe=!0,Zt.then(bt))}function Ie(t){Se.push(t)}const Le=new Set;let Te=0;function bt(){const t=we;do{for(;Te<$e.length;){const e=$e[Te];Te++,ke(e),Ct(e.$$)}for(ke(null),$e.length=0,Te=0;ut.length;)ut.pop()();for(let e=0;e<Se.length;e+=1){const n=Se[e];Le.has(n)||(Le.add(n),n())}Se.length=0}while($e.length);for(;ft.length;)ft.pop()();Oe=!1,Le.clear(),ke(t)}function Ct(t){if(t.fragment!==null){t.update(),ge(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ie)}}const Ze=new Set;let fe;function Ve(){fe={r:0,c:[],p:fe}}function qe(){fe.r||ge(fe.c),fe=fe.p}function j(t,e){t&&t.i&&(Ze.delete(t),t.i(e))}function N(t,e,n,s){if(t&&t.o){if(Ze.has(t))return;Ze.add(t),fe.c.push(()=>{Ze.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function kt(t,e){const n={},s={},r={$$scope:1};let a=t.length;for(;a--;){const u=t[a],c=e[a];if(c){for(const f in u)f in c||(s[f]=1);for(const f in c)r[f]||(n[f]=c[f],r[f]=1);t[a]=c}else for(const f in u)r[f]=1}for(const u in s)u in n||(n[u]=void 0);return n}function pt(t){return typeof t=="object"&&t!==null?t:{}}function T(t){t&&t.c()}function M(t,e,n,s){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),s||Ie(()=>{const u=t.$$.on_mount.map(gt).filter(Ge);t.$$.on_destroy?t.$$.on_destroy.push(...u):ge(u),t.$$.on_mount=[]}),a.forEach(Ie)}function R(t,e){const n=t.$$;n.fragment!==null&&(ge(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&($e.push(t),At(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,s,r,a,u,c=[-1]){const f=we;ke(t);const o=t.$$={fragment:null,ctx:[],props:a,update:F,not_equal:r,bound:at(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:at(),dirty:c,skip_bound:!1,root:e.target||f.$$.root};u&&u(o.root);let d=!1;if(o.ctx=n?n(t,e.props||{},(b,i,..._)=>{const g=_.length?_[0]:i;return o.ctx&&r(o.ctx[b],o.ctx[b]=g)&&(!o.skip_bound&&o.bound[b]&&o.bound[b](g),d&&Lt(t,b)),i}):[],o.update(),d=!0,ge(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){const b=xt(e.target);o.fragment&&o.fragment.l(b),b.forEach(A)}else o.fragment&&o.fragment.c();e.intro&&j(t.$$.fragment),M(t,e.target,e.anchor,e.customElement),bt()}ke(f)}class ee{$destroy(){R(this,1),this.$destroy=F}$on(e,n){if(!Ge(n))return F;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _e=[];function Pt(t,e){return{subscribe:be(t,e).subscribe}}function be(t,e=F){let n;const s=new Set;function r(c){if(q(t,c)&&(t=c,n)){const f=!_e.length;for(const o of s)o[1](),_e.push(o,t);if(f){for(let o=0;o<_e.length;o+=2)_e[o][0](_e[o+1]);_e.length=0}}}function a(c){r(c(t))}function u(c,f=F){const o=[c,f];return s.add(o),s.size===1&&(n=e(r)||F),c(t),()=>{s.delete(o),s.size===0&&(n(),n=null)}}return{set:r,update:a,subscribe:u}}function Et(t,e,n){const s=!Array.isArray(t),r=s?[t]:t,a=e.length<2;return Pt(n,u=>{let c=!1;const f=[];let o=0,d=F;const b=()=>{if(o)return;d();const _=e(s?f[0]:f,u);a?u(_):d=Ge(_)?_:F},i=r.map((_,g)=>vt(_,h=>{f[g]=h,o&=~(1<<g),c&&b()},()=>{o|=1<<g}));return c=!0,b(),function(){ge(i),d()}})}const Ae={},Ce={};function Pe(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}function Dt(t,e){const n=[];let s=Pe(t);return{get location(){return s},listen(r){n.push(r);const a=()=>{s=Pe(t),r({location:s,action:"POP"})};return t.addEventListener("popstate",a),()=>{t.removeEventListener("popstate",a);const u=n.indexOf(r);n.splice(u,1)}},navigate(r,{state:a,replace:u=!1}={}){a={...a,key:Date.now()+""};try{u?t.history.replaceState(a,null,r):t.history.pushState(a,null,r)}catch{t.location[u?"replace":"assign"](r)}s=Pe(t),n.forEach(c=>c({location:s,action:"PUSH"}))}}}function Ht(t="/"){let e=0;const n=[{pathname:t,search:""}],s=[];return{get location(){return n[e]},addEventListener(r,a){},removeEventListener(r,a){},history:{get entries(){return n},get index(){return e},get state(){return s[e]},pushState(r,a,u){const[c,f=""]=u.split("?");e++,n.push({pathname:c,search:f}),s.push(r)},replaceState(r,a,u){const[c,f=""]=u.split("?");n[e]={pathname:c,search:f},s[e]=r}}}}const Ot=Boolean(typeof window<"u"&&window.document&&window.document.createElement),Xe=Dt(Ot?window:Ht()),{navigate:It}=Xe,wt=/^:(.+)/,mt=4,Xt=3,Jt=2,Gt=1,Ft=1;function Je(t,e){return t.substr(0,e.length)===e}function Bt(t){return t===""}function Yt(t){return wt.test(t)}function yt(t){return t[0]==="*"}function ye(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function Ee(t){return t.replace(/(^\/+|\/+$)/g,"")}function Kt(t,e){const n=t.default?0:ye(t.path).reduce((s,r)=>(s+=mt,Bt(r)?s+=Ft:Yt(r)?s+=Jt:yt(r)?s-=mt+Gt:s+=Xt,s),0);return{route:t,score:n,index:e}}function Ut(t){return t.map(Kt).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function jt(t,e){let n,s;const[r]=e.split("?"),a=ye(r),u=a[0]==="",c=Ut(t);for(let f=0,o=c.length;f<o;f++){const d=c[f].route;let b=!1;if(d.default){s={route:d,params:{},uri:e};continue}const i=ye(d.path),_={},g=Math.max(a.length,i.length);let h=0;for(;h<g;h++){const k=i[h],z=a[h];if(k!==void 0&&yt(k)){const D=k==="*"?"*":k.slice(1);_[D]=a.slice(h).map(decodeURIComponent).join("/");break}if(z===void 0){b=!0;break}let x=wt.exec(k);if(x&&!u){const D=decodeURIComponent(z);_[x[1]]=D}else if(k!==z){b=!0;break}}if(!b){n={route:d,params:_,uri:"/"+a.slice(0,h).join("/")};break}}return n||s||null}function Vt(t,e){return jt([t],e)}function De(t,e){return t+(e?`?${e}`:"")}function qt(t,e){if(Je(t,"/"))return t;const[n,s]=t.split("?"),[r]=e.split("?"),a=ye(n),u=ye(r);if(a[0]==="")return De(r,s);if(!Je(a[0],".")){const o=u.concat(a).join("/");return De((r==="/"?"":"/")+o,s)}const c=u.concat(a),f=[];return c.forEach(o=>{o===".."?f.pop():o!=="."&&f.push(o)}),De("/"+f.join("/"),s)}function dt(t,e){return`${Ee(e==="/"?t:`${Ee(t)}/${Ee(e)}`)}/`}function Qt(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Wt(t){let e;const n=t[9].default,s=Fe(n,t,t[8],null);return{c(){s&&s.c()},m(r,a){s&&s.m(r,a),e=!0},p(r,[a]){s&&s.p&&(!e||a&256)&&Ye(s,n,r,r[8],e?Be(n,r[8],a,null):Ke(r[8]),null)},i(r){e||(j(s,r),e=!0)},o(r){N(s,r),e=!1},d(r){s&&s.d(r)}}}function en(t,e,n){let s,r,a,{$$slots:u={},$$scope:c}=e,{basepath:f="/"}=e,{url:o=null}=e;const d=he(Ae),b=he(Ce),i=be([]);pe(t,i,v=>n(6,r=v));const _=be(null);let g=!1;const h=d||be(o?{pathname:o}:Xe.location);pe(t,h,v=>n(5,s=v));const k=b?b.routerBase:be({path:f,uri:f});pe(t,k,v=>n(7,a=v));const z=Et([k,_],([v,Z])=>{if(Z===null)return v;const{path:w}=v,{route:S,uri:U}=Z;return{path:S.default?w:S.path.replace(/\*.*$/,""),uri:U}});function x(v){const{path:Z}=a;let{path:w}=v;if(v._path=w,v.path=dt(Z,w),typeof window>"u"){if(g)return;const S=Vt(v,s.pathname);S&&(_.set(S),g=!0)}else i.update(S=>(S.push(v),S))}function D(v){i.update(Z=>{const w=Z.indexOf(v);return Z.splice(w,1),Z})}return d||(Rt(()=>Xe.listen(Z=>{h.set(Z.location)})),ct(Ae,h)),ct(Ce,{activeRoute:_,base:k,routerBase:z,registerRoute:x,unregisterRoute:D}),t.$$set=v=>{"basepath"in v&&n(3,f=v.basepath),"url"in v&&n(4,o=v.url),"$$scope"in v&&n(8,c=v.$$scope)},t.$$.update=()=>{if(t.$$.dirty&128){const{path:v}=a;i.update(Z=>(Z.forEach(w=>w.path=dt(v,w._path)),Z))}if(t.$$.dirty&96){const v=jt(r,s.pathname);_.set(v)}},[i,h,k,f,o,s,r,a,c,u]}class tn extends ee{constructor(e){super(),W(this,e,en,Wt,q,{basepath:3,url:4})}}const nn=t=>({params:t&4,location:t&16}),_t=t=>({params:t[2],location:t[4]});function ht(t){let e,n,s,r;const a=[rn,sn],u=[];function c(f,o){return f[0]!==null?0:1}return e=c(t),n=u[e]=a[e](t),{c(){n.c(),s=Ue()},m(f,o){u[e].m(f,o),C(f,s,o),r=!0},p(f,o){let d=e;e=c(f),e===d?u[e].p(f,o):(Ve(),N(u[d],1,1,()=>{u[d]=null}),qe(),n=u[e],n?n.p(f,o):(n=u[e]=a[e](f),n.c()),j(n,1),n.m(s.parentNode,s))},i(f){r||(j(n),r=!0)},o(f){N(n),r=!1},d(f){u[e].d(f),f&&A(s)}}}function sn(t){let e;const n=t[10].default,s=Fe(n,t,t[9],_t);return{c(){s&&s.c()},m(r,a){s&&s.m(r,a),e=!0},p(r,a){s&&s.p&&(!e||a&532)&&Ye(s,n,r,r[9],e?Be(n,r[9],a,nn):Ke(r[9]),_t)},i(r){e||(j(s,r),e=!0)},o(r){N(s,r),e=!1},d(r){s&&s.d(r)}}}function rn(t){let e,n,s;const r=[{location:t[4]},t[2],t[3]];var a=t[0];function u(c){let f={};for(let o=0;o<r.length;o+=1)f=me(f,r[o]);return{props:f}}return a&&(e=ot(a,u())),{c(){e&&T(e.$$.fragment),n=Ue()},m(c,f){e&&M(e,c,f),C(c,n,f),s=!0},p(c,f){const o=f&28?kt(r,[f&16&&{location:c[4]},f&4&&pt(c[2]),f&8&&pt(c[3])]):{};if(a!==(a=c[0])){if(e){Ve();const d=e;N(d.$$.fragment,1,0,()=>{R(d,1)}),qe()}a?(e=ot(a,u()),T(e.$$.fragment),j(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else a&&e.$set(o)},i(c){s||(e&&j(e.$$.fragment,c),s=!0)},o(c){e&&N(e.$$.fragment,c),s=!1},d(c){c&&A(n),e&&R(e,c)}}}function an(t){let e,n,s=t[1]!==null&&t[1].route===t[7]&&ht(t);return{c(){s&&s.c(),e=Ue()},m(r,a){s&&s.m(r,a),C(r,e,a),n=!0},p(r,[a]){r[1]!==null&&r[1].route===r[7]?s?(s.p(r,a),a&2&&j(s,1)):(s=ht(r),s.c(),j(s,1),s.m(e.parentNode,e)):s&&(Ve(),N(s,1,1,()=>{s=null}),qe())},i(r){n||(j(s),n=!0)},o(r){N(s),n=!1},d(r){s&&s.d(r),r&&A(e)}}}function ln(t,e,n){let s,r,{$$slots:a={},$$scope:u}=e,{path:c=""}=e,{component:f=null}=e;const{registerRoute:o,unregisterRoute:d,activeRoute:b}=he(Ce);pe(t,b,k=>n(1,s=k));const i=he(Ae);pe(t,i,k=>n(4,r=k));const _={path:c,default:c===""};let g={},h={};return o(_),typeof window<"u"&&Tt(()=>{d(_)}),t.$$set=k=>{n(13,e=me(me({},e),He(k))),"path"in k&&n(8,c=k.path),"component"in k&&n(0,f=k.component),"$$scope"in k&&n(9,u=k.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&s&&s.route===_&&n(2,g=s.params);{const{path:k,component:z,...x}=e;n(3,h=x)}},e=He(e),[f,s,g,h,r,b,i,_,c,u,a]}class ve extends ee{constructor(e){super(),W(this,e,ln,an,q,{path:8,component:0})}}function on(t){let e,n,s,r;const a=t[16].default,u=Fe(a,t,t[15],null);let c=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],f={};for(let o=0;o<c.length;o+=1)f=me(f,c[o]);return{c(){e=m("a"),u&&u.c(),lt(e,f)},m(o,d){C(o,e,d),u&&u.m(e,null),n=!0,s||(r=zt(e,"click",t[5]),s=!0)},p(o,[d]){u&&u.p&&(!n||d&32768)&&Ye(u,a,o,o[15],n?Be(a,o[15],d,null):Ke(o[15]),null),lt(e,f=kt(c,[(!n||d&1)&&{href:o[0]},(!n||d&4)&&{"aria-current":o[2]},d&2&&o[1],d&64&&o[6]]))},i(o){n||(j(u,o),n=!0)},o(o){N(u,o),n=!1},d(o){o&&A(e),u&&u.d(o),s=!1,r()}}}function cn(t,e,n){let s;const r=["to","replace","state","getProps"];let a=it(e,r),u,c,{$$slots:f={},$$scope:o}=e,{to:d="#"}=e,{replace:b=!1}=e,{state:i={}}=e,{getProps:_=()=>({})}=e;const{base:g}=he(Ce);pe(t,g,w=>n(14,c=w));const h=he(Ae);pe(t,h,w=>n(13,u=w));const k=St();let z,x,D,v;function Z(w){if(k("click",w),Qt(w)){w.preventDefault();const S=u.pathname===z||b;It(z,{state:i,replace:S})}}return t.$$set=w=>{e=me(me({},e),He(w)),n(6,a=it(e,r)),"to"in w&&n(7,d=w.to),"replace"in w&&n(8,b=w.replace),"state"in w&&n(9,i=w.state),"getProps"in w&&n(10,_=w.getProps),"$$scope"in w&&n(15,o=w.$$scope)},t.$$.update=()=>{t.$$.dirty&16512&&n(0,z=d==="/"?c.uri:qt(d,c.uri)),t.$$.dirty&8193&&n(11,x=Je(u.pathname,z)),t.$$.dirty&8193&&n(12,D=z===u.pathname),t.$$.dirty&4096&&n(2,s=D?"page":void 0),t.$$.dirty&15361&&n(1,v=_({location:u,href:z,isPartiallyCurrent:x,isCurrent:D}))},[z,v,s,g,h,Z,a,d,b,i,_,x,D,u,c,o,f]}class B extends ee{constructor(e){super(),W(this,e,cn,on,q,{to:7,replace:8,state:9,getProps:10})}}function un(t){let e;return{c(){e=Q("Next =>")},m(n,s){C(n,e,s)},d(n){n&&A(e)}}}function fn(t){let e;return{c(){e=m("span"),e.textContent="Next =>",p(e,"class","hrefbtn next svelte-1fvjbzr")},m(n,s){C(n,e,s)},p:F,d(n){n&&A(e)}}}function pn(t){let e,n,s,r,a,u,c,f,o,d,b,i,_;return c=new B({props:{style:"text-align: right;",to:"/nissanz",$$slots:{default:[un]},$$scope:{ctx:t}}}),i=new B({props:{style:"margin: 16px 16px",to:"/nissanz",$$slots:{default:[fn]},$$scope:{ctx:t}}}),{c(){e=m("main"),n=m("div"),s=m("p"),r=m("span"),r.textContent="Intro",a=$(),u=m("span"),T(c.$$.fragment),f=$(),o=m("div"),o.innerHTML=`<p style="font-family: Arial, Helvetica, sans-serif;margin:10px;" class="passive svelte-1fvjbzr"><span>JDM</span><br/> 
      <span class="passive svelte-1fvjbzr"><i><span>/\u02A4e\u026A-di\u02D0-\u025Bm/</span></i></span> 
      <b><span>abbreviation</span></b><br/></p> 
    <p style="font-family: Arial, Helvetica, sans-serif;margin:10px;" class="passive svelte-1fvjbzr"><span>Japanese Domestic Market cars; used to refer to cars imported from
        Japan.</span></p> 
    <p class="info"><span>JDM cars are renowned to be better than other cars because of the
        Japanese cars typically being more reliable and especially those made in
        Japan, to the much higher Japanese standards. They typically also have a
        lot of power and ways to modify them; such as upgrading the engine,
        suspension, aerodynamics or swapping out the entire engine. They were
        popularised by culture such as the Fast and Furious franchise, the
        Initial D anime, and more. JDM cars are also very common in New Zealand
        where 59% of vehicles registered on New Zealand roads originated from
        overseas markets as opposed to 41% of which were delivered NZ-New. Of
        this, 94% originate from Japan.</span></p> 
    <br/> 

    <br/> 
    <p class="info"><span>JDM culture also gave rise to the popular technique of drifting. In the
        70s, racer Kunimitsu Takahashi learned to oversteer at corners and let
        the rear end of the car swing out. Since then, young drivers began to
        drift on the steep corners of Japanese mountain roads (known as a
        &#39;Touge&#39;) and eventually it became a full-blown category of its own.</span></p> 
    <p class="info"><span>On this site, I will be showcasing some of the best lineups of JDM cars
        from manufacturers all across Japan.</span></p>`,d=$(),b=m("nav"),T(i.$$.fragment),V(r,"text-align","center"),p(r,"class","this svelte-1fvjbzr"),p(u,"class","next svelte-1fvjbzr"),V(s,"width","100%"),p(n,"class","heading svelte-1fvjbzr"),p(b,"class","nextnav svelte-1fvjbzr"),p(e,"class","svelte-1fvjbzr")},m(g,h){C(g,e,h),l(e,n),l(n,s),l(s,r),l(s,a),l(s,u),M(c,u,null),l(e,f),l(e,o),l(e,d),l(e,b),M(i,b,null),_=!0},p(g,[h]){const k={};h&1&&(k.$$scope={dirty:h,ctx:g}),c.$set(k);const z={};h&1&&(z.$$scope={dirty:h,ctx:g}),i.$set(z)},i(g){_||(j(c.$$.fragment,g),j(i.$$.fragment,g),_=!0)},o(g){N(c.$$.fragment,g),N(i.$$.fragment,g),_=!1},d(g){g&&A(e),R(c),R(i)}}}class mn extends ee{constructor(e){super(),W(this,e,null,pn,q,{})}}function dn(t){let e;return{c(){e=Q("<= Previous")},m(n,s){C(n,e,s)},d(n){n&&A(e)}}}function _n(t){let e;return{c(){e=Q("Next =>")},m(n,s){C(n,e,s)},d(n){n&&A(e)}}}function hn(t){let e;return{c(){e=m("span"),e.textContent="Next =>",p(e,"class","hrefbtn next svelte-1fvjbzr")},m(n,s){C(n,e,s)},p:F,d(n){n&&A(e)}}}function gn(t){let e,n,s,r,a,u,c,f,o,d,b,i,_,g,h,k,z,x,D,v,Z,w,S,U,L,te,ne,J,se,P,re,ae,G,ie,O,H,Y,y,E,K,le,oe,Ne,Qe,de,We,et,ze,tt,xe,ue,Me;return a=new B({props:{style:"text-align: right;",to:"/",$$slots:{default:[dn]},$$scope:{ctx:t}}}),d=new B({props:{style:"text-align: right;",to:"/refs",$$slots:{default:[_n]},$$scope:{ctx:t}}}),ue=new B({props:{style:"margin: 16px 16px",to:"/miata",$$slots:{default:[hn]},$$scope:{ctx:t}}}),{c(){e=m("main"),n=m("div"),s=m("p"),r=m("span"),T(a.$$.fragment),u=$(),c=m("span"),c.textContent="Nissan Z",f=$(),o=m("span"),T(d.$$.fragment),b=$(),i=m("div"),_=m("p"),_.innerHTML=`<span>The Nissan Z-car, also known as the Z or Datsun Z, is a lineup of cars
        produced by Nissan (formerly Datsun). The first model was produced in
        1969, and the latest model is expected 2023. (Author&#39;s Note: It was sold
        in Japan as the Fairlady Z across all model years, but the designation
        codes are more widely used due to the difficulty of differentiating
        otherwise.)</span>`,g=$(),h=m("img"),z=$(),x=m("p"),x.innerHTML=`<span>Above: Datsun 240Z- 1969 - 128hp - 0-100km/h in 8.0s ; top speed
        201km/h</span>`,D=$(),v=m("img"),w=$(),S=m("p"),S.innerHTML=`<span>Above: Datsun 280ZX Turbo- 1981- 180hp - 0-100km/h in 7.4s ; top speed
        210km/h</span>`,U=$(),L=m("img"),ne=$(),J=m("p"),J.innerHTML=`<span>Above: Nissan 300ZX Z31 Turbo- 1984 - 226hp - 0-100km/h in 7.2s ; top
        speed 222km/h</span>`,se=$(),P=m("img"),ae=$(),G=m("p"),G.innerHTML=`<span>Above: Nissan 300ZX Z32 Turbo- 1989 - 300hp - 0-100km/h in 6.5s ; top
        speed 250km/h</span>`,ie=$(),O=m("img"),Y=$(),y=m("p"),y.innerHTML=`<span>Above: Nissan 350Z - 2007 -305hp - 0-100km/h in 6.2s ; top speed
        250km/h</span>`,E=$(),K=m("img"),oe=$(),Ne=m("p"),Ne.innerHTML=`<span>Above: Nissan 370Z- 2009 - 330hp - 0-100km/h in 5.4s ; top speed
        253km/h</span>`,Qe=$(),de=m("img"),et=$(),ze=m("p"),ze.innerHTML=`<span>Above: Nissan &#39;Z&#39; RZ34- 2023 est - 400hp - 0-100km/h in 4.3s ; top
        speed 250km/h</span>`,tt=$(),xe=m("nav"),T(ue.$$.fragment),p(r,"class","prev svelte-1fvjbzr"),V(c,"text-align","center"),p(c,"class","this svelte-1fvjbzr"),p(o,"class","next svelte-1fvjbzr"),V(s,"width","100%"),p(n,"class","heading svelte-1fvjbzr"),p(_,"class","info"),X(h.src,k="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Our_Restored_%2771_Datsun_240Z_%28Right-Front_View%29.jpg/220px-Our_Restored_%2771_Datsun_240Z_%28Right-Front_View%29.jpg")||p(h,"src",k),p(h,"alt","Datsun 240Z"),p(h,"class","svelte-1fvjbzr"),p(x,"class","info passive svelte-1fvjbzr"),X(v.src,Z="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Nissan_280ZX_Turbo.jpg/220px-Nissan_280ZX_Turbo.jpg")||p(v,"src",Z),p(v,"alt","Datsun 280ZX"),p(v,"class","svelte-1fvjbzr"),p(S,"class","info passive svelte-1fvjbzr"),X(L.src,te="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/CleanZ31.jpg/220px-CleanZ31.jpg")||p(L,"src",te),p(L,"alt","Nissan 300ZX Z31"),p(L,"class","svelte-1fvjbzr"),p(J,"class","info passive svelte-1fvjbzr"),X(P.src,re="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/1990_Nissan_300ZX_3.0L_front_NYIAS_2019.jpg/280px-1990_Nissan_300ZX_3.0L_front_NYIAS_2019.jpg")||p(P,"src",re),p(P,"alt","Nissan 300ZX Z32"),p(P,"class","svelte-1fvjbzr"),p(G,"class","info passive svelte-1fvjbzr"),X(O.src,H="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Nissan_350Z_flickr.jpg/220px-Nissan_350Z_flickr.jpg")||p(O,"src",H),p(O,"alt","Nissan 350Z"),p(O,"class","svelte-1fvjbzr"),p(y,"class","info passive svelte-1fvjbzr"),X(K.src,le="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/2013_Nissan_370Z_%28Z34_MY13.5%29_coupe_%282015-06-18%29_01.jpg/220px-2013_Nissan_370Z_%28Z34_MY13.5%29_coupe_%282015-06-18%29_01.jpg")||p(K,"src",le),p(K,"alt","Nissan 370Z"),p(K,"class","svelte-1fvjbzr"),p(Ne,"class","info passive svelte-1fvjbzr"),X(de.src,We="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nissan_FAIRLADY_Z_%28Z34%29_Version_ST%2C_2022%2C_left-front.jpg/220px-Nissan_FAIRLADY_Z_%28Z34%29_Version_ST%2C_2022%2C_left-front.jpg")||p(de,"src",We),p(de,"alt","Nissan 'Z' RZ34"),p(de,"class","svelte-1fvjbzr"),p(ze,"class","info passive svelte-1fvjbzr"),p(xe,"class","nextnav svelte-1fvjbzr"),p(e,"class","svelte-1fvjbzr")},m(I,ce){C(I,e,ce),l(e,n),l(n,s),l(s,r),M(a,r,null),l(s,u),l(s,c),l(s,f),l(s,o),M(d,o,null),l(e,b),l(e,i),l(i,_),l(i,g),l(i,h),l(i,z),l(i,x),l(i,D),l(i,v),l(i,w),l(i,S),l(i,U),l(i,L),l(i,ne),l(i,J),l(i,se),l(i,P),l(i,ae),l(i,G),l(i,ie),l(i,O),l(i,Y),l(i,y),l(i,E),l(i,K),l(i,oe),l(i,Ne),l(i,Qe),l(i,de),l(i,et),l(i,ze),l(i,tt),l(i,xe),M(ue,xe,null),Me=!0},p(I,[ce]){const nt={};ce&1&&(nt.$$scope={dirty:ce,ctx:I}),a.$set(nt);const st={};ce&1&&(st.$$scope={dirty:ce,ctx:I}),d.$set(st);const rt={};ce&1&&(rt.$$scope={dirty:ce,ctx:I}),ue.$set(rt)},i(I){Me||(j(a.$$.fragment,I),j(d.$$.fragment,I),j(ue.$$.fragment,I),Me=!0)},o(I){N(a.$$.fragment,I),N(d.$$.fragment,I),N(ue.$$.fragment,I),Me=!1},d(I){I&&A(e),R(a),R(d),R(ue)}}}class vn extends ee{constructor(e){super(),W(this,e,null,gn,q,{})}}function $n(t){let e;return{c(){e=Q("<= Previous")},m(n,s){C(n,e,s)},d(n){n&&A(e)}}}function bn(t){let e;return{c(){e=Q("Next =>")},m(n,s){C(n,e,s)},d(n){n&&A(e)}}}function kn(t){let e;return{c(){e=m("span"),e.textContent="Next =>",p(e,"class","hrefbtn next svelte-1fvjbzr")},m(n,s){C(n,e,s)},p:F,d(n){n&&A(e)}}}function wn(t){let e,n,s,r,a,u,c,f,o,d,b,i,_,g,h,k,z,x,D,v,Z,w,S,U,L,te,ne,J,se,P,re,ae,G,ie,O,H,Y;return a=new B({props:{style:"text-align: right;",to:"/",$$slots:{default:[$n]},$$scope:{ctx:t}}}),d=new B({props:{style:"text-align: right;",to:"/refs",$$slots:{default:[bn]},$$scope:{ctx:t}}}),H=new B({props:{style:"margin: 16px 16px",to:"/skyliner",$$slots:{default:[kn]},$$scope:{ctx:t}}}),{c(){e=m("main"),n=m("div"),s=m("p"),r=m("span"),T(a.$$.fragment),u=$(),c=m("span"),c.textContent="Nissan Z",f=$(),o=m("span"),T(d.$$.fragment),b=$(),i=m("div"),_=m("p"),_.innerHTML=`<span>The Mazda Miata, also known as the MX-5, Mazda Roaster, or Eunos Roadster, is a lightweight two-passenger roadster made by Mazda with a front mid-engine, RWD layout. The MX-5 is known for being one of the best lightweight sports cars out there. In 2009, Jeremy Clarkson called it &#39;perfect&#39; and remarked that &#39;nothing on the road will give you better value or fun.&#39; In the author&#39;s opinion, he was right.
          &#39;</span>`,g=$(),h=m("img"),z=$(),x=m("p"),x.innerHTML="<span>Above: MX-5 NA (first generation) 1989 - 116hp - 0-100km/h in 8.8s. Top speed 188km/h. Renowned for pop-up headlights.</span>",D=$(),v=m("img"),w=$(),S=m("p"),S.innerHTML="<span>Above: MX-5 NB (second generation) 1999 - 140hp - 0-100km/h in 8.0s. Top speed 204 km/h</span>",U=$(),L=m("img"),ne=$(),J=m("p"),J.innerHTML="<span>Above: MX-5 NC (third generation) 2005 - 167hp - 0-100km/h in 8.2 seconds. Top speed 210 km/h</span>",se=$(),P=m("img"),ae=$(),G=m("p"),G.innerHTML="<span>MX-5 ND(fourth generation) 2014-present - 181hp - 0-100km/h in 6.5 seconds. Top speed 219 km/h</span>",ie=$(),O=m("nav"),T(H.$$.fragment),p(r,"class","prev svelte-1fvjbzr"),V(c,"text-align","center"),p(c,"class","this svelte-1fvjbzr"),p(o,"class","next svelte-1fvjbzr"),V(s,"width","100%"),p(n,"class","heading svelte-1fvjbzr"),p(_,"class","info"),X(h.src,k="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/1st_Mazda_Miata_--_03-16-2012.JPG/330px-1st_Mazda_Miata_--_03-16-2012.JPG")||p(h,"src",k),p(h,"alt","MX-5 NA (first generation) 1989"),p(h,"class","svelte-1fvjbzr"),p(x,"class","info passive svelte-1fvjbzr"),X(v.src,Z="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/2nd_Mazda_MX-5_Miata.jpg/330px-2nd_Mazda_MX-5_Miata.jpg")||p(v,"src",Z),p(v,"alt","MX-5 NB (second generation) 1999"),p(v,"class","svelte-1fvjbzr"),p(S,"class","info passive svelte-1fvjbzr"),X(L.src,te="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/2006-2007_galaxy_gray.jpg/330px-2006-2007_galaxy_gray.jpg")||p(L,"src",te),p(L,"alt","MX-5 NC (third generation) 2005"),p(L,"class","svelte-1fvjbzr"),p(J,"class","info passive svelte-1fvjbzr"),X(P.src,re="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2016_Mazda_MX-5_Sport_NAV_1.5_Front.jpg/420px-2016_Mazda_MX-5_Sport_NAV_1.5_Front.jpg")||p(P,"src",re),p(P,"alt","MX-5 ND (fourth generation) 2014-present"),p(P,"class","svelte-1fvjbzr"),p(G,"class","info passive svelte-1fvjbzr"),p(O,"class","nextnav svelte-1fvjbzr"),p(e,"class","svelte-1fvjbzr")},m(y,E){C(y,e,E),l(e,n),l(n,s),l(s,r),M(a,r,null),l(s,u),l(s,c),l(s,f),l(s,o),M(d,o,null),l(e,b),l(e,i),l(i,_),l(i,g),l(i,h),l(i,z),l(i,x),l(i,D),l(i,v),l(i,w),l(i,S),l(i,U),l(i,L),l(i,ne),l(i,J),l(i,se),l(i,P),l(i,ae),l(i,G),l(i,ie),l(i,O),M(H,O,null),Y=!0},p(y,[E]){const K={};E&1&&(K.$$scope={dirty:E,ctx:y}),a.$set(K);const le={};E&1&&(le.$$scope={dirty:E,ctx:y}),d.$set(le);const oe={};E&1&&(oe.$$scope={dirty:E,ctx:y}),H.$set(oe)},i(y){Y||(j(a.$$.fragment,y),j(d.$$.fragment,y),j(H.$$.fragment,y),Y=!0)},o(y){N(a.$$.fragment,y),N(d.$$.fragment,y),N(H.$$.fragment,y),Y=!1},d(y){y&&A(e),R(a),R(d),R(H)}}}class yn extends ee{constructor(e){super(),W(this,e,null,wn,q,{})}}function jn(t){let e;return{c(){e=Q("<= Previous")},m(n,s){C(n,e,s)},d(n){n&&A(e)}}}function Nn(t){let e;return{c(){e=m("span"),e.textContent="Back to Home",p(e,"class","hrefbtn next svelte-1fvjbzr")},m(n,s){C(n,e,s)},p:F,d(n){n&&A(e)}}}function zn(t){let e,n,s,r,a,u,c,f,o,d,b,i,_;return a=new B({props:{style:"text-align: right;",to:"/nissanz",$$slots:{default:[jn]},$$scope:{ctx:t}}}),i=new B({props:{style:"margin: 16px 16px",to:"/",$$slots:{default:[Nn]},$$scope:{ctx:t}}}),{c(){e=m("main"),n=m("div"),s=m("p"),r=m("span"),T(a.$$.fragment),u=$(),c=m("span"),c.textContent="References",f=$(),o=m("div"),o.innerHTML=`<ul><li><a class="link" href="https://www.hotcars.com/surprising-facts-about-jdm-cars/#:~:text=It%27s%20just%20that%20the%20Japanese,build%20upon%20it%2C%20are%20unmatchable.">https://www.hotcars.com/surprising-facts-about-jdm-cars/#:~:text=It%27s%20just%20that%20the%20Japanese,build%20upon%20it%2C%20are%20unmatchable.</a></li> 
      <li><a class="link" href="https://en.wikipedia.org/wiki/Japanese_domestic_market#References">https://en.wikipedia.org/wiki/Japanese_domestic_market#References</a></li> 
      <li><a class="link" href="https://www.motortrend.com/reviews/2023-nissan-z-performance-first-test-review/">https://www.motortrend.com/reviews/2023-nissan-z-performance-first-test-review/</a></li> 
      <li><a class="link" href="https://en.wikipedia.org">https://en.wikipedia.org</a><p class="info">(for all cars)</p></li> 
      <li><a class="link" href="https://accelerationtimes.com">https://accelerationtimes.com</a></li></ul>`,d=$(),b=m("nav"),T(i.$$.fragment),p(r,"class","prev svelte-1fvjbzr"),V(c,"text-align","center"),p(c,"class","this svelte-1fvjbzr"),V(s,"width","100%"),p(n,"class","heading svelte-1fvjbzr"),p(b,"class","nextnav svelte-1fvjbzr"),p(e,"class","svelte-1fvjbzr")},m(g,h){C(g,e,h),l(e,n),l(n,s),l(s,r),M(a,r,null),l(s,u),l(s,c),l(e,f),l(e,o),l(e,d),l(e,b),M(i,b,null),_=!0},p(g,[h]){const k={};h&1&&(k.$$scope={dirty:h,ctx:g}),a.$set(k);const z={};h&1&&(z.$$scope={dirty:h,ctx:g}),i.$set(z)},i(g){_||(j(a.$$.fragment,g),j(i.$$.fragment,g),_=!0)},o(g){N(a.$$.fragment,g),N(i.$$.fragment,g),_=!1},d(g){g&&A(e),R(a),R(i)}}}class xn extends ee{constructor(e){super(),W(this,e,null,zn,q,{})}}function Mn(t){let e;return{c(){e=Q("<= Previous")},m(n,s){C(n,e,s)},d(n){n&&A(e)}}}function Rn(t){let e;return{c(){e=Q("Next =>")},m(n,s){C(n,e,s)},d(n){n&&A(e)}}}function Tn(t){let e;return{c(){e=m("span"),e.textContent="Next =>",p(e,"class","hrefbtn next svelte-1fvjbzr")},m(n,s){C(n,e,s)},p:F,d(n){n&&A(e)}}}function Sn(t){let e,n,s,r,a,u,c,f,o,d,b,i,_,g,h,k,z,x,D,v,Z,w,S,U,L,te,ne,J,se,P,re,ae,G,ie,O,H,Y;return a=new B({props:{style:"text-align: right;",to:"/",$$slots:{default:[Mn]},$$scope:{ctx:t}}}),d=new B({props:{style:"text-align: right;",to:"/refs",$$slots:{default:[Rn]},$$scope:{ctx:t}}}),H=new B({props:{style:"margin: 16px 16px",to:"/refs",$$slots:{default:[Tn]},$$scope:{ctx:t}}}),{c(){e=m("main"),n=m("div"),s=m("p"),r=m("span"),T(a.$$.fragment),u=$(),c=m("span"),c.textContent="Nissan Z",f=$(),o=m("span"),T(d.$$.fragment),b=$(),i=m("div"),_=m("p"),_.innerHTML="<span>The Nissan Skyline GT-R is a sports car based on the Nissan Skyline range. The most well known ones are the R32, R33, R34 and R35 Skyline GT-Rs. After the GT-Rs were initially discontinued in 1973, Nissan revived the GT-R nameplate again in 1989. They did this because they were looking for a replacement for the older GTS-Rs in the Group A racing series.</span>",g=$(),h=m("img"),z=$(),x=m("p"),x.innerHTML="<span>Above: Nissan Skyline R32 - 1989 - 276hp- 0-100km/h in 4.5s ; top speed 251km/h</span>",D=$(),v=m("img"),w=$(),S=m("p"),S.innerHTML="<span>Above: Nissan Skyline R33- 1995 - 300hp - 0-100km/h in 3.8s; top speed 250km/h</span>",U=$(),L=m("img"),ne=$(),J=m("p"),J.innerHTML="<span>Above: Nissan Skyline R34- 1999 - 330hp - 0-100km/h in 4.8s; top speed 265km/h</span>",se=$(),P=m("img"),ae=$(),G=m("p"),G.innerHTML="<span>Above:Nissan Skyline R35- 2007-present- 565hp - 0-100km/h in 2.5s; top speed 330 km/h</span>",ie=$(),O=m("nav"),T(H.$$.fragment),p(r,"class","prev svelte-1fvjbzr"),V(c,"text-align","center"),p(c,"class","this svelte-1fvjbzr"),p(o,"class","next svelte-1fvjbzr"),V(s,"width","100%"),p(n,"class","heading svelte-1fvjbzr"),p(_,"class","info"),X(h.src,k="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Nissan_Skyline_R32_GT-R_001.jpg/420px-Nissan_Skyline_R32_GT-R_001.jpg")||p(h,"src",k),p(h,"alt","Nissan Skyline R32"),p(h,"class","svelte-1fvjbzr"),p(x,"class","info passive svelte-1fvjbzr"),X(v.src,Z="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nissan_Skyline_R33_GT-R_001.jpg/420px-Nissan_Skyline_R33_GT-R_001.jpg")||p(v,"src",Z),p(v,"alt","Skyline R33"),p(v,"class","svelte-1fvjbzr"),p(S,"class","info passive svelte-1fvjbzr"),X(L.src,te="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nissan_Skyline_R34_GT-R_N%C3%BCr_001.jpg/420px-Nissan_Skyline_R34_GT-R_N%C3%BCr_001.jpg")||p(L,"src",te),p(L,"alt","Skyline R34"),p(L,"class","svelte-1fvjbzr"),p(J,"class","info passive svelte-1fvjbzr"),X(P.src,re="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Nissan_GT-R_MY2017_%281%29_%28cropped%29.jpg/420px-Nissan_GT-R_MY2017_%281%29_%28cropped%29.jpg")||p(P,"src",re),p(P,"alt","Skyline R35"),p(P,"class","svelte-1fvjbzr"),p(G,"class","info passive svelte-1fvjbzr"),p(O,"class","nextnav svelte-1fvjbzr"),p(e,"class","svelte-1fvjbzr")},m(y,E){C(y,e,E),l(e,n),l(n,s),l(s,r),M(a,r,null),l(s,u),l(s,c),l(s,f),l(s,o),M(d,o,null),l(e,b),l(e,i),l(i,_),l(i,g),l(i,h),l(i,z),l(i,x),l(i,D),l(i,v),l(i,w),l(i,S),l(i,U),l(i,L),l(i,ne),l(i,J),l(i,se),l(i,P),l(i,ae),l(i,G),l(i,ie),l(i,O),M(H,O,null),Y=!0},p(y,[E]){const K={};E&1&&(K.$$scope={dirty:E,ctx:y}),a.$set(K);const le={};E&1&&(le.$$scope={dirty:E,ctx:y}),d.$set(le);const oe={};E&1&&(oe.$$scope={dirty:E,ctx:y}),H.$set(oe)},i(y){Y||(j(a.$$.fragment,y),j(d.$$.fragment,y),j(H.$$.fragment,y),Y=!0)},o(y){N(a.$$.fragment,y),N(d.$$.fragment,y),N(H.$$.fragment,y),Y=!1},d(y){y&&A(e),R(a),R(d),R(H)}}}class Zn extends ee{constructor(e){super(),W(this,e,null,Sn,q,{})}}function An(t){let e,n;return e=new mn({}),{c(){T(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){R(e,s)}}}function Cn(t){let e,n;return e=new vn({}),{c(){T(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){R(e,s)}}}function Ln(t){let e,n;return e=new yn({}),{c(){T(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){R(e,s)}}}function Pn(t){let e,n;return e=new xn({}),{c(){T(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){R(e,s)}}}function En(t){let e,n;return e=new Zn({}),{c(){T(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){R(e,s)}}}function Dn(t){let e,n,s,r,a,u,c,f,o,d,b;return n=new ve({props:{path:"/",$$slots:{default:[An]},$$scope:{ctx:t}}}),r=new ve({props:{path:"/nissanz",$$slots:{default:[Cn]},$$scope:{ctx:t}}}),u=new ve({props:{path:"/miata",$$slots:{default:[Ln]},$$scope:{ctx:t}}}),f=new ve({props:{path:"/refs",$$slots:{default:[Pn]},$$scope:{ctx:t}}}),d=new ve({props:{path:"/skyliner",$$slots:{default:[En]},$$scope:{ctx:t}}}),{c(){e=m("div"),T(n.$$.fragment),s=$(),T(r.$$.fragment),a=$(),T(u.$$.fragment),c=$(),T(f.$$.fragment),o=$(),T(d.$$.fragment)},m(i,_){C(i,e,_),M(n,e,null),l(e,s),M(r,e,null),l(e,a),M(u,e,null),l(e,c),M(f,e,null),l(e,o),M(d,e,null),b=!0},p(i,_){const g={};_&2&&(g.$$scope={dirty:_,ctx:i}),n.$set(g);const h={};_&2&&(h.$$scope={dirty:_,ctx:i}),r.$set(h);const k={};_&2&&(k.$$scope={dirty:_,ctx:i}),u.$set(k);const z={};_&2&&(z.$$scope={dirty:_,ctx:i}),f.$set(z);const x={};_&2&&(x.$$scope={dirty:_,ctx:i}),d.$set(x)},i(i){b||(j(n.$$.fragment,i),j(r.$$.fragment,i),j(u.$$.fragment,i),j(f.$$.fragment,i),j(d.$$.fragment,i),b=!0)},o(i){N(n.$$.fragment,i),N(r.$$.fragment,i),N(u.$$.fragment,i),N(f.$$.fragment,i),N(d.$$.fragment,i),b=!1},d(i){i&&A(e),R(n),R(r),R(u),R(f),R(d)}}}function Hn(t){let e,n;return e=new tn({props:{url:t[0],$$slots:{default:[Dn]},$$scope:{ctx:t}}}),{c(){T(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,[r]){const a={};r&1&&(a.url=s[0]),r&2&&(a.$$scope={dirty:r,ctx:s}),e.$set(a)},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){R(e,s)}}}function On(t,e,n){let{url:s=""}=e;return t.$$set=r=>{"url"in r&&n(0,s=r.url)},[s]}class In extends ee{constructor(e){super(),W(this,e,On,Hn,q,{url:0})}}new In({target:document.getElementById("app")});
