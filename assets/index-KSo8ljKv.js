import{j as a}from"./index-C0e7kZqo.js";import{C as i,D as n}from"./index-qPuXGw9Q.js";import{u as c}from"./ErpApp-AEnJvgjO.js";import"./useOnFetch-CQ3Dt0on.js";import"./selector-tiHgCUiS.js";import"./MernOs-aa5gtRBh.js";import"./index-lxkM3oMi.js";import"./selector-h-DRLXGt.js";const t={name:{type:"string",require:!0},country:{type:"country"},phone:{type:"phone"},email:{type:"email"},mainContact:{type:"search",renderAsTag:!0,label:"Contact",entity:"people",displayLabels:["firstname","lastname"],searchFields:"firstname, lastname",dataIndex:["mainContact","firstname"]}},p="company";function x(){const e=c(),o=p,s={displayLabels:["name"],searchFields:"name"},r=["name"],m={...{...{PANEL_TITLE:e("company"),TABLE_NAME:e("company_list"),ADD_NEW_ENTITY:e("add_new_company"),ENTITY_NAME:e("company")},entity:o},fields:t,deleteModalLabels:r,searchConfig:s};return a.jsx(i,{updateForm:a.jsx(n,{fields:t}),createForm:a.jsx(n,{fields:t}),config:m})}export{x as default};