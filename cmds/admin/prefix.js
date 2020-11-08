import Util from '../../Util.js';

/**
 * @param {Discord.Message} message
 * @param {string[]} args
 */
export async function run(message, args) {
    let prefix = process.gideon.getGuild.get(message.guild.id);

    if (args[0].match(/(?:default)/i)) {
        prefix.prefix = '!';
        process.gideon.setGuild.run(prefix);
        return message.channel.send(`Restored the default prefix (\`${prefix.prefix}\`) for \`${message.guild.name}\` :white_check_mark:`);
    }

    else {
        prefix.prefix = args[0];
        process.gideon.setGuild.run(prefix);
        return message.channel.send(`Set custom prefix for \`${message.guild.name}\` to \`${prefix.prefix}\` :white_check_mark:`);
    }  
}

export const help = {
    name: 'prefix',
    type: 'admin',
    help_text: 'prefix [default] <prefix>',
    help_desc: 'Set custom prefix',
    owner: false,
    voice: false,
    timevault: false,
    nsfw: false,
    args: {force: true, amount: 1},
    roles: [],
    user_perms: ['MANAGE_GUILD'],
    bot_perms: []
};
