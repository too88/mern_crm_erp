import{j as a}from"./index-m26f_zdL.js";import{u as p}from"./ErpApp-Ig8g1Q8H.js";import{C as c,D as l}from"./index-FP7LJ9h6.js";import"./MernOs-A_rJ-2XL.js";import"./selector-cL3xio1x.js";import"./useOnFetch-MNTF9aOv.js";import"./selector-J3-LdH-1.js";import"./index-tEiCAhz_.js";const o={type:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"people",label:"people",color:"magenta"},{value:"company",label:"company",color:"blue"}],required:!0,hasFeedback:!0},name:{type:"string",disableForForm:!0},status:{type:"selectWithTranslation",renderAsTag:!0,options:[{value:"draft",label:"draft"},{value:"new",label:"new",color:"blue"},{value:"won",label:"won",color:"green"},{value:"loose",label:"loose",color:"red"},{value:"waiting",label:"waiting",color:"orange"}]},country:{type:"country",color:null,disableForForm:!0},phone:{type:"phone",disableForForm:!0},email:{type:"email",disableForForm:!0},people:{type:"search",label:"people",entity:"people",displayLabels:["firstname","lastname"],searchFields:"firstname, lastname",dataIndex:["people","firstname"],disableForTable:!0,feedback:"people"},company:{type:"search",label:"company",entity:"company",displayLabels:["name"],searchFields:"name",dataIndex:["company","name"],disableForTable:!0,feedback:"company"}},m="lead";function L(){const e=p(),t=m,r={displayLabels:["name"],searchFields:"name"},n=["name"],s={PANEL_TITLE:e("lead"),TABLE_NAME:e("lead_list"),ADD_NEW_ENTITY:e("add_new_lead"),ENTITY_NAME:e("lead")},i={...{entity:t,...s},fields:o,searchConfig:r,deleteModalLabels:n};return a.jsx(c,{createForm:a.jsx(l,{fields:o}),updateForm:a.jsx(l,{fields:o}),config:i})}export{L as default};
