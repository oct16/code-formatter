!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=require("chalk")},function(e,t){e.exports=require("ora")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(7)),i=r(8);t.FILE_TYPES=["all","ts","js","vue"];const s=["all","cached"],u=o.default.option({file_type:{describe:"Specify the file type",demandOption:!0,default:t.FILE_TYPES[0]}}).choices("file_type",t.FILE_TYPES).option({change_type:{describe:"Specify the change type",demandOption:!0,default:s[0]}}).choices("change_type",s).option({path:{describe:"Specify the path for the files include",demandOption:!0,default:"src"}}).option({exclude:{describe:"Specify the path for the files exclude",demandOption:!0,default:"node_modules"}}).help().argv,{$0:a,_:c,...l}=u,f=Object.entries(l).reduce((e,t)=>(e.body.push(t),e),{head:["name","value"],body:[]}),{head:d,body:p}=f,h=i.createCliTable(d,p);t.default=function(){return{args:l,table:h}}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("prettier")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(6)},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),i=n(r(1)),s=n(r(2)),u=r(10),a=r(12);(async()=>{i.default(o.default.cyan("Use Script Options:")).start().succeed();const{args:e,table:t}=s.default();console.log(t),await u.getFiles(e).then(a.formatWithPrettier)})()},function(e,t){e.exports=require("yargs")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),i=n(r(9));t.createCliTable=function(e,t){const r=new i.default({head:e.map(e=>o.default.cyan(e))});return r.push(...t),r.toString()}},function(e,t){e.exports=require("cli-table3")},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(11)),s=o(r(3)),u=r(2),{exec:a}=i;function c(e,t){return e.filter(e=>"all"!==t?e.endsWith(t):u.FILE_TYPES.slice(1,u.FILE_TYPES.length).some(t=>e.endsWith(t)))}t.getFiles=function(e){return new Promise(t=>{const{file_type:r,change_type:n,path:o,exclude:i}=e;if("cached"===n)a("git diff --name-only --cached",(e,n,o)=>{if(e)throw new Error(e.message);const i=n.split("\n").filter(Boolean).map(e=>{return s.default.join(process.cwd(),e)});t(c(i,r))});else{const e=process.cwd(),n=i?`! -path "${s.default.join(e,i)}/*"`:"",u="all"===r?"":`-name '*.${r}'`,l=o?o.startsWith("/")?o:`/${o}`:"";a(`find ${e}${l} -type f ${n} ${u}`,(e,n,o)=>{const i=n.split("\n").filter(Boolean);t(c(i,r))})}})}},function(e,t){e.exports=require("child_process")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),i=n(r(13)),s=n(r(14)),u=n(r(1)),a=n(r(4)),c=r(15);function l(e,t){const r=s.default.readFileSync(e,"utf8");try{return a.default.check(r,t)}catch(t){console.log(`\n${o.default.red(e)}`),console.log(o.default.red(t)),process.exit(1)}}t.formatWithPrettier=async function(e){await async function(e){const t=e.length,r=new i.default.SingleBar({format:o.default.cyan("|{bar}| {percentage}% | {value}/{total}"),hideCursor:!0,clearOnComplete:!0},i.default.Presets.rect);if(t>0){r.start(t,0);let n=Promise.resolve();const o=()=>new Promise(e=>setTimeout(()=>e(),20));e.forEach(e=>{n=n.then(async()=>{const t=e.match(/\.[^\.]+$/)[0];await function(e,t){const r=s.default.readFileSync(e,"utf8"),n=a.default.format(r,t);return s.default.writeFileSync(e,n),Promise.resolve()}(e,c.getPrettierOptions(t)),await o(),r.increment()})}),await n,r.stop(),u.default(`Success! Formatted ${t} files`).succeed()}else u.default("No files needs to be update").warn()}(await async function(e){const t=u.default("Analyzing files...").start();await new Promise(e=>setTimeout(()=>e(),1e3)),t.succeed(`Found ${e.length} files`);const r=new i.default.SingleBar({format:o.default.cyan("|{bar}| {percentage}% | {value}/{total}"),hideCursor:!0,clearOnComplete:!0},i.default.Presets.rect);if(r.start(e.length,0),!c.getPrettierOptions())throw new Error("Do not find a prettierc config file");const n=()=>Promise.resolve(),s=[];for(const t of await Promise.resolve(e)){await n();const e=t.match(/\.[^\.]+$/)[0],o=l(t,c.getPrettierOptions(e));r.increment(),o||s.push(t)}return r.stop(),t.succeed("Analyzed files"),process.stdout.write("\r[K"),s}(e))},t.checkFileIsFormatted=l},function(e,t){e.exports=require("cli-progress")},function(e,t){e.exports=require("fs")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(3)),i=n(r(4)),s=new Map;t.getPrettierOptions=e=>{let t="typescript";switch(e){case".js":t="babylon";break;case".vue":t="vue"}const r=s.get(t);if(r)return r;const n=i.default.resolveConfig.sync(o.default.resolve(process.cwd(),".prettierrc"));if(t){const e={...n,parser:t};return s.set(t,e),e}return n}}]);