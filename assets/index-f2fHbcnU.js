import{j as o}from"./index-C0e7kZqo.js";import{u as p}from"./ErpApp-AEnJvgjO.js";import{c as m}from"./useOnFetch-CQ3Dt0on.js";import{C as l,D as r}from"./index-qPuXGw9Q.js";import"./MernOs-aa5gtRBh.js";import"./selector-h-DRLXGt.js";import"./selector-tiHgCUiS.js";import"./index-lxkM3oMi.js";const t={name:{type:"stringWithColor",required:!0},description:{type:"textarea",required:!0},color:{type:"color",options:[...m],required:!0},enabled:{type:"boolean",required:!0}},u="expensecategory";function A(){const e=p(),s=u,a={displayLabels:["name"],searchFields:"name"},n=["name"],i={PANEL_TITLE:e("expense_category"),TABLE_NAME:e("expense_category_list"),ADD_NEW_ENTITY:e("add_new_expense_category"),ENTITY_NAME:e("expense_category")},c={...{entity:s,...i},fields:t,searchConfig:a,deleteModalLabels:n};return o.jsx(l,{createForm:o.jsx(r,{fields:t}),updateForm:o.jsx(r,{fields:t}),config:c})}export{A as default};