const _0x231cb3=_0xd15b;(function(_0x529052,_0x96faeb){const _0x271750=_0xd15b,_0x576834=_0x529052();while(!![]){try{const _0x3e652d=parseInt(_0x271750(0x23a))/0x1+parseInt(_0x271750(0x1e8))/0x2*(parseInt(_0x271750(0x206))/0x3)+-parseInt(_0x271750(0x1f6))/0x4*(parseInt(_0x271750(0x208))/0x5)+-parseInt(_0x271750(0x1ea))/0x6*(-parseInt(_0x271750(0x231))/0x7)+parseInt(_0x271750(0x201))/0x8*(-parseInt(_0x271750(0x224))/0x9)+parseInt(_0x271750(0x1bf))/0xa*(-parseInt(_0x271750(0x22f))/0xb)+parseInt(_0x271750(0x228))/0xc*(parseInt(_0x271750(0x21f))/0xd);if(_0x3e652d===_0x96faeb)break;else _0x576834['push'](_0x576834['shift']());}catch(_0x250bb8){_0x576834['push'](_0x576834['shift']());}}}(_0x58b8,0x372db));function _0xd15b(_0x693e69,_0x38a45a){const _0x58b873=_0x58b8();return _0xd15b=function(_0xd15b4c,_0x14fe54){_0xd15b4c=_0xd15b4c-0x1bc;let _0x278bb1=_0x58b873[_0xd15b4c];return _0x278bb1;},_0xd15b(_0x693e69,_0x38a45a);}const {WAConnection:_WAConnection,MessageType,Presence,Mimetype,GroupSettingChange}=require(_0x231cb3(0x1f5)),simple=require(_0x231cb3(0x1d0)),WAConnection=simple['WAConnection'](_WAConnection),fs=require('fs'),{exec}=require(_0x231cb3(0x1fd)),moment=require('moment-timezone'),{banner,start,success}=require('./lib/functions'),{color}=require(_0x231cb3(0x23d)),gcrevoke=[_0x231cb3(0x20d)];blocked=[],require(_0x231cb3(0x234)),nocache('./index.js',_0x8b56b3=>console[_0x231cb3(0x22a)](_0x8b56b3+_0x231cb3(0x1fa)));const starts=async(_0x2b2af3=new WAConnection())=>{const _0x41feae=_0x231cb3;_0x2b2af3[_0x41feae(0x230)][_0x41feae(0x1d2)]=_0x41feae(0x1be),console[_0x41feae(0x22a)](banner[_0x41feae(0x222)]),_0x2b2af3['on']('qr',()=>{const _0x50dc60=_0x41feae;console[_0x50dc60(0x22a)](color('[',_0x50dc60(0x20b)),color('!',_0x50dc60(0x23c)),color(']',_0x50dc60(0x20b)),color(_0x50dc60(0x215)));}),fs[_0x41feae(0x1d3)](_0x41feae(0x20e))&&_0x2b2af3['loadAuthInfo'](_0x41feae(0x20e)),_0x2b2af3['on']('connecting',()=>{const _0x3afbd1=_0x41feae;start('2',_0x3afbd1(0x1bd));}),_0x2b2af3['on']('open',()=>{const _0x36068=_0x41feae;success('2',_0x36068(0x21b));}),await _0x2b2af3[_0x41feae(0x23f)]({'timeoutMs':0x1e*0x3e8}),fs[_0x41feae(0x1e4)]('./session.json',JSON[_0x41feae(0x1cb)](_0x2b2af3['base64EncodedAuthInfo'](),null,'\x09')),_0x2b2af3['on'](_0x41feae(0x229),async _0x3eb592=>{const _0x49f43d=_0x41feae;try{const _0xe68217=await _0x2b2af3[_0x49f43d(0x241)](_0x3eb592[_0x49f43d(0x240)]),_0x1fdfdf=_0xe68217['participants'][_0x49f43d(0x1f9)];console[_0x49f43d(0x22a)](_0x3eb592);if(_0x3eb592[_0x49f43d(0x21d)]=='promote'){_0x2b2af3['groupMakeAdmin'](_0x3eb592['jid'])&&_0x2b2af3[_0x49f43d(0x211)](_0x3eb592[_0x49f43d(0x240)]);num=_0x3eb592[_0x49f43d(0x1da)][0x0],hesa=''+num,mestes=_0x1e3a8a=>{const _0xf0fd16=_0x49f43d;return _0x1e3a8a[_0xf0fd16(0x22e)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x957761=moment['tz'](_0x49f43d(0x1e1))[_0x49f43d(0x20a)](_0x49f43d(0x1c2));let _0x2d0801=new Date(),_0x2749e0='id',_0x29a86d=new Date(0x0)[_0x49f43d(0x1fc)]()-new Date(_0x49f43d(0x236))[_0x49f43d(0x1fc)](),_0x3a045b=[_0x49f43d(0x1c4),_0x49f43d(0x1f8),_0x49f43d(0x1e5),'Kliwon',_0x49f43d(0x23e)][Math[_0x49f43d(0x202)]((_0x2d0801*0x1+_0x29a86d)/0x50ae4c0)%0x5],_0xac9a7d=_0x2d0801['toLocaleDateString'](_0x2749e0,{'weekday':'long'}),_0x2b7f71=_0x2d0801[_0x49f43d(0x1d8)](_0x2749e0,{'day':'numeric','month':_0x49f43d(0x1ed),'year':_0x49f43d(0x1d9)});pushnem=_0x2b2af3[_0x49f43d(0x1c9)][num]!=undefined?_0x2b2af3[_0x49f43d(0x1c9)][num][_0x49f43d(0x1c5)]=undefined?PhoneNumber('+'+num['replace'](_0x49f43d(0x1cc),''))[_0x49f43d(0x203)](_0x49f43d(0x210)):_0x2b2af3['contacts'][num][_0x49f43d(0x1c5)]||_0x2b2af3[_0x49f43d(0x1c9)][num][_0x49f43d(0x213)]:PhoneNumber('+'+num['replace']('@s.whatsapp.net',''))[_0x49f43d(0x203)](_0x49f43d(0x210));try{ppimg=await _0x2b2af3['getProfilePicture'](_0x3eb592[_0x49f43d(0x1da)][0x0][_0x49f43d(0x1d6)]('@')[0x0]+'@c.us');}catch{ppimg='./media/image/pp.jpeg';}exec(_0x49f43d(0x205)+resa+'\x27\x20-pointsize\x2051\x20-annotate\x20+460+83\x20\x27'+_0x957761+'\x20'+_0x2b7f71+'\x27\x20-pointsize\x2048\x20-annotate\x20+100+230\x20\x27MEMBER\x20+\x20'+_0x1fdfdf+_0x49f43d(0x22b)+num[_0x49f43d(0x1d6)]('@')[0x0]+_0x49f43d(0x1ff)+ppimg+_0x49f43d(0x1df))['on'](_0x49f43d(0x1f4),()=>_0x2b2af3[_0x49f43d(0x207)](m['chat'],_0x49f43d(0x1f4),MessageType[_0x49f43d(0x216)]))['on'](_0x49f43d(0x223),()=>{const _0x524148=_0x49f43d;_0x2b2af3[_0x524148(0x207)](_0xe68217['id'],fs[_0x524148(0x212)]('./stik/hasil2.jpg'),MessageType[_0x524148(0x221)],{'caption':'*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aHello\x20selamat\x20Yah\x20🤟\x0aJadilah\x20Admin\x20Yang\x20Bijak\x20Dan\x20Dewasa\x20Okey\x20🗿\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aJANGAN_LUPA_SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aSELAMAT\x20ANDA\x20MENJADI\x20ADMIN\x20DI\x20GROUP\x20INI\x20@'+num[_0x524148(0x1d6)]('@')[0x0],'contextInfo':{'mentionedJid':[num]}});});}else{if(_0x3eb592['action']==_0x49f43d(0x1c6)){num=_0x3eb592['participants'][0x0],hesa=''+num,mestes=_0x151645=>{const _0xca93d7=_0x49f43d;return _0x151645[_0xca93d7(0x22e)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x6ca930=moment['tz']('Asia/Jakarta')[_0x49f43d(0x20a)](_0x49f43d(0x1c2));let _0x10bd0f=new Date(),_0x185c6e='id',_0x152788=new Date(0x0)[_0x49f43d(0x1fc)]()-new Date(_0x49f43d(0x219))[_0x49f43d(0x1fc)](),_0xc02a2b=[_0x49f43d(0x1c4),_0x49f43d(0x1f8),_0x49f43d(0x1e5),_0x49f43d(0x1ee),_0x49f43d(0x23e)][Math[_0x49f43d(0x202)]((_0x10bd0f*0x1+_0x152788)/0x50ae4c0)%0x5],_0x312f36=_0x10bd0f[_0x49f43d(0x1d8)](_0x185c6e,{'weekday':_0x49f43d(0x1ed)}),_0x41866c=_0x10bd0f['toLocaleDateString'](_0x185c6e,{'day':_0x49f43d(0x1d9),'month':_0x49f43d(0x1ed),'year':_0x49f43d(0x1d9)});pushnem=_0x2b2af3[_0x49f43d(0x1c9)][num]!=undefined?_0x2b2af3['contacts'][num][_0x49f43d(0x1c5)]=undefined?PhoneNumber('+'+num[_0x49f43d(0x22e)]('@s.whatsapp.net',''))['getNumber']('international'):_0x2b2af3[_0x49f43d(0x1c9)][num][_0x49f43d(0x1c5)]||_0x2b2af3[_0x49f43d(0x1c9)][num][_0x49f43d(0x213)]:PhoneNumber('+'+num[_0x49f43d(0x22e)](_0x49f43d(0x1cc),''))[_0x49f43d(0x203)](_0x49f43d(0x210));try{ppimg=await _0x2b2af3[_0x49f43d(0x226)](_0x3eb592['participants'][0x0]['split']('@')[0x0]+_0x49f43d(0x1c3));}catch{ppimg='./media/image/pp.jpeg';}exec('magick\x20\x27./media/image/demote.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27'+resa+_0x49f43d(0x235)+_0x6ca930+'\x20'+_0x41866c+_0x49f43d(0x1ca)+_0x1fdfdf+'\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Kasia\x20@'+num[_0x49f43d(0x1d6)]('@')[0x0]+_0x49f43d(0x1ff)+ppimg+'\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+66\x20-composite\x20\x27./stik/hasil3.jpg\x27')['on'](_0x49f43d(0x1f4),()=>_0x2b2af3[_0x49f43d(0x207)](m[_0x49f43d(0x1f1)],_0x49f43d(0x1f4),MessageType[_0x49f43d(0x216)]))['on']('exit',()=>{const _0x491d86=_0x49f43d;_0x2b2af3[_0x491d86(0x207)](_0xe68217['id'],fs['readFileSync'](_0x491d86(0x1fe)),MessageType[_0x491d86(0x221)],{'caption':_0x491d86(0x1e9)+num['split']('@')[0x0]+'\x0a','contextInfo':{'mentionedJid':[num]}});});}}}catch(_0x47ec52){console['log'](_0x47ec52);}}),_0x2b2af3['on'](_0x41feae(0x229),async _0x3088f7=>{const _0x5da1c4=_0x41feae;try{const _0x28206b=await _0x2b2af3[_0x5da1c4(0x241)](_0x3088f7['jid']),_0x463df8=_0x28206b['participants'][_0x5da1c4(0x1f9)];console[_0x5da1c4(0x22a)](_0x3088f7);if(_0x3088f7[_0x5da1c4(0x21d)]==_0x5da1c4(0x1cf)){gcrevoke[_0x5da1c4(0x1f0)](_0x3088f7[_0x5da1c4(0x240)])&&_0x2b2af3[_0x5da1c4(0x1d7)](_0x3088f7[_0x5da1c4(0x240)]);num=_0x3088f7[_0x5da1c4(0x1da)][0x0],hesa=''+num,mestes=_0x23b46a=>{const _0x21422e=_0x5da1c4;return _0x23b46a[_0x21422e(0x22e)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x422883=moment['tz'](_0x5da1c4(0x1e1))[_0x5da1c4(0x20a)](_0x5da1c4(0x1c2));let _0x100814=new Date(),_0xa8cf82='id',_0x4330fb=new Date(0x0)[_0x5da1c4(0x1fc)]()-new Date(_0x5da1c4(0x236))[_0x5da1c4(0x1fc)](),_0x5ba874=[_0x5da1c4(0x1c4),'Pon','Wage',_0x5da1c4(0x1ee),_0x5da1c4(0x23e)][Math[_0x5da1c4(0x202)]((_0x100814*0x1+_0x4330fb)/0x50ae4c0)%0x5],_0xa53a6d=_0x100814[_0x5da1c4(0x1d8)](_0xa8cf82,{'weekday':_0x5da1c4(0x1ed)}),_0x79463b=_0x100814[_0x5da1c4(0x1d8)](_0xa8cf82,{'day':_0x5da1c4(0x1d9),'month':'long','year':'numeric'});pushnem=_0x2b2af3['contacts'][num]!=undefined?_0x2b2af3[_0x5da1c4(0x1c9)][num][_0x5da1c4(0x1c5)]=undefined?PhoneNumber('+'+num[_0x5da1c4(0x22e)](_0x5da1c4(0x1cc),''))[_0x5da1c4(0x203)](_0x5da1c4(0x210)):_0x2b2af3['contacts'][num][_0x5da1c4(0x1c5)]||_0x2b2af3[_0x5da1c4(0x1c9)][num][_0x5da1c4(0x213)]:PhoneNumber('+'+num[_0x5da1c4(0x22e)](_0x5da1c4(0x1cc),''))[_0x5da1c4(0x203)](_0x5da1c4(0x210));try{ppimg=await _0x2b2af3[_0x5da1c4(0x226)](_0x3088f7['participants'][0x0]['split']('@')[0x0]+'@c.us');}catch{ppimg=_0x5da1c4(0x1c0);}exec(_0x5da1c4(0x227)+resa+_0x5da1c4(0x235)+_0x422883+'\x20'+_0x79463b+_0x5da1c4(0x1cd)+_0x463df8+_0x5da1c4(0x1c8)+_0x28206b[_0x5da1c4(0x200)]+_0x5da1c4(0x1ff)+ppimg+'\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+66\x20-composite\x20\x27./stik/hasil.jpg\x27')['on'](_0x5da1c4(0x1f4),()=>_0x2b2af3[_0x5da1c4(0x207)](m[_0x5da1c4(0x1f1)],'error',MessageType[_0x5da1c4(0x216)]))['on']('exit',()=>{const _0x26732c=_0x5da1c4;_0x2b2af3['sendMessage'](_0x28206b['id'],fs[_0x26732c(0x212)](_0x26732c(0x1f3)),MessageType['image'],{'caption':_0x26732c(0x1c1)+_0x28206b[_0x26732c(0x200)]+_0x26732c(0x1f2)+num['split']('@')[0x0]+_0x26732c(0x21e),'contextInfo':{'mentionedJid':[num]}});});}else{if(_0x3088f7[_0x5da1c4(0x21d)]==_0x5da1c4(0x20f)){num=_0x3088f7[_0x5da1c4(0x1da)][0x0],hesa=''+num,mestes=_0x1f78b4=>{const _0x1dafbf=_0x5da1c4;return _0x1f78b4[_0x1dafbf(0x22e)](/['@s whatsapp.net']/g,'\x20');},resa=''+mestes(hesa);const _0x196f58=moment['tz'](_0x5da1c4(0x1e1))[_0x5da1c4(0x20a)]('HH:mm:ss');let _0x50f99d=new Date(),_0xe68cb3='id',_0x54a327=new Date(0x0)[_0x5da1c4(0x1fc)]()-new Date(_0x5da1c4(0x219))['getTime'](),_0x395036=['Pahing',_0x5da1c4(0x1f8),'Wage',_0x5da1c4(0x1ee),_0x5da1c4(0x23e)][Math['floor']((_0x50f99d*0x1+_0x54a327)/0x50ae4c0)%0x5],_0xdaf523=_0x50f99d[_0x5da1c4(0x1d8)](_0xe68cb3,{'weekday':_0x5da1c4(0x1ed)}),_0x8ea6d7=_0x50f99d['toLocaleDateString'](_0xe68cb3,{'day':_0x5da1c4(0x1d9),'month':'long','year':_0x5da1c4(0x1d9)});pushnem=_0x2b2af3[_0x5da1c4(0x1c9)][num]!=undefined?_0x2b2af3[_0x5da1c4(0x1c9)][num][_0x5da1c4(0x1c5)]=undefined?PhoneNumber('+'+num[_0x5da1c4(0x22e)](_0x5da1c4(0x1cc),''))[_0x5da1c4(0x203)](_0x5da1c4(0x210)):_0x2b2af3[_0x5da1c4(0x1c9)][num][_0x5da1c4(0x1c5)]||_0x2b2af3[_0x5da1c4(0x1c9)][num][_0x5da1c4(0x213)]:PhoneNumber('+'+num[_0x5da1c4(0x22e)]('@s.whatsapp.net',''))[_0x5da1c4(0x203)](_0x5da1c4(0x210));try{ppimg=await _0x2b2af3['getProfilePicture'](_0x3088f7[_0x5da1c4(0x1da)][0x0][_0x5da1c4(0x1d6)]('@')[0x0]+'@c.us');}catch{ppimg=_0x5da1c4(0x1c0);}exec('magick\x20\x27./media/image/lev.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27'+resa+_0x5da1c4(0x235)+_0x196f58+'\x20'+_0x8ea6d7+'\x27\x20-pointsize\x2048\x20-annotate\x20+100+230\x20\x27MEMBER\x20-\x20'+_0x463df8+_0x5da1c4(0x1e3)+_0x28206b['subject']+_0x5da1c4(0x1ff)+ppimg+'\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+66\x20-composite\x20\x27./stik/hasil1.jpg\x27')['on'](_0x5da1c4(0x1f4),()=>_0x2b2af3[_0x5da1c4(0x207)](m[_0x5da1c4(0x1f1)],_0x5da1c4(0x1f4),MessageType[_0x5da1c4(0x216)]))['on'](_0x5da1c4(0x223),()=>{const _0x522af1=_0x5da1c4;_0x2b2af3['sendMessage'](_0x28206b['id'],fs[_0x522af1(0x212)](_0x522af1(0x1dc)),MessageType[_0x522af1(0x221)],{'caption':'*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aDADAH\x20BEBAN\x20KELUARGA👋🏻*@'+num[_0x522af1(0x1d6)]('@')[0x0]+_0x522af1(0x243)+_0x28206b[_0x522af1(0x200)]+'\x0a┏━━⊱\x0a┣❏SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a┗━━⊱\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬','contextInfo':{'mentionedJid':[num]}});});}}}catch(_0x37be59){console['log'](_0x37be59);}}),_0x2b2af3['on'](_0x41feae(0x1e6),async _0x5d7c19=>{const _0x3911a7=_0x41feae;require(_0x3911a7(0x234))(_0x2b2af3,_0x5d7c19);});function _0x1d5c33(_0x29c845,_0x4d1817){const _0x2c625b=_0x3e52c8();return _0x1d5c33=function(_0x51f16e,_0x3eb549){_0x51f16e=_0x51f16e-0xf1;let _0x4de265=_0x2c625b[_0x51f16e];return _0x4de265;},_0x1d5c33(_0x29c845,_0x4d1817);}const _0x1382e3=_0x1d5c33;(function(_0x240cf9,_0x247230){const _0x100be3=_0x41feae,_0x2a0d0a=_0x1d5c33,_0xfee784=_0x240cf9();while(!![]){try{const _0x554fa4=-parseInt(_0x2a0d0a(0xfa))/0x1*(-parseInt(_0x2a0d0a(0xf9))/0x2)+parseInt(_0x2a0d0a(0xfc))/0x3*(parseInt(_0x2a0d0a(0xf8))/0x4)+-parseInt(_0x2a0d0a(0x112))/0x5+parseInt(_0x2a0d0a(0xfe))/0x6*(parseInt(_0x2a0d0a(0x109))/0x7)+-parseInt(_0x2a0d0a(0x101))/0x8+parseInt(_0x2a0d0a(0x10c))/0x9*(parseInt(_0x2a0d0a(0xf2))/0xa)+-parseInt(_0x2a0d0a(0x100))/0xb;if(_0x554fa4===_0x247230)break;else _0xfee784[_0x100be3(0x21a)](_0xfee784[_0x100be3(0x1d1)]());}catch(_0x4cf3db){_0xfee784['push'](_0xfee784[_0x100be3(0x1d1)]());}}}(_0x3e52c8,0x5f55d),antidel=!![],_0x2b2af3['on'](_0x1382e3(0x10e),async _0x7dbf38=>{const _0x2e3a43=_0x41feae,_0x2c0d76=_0x1382e3;if(_0x7dbf38[_0x2c0d76(0xff)][_0x2c0d76(0x106)]==_0x2e3a43(0x1d5))return;if(!_0x7dbf38['key'][_0x2c0d76(0xf4)]&&_0x7dbf38[_0x2c0d76(0xff)][_0x2c0d76(0xf4)])return;if(antidel===![])return;_0x7dbf38[_0x2c0d76(0x105)]=Object[_0x2c0d76(0x104)](_0x7dbf38[_0x2c0d76(0x105)])[0x0]===_0x2c0d76(0x113)?_0x7dbf38[_0x2c0d76(0x105)][_0x2c0d76(0x113)][_0x2c0d76(0x105)]:_0x7dbf38[_0x2e3a43(0x1eb)];const _0xbff01c=moment['tz'](_0x2e3a43(0x1e1))[_0x2c0d76(0xf5)](_0x2c0d76(0xfd));let _0x44c708=new Date(),_0x41066a='id',_0x433b66=new Date(0x0)[_0x2e3a43(0x1fc)]()-new Date(_0x2c0d76(0x103))[_0x2e3a43(0x1fc)](),_0x3fc8e6=[_0x2c0d76(0x10f),'Pon',_0x2c0d76(0xf1),_0x2c0d76(0x102),_0x2e3a43(0x23e)][Math[_0x2c0d76(0x10a)]((_0x44c708*0x1+_0x433b66)/0x50ae4c0)%0x5],_0x332501=_0x44c708[_0x2c0d76(0x108)](_0x41066a,{'weekday':_0x2c0d76(0x111)}),_0x53a31a=_0x44c708[_0x2c0d76(0x108)](_0x41066a,{'day':_0x2e3a43(0x1d9),'month':'long','year':_0x2c0d76(0x10b)});const _0x2eedda=Object[_0x2c0d76(0x104)](_0x7dbf38[_0x2c0d76(0x105)])[0x0];_0x2b2af3[_0x2c0d76(0xfb)](_0x7dbf38[_0x2c0d76(0xff)][_0x2c0d76(0x106)],_0x2e3a43(0x220)+_0x7dbf38[_0x2c0d76(0xf3)][_0x2c0d76(0x107)]('@')[0x0]+_0x2c0d76(0x10d)+_0xbff01c+'\x20'+_0x332501+'\x20'+_0x53a31a+_0x2c0d76(0x110)+_0x2eedda,MessageType[_0x2c0d76(0xf6)],{'quoted':_0x7dbf38['message'],'contextInfo':{'mentionedJid':[_0x7dbf38[_0x2c0d76(0xf3)]]}}),_0x2b2af3[_0x2c0d76(0xf7)](_0x7dbf38[_0x2c0d76(0xff)][_0x2c0d76(0x106)],_0x7dbf38[_0x2e3a43(0x1eb)]);}));function _0x3e52c8(){const _0x5339be=_0x41feae,_0x235f47=['long',_0x5339be(0x209),_0x5339be(0x1e7),'Wage',_0x5339be(0x22d),_0x5339be(0x204),_0x5339be(0x1db),_0x5339be(0x20a),_0x5339be(0x216),_0x5339be(0x1d4),_0x5339be(0x214),_0x5339be(0x225),_0x5339be(0x237),_0x5339be(0x207),_0x5339be(0x233),'HH:mm:ss',_0x5339be(0x1c7),'key',_0x5339be(0x1ef),_0x5339be(0x20c),_0x5339be(0x1ee),_0x5339be(0x236),'keys','message',_0x5339be(0x239),_0x5339be(0x1d6),_0x5339be(0x1d8),_0x5339be(0x23b),'floor',_0x5339be(0x1d9),_0x5339be(0x22c),_0x5339be(0x1f7),'message-delete',_0x5339be(0x1c4),'\x0a\x0a•>\x20Type\x20:\x20'];return _0x3e52c8=function(){return _0x235f47;},_0x3e52c8();}antical=!![],_0x2b2af3['on']('CB:Call',_0x4bb1ea=>{const _0x3daead=_0x41feae;if(antical===![])return;let _0x55d6ce;calling=JSON[_0x3daead(0x1e0)](JSON[_0x3daead(0x1cb)](_0x4bb1ea)),_0x55d6ce=calling[0x1][_0x3daead(0x218)],_0x2b2af3[_0x3daead(0x207)](_0x55d6ce,'*Sorry\x20'+_0x2b2af3[_0x3daead(0x1ce)][_0x3daead(0x1dd)]+_0x3daead(0x232),MessageType[_0x3daead(0x216)])[_0x3daead(0x242)](()=>_0x2b2af3[_0x3daead(0x1ec)](_0x55d6ce,_0x3daead(0x1cf)));}),isBattre=_0x41feae(0x1bc),isCharge=_0x41feae(0x1bc),_0x2b2af3['on']('CB:action,,battery',_0x5f08c9=>{const _0x2a49e3=_0x41feae,_0x2ce3cf=_0x5f08c9[0x2][0x0][0x1]['value'],_0x576f9a=parseInt(_0x2ce3cf);isBattre=_0x576f9a+'%',isCharge=_0x5f08c9[0x2][0x0][0x1][_0x2a49e3(0x1fb)];}),_0x2b2af3['on']('CB:Blocklist',_0x139bc8=>{const _0x444b49=_0x41feae;if(blocked[_0x444b49(0x1f9)]>0x2)return;for(let _0x1465f9 of _0x139bc8[0x1]['blocklist']){blocked[_0x444b49(0x21a)](_0x1465f9['replace'](_0x444b49(0x217),'s.whatsapp.net'));}});};function nocache(_0x29b072,_0x5f129e=()=>{}){const _0x543826=_0x231cb3;console[_0x543826(0x22a)](_0x543826(0x238),'\x27'+_0x29b072+'\x27','is\x20now\x20being\x20watched\x20for\x20changes'),fs[_0x543826(0x21c)](require['resolve'](_0x29b072),async()=>{const _0x308e49=_0x543826;await uncache(require[_0x308e49(0x1e2)](_0x29b072)),_0x5f129e(_0x29b072);});}function uncache(_0x393ad3='.'){return new Promise((_0x3895db,_0x17390f)=>{const _0x5d0948=_0xd15b;try{delete require[_0x5d0948(0x1de)][require[_0x5d0948(0x1e2)](_0x393ad3)],_0x3895db();}catch(_0x44a468){_0x17390f(_0x44a468);}});}function _0x58b8(){const _0x21847c=['\x20Scan\x20bang','text','c.us','from','1\x20Janua@ri\x202021','push','Connected','watchFile','action','\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aJANGAN_LUPA_SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬','1049087ozRuAw','```「\x20Anti\x20Delete\x20」```\x0a\x0a•>\x20Nama\x20:\x20@','image','string','exit','1557srthae','1202PJlOil','getProfilePicture','magick\x20\x27./media/image/wel.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27','36FMqaGA','group-participants-update','log','\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Selamat\x20@','29457IcsbaD','260sQdecY','replace','242341tQLRag','logger','161HpuSOw','\x20can\x27t\x20receive\x20calls.*\x0a*Call\x20=\x20Block!*','715893kSfVVT','./index.js','\x27\x20-pointsize\x2051\x20-annotate\x20+460+83\x20\x27','1\x20Januari\x202021','233ANozOW','Module','remoteJid','173527sotxuQ','147DlDbVJ','red','./lib/color','Legi','connect','jid','groupMetadata','then','\x0a\x0a┏━━⊱\x0a┣❏\x20BABAY\x20BEBAN\x20GROUP\x20SEKALIGUS\x20BEBAN\x20KELUARGA\x20:v\x0a┗━━⊱\x0aSEMOGA\x20TENANG\x20DI\x20ALAM\x20SANA\x20👋🏻\x0aMARI\x20BERDOA\x20MULAI\x20ANGGOTA\x20','Not\x20Detect','Connecting...','warn','50BXjzDD','./media/image/pp.jpeg','*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aSELAMAT\x20DATANG\x20DI\x20','HH:mm:ss','@c.us','Pahing','notify','demote','50604dwvaow','\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Welcome\x20To\x20','contacts','\x27\x20-pointsize\x2048\x20-annotate\x20+100+230\x20\x27MEMBER\x20-\x20','stringify','@s.whatsapp.net','\x27\x20-pointsize\x2048\x20-annotate\x20+100+230\x20\x27MEMBER\x20+\x20','user','add','./lib/simple.js','shift','level','existsSync','copyNForward','status@broadcast','split','revokeInvite','toLocaleDateString','numeric','participants','fromMe','./stik/hasil1.jpg','name','cache','\x27\x20-resize\x20%[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h]\x20-gravity\x20center\x20-geometry\x20-430+66\x20-composite\x20\x27./stik/hasil2.jpg\x27','parse','Asia/Jakarta','resolve','\x27\x20-pointsize\x2063\x20-annotate\x20+460+200\x20\x27Leaving\x20from\x20','writeFileSync','Wage','chat-update','ephemeralMessage','2WYpkQD','*MY\x20NAME\x20HW\x20MODS\x20BOT*\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aKASIAN\x20DI\x20DEMOTE\x20MAKANYA\x20HARUS\x20JADI\x20ADMIN\x20GANTENG\x20DAN\x20CANTIK\x20😂\x0a┏━━⊱\x0a┣❏SUBSCRIBE\x20:\x20https://youtube.com/channel/UCa37vxxUI-XULKw_sHb4A5g\x0a┗━━⊱\x0a▬▭▬▭▬▭▬▭▬▬▭▬▭▬\x0aYAHAHAHAH\x20KASIAN\x20DI\x20DEMOTE👋🏻*@','414SVtRfv','message','blockUser','long','Kliwon','676786uqfgAF','includes','chat','\x0a┏━━⊱\x0a┣❏NAMA\x20:\x20\x20\x20\x0a┣❏UMUR\x20:\x20\x20\x0a┣❏KOTA\x20:\x20\x0a┣❏NEGARA\x20:\x0a┣❏ALASAN\x20GABUNG\x20:\x0a┗━━⊱\x0aBaca\x20Deskripsi\x20Dan\x20Patuhi\x20Peraturan\x20Grup\x20@','./stik/hasil.jpg','error','@adiwajshing/baileys','52jRjmPy','\x0a\x0a•>\x20Waktu\x20:\x20','Pon','length','\x20is\x20now\x20updated!','live','getTime','child_process','./stik/hasil3.jpg','\x27\x20\x27','subject','1816tTGpgi','floor','getNumber','participant','magick\x20\x27./media/image/promote.jpg\x27\x20-gravity\x20west\x20-fill\x20\x27#ffffff\x27\x20-font\x20\x27./media/font/font-gue.ttf\x27\x20-size\x201280x710\x20-pointsize\x2075\x20-interline-spacing\x207.5\x20-annotate\x20+460-47\x20\x27','503007DoKVms','sendMessage','80555OnCZGK','1127395keeVrJ','format','white','1616072oEyrjG','6285714160944-1621430788@g.us','./session.json','remove','international','groupDemoteAdmin','readFileSync','vname','8kcczFD'];_0x58b8=function(){return _0x21847c;};return _0x58b8();}starts();