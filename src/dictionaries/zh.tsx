import { Medal, Map, Plane, Gift, ChartBar, Wallet, Boxes } from "lucide-react";
import Link from "next/link";
import { TODAY_YEAR } from "@/lib/utils-server-side";

const brandName = "ShadcnUI/Nextjs";

export const zh = {
  brandName: brandName,
  landingPage: {
    metadata: {
      title: "主页标题",
      description: "主页描述",
    },
    hero: {
      h1: "成功的AI驱动合作伙伴",
      description: "轻松构建您的Nextjs着陆页，包含项目所需的部分。",
    },
    howItWorks: {
      h2: "操作步骤指南",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      steps: [
        {
          h3: "可访问性",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Medal strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "社区",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Map strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "可扩展性",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Plane strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "游戏化",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Gift strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
      ],
    },
    greatFeatures: {
      h2: "优秀功能",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      features: [
        {
          h3: "响应式设计",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          image: "/looking-ahead.png",
        },
        {
          h3: "直观的用户界面",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          image: "/reflecting.png",
        },
        {
          h3: "AI驱动的洞察",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          image: "/growth.png",
        },
      ],
    },
    services: {
      h2: "以客户为中心的服务",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      items: [
        {
          h3: "代码协作",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: (
            <ChartBar strokeWidth={1.5} className="text-primary w-10 h-10" />
          ),
        },
        {
          h3: "任务自动化",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Boxes strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "数据分析",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Wallet strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
      ],
    },
    cta: {
      h2: "将所有想法和概念集中在一个界面中",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      requestDemoButton: "请求演示",
      viewAllFeaturesButton: "查看所有功能",
    },
    testimonials: {
      h2: "发现人们为何喜爱这个着陆页",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
      items: [
        {
          image: "https://github.com/shadcn.png",
          name: "John Doe Nextjs",
          userName: "@john_Doe",
          comment: "这个着陆页太棒了！",
        },
        // ... other testimonials ...
      ],
    },
    team: {
      h2: "认识我们的团队",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
      items: [
        {
          image: "https://i.pravatar.cc/150?img=35",
          name: "Emma Smith",
          position: "产品经理",
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
      h2: "常见问题",
      items: [
        {
          h3: "这个模板是免费的吗？",
          h4: "是的。这是一个免费的ChadcnUI模板。",
          value: "item-1",
        },
        // ... other FAQs ...
      ],
    },
  },
  contactUs: (
    <p className="font-medium mt-4">
      还有问题吗？{" "}
      <Link
        rel="noreferrer noopener"
        href="#"
        className="text-primary transition-all border-primary hover:border-b-2"
      >
        联系我们
      </Link>
    </p>
  ),
  footer: {
    subSections: [
      {
        h3: "平台",
        items: [
          {
            label: "网页",
            href: "/",
          },
        ],
      },
      {
        h3: "关于",
        items: [
          {
            label: "功能",
            href: "/en#features",
          },
          {
            label: "定价",
            href: "/en#pricing",
          },
          {
            label: "常见问题",
            href: "/en#faq",
          },
        ],
      },
      {
        h3: "寻找更多工具",
        items: [
          {
            label: "Youtube",
            href: "https://www.youtube.com/",
          },
        ],
      },
    ],
    copyright: `&copy; ${TODAY_YEAR} ${brandName}. All rights reserved.`,
  },
};
