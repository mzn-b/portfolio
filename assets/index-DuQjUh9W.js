function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DiYQQQl2.js","assets/index-D6N71bXs.js","assets/index-TUoyevXE.css","assets/index-DLadJdI2.js","assets/index-Er8qm-_S.js","assets/index-tMLECE6S.js","assets/index-CZxFLAGm.js","assets/index-XnQnpooi.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D6N71bXs.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DiYQQQl2.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DLadJdI2.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Er8qm-_S.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-tMLECE6S.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CZxFLAGm.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-XnQnpooi.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
