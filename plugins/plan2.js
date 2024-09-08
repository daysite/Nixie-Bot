const handler = async (m, {conn}) => {

conn.reply(m.chat, `Precios Plan 1 🛍️

  •$2.00 USD
  •2100 AzuraCoins

*🌀Azura Hosting*

Este Plan ya es mas recomendable para el uso de bots no tan pesados.

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
