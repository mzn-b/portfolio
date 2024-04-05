function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-CcRAYw7b.js","assets/index-Co7JLAvu.js","assets/index-D78GmJXK.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Co7JLAvu.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-CcRAYw7b.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
