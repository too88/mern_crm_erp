import{j as e}from"./index-m26f_zdL.js";import{u}from"./ErpApp-Ig8g1Q8H.js";import{c as d}from"./useOnFetch-MNTF9aOv.js";import{C as p,D as r}from"./index-FP7LJ9h6.js";import"./MernOs-A_rJ-2XL.js";import"./selector-cL3xio1x.js";import"./selector-J3-LdH-1.js";import"./index-tEiCAhz_.js";const t={name:{type:"stringWithColor",required:!0},description:{type:"textarea",required:!0},color:{type:"color",options:[...d],required:!0},enabled:{type:"boolean",required:!0}},m="productcategory";function L(){const o=u(),a=m,s={displayLabels:["name"],searchFields:"name"},c=["name"],n={PANEL_TITLE:o("product_category"),TABLE_NAME:o("product_category_list"),ADD_NEW_ENTITY:o("add_new_product_category"),ENTITY_NAME:o("product_category")},i={...{entity:a,...n},fields:t,searchConfig:s,deleteModalLabels:c};return e.jsx(p,{createForm:e.jsx(r,{fields:t}),updateForm:e.jsx(r,{fields:t}),config:i})}export{L as default};
