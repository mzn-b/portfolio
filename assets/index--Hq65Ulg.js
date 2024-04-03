function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DI6z1rg7.js","assets/index-MCEBGRtN.js","assets/index-3eyMFgkV.css","assets/index-CA39vUb_.js","assets/index-kAWZMgzQ.js","assets/index-Xj0jSVCv.js","assets/index-CNk4wr01.js","assets/index-ZQegZZU0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-MCEBGRtN.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DI6z1rg7.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CA39vUb_.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-kAWZMgzQ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Xj0jSVCv.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CNk4wr01.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-ZQegZZU0.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
