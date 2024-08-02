/*************************************************/
/*
/* Créditos al creador de este módulo.
/* Jefferson: https://github.com/jeffersonalionco
/* 
/*************************************************/
const handler = async (m, { args, usedPrefix, command, isAdmin }) => {
    try {
        const data = global
        const idioma = data.db.data.users[m.sender].language
        const _translate = JSON.parse(fs.readFileSync(`./storage/lang/${idioma}.json`))
        const tradutor = _translate.plugins._language

        


        data.db.data.users[m.sender].language
        let sigla // Args user

        //---- Transformar "cadena" en letras minúsculas
        if (args[0] != undefined) {
            sigla = args[0].toLowerCase()
        }

        if (command === 'lang') {
            // ----- Opciones de lenguaje
            if (sigla === 'en') {
                global.db.data.users[m.sender].language = 'en'
                m.reply(`*[ ✅ ] Hardy - Bot*\n\n*—◉* *_Idioma definido a Inglês 🇬🇧_*`)

            } else if (sigla === 'fr') {
                global.db.data.users[m.sender].language = 'fr'
                m.reply(`*[ ✅ ] Hardy - Bot*\n\n*—◉* *_Langue définie en Français 🇫🇷_*`)

            }else if (sigla === 'ar') {
                global.db.data.users[m.sender].language = 'ar'
                m.reply("*[ ✅ ] Hardy - Bot*\n\n*—◉* اللغة مضبوطة على العربية 🇸🇦")

            }else {

                m.reply(`
${tradutor.texto1[2]}
${tradutor.texto1[3]} *( ${data.db.data.users[m.sender].language} )*
${tradutor.texto1[0]}
*${usedPrefix}lang* ar

${tradutor.texto1[1]}

`)
            }


        }

        // - DEFINIDO TRADUÇÕES PARA GRUPOS NO BOT THE MYSTIC 

        if (command === 'langgroup') {

            // ----- Condiciones para grupos
            if (m.isGroup === false) {
                return m.reply(tradutor.texto3)
            }
            if (m.isGroup === true && isAdmin === false) {
                return m.reply(tradutor.texto4)
            }

            // ----- Opciones de lenguaje
            if (sigla === 'en') {
                global.db.data.chats[m.chat].language = 'en';

                m.reply(`*[ ✅ ] Configuración del grupo*\n\n*—◉* *_Idioma definido a Inglês 🇬🇧_*`)
            } else if (sigla === 'fr') {
                global.db.data.chats[m.chat].language = 'fr';

                m.reply(`*[ ✅ ] Configuration du groupe*\n\n*—◉* *_Langue définie en Français 🇫🇷_*`)
            } else if (sigla === 'ar') {
                global.db.data.chats[m.chat].language = 'ar';

                m.reply("[ ✅ ] تكوين المجموعة\n\n*—◉* اللغة مضبوطة على العربية 🇸🇦")
            } else  {
                m.reply(`
${tradutor.texto2[0]}
*${usedPrefix}langgroup* ar

${tradutor.texto2[1]}

`)
            }

        }
        // Fim 
    } catch (error) {
        global.db.data.users[m.sender].language = 'ar'
        global.db.data.chats[m.chat].language = 'ar'
        m.reply(`*[ERROR]* -  _للغة أفضل اختر اللغة العربية._
                \`\`\`تواصل مع مالك البوت\`\`\` `)
    }


}



handler.command = /^(lang||langgroup)$/i;

export default handler
