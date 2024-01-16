import{r as o,j as n,_ as i,P as l}from"./index-CXyQeB9U.js";const a="OPEN_NAV_MENU",u="CLOSE_NAV_MENU",c="COLLAPSE_NAV_MENU",_={isNavMenuClose:!1};function x(e,t){switch(t.type){case a:return{isNavMenuClose:!1};case u:return{isNavMenuClose:!0};case c:return{isNavMenuClose:!e.isNavMenuClose};default:throw new Error(`unhandled action type: ${t.type}`)}}const E=e=>({navMenu:{open:()=>{e({type:a})},close:()=>{e({type:u})},collapse:()=>{e({type:c})}}}),p=o.createContext();function N({children:e}){const[t,s]=o.useReducer(x,_),r=o.useMemo(()=>[t,s],[t]);return n.jsx(p.Provider,{value:r,children:e})}function f(){const e=o.useContext(p);if(e===void 0)throw new Error("useAppContext must be used within a AppContextProvider");const[t,s]=e,r=E(s);return{state:t,appContextAction:r}}const d=o.lazy(()=>i(()=>import("./ErpApp-x09vzMGa.js"),__vite__mapDeps([0,1]))),A=()=>n.jsx(N,{children:n.jsx(o.Suspense,{fallback:n.jsx(l,{}),children:n.jsx(d,{})})});function C(){return n.jsx(A,{})}const v=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{v as M,f as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ErpApp-x09vzMGa.js","assets/index-CXyQeB9U.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
