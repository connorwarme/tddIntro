(()=>{"use strict";(t=>{let e=[""];for(let o=t.length-1;o>=0;o--){let l=t.slice(o,o+1);e[0]+=l}e[0].toString()})("i want to win.");const t="abcdefghijklmnopqrstuvwxyz";console.log(((e,o)=>{let l=[""];const n=(e,o,l)=>{if(-1!=o){let e=o+l;return e>25&&(e-=26),t.charAt(e)}return e};for(let o=0;o<e.length;o++){let i=e.charAt(o),c=-1==t.indexOf(r=i)?-1:t.indexOf(r);console.log(`index: ${c}`);let s=n(i,c,3);console.log(`shifted: ${s}`),l[0]+=s}var r;return console.log(l[0].toString()),l[0].toString()})("ab.c"))})();