const handler = async (m, {conn}) => {

conn.reply(m.chat, `Precios Plan 1 🛍️

  •$1.37 USD
  •850 AzuraCoins

*🌀Azura Hosting*

Este Plan no es tanto recomendable para el uso de bots con mucha capacidad.

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
