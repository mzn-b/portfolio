function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CRvywzXl.js","assets/index-B7boizSd.js","assets/index-3eyMFgkV.css","assets/index-i_lMggZk.js","assets/index-D2WT9s_k.js","assets/index-DD0VEvw1.js","assets/index-BbmJi4b0.js","assets/index-B7URXMz6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B7boizSd.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CRvywzXl.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-i_lMggZk.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D2WT9s_k.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DD0VEvw1.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BbmJi4b0.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B7URXMz6.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
