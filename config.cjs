// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Buddy;;;NIZgRJrB#5NwyFMgK0x1E8X4UZZS4CN3f_bUXiLlEsTSKM0cLnc4","Buddy;;;FNpXTZxL#3uc7MdMKDC_dcA57BxEV9iM-4ZNgbjpTxxOQaD1nyWY",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT !== undefined ? process.env.AUTO_STATUS_REACT === 'true' : false, 
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : false,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  ANTI_WORD: process.env.ANTI_WORD !== undefined ? process.env.ANTI_WORD === 'true' : false,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "Davyduty_mnyama",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254759170183","25477442167",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
