function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-Rfb3ALoH.js","assets/index-B7boizSd.js","assets/index-3eyMFgkV.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B7boizSd.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-Rfb3ALoH.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
