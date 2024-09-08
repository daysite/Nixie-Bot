const handler = async (m, {conn}) => {

conn.reply(m.chat, `🛍️ Precios Plan 6

  •$6.00 USD
  •6500 AzuraCoins

*🌀Azura Hosting*

Este Plan ya es mas recomendable para el uso de bots con mayor capacidad.

*🔰 ¡Nuestro Enlaces! 🔰*

🌀 Dash:
• ${global.md}
🫧 Panel: 
• ${global.yt}

> ${global.packname}`, m, rcanal)

}
handler.customPrefix = /plan6|planes6/i
handler.command = new RegExp
export default handler
