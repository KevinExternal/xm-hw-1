const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const fs = require('fs')
const { exec } = require('child_process')
const moment = require('moment-timezone')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const gcrevoke = ["62857141609443-1621430788@g.us"]
blocked = []

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (Haikal = new WAConnection()) => {
    Haikal.logger.level = 'warn'
    console.log(banner.string)
    Haikal.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && Haikal.loadAuthInfo('./session.json')
    Haikal.on('connecting', () => {
        start('2', 'Connecting...')
    })
    Haikal.on('open', () => {
        success('2', 'Connected')
    })
    await Haikal.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Haikal.base64EncodedAuthInfo(), null, '\t'))

function _0x8147(_0xc716b,_0x23b739){const _0x12290d=_0x1229();return _0x8147=function(_0x8147f8,_0x46fe35){_0x8147f8=_0x8147f8-0x18d;let _0x8f408=_0x12290d[_0x8147f8];return _0x8f408;},_0x8147(_0xc716b,_0x23b739);}const _0x48f89f=_0x8147;function _0x1229(){const _0x22ec27=['./media/image/pp.jpeg','image','long','@s.whatsapp.net','\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Welcome\x20To\x20','chat','contacts','\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Leaving\x20from\x20','magick\x20\x27./media/image/promote.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27','groupDemoteAdmin','floor','groupMetadata','magick\x20\x27./media/image/wel.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27','Kliwon','getTime','1\x20Januari\x202021','notify','797313zNBfgX','participants','vname','toLocaleDateString','1385530pwtEAV','action','error','length','Pon','*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aSELAMAT\x20DATANG\x0a┏━━⊱\x0a┣❏NAMA\x20:\x20\x20\x20\x0a┣❏UMUR\x20:\x20\x20\x0a┣❏KOTA\x20:\x20\x0a┣❏NEGARA\x20:\x0a┣❏ALASAN_GABUNG\x20:\x0a┗━━⊱\x0a-\x20COMMAND\x20MENU\x20-\x0a┏━━⊱\x0a┣❏\x20HACKTAE\x20<kudeta>\x0a┣❏\x20Musikkal\x0a┣❏\x20Menu\x0a┣❏\x20>owner\x0a┣❏\x20>funnyromance\x0a┣❏\x20>makermenu\x0a┣❏\x20>menunsfw\x0a┣❏\x20>menusound\x0a┣❏\x20>lagukal\x0a┣❏\x20>bugmenu\x0a┣❏\x20>groupbot\x0a┣❏\x20>intro\x0a┣❏\x20>kemiripan\x0a┣❏\x20>hwmenu\x0a┣❏\x20>modsmenu\x0a┣❏\x20>kodekeras\x0a┣❏\x20>mausange\x0a┗━━⊱\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aJANGAN_LUPA_SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aBaca_Deskripsi_Dan_Patuhi_Peraturan_Grup\x20@','readFileSync','\x27\x20-pointsize\x2048\x20-annotate\x20+100+230\x20\x27MEMBER\x20-\x20','HH:mm:ss','hasil2.jpg','split','Legi','\x27\x20-pointsize\x2048\x20-annotate\x20+100+230\x20\x27MEMBER\x20+\x20','magick\x20\x27./media/image/lev.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27','sendMessage','230676nGMZWf','numeric','@c.us','replace','\x27\x20\x27','1\x20Janua@ri\x202021','international','Asia/Jakarta','jid','add','*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aKASIAN\x20DI\x20DEMOTE\x20MAKANYA\x20HARUS\x20JADI\x20ADMIN\x20GANTENG\x20DAN\x20CANTIK\x20:v\x20😂\x0a┏━━⊱\x0a┣❏SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a┗━━⊱\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aYAHAHAHAH\x20KASIAN\x20DI\x20DEMOTE👋🏻*@','getNumber','\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+66\x20-composite\x20\x27hasil.jpg\x27','Pahing','471680iMRRhy','demote','\x27\x20-pointsize\x2051\x20-annotate\x20+460+83\x20\x27','3771404qyZoAg','729272GWGkTO','exit','subject','magick\x20\x27./media/image/demote.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27','log','1483062vWHaaD','Wage','getProfilePicture','revokeInvite','group-participants-update','hasil.jpg','\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+66\x20-composite\x20\x27hasil2.jpg\x27','text','format'];_0x1229=function(){return _0x22ec27;};return _0x1229();}(function(_0x2a6e3f,_0x5b1ce3){const _0x215d16=_0x8147,_0x271fae=_0x2a6e3f();while(!![]){try{const _0x2792f4=-parseInt(_0x215d16(0x1a5))/0x1+-parseInt(_0x215d16(0x1b3))/0x2+-parseInt(_0x215d16(0x192))/0x3+-parseInt(_0x215d16(0x1b7))/0x4+parseInt(_0x215d16(0x196))/0x5+parseInt(_0x215d16(0x1bc))/0x6+parseInt(_0x215d16(0x1b6))/0x7;if(_0x2792f4===_0x5b1ce3)break;else _0x271fae['push'](_0x271fae['shift']());}catch(_0x307d24){_0x271fae['push'](_0x271fae['shift']());}}}(_0x1229,0x243e2),Haikal['on'](_0x48f89f(0x1c0),async _0x31d827=>{const _0x4b65f=_0x48f89f;try{const _0x576ce4=await Haikal[_0x4b65f(0x1d0)](_0x31d827['jid']),_0x3d1786=_0x576ce4['participants'][_0x4b65f(0x199)];console[_0x4b65f(0x1bb)](_0x31d827);if(_0x31d827[_0x4b65f(0x197)]=='promote'){Haikal['groupMakeAdmin'](_0x31d827[_0x4b65f(0x1ad)])&&Haikal[_0x4b65f(0x1ce)](_0x31d827[_0x4b65f(0x1ad)]);num=_0x31d827[_0x4b65f(0x193)][0x0],hesa=''+num,mestes=_0x1a1f1f=>{const _0x13a271=_0x4b65f;return _0x1a1f1f[_0x13a271(0x1a8)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x5f298d=moment['tz'](_0x4b65f(0x1ac))['format'](_0x4b65f(0x19e));let _0x5b7c72=new Date(),_0x1800ab='id',_0x2705a8=new Date(0x0)[_0x4b65f(0x18f)]()-new Date(_0x4b65f(0x190))[_0x4b65f(0x18f)](),_0x50713d=[_0x4b65f(0x1b2),_0x4b65f(0x19a),_0x4b65f(0x1bd),'Kliwon','Legi'][Math[_0x4b65f(0x1cf)]((_0x5b7c72*0x1+_0x2705a8)/0x50ae4c0)%0x5],_0x104c6f=_0x5b7c72[_0x4b65f(0x195)](_0x1800ab,{'weekday':_0x4b65f(0x1c7)}),_0x208409=_0x5b7c72[_0x4b65f(0x195)](_0x1800ab,{'day':_0x4b65f(0x1a6),'month':'long','year':_0x4b65f(0x1a6)});pushnem=Haikal[_0x4b65f(0x1cb)][num]!=undefined?Haikal[_0x4b65f(0x1cb)][num]['notify']=undefined?PhoneNumber('+'+num[_0x4b65f(0x1a8)](_0x4b65f(0x1c8),''))[_0x4b65f(0x1b0)](_0x4b65f(0x1ab)):Haikal[_0x4b65f(0x1cb)][num][_0x4b65f(0x191)]||Haikal[_0x4b65f(0x1cb)][num][_0x4b65f(0x194)]:PhoneNumber('+'+num[_0x4b65f(0x1a8)](_0x4b65f(0x1c8),''))[_0x4b65f(0x1b0)](_0x4b65f(0x1ab));try{ppimg=await Haikal[_0x4b65f(0x1be)](_0x31d827[_0x4b65f(0x193)][0x0][_0x4b65f(0x1a0)]('@')[0x0]+_0x4b65f(0x1a7));}catch{ppimg=_0x4b65f(0x1c5);}exec(_0x4b65f(0x1cd)+resa+_0x4b65f(0x1b5)+_0x5f298d+'\x20'+_0x208409+_0x4b65f(0x1a2)+_0x3d1786+'\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Welcome\x20To\x20'+_0x576ce4[_0x4b65f(0x1b9)]+_0x4b65f(0x1a9)+ppimg+_0x4b65f(0x1c2))['on'](_0x4b65f(0x198),()=>Haikal['sendMessage'](m[_0x4b65f(0x1ca)],_0x4b65f(0x198),MessageType[_0x4b65f(0x1c3)]))['on']('exit',()=>{const _0x46009a=_0x4b65f;Haikal[_0x46009a(0x1a4)](_0x576ce4['id'],fs['readFileSync'](_0x46009a(0x19f)),MessageType[_0x46009a(0x1c6)],{'caption':'*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aHello\x20selamat\x20Yah\x20🤟\x0aJadilah\x20Admin\x20Yang\x20Bijak\x20Dan\x20Dewasa\x20Okey\x20🗿\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aJANGAN_LUPA_SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aSELAMAT\x20ANDA\x20MENJADI\x20ADMIN\x20DI\x20GROUP\x20INI\x20@'+num[_0x46009a(0x1a0)]('@')[0x0],'contextInfo':{'mentionedJid':[num]}});});}else{if(_0x31d827['action']==_0x4b65f(0x1b4)){num=_0x31d827[_0x4b65f(0x193)][0x0],hesa=''+num,mestes=_0x2bc22f=>{const _0x14027f=_0x4b65f;return _0x2bc22f[_0x14027f(0x1a8)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x38c5f2=moment['tz'](_0x4b65f(0x1ac))['format'](_0x4b65f(0x19e));let _0x564ebd=new Date(),_0x1b701f='id',_0x346632=new Date(0x0)['getTime']()-new Date(_0x4b65f(0x1aa))['getTime'](),_0x55663d=[_0x4b65f(0x1b2),_0x4b65f(0x19a),_0x4b65f(0x1bd),_0x4b65f(0x18e),_0x4b65f(0x1a1)][Math[_0x4b65f(0x1cf)]((_0x564ebd*0x1+_0x346632)/0x50ae4c0)%0x5],_0x264937=_0x564ebd[_0x4b65f(0x195)](_0x1b701f,{'weekday':_0x4b65f(0x1c7)}),_0x4d62f3=_0x564ebd[_0x4b65f(0x195)](_0x1b701f,{'day':_0x4b65f(0x1a6),'month':_0x4b65f(0x1c7),'year':_0x4b65f(0x1a6)});pushnem=Haikal[_0x4b65f(0x1cb)][num]!=undefined?Haikal[_0x4b65f(0x1cb)][num][_0x4b65f(0x191)]=undefined?PhoneNumber('+'+num[_0x4b65f(0x1a8)](_0x4b65f(0x1c8),''))['getNumber'](_0x4b65f(0x1ab)):Haikal[_0x4b65f(0x1cb)][num][_0x4b65f(0x191)]||Haikal[_0x4b65f(0x1cb)][num][_0x4b65f(0x194)]:PhoneNumber('+'+num[_0x4b65f(0x1a8)](_0x4b65f(0x1c8),''))[_0x4b65f(0x1b0)]('international');try{ppimg=await Haikal[_0x4b65f(0x1be)](_0x31d827[_0x4b65f(0x193)][0x0][_0x4b65f(0x1a0)]('@')[0x0]+_0x4b65f(0x1a7));}catch{ppimg=_0x4b65f(0x1c5);}exec(_0x4b65f(0x1ba)+resa+_0x4b65f(0x1b5)+_0x38c5f2+'\x20'+_0x4d62f3+_0x4b65f(0x19d)+_0x3d1786+'\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Leaving\x20from\x20'+_0x576ce4[_0x4b65f(0x1b9)]+_0x4b65f(0x1a9)+ppimg+_0x4b65f(0x1c2))['on'](_0x4b65f(0x198),()=>Haikal[_0x4b65f(0x1a4)](m[_0x4b65f(0x1ca)],'error',MessageType[_0x4b65f(0x1c3)]))['on'](_0x4b65f(0x1b8),()=>{const _0x17fd8f=_0x4b65f;Haikal[_0x17fd8f(0x1a4)](_0x576ce4['id'],fs[_0x17fd8f(0x19c)](_0x17fd8f(0x19f)),MessageType[_0x17fd8f(0x1c6)],{'caption':_0x17fd8f(0x1af)+num[_0x17fd8f(0x1a0)]('@')[0x0]+'\x0a','contextInfo':{'mentionedJid':[num]}});});}}}catch(_0x2b0b45){console[_0x4b65f(0x1bb)](_0x2b0b45);}}),Haikal['on'](_0x48f89f(0x1c0),async _0x4466d1=>{const _0x278620=_0x48f89f;try{const _0x231d3f=await Haikal[_0x278620(0x1d0)](_0x4466d1[_0x278620(0x1ad)]),_0x181f19=_0x231d3f[_0x278620(0x193)]['length'];console[_0x278620(0x1bb)](_0x4466d1);if(_0x4466d1[_0x278620(0x197)]==_0x278620(0x1ae)){gcrevoke['includes'](_0x4466d1[_0x278620(0x1ad)])&&Haikal[_0x278620(0x1bf)](_0x4466d1[_0x278620(0x1ad)]);num=_0x4466d1[_0x278620(0x193)][0x0],hesa=''+num,mestes=_0x2c54db=>{return _0x2c54db['replace'](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x5e1065=moment['tz'](_0x278620(0x1ac))['format'](_0x278620(0x19e));let _0x28e01e=new Date(),_0x9563a4='id',_0x2c3b21=new Date(0x0)[_0x278620(0x18f)]()-new Date(_0x278620(0x190))[_0x278620(0x18f)](),_0x212690=[_0x278620(0x1b2),_0x278620(0x19a),'Wage',_0x278620(0x18e),_0x278620(0x1a1)][Math['floor']((_0x28e01e*0x1+_0x2c3b21)/0x50ae4c0)%0x5],_0x1fe799=_0x28e01e[_0x278620(0x195)](_0x9563a4,{'weekday':_0x278620(0x1c7)}),_0x5929f4=_0x28e01e['toLocaleDateString'](_0x9563a4,{'day':_0x278620(0x1a6),'month':_0x278620(0x1c7),'year':_0x278620(0x1a6)});pushnem=Haikal[_0x278620(0x1cb)][num]!=undefined?Haikal['contacts'][num][_0x278620(0x191)]=undefined?PhoneNumber('+'+num[_0x278620(0x1a8)](_0x278620(0x1c8),''))['getNumber'](_0x278620(0x1ab)):Haikal['contacts'][num]['notify']||Haikal[_0x278620(0x1cb)][num][_0x278620(0x194)]:PhoneNumber('+'+num[_0x278620(0x1a8)](_0x278620(0x1c8),''))[_0x278620(0x1b0)]('international');try{ppimg=await Haikal[_0x278620(0x1be)](_0x4466d1[_0x278620(0x193)][0x0][_0x278620(0x1a0)]('@')[0x0]+_0x278620(0x1a7));}catch{ppimg=_0x278620(0x1c5);}exec(_0x278620(0x18d)+resa+'\x27\x20-pointsize\x2051\x20-annotate\x20+460+83\x20\x27'+_0x5e1065+'\x20'+_0x5929f4+_0x278620(0x1a2)+_0x181f19+_0x278620(0x1c9)+_0x231d3f['subject']+_0x278620(0x1a9)+ppimg+_0x278620(0x1b1))['on']('error',()=>Haikal[_0x278620(0x1a4)](m[_0x278620(0x1ca)],_0x278620(0x198),MessageType['text']))['on'](_0x278620(0x1b8),()=>{const _0x3f8a60=_0x278620;Haikal[_0x3f8a60(0x1a4)](_0x231d3f['id'],fs[_0x3f8a60(0x19c)](_0x3f8a60(0x1c1)),MessageType['image'],{'caption':_0x3f8a60(0x19b)+num['split']('@')[0x0],'contextInfo':{'mentionedJid':[num]}});});}else{if(_0x4466d1[_0x278620(0x197)]=='remove'){num=_0x4466d1['participants'][0x0],hesa=''+num,mestes=_0x4535dd=>{return _0x4535dd['replace'](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x265170=moment['tz'](_0x278620(0x1ac))[_0x278620(0x1c4)](_0x278620(0x19e));let _0x23b9cd=new Date(),_0x47b8c2='id',_0x24a87f=new Date(0x0)[_0x278620(0x18f)]()-new Date(_0x278620(0x1aa))[_0x278620(0x18f)](),_0x18296e=[_0x278620(0x1b2),_0x278620(0x19a),_0x278620(0x1bd),_0x278620(0x18e),_0x278620(0x1a1)][Math[_0x278620(0x1cf)]((_0x23b9cd*0x1+_0x24a87f)/0x50ae4c0)%0x5],_0x101a98=_0x23b9cd[_0x278620(0x195)](_0x47b8c2,{'weekday':_0x278620(0x1c7)}),_0x4bb255=_0x23b9cd['toLocaleDateString'](_0x47b8c2,{'day':_0x278620(0x1a6),'month':_0x278620(0x1c7),'year':_0x278620(0x1a6)});pushnem=Haikal[_0x278620(0x1cb)][num]!=undefined?Haikal[_0x278620(0x1cb)][num]['notify']=undefined?PhoneNumber('+'+num[_0x278620(0x1a8)](_0x278620(0x1c8),''))['getNumber'](_0x278620(0x1ab)):Haikal[_0x278620(0x1cb)][num][_0x278620(0x191)]||Haikal[_0x278620(0x1cb)][num][_0x278620(0x194)]:PhoneNumber('+'+num['replace'](_0x278620(0x1c8),''))['getNumber'](_0x278620(0x1ab));try{ppimg=await Haikal[_0x278620(0x1be)](_0x4466d1['participants'][0x0][_0x278620(0x1a0)]('@')[0x0]+'@c.us');}catch{ppimg=_0x278620(0x1c5);}exec(_0x278620(0x1a3)+resa+_0x278620(0x1b5)+_0x265170+'\x20'+_0x4bb255+_0x278620(0x19d)+_0x181f19+_0x278620(0x1cc)+_0x231d3f['subject']+_0x278620(0x1a9)+ppimg+_0x278620(0x1b1))['on'](_0x278620(0x198),()=>Haikal[_0x278620(0x1a4)](m['chat'],_0x278620(0x198),MessageType['text']))['on'](_0x278620(0x1b8),()=>{const _0x5a0975=_0x278620;Haikal[_0x5a0975(0x1a4)](_0x231d3f['id'],fs['readFileSync'](_0x5a0975(0x1c1)),MessageType[_0x5a0975(0x1c6)],{'caption':'*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0a┏━━⊱\x0a┣❏\x20BABAY\x20BEBAN\x20GROUP\x20SEKALIGUS\x20BEBAN\x20KELUARGA\x20:v\x0a┗━━⊱\x0aSEMOGA\x20TENANG\x20DI\x20ALAM\x20SANA\x20👋🏻\x0aMARI\x20BERDOA\x20MULAI\x20🤲\x0a┏━━⊱\x0a┣❏SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a┗━━⊱\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aDADAH\x20BEBAN\x20KELUARGA👋🏻*@'+num['split']('@')[0x0]+'\x0a','contextInfo':{'mentionedJid':[num]}});});}}}catch(_0x319cf7){console[_0x278620(0x1bb)](_0x319cf7);}}));
Haikal.on('chat-update', async (message) => {
        require('./index.js')(Haikal, message)
})
function _0x1ba3(_0x4fb62f,_0x4d2108){const _0x2af4fd=_0x2af4();return _0x1ba3=function(_0x1ba3b2,_0x444abe){_0x1ba3b2=_0x1ba3b2-0xf1;let _0x4cbf27=_0x2af4fd[_0x1ba3b2];return _0x4cbf27;},_0x1ba3(_0x4fb62f,_0x4d2108);}const _0x453701=_0x1ba3;(function(_0x825879,_0x5aa888){const _0x222471=_0x1ba3,_0x182c15=_0x825879();while(!![]){try{const _0x1d0fbb=-parseInt(_0x222471(0xfa))/0x1*(-parseInt(_0x222471(0xf9))/0x2)+parseInt(_0x222471(0xfc))/0x3*(parseInt(_0x222471(0xf8))/0x4)+-parseInt(_0x222471(0x112))/0x5+parseInt(_0x222471(0xfe))/0x6*(parseInt(_0x222471(0x109))/0x7)+-parseInt(_0x222471(0x101))/0x8+parseInt(_0x222471(0x10c))/0x9*(parseInt(_0x222471(0xf2))/0xa)+-parseInt(_0x222471(0x100))/0xb;if(_0x1d0fbb===_0x5aa888)break;else _0x182c15['push'](_0x182c15['shift']());}catch(_0x52c21a){_0x182c15['push'](_0x182c15['shift']());}}}(_0x2af4,0x5f55d),antidel=!![],Haikal['on'](_0x453701(0x10e),async _0x226077=>{const _0x4a5c45=_0x453701;if(_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0x106)]=='status@broadcast')return;if(!_0x226077['key'][_0x4a5c45(0xf4)]&&_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0xf4)])return;if(antidel===![])return;_0x226077[_0x4a5c45(0x105)]=Object[_0x4a5c45(0x104)](_0x226077[_0x4a5c45(0x105)])[0x0]===_0x4a5c45(0x113)?_0x226077[_0x4a5c45(0x105)][_0x4a5c45(0x113)][_0x4a5c45(0x105)]:_0x226077['message'];const _0x4887c5=moment['tz']('Asia/Jakarta')[_0x4a5c45(0xf5)](_0x4a5c45(0xfd));let _0x1edd6e=new Date(),_0x477062='id',_0x2c7d41=new Date(0x0)['getTime']()-new Date(_0x4a5c45(0x103))['getTime'](),_0x1d5e49=[_0x4a5c45(0x10f),'Pon',_0x4a5c45(0xf1),_0x4a5c45(0x102),'Legi'][Math[_0x4a5c45(0x10a)]((_0x1edd6e*0x1+_0x2c7d41)/0x50ae4c0)%0x5],_0x4145b9=_0x1edd6e[_0x4a5c45(0x108)](_0x477062,{'weekday':_0x4a5c45(0x111)}),_0x573d18=_0x1edd6e[_0x4a5c45(0x108)](_0x477062,{'day':'numeric','month':'long','year':_0x4a5c45(0x10b)});const _0x591b7f=Object[_0x4a5c45(0x104)](_0x226077[_0x4a5c45(0x105)])[0x0];Haikal[_0x4a5c45(0xfb)](_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0x106)],'```「\x20Anti\x20Delete\x20」```\x0a\x0a•>\x20Nama\x20:\x20@'+_0x226077[_0x4a5c45(0xf3)][_0x4a5c45(0x107)]('@')[0x0]+_0x4a5c45(0x10d)+_0x4887c5+'\x20'+_0x4145b9+'\x20'+_0x573d18+_0x4a5c45(0x110)+_0x591b7f,MessageType[_0x4a5c45(0xf6)],{'quoted':_0x226077['message'],'contextInfo':{'mentionedJid':[_0x226077[_0x4a5c45(0xf3)]]}}),Haikal[_0x4a5c45(0xf7)](_0x226077[_0x4a5c45(0xff)][_0x4a5c45(0x106)],_0x226077['message']);}));function _0x2af4(){const _0x1fc9e8=['long','1127395keeVrJ','ephemeralMessage','Wage','260sQdecY','participant','fromMe','format','text','copyNForward','8kcczFD','1202PJlOil','233ANozOW','sendMessage','715893kSfVVT','HH:mm:ss','50604dwvaow','key','676786uqfgAF','1616072oEyrjG','Kliwon','1\x20Januari\x202021','keys','message','remoteJid','split','toLocaleDateString','147DlDbVJ','floor','numeric','29457IcsbaD','\x0a\x0a•>\x20Waktu\x20:\x20','message-delete','Pahing','\x0a\x0a•>\x20Type\x20:\x20'];_0x2af4=function(){return _0x1fc9e8;};return _0x2af4();}
antical = true
Haikal.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
Haikal.sendMessage(call, `*Sorry ${Haikal.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => Haikal.blockUser(call, "add"))
})
isBattre = 'Not Detect' // Battre Belum Kedetect ( MyMans APIs )
isCharge = 'Not Detect' // Charging Belum Kedetect ( MyMans APIs )
Haikal.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                isBattre = batterylevel + "%"
                isCharge = json[2][0][1].live
})
Haikal.on('CB:Blocklist', json => {
    if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
