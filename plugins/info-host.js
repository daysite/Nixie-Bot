let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `*¿Tu Nokia es muy lento y necesitas que tu bot esté activo 24/7?* 📱⏳

¡Tenemos la solución perfecta para ti! 🎉 Mantén tu bot funcionando sin interrupciones con nuestros servidores, Ofrecemos servidores gratuitos y de pago a precios súper accesibles, al alcance de todos. 💸 

🖥️ *Totalmente compatible con YaemoriBot:* Disfruta al máximo de su potencial en nuestros servidores de alto rendimiento, asegurando una experiencia fluida y de alta calidad. El staff de YaemoriBot y CorinPlus Host se encarga de que disfrutes de todas sus funciones al máximo. 😺✨

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://dash.nexus-host.shop

*🟢 Dashboard:*
https://dash.nexus-host.shop

⚙️ *Panel*
https://panel.nexus-host.shop

💥 *Comunidad de WhatsApp:*
https://chat.whatsapp.com/CUuemMklVIo3Oc2t3DkZ4K

🧡 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029VaBpO8M3rZZdwkGFIP33

🗣📲 *Contacto:*
• wa.me/51923300039

No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '', 
serverMessageId: '', 
newsletterName: 'Nexus Pro - Hosting 🧧' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 NEXUS PRO.HOST 🤖`,
body: `¡El Mejor Host que necesitas!_`,
"previewType": "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/f6ae0f43d5baab2edd028.jpg', 
sourceUrl: channel,
{ quoted: m})
} 
handler.tags = ['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'corin', 'corinplus', 'hosting']
export default handler
