import { Locale } from "@/lib/utils-common";
import { Section } from "@/components/section";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { LocalizeLink } from "@/components/localize-link";
import { SeizaChecker } from "./client-side";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return {
    title: "12星座早見表、星座と誕生日をチェック",
    description:
      "あなたの星座がいつかすぐ分かる、12星座と誕生日の早見表。",
  };
}

const zodiacSigns = [
  { sign: "おひつじ座", image: "/aries.svg", period: "3月21日 - 4月19日", latin: "Aries アリエス", link: "https://ja.wikipedia.org/wiki/%E3%81%8A%E3%81%B2%E3%81%A4%E3%81%98%E5%BA%A7" },
  { sign: "おうし座", image: "/taurus.svg", period: "4月20日 - 5月20日", latin: "Taurus タウルス",  link: "https://ja.wikipedia.org/wiki/%E3%81%8A%E3%81%86%E3%81%97%E5%BA%A7"  },
  { sign: "ふたご座", image: "/gemini.svg", period: "5月21日 - 6月20日", latin: "Gemini ゲミニ",  link: "https://ja.wikipedia.org/wiki/%E3%81%B5%E3%81%9F%E3%81%94%E5%BA%A7"  },
  { sign: "かに座", image: "/cancer.svg", period: "6月21日 - 7月22日", latin: "Cancer カンケル",  link: "https://ja.wikipedia.org/wiki/%E3%81%8B%E3%81%AB%E5%BA%A7"  },
  { sign: "しし座", image: "/leo.svg", period: "7月23日 - 8月22日", latin: "Leo レオ",  link: "https://ja.wikipedia.org/wiki/%E3%81%97%E3%81%97%E5%BA%A7"  },
  { sign: "おとめ座", image: "/virgo.svg", period: "8月23日 - 9月22日", latin: "Virgo ヴィルゴ" ,  link: "https://ja.wikipedia.org/wiki/%E3%81%8A%E3%81%A8%E3%82%81%E5%BA%A7" },
  { sign: "てんびん座", image: "/libra.svg", period: "9月23日 - 10月22日", latin: "Libra リブラ",  link: "https://ja.wikipedia.org/wiki/%E3%81%A6%E3%82%93%E3%81%B3%E3%82%93%E5%BA%A7"  },
  { sign: "さそり座", image: "/scorpio.svg", period: "10月23日 - 11月21日", latin: "Scorpio スコルピウス",  link: "https://ja.wikipedia.org/wiki/%E3%81%95%E3%81%9D%E3%82%8A%E5%BA%A7"  },
  { sign: "いて座", image: "/sagittarius.svg", period: "11月22日 - 12月21日", latin: "Sagittarius サギッタリウス",  link: "https://ja.wikipedia.org/wiki/%E3%81%84%E3%81%A6%E5%BA%A7"  },
  { sign: "やぎ座", image: "/capricorn.svg", period: "12月22日 - 1月19日", latin: "Capricorn カプリコルヌス",  link: "https://ja.wikipedia.org/wiki/%E3%82%84%E3%81%8E%E5%BA%A7"  },
  { sign: "みずがめ座", image: "/aquarius.svg", period: "1月20日 - 2月18日", latin: "Aquarius アクアリウス", link: "https://ja.wikipedia.org/wiki/%E3%81%BF%E3%81%9A%E3%81%8C%E3%82%81%E5%BA%A7"  },
  { sign: "うお座", image: "/pisces.svg", period: "2月19日 - 3月20日", latin: "Pisces ピスケス",  link: "https://ja.wikipedia.org/wiki/%E3%81%86%E3%81%8A%E5%BA%A7"  },
];




export default async function AquariusPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <Section>
      <div className="flex items-center justify-center my-4 flex-col">
        <h1 className="custom-h1">12星座早見表</h1>
        <p className="custom-muted-description custom-margin-after-title">星座と誕生日をチェック</p>
      </div>
     
      <SeizaChecker />
      <p className="custom-muted-description text-center md:hidden">
        12星座早見表は、各星座の期間と誕生日を簡単に確認できる便利なツールです。星座に基づく性格や運勢の傾向を知ることで、日常生活や人間関係に役立てることができます。自分や友人、家族の星座をチェックして、星座にまつわる興味深い情報を発見しましょう。
      </p>
      <Table className="mt-8 border border-gray-400 shadow-lg rounded-lg overflow-hidden">
        <TableHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <TableRow>
            <TableHead className="py-3 px-6 text-center font-semibold text-lg">星座</TableHead>
            <TableHead className="py-3 px-6 text-center font-semibold text-lg">ラテン語</TableHead>
            <TableHead className="py-3 px-6 text-center font-semibold text-lg">誕生日</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border border-gray-200 dark:border-gray-600">
          {zodiacSigns.map(({ sign, image, period, latin, link }) => (
            <TableRow key={sign} className="hover:bg-gray-100 dark:hover:bg-gray-700 duration-300 hover:scale-110 transition-all">
              <TableCell className="py-4 px-6 border border-gray-200 dark:border-gray-600 text-center">
                <div className="flex items-center justify-center">
                <LocalizeLink href={link} lang={lang} className="ml-2 text-muted-foreground hover:text-primary transition-all">
                  <div className="max-w-[200px] flex items-center">
                    <Image src={image} alt={sign} width={40} height={40} className="mr-4" />
                    <span className="font-medium hover:underline transition-all">{sign}</span>
                  </div>
                  </LocalizeLink>
                </div>
              </TableCell>
              <TableCell className="py-4 px-6 border border-gray-200 dark:border-gray-600 text-center">{latin}</TableCell>
              <TableCell className="py-4 px-6 border border-gray-200 dark:border-gray-600 text-center">{period}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}
