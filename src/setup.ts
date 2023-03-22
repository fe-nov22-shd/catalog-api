import { Product } from "./models/Product";
import { ProductInfo } from "./models/ProductInfo";
import { Category } from "./models/Category";
import { dbInit } from "./utils/initDB";
const { sequelize } = require('./models');

(async () => {
  dbInit();

  try {
    await ProductInfo.sync({ alter: true });
    await Category.sync({ alter: true });
    await Product.sync({ alter: true });

  } catch (error: any) {
    throw new Error(error.message);
  }

  console.log('synced!');
})()
