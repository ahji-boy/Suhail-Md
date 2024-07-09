const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_46_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkzLFxuICAgICAgICA5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNixcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDczLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MixcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNixcbiAgICAgICAgNTksXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRpZndMSCtseHMrVk92dTZZWENQSkVVVC9GQkowTHZXUGMwaFpKNEQ0UkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImljaFh3SUk0UUttdVlxeWptSFFva2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDhmYzcwMmMtNDBhYy00ODczLWI5ZWEtZTcyNjk5N2E3YjFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDE1NSxcbiAgICAgIDExMyxcbiAgICAgIDIxMixcbiAgICAgIDI0LFxuICAgICAgMjE1LFxuICAgICAgMTMzLFxuICAgICAgOTksXG4gICAgICAxNjMsXG4gICAgICA1MSxcbiAgICAgIDEyLFxuICAgICAgMTMxLFxuICAgICAgMjgsXG4gICAgICAyMTIsXG4gICAgICA5MixcbiAgICAgIDUzLFxuICAgICAgNDAsXG4gICAgICA4MyxcbiAgICAgIDE5NixcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDE4MSxcbiAgICAgIDgzLFxuICAgICAgNjksXG4gICAgICA0OCxcbiAgICAgIDcxLFxuICAgICAgNjIsXG4gICAgICAzMyxcbiAgICAgIDIxNyxcbiAgICAgIDEzMixcbiAgICAgIDIwOSxcbiAgICAgIDIxNixcbiAgICAgIDYwLFxuICAgICAgODgsXG4gICAgICAxNDMsXG4gICAgICAxNzIsXG4gICAgICA2NixcbiAgICAgIDQzLFxuICAgICAgMjM5LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRQMlhISlNGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDE5MDk3OTcxOjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMDI1NDE4NTg0NDkxMTo0N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMlRrY2tIRU4rMnRiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldFdTJ3QWtpTURzdnFhNmxDVWw5Sk55RUlHREtBTklwNytPNTcraEFGbEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUVNUaHZQK3BReXloYy9FV1NmajJCQlRtUEpOL002SGVpV0grUkt5aFNvWTNFMGdkZ0E2cy9hUy9sRHdsWVdWbDgzMk90MjZWVkpDSnJlbEg2blE0QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQk0zK3Ivdkw2REhLMGhYSGQyL1ZFcjRtbW9ONFowcm00TFNVdTNkbkZoTS96TThyVlZGQXRBZlBWbFo4Tk1wRVMwUlh2amdlV3hKcE96M2dPOUljaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxOTA5Nzk3MTo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1NDAwMDJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
