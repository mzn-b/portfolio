function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CaTrjIRv.js","assets/index-BS8gznfR.js","assets/index-TUoyevXE.css","assets/index-CW5eaFM1.js","assets/index-CR9sZtBF.js","assets/index-BwmnxAfP.js","assets/index-BwF6QhvA.js","assets/index-yudU1Q6d.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BS8gznfR.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CaTrjIRv.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CW5eaFM1.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CR9sZtBF.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BwmnxAfP.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BwF6QhvA.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-yudU1Q6d.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
