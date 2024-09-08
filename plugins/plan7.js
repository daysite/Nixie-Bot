const handler = async (m, {conn}) => {

conn.reply(m.chat, `🛍️ Precios Plan 7

  •$7.00 USD
  •7600 AzuraCoins

*🌀Azura Hosting*

Este Plan ya es mas recomendable para el uso de ventas de bots.

*🔰 ¡Nuestro Enlaces! 🔰*

🌀 Dash:
• ${global.md}
🫧 Panel: 
• ${global.yt}

> ${global.packname}`, m, rcanal)

}
handler.customPrefix = /plan7|planes7/i
handler.command = new RegExp
export default handler
