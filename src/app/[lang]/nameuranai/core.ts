import { getKakusu, imi, kikkyou } from "@/lib/data";
import { kanji } from "@/lib/data";

export const check = (myoji="山田", namae="太郎") => {
    let tenkaku: number = 0
    let tenkaku_kekka: string = ""

    let tikaku: number = 0
    let tikaku_kekka: string = ""

    let jinkaku: number = 0
    let jinkaku_kekka: string = ""

    let soukaku: number = 0 
    let soukaku_kekka: string = ""

    let gaikaku: number = 0     
    let gaikaku_kekka: string = ""

    // 天格
    for (let a = 0; a < myoji.length; a++) {
        for (let i = 0; i < kanji.length; i++) {
            if (myoji[a] === kanji[i]) {
                tenkaku = tenkaku + getKakusu(kanji[i]);
            }
        }
    }

    // 地格
    for (let a = 0; a < namae.length; a++) {
        for (let i = 0; i < kanji.length; i++) {
            if (namae[a] === kanji[i]) {
                tikaku = tikaku + getKakusu(kanji[i]);
            }
        }
    }

    tikaku_kekka = imi[parseInt(tikaku.toString())];
    
    // 総画
    for (let a = 0; a < myoji.length; a++) {
        for (let i = 0; i < kanji.length; i++) {
            if (myoji[a] === kanji[i]) {
                soukaku = soukaku + getKakusu(kanji[i]);
            }
        }
    }

    for (let a = 0; a < namae.length; a++) {
        for (let i = 0; i < kanji.length; i++) {
            if (namae[a] === kanji[i]) {
                soukaku = soukaku + getKakusu(kanji[i]);
            }
        }
    }
                
    soukaku_kekka = imi[parseInt(soukaku.toString())];

    // 人格
    for (let i = 0; i < kanji.length; i++) {
        if (myoji[myoji.length - 1] === kanji[i]) {
            jinkaku = jinkaku + getKakusu(kanji[i]);
            break;
        }
    }

    for (let i = 0; i < kanji.length; i++) {
        if (namae[0] === kanji[i]) {
            jinkaku = jinkaku + getKakusu(kanji[i]);
            break;
        }
    }

    jinkaku_kekka = imi[parseInt(jinkaku.toString())];

    // 外格
    for (let i = 0; i < kanji.length; i++) {
        if (myoji[0] === kanji[i]) {
            gaikaku = gaikaku + getKakusu(kanji[i]);
            break;
        }
    }
    for (let i = 0; i < kanji.length; i++) {
        if (namae[namae.length - 1] === kanji[i]) {
            gaikaku = gaikaku + getKakusu(kanji[i]);
            break;
        }
    }       

    gaikaku_kekka = imi[parseInt(gaikaku.toString())];


    return `〜${myoji} ${namae}さんの姓名判断占い結果〜

    総画:${Math.round(soukaku)}画、結果:「${soukaku_kekka}」、吉凶:「${kikkyou[soukaku as keyof typeof kikkyou]}」
            姓と名の画数を合計したもので全体運・生涯運で一生を通じた運を表す

    地格:${Math.round(tikaku)}画、結果:「${tikaku_kekka}」、吉凶:「${kikkyou[tikaku as keyof typeof kikkyou]}」
            名に当たる画数でその人の基本的な部分を表す
    
    天格:${Math.round(tenkaku)}画、結果:「${tenkaku_kekka}」、吉凶:「${kikkyou[tenkaku as keyof typeof kikkyou]}」
            姓にあたる部分で先祖から与えられた天運を表す
    
    人格:${Math.round(jinkaku)}画、結果:「${jinkaku_kekka}」、吉凶:「${kikkyou[jinkaku as keyof typeof kikkyou]}」
            姓の最後と名の頭文字の画数を足したものでその人の内面を表す
                    
    外格:${Math.round(gaikaku)}画、結果:「${gaikaku_kekka}」、吉凶:「${kikkyou[gaikaku as keyof typeof kikkyou]}」
            総格から人格を引いたもので対人関係や対外的な要素を表す
            
    ※あくまでこれは、占いの結果に過ぎません※`;


}