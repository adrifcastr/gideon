const Discord = module.require("discord.js");
const Util = require("../Util");
const fetch = require('node-fetch');

module.exports.run = async (gideon, message, args) => {
    if(!args[0]) return message.reply('you must provide input to translate something!');

    const sourceLang = 'auto';
    const targetLang = 'en';
    const sourceText = args.join(' ');

    const api = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
    + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

    const body = await fetch(api).then(res => res.json());
    let targetflag = `:flag_${body[2]}:`;
    if (body[2] == targetLang) targetflag = ':flag_gb:';

    const trembed = new Discord.MessageEmbed()
    .setColor('#2791D3')
    .setTitle(`Translation for ${message.author.tag}:`)
    .addField(`Original Text: ${targetflag} `,`\`\`\`${sourceText}\`\`\``)
    .addField(`Translated Text: :flag_gb:`,`\`\`\`${body[0][0][0]}\`\`\``)
    .setTimestamp()
    .setFooter(Util.config.footer, gideon.user.avatarURL());

    message.channel.send(trembed);
}

module.exports.help = {
    name: ["tr", "translate"],
    type: "misc",
    help_text: "!tr",
    help_desc: "Translates text"
}