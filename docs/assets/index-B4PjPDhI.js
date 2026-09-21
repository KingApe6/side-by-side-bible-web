(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const S=[{number:1,name:"Genesis",abbreviation:"Gen",chapterCount:50},{number:2,name:"Exodus",abbreviation:"Exod",chapterCount:40},{number:3,name:"Leviticus",abbreviation:"Lev",chapterCount:27},{number:4,name:"Numbers",abbreviation:"Num",chapterCount:36},{number:5,name:"Deuteronomy",abbreviation:"Deut",chapterCount:34},{number:6,name:"Joshua",abbreviation:"Josh",chapterCount:24},{number:7,name:"Judges",abbreviation:"Judg",chapterCount:21},{number:8,name:"Ruth",abbreviation:"Ruth",chapterCount:4},{number:9,name:"1 Samuel",abbreviation:"1Sam",chapterCount:31},{number:10,name:"2 Samuel",abbreviation:"2Sam",chapterCount:24},{number:11,name:"1 Kings",abbreviation:"1Kgs",chapterCount:22},{number:12,name:"2 Kings",abbreviation:"2Kgs",chapterCount:25},{number:13,name:"1 Chronicles",abbreviation:"1Chr",chapterCount:29},{number:14,name:"2 Chronicles",abbreviation:"2Chr",chapterCount:36},{number:15,name:"Ezra",abbreviation:"Ezra",chapterCount:10},{number:16,name:"Nehemiah",abbreviation:"Neh",chapterCount:13},{number:17,name:"Esther",abbreviation:"Esth",chapterCount:10},{number:18,name:"Job",abbreviation:"Job",chapterCount:42},{number:19,name:"Psalms",abbreviation:"Ps",chapterCount:150},{number:20,name:"Proverbs",abbreviation:"Prov",chapterCount:31},{number:21,name:"Ecclesiastes",abbreviation:"Eccl",chapterCount:12},{number:22,name:"Song of Songs",abbreviation:"Song",chapterCount:8},{number:23,name:"Isaiah",abbreviation:"Isa",chapterCount:66},{number:24,name:"Jeremiah",abbreviation:"Jer",chapterCount:52},{number:25,name:"Lamentations",abbreviation:"Lam",chapterCount:5},{number:26,name:"Ezekiel",abbreviation:"Ezek",chapterCount:48},{number:27,name:"Daniel",abbreviation:"Dan",chapterCount:12},{number:28,name:"Hosea",abbreviation:"Hos",chapterCount:14},{number:29,name:"Joel",abbreviation:"Joel",chapterCount:3},{number:30,name:"Amos",abbreviation:"Amos",chapterCount:9},{number:31,name:"Obadiah",abbreviation:"Obad",chapterCount:1},{number:32,name:"Jonah",abbreviation:"Jonah",chapterCount:4},{number:33,name:"Micah",abbreviation:"Mic",chapterCount:7},{number:34,name:"Nahum",abbreviation:"Nah",chapterCount:3},{number:35,name:"Habakkuk",abbreviation:"Hab",chapterCount:3},{number:36,name:"Zephaniah",abbreviation:"Zeph",chapterCount:3},{number:37,name:"Haggai",abbreviation:"Hag",chapterCount:2},{number:38,name:"Zechariah",abbreviation:"Zech",chapterCount:14},{number:39,name:"Malachi",abbreviation:"Mal",chapterCount:4},{number:40,name:"Matthew",abbreviation:"Matt",chapterCount:28},{number:41,name:"Mark",abbreviation:"Mark",chapterCount:16},{number:42,name:"Luke",abbreviation:"Luke",chapterCount:24},{number:43,name:"John",abbreviation:"John",chapterCount:21},{number:44,name:"Acts",abbreviation:"Acts",chapterCount:28},{number:45,name:"Romans",abbreviation:"Rom",chapterCount:16},{number:46,name:"1 Corinthians",abbreviation:"1Cor",chapterCount:16},{number:47,name:"2 Corinthians",abbreviation:"2Cor",chapterCount:13},{number:48,name:"Galatians",abbreviation:"Gal",chapterCount:6},{number:49,name:"Ephesians",abbreviation:"Eph",chapterCount:6},{number:50,name:"Philippians",abbreviation:"Phil",chapterCount:4},{number:51,name:"Colossians",abbreviation:"Col",chapterCount:4},{number:52,name:"1 Thessalonians",abbreviation:"1Thess",chapterCount:5},{number:53,name:"2 Thessalonians",abbreviation:"2Thess",chapterCount:3},{number:54,name:"1 Timothy",abbreviation:"1Tim",chapterCount:6},{number:55,name:"2 Timothy",abbreviation:"2Tim",chapterCount:4},{number:56,name:"Titus",abbreviation:"Titus",chapterCount:3},{number:57,name:"Philemon",abbreviation:"Phlm",chapterCount:1},{number:58,name:"Hebrews",abbreviation:"Heb",chapterCount:13},{number:59,name:"James",abbreviation:"Jas",chapterCount:5},{number:60,name:"1 Peter",abbreviation:"1Pet",chapterCount:5},{number:61,name:"2 Peter",abbreviation:"2Pet",chapterCount:3},{number:62,name:"1 John",abbreviation:"1John",chapterCount:5},{number:63,name:"2 John",abbreviation:"2John",chapterCount:1},{number:64,name:"3 John",abbreviation:"3John",chapterCount:1},{number:65,name:"Jude",abbreviation:"Jude",chapterCount:1},{number:66,name:"Revelation",abbreviation:"Rev",chapterCount:22}];function b(o){return S.find(e=>e.number===o)}const g=[{id:"kjv",abbreviation:"KJV",displayName:"King James Version",yearNote:"1769 (public domain)",licenseKind:"public-domain",enabled:!0,apiSlug:"kjv",attribution:"King James Version (1769). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules)."},{id:"web",abbreviation:"WEB",displayName:"World English Bible",yearNote:"public domain",licenseKind:"public-domain",enabled:!0,apiSlug:"web",attribution:"World English Bible (WEB). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules)."},{id:"asv",abbreviation:"ASV",displayName:"American Standard Version",yearNote:"1901 (public domain)",licenseKind:"public-domain",enabled:!0,apiSlug:"asv",attribution:"American Standard Version (1901). Public domain. Sourced via getBible v2 (CrossWire / public-domain modules)."},{id:"esv",abbreviation:"ESV",displayName:"English Standard Version",yearNote:"licensed — not bundled",licenseKind:"licensed",enabled:!1,attribution:"English Standard Version®. Copyright © Crossway Bibles.",licenseNote:"Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules."},{id:"lsb",abbreviation:"LSB",displayName:"Legacy Standard Bible",yearNote:"licensed — not bundled",licenseKind:"licensed",enabled:!1,attribution:"Legacy Standard Bible®. Copyright © Lockman Foundation / Three Sixteen Publishing.",licenseNote:"Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules."},{id:"net",abbreviation:"NET",displayName:"New English Translation",yearNote:"licensed — not bundled",licenseKind:"licensed",enabled:!1,attribution:"NET Bible®. Copyright © Biblical Studies Press, L.L.C.",licenseNote:"Requires a publisher license. Not bundled or loadable in this build. See README for adding licensed modules."}];function v(o){return g.find(e=>e.id===o)}function h(){return g.filter(o=>o.enabled)}const A=["kjv","web"],i={columns:"sbsb.columns",columnCount:"sbsb.columnCount",book:"sbsb.book",chapter:"sbsb.chapter",bgHex:"sbsb.bgHex",textHex:"sbsb.textHex",setupDone:"sbsb.setupDone"};function B(o,e){try{const a=localStorage.getItem(o);return a==null?e:JSON.parse(a)}catch{return e}}function H(){return new Set(h().map(o=>o.id))}function w(o,e){const a=H(),r=[...A],t=[];for(let n=0;n<e;n++){const s=o[n];s&&a.has(s)?t.push(s):t.push(r[n%r.length]??"kjv")}return t}function I(){const o=Number(localStorage.getItem(i.columnCount)??"2"),e=[2,3,4].includes(o)?o:2,a=w(B(i.columns,[...A]),e),r=Math.min(66,Math.max(1,Number(localStorage.getItem(i.book)??"1")||1)),t=Math.max(1,Number(localStorage.getItem(i.chapter)??"1")||1);return{columnIds:a,columnCount:e,bookNumber:r,chapter:t,backgroundHex:localStorage.getItem(i.bgHex)??"",textHex:localStorage.getItem(i.textHex)??"",setupDone:localStorage.getItem(i.setupDone)==="1"}}function T(o,e){localStorage.setItem(i.columnCount,String(e)),localStorage.setItem(i.columns,JSON.stringify(w(o,e))),localStorage.setItem(i.setupDone,"1")}function p(o,e){localStorage.setItem(i.book,String(o)),localStorage.setItem(i.chapter,String(e))}function R(o,e){localStorage.setItem(i.bgHex,o),localStorage.setItem(i.textHex,e)}const F="https://api.getbible.net/v2",x=new Map,y=new Map;function q(o,e){return`${o}:${e}`}function J(o){const e=new Map;for(const a of o.chapters??[]){const r=new Map;for(const t of a.verses??[])typeof t.verse=="number"&&typeof t.text=="string"&&r.set(t.verse,t.text);e.set(a.chapter,r)}return e}async function M(o,e){const a=v(o);if(!a?.enabled||!a.apiSlug)throw new Error(`Translation "${o}" is not loadable.`);const r=`${F}/${a.apiSlug}/${e}.json`,t=await fetch(r);if(!t.ok)throw new Error(`Failed to load ${a.abbreviation} book ${e} (${t.status}).`);const n=await t.json();return J(n)}async function j(o,e,a){let r=x.get(o);r||(r=new Map,x.set(o,r));let t=r.get(e);if(!t){const n=q(o,e);let s=y.get(n);s||(s=M(o,e).finally(()=>y.delete(n)),y.set(n,s)),t=await s,r.set(e,t)}return t.get(a)??new Map}async function D(o,e,a){return Promise.all(o.map(r=>j(r,e,a)))}function O(o){const e=new Set;for(const r of o)for(const t of r.keys())e.add(t);return[...e].sort((r,t)=>r-t).map(r=>({verse:r,texts:o.map(t=>t.has(r)?t.get(r):null)}))}const K=[{id:"bg-system",label:"System",hex:""},{id:"bg-white",label:"White",hex:"#FFFFFF"},{id:"bg-cream",label:"Paper",hex:"#F7F1E3"},{id:"bg-gray",label:"Light gray",hex:"#E8E8E8"},{id:"bg-sepia",label:"Sepia",hex:"#F4ECD8"},{id:"bg-dark",label:"Dark gray",hex:"#2C2C2E"},{id:"bg-black",label:"Black",hex:"#000000"}],V=[{id:"tx-system",label:"System",hex:""},{id:"tx-black",label:"Black",hex:"#000000"},{id:"tx-dark",label:"Dark gray",hex:"#3A3A3C"},{id:"tx-sepia",label:"Sepia brown",hex:"#5C4033"},{id:"tx-white",label:"White",hex:"#FFFFFF"},{id:"tx-soft",label:"Soft white",hex:"#F2F2F7"}],L=/^#([0-9A-Fa-f]{6})$/;function E(o){const e=o.trim();if(e==="")return"";const a=e.startsWith("#")?e:`#${e}`;return L.test(a)?a.toUpperCase():null}function m(o,e){return L.test(o)?o.toUpperCase():e.toUpperCase()}function $(o,e){const a=document.documentElement;o?a.style.setProperty("--reader-bg",o):a.style.removeProperty("--reader-bg"),e?a.style.setProperty("--reader-fg",e):a.style.removeProperty("--reader-fg")}class G{root;prefs;screen="picker";loading=!1;error=null;aligned=[];draftCount=2;draftIds=["kjv","web"];constructor(e){this.root=e,this.prefs=I(),this.draftCount=this.prefs.columnCount,this.draftIds=[...this.prefs.columnIds],$(this.prefs.backgroundHex,this.prefs.textHex),this.screen=this.prefs.setupDone?"reader":"picker",this.screen==="reader"?this.loadAndRender():this.render()}setScreen(e){if(this.screen=e,e==="picker"||e==="change-translations"){for(this.draftCount=this.prefs.columnCount,this.draftIds=[...this.prefs.columnIds];this.draftIds.length<this.draftCount;)this.draftIds.push(h()[0]?.id??"kjv");this.draftIds=this.draftIds.slice(0,this.draftCount)}this.render()}async loadAndRender(){this.loading=!0,this.error=null,this.render();try{const e=b(this.prefs.bookNumber);if(!e)throw new Error("Unknown book.");this.prefs.chapter>e.chapterCount&&(this.prefs.chapter=1,p(this.prefs.bookNumber,this.prefs.chapter));const a=await D(this.prefs.columnIds,this.prefs.bookNumber,this.prefs.chapter);this.aligned=O(a)}catch(e){this.error=e instanceof Error?e.message:"Could not load chapter.",this.aligned=[]}finally{this.loading=!1,this.render()}}commitDraft(e){const a=this.draftIds.slice(0,this.draftCount);a.length!==this.draftCount||a.some(r=>!v(r)?.enabled)||(T(a,this.draftCount),this.prefs.columnIds=a,this.prefs.columnCount=this.draftCount,this.prefs.setupDone=!0,e?(this.screen="reader",this.loadAndRender()):(this.screen="reader",this.loadAndRender()))}goPrevChapter(){if(b(this.prefs.bookNumber)){if(this.prefs.chapter>1)this.prefs.chapter-=1;else if(this.prefs.bookNumber>1){this.prefs.bookNumber-=1;const a=b(this.prefs.bookNumber);this.prefs.chapter=a.chapterCount}else return;p(this.prefs.bookNumber,this.prefs.chapter),this.loadAndRender()}}goNextChapter(){const e=b(this.prefs.bookNumber);if(e){if(this.prefs.chapter<e.chapterCount)this.prefs.chapter+=1;else if(this.prefs.bookNumber<66)this.prefs.bookNumber+=1,this.prefs.chapter=1;else return;p(this.prefs.bookNumber,this.prefs.chapter),this.loadAndRender()}}render(){switch(this.screen){case"picker":case"change-translations":this.root.innerHTML=this.renderPicker(this.screen==="picker"),this.bindPicker();break;case"reader":this.root.innerHTML=this.renderReader(),this.bindReader();break;case"book":this.root.innerHTML=this.renderBookPicker(),this.bindBookPicker();break;case"appearance":this.root.innerHTML=this.renderAppearance(),this.bindAppearance();break;case"about":this.root.innerHTML=this.renderAbout(),this.bindAbout();break}}renderPicker(e){const a=h(),r=g.filter(n=>!n.enabled),t=Array.from({length:this.draftCount},(n,s)=>s);return`
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
            ${[2,3,4].map(n=>`
              <button type="button" class="seg ${this.draftCount===n?"active":""}" data-count="${n}">${n}</button>
            `).join("")}
          </div>
        </fieldset>
        <div class="column-picks">
          ${t.map(n=>`
            <section class="pick-card">
              <h2>Column ${n+1}</h2>
              <div class="radio-list" role="radiogroup" aria-label="Column ${n+1} translation">
                ${a.map(s=>`
                  <label class="radio-row">
                    <input type="radio" name="col-${n}" value="${s.id}" ${this.draftIds[n]===s.id?"checked":""} />
                    <span class="radio-body">
                      <strong>${s.abbreviation}</strong>
                      <span>${s.displayName}</span>
                      <em>${s.yearNote}</em>
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
            ${r.map(n=>`
              <li>
                <strong>${n.abbreviation}</strong> — ${n.displayName}
                <span class="muted">${n.licenseNote??""}</span>
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
    `}canCommit(){return this.draftIds.length===this.draftCount&&this.draftIds.every(e=>!!v(e)?.enabled)}bindPicker(){this.root.querySelectorAll("[data-count]").forEach(e=>{e.addEventListener("click",()=>{const a=Number(e.dataset.count);for(this.draftCount=a;this.draftIds.length<a;)this.draftIds.push(h()[0]?.id??"kjv");this.draftIds=this.draftIds.slice(0,a),this.render()})}),this.root.querySelectorAll('input[type="radio"]').forEach(e=>{e.addEventListener("change",()=>{const a=/^col-(\d+)$/.exec(e.name);if(!a)return;const r=Number(a[1]);this.draftIds[r]=e.value;const t=this.root.querySelector('[data-action="commit"]');t&&(t.disabled=!this.canCommit())})}),this.root.querySelector('[data-action="commit"]')?.addEventListener("click",()=>{this.commitDraft(!0)}),this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()})}renderReader(){const e=b(this.prefs.bookNumber),a=this.prefs.columnIds.map(t=>v(t)?.abbreviation??t);return`
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
          ${a.map(t=>`<span class="col-header">${t}</span>`).join("")}
        </div>
        <div class="reader-scroll" role="region" aria-label="Chapter text">
          ${this.loading?'<p class="status">Loading chapter…</p>':this.error?`<p class="status error">${k(this.error)}</p>`:this.aligned.length===0?'<p class="status">No verses found for this chapter.</p>':this.aligned.map(t=>`
              <div class="verse-row">
                <span class="verse-num">${t.verse}</span>
                ${t.texts.map(n=>`
                  <div class="verse-cell">${n==null?'<span class="missing">—</span>':k(n)}</div>
                `).join("")}
              </div>
            `).join("")}
        </div>
      </div>
    `}bindReader(){this.root.querySelector('[data-action="prev"]')?.addEventListener("click",()=>this.goPrevChapter()),this.root.querySelector('[data-action="next"]')?.addEventListener("click",()=>this.goNextChapter()),this.root.querySelector('[data-action="pick-book"]')?.addEventListener("click",()=>this.setScreen("book")),this.root.querySelector('[data-action="change-tr"]')?.addEventListener("click",()=>this.setScreen("change-translations")),this.root.querySelector('[data-action="appearance"]')?.addEventListener("click",()=>this.setScreen("appearance")),this.root.querySelector('[data-action="about"]')?.addEventListener("click",()=>this.setScreen("about"))}renderBookPicker(){const e=b(this.prefs.bookNumber),a=S.filter(t=>t.number<=39),r=S.filter(t=>t.number>=40);return`
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
                ${a.map(t=>N(t.number,t.name,this.prefs.bookNumber)).join("")}
              </div>
            </section>
            <section>
              <h2>New Testament</h2>
              <div class="book-grid">
                ${r.map(t=>N(t.number,t.name,this.prefs.bookNumber)).join("")}
              </div>
            </section>
          </div>
          <div class="chapter-panel">
            <h2>${e?.name??""} — chapters</h2>
            <div class="chapter-grid">
              ${e?Array.from({length:e.chapterCount},(t,n)=>n+1).map(t=>`
                  <button type="button" class="chip ${t===this.prefs.chapter?"active":""}" data-chapter="${t}">${t}</button>
                `).join(""):""}
            </div>
          </div>
        </div>
      </div>
    `}bindBookPicker(){this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()}),this.root.querySelectorAll("[data-book]").forEach(e=>{e.addEventListener("click",()=>{this.prefs.bookNumber=Number(e.dataset.book),this.prefs.chapter=1,this.render(),this.bindBookPicker()})}),this.root.querySelectorAll("[data-chapter]").forEach(e=>{e.addEventListener("click",()=>{this.prefs.chapter=Number(e.dataset.chapter),p(this.prefs.bookNumber,this.prefs.chapter),this.screen="reader",this.loadAndRender()})})}renderAppearance(){const e=this.prefs.backgroundHex,a=this.prefs.textHex,r=m(e,"#FFFFFF"),t=m(a,"#000000");return`
      <div class="screen appearance-screen">
        <header class="screen-header">
          <button type="button" class="btn ghost" data-action="back-reader">← Back</button>
          <h1>Appearance</h1>
        </header>
        <section class="appear-block">
          <h2>Background</h2>
          <div class="swatches">
            ${K.map(n=>`
              <button type="button" class="swatch ${e===n.hex?"active":""}" data-bg="${n.hex}" title="${n.label}">
                <span class="swatch-chip" style="${n.hex?`background:${n.hex}`:""}"></span>
                ${n.label}
              </button>
            `).join("")}
          </div>
          <div class="color-row">
            <label class="color-pick">
              <span>Pick a color</span>
              <input type="color" id="bg-color" value="${f(r)}" title="Background color" />
            </label>
            <label class="hex-field">
              <span>Hex <span class="muted">(optional)</span></span>
              <input type="text" id="bg-hex" value="${f(e)}" placeholder="#RRGGBB or blank for system" maxlength="7" />
            </label>
          </div>
        </section>
        <section class="appear-block">
          <h2>Text</h2>
          <div class="swatches">
            ${V.map(n=>`
              <button type="button" class="swatch ${a===n.hex?"active":""}" data-fg="${n.hex}" title="${n.label}">
                <span class="swatch-chip text-chip" style="${n.hex?`background:${n.hex}`:""}"></span>
                ${n.label}
              </button>
            `).join("")}
          </div>
          <div class="color-row">
            <label class="color-pick">
              <span>Pick a color</span>
              <input type="color" id="fg-color" value="${f(t)}" title="Text color" />
            </label>
            <label class="hex-field">
              <span>Hex <span class="muted">(optional)</span></span>
              <input type="text" id="fg-hex" value="${f(a)}" placeholder="#RRGGBB or blank for system" maxlength="7" />
            </label>
          </div>
        </section>
        <div class="preview-card">
          <p class="preview-label">Preview</p>
          <p class="preview-sample">In the beginning God created the heaven and the earth.</p>
        </div>
        <p class="muted tip">Choices are saved in this browser (localStorage).</p>
      </div>
    `}bindAppearance(){const e=()=>{R(this.prefs.backgroundHex,this.prefs.textHex),$(this.prefs.backgroundHex,this.prefs.textHex)},a=(c,l)=>{if(c==="bg"){this.prefs.backgroundHex=l;const d=this.root.querySelector("#bg-hex"),u=this.root.querySelector("#bg-color");d&&(d.value=l),u&&(u.value=m(l,"#FFFFFF"))}else{this.prefs.textHex=l;const d=this.root.querySelector("#fg-hex"),u=this.root.querySelector("#fg-color");d&&(d.value=l),u&&(u.value=m(l,"#000000"))}e()},r=()=>{this.render(),this.bindAppearance()};this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()}),this.root.querySelectorAll("[data-bg]").forEach(c=>{c.addEventListener("click",()=>{this.prefs.backgroundHex=c.dataset.bg??"",e(),r()})}),this.root.querySelectorAll("[data-fg]").forEach(c=>{c.addEventListener("click",()=>{this.prefs.textHex=c.dataset.fg??"",e(),r()})});const t=this.root.querySelector("#bg-color"),n=this.root.querySelector("#fg-color"),s=this.root.querySelector("#bg-hex"),C=this.root.querySelector("#fg-hex");t?.addEventListener("input",()=>{a("bg",t.value.toUpperCase())}),t?.addEventListener("change",()=>{r()}),n?.addEventListener("input",()=>{a("fg",n.value.toUpperCase())}),n?.addEventListener("change",()=>{r()}),s?.addEventListener("change",()=>{const c=E(s.value);if(c===null){s.value=this.prefs.backgroundHex;return}this.prefs.backgroundHex=c,e(),r()}),C?.addEventListener("change",()=>{const c=E(C.value);if(c===null){C.value=this.prefs.textHex;return}this.prefs.textHex=c,e(),r()})}renderAbout(){const e=h(),a=g.filter(r=>!r.enabled);return`
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
            ${e.map(r=>`
              <li><strong>${r.abbreviation}</strong> — ${r.attribution}</li>
            `).join("")}
          </ul>
          <p>
            Text is fetched per book from
            <a href="https://getbible.net" target="_blank" rel="noopener noreferrer">getBible</a>
            v2 (<code>api.getbible.net/v2</code>). Verse wording is never invented by this app.
          </p>
          <h2>Licensed (not bundled)</h2>
          <ul>
            ${a.map(r=>`
              <li><strong>${r.abbreviation}</strong> — ${r.attribution} ${r.licenseNote??""}</li>
            `).join("")}
          </ul>
          <p class="muted">
            No accounts, no backend, no search, bookmarks, notes, or audio in this MVP.
            Companion iOS app: Side by Side Bible (separate repository).
          </p>
        </article>
      </div>
    `}bindAbout(){this.root.querySelector('[data-action="back-reader"]')?.addEventListener("click",()=>{this.setScreen("reader"),this.loadAndRender()})}}function N(o,e,a){return`<button type="button" class="book-btn ${o===a?"active":""}" data-book="${o}">${k(e)}</button>`}function k(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function f(o){return k(o)}const P=document.querySelector("#app");if(!P)throw new Error("Missing #app root");new G(P);
