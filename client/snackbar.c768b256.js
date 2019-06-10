import{c as t,d as n,b as e,x as s,y as c,v as o,k as a,h as r,e as $,f as i,g as u,O as l,l as p,a as m,G as f}from"./chunk.b06e21b3.js";import{f as d,g}from"./chunk.c719ea0f.js";import"./chunk.0a41e55b.js";import{a as h}from"./chunk.45d535cb.js";import"./chunk.8f0f0453.js";import{a as k}from"./chunk.0099a1bd.js";import{a as y}from"./chunk.6e873e5b.js";function v(t){var n;return{c(){n=f("Default Snackbar")},l(t){n=c(t,"Default Snackbar")},m(t,e){a(t,n,e)},d(t){t&&r(n)}}}function j(t){var n;return{c(){n=f("Success")},l(t){n=c(t,"Success")},m(t,e){a(t,n,e)},d(t){t&&r(n)}}}function b(t){var n;return{c(){n=f("Top Right")},l(t){n=c(t,"Top Right")},m(t,e){a(t,n,e)},d(t){t&&r(n)}}}function x(t){var n;return{c(){n=f("Custom Background")},l(t){n=c(t,"Custom Background")},m(t,e){a(t,n,e)},d(t){t&&r(n)}}}function B(t){var n,e,m,f,g,h,k=new d({props:{$$slots:{default:[v]},$$scope:{ctx:t}}});k.$on("click",t.click_handler);var y=new d({props:{type:"is-success",$$slots:{default:[j]},$$scope:{ctx:t}}});y.$on("click",t.click_handler_1);var B=new d({props:{type:"is-danger",$$slots:{default:[b]},$$scope:{ctx:t}}});B.$on("click",t.click_handler_2);var _=new d({props:{type:"is-primary",$$slots:{default:[x]},$$scope:{ctx:t}}});return _.$on("click",t.click_handler_3),{c(){n=$("div"),e=$("div"),k.$$.fragment.c(),m=s(),y.$$.fragment.c(),f=s(),B.$$.fragment.c(),g=s(),_.$$.fragment.c(),this.h()},l(t){n=i(t,"DIV",{slot:!0},!1);var s=u(n);e=i(s,"DIV",{class:!0},!1);var o=u(e);k.$$.fragment.l(o),m=c(o,"\n      "),y.$$.fragment.l(o),f=c(o,"\n      "),B.$$.fragment.l(o),g=c(o,"\n      "),_.$$.fragment.l(o),o.forEach(r),s.forEach(r),this.h()},h(){e.className="buttons svelte-nt7ocy",l(n,"slot","preview")},m(t,s){a(t,n,s),p(n,e),o(k,e,null),p(e,m),o(y,e,null),p(e,f),o(B,e,null),p(e,g),o(_,e,null),h=!0},p(t,n){var e={};t.$$scope&&(e.$$scope={changed:t,ctx:n}),k.$set(e);var s={};t.$$scope&&(s.$$scope={changed:t,ctx:n}),y.$set(s);var c={};t.$$scope&&(c.$$scope={changed:t,ctx:n}),B.$set(c);var o={};t.$$scope&&(o.$$scope={changed:t,ctx:n}),_.$set(o)},i(t){h||(k.$$.fragment.i(t),y.$$.fragment.i(t),B.$$.fragment.i(t),_.$$.fragment.i(t),h=!0)},o(t){k.$$.fragment.o(t),y.$$.fragment.o(t),B.$$.fragment.o(t),_.$$.fragment.o(t),h=!1},d(t){t&&r(n),k.$destroy(),y.$destroy(),B.$destroy(),_.$destroy()}}}function _(t){return{c:m,l:m,m:m,p:m,i:m,o:m,d:m}}function w(t){var n,e,$,i=new h({props:{title:"Snackbar",subtitle:"Bigger than a toast, smaller than a dialog"}}),u=new k({props:{code:"<script>\n  import { Button, Toast } from 'svelma'\n\n  function open(type, position) {\n    Toast.create({ message: 'I am a toast', type, position })\n  }\n<\/script>\n\n<Button on:click={() => open()}>Toast</Button>\n<Button type=\"is-success\" on:click={() => open('is-success')}>Success</Button>\n<Button type=\"is-danger\" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>\n<Button type=\"is-primary\" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>",$$slots:{default:[_],preview:[B]},$$scope:{ctx:t}}}),l=new y({props:{jsdoc:t.jsdoc}});return{c(){i.$$.fragment.c(),n=s(),u.$$.fragment.c(),e=s(),l.$$.fragment.c()},l(t){i.$$.fragment.l(t),n=c(t,"\n\n"),u.$$.fragment.l(t),e=c(t,"\n\n\n"),l.$$.fragment.l(t)},m(t,s){o(i,t,s),a(t,n,s),o(u,t,s),a(t,e,s),o(l,t,s),$=!0},p(t,n){var e={};t.$$scope&&(e.$$scope={changed:t,ctx:n}),u.$set(e);var s={};t.jsdoc&&(s.jsdoc=n.jsdoc),l.$set(s)},i(t){$||(i.$$.fragment.i(t),u.$$.fragment.i(t),l.$$.fragment.i(t),$=!0)},o(t){i.$$.fragment.o(t),u.$$.fragment.o(t),l.$$.fragment.o(t),$=!1},d(t){i.$destroy(t),t&&r(n),u.$destroy(t),t&&r(e),l.$destroy(t)}}}async function S(){const t=await this.fetch("components/snackbar.json");return{jsdoc:await t.json()}}function T(t){g.create({message:"I am a snackbar message",...t})}function D(t,n,e){let{jsdoc:s}=n;return t.$set=(t=>{"jsdoc"in t&&e("jsdoc",s=t.jsdoc)}),{jsdoc:s,click_handler:function(){return T()},click_handler_1:function(){return T({type:"is-success"})},click_handler_2:function(){return T({type:"is-danger",actionText:"retry",position:"is-top-right"})},click_handler_3:function(){return T({background:"has-background-grey-lighter"})}}}export default class extends t{constructor(t){super(),n(this,t,D,w,e,["jsdoc"])}}export{S as preload};
//# sourceMappingURL=snackbar.c768b256.js.map
