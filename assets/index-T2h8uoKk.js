function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Bouncer-uzjrTF3Q.js","assets/index-D6N71bXs.js","assets/index-TUoyevXE.css","assets/Ranges-D_oGWSn2.js","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-D6N71bXs.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-uzjrTF3Q.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};