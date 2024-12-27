import { Medal, Map, Plane, ChartBar, Wallet, Boxes } from "lucide-react";
import { TODAY_YEAR, SUPPORT_EMAIL } from "@/lib/utils-server-side";

const brandName = "AI占い";
const lang = "ja";

export const ja = {
  lang: lang,
  brandName: `${brandName}   社名占い`,
  landingPage: {
    metadata: {
      title: `社名占い | AI占い`,
      description: "あなたのビジネスに最適な社名を見つけるためのAIツール。",
    },
    hero: {
      h1: "起業を成功させるための社名占い",
      description:
        "あなたのビジネスに最適な社名を見つけるためのAIパワードツール",
      buttonText: "始めましょう",
    },
    howItWorks: {
      h2: "簡単なステップで社名占いをはじめ",
      description:
        "",
      steps: [
        {
          h3: "ステップ1",
          description:
            "社名を入力します。",
          icon: <Medal strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "ステップ2",
          description:
            "「この社名で占う」ボタンを押します。",
          icon: <Map strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "ステップ3",
          description:
            "結果が表示されます。",
          icon: <Plane strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
      ],
    },
    greatFeatures: {
      h2: "素晴らしい機能",
      description:
        "社名占いは社名を占いではなく、あなたのビジネスの成功をサポートします。",
      features: [
        {
          h3: "シンプルなUI",
          description:
            "社名占いは、ユーザーの目に優しいシンプルなデザインを提供します。",
          icon: <Medal strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "AI視点の占い",
          description:
            "AIの視点から社名を占い、ビジネスの成功をサポートします。",
          icon: <Map strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "安全性を重視",
          description:
            "社名占いは、ユーザーのデータを安全に保護します。",
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
      h2: "成功のビジネスを成し遂げ、ますは社名占いから始めましょう。",
      description:
        "AIを活用した社名占いで、ビジネスの成功を後押しします。",
      requestDemoButton: "始めましょう",
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
          h3: "社名占いは無料ですか？",
          h4: "はい。社名占いは無料です。",
          value: "item-1",
        },
        {
          h3: "どのような技術を使用していますか？",
          h4: "私たちは伝統的な占い方法を使用していますが、AIを活用した占いも提供しています。",
          value: "item-2",
        },
        {
          h3: "データは安全に保護されていますか？",
          h4: "社名占いは、ユーザーのデータを安全に保護します。",
          value: "item-3",
        },
        {
          h3: "社名占いの結果はどのくらいの精度がありますか？",
          h4: "社名占いは、AIと伝統的な占い方法を組み合わせて高い精度を提供します。",
          value: "item-4",
        },
        {
          h3: "社名占いの結果はどのように活用できますか？",
          h4: "社名占いの結果は、ビジネスのブランディングやマーケティング戦略に役立てることができます。",
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
