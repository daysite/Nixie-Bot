import yts from 'yt-search';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, '_Ingresa el nombre de lo que quieres buscar_', m);

await m.react('🕓');
let res = await yts(text);
let play = res.videos[0];

if (!play) return conn.reply(m.chat, `No se encontraron resultados`, m)

let { title, thumbnail, ago, timestamp, views, videoId, url } = play;

let txt = '*`[ YOUTUBE - PLAY ]`*\n';
txt += `> Título : *${title || '❌'}*\n`;
txt += `> Creado : *${ago || '❌'}*\n`;
txt += `> Duración : *${timestamp || '❌'}*\n`;
txt += `> Visitas : *${views.toLocaleString() || '❌'}*\n`;
txt += `> Link : *https://www.youtube.com/watch?v=${videoId}*\n`;

await conn.sendButton(m.chat, txt, author, thumbnail, [
['Audio', `${usedPrefix}ytmp3 ${url}`],
['Video', `${usedPrefix}ytmp4 ${url}`]
['Mas Resultados', `${usedPrefix}yts ${url}`]
], null, [['Hosting', md]], m);
await m.react('✅')
}

handler.help = ['play', 'play2']
handler.tags = ['dl'];
handler.command = ['play', 'play2']

export default handler;
