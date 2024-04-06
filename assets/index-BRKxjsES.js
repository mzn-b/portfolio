function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Cdc666Nt.js","assets/index-ClzPWmvf.js","assets/index-D78GmJXK.css","assets/index-BawvUffl.js","assets/index-D-ZHZWMa.js","assets/index-4Wgtdhr5.js","assets/index-DMAtcsS-.js","assets/index-BbreYyW0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-ClzPWmvf.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Cdc666Nt.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BawvUffl.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D-ZHZWMa.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-4Wgtdhr5.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DMAtcsS-.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BbreYyW0.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
