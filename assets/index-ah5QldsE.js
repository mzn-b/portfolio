function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-K7lefIhm.js","assets/index-Bh3BU56K.js","assets/index-BwIeAAAJ.css","assets/index-BsfPnz4i.js","assets/index-CdArPnKf.js","assets/index-g8cFbVBA.js","assets/index-DhaLN4S-.js","assets/index-CMTzBPLc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bh3BU56K.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-K7lefIhm.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BsfPnz4i.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CdArPnKf.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-g8cFbVBA.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DhaLN4S-.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CMTzBPLc.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
