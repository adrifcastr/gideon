import Util from '../../Util.js';

/**
 * @param {Discord.Message} message
 */
export async function run(message) {
    message.channel.send(Util.Embed('Donations', {
        description: 'Donations are gladly accepted. \nPlease send them to one of the options below. \nDonating supports the development, maintenance and hosting of this project. \nThank you!',
        thumbnail: 'https://i.imgur.com/f3fvsRe.png',
        fields: [
            {
                name: 'PayPal',
                value: '[Paypal.me](https://www.paypal.me/adrifcastr \'https://www.paypal.me/adrifcastr\')'
            },
            {
                name: 'Patreon',
                value: '[Patreon.com](https://www.patreon.com/gideonbot \'https://www.patreon.com/gideonbot\')'
            }
        ]
    }, message.member));
}

export const help = {
    name: ['donate', 'paypal', 'patreon'],
    type: 'misc',
    help_text: 'donate',
    help_desc: 'Displays info to support maintainance and hosting of Gideon',
    owner: false,
    voice: false,
    timevault: false,
    nsfw: false,
    args: {},
    roles: [],
    user_perms: [],
    bot_perms: []
};