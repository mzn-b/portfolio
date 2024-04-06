function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-C_DRW-cR.js","assets/index-Dap--Vcm.js","assets/index-ZQkegtrU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Dap--Vcm.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-C_DRW-cR.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
