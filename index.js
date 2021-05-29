const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!');
  }
});


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
 client.on('ready', () => {
    console.log('I am ready!');
  });
  
  // Create an event listener for messages
  client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === '!vtr') {
      // Send the user's avatar URL
      message.reply(message.author.displayAvatarURL());
    }
  });

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
 client.on('ready', () => {
    console.log('I am ready!');
  });
  
  // Create an event listener for new guild members
  client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });
  
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
 client.on('ready', () => {
    console.log('I am ready!');
  });
  
  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('!kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('I was unable to kick the member');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  });

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
 client.on('ready', () => {
    console.log('I am ready!');
  });
  
  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('!ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
           */
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply('I was unable to ban the member');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.reply("You didn't mention the user to ban!");
      }
    }
  });

/*
 * Create a new webhook
 * The Webhooks ID and token can be found in the URL, when you request that URL, or in the response body.
 * https://discord.com/api/webhooks/12345678910/T0kEn0fw3Bh00K
 *                                  ^^^^^^^^^^  ^^^^^^^^^^^^ 
 *                                  Webhook ID  Webhook Token
 */
const hook = new Discord.WebhookClient('12345678910', 'T0kEn0fw3Bh00K');

// Send a message using the webhook
hook.send('I am now alive!');

client.on('message', msg => {
  if (msg.content === '!cmds') {
    msg.reply('Commands: "!ping", "!vtr", "!kick", "!ban", "!cmds".');
  }
});

  client.login('bot-token');
