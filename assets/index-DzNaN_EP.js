import{ao as o}from"./index-PXb9zWLD.js";import{H as p}from"./MernOs-qaQ5bbZr.js";import{c as m}from"./useOnFetch-FPN0ClPk.js";import{C as l,D as r}from"./index-y7zaskLW.js";import"./action-XTLgilpi.js";import"./ErpApp-cqodzhCS.js";import"./selector-kZgu6KfM.js";import"./index-IFdvQPhR.js";const t={name:{type:"stringWithColor",required:!0},description:{type:"textarea",required:!0},color:{type:"color",options:[...m],required:!0},enabled:{type:"boolean",required:!0}},d="expensecategory";function A(){const e=p(),s=d,a={displayLabels:["name"],searchFields:"name"},n=["name"],i={PANEL_TITLE:e("expense_category"),TABLE_NAME:e("expense_category_list"),ADD_NEW_ENTITY:e("add_new_expense_category"),ENTITY_NAME:e("expense_category")},c={...{entity:s,...i},fields:t,searchConfig:a,deleteModalLabels:n};return o.jsx(l,{createForm:o.jsx(r,{fields:t}),updateForm:o.jsx(r,{fields:t}),config:c})}export{A as default};