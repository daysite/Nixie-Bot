const handler = async (m, {conn}) => {

conn.reply(m.chat, `*Toda la informacion que se mencione aqui no excluye al Propietario del Bot, y Propietarios Acredores al uso de Nixie Bot*
*No Somos responsables del desconocimiento que tenga por parte de esta informacion.* 


*TERMINOS DE PRIVACIDAD*
- Somos consciente del constante uso que le pueda dar al Bot, y tambien Garantizamos que la informaciin como (imagenes, videos, enlaces, ubicacion, Audios, Stickers, Gif, Contactos que Usted Proporcione en torno a Numero(s) Oficial(es) No son ni seran Compartido Con Nadie, ni se usaran dicho Datos fuera del entorno del BOT.

- Lo que realice con el BOT queda solo en Usted ya que en Numero(s) Oficial(es) El Chat se Borra cada 24 Horas, segun el tiempo de Mensajes Temporales de WhatsApp.

- Es posible que en Numero(s) Oficial(es) el Bot no este Activado las 24 Horas de los 7 dias de la Semana, eso no implica que no lo este o que Propietarios NO OFICIALES puedan Hacerlo.

- El chat anonimo del comando #start, valga la redundancia no mostrará ningun dato de los Usuarios por parte de Nixie Bot. Eso no implica que las personas que hagan uso de esta funcion puedan dar a conocer sus datos. en Numero(s) Oficial(es).

- Los Datos que Obtenga Nixie Bot en Cuentas Oficiales de Usuarios(as), Grupos y Ajustes del Mismo puede verse Reiniciado, Modificado, y/o Retificado con el fin de que el Bot este en optimas Condiciones para su Uso. (Usuarios(as) Pueden Pedir Compensacion Por Instagram o por el comando #Reporte. Debe de Presentar Pruebas).

- NO somos responsable si Hay alteraciones de este Bot no siendo Numero(s) Oficial(es) y tengan de uso un Repositorio de GitHub que no corresponda al Oficial, o que implementen Usuarios de Terceros integraciones que comprometan a los(as) Usuarios(as) al utilizar Versiones no Oficiales.

- La funcion Sub Bot Garantiza la seguridad de sus Datos aplicada a Cuentas Oficiales.


*TERMINOS DE USO* 
- La informacion que haya en este Bot y el/la usuario/a Haga uso de las Mismas asumirán saber los Terminos y Condiciones de tal forma que no habrá incovenientes al hacer un uso Particular de las Funciones del Bot.

- Las imagenes, Videos y Audios que tenga este Bot son de uso Publico, Pero se considerarse Falta de Respeto al realizar Ediciones en el Material ya exitente que porte Nombre del Bot o informacion relevante.

- Al hacer uso de una solicitud para ingreso de grupo con Una Cuenta Oficial, es recomendable que el grupo no cuente con temas de Odio, virus, contenido indebido, temas de discriminacion u campaña sin fundamentos.

- Si ha recibido un Comunicado Oficial siendo Numero(s) Oficial(es) Mantener el Respeto de la misma manera si recibe un Mensaje sin haber usado un Comando Mantener el Respeto ya que puede en este ultimo caso ser una Persona Real.

- Las Cuentas Oficiales de Nixie no se hacen responsable del Uso que usted haga con la funci贸n "Sub Bot".


*CONDICIONES DE USO*
- NO haga ni intente Llamar o hacer Videollamada al Bot siendo Numero(s) Oficial(es) ya que obstaculiza el funcionamiento del BOT.

- NO usar el Bot siendo Numero(s) Oficial(es) para llevar a cabo alguna accion hostil que pueda verse comprometida el Funcionamiento del BOT.

- NO use el comando de SPAM repetidamente, ya que Provocar un Mal funcionamiento en el BOT, tampoco envie al BOT mensajes que puedan comprometer el Funcionamiento de la misma.

- Al hacer uso de ciertos comandos que tengan como objetivo socavar la incomodidad, intranquilidad, molestia u otro termino tajante, se tomarian las respectivas sanciones o llamados de alerta para prevalecer la integridad de los/las Usuarios(as) y funcionamiento de Nixie Bot.


*PANEL DONDE ESTA ALOJADO NIXIE*
*${md}

*CUENTA OFICIAL DE ASISTENCIA - GMAIL*
~ Solo en esta Cuenta Respondo si tiene Dudas, Preguntas o Necesita Ayuda sobre Nixie, Tambien puede Comunicarse en Caso de Temas de Colaboracion
*• ${global.correo}*

*DONAR AL CREADOR EN ESTA CUENTA OFICIAL*
~ Si te Agrada y valoras el Trabajo que he realizado, puedes ayudarme en Donar para que pueda continuar en este Proyecto
*https://paypal.me/*

*~ Muchas Gracias Por tomarte el tiempo en informate sobre NixieBot* 

${global.packname}`, m, rcanal)

}
handler.customPrefix = /términos y condiciones y privacidad|terminos|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i
handler.command = new RegExp
export default handler
