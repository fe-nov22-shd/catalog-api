import { Phone } from "./models/Phone";
import { dbInit } from "./utils/initDB";

(async () => {
  dbInit();

  try {
    await Phone.sync({ alter: true });
  } catch (error: any) {
    throw new Error(error.message);
  }

  console.log('synced!');
})()
