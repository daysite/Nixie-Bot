const handler = async (m, {conn}) => {

conn.reply(m.chat, `🛍️ Precios Plan 3

  •$3.00 USD
  •3200 AzuraCoins

*🌀Azura Hosting*

Este Plan ya es mas recomendable para el uso de bots no tan pesados.

*🔰 ¡Nuestro Enlaces! 🔰*

🌀 Dash:
• ${global.md}
🫧 Panel: 
• ${global.yt}

> ${global.packname}`, m, rcanal)

}
handler.customPrefix = /plan3|planes3/i
handler.command = new RegExp
export default handler
