function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DrGkNys4.js","assets/index-Co7JLAvu.js","assets/index-D78GmJXK.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Co7JLAvu.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DrGkNys4.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
