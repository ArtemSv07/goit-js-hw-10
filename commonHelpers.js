import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */import{f as i}from"./assets/vendor-992cd48f.js";const l=document.querySelector("#datetime-picker"),m=document.querySelector("span[data-days]"),p=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]");let a;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]);const s=Date.now();a=t[0]-s}};i(l,h);function f(t){const n=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:o,minutes:d,seconds:u}}function D(t,s){const e=s(t);if(a){let r=e.days;r=String(r).padStart(2,0),m.textContent=r;let c=e.hours;c=String(c).padStart(2,0),p.textContent=c;let n=e.minutes;n=String(n).padStart(2,0),y.textContent=n;let o=e.seconds;o=String(o).padStart(2,0),S.textContent=o}}const M=setInterval(()=>{a===-1e3?clearInterval(M):(D(a,f),a-=1e3)},1e3);
//# sourceMappingURL=commonHelpers.js.map
