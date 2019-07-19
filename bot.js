const {Client, Attachment, RichEmbed, Guild, GuildMember, MessageMentions, Role} = require('discord.js');
const bot = new Client();
const superagent = require('superagent');

const PREFIX = '​';
const testpre = '-';

bot.on('ready', () =>{
	console.log('Hidden division is now hidden.');
	bot.user.setActivity('you.', { type: ('WATCHING')})
})

bot.on('guildMemberAdd', member =>{

	const channel = member.guild.channels.find(channel => channel.name === "ᴡᴇʟᴄᴏᴍᴇ");
	if(!channel) return;
	let role = member.guild.roles.find("name", "The lost ones.");
	member.addRole(role.id);
	channel.sendMessage(`Welcome in The Lost Ring. Be sure you have your ring, ${member}.`);
})

bot.on('guildMemberRemove', member =>{

	const channel = member.guild.channels.find(channel => channel.name === "ᴡᴇʟᴄᴏᴍᴇ");
	if(!channel) return;
	channel.sendMessage(`I guess ${member} didn't get his ring...`)
})

bot.on('message', msg=>{
	if(msg.content === "-meme"){
		const randomPuppy = require('random-puppy');
		const snekfetch = require('snekfetch');
		let reddit = [
			"meme",
			"animemes",
			"MemesOfAnime",
			"animememes",
			"AnimeFunny",
			"dankmemes",
			"dankmeme",
			"wholesomememes",
			"MemeEconomy",
			"meirl",
			"me_irl",
			"2meirl4meirl"
		];
		let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];
		msg.channel.startTyping();
		randomPuppy(subreddit).then(url =>{
			snekfetch.get(url).then(async res =>{
				await msg.channel.sendMessage({
					files: [{
						attachment: res.body,
						name: 'meme.png'
					}]
				}).then(msg.channel.stopTyping());
			});
		});
	}
	let args = msg.content.substring(PREFIX.length - 1).split(" ");
	switch(args[0]){
		case '​purge':
			const command = args.join(" ");
			if(command.includes('-')) return;
			if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.sendMessage("You don't have the permission to purge messages!");
			if(!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.channel.sendMessage("I don't have the allowed permission to purge messages!");
			if(!args[1]) return msg.channel.sendMessage('Please specify a number of messages to be purged!');
			msg.channel.bulkDelete(args[1]);
		break;
		case '​iregards':
			mention = msg.mentions.users.first();
			if(!msg.member.roles.find(r => r.name === "Leader")) return msg.channel.sendMessage("You are not the leader. You can't do that.");
			if(!msg.author.id === '333357946744602647') return msg.channel.sendMessage("You are not the leader. You can't do that.");
			if(!args[1]) return msg.channel.sendMessage('Who are you trying to send your regards?')
			const regard = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif')
			mention.sendMessage('Ɦıᴅᴅᴇɴ Ðıᴠısıᴏɴ send their regards.');
			mention.sendMessage(regard);
			msg.channel.bulkDelete(1);
		break;
		case '​announcement':
			if(!args[1]) return msg.channel.sendMessage('What are you trying to announce?')
			if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.sendMessage("You don't have the permission to make an announcement!");
			if(!msg.guild.me.hasPermission("ADMINISTRATOR")) return msg.channel.sendMessage("I don't have the allowed permission to make an announcement!");
			const aMessage = args.join(" ").slice(14);
			const achannel = bot.channels.find(channel => channel.name === "ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ");
			const aAuthor = msg.author.username
			const agif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
			if(!achannel) return;
			msg.channel.bulkDelete(1);
			achannel.sendMessage('@everyone \n \n' + aMessage + '\n \n' + 'Announcement made by ' + aAuthor + '.')
			achannel.sendMessage(agif)
		break;
		case '​kick':
			if(!args[1]) return msg.channel.sendMessage('Please specify a user!')
			const tuser = msg.mentions.users.first();
			const kreason = args.join(" ").slice(28);
			if(tuser){
				const member = msg.guild.member(tuser)
				if(member){
					if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to kick someone!");
					if(!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to kick someone!");
					if(!kreason){
						member.kick('You were kicked.');
						const kembed = new RichEmbed()
						.setTitle('User has been kicked!')
						.addField("User's name", tuser)
						.addField("User's ID", tuser.id)
						.addField("Reason", 'No reason specified.');
						msg.channel.sendEmbed(kembed);
					}
					else{
						member.kick(kreason);
						const kembed = new RichEmbed()
						.setTitle('User has been kicked!')
						.addField("User's name", tuser)
						.addField("User's ID", tuser.id)
						.addField("Reason", kreason);
						msg.channel.sendEmbed(kembed);
					}
				}
			}
		break;
		case '​ban':
			if(!args[1]) return msg.channel.sendMessage('Please specify a user!')
			const user = msg.mentions.users.first();
			const breason = args.join(" ").slice(27);
			if(user){
				const member = msg.guild.member(user)
				if(member){
					if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to ban someone!");
					if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to ban someone!");
					if(!breason){
						member.ban('You were banned.');
						const bembed = new RichEmbed()
						.setTitle('User has been banned!')
						.addField("User's name", user)
						.addField("User's ID", user.id)
						.addField("Reason", 'No reason specified.');
						msg.channel.sendEmbed(bembed);
					}
					else{
						member.ban(breason);
						const bembed = new RichEmbed()
						.setTitle('User has been banned!')
						.addField("User's name", user)
						.addField("User's ID", user.id)
						.addField("Reason", breason);
						msg.channel.sendEmbed(bembed);
					}
				}
			}
		break;
		case '​unban':
			if(!args[1]) return msg.channel.sendMessage('Please specify a user ID!')
			if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to unban someone!");
			if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to unban someone!");
			msg.guild.unban(args[1])
			const uembed = new RichEmbed()
			.setTitle('User has been unbanned!')
			msg.channel.sendEmbed(uembed);
		break;
	}
})

bot.login(process.env.BOT_TOKEN);
