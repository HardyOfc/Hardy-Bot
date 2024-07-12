import {search, download} from 'aptoide-scraper';

const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.downloader_modapk


 if (!text) throw `${tradutor.texto1}`;
  try {    
    const searchA = await search(text);

    let listSections = [];
for (let index = 0; index< searchA.length; index++) {	    
        listSections.push({
            rows: [
                {
                    header: `Aplicacion ${index+1}`,
                    title: "",
                    description: `${searchA[index].name}\n`, 
                    id: `${usedPrefix}apkmod ${searchA[index].id}`
                }
            ]
        });
    }
  return await conn.sendList(m.chat, `${htki} *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎* ${htka}\n`, `\n𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖 𝙙𝙚: ${text}`, `𝗕 𝗨 𝗦 𝗖 𝗔 𝗥`, listSections, fkontak);
}	
    
    const data5 = await download(searchA[0].id);
    let response = `${tradutor.texto2[0]} ${data5.name}\n${tradutor.texto2[1]}* ${data5.package}\n${tradutor.texto2[2]} ${data5.lastup}\n${tradutor.texto2[3]} ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: `${tradutor.texto3}`}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `${tradutor.texto4}`;
  }    
};
handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
