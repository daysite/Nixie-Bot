const handler = async (m, {conn}) => {

conn.reply(m.chat, `Plan 1 Prueba. 🌟

🔰 ¡Nuestro Enlaces! 🔰

👑 Dash:
• ${global.md}
📧 Panel: 
• ${global.yt}

> ${global.packname}`, m, rcanal)

}
handler.customPrefix = /términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i
handler.command = new RegExp
export default handler
