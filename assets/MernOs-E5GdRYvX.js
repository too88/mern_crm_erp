import{C as a,a as u,O as c,r as o,j as n,_ as i,P as l}from"./index-JfpVP2Ia.js";const x={isNavMenuClose:!1};function d(e,t){switch(t.type){case c:return{isNavMenuClose:!1};case u:return{isNavMenuClose:!0};case a:return{isNavMenuClose:!e.isNavMenuClose};default:throw new Error(`unhandled action type: ${t.type}`)}}const _=e=>({navMenu:{open:()=>{e({type:c})},close:()=>{e({type:u})},collapse:()=>{e({type:a})}}}),p=o.createContext();function C({children:e}){const[t,s]=o.useReducer(d,x),r=o.useMemo(()=>[t,s],[t]);return n.jsx(p.Provider,{value:r,children:e})}function E(){const e=o.useContext(p);if(e===void 0)throw new Error("useAppContext must be used within a AppContextProvider");const[t,s]=e,r=_(s);return{state:t,appContextAction:r}}const f=o.lazy(()=>i(()=>import("./ErpApp-rJoykNy7.js").then(e=>e.Z),__vite__mapDeps([0,1,2]),import.meta.url)),v=()=>n.jsx(C,{children:n.jsx(o.Suspense,{fallback:n.jsx(l,{}),children:n.jsx(f,{})})});function A(){return n.jsx(v,{})}const N=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{N as M,E as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ErpApp-rJoykNy7.js","./index-JfpVP2Ia.js","./index-pafIPTdf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
