function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Q7Ck6qUH.js","assets/index-BrsqZWL3.js","assets/index-D78GmJXK.css","assets/index-ChnRUDQk.js","assets/index-Dkm10rcV.js","assets/index-Bt4-jLes.js","assets/index-KitXx_it.js","assets/index-CrWd6DB-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BrsqZWL3.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Q7Ck6qUH.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-ChnRUDQk.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Dkm10rcV.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Bt4-jLes.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-KitXx_it.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CrWd6DB-.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
