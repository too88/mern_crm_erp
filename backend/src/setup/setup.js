require('dotenv').config({ path: '.env' });
const { globSync } = require('glob');
const fs = require('fs');
const { v4 } = require('uuid');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);

const ProductCategory = require('../models/appModels/ProductCategory');
const Product = require('../models/appModels/Product');

async function execute() {
  try {
    await generateProductCategory();
    await generateProduct();

    process.exit();
  } catch (error) {
    console.log('\n🚫 Error! The Error info is below');
    console.log(error);
    process.exit();
  }
}

async function generateProductCategory() {
  const productCategoryDoc = new ProductCategory();

  const demoProductCategory = [
    {
      _id: '9d3ca3ec-f67d-4c93-b4c6-ce566a79259f',
      enable: true,
      name: 'First Product Category',
      description: 'First Product Category Description',
      title: 'First Product Category Title',
      tags: ['red'],
    },
    {
      _id: '55898226-dcea-497a-b8eb-46b8a32a873d',
      enable: true,
      name: 'Second Product Category',
      description: 'Second Product Category Description',
      title: 'Second Product Category Title',
      tags: ['blue'],
    },
  ];

  console.info('start generate product category');

  for (const item of demoProductCategory) {
    await productCategoryDoc.deleteOne({ _id: item._id });
  }

  for (const item of demoProductCategory) {
    await productCategoryDoc(item).save();
  }

  console.info('end generate product category');
}

async function generateProduct() {
  const demoProduct = [
    {
      productCategory: '9d3ca3ec-f67d-4c93-b4c6-ce566a79259f',
      enable: true,
      name: 'First Product',
      description: 'First Product Description',
      number: 1,
      title: 'First Product Title',
      tags: ['red'],
      price: 1000,
    },
    {
      productCategory: '55898226-dcea-497a-b8eb-46b8a32a873d',
      enable: true,
      name: 'Second Product',
      description: 'Second Product Description',
      number: 2,
      title: 'Second Product Title',
      tags: ['blue'],
      price: 1000,
    },
  ];

  console.info('start generate product');
  for (const item of demoProduct) {
    await new Product({
      ...item,
      _id: v4(),
    }).save();
  }

  console.info('end generate product');
}

execute();
