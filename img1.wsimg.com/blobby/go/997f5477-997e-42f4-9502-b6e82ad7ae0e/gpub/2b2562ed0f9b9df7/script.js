window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme13"]=window.wsb["Theme13"]||window.radpack("@widget/LAYOUT/bs-layout13-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,c;function s(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(c=document.getElementById(o),!c)return;n=document.createElement("div"),n.style.cssText="width:100%;",c.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),c.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",s,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i&&i.removeEventListener("click",s,{useCapture:!0}),c&&(c.removeChild(n),c.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-27449\"}"));
window.wsb["DynamicFontScaler"]=function(t){let e,{containerId:n,targetId:o,fontSizes:r,maxLines:i,prioritizeDefault:s}=t;if("undefined"==typeof document)return;const a=document.getElementById(n),c=document.getElementById(o);function l(t){return function(t){const e=parseInt(y(t,"padding-left")||0,10),n=parseInt(y(t,"padding-right")||0,10);return t.scrollWidth+e+n}(t)<=a.clientWidth&&function(t){const e=t.offsetHeight,n=parseInt(y(t,"line-height"),10)||1;return Math.floor(e/n)}(t)<=i}function p(t){return parseInt(y(t,"font-size")||0,10)}function d(t){if(1===t.length)return t[0];const e=t.filter(l);if(1===e.length)return e[0];if(!e.length)return function(t){return t.sort(((t,e)=>p(t)-p(e)))[0]}(t);return e.sort(((t,e)=>p(e)-p(t)))[0]}function u(){if(!a||!c||e===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void g();e=window.innerWidth;const t=Array.prototype.slice.call(a.querySelectorAll(`[data-scaler-id="scaler-${n}"]`)).sort(((t,e)=>r.indexOf(t.getAttribute("data-size"))-r.indexOf(e.getAttribute("data-size"))));if(a.clientWidth&&t.length){const e=a.style.width||"";a.style.width="100%",t.forEach((t=>{t.style.display="inline-block",t.style.maxWidth=`${a.clientWidth}px`}));const n=d(t);!function(t){t.forEach((t=>{t.style.display="none",t.style.maxWidth=""}))}(t),a.style.width=e;const r=y(n,"font-size"),i=c.getAttribute("data-last-size");if(r&&r!==i){if(s){const t=y(c,"font-size");if(parseInt(r,10)>=parseInt(t,10))return}c.setAttribute("data-last-size",r);let t=document.querySelector(`#${o}-style`);t||(t=document.createElement("style"),t.id=`${o}-style`,document.head.appendChild(t)),t.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function g(){c&&c.removeAttribute("data-last-size");const t=document.querySelector(`#${o}-style`);t&&t.parentNode.removeChild(t)}function y(t,e){return document.defaultView.getComputedStyle(t).getPropertyValue(e)}return u(),window.addEventListener("resize",u),()=>{g(),window.removeEventListener("resize",u)}};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-27453\",\"targetId\":\"logo-text-27454\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":false}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"source-sans-pro\",\"montserrat\"],\"colors\":[\"#1916ba\"],\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"34e20abb-146b-4f3b-a8b5-1b095d81d50c\":{\"pageId\":\"287f429b-ed6e-416e-aa2a-319409973b79\",\"widgetId\":\"f3740b90-58cf-4778-a917-14a0c99ebe76\",\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"006b3b67-f381-4a61-bfee-50bfa2b77ba9\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"006b3b67-f381-4a61-bfee-50bfa2b77ba9\",\"name\":\"Gallery\",\"href\":\"/gallery\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"982d8982-e120-4beb-87d7-05993dadcfc1\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"982d8982-e120-4beb-87d7-05993dadcfc1\",\"name\":\"Github\",\"href\":\"https://github.com/Batman2741/Gallifreycraft\",\"target\":\"_blank\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"8efd2330-2898-4c19-b72f-a2c1dcb71686\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8efd2330-2898-4c19-b72f-a2c1dcb71686\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"9c62aa57-f190-4cf6-b9b8-faaa8ccd40f3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9c62aa57-f190-4cf6-b9b8-faaa8ccd40f3\",\"name\":\"App\",\"href\":\"/app\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"672beeea-b8c3-4d27-bfa8-273e5d266859\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"672beeea-b8c3-4d27-bfa8-273e5d266859\",\"name\":\"Patreon\",\"href\":\"https://patreon.com/GallifreyCraft\",\"target\":\"_blank\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"faa51b2c-9852-4de5-889f-d90161841c5a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"faa51b2c-9852-4de5-889f-d90161841c5a\",\"name\":\"support\",\"href\":\"/support\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"7be82c8c-19fb-4783-9c98-1424084d1c74\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"7be82c8c-19fb-4783-9c98-1424084d1c74\",\"name\":\"Contact\",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"1d8f3c9c-685e-45a0-b395-c7c00d904038\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1d8f3c9c-685e-45a0-b395-c7c00d904038\",\"name\":\"Mod Pack\",\"href\":\"https://www.curseforge.com/minecraft/modpacks/gallifrey-craft-mod-pack\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"d8d432d2-acd3-4a39-bcf4-c30942fb5326\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"d8d432d2-acd3-4a39-bcf4-c30942fb5326\",\"name\":\"Blank\",\"href\":\"/blank\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f86a0a24-d10e-4068-b94f-9ae02ff677bb\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f86a0a24-d10e-4068-b94f-9ae02ff677bb\",\"name\":\"Discord\",\"href\":\"https://discord.com/invite/reg6KBDHDa\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"287f429b-ed6e-416e-aa2a-319409973b79\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"287f429b-ed6e-416e-aa2a-319409973b79\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"1a4f3f38-f5a9-46d4-9e3e-31094b688dd7\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1a4f3f38-f5a9-46d4-9e3e-31094b688dd7\",\"name\":\"Partners\",\"href\":\"/partners\",\"target\":\"\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#1916ba\",\"meta\":{\"primary\":\"rgb(25, 22, 186)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]},\"alternate\":{\"id\":\"source-sans-pro\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":20,\"alternate\":{\"id\":\"source-sans-pro\",\"name\":\"Source Sans Pro\",\"url\":\"//fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,700,700i&display=swap\",\"family\":\"'Source Sans Pro', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"logo\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":23,\"logo\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:600,700&display=swap\",\"family\":\"'Montserrat', sans-serif\",\"size\":16,\"weight\":700,\"weights\":[600,700],\"styles\":{\"letterSpacing\":\"4px\",\"textTransform\":\"uppercase\",\"fontWeight\":700,\"fontSize\":\"xlarge\"}}}}}},\"theme\":\"Theme13\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-27447-navId-mobile\",\"uniqueId\":\"n-27447\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"71a5b96d-5d09-4403-9988-2116efa4263f\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"71a5b96d-5d09-4403-9988-2116efa4263f\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\"}}},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":0.8}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-27460\",\"targetId\":\"logo-text-27461\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":false}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-27463\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBarId-27458\",\"widgetId\":\"71a5b96d-5d09-4403-9988-2116efa4263f\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"71a5b96d-5d09-4403-9988-2116efa4263f\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\"}}},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":0.8}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:i,inlineUtilitiesMenu:l,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(I),l&&(g=s.pop(),f(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,f),h(d,0,n,w),h(s,n,s.length,w),h(d,n,s.length,f),f(p)}else s.forEach(f),w(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function I(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function w(e){e.style.display="none",e.classList.remove("visible")}function f(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(i)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-27462\",\"logoImageId\":\"logo-27457\",\"containerId\":\"navBarId-27458\"}"));
window.wsb["StickyNav"]=function(e){let{uniqueId:t,logoHeight:o,hasAnimation:a,anchorId:n}=e;const r=o>104?120:80;let i,c,s,l,g=window.innerWidth<768,d=0;const u=()=>{const e=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight));if(!e)return null;const t=window.getComputedStyle(e);return s=t.getPropertyValue("box-shadow"),l=t.getPropertyValue("margin-top"),e},p={i18nBar:document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),stickyNav:document.getElementById(t),stickyNavParent:document.querySelector("[data-stickynav-wrapper]"),logo:u(),freemiumAd:document.querySelector("[data-freemium-ad]"),anchor:document.getElementById(n)},y=()=>{const{stickyNav:e,stickyNavParent:t}=p;if(!t||t.style.height)return;let a=e.offsetHeight;g&&e.offsetHeight<o&&o<=104&&(a=o),t.style.height=`${a}px`};new IntersectionObserver((e=>e.forEach((e=>{let{isIntersecting:t}=e;return window.requestAnimationFrame((()=>(e=>{if(c===e)return;const{stickyNav:t,logo:n,i18nBar:i,freemiumAd:u}=p;p.freemiumAd=u||document.querySelector("[data-freemium-ad]"),d=d||p.freemiumAd?.offsetHeight,e&&y(),i&&(i.style.display=e?"none":"flex"),n&&(n.style.cssText=e?`max-height:${g?50:64}px;box-shadow:none;margin-top:0px;`:`max-height:${g?r:o}px;box-shadow:${s};margin-top:${l};`,"HEADER_LOGO_OVERHANG_CONTAINER"===n.parentNode.getAttribute("data-aid")&&(n.parentNode.style.height=e?"auto":"1em")),t.style.cssText=e?`position:fixed;z-index:10000;left:0px;right:0px;top:${d||0}px;`:"",a&&(e?t.classList.add("sticky-animate","x-c-bg"):t.classList.remove("sticky-animate","x-c-bg")),c=e})(!t)))})))).observe(p.anchor);const h=/#[^\\?]*/;function m(e){const t=(e.target.closest("a")?.href.match(h)[0]||[]).slice(1),o=document.getElementById(t);o&&f(o)}function f(e){const t=p.stickyNav.clientHeight;let o=e.offsetTop;const a=setInterval((()=>{e.offsetTop===o?(clearInterval(a),scrollTo({top:e.offsetTop-t})):o=e.offsetTop}),300)}if(Array.from(document.querySelectorAll("a")).filter((e=>h.test(e.href))).forEach((e=>e.addEventListener("click",m))),window.location.hash){const e=document.getElementById(window.location.hash.slice(1));e&&f(e)}window.addEventListener("resize",(()=>{clearTimeout(i),i=setTimeout((()=>{g=window.innerWidth<768,p.logo=u(),y()}),250)}),{passive:!0})};
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav27450\",\"anchorId\":\"header_stickynav-anchor27451\",\"logoHeight\":80,\"hasAnimation\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-27490\",\"targetId\":\"dynamic-tagline-27491\",\"fontSizes\":[\"xxxlarge\",\"xxlarge\",\"xlarge\"],\"maxLines\":4}"));
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"3a625127-2f2c-4f77-a939-43b6e9c78fd5\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
window.wsb['context-bs-3']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"playfair-display\",\"source-sans-pro\",\"montserrat\"],\"colors\":[\"#1916ba\"],\"fontScale\":\"medium\",\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"34e20abb-146b-4f3b-a8b5-1b095d81d50c\":{\"pageId\":\"287f429b-ed6e-416e-aa2a-319409973b79\",\"widgetId\":\"f3740b90-58cf-4778-a917-14a0c99ebe76\",\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"006b3b67-f381-4a61-bfee-50bfa2b77ba9\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"006b3b67-f381-4a61-bfee-50bfa2b77ba9\",\"name\":\"Gallery\",\"href\":\"/gallery\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"982d8982-e120-4beb-87d7-05993dadcfc1\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"982d8982-e120-4beb-87d7-05993dadcfc1\",\"name\":\"Github\",\"href\":\"https://github.com/Batman2741/Gallifreycraft\",\"target\":\"_blank\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"8efd2330-2898-4c19-b72f-a2c1dcb71686\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8efd2330-2898-4c19-b72f-a2c1dcb71686\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"9c62aa57-f190-4cf6-b9b8-faaa8ccd40f3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9c62aa57-f190-4cf6-b9b8-faaa8ccd40f3\",\"name\":\"App\",\"href\":\"/app\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"672beeea-b8c3-4d27-bfa8-273e5d266859\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"672beeea-b8c3-4d27-bfa8-273e5d266859\",\"name\":\"Patreon\",\"href\":\"https://patreon.com/GallifreyCraft\",\"target\":\"_blank\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"faa51b2c-9852-4de5-889f-d90161841c5a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"faa51b2c-9852-4de5-889f-d90161841c5a\",\"name\":\"support\",\"href\":\"/support\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"7be82c8c-19fb-4783-9c98-1424084d1c74\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"7be82c8c-19fb-4783-9c98-1424084d1c74\",\"name\":\"Contact\",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"1d8f3c9c-685e-45a0-b395-c7c00d904038\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1d8f3c9c-685e-45a0-b395-c7c00d904038\",\"name\":\"Mod Pack\",\"href\":\"https://www.curseforge.com/minecraft/modpacks/gallifrey-craft-mod-pack\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"d8d432d2-acd3-4a39-bcf4-c30942fb5326\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"d8d432d2-acd3-4a39-bcf4-c30942fb5326\",\"name\":\"Blank\",\"href\":\"/blank\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f86a0a24-d10e-4068-b94f-9ae02ff677bb\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f86a0a24-d10e-4068-b94f-9ae02ff677bb\",\"name\":\"Discord\",\"href\":\"https://discord.com/invite/reg6KBDHDa\",\"target\":\"_blank\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"287f429b-ed6e-416e-aa2a-319409973b79\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"287f429b-ed6e-416e-aa2a-319409973b79\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"1a4f3f38-f5a9-46d4-9e3e-31094b688dd7\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1a4f3f38-f5a9-46d4-9e3e-31094b688dd7\",\"name\":\"Partners\",\"href\":\"/partners\",\"target\":\"\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#1916ba\",\"meta\":{\"primary\":\"rgb(25, 22, 186)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"playfair-display\",\"description\":\"Distinctive fonts that presents a 21st century take on a vintage, professional feel.\",\"tags\":[\"serif\",\"classic\",\"conservative\"],\"meta\":{\"order\":30,\"primary\":{\"id\":\"playfair-display\",\"name\":\"Playfair Display\",\"url\":\"//fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap\",\"family\":\"'Playfair Display', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700,900]},\"alternate\":{\"id\":\"open-sans\",\"name\":\"Open Sans\",\"url\":\"//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i,800&display=swap\",\"family\":\"'Open Sans', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700,800],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\uBC14\uD0D5', Batang, '\uBC14\uD0D5\uCCB4', BatangChe, serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Krungthep, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, '\u534E\u6587\u9ED1\u4F53', STHeiti, Heiti SC, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Open Sans, Hiragino Sans GB, sans-serif\"}}}],\"overridesPrimary\":[{\"locales\":[\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"primary\":{\"family\":\"Georgia, serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Mincho Pro, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DPro', Hiragino Mincho ProN, '\u30D2\u30E9\u30AE\u30CE\u660E\u671DProN', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\uC560\uD50C\uACE0\uB515', Apple SD Gothic Neo, '\uC560\uD50C\uACE0\uB515', AppleGothic, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Thonburi, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, Hiragino Sans GB, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Playfair Display, '\u5137\u9ED1 Pro', LiHei Pro, sans-serif\"}}}]},\"alternate\":{\"id\":\"source-sans-pro\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":20,\"alternate\":{\"id\":\"source-sans-pro\",\"name\":\"Source Sans Pro\",\"url\":\"//fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,700,700i&display=swap\",\"family\":\"'Source Sans Pro', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"logo\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":23,\"logo\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:600,700&display=swap\",\"family\":\"'Montserrat', sans-serif\",\"size\":16,\"weight\":700,\"weights\":[600,700],\"styles\":{\"letterSpacing\":\"4px\",\"textTransform\":\"uppercase\",\"fontWeight\":700,\"fontSize\":\"xlarge\"}}}}}},\"theme\":\"Theme13\"}");
Core.utils.renderBootstrap({elId:'bs-3',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{brandId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"businessName\":\"Gallifrey Craft\",\"reamazeBrandId\":\"997f5477-997e-42f4-9502-b6e82ad7ae0e\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"emailOptInEnabled\":false,\"domainName\":\"gallifreycraft.space\",\"cookieBannerEnabled\":true,\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"accountId\":\"e0893b96-aca0-11ee-832c-3417ebe725e0\",\"websiteId\":\"997f5477-997e-42f4-9502-b6e82ad7ae0e\",\"id\":\"63f00f6d-dc57-4ac5-a8fb-b86dc53d4c2a\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"isMobile\":null,\"notificationPreference\":\"REAMAZE\",\"isReseller\":false,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazePromptEnabled\":true,\"reamazeStarter1\":\"I have a question\",\"reamazeThemeColor\":\"#1916ba\",\"reamazePosition\":\"bottom-right\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"widgetId\":\"63f00f6d-dc57-4ac5-a8fb-b86dc53d4c2a\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"63f00f6d-dc57-4ac5-a8fb-b86dc53d4c2a\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/MESSAGING/bs-Component"});
document.getElementById('page-27446').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":"Inset","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":true,"wam_site_homepageFirstWidgetType":"SOCIAL","wam_site_homepageFirstWidgetPreset":"social1","wam_site_businessCategory":"minecraft","wam_site_theme":"layout13","wam_site_locale":"en-US","wam_site_fontPack":"playfair-display","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"freemiumV1","wam_site_isHomepage":true,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);