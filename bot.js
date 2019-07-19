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

	const channel = member.guild.channels.find(channel => channel.name === "wɇƚ¢¤₥ɇ");
	if(!channel) return;
	let role = member.guild.roles.find("name", "Hidden user.");
	member.addRole(role.id);
	channel.sendMessage(`Welcome in Ɦıᴅᴅᴇɴ Ðıᴠısıᴏɴ Ᵽᴜʙʟıᴄ. Be sure you are hidden over here, ${member}.`);
})

bot.on('guildMemberRemove', member =>{

	const channel = member.guild.channels.find(channel => channel.name === "wɇƚ¢¤₥ɇ");
	if(!channel) return;
	channel.sendMessage(`I guess ${member} wasn't hidden to stay here...`)
})

bot.on('message', msg=>{
	if(msg.content === "I'm hidden."){
		msg.reply('Ｓｔａｙ  ｈｉｄｄｅｎ  ｔｈｅｎ．');
	}
	if(msg.content === "I'm not hidden."){
		msg.reply('Why are you still here then?');
	}
	if(msg.content === "-test"){
		msg.channel.sendMessage('This is a test.');
	}
	if(msg.content === "-hidden gif"){
		const gif = new Attachment('https://media.discordapp.net/attachments/572096391149649920/572508265506668556/Hidden_Division.gif');
		msg.channel.sendMessage(gif);
	}
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
	if(msg.content === "-gang info"){
		const gembed = new RichEmbed()
		.setTitle('Ɦıᴅᴅᴇɴ Ðıᴠısıᴏɴ infos :')
		.addField('Members', "16 Official members.")
		.addField('Allies', "𝔅𝔬𝔯𝔫 𝔎𝔦𝔩𝔩𝔢𝔯𝔰(ℭ𝔲𝔯𝔰𝔵𝔡𝔟𝔞𝔢 / Fridy)\nSpanzer Gang (Spanzer)\nFile Drop Zone (ShadowWovle)\nΩmega Gang (Ashlee | Ωmega)\n𝕸𝖊𝖓𝖆𝖈𝖊 (Loren / Vitriolic / Sache)\nTrip Gang (cyb3r)\nKFC Gang (Frostbite / ℭ𝔲𝔯𝔰𝔵𝔡𝔟𝔞𝔢)")
		.setColor(0x160033);
		msg.channel.sendEmbed(gembed);
	}
	if(msg.content === "-allies"){
		msg.author.sendMessage("𝔅𝔬𝔯𝔫 𝔎𝔦𝔩𝔩𝔢𝔯𝔰: https://discord.gg/Bb9s5hm\nKFC Gang: https://discord.gg/bw7NXMn\nΩmega Gang: https://discord.gg/SkxaYs6\nFile Drop Zone: https://discord.gg/ywd2Pkm\n𝕸𝖊𝖓𝖆𝖈𝖊 : https://discord.gg/NrQACSt\nTrip Gang : https://discord.gg/EdUhmV2");
		msg.channel.sendMessage("Allies invite links has been sent to you in your DM's");
	}
	if(msg.content === "-help"){
		const embed = new RichEmbed()
		.setTitle('Available Commands :')
		.addField('General commands', "'-help' : Shows you all available commands.\n'-gang info' : Shows you all information of Ɦıᴅᴅᴇɴ Ðıᴠısıᴏɴ.\n'-allies' : Sends you all allies invite links in your DM's.\n'kick' (With the hidden prefix) : Kicks a specific user from the server.\n'ban' (With the hidden prefix) : Ban a specific user from the server.\n'unban' (With the hidden prefix) : Unban a specific user from the server (Only with the discord ID).\n'purge' (With the hidden prefix) : Pruge a specific amount of messages on the channel.\n'announcement' (With the hidden prefix) : Make a public announcement to the server.")
		.addField('Entertainment commands', "'-test' : Just a test.\n'-meme' : Sends memes.\n'-OwO' : Makes any text in OwO.\n'-hidden gif' : Ɦıᴅᴅᴇɴ Ðıᴠısıᴏɴ is here to spread the truth. \n 'Pwease send Spanzer's thighs.' (Without the prefix) : Send's Spanzer's thighs.\n'ah.mp4' (Without the prefix) : Ah! (earrape).\n'I'm hidden.' (Without the prefix) : Of course you better be hidden.\n'I'm not hidden.' (Without the prefix) : Please don't say that.")
		.addField('Current normal prefix', "'-' : It's the current prefix.\nThe hidden prefix is secret and kept away from others for more security.")
		.setColor(0x160033)
		msg.channel.sendEmbed(embed);
	}
	if(msg.content === "Pwease send Spanzer's thighs."){
		const attachement = new Attachment('https://cdn.discordapp.com/attachments/574629212258959387/594448748256428042/JPEG_20190510_205536.jpg');
		msg.channel.sendMessage(attachement);
	}
	if(msg.content === "ah.mp4"){
		const attachement = new Attachment('https://cdn.discordapp.com/attachments/545281417571991572/595472395159076890/ah.mp4');
		msg.channel.sendMessage(attachement);
	}
	let args2 = msg.content.substring(testpre.length - 1).split(" ");
	switch(args2[0]){
		case '-OwO':
			if(!args2[1]) return msg.channel.sendMessage('OwO?');
			const owoMessage = args2.join(" ").slice(5);
			someString = owoMessage
			anotherString = someString.replace(/r/g, 'w');
			s1 = anotherString.replace(/R/g, 'W');
			s2 = s1.replace(/y/g, 'w');
			s3 = s2.replace(/Y/g, 'W');
			s4 = s3.replace(/l/g, 'w');
			s5 = s4.replace(/L/g, 'W');
			msg.channel.bulkDelete('1');
			msg.channel.sendMessage(s5);
		break;
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
			const achannel = bot.channels.find(channel => channel.name === "₳ᵰᵰ¤ᵾᵰ¢ɇ₥ɇᵰʈ");
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
