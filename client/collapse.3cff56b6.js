import{c as s,d as t,b as o,x as r,y as a,v as e,k as n,h as c,e as i,f as l,g as $,O as m,a as p,G as f,l as d}from"./chunk.b06e21b3.js";import{d as u}from"./chunk.c719ea0f.js";import"./chunk.0a41e55b.js";import{a as h}from"./chunk.45d535cb.js";import"./chunk.8f0f0453.js";import{a as g}from"./chunk.0099a1bd.js";import{a as v}from"./chunk.6e873e5b.js";function j(s){var t,o;return{c(){t=i("button"),o=f("Click Me!"),this.h()},l(s){t=l(s,"BUTTON",{class:!0,slot:!0},!1);var r=$(t);o=a(r,"Click Me!"),r.forEach(c),this.h()},h(){t.className="button is-primary",m(t,"slot","trigger")},m(s,r){n(s,t,r),d(t,o)},d(s){s&&c(t)}}}function b(s){var t,o,e,m,u,h,g,v;return{c(){t=r(),o=i("div"),e=i("div"),m=i("h3"),u=f("Subtitle"),h=r(),g=i("p"),v=f("Lorem ipsum dolor..."),this.h()},l(s){t=a(s,"\n      "),o=l(s,"DIV",{class:!0},!1);var r=$(o);e=l(r,"DIV",{class:!0},!1);var n=$(e);m=l(n,"H3",{},!1);var i=$(m);u=a(i,"Subtitle"),i.forEach(c),h=a(n,"\n          "),g=l(n,"P",{},!1);var p=$(g);v=a(p,"Lorem ipsum dolor..."),p.forEach(c),n.forEach(c),r.forEach(c),this.h()},h(){e.className="content",o.className="notification"},m(s,r){n(s,t,r),n(s,o,r),d(o,e),d(e,m),d(m,u),d(e,h),d(e,g),d(g,v)},p:p,d(s){s&&(c(t),c(o))}}}function k(s){var t,o,r=new u({props:{$$slots:{default:[b],trigger:[j]},$$scope:{ctx:s}}});return{c(){t=i("div"),r.$$.fragment.c(),this.h()},l(s){t=l(s,"DIV",{slot:!0},!1);var o=$(t);r.$$.fragment.l(o),o.forEach(c),this.h()},h(){m(t,"slot","preview")},m(s,a){n(s,t,a),e(r,t,null),o=!0},p(s,t){var o={};s.$$scope&&(o.$$scope={changed:s,ctx:t}),r.$set(o)},i(s){o||(r.$$.fragment.i(s),o=!0)},o(s){r.$$.fragment.o(s),o=!1},d(s){s&&c(t),r.$destroy()}}}function w(s){return{c:p,l:p,m:p,p:p,i:p,o:p,d:p}}function x(s){var t,o,i,l=new h({props:{title:"Collapse",subtitle:"Collapsible elements"}}),$=new g({props:{code:'<script>\n  import { Collapse } from \'svelma\'\n<\/script>\n\n<Collapse>\n  <button class="button is-primary" slot="trigger">\n    Click Me!\n  </button>\n  <div class="notification">\n    <div class="content">\n      <h3>Subtitle</h3>\n      <p>Lorem ipsum dolor...</p>\n    </div>\n  </div>\n</Collapse>',$$slots:{default:[w],preview:[k]},$$scope:{ctx:s}}}),m=new v({props:{jsdoc:s.jsdoc}});return{c(){l.$$.fragment.c(),t=r(),$.$$.fragment.c(),o=r(),m.$$.fragment.c()},l(s){l.$$.fragment.l(s),t=a(s,"\n\n"),$.$$.fragment.l(s),o=a(s,"\n\n"),m.$$.fragment.l(s)},m(s,r){e(l,s,r),n(s,t,r),e($,s,r),n(s,o,r),e(m,s,r),i=!0},p(s,t){var o={};s.$$scope&&(o.$$scope={changed:s,ctx:t}),$.$set(o);var r={};s.jsdoc&&(r.jsdoc=t.jsdoc),m.$set(r)},i(s){i||(l.$$.fragment.i(s),$.$$.fragment.i(s),m.$$.fragment.i(s),i=!0)},o(s){l.$$.fragment.o(s),$.$$.fragment.o(s),m.$$.fragment.o(s),i=!1},d(s){l.$destroy(s),s&&c(t),$.$destroy(s),s&&c(o),m.$destroy(s)}}}async function y(){const s=await this.fetch("components/collapse.json");return{jsdoc:await s.json()}}function C(s,t,o){let{jsdoc:r}=t;return s.$set=(s=>{"jsdoc"in s&&o("jsdoc",r=s.jsdoc)}),{jsdoc:r}}export default class extends s{constructor(s){super(),t(this,s,C,x,o,["jsdoc"])}}export{y as preload};
//# sourceMappingURL=collapse.3cff56b6.js.map
