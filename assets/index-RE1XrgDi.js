function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-Bcv2tlra.js","assets/index-BEsNWOri.js","assets/index-Dz3Y1TIN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BEsNWOri.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-Bcv2tlra.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
