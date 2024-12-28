import { Medal, Map, Plane, Gift, ChartBar, Wallet, Boxes } from "lucide-react";
import { TODAY_YEAR, SUPPORT_EMAIL } from "@/lib/utils-server-side";

const brandName = "明日の占い.online";
const lang = "ja";

export const ja = {
  lang: lang,
  brandName: brandName,
  landingPage: {
    metadata: {
      title: `明日の占い.online`,
      description: "明日の占い.onlineは、明日の運勢を占うための最適なウェブサイトです。毎日の運勢を確認し、明日の運勢を知ることで、より良い一日を迎えましょう。",
    },
    hero: {
      h1: "明日の占い.online",
      description:
        "明日の占い.onlineは、明日の運勢を占うための最適なウェブサイトです。毎日の運勢を確認し、明日の運勢を知ることで、より良い一日を迎えましょう。",
      buttonText: "明日の運勢を占う",
    },
    howItWorks: {
      h2: "ステップバイステップガイド",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      steps: [
        {
          h3: "アクセシビリティ",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Medal strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "コミュニティ",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Map strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "スケーラビリティ",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Plane strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "ゲーミフィケーション",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Gift strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
      ],
    },
    greatFeatures: {
      h2: "充実した占い機能",
      description:
        "明日の運勢を詳しく知るための3つの主要機能をご用意しています。",
      features: [
        {
          h3: "AIによる個別化された占い結果",
          description:
            "最新のAI技術を活用し、あなたの生年月日や星座に基づいて、明日の運勢を詳細に分析。より正確で個人に最適化された占い結果をお届けします。",
          icon: <Medal strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "運勢カレンダー機能",
          description:
            "過去の運勢履歴と未来の予測を一目で確認できるカレンダー機能を搭載。毎日の運勢の変化を追跡し、より良い選択のためのガイダンスを提供します。",
          icon: <Map strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "詳細な運勢レポート",
          description:
            "恋愛運、金運、仕事運など、各分野における詳細な占い結果を提供。さらに、ラッキーアイテムやラッキーカラーなど、明日をより良い日にするためのアドバイスも含まれています。",
          icon: <Plane strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
      ],
    },
    services: {
      h2: "クライアント中心のサービス",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      items: [
        {
          h3: "コードコラボレーション",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: (
            <ChartBar strokeWidth={1.5} className="text-primary w-10 h-10" />
          ),
        },
        {
          h3: "タスクの自動化",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Boxes strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "データ分析",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Wallet strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
      ],
    },
    cta: {
      h2: "すべてのアイ���アとコンセプトを1つのインターフェースで",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      requestDemoButton: "デモをリクエスト",
      viewAllFeaturesButton: "すべての機能を見る",
    },
    testimonials: {
      h2: "このランディングページが愛される理由を発見",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
      items: [
        {
          image: "https://github.com/shadcn.png",
          name: "John Doe Nextjs",
          userName: "@john_Doe",
          comment: "このランディングページは素晴らしいです！",
        },
        {
          image: "https://github.com/shadcn.png",
          name: "John Doe Nextjs",
          userName: "@john_Doe1",
          comment:
            "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        },
        {
          image: "https://github.com/shadcn.png",
          name: "John Doe Nextjs",
          userName: "@john_Doe2",
          comment:
            "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        {
          image: "https://github.com/shadcn.png",
          name: "John Doe Nextjs",
          userName: "@john_Doe3",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
          image: "https://github.com/shadcn.png",
          name: "John Doe Nextjs",
          userName: "@john_Doe4",
          comment:
            "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
        },
        {
          image: "https://github.com/shadcn.png",
          name: "John Doe Nextjs",
          userName: "@john_Doe5",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          image: "https://github.com/shadcn.png",
          name: "John Doe Nextjs",
          userName: "@john_Doe5",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          image: "https://github.com/shadcn.png",
          name: "John Doe Nextjs",
          userName: "@john_Doe5",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    team: {
      h2: "私たちのチームを紹介",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
      items: [
        {
          image: "https://i.pravatar.cc/150?img=35",
          name: "Emma Smith",
          position: "プロダクトマネージャー",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
          socialNetworks: [
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/in/leopoldo-miranda/",
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/",
            },
          ],
        },
        {
          image: "https://i.pravatar.cc/150?img=60",
          name: "John Doe",
          position: "テックリード",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
          socialNetworks: [
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/in/leopoldo-miranda/",
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/",
            },
          ],
        },
        {
          image: "https://i.pravatar.cc/150?img=36",
          name: "Ashley Ross",
          position: "フロントエンドデベロッパー",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
          socialNetworks: [
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/in/leopoldo-miranda/",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/",
            },
          ],
        },
        {
          image: "https://i.pravatar.cc/150?img=17",
          name: "Bruce Rogers",
          position: "バックエンドデベロッパー",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
          socialNetworks: [
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/in/leopoldo-miranda/",
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/",
            },
          ],
        },
      ],
    },
    faq: {
      h2: "よくある質問",
      description: "明日の占いについてよくある質問への回答をご覧ください",
      items: [
        {
          h3: "明日の占いを無料で占うことはできますか？",
          h4: "はい、明日の運勢を無料で占うことができます。基本的な運勢診断は無料でご利用いただけます。より詳細な運勢分析やパーソナライズされた占い結果をご希望の場合は、プレミアムサービスをご検討ください。",
          value: "item-1",
        },
        {
          h3: "明日の運勢占いの精度はどのくらいですか？",
          h4: "当サイトでは、最新のAI技術と伝統的な占星術の知識を組み合わせることで、高い精度の運勢予測を実現しています。さらに、あなたの生年月日や星座情報を基に、個人に最適化された結果をお届けしています。",
          value: "item-2",
        },
        {
          h3: "明日の占いの結果はいつ更新されますか？",
          h4: "運勢の結果は毎日0時に更新されます。翌日の運勢を前日から確認することができるため、事前に準備を整えることが可能です。また、運勢カレンダー機能では、過去の運勢履歴や将来の傾向も確認できます。",
          value: "item-3",
        },
        {
          h3: "恋愛運や金運など、特定の運勢だけを占うことはできますか？",
          h4: "はい、可能です。恋愛運、金運、仕事運、健康運など、分野別の運勢診断に対応しています。それぞれの分野について、詳細な占い結果とアドバイスを提供しています。",
          value: "item-4",
        },
        {
          h3: "運勢の結果を改善するためのアドバイスはありますか？",
          h4: "はい、運勢診断には具体的なアドバイスが含まれています。その日のラッキーカラー、ラッキーアイテム、開運アドバイスなど、運勢を良い方向に導くためのガイダンスを提供しています。また、定期的に運勢をチェックすることで、より効果的に運気の流れを活用できます。",
          value: "item-5",
        },
      ],
    },
  },
  footer: {
    subSections: [
      {
        category: "プラットフォーム",
        items: [
          {
            label: "ウェブ",
            href: `/`,
          },
        ],
      },
      {
        category: "概要",
        items: [
          {
            label: "機能",
            href: `#features`,
          },
          // {
          //   label: "価格",
          //   href: `/${lang}#pricing`,
          // },
          {
            label: "FAQ",
            href: `#faq`,
          },
        ],
      },
      // {
      //   category: "他のツールを探す",
      //   items: [
      //     {
      //       label: "Youtube",
      //       href: "https://www.youtube.com/",
      //     },
      //   ],
      // },
      {
        category: "法的情報",
        items: [
          {
            label: "お問い合わせ",
            href: `mailto:${SUPPORT_EMAIL}`,
          },
        ],
      },
    ],
    copyright: `${TODAY_YEAR} ${brandName}. すべての権利を保有します。`,
  },
  navbar: {
    RouteList: [
      {
        href: `#features`,
        label: "機能",
      },
      // {
      //   href: `/${lang}#testimonials`,
      //   label: "お客様の声",
      // },
      // {
      //   href: `/${lang}#pricing`,
      //   label: "価格",
      // },
      {
        href: `#faq`,
        label: "FAQ",
      },
    ],
  },
  comingSoon: {
    h2: "近日公開",
    description:
      "この機能をお届けするために一生懸命取り組んでいます。お楽しみに！",
  },
};
