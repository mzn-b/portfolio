function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DqftoJJL.js","assets/index-Dap--Vcm.js","assets/index-ZQkegtrU.css","assets/index-B-VpLlUK.js","assets/index-CPADGqN9.js","assets/index-C1eEu8vQ.js","assets/index-OyuJ_D5X.js","assets/index-BHWTWXy7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Dap--Vcm.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DqftoJJL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-B-VpLlUK.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CPADGqN9.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C1eEu8vQ.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-OyuJ_D5X.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BHWTWXy7.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
