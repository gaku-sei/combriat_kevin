import{b as Ce,e as $e,a as p,t as m,d as G,n as Ue,c as ea}from"./disclose-version.CH-VH2bO.js";import{D as aa,b as Ve,aj as We,h as z,s as ge,g as Ae,J as Ye,C as ra,Q as Ke,H as ta,i as Ne,j as qe,c as ae,M as sa,k as Qe,a as Te,l as la,ak as ia,q as na,T as Pe,al as Re,y as Le,am as Ie,an as va,w as oa,Z as Me,ao as da,P as ca,ap as fa,d as ze,aq as ua,I as Ge,N as _a,L as pa,ar as ga,p as ve,z as I,e as oe,f as i,r as s,x as l,ab as Z,o as pe,A as g,as as ke,ai as ka,ac as ha,at as wa}from"./runtime.CNa3-Fp-.js";import{s as R}from"./render.BvPnsIb_.js";import{b as ya,i as N}from"./this.CKTJOE5-.js";import{s as xa}from"./snippet.UI9456e-.js";let Ee=null;function he(t,e){return e}function ba(t,e,a,o){for(var n=[],v=e.length,r=0;r<v;r++)da(e[r].e,n,!0);var d=v>0&&n.length===0&&a!==null;if(d){var f=a.parentNode;ca(f),f.append(a),o.clear(),$(t,e[0].prev,e[v-1].next)}fa(n,()=>{for(var _=0;_<v;_++){var w=e[_];d||(o.delete(w.k),$(t,w.prev,w.next)),ze(w.e,!d)}})}function K(t,e,a,o,n,v=null){var r=t,d={flags:e,items:new Map,first:null},f=(e&We)!==0;if(f){var _=t;r=z?ge(Ye(_)):_.appendChild(aa())}z&&Ae();var w=null;Ve(()=>{var c=a(),x=ra(c)?c:c==null?[]:Ke(c),k=x.length;let y=!1;if(z){var A=r.data===ta;A!==(k===0)&&(r=Ne(),ge(r),qe(!1),y=!0)}if(z){for(var q=null,E,L=0;L<k;L++){if(ae.nodeType===8&&ae.data===sa){r=ae,y=!0,qe(!1);break}var u=x[L],h=o(u,L);E=Je(ae,d,q,null,u,h,L,n,e),d.items.set(h,E),q=E}k>0&&ge(Ne())}z||ma(x,d,r,n,e,o),v!==null&&(k===0?w?Qe(w):w=Te(()=>v(r)):w!==null&&la(w,()=>{w=null})),y&&qe(!0)}),z&&(r=ae)}function ma(t,e,a,o,n,v){var P,B,H,U;var r=(n&ua)!==0,d=(n&(Re|Ie))!==0,f=t.length,_=e.items,w=e.first,c=w,x,k=null,y,A=[],q=[],E,L,u,h;if(r)for(h=0;h<f;h+=1)E=t[h],L=v(E,h),u=_.get(L),u!==void 0&&((P=u.a)==null||P.measure(),(y??(y=new Set)).add(u));for(h=0;h<f;h+=1){if(E=t[h],L=v(E,h),u=_.get(L),u===void 0){var F=c?c.e.nodes_start:a;k=Je(F,e,k,k===null?e.first:k.next,E,L,h,o,n),_.set(L,k),A=[],q=[],c=k.next;continue}if(d&&qa(u,E,h,n),u.e.f&ia&&(Qe(u.e),r&&((B=u.a)==null||B.unfix(),(y??(y=new Set)).delete(u))),u!==c){if(x!==void 0&&x.has(u)){if(A.length<q.length){var M=q[0],D;k=M.prev;var V=A[0],Q=A[A.length-1];for(D=0;D<A.length;D+=1)He(A[D],M,a);for(D=0;D<q.length;D+=1)x.delete(q[D]);$(e,V.prev,Q.next),$(e,k,V),$(e,Q,M),c=M,k=Q,h-=1,A=[],q=[]}else x.delete(u),He(u,c,a),$(e,u.prev,u.next),$(e,u,k===null?e.first:k.next),$(e,k,u),k=u;continue}for(A=[],q=[];c!==null&&c.k!==L;)(x??(x=new Set)).add(c),q.push(c),c=c.next;if(c===null)continue;u=c}A.push(u),k=u,c=u.next}if(c!==null||x!==void 0){for(var O=x===void 0?[]:Ke(x);c!==null;)O.push(c),c=c.next;var S=O.length;if(S>0){var T=n&We&&f===0?a:null;if(r){for(h=0;h<S;h+=1)(H=O[h].a)==null||H.measure();for(h=0;h<S;h+=1)(U=O[h].a)==null||U.fix()}ba(e,O,T,_)}}r&&na(()=>{var W;if(y!==void 0)for(u of y)(W=u.a)==null||W.apply()}),Pe.first=e.first&&e.first.e,Pe.last=k&&k.e}function qa(t,e,a,o){o&Re&&Le(t.v,e),o&Ie?Le(t.i,a):t.i=a}function Je(t,e,a,o,n,v,r,d,f){var _=Ee;try{var w=(f&Re)!==0,c=(f&va)===0,x=w?c?oa(n):Me(n):n,k=f&Ie?Me(r):r,y={i:k,v:x,k:v,a:null,e:null,prev:a,next:o};return Ee=y,y.e=Te(()=>d(t,x,k),z),y.e.prev=a&&a.e,y.e.next=o&&o.e,a===null?e.first=y:(a.next=y,a.e.next=y.e),o!==null&&(o.prev=y,o.e.prev=y.e),y}finally{Ee=_}}function He(t,e,a){for(var o=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,v=t.e.nodes_start;v!==o;){var r=Ge(v);n.before(v),v=r}}function $(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function re(t,e,a,o,n){var v=t,r="",d;Ve(()=>{if(r===(r=e()??"")){z&&Ae();return}d!==void 0&&(ze(d),d=void 0),r!==""&&(d=Te(()=>{if(z){ae.data;for(var f=Ae(),_=f;f!==null&&(f.nodeType!==8||f.data!=="");)_=f,f=Ge(f);if(f===null)throw _a(),pa;Ce(ae,_),v=ge(f);return}var w=r+"",c=$e(w);Ce(Ye(c),c.lastChild),v.before(c)}))})}function ee(t,e,a,o){a=a==null?null:a+"";var n=t.__attributes??(t.__attributes={});z&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="loading"&&(t[ga]=a),a===null?t.removeAttribute(e):t.setAttribute(e,a))}function Oe(t,e,a){if(a){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Ea(t,e,a,o,n){var v=t.__attributes??(t.__attributes={}),r=t.style,d="style-"+e;v[d]===a&&!n||(v[d]=a,a==null?r.removeProperty(e):r.setProperty(e,a,""))}const Aa=""+new URL("../assets/portrait.D0BQskwx.png",import.meta.url).href;var La=m('<a class="link svelte-1fyci2q"><!></a>');function we(t,e){ve(e,!0);const a=Z(()=>e.href.startsWith("http://")||e.href.startsWith("https://"));var o=La(),n=i(o);xa(n,()=>e.children),s(o),I(()=>{ee(o,"href",e.href),ee(o,"target",l(a)?"_blank":null),ee(o,"rel",l(a)?"noopener noreferrer":null)}),p(t,o),oe()}function Xe(t){return t.map(([e,a])=>`${e},${a}`).join(" ")}var Ta=m(`<img class="portrait-img svelte-efqkbr" alt="Kévin Combriat's Portrait">`),Ra=m('<div class="profile-about-entry svelte-efqkbr"><em><!></em></div>'),Ia=m('<div class="profile-about svelte-efqkbr"></div>'),Da=m("<!><!>",1),Sa=m('<li><span class="profile-skills-content-name svelte-efqkbr"> </span> </li>'),Ca=m('<div class="profile-skills svelte-efqkbr"><div class="profile-skills-title svelte-efqkbr">Skills</div> <ul class="profile-skills-content svelte-efqkbr"></ul></div>'),Na=m('<svg class="hidden" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><polygon fill="black"></polygon></svg> <div class="profile svelte-efqkbr"><div class="portrait-img-wrapper svelte-efqkbr"><!></div> <div class="profile-content svelte-efqkbr"><div class="profile-name svelte-efqkbr"> </div> <div class="profile-position svelte-efqkbr"> </div> <!> <div class="profile-contacts svelte-efqkbr"><div class="profile-contacts-title svelte-efqkbr">Contacts</div> <ul class="profile-contacts-content svelte-efqkbr"><li><span class="profile-contacts-address svelte-efqkbr"> </span></li> <li><!></li> <li><span></span></li></ul></div> <!></div></div>',1);function Pa(t,e){ve(e,!0);let a=ka(void 0);const o=Z(()=>l(a)?`url('data:image/svg+xml;charset=utf-8,${l(a).outerHTML}')`:null),n=Xe([[0,0],[100,0],[100,100*.5],[100*.35,100],[0,100*.8],[0,0]]);var v=Na(),r=pe(v);ya(r,S=>Le(a,S),()=>l(a));var d=i(r);ee(d,"points",n),s(r);var f=g(r,2),_=i(f),w=i(_);N(w,()=>l(o),S=>{var T=Ta();ee(T,"src",Aa),I(()=>Ea(T,"--mask-image",l(o))),p(S,T)}),s(_);var c=g(_,2),x=i(c),k=i(x);s(x);var y=g(x,2),A=i(y);s(y);var q=g(y,2);N(q,()=>e.profile.about.length>0,S=>{var T=Ia();K(T,21,()=>e.profile.about,he,(P,B)=>{var H=Ra(),U=i(H),W=i(U);re(W,()=>l(B)),s(U),s(H),p(P,H)}),s(T),p(S,T)});var E=g(q,2),L=g(i(E),2),u=i(L),h=i(u),F=i(h);s(h),s(u);var M=g(u,2),D=i(M);we(D,{get href(){return`mailto:${e.profile.email??""}`},children:(S,T)=>{ke();var P=G();I(()=>R(P,e.profile.email)),p(S,P)},$$slots:{default:!0}}),s(M);var V=g(M,2),Q=i(V);K(Q,23,()=>e.profile.profiles,({network:S,url:T})=>S,(S,T,P)=>{let B=()=>l(T).network,H=()=>l(T).url;var U=Da(),W=pe(U);N(W,()=>l(P)!==0,J=>{var te=G(" - ");p(J,te)});var j=g(W);we(j,{get href(){return H()},children:(J,te)=>{ke();var se=G();I(()=>R(se,B())),p(J,se)},$$slots:{default:!0}}),p(S,U)}),s(Q),s(V),s(L),s(E);var O=g(E,2);N(O,()=>e.profile.skills&&e.profile.skills.length>0,S=>{var T=Ca(),P=g(i(T),2);K(P,21,()=>e.profile.skills,({name:B,duration:H})=>B,(B,H)=>{let U=()=>l(H).name,W=()=>l(H).duration;var j=Sa(),J=i(j),te=i(J);s(J);var se=g(J);s(j),I(()=>{R(te,U()),R(se,` - ${W()??""}`)}),p(B,j)}),s(P),s(T),p(S,T)}),s(c),s(f),I(()=>{R(k,`${e.profile.first_name??""} ${e.profile.last_name??""}`),R(A,e.profile.position),R(F,`${e.profile.location.city??""} - ${e.profile.location.country??""}`)}),p(t,v),oe()}const Ma="en-US";function ye(t){return t.toLocaleString(Ma,{year:"numeric",month:"short",day:"2-digit"})}var Ha=Ue('<polygon fill="rgb(224 231 255)"></polygon>'),Oa=Ue('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none"></svg>');function Be(t,e){ve(e,!0);const a=100,o=Z(()=>e.polygons(a));var n=Oa();ee(n,"viewBox",`0 0 ${a} ${a}`),K(n,21,()=>l(o),he,(v,r)=>{let d=ha(()=>wa(l(r).opacity,1)),f=()=>l(r).vertices;var _=Ha();I(()=>ee(_,"points",Xe(f()))),I(()=>ee(_,"opacity",l(d))),p(v,_)}),s(n),p(t,n),oe()}var Ba=m('<span class="text-sm"> </span>'),Ua=m('<div class="works-context svelte-1ar2t1q"> </div>'),Va=m('<!><span class="works-skills-name svelte-1ar2t1q"><!></span>',1),Wa=m('<div class="works-skills svelte-1ar2t1q"><span class="works-skills-label svelte-1ar2t1q"><em>Skills:</em></span> <!></div>'),Ya=m('<span class="text-sm"><!></span>'),Ka=m('<li><span><span class="font-semibold text-indigo-800"><!><!></span> <!></span></li>'),Qa=m("<li><!></li>"),za=m('<div class="works-summary svelte-1ar2t1q"><!></div>'),Ga=m('<div class="works-separator-wrapper svelte-1ar2t1q"><hr class="works-separator svelte-1ar2t1q"></div>'),Ja=m('<div class="works-entry-wrapper svelte-1ar2t1q"><div class="works-entry svelte-1ar2t1q"><div class="works-polygons svelte-1ar2t1q"><!></div> <div class="works-content svelte-1ar2t1q"><div class="works-position svelte-1ar2t1q"> </div> <div class="works-position-details svelte-1ar2t1q"><div class="works-company"><!> <span class="works-company-details svelte-1ar2t1q"> <!></span></div> <div class="works-dates svelte-1ar2t1q"> </div></div> <!> <!> <ul class="works-highlights svelte-1ar2t1q"></ul> <!></div></div> <!></div>'),Xa=m('<div class="works svelte-1ar2t1q"><div class="works-label svelte-1ar2t1q">Work Experience</div> <!></div>');function Za(t,e){ve(e,!0);const a=r=>[{opacity:.7,vertices:[[0,0],[r*.72,0],[r,r*.28],[r*.5,r],[0,r]]}],o=r=>[{vertices:[[r,0],[r*.28,0],[0,r*.28],[r*.5,r],[r,r]]}];var n=Xa(),v=g(i(n),2);K(v,19,()=>e.works,({position:r,company:d,industry:f,website:_,place:w,start_date:c,end_date:x,skills:k,context:y,highlights:A,summary:q})=>d,(r,d,f)=>{let _=()=>l(d).position,w=()=>l(d).company,c=()=>l(d).industry,x=()=>l(d).website,k=()=>l(d).place,y=()=>l(d).start_date,A=()=>l(d).end_date,q=()=>l(d).skills,E=()=>l(d).context,L=()=>l(d).highlights,u=()=>l(d).summary;var h=Ja();const F=Z(()=>l(f)&1);var M=i(h),D=i(M),V=i(D);N(V,()=>l(F),C=>{Be(C,{polygons:a})},C=>{Be(C,{polygons:o})}),s(D);var Q=g(D,2),O=i(Q),S=i(O);s(O);var T=g(O,2),P=i(T),B=i(P);N(B,x,C=>{we(C,{get href(){return x()},children:(b,Y)=>{ke();var de=G();I(()=>R(de,w())),p(b,de)},$$slots:{default:!0}})},C=>{var b=G();I(()=>R(b,w())),p(C,b)});var H=g(B,2),U=i(H),W=g(U);N(W,c,C=>{var b=Ba(),Y=i(b);s(b),I(()=>R(Y,`(${c()??""})`)),p(C,b)}),s(H),s(P);var j=g(P,2);const J=Z(()=>ye(new Date(y()))??""),te=Z(()=>(A()?ye(new Date(A())):"Present")??"");var se=i(j);I(()=>R(se,`${l(J)} - ${l(te)}`)),s(j),s(T);var De=g(T,2);N(De,E,C=>{var b=Ua(),Y=i(b);s(b),I(()=>R(Y,`(${E()??""})`)),p(C,b)});var Se=g(De,2);N(Se,()=>q()&&q().length>0,C=>{var b=Wa(),Y=g(i(b),2);K(Y,17,q,he,(ce,X,le)=>{var fe=Va(),ie=pe(fe);N(ie,()=>le>0,me=>{var ne=G();ne.nodeValue=",  ",p(me,ne)});var ue=g(ie),be=i(ue);re(be,()=>l(X)),s(ue),p(ce,fe)}),s(b),p(C,b)});var xe=g(Se,2);K(xe,21,L,he,(C,b)=>{var Y=ea(),de=pe(Y);N(de,()=>Array.isArray(l(b)),ce=>{var X=Ka();const le=Z(()=>typeof l(b)[1]=="string"&&l(b)[1].length>0);var fe=i(X),ie=i(fe),ue=i(ie);re(ue,()=>l(b)[0]);var be=g(ue);N(be,()=>l(le),ne=>{var _e=G(":");p(ne,_e)}),s(ie);var me=g(ie,2);N(me,()=>l(le),ne=>{var _e=Ya(),je=i(_e);re(je,()=>l(b)[1]),s(_e),p(ne,_e)}),s(fe),s(X),p(ce,X)},ce=>{var X=Qa(),le=i(X);re(le,()=>l(b)),s(X),p(ce,X)}),p(C,Y)}),s(xe);var Ze=g(xe,2);N(Ze,u,C=>{var b=za(),Y=i(b);re(Y,u),s(b),p(C,b)}),s(Q),s(M);var Fe=g(M,2);N(Fe,()=>l(f)+1<e.works.length,C=>{var b=Ga();p(C,b)}),s(h),I(()=>{Oe(M,"pt-8",l(f)>0),Oe(D,"works-polygons-left",l(F)),R(S,_()),R(U,`${k()??""} `)}),p(r,h)}),s(n),p(t,n),oe()}var Fa=m('<div class="educations-entry svelte-5pe6a3"><div class="educations-content svelte-5pe6a3"><div class="educations-institution svelte-5pe6a3"><!></div> <div class="educations-institution-details svelte-5pe6a3"><div class="educations-place"> </div> <div class="educations-dates svelte-5pe6a3"> </div></div></div></div>'),ja=m('<div class="educations svelte-5pe6a3"><div class="educations-label svelte-5pe6a3">Education</div> <!></div>');function $a(t,e){ve(e,!0);var a=ja(),o=g(i(a),2);K(o,17,()=>e.educations,({institution:n,website:v,place:r,start_date:d,end_date:f,area:_})=>n,(n,v)=>{let r=()=>l(v).institution,d=()=>l(v).website,f=()=>l(v).place,_=()=>l(v).start_date,w=()=>l(v).end_date,c=()=>l(v).area;var x=Fa(),k=i(x),y=i(k),A=i(y);N(A,d,D=>{we(D,{get href(){return d()},children:(V,Q)=>{ke();var O=G();I(()=>R(O,r())),p(V,O)},$$slots:{default:!0}})},D=>{var V=G();I(()=>R(V,r())),p(D,V)}),s(y);var q=g(y,2),E=i(q),L=i(E);s(E);var u=g(E,2);const h=Z(()=>ye(new Date(_()))??""),F=Z(()=>ye(new Date(w()))??"");var M=i(u);I(()=>R(M,`${l(h)} - ${l(F)}`)),s(u),s(q),s(k),s(x),I(()=>R(L,`${c()??""}, ${f()??""}`)),p(n,x)}),s(a),p(t,a),oe()}var er=m("<!><!>",1),ar=m('<li><span class="skills-entry-label svelte-7wffpi"> </span>: <!></li>'),rr=m('<div class="skills svelte-7wffpi"><div class="skills-label svelte-7wffpi">Skills & Expertise</div> <div class="skills-content svelte-7wffpi"><ul class="skills-list svelte-7wffpi"></ul></div></div>');function tr(t,e){var a=rr(),o=g(i(a),2),n=i(o);K(n,21,()=>e.skills,({name:v,keywords:r})=>v,(v,r)=>{let d=()=>l(r).name,f=()=>l(r).keywords;var _=ar(),w=i(_),c=i(w);s(w);var x=g(w,2);K(x,18,f,k=>k,(k,y,A)=>{var q=er(),E=pe(q);N(E,()=>l(A)!==0,u=>{var h=G(", ");p(u,h)});var L=g(E);re(L,()=>y),p(k,q)}),s(_),I(()=>R(c,d())),p(v,_)}),s(n),s(o),s(a),p(t,a)}var sr=m('<li><span class="languages-entry-label svelte-14zt5wz"> </span> </li>'),lr=m('<div class="languages svelte-14zt5wz"><div class="languages-label svelte-14zt5wz">Languages</div> <div class="languages-content svelte-14zt5wz"><ul class="languages-list svelte-14zt5wz"></ul></div></div>');function ir(t,e){var a=lr(),o=g(i(a),2),n=i(o);K(n,21,()=>e.languages,({language:v,fluency:r})=>v,(v,r)=>{let d=()=>l(r).language,f=()=>l(r).fluency;var _=sr(),w=i(_),c=i(w);s(w);var x=g(w);s(_),I(()=>{R(c,d()),R(x,`: ${f()??""}`)}),p(v,_)}),s(n),s(o),s(a),p(t,a)}var nr=m('<div class="resume svelte-3937nr"><div class="profile svelte-3937nr"><!></div> <div class="experience svelte-3937nr"><!> <!> <!> <!></div></div>');function ur(t,e){ve(e,!0);var a=nr(),o=i(a),n=i(o);Pa(n,{get profile(){return e.resume.basics}}),s(o);var v=g(o,2),r=i(v);Za(r,{get works(){return e.resume.works}});var d=g(r,2);$a(d,{get educations(){return e.resume.educations}});var f=g(d,2);tr(f,{get skills(){return e.resume.skills}});var _=g(f,2);ir(_,{get languages(){return e.resume.languages}}),s(v),s(a),p(t,a),oe()}export{ur as R};