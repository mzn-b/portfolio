function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Cu7QFuaq.js","assets/index-D6R1JDm7.js","assets/index-BwIeAAAJ.css","assets/index-DWt-_wlM.js","assets/index-DBo-Qti1.js","assets/index-CeO0hIos.js","assets/index-ttjpeFXV.js","assets/index-B_iyzmnX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D6R1JDm7.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Cu7QFuaq.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DWt-_wlM.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DBo-Qti1.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CeO0hIos.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-ttjpeFXV.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B_iyzmnX.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
