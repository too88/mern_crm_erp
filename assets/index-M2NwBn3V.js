import{j as t}from"./index-fZCY3o1_.js";import{u as d}from"./ErpApp-RE6yp7rn.js";import{C as i,D as o}from"./index--P7GEU2B.js";import"./MernOs-N5Eddwsx.js";import"./selector-ox9gZ752.js";const r={name:{type:"string",require:!0},productCategory:{type:"async",label:"Product Category",displayLabels:["productCategory","name"],dataIndex:["productCategory","name"],entity:"productcategory",require:!0},price:{type:"currency",require:!0},description:{type:"textarea"}},p="product";function x(){const e=d(),a=p,s={displayLabels:["name"],searchFields:"name"},c=["name"],n={PANEL_TITLE:e("product"),TABLE_NAME:e("product_list"),ADD_NEW_ENTITY:e("add_new_product"),ENTITY_NAME:e("product")},u={...{entity:a,...n},fields:r,searchConfig:s,deleteModalLabels:c};return t.jsx(i,{createForm:t.jsx(o,{fields:r}),updateForm:t.jsx(o,{fields:r}),config:u})}export{x as default};
