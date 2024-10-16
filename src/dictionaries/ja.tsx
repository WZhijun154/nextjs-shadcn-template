import { Medal, Map, Plane, Gift, ChartBar, Wallet, Boxes } from "lucide-react";
import { TODAY_YEAR, SUPPORT_EMAIL } from "@/lib/utils-server-side";

const brandName = "ShadcnUI/Nextjs";
const lang = "ja";

export const ja = {
  lang: lang,
  brandName: brandName,
  landingPage: {
    metadata: {
      title: `ホームページタイトル`,
      description: "ホームページの説明",
    },
    hero: {
      h1: "成功のためのAIパワードパートナー",
      description:
        "プロジェクトに必要なセクションでNextjsランディングページを簡単に構築します。",
      buttonText: "始めましょう",
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
      h2: "素晴らしい機能",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      features: [
        {
          h3: "レスポンシブデザイン",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Medal strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "直感的なユーザーインターフェース",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Map strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "AIパワードインサイト",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
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
      h2: "すべてのアイデアとコンセプトを1つのインターフェースで",
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
      description: "一般的な質問への回答を見つけてください...",
      items: [
        {
          h3: "このテンプレートは無料ですか？",
          h4: "はい。これは無料のChadcnUIテンプレートです。",
          value: "item-1",
        },
        {
          h3: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
          h4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
          value: "item-2",
        },
        {
          h3: "Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?",
          h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
          value: "item-3",
        },
        {
          h3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
          h4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          value: "item-4",
        },
        {
          h3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?",
          h4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
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
            href: `/${lang}`,
          },
        ],
      },
      {
        category: "概要",
        items: [
          {
            label: "機能",
            href: `/${lang}#features`,
          },
          // {
          //   label: "価格",
          //   href: `/${lang}#pricing`,
          // },
          {
            label: "FAQ",
            href: `/${lang}#faq`,
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
        href: `/${lang}#features`,
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
        href: `/${lang}#faq`,
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
