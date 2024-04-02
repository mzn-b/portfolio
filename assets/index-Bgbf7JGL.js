function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-RE1XrgDi.js","assets/index-BEsNWOri.js","assets/index-Dz3Y1TIN.css","assets/index-BoGRrTqN.js","assets/index-akMkS18m.js","assets/index-BoJkBy9I.js","assets/index-Cmn7YEdq.js","assets/index-CEARZ9ef.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BEsNWOri.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-RE1XrgDi.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BoGRrTqN.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-akMkS18m.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BoJkBy9I.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Cmn7YEdq.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CEARZ9ef.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
