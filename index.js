const Discord = require('discord.js');
const client = new Discord.Client();
client.login("OTAxNzkzNDMxMjcyMTYxMjgw.Yk6w7A.KCEeoqyXMUR1oV6VGTYV4hnlQ2U")

setInterval(() => {
  const channelid = "643347760921313291" 
  const channel = client.channels.get(channelid);
  if (!channel) return
  channel.join()
}, 1000);
 
  const bot = new Discord.Client();
  client.on('warn', console.warn);
  client.on('error', console.error);
  const time = [1000];
  client.on("message", async message => {
    //if (message.guild.id != 546292519399587843) return;
    if (
      message.author.id == "601173288538079243" &&
      message.content.includes("𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝚯𝗣𝗔𝗟.\n** Join By ** :") 
    ) {
      setTimeout(() => {
        message.channel.send("𝑊𝑒𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝐎𝐩𝐚𝐥 ❤︎."); 
      }, time[Math.floor(Math.random() * time.length)]);
    }
  });
  client.on('ready', () => {
 console.log(`Name : ${client.user.tag}`)
      console.log(`Guilds: ${client.guilds.size}`);
      console.log(`Users: ${client.users.size}`);
     });