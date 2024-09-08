const handler = async (m, {conn}) => {

conn.reply(m.chat, `🛍️ Precios Plan 5

  •$5.00 USD
  •5400 AzuraCoins

*🌀Azura Hosting*

Este Plan ya es mas recomendable para el uso de bots con mayor capacidad.

*🔰 ¡Nuestro Enlaces! 🔰*

🌀 Dash:
• ${global.md}
🫧 Panel: 
• ${global.yt}

> ${global.packname}`, m, rcanal)

}
handler.customPrefix = /plan5|planes5/i
handler.command = new RegExp
export default handler
