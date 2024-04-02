function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-B4tPfLMm.js","assets/index-BEsNWOri.js","assets/index-Dz3Y1TIN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BEsNWOri.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-B4tPfLMm.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
