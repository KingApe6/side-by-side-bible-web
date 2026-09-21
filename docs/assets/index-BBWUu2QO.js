(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const m=[{number:1,name:"Genesis",abbreviation:"Gen",chapterCount:50},{number:2,name:"Exodus",abbreviation:"Exod",chapterCount:40},{number:3,name:"Leviticus",abbreviation:"Lev",chapterCount:27},{number:4,name:"Numbers",abbreviation:"Num",chapterCount:36},{number:5,name:"Deuteronomy",abbreviation:"Deut",chapterCount:34},{number:6,name:"Joshua",abbreviation:"Josh",chapterCount:24},{number:7,name:"Judges",abbreviation:"Judg",chapterCount:21},{number:8,name:"Ruth",abbreviation:"Ruth",chapterCount:4},{number:9,name:"1 Samuel",abbreviation:"1Sam",chapterCount:31},{number:10,name:"2 Samuel",abbreviation:"2Sam",chapterCount:24},{number:11,name:"1 Kings",abbreviation:"1Kgs",chapterCount:22},{number:12,name:"2 Kings",abbreviation:"2Kgs",chapterCount:25},{number:13,name:"1 Chronicles",abbreviation:"1Chr",chapterCount:29},{number:14,name:"2 Chronicles",abbreviation:"2Chr",chapterCount:36},{number:15,name:"Ezra",abbreviation:"Ezra",chapterCount:10},{number:16,name:"Nehemiah",abbreviation:"Neh",chapterCount:13},{number:17,name:"Esther",abbreviation:"Esth",chapterCount:10},{number:18,name:"Job",abbreviation:"Job",chapterCount:42},{number:19,name:"Psalms",abbreviation:"Ps",chapterCount:150},{number:20,name:"Proverbs",abbreviation:"Prov",chapterCount:31},{number:21,name:"Ecclesiastes",abbreviation:"Eccl",chapterCount:12},{number:22,name:"Song of Songs",abbreviation:"Song",chapterCount:8},{number:23,name:"Isaiah",abbreviation:"Isa",chapterCount:66},{number:24,name:"Jeremiah",abbreviation:"Jer",chapterCount:52},{number:25,name:"Lamentations",abbreviation:"Lam",chapterCount:5},{number:26,name:"Ezekiel",abbreviation:"Ezek",chapterCount:48},{number:27,name:"Daniel",abbreviation:"Dan",chapterCount:12},{number:28,name:"Hosea",abbreviation:"Hos",chapterCount:14},{number:29,name:"Joel",abbreviation:"Joel",chapterCount:3},{number:30,name:"Amos",abbreviation:"Amos",chapterCount:9},{number:31,name:"Obadiah",abbreviation:"Obad",chapterCount:1},{number:32,name:"Jonah",abbreviation:"Jonah",chapterCount:4},{number:33,name:"Micah",abbreviation:"Mic",chapterCount:7},{number:34,name:"Nahum",abbreviation:"Nah",chapterCount:3},{number:35,name:"Habakkuk",abbreviation:"Hab",chapterCount:3},{number:36,name:"Zephaniah",abbreviation:"Zeph",chapterCount:3},{number:37,name:"Haggai",abbreviation:"Hag",chapterCount:2},{number:38,name:"Zechariah",abbreviation:"Zech",chapterCount:14},{number:39,name:"Malachi",abbreviation:"Mal",chapterCount:4},{number:40,name:"Matthew",abbreviation:"Matt",chapterCount:28},{number:41,name:"Mark",abbreviation:"Mark",chapterCount:16},{number:42,name:"Luke",abbreviation:"Luke",chapterCount:24},{number:43,name:"John",abbreviation:"John",chapterCount:21},{number:44,name:"Acts",abbreviation:"Acts",chapterCount:28},{number:45,name:"Romans",abbreviation:"Rom",chapterCount:16},{number:46,name:"1 Corinthians",abbreviation:"1Cor",chapterCount:16},{number:47,name:"2 Corinthians",abbreviation:"2Cor",chapterCount:13},{number:48,name:"Galatians",abbreviation:"Gal",chapterCount:6},{number:49,name:"Ephesians",abbreviation:"Eph",chapterCount:6},{number:50,name:"Philippians",abbreviation:"Phil",chapterCount:4},{number:51,name:"Colossians",abbreviation:"Col",chapterCount:4},{number:52,name:"1 Thessalonians",abbreviation:"1Thess",chapterCount:5},{number:53,name:"2 Thessalonians",abbreviation:"2Thess",chapterCount:3},{number:54,name:"1 Timothy",abbreviation:"1Tim",chapterCount:6},{number:55,name:"2 Timothy",abbreviation:"2Tim",chapterCount:4},{number:56,name:"Titus",abbreviation:"Titus",chapterCount:3},{number:57,name:"Philemon",abbreviation:"Phlm",chapterCount:1},{number:58,name:"Hebrews",abbreviation:"Heb",chapterCount:13},{number:59,name:"James",abbreviation:"Jas",chapterCount:5},{number:60,name:"1 Peter",abbreviation:"1Pet",chapterCount:5},{number:61,name:"2 Peter",abbreviation:"2Pet",chapterCount:3},{number:62,name:"1 John",abbreviation:"1John",chapterCount:5},{number:63,name:"2 John",abbreviation:"2John",chapterCount:1},{number:64,name:"3 John",abbreviation:"3John",chapterCount:1},{number:65,name:"Jude",abbreviation:"Jude",chapterCount:1},{number:66,name:"Revelation",abbreviation:"Rev",chapterCount:22}];function c(r){return m.find(e=>e.number===r)}const u=[{id:"kjv",abbreviation:"KJV",displayName:"King James Version",yearNote:"1769 (public domain)",licenseKind:"public-domain",enabled:!0,apiSlug:"kjv",attribution:"King James Version (1769). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules)."},{id:"web",abbreviation:"WEB",displayName:"World English Bible",yearNote:"public domain",licenseKind:"public-domain",enabled:!0,apiSlug:"web",attribution:"World English Bible (WEB). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules)."},{id:"asv",abbreviation:"ASV",displayName:"American Standard Version",yearNote:"1901 (public domain)",licenseKind:"public-domain",enabled:!0,apiSlug:"asv",attribution:"American Standard Version (1901). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules)."},{id:"esv",abbreviation:"ESV",displayName:"English Standard Version",yearNote:"licensed — not bundled",licenseKind:"licensed",enabled:!1,attribution:"English Standard Version®. Copyright © Crossway Bibles.",licenseNote:"Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules."},{id:"lsb",abbreviation:"LSB",displayName:"Legacy Standard Bible",yearNote:"licensed — not bundled",licenseKind:"licensed",enabled:!1,attribution:"Legacy Standard Bible®. Copyright © Lockman Foundation / Three Sixteen Publishing.",licenseNote:"Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules."},{id:"net",abbreviation:"NET",displayName:"New English Translation",yearNote:"licensed — not bundled",licenseKind:"licensed",enabled:!1,attribution:"NET Bible®. Copyright © Biblical Studies Press, L.L.C.",licenseNote:"Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules."}];function d(r){return u.find(e=>e.id===r)}function l(){return u.filter(r=>r.enabled)}const y=["kjv","web"],s={columns:"sbsb.columns",columnCount:"sbsb.columnCount",book:"sbsb.book",chapter:"sbsb.chapter",bgHex:"sbsb.bgHex",textHex:"sbsb.textHex",setupDone:"sbsb.setupDone"};function E(r,e){try{const n=localStorage.getItem(r);return n==null?e:JSON.parse(n)}catch{return e}}function $(){return new Set(l().map(r=>r.id))}function S(r,e){const n=$(),a=[...y],t=[];for(let o=0;o<e;o++){const i=r[o];i&&n.has(i)?t.push(i):t.push(a[o%a.length]??"kjv")}return t}function N(){const r=Number(localStorage.getItem(s.columnCount)??"2"),e=[2,3,4].includes(r)?r:2,n=S(E(s.columns,[...y]),e),a=Math.min(66,Math.max(1,Number(localStorage.getItem(s.book)??"1")||1)),t=Math.max(1,Number(localStorage.getItem(s.chapter)??"1")||1);return{columnIds:n,columnCount:e,bookNumber:a,chapter:t,backgroundHex:localStorage.getItem(s.bgHex)??"",textHex:localStorage.getItem(s.textHex)??"",setupDone:localStorage.getItem(s.setupDone)==="1"}}function A(r,e){localStorage.setItem(s.columnCount,String(e)),localStorage.setItem(s.columns,JSON.stringify(S(r,e))),localStorage.setItem(s.setupDone,"1")}function b(r,e){localStorage.setItem(s.book,String(r)),localStorage.setItem(s.chapter,String(e))}function w(r,e){localStorage.setItem(s.bgHex,r),localStorage.setItem(s.textHex,e)}const L="https://api.getbible.net/v2",f=new Map,p=new Map;function P(r,e){return`${r}:${e}`}function B(r){const e=new Map;for(const n of r.chapters??[]){const a=new Map;for(const t of n.verses??[])typeof t.verse=="number"&&typeof t.text=="string"&&a.set(t.verse,t.text);e.set(n.chapter,a)}return e}async function I(r,e){const n=d(r);if(!n?.enabled||!n.apiSlug)throw new Error(`Translation "${r}" is not loadable.`);const a=`${L}/${n.apiSlug}/${e}.json`,t=await fetch(a);if(!t.ok)throw new Error(`Failed to load ${n.abbreviation} book ${e} (${t.status}).`);const o=await t.json();return B(o)}async function H(r,e,n){let a=f.get(r);a||(a=new Map,f.set(r,a));let t=a.get(e);if(!t){const o=P(r,e);let i=p.get(o);i||(i=I(r,e).finally(()=>p.delete(o)),p.set(o,i)),t=await i,a.set(e,t)}return t.get(n)??new Map}async function R(r,e,n){return Promise.all(r.map(a=>H(a,e,n)))}function T(r){const e=new Set;for(const a of r)for(const t of a.keys())e.add(t);return[...e].sort((a,t)=>a-t).map(a=>({verse:a,texts:r.map(t=>t.has(a)?t.get(a):null)}))}const J=[{id:"bg-system",label:"System",hex:""},{id:"bg-white",label:"White",hex:"#FFFFFF"},{id:"bg-cream",label:"Paper",hex:"#F7F1E3"},{id:"bg-gray",label:"Light gray",hex:"#E8E8E8"},{id:"bg-sepia",label:"Sepia",hex:"#F4ECD8"},{id:"bg-dark",label:"Dark gray",hex:"#2C2C2E"},{id:"bg-black",label:"Black",hex:"#000000"}],M=[{id:"tx-system",label:"System",hex:""},{id:"tx-black",label:"Black",hex:"#000000"},{id:"tx-dark",label:"Dark gray",hex:"#3A3A3C"},{id:"tx-sepia",label:"Sepia brown",hex:"#5C4033"},{id:"tx-white",label:"White",hex:"#FFFFFF"},{id:"tx-soft",label:"Soft white",hex:"#F2F2F7"}],q=/^#([0-9A-Fa-f]{6})$/;function v(r){const e=r.trim();if(e==="")return"";const n=e.startsWith("#")?e:`#${e}`;return q.test(n)?n.toUpperCase():null}function g(r,e){const n=document.documentElement;r?n.style.setProperty("--reader-bg",r):n.style.removeProperty("--reader-bg"),e?n.style.setProperty("--reader-fg",e):n.style.removeProperty("--reader-fg")}class F{root;prefs;screen="picker";loading=!1;error=null;aligned=[];draftCount=2;draftIds=["kjv","web"];constructor(e){this.root=e,this.prefs=N(),this.draftCount=this.prefs.columnCount,this.draftIds=[...this.prefs.columnIds],g(this.prefs.backgroundHex,this.prefs.textHex),this.screen=this.prefs.setupDone?"reader":"picker",this.screen==="reader"?this.loadAndRender():this.render()}setScreen(e){if(this.screen=e,e==="picker"||e==="change-translations"){for(this.draftCount=this.prefs.columnCount,this.draftIds=[...this.prefs.columnIds];this.draftIds.length<this.draftCount;)this.draftIds.push(l()[0]?.id??"kjv");this.draftIds=this.draftIds.slice(0,this.draftCount)}this.render()}async loadAndRender(){this.loading=!0,this.error=null,this.render();try{const e=c(this.prefs.bookNumber);if(!e)throw new Error("Unknown book.");this.prefs.chapter>e.chapterCount&&(this.prefs.chapter=1,b(this.prefs.bookNumber,this.prefs.chapter));const n=await R(this.prefs.columnIds,this.prefs.bookNumber,this.prefs.chapter);this.aligned=T(n)}catch(e){this.error=e instanceof Error?e.message:"Could not load chapter.",this.aligned=[]}finally{this.loading=!1,this.render()}}commitDraft(e){const n=this.draftIds.slice(0,this.draftCount);n.length!==this.draftCount||n.some(a=>!d(a)?.enabled)||(A(n,this.draftCount),this.prefs.columnIds=n,this.prefs.columnCount=this.draftCount,this.prefs.setupDone=!0,e?(this.screen="reader",this.loadAndRender()):(this.screen="reader",this.loadAndRender()))}goPrevChapter(){if(c(this.prefs.bookNumber)){if(this.prefs.chapter>1)this.prefs.chapter-=1;else if(this.prefs.bookNumber>1){this.prefs.bookNumber-=1;const n=c(this.prefs.bookNumber);this.prefs.chapter=n.chapterCount}else return;b(this.prefs.bookNumber,this.prefs.chapter),this.loadAndRender()}}goNextChapter(){const e=c(this.prefs.bookNumber);if(e){if(this.prefs.chapter<e.chapterCount)this.prefs.chapter+=1;else if(this.prefs.bookNumber<66)this.prefs.bookNumber+=1,this.prefs.chapter=1;else return;b(this.prefs.bookNumber,this.prefs.chapter),this.loadAndRender()}}render(){switch(this.screen){case"picker":case"change-translations":this.root.innerHTML=this.renderPicker(this.screen==="picker"),this.bindPicker();break;case"reader":this.root.innerHTML=this.renderReader(),this.bindReader();break;case"book":this.root.innerHTML=this.renderBookPicker(),this.bindBookPicker();break;case"appearance":this.root.innerHTML=this.renderAppearance(),this.bindAppearance();break;case"about":this.root.innerHTML=this.renderAbout(),this.bindAbout();break}}renderPicker(e){const n=l(),a=u.filter(o=>!o.enabled),t=Array.from({length:this.draftCount},(o,i)=>i);return`
      <div class="screen picker-screen">
        <header class="screen-header">
          ${e?"":'<button type="button" class="btn ghost" data-action="back-reader" aria-label="Back">← Back</button>'}
          <h1>${e?"Side by Side Bible":"Change Translations"}</h1>
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
          ${t.map(o=>`
            <section class="pick-card">
              <h2>Column ${o+1}</h2>
              <div class="radio-list" role="radiogroup" aria-label="Column ${o+1} translation">
                ${n.map(i=>`
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
            ${e?"Open Reader":"Apply &amp; Return"}
          </button>
        </div>
      </div>
    `}canCommit(){return this.draftIds.length===this.draftCount&&this.draftIds.every(e=>!!d(e)?.enabled)}bindPicker(){this.root.querySelectorAll("[data-count]").forEach(e=>{e.addEventListener("click",()=>{const n=Number(e.dataset.count);for(this.draftCount=n;this.draftIds.length<n;)this.draftIds.push(l()[0]?.id??"kjv");this.draftIds=this.draftIds.slice(0,n),this.render()})}),this.root.querySelectorAll('input[type="radio"]').forEach(e=>{e.addEventListener("change",()=>{const n=/^col-(\d+)$/.exec(e.name);if(!n)return;const a=Number(n[1]);this.draftIds[a]=e.value;const t=this.root.querySelector('[data-action="commit"]');t&&(t.disabled=!this.canCommit())})}),this.root.querySelector('[data-action="commit"]')?.addEventListener("click",()=>{this.commitDraft(!0)}),this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()})}renderReader(){const e=c(this.prefs.bookNumber),n=this.prefs.columnIds.map(t=>d(t)?.abbreviation??t);return`
      <div class="screen reader-screen" style="--cols: ${this.prefs.columnCount}">
        <header class="reader-toolbar">
          <div class="toolbar-left">
            <button type="button" class="btn ghost" data-action="prev" aria-label="Previous chapter">‹</button>
            <button type="button" class="btn location" data-action="pick-book">
              ${e?.name??"Book"} ${this.prefs.chapter}
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
          ${n.map(t=>`<span class="col-header">${t}</span>`).join("")}
        </div>
        <div class="reader-scroll" role="region" aria-label="Chapter text">
          ${this.loading?'<p class="status">Loading chapter…</p>':this.error?`<p class="status error">${h(this.error)}</p>`:this.aligned.length===0?'<p class="status">No verses found for this chapter.</p>':this.aligned.map(t=>`
              <div class="verse-row">
                <span class="verse-num">${t.verse}</span>
                ${t.texts.map(o=>`
                  <div class="verse-cell">${o==null?'<span class="missing">—</span>':h(o)}</div>
                `).join("")}
              </div>
            `).join("")}
        </div>
      </div>
    `}bindReader(){this.root.querySelector('[data-action="prev"]')?.addEventListener("click",()=>this.goPrevChapter()),this.root.querySelector('[data-action="next"]')?.addEventListener("click",()=>this.goNextChapter()),this.root.querySelector('[data-action="pick-book"]')?.addEventListener("click",()=>this.setScreen("book")),this.root.querySelector('[data-action="change-tr"]')?.addEventListener("click",()=>this.setScreen("change-translations")),this.root.querySelector('[data-action="appearance"]')?.addEventListener("click",()=>this.setScreen("appearance")),this.root.querySelector('[data-action="about"]')?.addEventListener("click",()=>this.setScreen("about"))}renderBookPicker(){const e=c(this.prefs.bookNumber),n=m.filter(t=>t.number<=39),a=m.filter(t=>t.number>=40);return`
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
                ${n.map(t=>k(t.number,t.name,this.prefs.bookNumber)).join("")}
              </div>
            </section>
            <section>
              <h2>New Testament</h2>
              <div class="book-grid">
                ${a.map(t=>k(t.number,t.name,this.prefs.bookNumber)).join("")}
              </div>
            </section>
          </div>
          <div class="chapter-panel">
            <h2>${e?.name??""} — chapters</h2>
            <div class="chapter-grid">
              ${e?Array.from({length:e.chapterCount},(t,o)=>o+1).map(t=>`
                  <button type="button" class="chip ${t===this.prefs.chapter?"active":""}" data-chapter="${t}">${t}</button>
                `).join(""):""}
            </div>
          </div>
        </div>
      </div>
    `}bindBookPicker(){this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()}),this.root.querySelectorAll("[data-book]").forEach(e=>{e.addEventListener("click",()=>{this.prefs.bookNumber=Number(e.dataset.book),this.prefs.chapter=1,this.render(),this.bindBookPicker()})}),this.root.querySelectorAll("[data-chapter]").forEach(e=>{e.addEventListener("click",()=>{this.prefs.chapter=Number(e.dataset.chapter),b(this.prefs.bookNumber,this.prefs.chapter),this.screen="reader",this.loadAndRender()})})}renderAppearance(){const e=this.prefs.backgroundHex,n=this.prefs.textHex;return`
      <div class="screen appearance-screen">
        <header class="screen-header">
          <button type="button" class="btn ghost" data-action="back-reader">← Back</button>
          <h1>Appearance</h1>
        </header>
        <section class="appear-block">
          <h2>Background</h2>
          <div class="swatches">
            ${J.map(a=>`
              <button type="button" class="swatch ${e===a.hex?"active":""}" data-bg="${a.hex}" title="${a.label}">
                <span class="swatch-chip" style="${a.hex?`background:${a.hex}`:""}"></span>
                ${a.label}
              </button>
            `).join("")}
          </div>
          <label class="hex-field">Custom hex
            <input type="text" id="bg-hex" value="${C(e)}" placeholder="#RRGGBB or blank for system" maxlength="7" />
          </label>
        </section>
        <section class="appear-block">
          <h2>Text</h2>
          <div class="swatches">
            ${M.map(a=>`
              <button type="button" class="swatch ${n===a.hex?"active":""}" data-fg="${a.hex}" title="${a.label}">
                <span class="swatch-chip text-chip" style="${a.hex?`background:${a.hex}`:""}"></span>
                ${a.label}
              </button>
            `).join("")}
          </div>
          <label class="hex-field">Custom hex
            <input type="text" id="fg-hex" value="${C(n)}" placeholder="#RRGGBB or blank for system" maxlength="7" />
          </label>
        </section>
        <div class="preview-card">
          <p class="preview-label">Preview</p>
          <p class="preview-sample">In the beginning God created the heaven and the earth.</p>
        </div>
        <p class="muted tip">Choices are saved in this browser (localStorage).</p>
      </div>
    `}bindAppearance(){const e=()=>{w(this.prefs.backgroundHex,this.prefs.textHex),g(this.prefs.backgroundHex,this.prefs.textHex)};this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()}),this.root.querySelectorAll("[data-bg]").forEach(t=>{t.addEventListener("click",()=>{this.prefs.backgroundHex=t.dataset.bg??"",e(),this.render(),this.bindAppearance()})}),this.root.querySelectorAll("[data-fg]").forEach(t=>{t.addEventListener("click",()=>{this.prefs.textHex=t.dataset.fg??"",e(),this.render(),this.bindAppearance()})});const n=this.root.querySelector("#bg-hex"),a=this.root.querySelector("#fg-hex");n?.addEventListener("change",()=>{const t=v(n.value);if(t===null){n.value=this.prefs.backgroundHex;return}this.prefs.backgroundHex=t,e(),this.render(),this.bindAppearance()}),a?.addEventListener("change",()=>{const t=v(a.value);if(t===null){a.value=this.prefs.textHex;return}this.prefs.textHex=t,e(),this.render(),this.bindAppearance()})}renderAbout(){const e=l(),n=u.filter(a=>!a.enabled);return`
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
            ${e.map(a=>`
              <li><strong>${a.abbreviation}</strong> — ${a.attribution}</li>
            `).join("")}
          </ul>
          <p>
            Text is fetched per book from
            <a href="https://getbible.net" target="_blank" rel="noopener noreferrer">getBible</a>
            v2 (<code>api.getbible.net/v2</code>). Verse wording is never invented by this app.
          </p>
          <h2>Licensed (not bundled)</h2>
          <ul>
            ${n.map(a=>`
              <li><strong>${a.abbreviation}</strong> — ${a.attribution} ${a.licenseNote??""}</li>
            `).join("")}
          </ul>
          <p class="muted">
            No accounts, no backend, no search, bookmarks, notes, or audio in this MVP.
            Companion iOS app: Side by Side Bible (separate repository).
          </p>
        </article>
      </div>
    `}bindAbout(){this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()})}}function k(r,e,n){return`<button type="button" class="book-btn ${r===n?"active":""}" data-book="${r}">${h(e)}</button>`}function h(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function C(r){return h(r)}const x=document.querySelector("#app");if(!x)throw new Error("Missing #app root");new F(x);
