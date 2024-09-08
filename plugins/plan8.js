const handler = async (m, {conn}) => {

conn.reply(m.chat, `🛍️ Precios Plan 8

  •$8.00 USD
  •8700 AzuraCoins

*🌀Azura Hosting*

Este Plan ya es mas recomendable para el uso de ventas de bots.

*🔰 ¡Nuestro Enlaces! 🔰*

🌀 Dash:
• ${global.md}
🫧 Panel: 
• ${global.yt}

> ${global.packname}`, m, rcanal)

}
handler.customPrefix = /plan8|planes8/i
handler.command = new RegExp
export default 
