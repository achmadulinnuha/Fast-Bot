const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const moment = require('moment-timezone')
const os = require('os')
const get = require('got')
const color = require('./lib/color')
const fetch = require('node-fetch')
const { spawn, exec } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const google = require('google-it')
const TikTokScraper = require('tiktok-scraper')
const translatte = require('translatte')
const { liriklagu, quotemaker, randomNimek, fb, sleep, jadwalTv, ss, translate, randNominal, getStickerMaker, gasNulis, genUniqueId, generate, gasNulisFolio, getRandomText, processTime, nulis} = require('./lib/functions')
const { downloader, msgFilter, GetAccesToken, getGuestToken, getAktivate, getToken, startConvert, base64Only, getBase64, base64MimeType } = require('./lib/functions')
const { help, snk, info, donatee, readme, listChannel, menuadmin, rules, mit } = require('./lib/help')
const { RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile } = require('remove.bg')
const { stdout } = require('process')
const { uploadImages, custom } = require('./lib/fetcher')
const quotedd = require('./lib/quote')
const nsfw_ = JSON.parse(fs.readFileSync('./lib/NSFW.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
const left = JSON.parse(fs.readFileSync('./lib/left.json'))
const ban = JSON.parse(fs.readFileSync('./lib/banned.json'))
const BRAINLY = require(`./api/brainly.js`);
const h2p = require('html2plaintext');
// const muted = JSON.parse(fs.readFileSync('./lib/muted.json'))
const bent = require('bent')
var request = require('request');

const googleIt = require('google-it');
const ytdl = require('ytdl-core');
const mysql = require('mysql')

const IG = require('./api/ig.js')
const ZODIAK = require('./api/zodiak.js')
const PIN = require('./api/pin.js')

moment.tz.setDefault('Asia/Jakarta').locale('id')
let setting = JSON.parse(fs.readFileSync('./setting/setting.json'));
let { banChats, restartState: isRestart,mtc: mtcState, whitelist ,sAdmin, limitCount, memberLimit, groupLimit} = setting
let tiktok_user = ('vienbabinaaa,tiktok,ngelsk').split(',')
let msgLimit = JSON.parse(fs.readFileSync('./setting/msgLimit.json'));
let limit = JSON.parse(fs.readFileSync('./setting/limit.json'));
var CreateMYSQL = mysql.createConnection(
    {host: "127.0.0.1", user: "root", password: "", database: "bot_whatsapp", charset: 'utf8mb4'}
);

module.exports = msgHandler = async (client, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, author, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')
        /*
        const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

                function isMsgLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of msgLimit){
                        if(i.id === id){
                            if (i.msg >= 12) {
                                found === true 
                                client.reply(from, '*[ANTI-SPAM]*\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!', id)
                                client.contactBlock(id)
                                banned.push(id)
                                fs.writeFileSync('./lib/banned.json', JSON.stringify(banned))
                                return true;
                            }else if(i.msg >= 7){
                                found === true
                                client.reply(from, '*[ANTI-SPAM]*\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!', id)
                                return true
                            }else{
                                found === true
                                return false;
                            }   
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, msg:1};
                        msgLimit.push(obj);
                        fs.writeFileSync('./lib/msgLimit.json',JSON.stringify(msgLimit));
                        return false;
                    }  
                }
                function addMsgLimit(id){
                    if (isAdmin) {return;}
                    var found = false
                    Object.keys(msgLimit).forEach((i) => {
                        if(msgLimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgLimit[found].msg += 1;
                        fs.writeFileSync('./lib/msgLimit.json',JSON.stringify(msgLimit));
                    }
                }
                function isLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                client.reply(from, 'Perintah BOT anda sudah mencapai batas, coba esok hari :)', id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
                function limitAdd (id) {
                    if (isAdmin) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./lib/limit.json',JSON.stringify(limit));
                    }
                }*/
                function isMsgLimit(id){
                    if (!spremium) {return false;}
                    let found = false;
                    for (let i of msgLimit){
                        if(i.id === id){
                            if (i.msg >= 12) {
                                found === true 
                                client.reply('[ANTI-SPAM]\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!', id)
                                client.contactBlock(id)
                                banned.push(id)
                                fs.writeFileSync('./lib/banned.json', JSON.stringify(banned))
                                return true;
                            }else if(i.msg >= 7){
                                found === true
                                client.reply('[ANTI-SPAM]\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!', id)
                                return true
                            }else{
                                found === true
                                return false;
                            }   
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, msg:1};
                        msgLimit.push(obj);
                        fs.writeFileSync('./setting/msgLimit.json',JSON.stringify(msgLimit));
                        return false;
                    }  
                }
                function addMsgLimit(id){
                    if (ispremium) {return;}
                    var found = false
                    Object.keys(msgLimit).forEach((i) => {
                        if(msgLimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgLimit[found].msg += 1;
                        fs.writeFileSync('./setting/msgLimit.json',JSON.stringify(msgLimit));
                    }
                }
                function isLimit(id){
                    if (ispremium) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                client.reply(mit)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./setting/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
                function limitAdd (id) {
                    if (ispremium) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./setting/limit.json',JSON.stringify(limit));
                    }
                }
        const msgs = (message) => {
            if (command.startsWith('#')) {
                if (message.length >= 10){
                    return `${message.substr(0, 15)}`
                }else{
                    return `${message}`
                }
            }
        }

        const apakah = [
            'Ya',
            'Tidak',
            'Sepertinya',
            'Coba Ulangi'
            ]

        const bisakah = [
            'Bisa',
            'Sedikit',
            'Tidak Bisa',
            'Coba Ulangi'
            ]

        const kapankah = [
            '1 Minggu lagi',
            '1 Bulan lagi',
            'Sepertinya besok',
            '3 Bulan lagi',
            '7 Bulan lagi',
            '1 Tahun lagi'
            ]

        const rate = [
            '100%',
            '90%',
            '80%',
            '70%',
            '60%',
            '50%',
            '40%',
            '30%',
            '20%',
            '10%'
            ]

        const mess = {
            wait: 'Processing...',
            iklan: `\n\n\nSupport bot dengan cara subscribe ya kak *${undefined, pushname}*\nhttps://www.youtube.com/c/AchmadUlinNuha`,
            iklann: `Support bot dengan cara subscribe ya kak *${undefined, pushname}*\nhttps://www.youtube.com/c/AchmadUlinNuha`,
            blockk: '```Kamu telah di blokir karena melanggar #rules bot.!```\n\n\nUntuk unblock silahkan hubungi #owner bot',
            error: {
                St: '[❗] Kirim gambar dengan caption *#stiker* atau tag gambar yang sudah dikirim',
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan admin group!',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }

        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const botNumber = await client.getHostNumber()
        const blockNumber = await client.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false

        const premium = ["6283142933894@c.us","6282134320195@c.us"]
        const ispremium = premium.includes(sender.id)
        const adminNumber = "6282134320195@c.us"
        const isAdmin = adminNumber.includes(sender.id)
        const ownerNumber = "6282134320195@c.us"
        const isOwner = ownerNumber.includes(sender.id)
        
        /*const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false
        const isWhiteList = (chatId) => {
            if(adminNumber.includes(chatId)){
                if(muted.includes(chatId)) return false
                return true
            }else{
                return false
            }
        }*/
        
        
        const serial = sender.id
        const isBanned = ban.includes(serial)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'

        const vhtearkey = 'Tobz2k19' // https://api.vhtear.com
        const barbarkey = 'raSWDLX1sEE1LkjWJfEC' // https://mhankbarbar.herokuapp.com/api

        const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'

                // END HELPER FUNCTION
                /*if(body === '#mute' && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isGroupAdmins) return client.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin grup!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                        client.reply(from, 'Bot telah di mute pada chat ini! #unmute untuk unmute!', id)
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                        reply(from, 'Bot telah di mute pada chat ini! #unmute untuk unmute!', id)
                    }
                }
                if(body === '#unmute' && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isGroupAdmins) return client.reply(from, 'Maaf, perintah ini hanya dapat dilakukan oleh admin grup!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                        client.reply(from, 'Bot telah di unmute!', id)         
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                        client.reply(from, 'Bot z di unmute!', id)                   
                    }
                }*/

        if (!isGroupMsg && command.startsWith('#')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname))
        if (isGroupMsg && command.startsWith('#')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname), 'in', color(formattedTitle))
        //if (!isGroupMsg && !command.startsWith('#')) console.log('\x1b[1;33m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color(body), 'from', color(pushname))
        //if (isGroupMsg && !command.startsWith('#')) console.log('\x1b[1;33m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color(body), 'from', color(pushname), 'in', color(formattedTitle))
        //if (isBlocked) return
        if (isBanned) return
        switch(command) {
       case 'assalamualaikum':
        case 'assalamu\'alaikum':
        case 'assalamuallaikum':        
        case 'assalammualaikum':
      return client.reply(from, `Waalaikumsalam wr.wb kak *${undefined, pushname}* ☺ \nKetik #menu untuk melihat fitur bot`, id);
      break
        case 'samlekom':
        case 'samlkom':
        case 'samlekum':
      return client.reply(from, `Salam macam apa ini anjing`, id)
        case '!help':
        case '!menu':
        case '!p':
        case '!bot':
        case '/menu':
        case '/help':
        case '.menu':
        case '/commands':
      return client.reply(from, 'Mungkin maksud anda #menu', id);
      break;
        case 'shalom':
        case 'salom':
        case 'shallom':
        case 'syaloom':
        case 'saloom':
        case 'syalom':
        case 'shaloom':
        case 'syalloom':
      return client.reply(from, `Shallom kak *${undefined, pushname}* ☺ \nKetik #menu untuk melihat fitur bot`, id);
      break
        case 'p':
        case '#p':
      return client.reply(from, `Utamakan ucap salam ya kak *${undefined, pushname}..* ☺`, id);
      break
        case 'Hello':
        case 'haii':
        case 'hii':
        case 'hai':
        case 'halo':
        case 'hi':   
        case 'allo':
        case 'alo': 
        case 'hy':
      return client.reply(from, `Hallo kak *${undefined, pushname}*. ☺ \nketik #menu untuk melihat fitur bot`, id);
      break    
        case 'thanks':
        case 'thx':
        case 'tq':
        case 'terimakasih':
        case 'makasi':
        case 'terimakasi':
        case 'makasih':
        case 'thank':
        case 'arigato':
        case 'nuhun':
        case 'mksi':
        case 'mksii':
        case 'maksh':
        case 'thnk':
        case 'arigatou':
        case '#terimakasih':
      return client.reply(from, `Sama-sama kak *${undefined, pushname}* ☺`, id);
      break
      /*case '#limit':
            var found = false
            for(let lmt of limit){
                if(lmt.id === serial){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return client.reply(`Limit media anda sudah habis`)
                    client.reply(from,`Sisa limit media anda tersisa : ${limitCounts}`, id)
                    found = true
                }
            }
            if (found === false){
                let obj = {id: `${serial}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./setting/limit.json',JSON.stringify(limit, 2));
                client.reply(from,`Sisa limit media anda tersisa : ${limitCount}`, id)
            }
            break*/
      case '#bug': 
        if (isBlocked) return await client.reply(from, mess.blockk, id)
        if (args.length === 1) return client.reply(from, 'Kata katanya mana tlol', id)
        const bug = body.slice(5)
        if(!bug) return
        client.sendText(ownerNumber, `[BUG REPORT]\n\nNo Pengirim : wa.me/${serial.match(/\d+/g)}\n\n${bug}`)
        client.reply(from, 'Bug telah di laporkan ke admin.\n\ninfomrmasi palsu/hanya untuk main main akan di blokir bot!', id)
        break
       case '#sticker':
        case '#stiker' :
         case '!sticker' :
          case '!stiker' :


            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
                client.reply(from, mess.iklann, id)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
                client.reply(from, mess.iklann, id)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await client.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    client.reply(from, mess.error.Iv, id)
                }
            } else {
                    client.reply(from, mess.error.St, id)
            }
            break
        case '#textsticker':
        case '#textstiker':
        case '!ttp':

            if (isBlocked) return await client.reply(from, mess.blockk, id)
            try
            { 
                if(args[1])
                {
                    if(message.quotedMsgObj == null)
                    {
                        const gasMake = await getStickerMaker(args[0] == '#textsticker' ? body.slice(13) : body.slice(12))
                        if(gasMake.status == true)
                        {
                            try{
                                await client.sendImageAsSticker(message.from, gasMake.base64, id)
                                client.reply(from, mess.iklann, id)
                            }catch(err) {
                                await client.reply(message.from, 'Gagal membuat.', id)
                            } 
                        }else{
                            await client.reply(message.from, gasMake.reason)
                        }
                    }else if(message.quotedMsgObj != null){
                        const gasMake = await getStickerMaker(message.quotedMsgObj.body)
                        if(gasMake.status == true)
                        {
                            try{
                                await client.sendImageAsSticker(message.from, gasMake.base64, id)
                                client.reply(from, mess.iklann, id)
                            }catch(err) {
                                await client.reply(message.from, 'Gagal membuat.', id)
                            } 
                        }else{
                            await client.reply(message.from, gasMake.reason)
                        }
                    }
                   
                }else{
                    await client.reply(message.from, 'Tidak boleh kosong.', id)
                }
            }catch(error)
            {
                console.log(error)
            }
            break
        case '#toimg':
        case '!toimg':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendFile(from, imageBase64, 'imagesticker.jpg', `Sukses Decrypt ${mess.iklan}`, id)
            } else if (!quotedMsg) return client.reply(from, 'Tidak ada stiker yang di balas!', id)
            break
        break
        case '#stickergif':
        case '#stikergif':
        case '#sgif':

            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10) {
                    const mediaData = await decryptMedia(message, uaOverride)
                    client.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                    const filename = `./media/img/aswu.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/img/output.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                        const gif = await fs.readFileSync('./media/img/output.gif', { encoding: "base64" })
                        await client.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                        client.reply(from, mess.iklann, id)
                    })
                } else (
                    client.reply(from, '[❗] Kirim video dengan caption *#stickerGif* max 10 sec!', id)
                )
            }
            break
        case '#stickernobg':
        case '#stikernobg':
        case '#nobg':
        if (isBlocked) return await client.reply(from, mess.blockk, id)
        if (isMedia) {
                try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/img/noBg.png'
                    // untuk api key kalian bisa dapatkan pada website remove.bg
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'w1SmnfESmwkN8VAWdVy2pGrJ', size: 'auto', type: 'auto', outFile })
                    await fs.writeFile(outFile, result.base64img)
                    await client.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`, id)
                    client.reply(from, mess.iklann, id)
                } catch(err) {
                    console.log(err)
                }
            }
            break
        case '#groupinfo':
        case '#grupinfo':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam grup!', message.id)
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = welkom.includes(chat.id)
            var leftgrp = left.includes(chat.id)
            var ngrp = nsfw_.includes(chat.id)
            var grouppic = await client.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await client.sendFileFromUrl(from, pfp, 'group.png', `➸ *Name : ${groupname}* 
*➸ Members : ${totalMem}*
*➸ Welcome : ${welgrp}*
*➸ Left : ${leftgrp}*
*➸ NSFW : ${ngrp}*
*➸ Group Description* 
${desc} ${mess.iklan}`)
            break
        case '#quotes2' :
        case '#quote2' :
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            client.sendText(from, quotedd())
            break
        case '#quoteanime':
        case '!quoteanime':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
                        if(args[1]){
                            if(args[1] === 'anime'){
                                const anime = body.slice(13)
                                axios.get('https://animechanapi.xyz/api/quotes?anime='+anime).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    client.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    client.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }else{
                                const char = body.slice(12)
                                axios.get('https://animechanapi.xyz/api/quotes?char='+char).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    client.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    client.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }
                        }else{
                            axios.get('https://animechanapi.xyz/api/quotes/random').then(({ data }) => {
                                let penyanyi = data.result[0].penyanyi 
                                let judul = data.result[0].judul
                                let linkimg = data.result[0].linkImg
                                let lagu = data.result[0].linkMp3 
                                let size = data.result[0].filesize
                                let durasi = data.result[0].duration
                                client.sendText(from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)                               
                            }).catch(err => {
                                console.log(err)
                            })
                        }
            break

        case '#tts':
        case '!tts':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#tts* [id, en, jp, ar, ru, ko] [teks], contoh *#tts* id halo semua')
            const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
            const ttsJp = require('node-gtts')('ja')
            const ttsAr = require('node-gtts')('ar')
            const ttsRu = require('node-gtts')('ru')
            const ttsKo = require('node-gtts')('ko')
            const dataText = body.slice(8)
            if (dataText === '') return client.reply(from, 'Kode Bahasa yang digunakan salah', id)
            if (dataText.length > 500) return client.reply(from, 'Teks tidak boleh terlalu panjang', id)
            var dataBhs = body.slice(5, 7)
	        if (dataBhs == 'id') {
                ttsId.save('./media/tts/resId.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resId.mp3', message.id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./media/tts/resEn.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resEn.mp3', message.id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./media/tts/resJp.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resJp.mp3', message.id)
                })
            } else if (dataBhs == 'ar') {
                ttsAr.save('./media/tts/resAr.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resAr.mp3', message.id)
                })
            } else if (dataBhs == 'ru') {
                ttsRu.save('./media/tts/resRu.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resRu.mp3', message.id)
                })
            } else if (dataBhs == 'ko') {
                ttsKo.save('./media/tts/resKo.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resKo.mp3', message.id)
                })
            } else {
                client.reply(from, 'Maukkan Kode Bahasa :\n[id] => indonesia\n[en] => inggris\n[jp] => jepang\n[ar] => arab\n[ru] => russia\n[ko] => korea\n\nContoh : #tts id selamat pagi beban', id)
            }
            break
        case '#koin':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
              client.sendStickerfromUrl(from, 'https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png', { method: 'get' })
            } else {
              client.sendStickerfromUrl(from, 'https://i.ibb.co/bLsRM2P/2003-indonesia-500-rupiah-copy-1.png', { method: 'get' })
            }
            break
        case '#dadu':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const dice = Math.floor(Math.random() * 6) + 1
            await client.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' }, id)
            break
        case '#kapankah':
        case '!kapankah':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const when = args.join(' ')
            const ans = kapankah[Math.floor(Math.random() * (kapankah.length))]
            if (!when) client.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.', id)
            await client.reply(from, `Pertanyaan: *${when}* \n\nJawaban: ${ans}`, id)
            break
        case '#nilai':
        case '#rate':
        case '!nilai':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const rating = args.join(' ')
            const awr = rate[Math.floor(Math.random() * (rate.length))]
            if (!rating) client.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.', id)
            await client.reply(from, `Pertanyaan: *${rating}* \n\nJawaban: ${awr}`)
            break
        case '#apakah':
        case '!apakah':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const nanya = args.join(' ')
            const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
            if (!nanya) client.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.', id)
            await client.reply(from, `Pertanyaan: *${nanya}* \n\nJawaban: ${jawab}`, id)
            break
         case '#bisakah':
         case '!bisakah':
   if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const bsk = args.join(' ')
            const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
            if (!bsk) client.reply(from, '⚠️ Format salah! Ketik *#menu* untuk penggunaan.', id)
            await client.reply(from, `Pertanyaan: *${bsk}* \n\nJawaban: ${jbsk}`, id)
            break
        case '#owner':
        case '#creator':
        case 'ownerbot':
            await client.sendContact(chatId, `6282134320195@c.us`, id)
            client.reply(from, 'Kalo chat owner, usahakan dengan cara yang sopan dan langsung ke poinnya yah', id)
            break
        case '#nsfw':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return client.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                nsfw_.push(chat.id)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                client.reply(from, 'NSWF Command berhasil di aktifkan di group ini! kirim perintah *#nsfwMenu* untuk mengetahui menu', id)
            } else if (args[1].toLowerCase() === 'disable') {
                nsfw_.splice(chat.id, 1)
                fs.writeFileSync('./lib/NSFW.json', JSON.stringify(nsfw_))
                client.reply(from, 'NSFW Command berhasil di nonaktifkan di group ini!', id)
            } else {
                client.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case '#left':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return client.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                left.push(chat.id)
                fs.writeFileSync('./lib/left.json', JSON.stringify(welkom))
                client.reply(from, 'Fitur left berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                left.splice(chat.id, 1)
                fs.writeFileSync('./lib/left.json', JSON.stringify(welkom))
                client.reply(from, 'Fitur left berhasil di nonaktifkan di group ini!', id)
            } else {
                client.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case '#welcome':
        case '!welcome':
    if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Admin group!', id)
            if (args.length === 1) return client.reply(from, 'Pilih enable atau disable!', id)
            if (args[1].toLowerCase() === 'enable') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(from, 'Fitur welcome berhasil di aktifkan di group ini!', id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/welcome.json', JSON.stringify(welkom))
                client.reply(from, 'Fitur welcome berhasil di nonaktifkan di group ini!', id)
            } else {
                client.reply(from, 'Pilih enable atau disable udin!', id)
            }
            break
        case '#nsfwmenu':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isNsfw) return
            client.reply(from, '1. #randomHentai\n2. #randomNsfwNeko\n3. #nhentai [kode]\n4. #xnxx linknya', id)
            break
        // ANIME //
        case '#otakudesu':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#otakudesu [query]*\nContoh : *#otakudesu darling in the franxx*', id)
            const animes = await get.get('https://api-jojo.herokuapp.com/api/otakudesu?q=' + body.slice(10)).json()
            if (animes.error) return client.reply(from, animes.error, id)
            const res_animes = `${animes.title}\n\n${animes.info}\n\n${animes.sinopsis}`
            client.sendFileFromUrl(from, animes.thumb, 'otakudesu.jpg', res_animes, id)
            break
        case '#kusonime':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return client.reply(from, 'Contoh : *#kusonime darling in the franxx*', id)
            const animeq = await get.get('https://api-jojo.herokuapp.com/api/kuso?q=' + body.slice(9)).json()
            if (animeq.error) return client.reply(from, animeq.error, id)
            const res_animeq = `${animeq.title}\n\n${animeq.info}\n\n${animeq.sinopsis}\n\n${animeq.link_dl}`
            client.sendFileFromUrl(from, animeq.thumb, 'kusonime.jpg', `${res_animeq} ${mess.iklan}`, id)
            break
        case '#dewabatch':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return client.reply(from, 'Contoh : *#dewabatch darling in the franxx*', id)
            const animek = await get.get('https://api-jojo.herokuapp.com/api/dewabatch?q=' + body.slice(10)).json()
            if (animek.error) return client.reply(from, animek.error, id)
            const res_animek = `${animek.result}\n\n${animek.sinopsis}`
            client.sendFileFromUrl(from, animek.thumb, 'dewabatch.jpg', `${res_animek} ${mess.iklan}`, id)
            break
        case '#komiku':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 1) return client.reply(from, 'Contoh : *#komiku darling in the franxx*', id)
            const animep = await get.get('https://api-jojo.herokuapp.com/api/komiku?q=' + body.slice(7)).json()
            if (animep.error) return client.reply(from, animep.error, id)
            const res_animep = `${animep.info}\n\n${animep.sinopsis}\n\n${animep.link_dl}`
            client.sendFileFromUrl(from, animep.thumb, 'komiku.jpg', `${res_animep} ${mess.iklan}`, id)
            break
        case '#malanime':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Contoh: #malanime kimetsu no yaiba', id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const keyword = message.body.replace('#malanime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Ditemukan!*
✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            client.sendImage(from, base64, title, `${content} ${mess.iklan}`)
           } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
           }
          break
        case '#malcharacter':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const keywords = message.body.replace('#malcharacter', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${keywords}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[0]
            const content = `*Anime Ditemukan!*
✨️ *Name:* ${title}
💌️ *Alternative Names:* ${rated}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            client.sendImage(from, base64, title, `${content} ${mess.iklan}`)
           } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
           }
          break
        // MEDIA //
        case '#infogempa':
            //if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const bmkg = await get.get('https://api-jojo.herokuapp.com/api/infogempa').json()
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg
            const hasil = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            client.sendFileFromUrl(from, map, 'shakemap.jpg', `${hasil} ${mess.iklan}`, id)
            break
         case '#ss':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const _query = body.slice(4)
            if (!_query.match(isUrl)) return client.reply(from, mess.error.Iv, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#ss [web]*\nContoh *#ss https://www.ebooku.xyz*', id)
            const url2img = await get.get(`https://mhankbarbar.herokuapp.com/api/url2image?url=${_query}&apiKey=${barbarkey}`).json()
            if (url2img.error) return client.reply(from, url2img.error, id)
            client.sendFileFromUrl(from, url2img.result, 'kyaa.jpg', `Nih sreenshotnya ${mess.iklan}`, id)
            break
        case '#cuaca':
        case '!cuaca':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Contoh : *#cuaca kopang', id)
            const tempat = body.slice(7)
            const weather = await get.get('https://api-jojo.herokuapp.com/api/cuaca?q='+ tempat).json()
            if (weather.error) {
                client.reply(from, weather.error, id)
            } else {
                client.reply(from, `  🌤Perkiraan cuaca🌤\n\n*${weather.result.tempat}*\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desk}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara} ${mess.iklan}`, id)
            }
            break
        case '#covid':
        case '!covid':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const country = await slicedArgs.join(' ')
            console.log(country)
            const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
            const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                await client.sendText(from, '🌎️ Covid Info - ' + country + ' 🌍️\n\n✨️ Total Cases: ' + `${cases}` + '\n📆️ Today\'s Cases: ' + `${todayCases}` + '\n☣️ Total Deaths: ' + `${deaths}` + '\n☢️ Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️ Active Cases: ' + `${active}` + '.')
            break
        case '#spamcall':
        case '#call':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const spam = await slicedArgs.join(' ')
            console.log(spam)
            const call2 = await axios.get('https://api-jojo.herokuapp.com/api/spamcall?no=' + spam)
            const { logs } = call2.data
                await client.sendText(from, `Logs : ${logs}` + '.')
            break
        case '#ytmp3':
        case '!ytmp3':    if (isBlocked) return await client.reply(from, mess.blockk, id)            
            if (args.length === 1) return client.reply(from, 'Contoh #ytmp3 https://www.youtube.com/xnxx')
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const resp = await get.get('https://api-jojo.herokuapp.com/api/yta?url='+ args[1]).json()
                if (resp.error) {
                    client.reply(from, resp.error, id)
                } else {
                    const { title, thumb, filesize, result } = await resp
                    if (Number(filesize.split(' MB')[0]) >= 10.00) return client.reply(from, 'Maaf ukuran video sudah melebihi batas maksimal 10 MB!', id)
                    client.sendFileFromUrl(from, thumb, 'thumb.jpg', `➸ *Judul* : ${title}\n➸ *Filesize* : ${filesize}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit. ${mess.iklan}`, id)
                    await client.sendFileFromUrl(from, result, `${title}.mp3`, '', id).catch(() => client.reply(from, mess.error.Yt3, id))
                }
            } catch (err) {
                client.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                client.reply(from, mess.error.Yt3, id)
            }
            break
        case '#pantun' :
        case '!pantun':
    if(isLimit(serial)) return
            if (isGroupMsg){
            await client.sendText(from, 'pantunn()')
            limitAdd(serial)
            }else{
            await client.sendText(from, 'pantunn()')
            await limitAdd(serial)
            await client.deleteChat(chatId)}
            break
        case '#google':            
        case '!google':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            var googleQuery = body.slice(8)
            if(googleQuery == undefined || googleQuery == ' ') return
            google({ 'query': googleQuery, 'limit': '10' }).then(results => {
                let vars = results[0];
                    client.sendText(from, `_*Hasil Pencarian Google*_\n\n~> Judul : \n${vars.title}\n\n~> Deskripsi : \n${vars.snippet}\n\n~> Link : \n${vars.link} ${mess.iklan}`, id);
            }).catch(e => {
               client.sendText(e);              
            })            
            break
        case '#translate':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var text = body.slice(11+codelang.length);
                translatte(text, {to: codelang}).then(res => {
                }).catch(err => {
                    client.sendText(from,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *#bahasa* untuk melihat list kode bahasa`);
                });
            }
            break	
           case '#brainly':
           case '!brainly':
     if(args.length == 1) return await client.reply(from, `❌ *Error*\n├ Pastikan contoh benar!\n└ #brain <soal>`, id)
                else{
                    let pertanyaan = [];
                    let jawabanbrain = [];
                    const brainly = await BRAINLY.GetSoal(body.slice(9));
                    for (var i = 0; i < brainly.body.data.questionSearch.edges.length; i++) {
                        const jawaban = await BRAINLY.GetJawaban(brainly.body.data.questionSearch.edges[i].node.databaseId)
                        pertanyaan.push(h2p(jawaban.body.data.questionById.content));
                        jawabanbrain.push(h2p(jawaban.body.data.questionById.answers.nodes[0].content));
                    }  
                    for (var i = 0; i < pertanyaan.length; i++) {
                        await client.reply(from, `✅ ${[i + 1]}.${pertanyaan[i]}\n\n${jawabanbrain[i]}`, id);
                    }
                }
            break;	
        case '#ytmp4':
        case '#yt':
        case '!ytmp4':    if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Contoh #yt https://www.youtube.com/xnxx')
            let isLin = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLin) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const ytv = await get.get('https://api-jojo.herokuapp.com/api/ytv?url='+ args[1]).json()
                if (ytv.error) {
                    client.reply(from, ytv.error, id)
                } else {
                    if (Number(ytv.filesize.split(' MB')[0]) > 20.00) return client.reply(from, 'Maaf ukuran video sudah melebihi batas maksimal 20 MB!', id)
                    client.sendFileFromUrl(from, ytv.thumb, 'thumb.jpg', `➸ *Judul* : ${ytv.title}\n➸ *Filesize* : ${ytv.filesize}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit. ${mess.iklan}`, id)
                    await client.sendFileFromUrl(from, ytv.result, `${ytv.title}.mp4`, '', id).catch(() => client.reply(from, mess.error.Yt4, id))
                }
            } catch (er) {
                client.sendText(ownerNumber, 'Error ytmp4 : '+ er)
                client.reply(from, mess.error.Yt4, id)
            }
            break
         case '#ytmp4':
        case '#yt':
        case '!ytmp4':
    if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
            if (args.length === 1) return client.reply(from, 'Contoh #yt https://www.youtube.com/xnxx')
            let isLino = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLino) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const oytv = await get.get('https://api-jojo.herokuapp.com/api/ytv?url='+ args[1]).json()
                if (oytv.error) {
                    client.reply(from, oytv.error, id)
                } else {
                    if (Number(oytv.filesize.split(' MB')[0]) > 119.00) return client.reply(from, 'Maaf ukuran video sudah melebihi batas maksimal 100 MB!', id)
                    client.sendFileFromUrl(from, oytv.thumb, 'thumb.jpg', `➸ *Judul* : ${oytv.title}\n➸ *Filesize* : ${oytv.filesize}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await client.sendFileFromUrl(from, oytv.result, `${oytv.title}.mp4`, 'Nih tuan', id).catch(() => client.reply(from, mess.error.Yt4, id))
                }
            } catch (er) {
                client.sendText(ownerNumber, 'Error ytmp4 : '+ er)
                client.reply(from, mess.error.Yt4, id)
            }
            break
        case '#xnxx':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (!isNsfw) return client.reply(from, `إِنَّ اللَّهَ كَتَبَ عَلَى ابْنِ آدَمَ حَظَّهُ مِنَ الزِّنَا، أَدْرَكَ ذَلِكَ لاَ مَحَالَةَ ، فَزِنَا العَيْنِ النَّظَرُ، وَزِنَا اللِّسَانِ المَنْطِقُ ، وَالنَّفْسُ تَمَنَّى وَتَشْتَهِي وَالفَرْجُ يُصَدِّقُ ذَلِكَ كُلَّهُ وَيُكَذِّبُهُ 
 Artinya: “Sesungguhnya Allah telah menetapkan batas-batas zina untuk anak Adam. Batas-batas itu adalah Zina mata dengan melihat (yang diharamkan), zina lisan dengan berkata (yang bohong), zina nafsu dengan membayangkan (pemicu syahwat yang terlarang). Sementara kemaluan membenarkan atau mendustakan semua itu.” (HR. Bukhari dan Muslim)`, id)
            if (args.length === 1) return client.reply(from, 'Contoh #xnxx https://www.xnxxx.com/coli-terosss')
            if (!args[1].match(isUrl) && !args[1].includes('xnxx.com')) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const xnx = await get.get('https://mhankbarbar.herokuapp.com/api/xnxx?url='+ args[1] +'&apiKey='+ barbarkey).json()
                if (xnx.error) {
                    client.reply(from, xnx.error, id)
                } else {
                    if (Number(xnx.result.size.split(' MB')[0]) > 20.00) return client.reply(from, 'Maaf durasi video sudah melebihi batas maksimal 20 menit!', id)
                    client.sendFileFromUrl(from, xnx.result.thumb, 'thumb.jpg', `➸ *Judul* : ${xnx.result.judul}\n➸ *Deskripsi* : ${xnx.result.desc}\n➸ *Filesize* : ${xnx.result.size}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await client.sendFileFromUrl(from, xnx.result.vid, `${xnx.result.title}.mp4`, 'Tuhan mengawasimu', id)
                }
            } catch (err) {
                console.error(err.message)
                await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan', id)
           }
            break
        case '#oxnxx':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
            if (args.length === 1) return client.reply(from, 'Contoh #xnxx https://www.xnxxx.com/coli-terosss')
            if (!args[1].match(isUrl) && !args[1].includes('xnxx.com')) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const oxnx = await get.get('https://mhankbarbar.herokuapp.com/api/xnxx?url='+ args[1] +'&apiKey='+ barbarkey).json()
                if (oxnx.error) {
                    client.reply(from, oxnx.error, id)
                } else {
                    if (Number(oxnx.result.size.split(' MB')[0]) > 100.00) return client.reply(from, 'Maaf durasi video sudah melebihi batas maksimal 20 menit!', id)
                    client.sendFileFromUrl(from, oxnx.result.thumb, 'thumb.jpg', `➸ *Judul* : ${oxnx.result.judul}\n➸ *Deskripsi* : ${oxnx.result.desc}\n➸ *Filesize* : ${oxnx.result.size}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await client.sendFileFromUrl(from, oxnx.result.vid, `${oxnx.result.title}.mp4`, 'Nih tuan', id)
                }
            } catch (err) {
                console.error(err.message)
                await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan', id)
           }
            break
        case '#pasangan':
        case '!pasangan':    if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Contoh : #pasangan |Sugiono|Eimi Fukada', id)
            arg = body.trim().split('|')
            if (arg.length >= 3) {
            client.reply(from, mess.wait, id)
            const kamu = arg[1]
            const pacar = arg[2]
            const rjh = await get.get('https://api.vhtear.com/primbonjodoh?nama='+ kamu +'&pasangan=' + pacar + '&apikey=' + vhtearkey).json()
            if (rjh.result.error) return client.reply(from, rjh.result.error, id)
            const rjh2 = `➸ Hasil : ${rjh.result.hasil}`
            client.reply(from, `${rjh2} ${mess.iklan}`, id)
            } else {
            await client.reply(from, 'Wrong Format!', id)
            }
            break
        case '#sendto':
            if (!isOwner) return await client.reply(from, `OWNER ONLY`, id)
            client.sendFile(from, './msgHndlr.js', 'msgHndlr.js')
            break
        case '#sendbot':
            if (!isOwner) return await client.reply(from, `OWNER ONLY`, id)
            client.sendFile(from, './bot.rar', 'iluser_BOT.rar')
            break
        case '#artinama':
        case 'artinama':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Contoh : *#artinama iluser*', id)
            try {
            const anm = await get.get('https://api.vhtear.com/artinama?nama=' + body.slice(7) + '&apikey=' + vhtearkey).json()
            if (anm.error) return client.reply(from, anm.error, id)
            const anm2 = `➸ Artinama : ${anm.result.hasil}`
            client.reply(from, `${anm2} ${mess.iklan}`, id)
            } catch (err) {
                console.error(err.message)
                await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan', id)
           }
            break
        case '#fb2':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Contoh : *#fb https://www.facebook.com/xnxx*', id)
            try {
            client.reply(from, mess.wait, id)
            const epbe = await get.get('https://mhankbarbar.herokuapp.com/api/epbe?url=' + body.slice(7) + '&apikey=' + vhtearkey).json()
            const epbe2 = `*Video Ditemukan!*\n➸ Judul : ${epbe.title}\n➸ Filesize : ${epbe.filesizeHd}`
            client.sendFileFromUrl(from, epbe.hdQuality, `${epbe.title}.mp4`, `${epbe2} ${mess.iklan}`, id)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan', id)
           }
            break
        case '#tiktok':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Contoh : *#tiktok https://vt.tiktok.com/xnxx*', id)
            try {
            client.reply(from, mess.wait, id)
            const tkp = await get.get('https://api.vhtear.com/tiktokdl?link=' + body.slice(7) + '&apikey=' + vhtearkey).json()
            const tpk = `*Video Ditemukan!*\n➸ Judul : ${tkp.result.title}\n➸ Deskripsi : ${tkp.result.desk}\n➸ Durasi : ${tkp.result.duration}\n➸ Dibuat : ${tkp.result.dibuat}`
            client.sendFileFromUrl(from, tkp.result.video, `${tkp.result.title}.mp4`, `${tpk} ${mess.iklan}`, id)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan', id)
           }
            break
        case '#wiki':
        case '!wiki':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Contoh : *#wiki covid-19*', id)
            const query_ = body.slice(6)
            const wiki = await get.get('https://api-jojo.herokuapp.com/api/wiki?q='+ query_).json()
            if (wiki.error) {
                client.reply(from, wiki.error, id)
            } else {
                client.reply(from, `*Artikel* : ${query_}\n\n*Hasil* : ${wiki.result} ${mess.iklan}`, id)
            }
            break
        case '#smule':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Contoh : *#smule https://www.smule.com/xnxx*', id)
            client.reply(from, mess.wait, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const sml = await slicedArgs.join(' ')
            console.log(sml)
            try {
            const sml2 = await axios.get('https://api.vhtear.com/getsmule?link=' + sml + '&apikey=' + vhtearkey)
            const { Type, title, url, image } = sml2.data.result
            const sml3 = `*Music Ditemukan!*

➸ *Judul:* ${title}
➸ *Type:* ${Type}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            client.sendImage(from, base64, title, sml3)
            client.sendFileFromUrl(from, url, `${title}.mp3`, `${sml3} ${mess.iklan}`, id)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Music tidak ditemukan', id)
           }
          break
        case '#resep':
        case '!resep':
    if (isBlocked) return await client.reply(from, mess.blockk, id)       
    if (args.length === 1)  return client.reply(from, 'Contoh *#resepmasakan rawon*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const rmk = await slicedArgs.join(' ')
            console.log(rmk)
            try {
            const rmk2 = await axios.get('https://api.vhtear.com/resepmasakan?query=' + rmk + '&apikey=' + vhtearkey)
            const { bahan, cara, image, title  } = rmk2.data.result
            const rmk3 = `*Resep Ditemukan!*
➸ *Judul:* ${title}
➸ *Bahan:* ${bahan}
➸ *Cara:* ${cara}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            client.sendImage(from, base64, title, `${rmk3} ${mess.iklan}`)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Resep tidak ditemukan', id)
           }
           break
        case '#twitterstalk':
        case '#twtstalk':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1)  return client.reply(from, 'Contoh *#twtstalk @miakhalifah*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const twstalk = await slicedArgs.join(' ')
            console.log(twstalk)
            try {
            const twstalk2 = await axios.get('https://mhankbarbar.herokuapp.com/api/twstalk?username=' + twstalk + '&apiKey=' + barbarkey)
            const { followers_count, full_name, name, profile_pic, status_count } = twstalk2.data
            const twstalk3 = `*User Ditemukan!*
➸ *Nama:* ${name}
➸ *Nama Panjang:* ${full_name}
➸ *Jumlah Pengikut:* ${followers_count}
➸ *Jumlah Postingan:* ${status_count}`

            const pictk = await bent("buffer")(profile_pic)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            client.sendImage(from, base64, name, `${twstalk3} ${mess.iklan}`)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan', id)
           }
          break
        case '#igstalk':
        case '!igstalk':    if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1)  return client.reply(from, 'Kirim perintah *#igstalk @username*\nContoh *#igstalk @duar_amjay*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const istalk = await slicedArgs.join(' ')
            console.log(istalk)
            try {
            const istalk2 = await axios.get('https://api.vhtear.com/igprofile?query=' + istalk + '&apikey=' + vhtearkey)
            const { biography, follower, follow, post_count, full_name, username, picture, is_private } = istalk2.data.result
            const istalk3 = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Nama:* ${full_name}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *Jumlah Postingan:* ${post_count}
➸ *Bio:* ${biography}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            client.sendImage(from, base64, username, `${istalk3} ${mess.iklan}`, id)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan', id)
           }
          break
        case '#tiktokstalk':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1)  return client.reply(from, 'Contoh *#tiktokstalk @duar_amjay*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const tstalk = await slicedArgs.join(' ')
            console.log(tstalk)
            try {
            const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk + '&apikey=' + vhtearkey)
            const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
            const tiktod = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Judul:* ${title}
➸ *Bio:* ${bio}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *Jumlah Like*: ${like_count}
➸ *Jumlah Postingan:* ${video_post}
➸ *Deskripsi:* ${description}
➸ *Link:* ${url_account}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            client.sendImage(from, base64, title, `${tiktod} ${mess.iklan}`, id)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan', id)
           }
          break
        case '#smulestalk':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Contoh : *#smulestalk @xnxx*', id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const sstalk = await slicedArgs.join(' ')
            console.log(sstalk)
            try {
            const sstalk2 = await axios.get('https://api.vhtear.com/smuleprofile?query=' + sstalk + '&apikey=' + vhtearkey)
            const { username, full_name, follower, follow, biography, is_vip, picture, recording } = sstalk2.data.result
            const smule = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Full Name:* ${title}
➸ *Biografi:* ${biography}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *VIP*: ${is_vip}
➸ *Total Rekaman:* ${recording}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            client.sendImage(from, base64, title, `${smule} ${mess.iklan}`, id)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan', id)
            }
          break
        case '#ig':
        case '!ig':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            //return client.reply(from, 'Mohon maaf, fitur *ig* sedang dalam perbaikan', id)
            if (args.length === 1) return client.reply(from, 'Linknya mana?', id)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const link_instagram = IG.parseUrlInstagram(args[1])
                const geturlnya = await IG.StartScrape(link_instagram)
                if (geturlnya.msg == true) {
                    if (geturlnya.body.graphql.shortcode_media.__typename === 'GraphVideo' && geturlnya.body.graphql.shortcode_media.product_type == "igtv") { 
                        await client.sendText(message.from, `IGTV Downloader! \n\nLink : ${geturlnya.body.graphql.shortcode_media.video_url}`)
                    }
                    else if (geturlnya.body.graphql.shortcode_media.__typename === 'GraphVideo') { 
                        await client.sendFileFromUrl(message.from, geturlnya.body.graphql.shortcode_media.video_url, `inifile.mp4`, `Sukses mengunduh video instagram!\nDari : @${geturlnya.body.graphql.shortcode_media.owner.username}\nDurasi : ${geturlnya.body.graphql.shortcode_media.video_duration}s ${mess.iklan}`, id);
                    } else if (geturlnya.body.graphql.shortcode_media.__typename === 'GraphImage') { 
                        await client.sendFileFromUrl(message.from, geturlnya.body.graphql.shortcode_media.display_resources[geturlnya.body.graphql.shortcode_media.display_resources.length - 1].src, `inifile.jpeg`, `Sukses mengunduh foto instagram!\nDari : @${geturlnya.body.graphql.shortcode_media.owner.username} ${mess.iklan}`, id);
                    } else if (geturlnya.body.graphql.shortcode_media.__typename === 'GraphSidecar') {
                        const jumlah = geturlnya.body.graphql.shortcode_media.edge_sidecar_to_children.edges.length
                        await client.sendText(message.from, `Terdeteksi ada ${jumlah} video/foto!`)
                        for (let i = 0; i < jumlah; i++) {
                            const a = geturlnya.body.graphql.shortcode_media.edge_sidecar_to_children.edges[i].node.__typename
                            if (a == 'GraphImage') { 
                                await client.sendFileFromUrl(message.from, geturlnya.body.graphql.shortcode_media.edge_sidecar_to_children.edges[i].node.display_url, `inifile.jpeg`, `${mess.iklann}`, id);
                            } else if (a == 'GraphVideo') { 
                                await client.sendFileFromUrl(message.from, geturlnya.body.graphql.shortcode_media.edge_sidecar_to_children.edges[i].node.video_url, `inifile.mp4`, `${mess.iklann}`, id);
                            }
                        }
                    } else {
                        await client.sendText(message.from, "Maaf, eror kode 0x35", id)
                    }
                } else if (geturlnya.msg == 'error') {
                    await client.sendText(message.from, "Maaf, mungkin private atau tidak valid.", id)
                }
            } catch {
                client.reply(from, mess.error.Ig, id)
            }
        break
        case '#ig2':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#ig [linkIg]*')
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return client.reply(from, mess.error.Iv, id)
            try {
                client.reply(from, mess.wait, id)
                const resp = await get.get('https://mhankbarbar.herokuapp.com/api/ig?url='+ args[1] +'&apiKey='+ barbarkey).json()
                if (resp.result.includes('.mp4')) {
                    var ext = '.mp4'
                } else {
                    var ext = '.jpg'
                }
                await client.sendFileFromUrl(from, resp.result, `igeh${ext}`, `Sukses unduh media instagram ${mess.iklan}`, id)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan', id)
            }
            break
        case '#starmaker':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#starmaker [linkStarmaker]*')
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const smkr = await slicedArgs.join(' ')
            console.log(smkr)
            try {
            const smkr2 = await axios.get('https://api.vhtear.com/starmakerdl?link=' + smkr + '&apikey=' + vhtearkey)
            const { image, desc, url, title } = smkr2.data.result
            const smkr3 = `*User Ditemukan!*

➸ *Judul:* ${title}
➸ *Deskripsi:* ${desc} ${mess.iklan}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            client.sendImage(from, base64, 'image.jpg', 'nihh mhank')
            client.sendFileFromUrl(from, url, `${title}.mp4`, `Sukses gan ${mess.iklan}`, id)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan', id)
           }
          break
        case '#tw':
        case '#twt':
        case '#twitter':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if(args.length == 1) return await client.reply(message.from, "Maaf, tidak boleh kosong.", id)
            if (args[1].includes('twitter.com') == true) {
                try {
                    const getToken = await GetAccesToken()
                    const getGuest = await getGuestToken(getToken.access_token)
                    if(args[1].includes('status/')==true)
                    {
                        const post_id = args[1].split('status/')[1].split('/')[0]
                        const getAktivated = await getAktivate(getToken.access_token, getGuest.guest_token, post_id)
                        if(typeof getAktivated.errors == 'undefined')
                        {
                            const total = getAktivated.extended_entities.media[0].video_info.variants.length - 1
                            const urldownload = getAktivated.extended_entities.media[0].video_info.variants[total]
                            const namauser = getAktivated.user.screen_name
                            const waktu = getAktivated.extended_entities.media[0].video_info.duration_millis / 1000 + ` detik.`
                            let result_url = ''
                            urldownload.content_type == 'application/x-mpegURL' ? result_url = getAktivated.extended_entities.media[0].video_info.variants[total - 1].url : result_url = urldownload.url;
                            await client.sendFileFromUrl(message.from,  result_url, `inifile.mp4`, `Sukses Download!\nDari: @${namauser}\nDurasi: ${waktu} ${mess.iklan}`, id);
                        
                        }
                        else if(getAktivated.errors[0].message == 'Sorry, you are not authorized to see this status.')
                        {
                            await client.reply(message.from, 'Maaf, user private.', id)
                        }else if(getAktivated.errors[0].message == 'No status found with that ID.')
                        {
                            await client.reply(message.from, 'Maaf, tidak ditemukan status dalam id tersebut.', id)
                        }else if(getAktivated.errors[0].message == 'No data available for specified ID.')
                        {
                            await client.reply(message.from, 'Maaf, tidak ditemukan data dalam id tersebut.', id)
                        }else if(getAktivated.errors[0].message == 'Invalid or expired token.')
                        {
                            await client.reply(message.from, 'Token kadaluarsa. Lapor admin segera https://wa.me/6289618530831')
                        }

                    }
                } catch(err)  {
                    console.log(err)
                    await client.reply(message.from, "⛔ error", id)
                }

            } else {
                await globalClient.reply(message.from, "⛔ Not valid url/post_id", id)
            }
        break
        case '#twitter2':
        case '#tw2':
        case '#twt2':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#twitter [linkTwitter]*')
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const twtdl = await slicedArgs.join(' ')
            console.log(twtdl)
            try {
            const twtdl2 = await axios.get('https://mhankbarbar.herokuapp.com/api/twit?url=' + twtdl + '&apiKey=' + barbarkey)
            const { filesize, quote, result, title } = twtdl2.data
            const twtdl3 = `*User Ditemukan!*

➸ *Judul:* ${title}
➸ *Deskripsi:* ${quote}
➸ *Filesize:* ${filesize}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            client.sendImage(from, base64, 'image.jpg', twtdl)
            client.sendFileFromUrl(from, result, `${title}.mp4`, `Sukses gan ${mess.iklan}`, id)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan', id)
           }
          break
        case '#asupan':
        case '!asupan':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            //if (!isOwner) return client.reply(from, 'Fitur ini sedang dalam pengembangan', id)
            if(args.length == 1)
            {
                const rand = getRandomText(tiktok_user)
                //const { collector } = await TikTokScraper.user(rand, {number: 0 });
                const { collector, headers } = await TikTokScraper.user(rand, {number: 0 });
                if(collector.length == 0)
                {
                    await client.reply(message.from, "Maaf, user tidak ditemukan atau tidak ditemukan video." ,id)
                }else{
                    const { videoUrl, webVideoUrl } = getRandomText(collector) 
                    await client.sendFileFromUrl(message.from, videoUrl, 'file.mp4', `Hii:) \nTarget!: @${rand}\nUrl: ${webVideoUrl} ${mess.iklan}`, false, { headers: headers })
                }
            }else if(args.length == 2)
            {
                const rand = args[1]
                const { collector, headers } = await TikTokScraper.user(rand, {number: 0 });
                if(collector.length == 0)
                {
                    await client.reply(message.from, "Maaf, user tidak ditemukan atau tidak ditemukan video.", id)
                }else{
                    const { videoUrl, webVideoUrl } = getRandomText(collector)
                    await client.sendFileFromUrl(message.from, videoUrl, 'file.mp4', `Hii:) \nTarget!: @${rand}\nUrl: ${webVideoUrl} ${mess.iklan}`, false, { headers: headers }, id)
                }
            }
        break
        case '#joox':
        case '!joox':
    if (isBlocked) return await client.reply(from, mess.blockk, id)            
            if (args.length === 1) return client.reply(from, 'Contoh : *#joox andmesh - hanya rindu*', id)
            client.reply(from, mess.wait, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const music = await slicedArgs.join(' ')
            console.log(music)
            try {
            const music2 = await axios.get('hhttps://api.vhtear.com/music?query=' + music + '&apikey=' + vhtearkey)
            const { penyanyi, judul, album, linkImg, linkMp3, filesize, duration } = music2.data.result[0]
            const musik = `*User Ditemukan!*

➸ *Penyanyi:* ${penyanyi}
➸ *Judul:* ${judul}
➸ *Album:* ${album}
➸ *Size:* ${filesize}
➸ *Durasi:* ${duration}`

            const pictk = await bent("buffer")(linkImg)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            client.sendImage(from, base64, judul, musik)
            client.sendFileFromUrl(from, linkMp3, `${judul}.mp3`, '', id)
            } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan', id)
           }
          break
        case '#nhentai':
        case '#nh':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan di group ini!', id)
            if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                client.reply(from, mess.wait, id)
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                            client.sendFileFromUrl(from, pic, 'hentod.jpg', teks, id).then(() => 
                            client.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id)).catch(() => 
                            client.sendFile(from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id))
                            /*if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)*/
                            })
                    } catch (err) {
                        client.reply(from, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', id)
                    }
                } else {
                    client.reply(from, '[❗] Kode nuklir Salah!')
                }
            } else {
                client.reply(from, '[ WRONG ] Kirim perintah *#nhentai [kode]* untuk contoh kirim perintah *#readme*')
            }
        	break
        case '#brainly':
        case '!brainly':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return client.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                client.reply(from, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            client.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            client.reply(from, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                client.reply(from, 'Usage :\n!brainly [pertanyaan] [.jumlah]\n\nEx : \n!brainly NKRI .2', id)
            }
            break
        case '#wait':
         case '!wait':
   if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                client.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		client.reply(from, 'Maaf, saya tidak tau ini anime apa', id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    client.sendFileFromUrl(from, video, 'nimek.mp4', teks, id).catch(() => {
                        client.reply(from, `${teks} ${mess.iklan}`, id)
                    })
                })
                .catch(() => {
                    client.reply(from, 'Error !', id)
                })
            } else {
                client.sendFile(from, './media/img/tutod.jpg', 'Tutor.jpg', 'Neh contoh mhank!', id)
            }
            break
         case '#textmaker':
                if (isBlocked) return await client.reply(from, mess.blockk, id)
                if (args.length === 1) return client.sendFile(from, './media/img/contoh.jpg', 'Tutor.jpg', 'Neh contoh mhank!', id)
                arg = body.trim().split('|')
                if ((isMedia || isQuotedImage) && arg.length >= 2) {
                	const top = arg[2]
                	const bott = arg[1]
                	const encryptMedia = isQuotedImage ? quotedMsg : message
                	const mediaData = await decryptMedia(encryptMedia, uaOverride)
                	const getUrl = await uploadImages(mediaData, false)
                	const ImageBase64 = await custom(getUrl, top, bott)
                	await client.sendFile(from, ImageBase64, 'image.png',`Jadi brooh ${mess.iklan}`)
                }else if (isMedia && type === 'image') {
                	const top = arg[2]
                	const bott = arg[1]
                	const encryptMedia = isQuotedImage ? quotedMsg : message
                	const mediaData = await decryptMedia(encryptMedia, uaOverride)
                	const getUrl = await uploadImages(mediaData, false)
                	const ImageBase64 = await custom(getUrl, top, bott)
                	await client.sendFile(from, ImageBase64, 'image.png',`Sukses gan! ${mess.iklan}`)
                }else {
                await client.sendFile(from, './media/img/contoh.jpg', 'Tutor.jpg', 'Neh contoh mhank!', id)
                }
                break
        case '#quoteit':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if(args.length == 1) return await client.reply(message.from, "Maaf, tidak boleh kosong.", id)
            if (isMedia) 
            {
                try{
                    const pesannya = body.slice(9).split('|')[0]
                    let wm = ''
                    typeof body.slice(9).split('|')[1] == 'undefined' ? wm = ' ' : wm = body.slice(9).split('|')[1]
                    const mediaData = await decryptMedia(message);
                    const imageBase64 = `data:${message.mimetype};base64,${mediaData.toString('base64')}`;
                    const rand = await genUniqueId(5)
                    const result = await generate(pesannya, wm, rand, encodeURIComponent(imageBase64), 'true')
                    result == 'fail' ? await client.reply(message.from, "⛔ error/resend") : await client.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`, id);
                }catch(err)
                {
                    console.log(err)
                }
            }else{
              try {
                if (message.quotedMsgObj == null) 
                {    
                    const pesannya = body.slice(9).split('|')[0]
                    let wm = ''
                    typeof body.slice(9).split('|')[1] == 'undefined' ? wm = ' ' : wm = body.slice(9).split('|')[1] 
                    const rand = await genUniqueId(5)
                    const param = await randNominal()
                    const result = await generate(pesannya, wm, rand, param, false)
                    result == 'fail' ? await client.reply(message.from, "⛔ error/resend") : await client.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`, id);
                }else if (message.quotedMsgObj!== null) 
                {
                    if(message.quotedMsgObj.type== 'image')
                    {
                        try{
                            const pesannya = body.slice(9).split('|')[0]
                            let wm = ''
                            typeof body.slice(9).split('|')[1] == 'undefined' ? wm = ' ' : wm = body.slice(9).split('|')[1]
                            const mediaData = await decryptMedia(message.quotedMsgObj);
                            const imageBase64 = `data:${message.quotedMsgObj.mimetype};base64,${mediaData.toString('base64')}`;
                            const rand = await genUniqueId(5) 
                            const result = await generate(pesannya, wm, rand, encodeURIComponent(imageBase64), 'true')
                            result == 'fail' ? await client.reply(message.from, "⛔ error/resend") : await client.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`);
                        }catch(err)
                        {
                            console.log(err)
                        }
                    
                    }else if(message.quotedMsgObj.type == 'chat')
                    {
                        const pesannya = message.quotedMsgObj.body
                        let wm = body.slice(9) 
                        const rand = await genUniqueId(5)
                        const param = await randNominal()
                        const result = await generate(pesannya, wm, rand, param, false)
                        result == 'fail' ? await client.reply(message.from, "⛔ error/resend") : await client.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`);
                    }
                        
                    else{
                        await client.reply(message.from, 'Maaf, tidak ditemukan foto/text.', id)
                    }
                }      
              } catch (error) {
                 console.log(error) 
              }  
            }
        break
        case '#quotemaker':
        case '!quotemaker':
    arg = body.trim().split('|')
            if (arg.length >= 4) {
                client.reply(from, mess.wait, id)
                const quotes = arg[1]
                const author = arg[2]
                const theme = arg[3]
                await quotemaker(quotes, author, theme).then(amsu => {
                    client.sendFile(from, amsu, 'quotesmaker.jpg',`Quotemaker X *iluser_BOT* ${mess.iklan}`).catch(() => {
                       client.reply(from, mess.error.Qm, id)
                    })
                })
            } else {
                client.reply(from, 'Contoh:\n#quotemaker |ini contoh|ini wm|random', id)
            }
            break
        case '#bc':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot!', id)
            let msg = body.slice(4)
            const chatz = await client.getAllChatIds()
            for (let ids of chatz) {
                var cvk = await client.getChatById(ids)
                if (!cvk.isReadOnly) await client.sendText(ids, `[ *Fast_BOT* Broadcast ]\n\n${msg}`)
            }
            client.reply(from, 'Broadcast Success!', id)
            break
        case '#adminlist':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            let mimin = 'Dewan Perwakilan Grup\n'
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await sleep(2000)
            await client.sendTextWithMentions(from, mimin, id)
            break
        case '#ownergroup':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const Owner_ = chat.groupMetadata.owner
            await client.sendTextWithMentions(from, `Nih Presiden Grup : @${Owner_}`, id)
            break
        case '#tagall':
        case '!tagall':
    if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const groupMek = await client.getGroupMembers(groupId)
            let heho = `${body.slice(8)}\n\n`
            for (let i = 0; i < groupMek.length; i++) {
                heho += '•'
                heho += ` @${groupMek[i].id.replace(/@c.us/g, '')}\n`
            }
            heho += '\nPowered by *_iluser_BOT_*'
            await sleep(2000)
            await client.sendTextWithMentions(from, heho)
            break
        case '#tagall':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam grup!', id)
            if (!isGroupAdmins) return client.reply(from, 'Mana bisa borrr... ente kan bukan admin awkowako', id)
            const groupMem = await client.getGroupMembers(groupId)
            let hehe = `${body.slice(8)}\n\n`
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '•'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '\nPowered by *_iluser_BOT_*'
            await sleep(2000)
            await client.sendTextWithMentions(from, hehe, id)
            break;
        case '#okickall':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (ownerNumber.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {+
                    await client.removeParticipant(groupId, allMem[i].id)
                }
            }
            client.reply(from, 'Succes kick all member', id)
            break
        case '#kickall':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMek = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if (adminNumber.includes(allMek[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await client.removeParticipant(groupId, allMek[i].id)
                }
            }
            client.reply(from, 'Succes kick all member', id)
            break
        case '#leaveall':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChats = await client.getAllChatIds()
            const allGroups = await client.getAllGroups()
            for (let gclist of allGroups) {
                await client.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await client.leaveGroup(gclist.contact.id)
            }
            client.reply(from, 'Succes leave all group!', id)
            break
        case '#clearall':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allChatz = await client.getAllChats()
            for (let dchat of allChatz) {
                await client.deleteChat(dchat.id)
            }
            client.reply(from, 'Succes clear all chat!', id)
            break
        case '#oadd':
            const orang = args[1]
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner & Admin bot', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await client.addParticipant(from,`${orang}@c.us`)
            } catch {
                client.reply(from, mess.error.Ad, id)
            }
            break
        case '#add':
            const orgh = args[1]
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (args.length === 1) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            try {
                await client.addParticipant(from,`${orgh}@c.us`)
            } catch {
                client.reply(from, mess.error.Ad, id)
            }
            break
        case '#okick':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner || !isAdmin) return client.reply(from, 'Perintah ini hanya untuk Owner & Admin bot', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *#okick* @tagmember', id)
             await client.sendTextWithMentions(from, `Perintah diterima. Akang gendaang, mari kita tendang ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return client.reply(from, mess.error.Ki, id)
                await client.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case '#kick':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam grup', id)
            if (!isGroupAdmins) return client.reply(from, 'Mana bisa borrr... ente kan bukan admin awkowako', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan Perintah ini, kirim perintah *#kick* @tagmember', id)
            await client.sendTextWithMentions(from, `Perintah diterima. Akang gendaang, mari kita tendang ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return client.reply(from, mess.error.Ki, id)
                await client.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case '#oleave':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner & Admin bot', id)
            await client.sendText(from,'BOT DIPERINTAHKAN KELUAR OLEH OWNER!!').then(() => client.leaveGroup(groupId))
            break
        case '#leave':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh admin group', id)
            await client.sendText(from,'Sayonara').then(() => client.leaveGroup(groupId))
            break
        case '#opromote':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner & Admin bot', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return client.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await client.promoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Perintah Owner diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case '#promote':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember', id)
            if (mentionedJidList.length >= 2) return client.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 user.', id)
            if (groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id)
            await client.promoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case '#odemote':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner & Admin bot', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return client.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await client.demoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Perintah Owner diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case '#demote':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', id)
            if (mentionedJidList.length === 0) return client.reply(from, 'Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin', id)
            if (mentionedJidList.length >= 2) return client.reply(from, 'Maaf, perintah ini hanya dapat digunakan kepada 1 orang.', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return client.reply(from, 'Maaf, user tersebut tidak menjadi admin.', id)
            await client.demoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case '#join':
        case '#botjoin':
        case '!botjoin':
        case '!join':
        case '#masukgrup':
            if (!isOwner) return client.reply(from, 'Jika ingin menambahkan bot ini ke grup pribadi anda, silahkan donasi.\nDonasi akan digunakan untuk pengoperasian dan pengmbangan bot ini\n\nHub wa.me/6282134320195?text=Min+mau+donasi+(nambah+grup)+', id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#join* linkgroup\n\nEx:\n#join https://chat.whatsapp.com/xnxx', id)
            const link = body.slice(6)
            const tGr = await client.getAllGroups()
            const minMem = 60
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await client.inviteInfo(link)
            if (!isLink) return client.reply(from, 'Ini link? 👊🤬', id)
            if (tGr.length > 100) return client.reply(from, 'Maaf jumlah group sudah maksimal!\nCoba lain kali ya', id)
            if (check.size < minMem) return client.reply(from, 'Member grup tidak melebihi 9, bot tidak bisa masuk', id)
            if (check.status === 200) {
                await client.joinGroupViaLink(link).then(() => client.reply(from, 'Bot akan segera masuk!\nJangan lupa baca rules bot agar grupmu tidak di blacklist', id))
            } else {
                client.reply(from, 'Link grup tidak valid atau bot sudah di keluarkan!', id)
            }
            break;
        case '#odelete':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner & Admin bot', id)
            if (!quotedMsg) return client.reply(from, 'Salah!!, kirim perintah *#delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return client.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case '#delete':
            if (!isGroupMsg) return client.reply(from, 'Fitur ini hanya bisa di gunakan dalam group', id)
            if (!isGroupAdmins) return client.reply(from, 'Fitur ini hanya bisa di gunakan oleh admin group', id)
            if (!quotedMsg) return client.reply(from, 'Salah!!, kirim perintah *#delete [tagpesanbot]*', id)
            if (!quotedMsgObj.fromMe) return client.reply(from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', id)
            client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case '#getses':
            if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)            
            const sesPic = await client.getSnapshot()
            client.sendFile(from, sesPic, 'session.png', 'Nih boss', id)
            break
        case '#nulis': 
        case '!nulis':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            if(args.length == 1) return await client.reply(message.from, "Maaf, tidak boleh kosong.")
            const getNulis = await gasNulis(body.slice(7)) 
            if(getNulis.status == true)
            {
                await client.sendImage(message.from, getNulis.base64, 'file.jpg', `Sukses nulis! ${mess.iklan}`, id)
            }else{
                await client.reply(message.from, getNulis.reason, `gagal nulis.`)
            }
        break
        case '#ban':
            if(!isGroupAdmins) return client.reply(from, 'Hanya admin yang bisa broo', message.id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                ban.push(mentionedJidList[i])
                fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
                client.reply(from, 'Sukses mint!', message.id)
            }
            break
        case '#unban':
            if(!isGroupAdmins) return client.reply(from, 'Hanya admin yang bisa bro', message.id)
            let inx = ban.indexOf(mentionedJidList[0])
            ban.splice(inx, 1)
            fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
            client.reply(from, 'Unbanned User!', message.id)
            break
        case '#oban':
            if(!isOwner) return client.reply(from, 'Hanya admin yang bisa broo', message.id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                ban.push(mentionedJidList[i])
                fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
                client.reply(from, 'Sukses tuan!', message.id)
            }
            break
        case '#ounban':
            if(!isOwner) return client.reply(from, 'Hanya Owner bro', message.id)
            let oinx = ban.indexOf(mentionedJidList[0])
            ban.splice(oinx, 1)
            fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
            client.reply(from, 'Unbanned User!', message.id)
            break
        case '#nulis2':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#nulis _teks_*', id)
            const nulis = encodeURIComponent(body.slice(7))
            client.reply(from, mess.wait, id)
            let urlnulis = `https://mhankbarbar.herokuapp.com/nulis?text=${nulis}&apiKey=${barbarkey}`
            await fetch(urlnulis, {method: "GET"})
            .then(res => res.json())
            .then(async (json) => {
                await client.sendFileFromUrl(from, json.result, 'Nulis.jpg', `Sukses nulis ${mess.iklan}`, id)
            }).catch(e => client.reply(from, "Error: "+ e));
            break
        /*case '#nulis3':
                    if (isBlocked) return await client.reply(from, mess.blockk, id)
                    if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                    if (args.length == 1) return client.reply(from, 'Kirim perintah *#lirik [optional]*, contoh *#lirik aku bukan boneka*', id)
                    client.reply(from, mess.wait, id)
                    const ngetik = body.slice(7)
                    const nullis = await nulis(ngetik)
                    client.sendImage(from, nullis, 'ngetik.png','neh...')
                    break*/
        case '#nulis3':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if(args.length == 1) return await client.reply(message.from, "Maaf, tidak boleh kosong.", id)
            const getNulis2 = await gasNulisFolio(body.slice(8))
            if(getNulis2.status == true)
            {
                await client.sendImage(message.from, getNulis2.base64, 'file.jpg', `Sukses nulis! ${mess.iklan}`, id)
            }else{
                await client.reply(message.from, getNulis2.reason, `gagal nulis.`, id)
            }
        break

        case '#lagu':
        case '!lagu':    if (isBlocked) return await client.reply(from, mess.blockk, id)
           // if (!isOwner) return client.reply(from, 'Fitur ini sedang dalam pengembangan', id)
            if(args.length == 1) return await client.reply(message.from, "Maaf, tidak boleh kosong.", id)
            await googleIt({'query': `site:youtube.com ${body.slice(6)}`}).then(async results => 
            {
                await googleIt({'query': `site:youtube.com ${body.slice(6)} lirik`}).then(async results2 => 
                { 
                    if(typeof results.length == 0) return await client.reply(message.from, "Maaf, lagu tidak ditemukan.", id)
                    
                    if(results.length !==0)
                    {
                        ytdl.getInfo(results[0].link).then(async info => {
                            if(info.videoDetails.lengthSeconds < 600)
                            {
                                try
                                {
                                    const rands = await genUniqueId(5)
                                    await client.reply(message.from, `Ditemukan! \nJudul : ${results[0].title}`, id)
                                    CreateMYSQL.query('INSERT INTO `lagu` SET ?', {type: 'lagu',url: results[0].link,urlv2: results2[0].link, rand: rands, nomer: message.from.split('@')[0].split('-')[0], judul: results[0].title, judulv2: results2[0].title}, async function (err, result) {
                                        if (err) return console.log(`bom => ${err}`); 
                                            await client.reply(message.from, `Jika judul/lagu sudah benar silahkan balas \n\n#down ${rands}\n\nUntuk mendownload lagu tersebut.`, id)
                                        });
                                }catch(err)
                                {
                                    console.log(err)
                                    await client.reply(message.from, "Maaf, error.", id)
                                }
                            }else{
                                await client.reply(message.from, "Maaf, lagu lebih dari 10 menit silahkan cari lagu yang lain.", id)
                            } 
                        }).catch(async e => {
                            console.log(e)
                        })
                    }
                }).catch(async e => {
                    console.log(e)
                    await client.reply(message.from, e.toString())
                })  
            }).catch(async e => {
                console.log(e)
                await client.reply(message.from, e.toString())
            })   
        break
        case '#down':
        case '!down':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            if(args.length == 1) return await client.reply(message.from, "Maaf, tidak boleh kosong.", id)
            CreateMYSQL.query(
            "SELECT url,urlv2,judul,judulv2,type FROM `lagu` WHERE `rand` = ? AND `nomer` = ? AND `type` in (?)",[args[1], message.from.split('@')[0].split('-')[0], ['lagu', 'laguv2', 'anime']],
            async function (err, result) 
            {
                if (err) console.log(err)
                if(result.length == 0) return await client.reply(message.from, 'Maaf, data/nomer tidak cocok didatabase kami.', id)

                if(result[0].type == 'lagu')
                {
                    await client.reply(message.from, `Okay, id download ditemukan. \n*_Tunggu proses uploading . . ._*`, id)
                    let enable = 1;
                    let attempt = 0;
                    const idYT = result[0].url.split('v=')[1]
                    
                    while(enable)
                    {
                        const token = await getToken(idYT)
                        const startDL = await startConvert(idYT, token.token)
                        if(attempt == 5) { 
                            enable = 0; 
                            await client.reply(message.from, `*Error, coba lagi. Jika masih error silahkan hubungi admin.*`, id)
                        }
                        if(typeof startDL !== 'undefined')
                        {
                            console.log(startDL)
                            const base64 = await base64Only(startDL) 
                            await client.reply(message.from,`Judul 👉 ${result[0].judul} ${mess.iklan}`, id) 
                            await client.sendImage(message.from, "data:audio/mpeg;base64," + base64, `${token.title}.mp3`, id); 
                            enable = 0; 
                        }   
                        if(typeof startDL == 'undefined') attempt++    
                    }
                        
                }    
            })
        break
        case '#fb':
        case '!fb':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            try {
                if (args.length === 1) return client.reply(from, 'Linknya mana?', id)
                const link = args[1]
                client.reply(from, mess.wait, id)
                if(!link.includes('facebook.com')) return await client.sendText(message.from, "Maaf, url tidak valid bersumber dari facebook.com", id)
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: true, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://sfull.net/', {waitUntil: 'networkidle2'});  
                    await page.type('input[id="url"]', link);
                    await page.keyboard.press('Enter');
                    await page.waitForSelector('div[class="abuttons"]', {visible: true})
                    const getDownload = await page.$$('div[class="abuttons"] a');
                    await getDownload[getDownload.length-1].click()
                    await page.waitForSelector('div[class="col-12 btn-sfull"]', {visible: true})
                    let spanHref = await page.$eval('div[class="col-12 btn-sfull"] center a', span => span.getAttribute('href'));  
                    await browser.close()
                    await client.sendFileFromUrl( message.from,  spanHref, `inifile.mp4`, `Sukses Download Facebok! ${mess.iklan}`, id)
                
                } catch (error) {
                    await client.sendText(message.from, "Maaf, tidak menemukan link download mungkin postingan private.", id)
                    await browser.close()
                }
            } catch (error) {
                console.log(error)
            }
        break
        case '#pin':
        case '#pinterest':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if(args.length == 1) return await client.reply(from, `Pastikan contoh benar!\n#pin <link>`, id)
            //if (args[1].includes('pinterest.com') != true || args[1].includes('pin.it') != true) return await client.reply(from, `Pastikan link berasal dari pinterest!`, id)
            else{
                const a = await PIN.PinterestAPI(args[1]) 
                const get64 = await getBase64(a)
                const getFileType = base64MimeType(get64).split('/')[1]
                await client.sendImage(from, get64, `inifile.${getFileType}`, `Sukses mengunduh pinterest. ${mess.iklan}`, id); 
            }
        break
        case '#zodiak':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if(args.length == 1) return await client.reply(from, 'Tidak boleh kosong', id);
            if(args[1]=='aries' || args[1]=='gemini' || args[1]=='leo' || args[1]=='libra' || args[1]=='sagitarius' || args[1]=='aquarius' || 
            args[1]=='taurus' || args[1]=='cancer' || args[1]=='virgo' || args[1]=='scorpio' || args[1]=='capricorn' || 
            args[1]=='pisces') {
                const zodiak = await ZODIAK.getZodiakToday(args[1])
                return await client.reply(from, `Zodiak ${args[1].toUpperCase()} Hari ini.\n
Umum :
${zodiak.umum}

Love :
${zodiak.love.replace('Couple', 'Couple')}

Keuangan :
${zodiak.keuangan} ${mess.iklan}`, id); 
            }
            await client.reply(from, `Kode : Tidak ditemukan!`, id)
        break
        case '#lirik':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length == 1) return client.reply(from, 'Kirim perintah *#lirik [optional]*, contoh *#lirik aku bukan boneka*', id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            client.reply(from, lirik, id)
            break
        case '#chord':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#chord [query]*, contoh *#chord aku bukan boneka*', id)
            const query__ = body.slice(7)
            const chord = await get.get('https://api-jojo.herokuapp.com/api/chord?q='+ query__).json()
            if (chord.error) return client.reply(from, chord.error, id)
            client.reply(from, chord.result, id)
            break
        case '#listdaerah':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const listDaerah = await get('https://mhankbarbar.herokuapp.com/daerah').json()
            client.reply(from, listDaerah, id)
            break
        case '#elainaadmin':
            let admn = `This is list of Elaina Admin\nTotal : ${adminNumber.length}\n`
            for (let i of adminNumber) {
                admn += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await client.reply(from, admn, id)
            break
        case '#listgroup':
            if(!isOwner) return client.reply(from, 'Perintah ini hanya untuk owner bot!', id)
            let gcm = `This is list of Group\nTotal : ${groupname.length}\n`
            for (let i of groupname) {
                gcm += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await client.reply(from, gcm, id)
            break
        case '#listblock':
            if(!isOwner) return client.reply(from, 'Perintah ini hanya untuk owner bot!', id)
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await client.reply(from, hih, id)
            break
        case '#jadwalshalat':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, '[❗] Kirim perintah *#jadwalShalat [daerah]*\ncontoh : *#jadwalShalat Tangerang*\nUntuk list daerah kirim perintah *#listDaerah*')
            const daerah = body.slice(14)
            const jadwalShalat = await get.get(`https://api-jojo.herokuapp.com/api/jadwalshalat?daerah=${daerah}`).json()
            if (jadwalShalat.error) return client.reply(from, jadwalShalat.error, id)
            const { Imsyak, Subuh, Dhuha, Dzuhur, Ashar, Maghrib, Isya } = await jadwalShalat
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `Jadwal shalat di ${daerah}, ${tgl}-${arrbulan[bln]}-${thn}\n\nImsyak : ${Imsyak}\nSubuh : ${Subuh}\nDhuha : ${Dhuha}\nDzuhur : ${Dzuhur}\nAshar : ${Ashar}\nMaghrib : ${Maghrib}\nIsya : ${Isya}`
            client.reply(from, resultJadwal, id)
            break
        case '#ping':
        case '#stat':
            const loadedMsg = await client.getAmountOfLoadedMessages()
            const chatIds = await client.getAllChatIds()
            const groups = await client.getAllGroups()
            const blok = await client.getBlockedIds()
            client.reply(from, `Penggunaan RAM: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*\nCPU: *${os.cpus().length}*\n\nStatistik *iluser_BOT* :\n- *${loadedMsg}* Pesan yang dimuat\n- *${groups.length}* Grup yang dimasuki bot\n- *${blok.length}* Kontak Terblokir\n- *${chatIds.length - groups.length}* Personal Chat\n- *${chatIds.length}* Total Chat\n\nKecepatan bot dalam meresponmu:\n${processTime(t, moment())} _Detik_`, id)
            break
        case '#listchannel':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            client.reply(from, listChannel, id)
            break
        case '#jadwaltv':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (args.length === 1) return client.reply(from, 'Kirim perintah *#jadwalTv [channel]*', id)
            const query = body.slice(10).toLowerCase()
            const jadwal = await jadwalTv(query)
            client.reply(from, jadwal, id)
            break
        case '#jadwaltvnow':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const jadwalNow = await get.get('https://api.haipbis.xyz/jadwaltvnow').json()
            client.reply(from, `Jam : ${jadwalNow.jam}\n\nJadwalTV : ${jadwalNow.jadwalTV}`, id)
            break
        case '#loli':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const loli = await get.get('https://mhankbarbar.herokuapp.com/api/randomloli').json()
            client.sendFileFromUrl(from, loli.result, 'loli.jpeg', 'FBI', id)
            break
        case '#waifu':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const waifu = await get.get('https://api-jojo.herokuapp.com/api/waifu').json()
            client.sendFileFromUrl(from, waifu.image, 'Waifu.jpg', `➸ Name : ${waifu.name}\n➸ Description : ${waifu.desc}\n\n➸ Source : ${waifu.source}`, id)
            break
        case '#husbu':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            client.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break
        case '#randomhentai':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (isGroupMsg) {
                if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan di group ini!', id)
                const hentai = await randomNimek('hentai')
                if (hentai.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, hentai, `Hentai${ext}`, 'Hentai!', id)
                break
            } else {
                const hentai = await randomNimek('hentai')
                if (hentai.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, hentai, `Hentai${ext}`, 'Hentai!', id)
            }
         case '#profile':
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            var role = 'None'
            if (isGroupMsg) {
              if (!quotedMsg) {
              var block = ban.includes(author)
              var pic = await client.getProfilePicFromServer(author)
              var namae = pushname
              var sts = await client.getStatus(author)
              var adm = isGroupAdmins
              var donate = isAdmin
              const { status } = sts
               if (pic == undefined) {
               var pfp = errorurl 
               } else {
               var pfp = pic
               } 
             await client.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *User Info: ${status}*\n\n*➸ Ban: ${block}*\n\n➸ *Role: ${role}*\n\n➸ *Admin: ${adm}*\n\n➸ *Special: ${donate}*`, id)
             } else if (quotedMsg) {
             var qmid = quotedMsgObj.sender.id
             var block = blockNumber.includes(qmid)
             var pic = await client.getProfilePicFromServer(qmid)
             var namae = quotedMsgObj.sender.name
             var sts = await client.getStatus(qmid)
             var adm = isGroupAdmins
             var donate = isAdmin
             const { status } = sts
              if (pic == undefined) {
              var pfp = errorurl 
              } else {
              var pfp = pic
              } 
             await client.sendFi

             leFromUrl(from, pfp, 'pfo.jpg', `**User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *User Info: ${status}*\n\n*➸ Ban: ${block}*\n\n➸ *Role: ${role}*\n\n➸ *Admin: ${adm}*\n\n➸ *Special: ${donate}*`)
             }
            }
            break
        case '#randomnsfwneko':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            if (isGroupMsg) {
                if (!isNsfw) return client.reply(from, 'Command/Perintah NSFW belum di aktifkan di group ini!', id)
                const nsfwneko = await randomNimek('nsfw')
                if (nsfwneko.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, nsfwneko, `nsfwNeko${ext}`, 'Nsfwneko!', id)
            } else {
                const nsfwneko = await randomNimek('nsfw')
                if (nsfwneko.endsWith('.png')) {
                    var ext = '.png'
                } else {
                    var ext = '.jpg'
                }
                client.sendFileFromUrl(from, nsfwneko, `nsfwNeko${ext}`, 'Nsfwneko!', id)
            }
            break
        case '#randomnekonime':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const nekonime = await get.get('https://mhankbarbar.herokuapp.com/api/nekonime').json()
            if (nekonime.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            client.sendFileFromUrl(from, nekonime.result, `Nekonime${ext}`, `Nekonime! ${mess.iklan}`, id)
            break
        case '#randomtrapnime':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const trap = await randomNimek('trap')
            if (trap.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            client.sendFileFromUrl(from, trap, `trapnime${ext}`, `Trapnime! ${mess.iklan}`, id)
            break
        case '#randomanime':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const nime = await randomNimek('anime')
            if (nime.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            client.sendFileFromUrl(from, nime, `Randomanime${ext}`, `Randomanime! ${mess.iklan}`, id)
            break
        case '#asu':
        case '#anjing':
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            client.sendFileFromUrl(from, kya, 'Dog.jpeg', `Dah mirip *${undefined, pushname}* belum?`, id) 
            break
        case '#qrcode':
           if (isBlocked) return await client.reply(from, mess.blockk, id)
           if(!args.lenght >= 2) return
           let qrcodes = body.slice(8)
           await client.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', 'Process sukses!')
           break
        case '#ptl':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
            let pep = pptl[Math.floor(Math.random() * pptl.length)]
            client.sendFileFromUrl(from, pep, 'pptl.jpg', `Hai *${undefined, pushname}* sayang`, message.id)
            break
        case '#wallanime' :
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const walnime = ['https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
            let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
            client.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', id)
            break
        case '#kucing':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            client.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png',`Aku imut ga om/tante? 🥺 ${mess.iklan}`)
            break
        case '#pokemon':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            q7 = Math.floor(Math.random() * 890) + 1;
            client.sendFileFromUrl(from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png',)
            break
        case '#quote':
        case '#quotes':
        case '!quotes':
        case '!quote':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            const quotes = await get.get('https://mhankbarbar.herokuapp.com/api/randomquotes').json()
            client.reply(from, `${quotes.quotes}\n\n- ${quotes.author}`, id)
            break;
        case '#quotesnime':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const skya = await get.get('https://mhankbarbar.herokuapp.com/api/quotesnime/random').json()
            skya_ = skya.data
            client.reply(from, `${skya_.quote}\n\n_~${skya_.character}_\n\n*Anime* : ${skya_.anime}`, id)
            break;
        case '#meme':
            if (isBlocked) return await client.reply(from, mess.blockk, id)
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes');
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            client.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`)
            break
        case '#donasi':
        case '#donate':
            client.reply(from, donatee.replace(undefined, pushname), id)
            break
        case '#help':
        case '#menu':
        case '#bot':
        case '!help':
        case '!menu':
    if (isBlocked) return await client.reply(from, mess.blockk, id)
            client.reply(from, help.replace(undefined, pushname), id)
            //client.reply(from, `Tebak aja sendiri menunya apa aja`, id)
            /*if (isGroupMsg){
                await client.reply(from, help.replace(undefined, pushname), id)
                client.sendText(from, `*INFO*\nJoin channel telegram untuk mendapatkan update informasi tentang bot\nhttps://t.me/iluser_BOT\n\nCara Penggunaan Bot\nhttps://youtu.be/WOR0KltTbFc\n\n*#join =* Untuk mengundang bot ke dalama grupmu`)
            }else{
                await client.reply(from, help.replace(undefined, pushname), id)
                await client.sendText(from, `*INFO*\nJoin channel telegram untuk mendapatkan update informasi tentang bot\nhttps://t.me/iluser_BOT\n\nCara Penggunaan Bot\nhttps://youtu.be/WOR0KltTbFc\n\n*#join =* Untuk mengundang bot ke dalama grupmu`)
                await client.deleteChat(chatId)
            }*/
            break;
        case '#info':
            client.reply(from, readme, id)
            break;
        case '#menuadmin':
        case '#admin':
        case '#adminmenu':
        	if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            client.reply(from, menuadmin, id)
            break;
        case '#about':
            client.reply(from, info.replace(undefined, pushname), id)
            break;
        case '#snk':
            client.reply(from, snk, id)
            break;
        case '#rules':
            client.reply(from, rules, id)
            break;

        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //client.kill().then(a => console.log(a))
    }
}
