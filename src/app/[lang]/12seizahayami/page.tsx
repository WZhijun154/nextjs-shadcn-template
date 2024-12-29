import { Locale } from "@/lib/utils-common";
import { Section } from "@/components/section";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
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
  { sign: "おひつじ座", image: "/aries.svg", period: "3月21日 - 4月19日", latin: "Aries アリエス" },
  { sign: "おうし座", image: "/taurus.svg", period: "4月20日 - 5月20日", latin: "Taurus タウルス" },
  { sign: "ふたご座", image: "/gemini.svg", period: "5月21日 - 6月20日", latin: "Gemini ゲミニ" },
  { sign: "かに座", image: "/cancer.svg", period: "6月21日 - 7月22日", latin: "Cancer カンケル" },
  { sign: "しし座", image: "/leo.svg", period: "7月23日 - 8月22日", latin: "Leo レオ" },
  { sign: "おとめ座", image: "/virgo.svg", period: "8月23日 - 9月22日", latin: "Virgo ヴィルゴ" },
  { sign: "てんびん座", image: "/libra.svg", period: "9月23日 - 10月22日", latin: "Libra リブラ" },
  { sign: "さそり座", image: "/scorpio.svg", period: "10月23日 - 11月21日", latin: "Scorpio スコルピウス" },
  { sign: "いて座", image: "/sagittarius.svg", period: "11月22日 - 12月21日", latin: "Sagittarius サギッタリウス" },
  { sign: "やぎ座", image: "/capricorn.svg", period: "12月22日 - 1月19日", latin: "Capricorn カプリコルヌス" },
  { sign: "みずがめ座", image: "/aquarius.svg", period: "1月20日 - 2月18日", latin: "Aquarius アクアリウス" },
  { sign: "うお座", image: "/pisces.svg", period: "2月19日 - 3月20日", latin: "Pisces ピスケス" },
];

export default async function AquariusPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <Section>
      <div className="flex items-center justify-center my-4">
        <h1 className="custom-h1">12星座早見表、星座と誕生日をチェック</h1>
      </div>
      <p className="custom-muted-description text-center hidden">
        12星座早見表は、各星座の期間と誕生日を簡単に確認できる便利なツールです。星座に基づく性格や運勢の傾向を知ることで、日常生活や人間関係に役立てることができます。自分や友人、家族の星座をチェックして、星座にまつわる興味深い情報を発見しましょう。
      </p>
      <Table className="mt-8 border border-gray-400 shadow-lg rounded-lg overflow-hidden">
        <TableHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <TableRow>
            <TableHead className="py-3 px-6 text-center font-semibold text-lg">星座</TableHead>
            <TableHead className="py-3 px-6 text-center font-semibold text-lg">誕生日</TableHead>
            <TableHead className="py-3 px-6 text-center font-semibold text-lg">ラテン語</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border border-gray-200 dark:border-gray-600">
          {zodiacSigns.map(({ sign, image, period, latin }) => (
            <TableRow key={sign} className="hover:bg-gray-100 dark:hover:bg-gray-700 duration-300 hover:scale-110 transition-all">
              <TableCell className="py-4 px-6 border border-gray-200 dark:border-gray-600 text-center">
                <div className="flex items-center justify-center">
                  <div className="max-w-[140px] flex items-center">
                    <Image src={image} alt={sign} width={40} height={40} className="mr-4" />
                    <span className="font-medium">{sign}</span>
                  </div>
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
