require("module-alias/register");
require("dotenv").config({ path: ".env" });
const connectionModule = require("@/setup/connection");
const { v4 } = require("uuid");

// connect database
connectionModule.connection();

const ProductCategory = require("@/models/app/ProductCategory");
const Product = require("@/models/app/Product");
const Company = require("@/models/app/Company");
const People = require("@/models/app/People");

async function execute() {
  try {
    await generateProductCategory();
    await generateProduct();
    await generateCompany();
    await generatePeople();

    process.exit();
  } catch (error) {
    console.log("\n🚫 Error! The Error info is below");
    console.log(error);
    process.exit();
  }
}

async function generateProductCategory() {
  const demoProductCategory = [
    {
      _id: "9d3ca3ec-f67d-4c93-b4c6-ce566a79259f",
      enable: true,
      color: "red",
      name: "First Product Category",
      description: "First Product Category Description",
      title: "First Product Category Title",
    },
    {
      _id: "55898226-dcea-497a-b8eb-46b8a32a873d",
      enable: true,
      color: "blue",
      name: "Second Product Category",
      description: "Second Product Category Description",
      title: "Second Product Category Title",
    },
  ];

  console.info("start generate product category");

  await ProductCategory.deleteMany({});
  await ProductCategory.insertMany(demoProductCategory);

  console.info("end generate product category");
}

async function generateProduct() {
  const demoProduct = [
    {
      enable: true,
      productCategory: "9d3ca3ec-f67d-4c93-b4c6-ce566a79259f",
      name: "First Product",
      description: "First Product Description",
      title: "First Product Title",
      price: 1000,
    },
    {
      productCategory: "55898226-dcea-497a-b8eb-46b8a32a873d",
      enable: true,
      name: "Second Product",
      description: "Second Product Description",
      title: "Second Product Title",
      price: 1000,
    },
  ];

  await Product.deleteMany({});

  console.info("start generate product");
  for (const item of demoProduct) {
    await Product.create({
      ...item,
      _id: v4(),
    });
  }

  console.info("end generate product");
}

async function generateCompany() {
  const demoCompany = [
    {
      _id: "4681d598-d4da-4682-9525-44f393ae6e63",
      name: "First Company",
      isClient: false,
      country: "VN",
      phone: "0909123123",
      email: "tuhuynh272@gmail.com",
    },
    {
      _id: "6e130fd6-565d-45c9-a67c-4d6950be4900",
      name: "Second Company",
      isClient: false,
      country: "VN",
      phone: "0862096864",
      email: "tuhuynh1902@gmail.com",
    },
  ];

  console.info("start generate company");

  await Company.deleteMany({});
  await Company.insertMany(demoCompany);

  console.info("end generate company");
}

async function generatePeople() {
  const demoPeople = [
    {
      firstname: "Tu",
      lastname: "Thanh",
      isClient: false,
      company: {
        _id: "4681d598-d4da-4682-9525-44f393ae6e63",
        name: "First Company",
      },
      country: "VN",
      phone: "0862096864",
      email: "tuhuynh1902@gmail.com",
      isPublic: false,
    },
    {
      firstname: "Tuan",
      lastname: "Nguyen",
      isClient: false,
      company: {
        _id: "6e130fd6-565d-45c9-a67c-4d6950be4900",
        name: "Second Company",
      },
      country: "VN",
      phone: "0909123123",
      email: "tuhuynh272@gmail.com",
      isPublic: false,
    },
  ];

  await People.deleteMany({});

  console.info("start generate people");
  for (const item of demoPeople) {
    await People.create({
      ...item,
      _id: v4(),
    });
  }

  console.info("end generate people");
}

execute();
