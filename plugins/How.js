let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Siapa yang *${command.replace('how', '').toUpperCase()}*`
  conn.reply(m.chat, `
${command} *${text}*
*${text}* is *${Math.floor(Math.random() * 101)}*% ${command.replace('how', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => 'how' + v + ' siapa?')
handler.tags = ['kerang']
handler.command = /^how(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy)/i
handler.group = true
handler.register = true

module.exports = handler
