import { Phone } from "./models/Phone";
import { PhoneInfo } from "./models/PhoneInfo";
import { Category } from "./models/Category";
import { dbInit } from "./utils/initDB";

(async () => {
  dbInit();

  try {
    await PhoneInfo.sync({ alter: true });
    await Category.sync({ alter: true });
    await Phone.sync({ alter: true });

  } catch (error: any) {
    throw new Error(error.message);
  }

  console.log('synced!');
})()
