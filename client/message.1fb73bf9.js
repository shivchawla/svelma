import{c as e,d as t,b as n,x as s,y as o,v as r,k as i,h as a,e as c,f as l,g as $,O as p,l as m,a as u,G as f}from"./chunk.b06e21b3.js";import{f as d,c as g}from"./chunk.c719ea0f.js";import"./chunk.0a41e55b.js";import{a as h}from"./chunk.45d535cb.js";import"./chunk.8f0f0453.js";import{a as v}from"./chunk.0099a1bd.js";function k(e){var t;return{c(){t=f("Toggle")},l(e){t=o(e,"Toggle")},m(e,n){i(e,t,n)},d(e){e&&a(t)}}}function b(e){var t;return{c(){t=f("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Fusce id fermentum quam. Proin sagittis, nibh id\n      hendrerit imperdiet, elit sapien laoreet elit")},l(e){t=o(e,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Fusce id fermentum quam. Proin sagittis, nibh id\n      hendrerit imperdiet, elit sapien laoreet elit")},m(e,n){i(e,t,n)},d(e){e&&a(t)}}}function x(e){var t,n,u,f=new d({props:{class:"block",$$slots:{default:[k]},$$scope:{ctx:e}}});f.$on("click",e.click_handler);var h=new g({props:{active:!e.open,title:"Default",$$slots:{default:[b]},$$scope:{ctx:e}}});return h.$on("close",e.close_handler),{c(){t=c("div"),f.$$.fragment.c(),n=s(),h.$$.fragment.c(),this.h()},l(e){t=l(e,"DIV",{slot:!0},!1);var s=$(t);f.$$.fragment.l(s),n=o(s,"\n    "),h.$$.fragment.l(s),s.forEach(a),this.h()},h(){p(t,"slot","preview")},m(e,s){i(e,t,s),r(f,t,null),m(t,n),r(h,t,null),u=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),f.$set(n);var s={};e.open&&(s.active=!t.open),e.$$scope&&(s.$$scope={changed:e,ctx:t}),h.$set(s)},i(e){u||(f.$$.fragment.i(e),h.$$.fragment.i(e),u=!0)},o(e){f.$$.fragment.o(e),h.$$.fragment.o(e),u=!1},d(e){e&&a(t),f.$destroy(),h.$destroy()}}}function j(e){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function w(e){var t,n,c=new h({props:{title:"Message",subtitle:"Message blocks to convey information"}}),l=new v({props:{code:'<script>\n  import { Button, Message } from \'svelma\'\n\n  let open\n<\/script>\n\n<Button class="block" on:click={() => open = !open}>Toggle</Button>\n<Message active={!open} title="Default"\n  on:close={active => open = active}>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Fusce id fermentum quam. Proin sagittis, nibh id\n  hendrerit imperdiet, elit sapien laoreet elit\n</Message>',$$slots:{default:[j],preview:[x]},$$scope:{ctx:e}}});return{c(){c.$$.fragment.c(),t=s(),l.$$.fragment.c()},l(e){c.$$.fragment.l(e),t=o(e,"\n\n"),l.$$.fragment.l(e)},m(e,s){r(c,e,s),i(e,t,s),r(l,e,s),n=!0},p(e,t){var n={};(e.$$scope||e.open)&&(n.$$scope={changed:e,ctx:t}),l.$set(n)},i(e){n||(c.$$.fragment.i(e),l.$$.fragment.i(e),n=!0)},o(e){c.$$.fragment.o(e),l.$$.fragment.o(e),n=!1},d(e){c.$destroy(e),e&&a(t),l.$destroy(e)}}}function y(e,t,n){let s;return{open:s,click_handler:function(){const e=s=!s;return n("open",s),e},close_handler:function(e){const t=s=e;return n("open",s),t}}}export default class extends e{constructor(e){super(),t(this,e,y,w,n,[])}}
//# sourceMappingURL=message.1fb73bf9.js.map
