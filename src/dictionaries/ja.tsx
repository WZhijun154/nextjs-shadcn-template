import { Medal, Map, Plane, Gift, ChartBar, Wallet, Boxes } from "lucide-react";
import Link from "next/link";

export const ja = {
  landingPage: {
    metadata: {
      title: "ホームページのタイトル",
      description: "ホームページの説明",
    },
    hero: {
      h1: "成功のためのAIパワードパートナー",
      description:
        "プロジェクトに必要なセクションでNextjsランディングページを簡単に構築します。",
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
          image: "/looking-ahead.png",
        },
        {
          h3: "直感的なユーザーインターフェース",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          image: "/reflecting.png",
        },
        {
          h3: "AIパワードインサイト",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          image: "/growth.png",
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
        // ... other testimonials ...
      ],
    },
    team: {
      h2: "私たちのチームを紹介",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
      items: [
        {
          image: "https://i.pravatar.cc/150?img=35",
          name: "エマ・スミス",
          position: "プロダクトマネージャー",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
          socialNetworks: [
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/in/leopoldo-miranda/",
            },
            // ... other social networks ...
          ],
        },
        // ... other team members ...
      ],
    },
    faq: {
      h2: "よくある質問",
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
  contactUs: (
    <p className="font-medium mt-4">
      まだ質問がありますか？{" "}
      <Link
        rel="noreferrer noopener"
        href="#"
        className="text-primary transition-all border-primary hover:border-b-2"
      >
        お問い合わせ
      </Link>
    </p>
  ),
};
