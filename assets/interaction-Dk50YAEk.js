function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-DUKtBVsE.js","assets/Ranges-CAlsoRTw.js","assets/index-D6R1JDm7.js","assets/index-BwIeAAAJ.css","assets/index-Bt-OeqIB.js","assets/OptionsColor-Cl9SarLs.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D6R1JDm7.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DUKtBVsE.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
