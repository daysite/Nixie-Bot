const handler = async (m, {conn}) => {

conn.reply(m.chat, `🛍️ Precios Plan 2

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
handler.customPrefix = /plan2|planes2/i
handler.command = new RegExp
export default handler
