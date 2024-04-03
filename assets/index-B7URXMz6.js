function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-CSJV-Qxg.js","assets/index-B7boizSd.js","assets/index-3eyMFgkV.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-B7boizSd.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CSJV-Qxg.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
