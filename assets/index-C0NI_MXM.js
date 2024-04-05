function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer--6ZKAr1r.js","assets/index-Co7JLAvu.js","assets/index-D78GmJXK.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Co7JLAvu.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer--6ZKAr1r.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
