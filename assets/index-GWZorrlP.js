import{j as t}from"./index-m26f_zdL.js";import{u as c}from"./ErpApp-Ig8g1Q8H.js";import{C as m,D as n}from"./index-FP7LJ9h6.js";import"./MernOs-A_rJ-2XL.js";import"./selector-cL3xio1x.js";import"./useOnFetch-MNTF9aOv.js";import"./selector-J3-LdH-1.js";import"./index-tEiCAhz_.js";const s={name:{type:"string",required:!0},expenseCategory:{type:"async",label:"Expense Category",displayLabels:["expenseCategory","name"],dataIndex:["expenseCategory","name"],entity:"expensecategory",required:!0},total:{type:"currency",required:!0},description:{type:"textarea"},ref:{type:"string"}},x="expense";function C(){const r=x,e=c(),a={displayLabels:["name"],searchFields:"name"},o=["name"],p={PANEL_TITLE:e("expense"),TABLE_NAME:e("expense_list"),ADD_NEW_ENTITY:e("add_new_expense"),ENTITY_NAME:e("expense")},i={...{entity:r,...p},fields:s,searchConfig:a,deleteModalLabels:o};return t.jsx(m,{createForm:t.jsx(n,{fields:s}),updateForm:t.jsx(n,{fields:s}),config:i})}export{C as default};
