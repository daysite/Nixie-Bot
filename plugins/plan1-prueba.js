const handler = async (m, {conn}) => {

conn.reply(m.chat, `Precios Plan 1 🛍️


*🔰 ¡Nuestro Enlaces! 🔰*

🌀 Dash:
• ${global.md}
🫧 Panel: 
• ${global.yt}

> ${global.packname}`, m, rcanal)

}
handler.customPrefix = /plan1|planes1/i
handler.command = new RegExp
export default handler
