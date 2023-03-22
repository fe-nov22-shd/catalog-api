import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/Product';
import {Category} from "../models/Category";
import {ProductInfo} from "../models/ProductInfo";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(URL, {
    models: [Product, Category, ProductInfo],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      }
    }
  })
}
