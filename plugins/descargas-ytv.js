import { ytmp4, ytmp4v4 } from 'ruhend-scraper'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!args || !args[0]) return conn.reply(m.chat, '`Ingresa Un Link De Youtube`', m)
if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, '*`Verifica que el enlace sea de YouTube.`*', m).then(_ => m.react('❌'))
    
try {
await m.react('🕑')
const data = await ytmp4(args[0])
let { title, size, video, quality, thumbnail } = data
conn.sendFile(m.chat, video, title + '.mp4', `${title}\n${quality}`, m, false, { mimetype: 'video/mp4', asDocument: false })
await m.react('✅')
} catch {
try { 
await m.react('🕑')
const data = await ytmp4v4(args[0])
let { title, video } = data
conn.sendFile(m.chat, video, title + '.mp4', `${title}`.trim(), m, false, { mimetype: 'video/mp4', asDocument: false })
await m.react('✅')
} catch {
await m.react('❌')
}}}


handler.help = ['ytmp4 *<link>*']
handler.tags = ['dl']
handler.command = ['ytmp4', 'ytv', 'yt']

export default handler
