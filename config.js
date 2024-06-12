//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dHQk52OWl2QklOYTlleWNjalRBTHlaeUZTUGJwQXhrVDB1MFZiOEJVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFQ2UVlSTUhjM0xQek1nWnJ2WDNQM3VMbUtUaFlFNDQ3MVBKZlliQzBuVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTk1IRzFGa21Yc0tMM2YybXIzeURCQlJxSm1BUENNa053MWpROFVVYWxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRYlNBV3dTWGpET1hyNU9vVHIvQ1RSeTR6bGEyc2FvaFoxdG1QT0N3N2xVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQZ2F6bWkxcFVZTDlwNnpDWjlTY040T3hYYVI4aWxpRGtxTy9iME9CMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJNMkVuaTB1SmZhZGZqby95SC9TaGhoOVFqNklJemhSZkVnRGxnall4Ulk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJUdmEwTkErMk5scWVCMGViK2NGRlAzZVY3MEIwbzF0c3FBYTNhaDJGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFRkbnhudHk3VjRXRnhQRnNJRXVwZEVSOWU2V0tTWkEyZTRZQjJCR1FrVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJOdWNOMk9tRldkTE8wMUNVd3FnUnphRlVHR3Q2TFFNWWpYS3IxSmlPa0NOeHMxVkZJcHUvRk5Xb2FENGhQY1dtcm5weVlOTm1lOEJrTzkycHd6d2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IjhMdHFxVEMwcmtkYTZ6WE8wbkEyNWl6L1l0YzhFY3o4MjBzTzREZkV4Y1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjgtZmlQUXo3U3lpWERGdF92Q3NQR1EiLCJwaG9uZUlkIjoiZTY0MTdjODYtNDJlYS00Mzk2LWI0NjUtMjcwODViMGFlNzQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJQQ2plcmdHUDRwV3drSHYwcDR5UnJ0N25Ecz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyZTMzZUdIbmdmTkpPa2NzTWY3MllsOURmTnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlRMQTFTUVkiLCJtZSI6eyJpZCI6IjI1NDc1NDM5NDQ3OToxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4WT8J2ZkvCdnpbwnZ6Y8J2ZlV/wnZmGLfCdmY/wnZmA8J2ZlCDwk4WTIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbkJzUE1DRVBPUXA3TUdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTMHc1RXVMNUUvd2N5dEJKdWZZQTBhT3Fvb2hBekYyc1FtYkZiaVJoalg0PSIsImFjY291bnRTaWduYXR1cmUiOiJiRjhjWjhKYkNmcUYvdXp4UC9mRG55STBmY0FFa2FDR1l2cVpza1BVWHVvQ3QyalBCbjNZaTZtNkFUZVJHTVFXUXlPUkFFaHVOcnZzWnJlUE85MUdCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL2VEZEJoSDcxUGlzUkdpQ29UOHZ3TVdVRVFWbDNNOUlGeEF3YXJlRWJSdmovKzdWVUgxSHdzUDhKYlVCWFNYNytNRWZ2aTRFbklrK2NYaVlaQU9PZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTQzOTQ0Nzk6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXRNT1JMaStSUDhITXJRU2JuMkFOR2pxcUtJUU14ZHJFSm14VzRrWVkxKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODIwODY0MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHOGIifQ==|
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝘨𝘳𝘦𝘢𝘵 𝘥𝘢𝘺 | 𓅓𝙒𝞖𝞘𝙕𓅓",
  author: process.env.PACK_AUTHER || "Whiz",
  packname: process.env.PACK_NAME || "Whiz",
  botname: process.env.BOT_NAME || "Whiz",
  ownername: process.env.OWNER_NAME || "𓅓𝙒𝞖𝞘𝙕𓅓",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
