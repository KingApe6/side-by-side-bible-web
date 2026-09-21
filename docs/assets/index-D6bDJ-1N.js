(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const A=[{number:1,name:"Genesis",abbreviation:"Gen",chapterCount:50},{number:2,name:"Exodus",abbreviation:"Exod",chapterCount:40},{number:3,name:"Leviticus",abbreviation:"Lev",chapterCount:27},{number:4,name:"Numbers",abbreviation:"Num",chapterCount:36},{number:5,name:"Deuteronomy",abbreviation:"Deut",chapterCount:34},{number:6,name:"Joshua",abbreviation:"Josh",chapterCount:24},{number:7,name:"Judges",abbreviation:"Judg",chapterCount:21},{number:8,name:"Ruth",abbreviation:"Ruth",chapterCount:4},{number:9,name:"1 Samuel",abbreviation:"1Sam",chapterCount:31},{number:10,name:"2 Samuel",abbreviation:"2Sam",chapterCount:24},{number:11,name:"1 Kings",abbreviation:"1Kgs",chapterCount:22},{number:12,name:"2 Kings",abbreviation:"2Kgs",chapterCount:25},{number:13,name:"1 Chronicles",abbreviation:"1Chr",chapterCount:29},{number:14,name:"2 Chronicles",abbreviation:"2Chr",chapterCount:36},{number:15,name:"Ezra",abbreviation:"Ezra",chapterCount:10},{number:16,name:"Nehemiah",abbreviation:"Neh",chapterCount:13},{number:17,name:"Esther",abbreviation:"Esth",chapterCount:10},{number:18,name:"Job",abbreviation:"Job",chapterCount:42},{number:19,name:"Psalms",abbreviation:"Ps",chapterCount:150},{number:20,name:"Proverbs",abbreviation:"Prov",chapterCount:31},{number:21,name:"Ecclesiastes",abbreviation:"Eccl",chapterCount:12},{number:22,name:"Song of Songs",abbreviation:"Song",chapterCount:8},{number:23,name:"Isaiah",abbreviation:"Isa",chapterCount:66},{number:24,name:"Jeremiah",abbreviation:"Jer",chapterCount:52},{number:25,name:"Lamentations",abbreviation:"Lam",chapterCount:5},{number:26,name:"Ezekiel",abbreviation:"Ezek",chapterCount:48},{number:27,name:"Daniel",abbreviation:"Dan",chapterCount:12},{number:28,name:"Hosea",abbreviation:"Hos",chapterCount:14},{number:29,name:"Joel",abbreviation:"Joel",chapterCount:3},{number:30,name:"Amos",abbreviation:"Amos",chapterCount:9},{number:31,name:"Obadiah",abbreviation:"Obad",chapterCount:1},{number:32,name:"Jonah",abbreviation:"Jonah",chapterCount:4},{number:33,name:"Micah",abbreviation:"Mic",chapterCount:7},{number:34,name:"Nahum",abbreviation:"Nah",chapterCount:3},{number:35,name:"Habakkuk",abbreviation:"Hab",chapterCount:3},{number:36,name:"Zephaniah",abbreviation:"Zeph",chapterCount:3},{number:37,name:"Haggai",abbreviation:"Hag",chapterCount:2},{number:38,name:"Zechariah",abbreviation:"Zech",chapterCount:14},{number:39,name:"Malachi",abbreviation:"Mal",chapterCount:4},{number:40,name:"Matthew",abbreviation:"Matt",chapterCount:28},{number:41,name:"Mark",abbreviation:"Mark",chapterCount:16},{number:42,name:"Luke",abbreviation:"Luke",chapterCount:24},{number:43,name:"John",abbreviation:"John",chapterCount:21},{number:44,name:"Acts",abbreviation:"Acts",chapterCount:28},{number:45,name:"Romans",abbreviation:"Rom",chapterCount:16},{number:46,name:"1 Corinthians",abbreviation:"1Cor",chapterCount:16},{number:47,name:"2 Corinthians",abbreviation:"2Cor",chapterCount:13},{number:48,name:"Galatians",abbreviation:"Gal",chapterCount:6},{number:49,name:"Ephesians",abbreviation:"Eph",chapterCount:6},{number:50,name:"Philippians",abbreviation:"Phil",chapterCount:4},{number:51,name:"Colossians",abbreviation:"Col",chapterCount:4},{number:52,name:"1 Thessalonians",abbreviation:"1Thess",chapterCount:5},{number:53,name:"2 Thessalonians",abbreviation:"2Thess",chapterCount:3},{number:54,name:"1 Timothy",abbreviation:"1Tim",chapterCount:6},{number:55,name:"2 Timothy",abbreviation:"2Tim",chapterCount:4},{number:56,name:"Titus",abbreviation:"Titus",chapterCount:3},{number:57,name:"Philemon",abbreviation:"Phlm",chapterCount:1},{number:58,name:"Hebrews",abbreviation:"Heb",chapterCount:13},{number:59,name:"James",abbreviation:"Jas",chapterCount:5},{number:60,name:"1 Peter",abbreviation:"1Pet",chapterCount:5},{number:61,name:"2 Peter",abbreviation:"2Pet",chapterCount:3},{number:62,name:"1 John",abbreviation:"1John",chapterCount:5},{number:63,name:"2 John",abbreviation:"2John",chapterCount:1},{number:64,name:"3 John",abbreviation:"3John",chapterCount:1},{number:65,name:"Jude",abbreviation:"Jude",chapterCount:1},{number:66,name:"Revelation",abbreviation:"Rev",chapterCount:22}];function p(e){return A.find(t=>t.number===e)}const S=[{id:"kjv",abbreviation:"KJV",displayName:"King James Version",yearNote:"1769 (public domain)",licenseKind:"public-domain",enabled:!0,apiSlug:"kjv",attribution:"King James Version (1769). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules)."},{id:"web",abbreviation:"WEB",displayName:"World English Bible",yearNote:"public domain",licenseKind:"public-domain",enabled:!0,apiSlug:"web",attribution:"World English Bible (WEB). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules)."},{id:"asv",abbreviation:"ASV",displayName:"American Standard Version",yearNote:"1901 (public domain)",licenseKind:"public-domain",enabled:!0,apiSlug:"asv",attribution:"American Standard Version (1901). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules)."},{id:"esv",abbreviation:"ESV",displayName:"English Standard Version",yearNote:"licensed — not bundled",licenseKind:"licensed",enabled:!1,attribution:"English Standard Version®. Copyright © Crossway Bibles.",licenseNote:"Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules."},{id:"lsb",abbreviation:"LSB",displayName:"Legacy Standard Bible",yearNote:"licensed — not bundled",licenseKind:"licensed",enabled:!1,attribution:"Legacy Standard Bible®. Copyright © Lockman Foundation / Three Sixteen Publishing.",licenseNote:"Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules."},{id:"net",abbreviation:"NET",displayName:"New English Translation",yearNote:"licensed — not bundled",licenseKind:"licensed",enabled:!1,attribution:"NET Bible®. Copyright © Biblical Studies Press, L.L.C.",licenseNote:"Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules."}];function y(e){return S.find(t=>t.id===e)}function g(){return S.filter(e=>e.enabled)}const R=["kjv","web"],d={columns:"sbsb.columns",columnCount:"sbsb.columnCount",book:"sbsb.book",chapter:"sbsb.chapter",bgHex:"sbsb.bgHex",textHex:"sbsb.textHex",setupDone:"sbsb.setupDone",showRedLetter:"sbsb.showRedLetter"};function M(e,t){try{const r=localStorage.getItem(e);return r==null?t:JSON.parse(r)}catch{return t}}function O(){return new Set(g().map(e=>e.id))}function B(e,t){const r=O(),a=[...R],n=[];for(let o=0;o<t;o++){const i=e[o];i&&r.has(i)?n.push(i):n.push(a[o%a.length]??"kjv")}return n}function V(){const e=Number(localStorage.getItem(d.columnCount)??"2"),t=[2,3,4].includes(e)?e:2,r=B(M(d.columns,[...R]),t),a=Math.min(66,Math.max(1,Number(localStorage.getItem(d.book)??"1")||1)),n=Math.max(1,Number(localStorage.getItem(d.chapter)??"1")||1),o=localStorage.getItem(d.showRedLetter);return{columnIds:r,columnCount:t,bookNumber:a,chapter:n,backgroundHex:localStorage.getItem(d.bgHex)??"",textHex:localStorage.getItem(d.textHex)??"",setupDone:localStorage.getItem(d.setupDone)==="1",showRedLetter:o==null?!0:o==="1"}}function K(e,t){localStorage.setItem(d.columnCount,String(t)),localStorage.setItem(d.columns,JSON.stringify(B(e,t))),localStorage.setItem(d.setupDone,"1")}function v(e,t){localStorage.setItem(d.book,String(e)),localStorage.setItem(d.chapter,String(t))}function W(e,t){localStorage.setItem(d.bgHex,e),localStorage.setItem(d.textHex,t)}function D(e){localStorage.setItem(d.showRedLetter,e?"1":"0")}const z="https://api.getbible.net/v2",P=new Map,x=new Map;function _(e,t){return`${e}:${t}`}function U(e){const t=new Map;for(const r of e.chapters??[]){const a=new Map;for(const n of r.verses??[])typeof n.verse=="number"&&typeof n.text=="string"&&a.set(n.verse,n.text);t.set(r.chapter,a)}return t}async function G(e,t){const r=y(e);if(!r?.enabled||!r.apiSlug)throw new Error(`Translation "${e}" is not loadable.`);const a=`${z}/${r.apiSlug}/${t}.json`,n=await fetch(a);if(!n.ok)throw new Error(`Failed to load ${r.abbreviation} book ${t} (${n.status}).`);const o=await n.json();return U(o)}async function Z(e,t,r){let a=P.get(e);a||(a=new Map,P.set(e,a));let n=a.get(t);if(!n){const o=_(e,t);let i=x.get(o);i||(i=G(e,t).finally(()=>x.delete(o)),x.set(o,i)),n=await i,a.set(t,n)}return n.get(r)??new Map}async function X(e,t,r){return Promise.all(e.map(a=>Z(a,t,r)))}function Y(e){const t=new Set;for(const a of e)for(const n of a.keys())t.add(n);return[...t].sort((a,n)=>a-n).map(a=>({verse:a,texts:e.map(n=>n.has(a)?n.get(a):null)}))}const Q=[{id:"bg-system",label:"System",hex:""},{id:"bg-white",label:"White",hex:"#FFFFFF"},{id:"bg-cream",label:"Paper",hex:"#F7F1E3"},{id:"bg-gray",label:"Light gray",hex:"#E8E8E8"},{id:"bg-sepia",label:"Sepia",hex:"#F4ECD8"},{id:"bg-dark",label:"Dark gray",hex:"#2C2C2E"},{id:"bg-black",label:"Black",hex:"#000000"}],ee=[{id:"tx-system",label:"System",hex:""},{id:"tx-black",label:"Black",hex:"#000000"},{id:"tx-dark",label:"Dark gray",hex:"#3A3A3C"},{id:"tx-sepia",label:"Sepia brown",hex:"#5C4033"},{id:"tx-white",label:"White",hex:"#FFFFFF"},{id:"tx-soft",label:"Soft white",hex:"#F2F2F7"}],H=/^#([0-9A-Fa-f]{6})$/;function j(e){const t=e.trim();if(t==="")return"";const r=t.startsWith("#")?t:`#${t}`;return H.test(r)?r.toUpperCase():null}function k(e,t){return H.test(e)?e.toUpperCase():t.toUpperCase()}function te(e){const t=/^#([0-9A-Fa-f]{6})$/.exec(e);if(!t)return null;const r=parseInt(t[1],16),a=(r>>16&255)/255,n=(r>>8&255)/255,o=(r&255)/255,i=c=>c<=.03928?c/12.92:((c+.055)/1.055)**2.4;return .2126*i(a)+.7152*i(n)+.0722*i(o)}function I(e,t){const r=document.documentElement;e?r.style.setProperty("--reader-bg",e):r.style.removeProperty("--reader-bg"),t?r.style.setProperty("--reader-fg",t):r.style.removeProperty("--reader-fg");const a=e?te(e):null;a!=null&&a<.35?r.style.setProperty("--woj-color","#ef5350"):a!=null?r.style.setProperty("--woj-color","#c62828"):r.style.removeProperty("--woj-color")}const E=new Map,$=new Map;function ne(e){return`/side-by-side-bible-web/data/woj/${e}.json`}async function re(e){if(E.has(e))return E.get(e);let t=$.get(e);t||(t=(async()=>{try{const a=await fetch(ne(e));return a.ok?await a.json():null}catch{return null}finally{$.delete(e)}})(),$.set(e,t));const r=await t;return E.set(e,r),r}function F(e,t){return`${e}:${t}`}function ae(e,t,r){return!!e?.[F(t,r)]?.some(n=>n.j)}function m(e){return e.replace(/\u2018|\u2019/g,"'").replace(/\u201C|\u201D/g,'"').replace(/\u2014|\u2013|—|–/g,"-").replace(/\u00A0/g," ").replace(/¶/g,"").replace(/\s+/g," ").trim()}function b(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function w(e){return`<span class="words-of-jesus">${e}</span>`}function T(e){return e==="‘"||e==="’"?"'":e==="“"||e==="”"?'"':e==="—"||e==="–"||e==="—"||e==="–"?"-":e===" "?" ":e}function oe(e){const t=e.map(o=>o.t).join(" "),r=m(t),a=new Array(r.length).fill(!1);let n=0;for(let o=0;o<e.length;o++){const i=m(e[o].t);if(i){if(o>0&&n<r.length&&r[n]===" "&&(n+=1),r.slice(n,n+i.length)!==i){const c=r.indexOf(i,Math.max(0,n-1));if(c<0)return null;n=c}if(e[o].j)for(let c=0;c<i.length;c++)a[n+c]=!0;n+=i.length}}return{norm:r,mask:a}}function se(e,t){const r=m(e);if(r.length!==t.length)return null;const a=[];let n="",o=!1;const i=()=>{n&&(a.push({j:o,text:n}),n="")};let c=0,u=0;for(;c<e.length&&/\s/.test(e[c]);)a.push({j:!1,text:e[c]}),c+=1;for(;u<r.length&&c<e.length;){const s=r[u],l=t[u];if(s===" "){let f="";for(;c<e.length&&/\s/.test(e[c]);)f+=e[c],c+=1;if(!f)return null;n&&o!==l&&i(),o=l,n+=f,u+=1;continue}for(;c<e.length&&/\s/.test(e[c]);)i(),a.push({j:!1,text:e[c]}),c+=1;if(c>=e.length)return null;const h=e[c];if(T(h)!==s&&h!==s)return null;n&&o!==l&&i(),o=l,n+=h,c+=1,u+=1}return i(),u!==r.length?null:(c<e.length&&a.push({j:!1,text:e.slice(c)}),a.map(s=>s.j?w(b(s.text)):b(s.text)).join(""))}function ie(e,t){const r=m(e),a=new Array(r.length);{let s=0;for(;s<e.length&&/\s/.test(e[s]);)s+=1;for(let l=0;l<r.length;l++){const h=r[l];if(h===" "){if(s>=e.length||!/\s/.test(e[s]))return null;for(a[l]=s;s<e.length&&/\s/.test(e[s]);)s+=1;continue}for(;s<e.length&&/\s/.test(e[s]);)s+=1;if(s>=e.length||T(e[s])!==h&&e[s]!==h)return null;a[l]=s,s+=1}}const n=[];let o=0;for(const s of t){const l=m(s.t);if(!l)continue;const h=r.indexOf(l,o);if(h<0)return null;if(s.j){const L=a[h],f=a[h+l.length-1];n.push({start:L,end:f+1})}o=h+l.length}if(!n.length)return b(e);n.sort((s,l)=>s.start-l.start);const i=[];for(const s of n){const l=i[i.length-1];l&&s.start<=l.end?l.end=Math.max(l.end,s.end):i.push({...s})}let c="",u=0;for(const s of i)s.start>u&&(c+=b(e.slice(u,s.start))),c+=w(b(e.slice(s.start,s.end))),u=s.end;return u<e.length&&(c+=b(e.slice(u))),c}function ce(e,t,r){if(!r||!t?.length||!t.some(o=>o.j))return b(e);const a=oe(t);if(a&&m(e)===a.norm){const o=se(e,a.mask);if(o)return o}const n=ie(e,t);return n??w(b(e))}function le(e,t,r){return!r||!t?b(e):w(b(e))}class ue{root;prefs;screen="picker";loading=!1;error=null;aligned=[];wojIndex=null;draftCount=2;draftIds=["kjv","web"];constructor(t){this.root=t,this.prefs=V(),this.draftCount=this.prefs.columnCount,this.draftIds=[...this.prefs.columnIds],I(this.prefs.backgroundHex,this.prefs.textHex),this.screen=this.prefs.setupDone?"reader":"picker",this.screen==="reader"?this.loadAndRender():this.render()}setScreen(t){if(this.screen=t,t==="picker"||t==="change-translations"){for(this.draftCount=this.prefs.columnCount,this.draftIds=[...this.prefs.columnIds];this.draftIds.length<this.draftCount;)this.draftIds.push(g()[0]?.id??"kjv");this.draftIds=this.draftIds.slice(0,this.draftCount)}this.render()}async loadAndRender(){this.loading=!0,this.error=null,this.render();try{const t=p(this.prefs.bookNumber);if(!t)throw new Error("Unknown book.");this.prefs.chapter>t.chapterCount&&(this.prefs.chapter=1,v(this.prefs.bookNumber,this.prefs.chapter));const[r,a]=await Promise.all([X(this.prefs.columnIds,this.prefs.bookNumber,this.prefs.chapter),re(this.prefs.bookNumber)]);this.wojIndex=a,this.aligned=Y(r)}catch(t){this.error=t instanceof Error?t.message:"Could not load chapter.",this.aligned=[]}finally{this.loading=!1,this.render()}}commitDraft(t){const r=this.draftIds.slice(0,this.draftCount);r.length!==this.draftCount||r.some(a=>!y(a)?.enabled)||(K(r,this.draftCount),this.prefs.columnIds=r,this.prefs.columnCount=this.draftCount,this.prefs.setupDone=!0,t?(this.screen="reader",this.loadAndRender()):(this.screen="reader",this.loadAndRender()))}goPrevChapter(){if(p(this.prefs.bookNumber)){if(this.prefs.chapter>1)this.prefs.chapter-=1;else if(this.prefs.bookNumber>1){this.prefs.bookNumber-=1;const r=p(this.prefs.bookNumber);this.prefs.chapter=r.chapterCount}else return;v(this.prefs.bookNumber,this.prefs.chapter),this.loadAndRender()}}goNextChapter(){const t=p(this.prefs.bookNumber);if(t){if(this.prefs.chapter<t.chapterCount)this.prefs.chapter+=1;else if(this.prefs.bookNumber<66)this.prefs.bookNumber+=1,this.prefs.chapter=1;else return;v(this.prefs.bookNumber,this.prefs.chapter),this.loadAndRender()}}render(){switch(this.screen){case"picker":case"change-translations":this.root.innerHTML=this.renderPicker(this.screen==="picker"),this.bindPicker();break;case"reader":this.root.innerHTML=this.renderReader(),this.bindReader();break;case"book":this.root.innerHTML=this.renderBookPicker(),this.bindBookPicker();break;case"appearance":this.root.innerHTML=this.renderAppearance(),this.bindAppearance();break;case"about":this.root.innerHTML=this.renderAbout(),this.bindAbout();break}}renderPicker(t){const r=g(),a=S.filter(o=>!o.enabled),n=Array.from({length:this.draftCount},(o,i)=>i);return`
      <div class="screen picker-screen">
        <header class="screen-header">
          ${t?"":'<button type="button" class="btn ghost" data-action="back-reader" aria-label="Back">← Back</button>'}
          <h1>${t?"Side by Side Bible":"Change Translations"}</h1>
        </header>
        <p class="lede">
          Choose ${this.draftCount} columns of public-domain translations.
          The same translation may be used more than once. Verses stay locked in one scroll.
        </p>
        <fieldset class="count-fieldset">
          <legend>Columns</legend>
          <div class="segmented" role="group" aria-label="Column count">
            ${[2,3,4].map(o=>`
              <button type="button" class="seg ${this.draftCount===o?"active":""}" data-count="${o}">${o}</button>
            `).join("")}
          </div>
        </fieldset>
        <div class="column-picks">
          ${n.map(o=>`
            <section class="pick-card">
              <h2>Column ${o+1}</h2>
              <div class="radio-list" role="radiogroup" aria-label="Column ${o+1} translation">
                ${r.map(i=>`
                  <label class="radio-row">
                    <input type="radio" name="col-${o}" value="${i.id}" ${this.draftIds[o]===i.id?"checked":""} />
                    <span class="radio-body">
                      <strong>${i.abbreviation}</strong>
                      <span>${i.displayName}</span>
                      <em>${i.yearNote}</em>
                    </span>
                  </label>
                `).join("")}
              </div>
            </section>
          `).join("")}
        </div>
        <details class="licensed-stubs">
          <summary>Licensed translations (not available yet)</summary>
          <ul>
            ${a.map(o=>`
              <li>
                <strong>${o.abbreviation}</strong> — ${o.displayName}
                <span class="muted">${o.licenseNote??""}</span>
              </li>
            `).join("")}
          </ul>
        </details>
        <div class="picker-actions">
          <button type="button" class="btn primary" data-action="commit" ${this.canCommit()?"":"disabled"}>
            ${t?"Open Reader":"Apply &amp; Return"}
          </button>
        </div>
      </div>
    `}canCommit(){return this.draftIds.length===this.draftCount&&this.draftIds.every(t=>!!y(t)?.enabled)}bindPicker(){this.root.querySelectorAll("[data-count]").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.count);for(this.draftCount=r;this.draftIds.length<r;)this.draftIds.push(g()[0]?.id??"kjv");this.draftIds=this.draftIds.slice(0,r),this.render()})}),this.root.querySelectorAll('input[type="radio"]').forEach(t=>{t.addEventListener("change",()=>{const r=/^col-(\d+)$/.exec(t.name);if(!r)return;const a=Number(r[1]);this.draftIds[a]=t.value;const n=this.root.querySelector('[data-action="commit"]');n&&(n.disabled=!this.canCommit())})}),this.root.querySelector('[data-action="commit"]')?.addEventListener("click",()=>{this.commitDraft(!0)}),this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()})}renderReader(){const t=p(this.prefs.bookNumber),r=this.prefs.columnIds.map(n=>y(n)?.abbreviation??n);return`
      <div class="screen reader-screen" style="--cols: ${this.prefs.columnCount}">
        <header class="reader-toolbar">
          <div class="toolbar-left">
            <button type="button" class="btn ghost" data-action="prev" aria-label="Previous chapter">‹</button>
            <button type="button" class="btn location" data-action="pick-book">
              ${t?.name??"Book"} ${this.prefs.chapter}
            </button>
            <button type="button" class="btn ghost" data-action="next" aria-label="Next chapter">›</button>
          </div>
          <div class="toolbar-right">
            <button type="button" class="btn ghost" data-action="change-tr" title="Translations">Aa⇄</button>
            <button type="button" class="btn ghost" data-action="appearance" title="Appearance">◐</button>
            <button type="button" class="btn ghost" data-action="about" title="About">ⓘ</button>
          </div>
        </header>
        <div class="col-headers" aria-hidden="true">
          <span class="verse-num-spacer"></span>
          ${r.map(n=>`<span class="col-header">${n}</span>`).join("")}
        </div>
        <div class="reader-scroll" role="region" aria-label="Chapter text">
          ${this.loading?'<p class="status">Loading chapter…</p>':this.error?`<p class="status error">${N(this.error)}</p>`:this.aligned.length===0?'<p class="status">No verses found for this chapter.</p>':this.aligned.map(n=>this.renderVerseRow(n)).join("")}
        </div>
      </div>
    `}renderVerseRow(t){const r=this.prefs.showRedLetter,a=this.prefs.chapter,n=ae(this.wojIndex,a,t.verse),o=this.wojIndex?.[F(a,t.verse)],i=t.texts.map((c,u)=>{if(c==null)return'<div class="verse-cell"><span class="missing">—</span></div>';const s=this.prefs.columnIds[u];let l;return s==="kjv"?l=ce(c,o,r):l=le(c,n,r),`<div class="verse-cell">${l}</div>`}).join("");return`
              <div class="verse-row">
                <span class="verse-num">${t.verse}</span>
                ${i}
              </div>
            `}bindReader(){this.root.querySelector('[data-action="prev"]')?.addEventListener("click",()=>this.goPrevChapter()),this.root.querySelector('[data-action="next"]')?.addEventListener("click",()=>this.goNextChapter()),this.root.querySelector('[data-action="pick-book"]')?.addEventListener("click",()=>this.setScreen("book")),this.root.querySelector('[data-action="change-tr"]')?.addEventListener("click",()=>this.setScreen("change-translations")),this.root.querySelector('[data-action="appearance"]')?.addEventListener("click",()=>this.setScreen("appearance")),this.root.querySelector('[data-action="about"]')?.addEventListener("click",()=>this.setScreen("about"))}renderBookPicker(){const t=p(this.prefs.bookNumber),r=A.filter(n=>n.number<=39),a=A.filter(n=>n.number>=40);return`
      <div class="screen book-screen">
        <header class="screen-header">
          <button type="button" class="btn ghost" data-action="back-reader">← Back</button>
          <h1>Book &amp; Chapter</h1>
        </header>
        <div class="book-layout">
          <div class="book-lists">
            <section>
              <h2>Old Testament</h2>
              <div class="book-grid">
                ${r.map(n=>J(n.number,n.name,this.prefs.bookNumber)).join("")}
              </div>
            </section>
            <section>
              <h2>New Testament</h2>
              <div class="book-grid">
                ${a.map(n=>J(n.number,n.name,this.prefs.bookNumber)).join("")}
              </div>
            </section>
          </div>
          <div class="chapter-panel">
            <h2>${t?.name??""} — chapters</h2>
            <div class="chapter-grid">
              ${t?Array.from({length:t.chapterCount},(n,o)=>o+1).map(n=>`
                  <button type="button" class="chip ${n===this.prefs.chapter?"active":""}" data-chapter="${n}">${n}</button>
                `).join(""):""}
            </div>
          </div>
        </div>
      </div>
    `}bindBookPicker(){this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()}),this.root.querySelectorAll("[data-book]").forEach(t=>{t.addEventListener("click",()=>{this.prefs.bookNumber=Number(t.dataset.book),this.prefs.chapter=1,this.render(),this.bindBookPicker()})}),this.root.querySelectorAll("[data-chapter]").forEach(t=>{t.addEventListener("click",()=>{this.prefs.chapter=Number(t.dataset.chapter),v(this.prefs.bookNumber,this.prefs.chapter),this.screen="reader",this.loadAndRender()})})}renderAppearance(){const t=this.prefs.backgroundHex,r=this.prefs.textHex,a=k(t,"#FFFFFF"),n=k(r,"#000000");return`
      <div class="screen appearance-screen">
        <header class="screen-header">
          <button type="button" class="btn ghost" data-action="back-reader">← Back</button>
          <h1>Appearance</h1>
        </header>
        <section class="appear-block">
          <h2>Background</h2>
          <div class="swatches">
            ${Q.map(o=>`
              <button type="button" class="swatch ${t===o.hex?"active":""}" data-bg="${o.hex}" title="${o.label}">
                <span class="swatch-chip" style="${o.hex?`background:${o.hex}`:""}"></span>
                ${o.label}
              </button>
            `).join("")}
          </div>
          <div class="color-row">
            <label class="color-pick">
              <span>Pick a color</span>
              <input type="color" id="bg-color" value="${C(a)}" title="Background color" />
            </label>
            <label class="hex-field">
              <span>Hex <span class="muted">(optional)</span></span>
              <input type="text" id="bg-hex" value="${C(t)}" placeholder="#RRGGBB or blank for system" maxlength="7" />
            </label>
          </div>
        </section>
        <section class="appear-block">
          <h2>Text</h2>
          <div class="swatches">
            ${ee.map(o=>`
              <button type="button" class="swatch ${r===o.hex?"active":""}" data-fg="${o.hex}" title="${o.label}">
                <span class="swatch-chip text-chip" style="${o.hex?`background:${o.hex}`:""}"></span>
                ${o.label}
              </button>
            `).join("")}
          </div>
          <div class="color-row">
            <label class="color-pick">
              <span>Pick a color</span>
              <input type="color" id="fg-color" value="${C(n)}" title="Text color" />
            </label>
            <label class="hex-field">
              <span>Hex <span class="muted">(optional)</span></span>
              <input type="text" id="fg-hex" value="${C(r)}" placeholder="#RRGGBB or blank for system" maxlength="7" />
            </label>
          </div>
        </section>
        <section class="appear-block">
          <h2>Words of Jesus</h2>
          <label class="toggle-row">
            <input type="checkbox" id="toggle-red-letter" ${this.prefs.showRedLetter?"checked":""} />
            <span>Show Jesus’ words in red</span>
          </label>
          <p class="muted tip" style="margin:0.5rem 0 0">
            KJV uses precise red-letter spans from CrossWire OSIS markup.
            WEB and ASV tint the whole verse when that KJV verse has any words of Jesus (approximate).
          </p>
        </section>
        <div class="preview-card">
          <p class="preview-label">Preview</p>
          <p class="preview-sample">
            And he saith unto them,
            <span class="words-of-jesus">Why are ye fearful, O ye of little faith?</span>
            Then he arose, and rebuked the winds and the sea.
          </p>
        </div>
        <p class="muted tip">Choices are saved in this browser (localStorage).</p>
      </div>
    `}bindAppearance(){const t=()=>{W(this.prefs.backgroundHex,this.prefs.textHex),I(this.prefs.backgroundHex,this.prefs.textHex)},r=(u,s)=>{if(u==="bg"){this.prefs.backgroundHex=s;const l=this.root.querySelector("#bg-hex"),h=this.root.querySelector("#bg-color");l&&(l.value=s),h&&(h.value=k(s,"#FFFFFF"))}else{this.prefs.textHex=s;const l=this.root.querySelector("#fg-hex"),h=this.root.querySelector("#fg-color");l&&(l.value=s),h&&(h.value=k(s,"#000000"))}t()},a=()=>{this.render(),this.bindAppearance()};this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()}),this.root.querySelector("#toggle-red-letter")?.addEventListener("change",u=>{const s=u.target.checked;this.prefs.showRedLetter=s,D(s)}),this.root.querySelectorAll("[data-bg]").forEach(u=>{u.addEventListener("click",()=>{this.prefs.backgroundHex=u.dataset.bg??"",t(),a()})}),this.root.querySelectorAll("[data-fg]").forEach(u=>{u.addEventListener("click",()=>{this.prefs.textHex=u.dataset.fg??"",t(),a()})});const n=this.root.querySelector("#bg-color"),o=this.root.querySelector("#fg-color"),i=this.root.querySelector("#bg-hex"),c=this.root.querySelector("#fg-hex");n?.addEventListener("input",()=>{r("bg",n.value.toUpperCase())}),n?.addEventListener("change",()=>{a()}),o?.addEventListener("input",()=>{r("fg",o.value.toUpperCase())}),o?.addEventListener("change",()=>{a()}),i?.addEventListener("change",()=>{const u=j(i.value);if(u===null){i.value=this.prefs.backgroundHex;return}this.prefs.backgroundHex=u,t(),a()}),c?.addEventListener("change",()=>{const u=j(c.value);if(u===null){c.value=this.prefs.textHex;return}this.prefs.textHex=u,t(),a()})}renderAbout(){const t=g(),r=S.filter(a=>!a.enabled);return`
      <div class="screen about-screen">
        <header class="screen-header">
          <button type="button" class="btn ghost" data-action="back-reader">← Back</button>
          <h1>About</h1>
        </header>
        <article class="about-body">
          <p>
            <strong>Side by Side Bible</strong> lets you read two to four English Bible translations
            in verse-locked columns. One scroll keeps every verse aligned across columns.
          </p>
          <h2>Public-domain texts</h2>
          <ul>
            ${t.map(a=>`
              <li><strong>${a.abbreviation}</strong> — ${a.attribution}</li>
            `).join("")}
          </ul>
          <p>
            Text is fetched per book from
            <a href="https://getbible.net" target="_blank" rel="noopener noreferrer">getBible</a>
            v2 (<code>api.getbible.net/v2</code>). Verse wording is never invented by this app.
          </p>
          <h2>Words of Jesus (red letter)</h2>
          <p>
            Red-letter markup for the <strong>KJV</strong> column comes from the
            <a href="https://crosswire.org/" target="_blank" rel="noopener noreferrer">CrossWire</a>
            KJV OSIS module (<code>&lt;q who="Jesus"&gt;</code> spans), shipped as a compact
            per-book index under <code>data/woj/</code>. CrossWire grants a general public
            license to use the KJV2003/OSIS text for any purpose; this app attributes that
            module here and does not redistribute the full OSIS file.
          </p>
          <p>
            <strong>KJV:</strong> Jesus’ spoken segments are highlighted precisely when the
            getBible verse text aligns with the OSIS plain text (best-effort otherwise;
            if alignment fails but the verse has Jesus markup, the whole KJV verse is shown in red).
          </p>
          <p>
            <strong>WEB &amp; ASV:</strong> getBible modules lack WOJ tags. When the matching
            KJV verse contains any words of Jesus, the entire WEB/ASV verse is tinted red
            as an <em>approximate</em> cue — not a claim that every word in that verse is speech of Jesus.
          </p>
          <p class="muted">Toggle under Appearance → “Show Jesus’ words in red” (default on).</p>
          <h2>Licensed (not bundled)</h2>
          <ul>
            ${r.map(a=>`
              <li><strong>${a.abbreviation}</strong> — ${a.attribution} ${a.licenseNote??""}</li>
            `).join("")}
          </ul>
          <p class="muted">
            No accounts, no backend, no search, bookmarks, notes, or audio in this MVP.
            Companion iOS app: Side by Side Bible (separate repository).
          </p>
        </article>
      </div>
    `}bindAbout(){this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()})}}function J(e,t,r){return`<button type="button" class="book-btn ${e===r?"active":""}" data-book="${e}">${N(t)}</button>`}function N(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function C(e){return N(e)}const q=document.querySelector("#app");if(!q)throw new Error("Missing #app root");new ue(q);
