const handler = async (m, {conn}) => {

conn.reply(m.chat, `🛍️ Precios Plan 4

  •$4.00 USD
  •4300 AzuraCoins

*🌀Azura Hosting*

Este Plan ya es mas recomendable para el uso de bots no tan pesados.

*🔰 ¡Nuestro Enlaces! 🔰*

🌀 Dash:
• ${global.md}
🫧 Panel: 
• ${global.yt}

> ${global.packname}`, m, rcanal)

}
handler.customPrefix = /plan4|planes4/i
handler.command = new RegExp
export default handler
