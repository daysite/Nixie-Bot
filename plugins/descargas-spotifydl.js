import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, '*Ingresa un enlace de spotify*', m);
 
try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/spotifydl?url=${args[0]}`);
let json = await api.json();
let { title, artist, album, thumbnail, spotify, music } = json


let txt = `*Titulo* : ${title}
*Artista* : ${artist}
*Album* : ${album || ':v'}
*Link* : ${spotify}`
await conn.sendMessage(m.chat, { text: txt, contextInfo: { mentionedJid: [m.sender], forwardingScore: 90, externalAdReply: { title: title, body: global.botname, thumbnailUrl: thumbnail, thumbnailUrl: thumbnail, sourceUrl: channel, mediaType: 1 }}}, { quoted: m })

conn.sendMessage(m.chat, { audio: { url: music }, fileName: `${title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })


} catch {
conn.reply('error :v')    
}
}
    
handler.command = ['spotifydl'];

export default handler;
