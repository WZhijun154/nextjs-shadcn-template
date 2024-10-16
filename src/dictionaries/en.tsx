import { Medal, Map, Plane, Gift, ChartBar, Wallet, Boxes } from "lucide-react";
import { SUPPORT_EMAIL, TODAY_YEAR } from "@/lib/utils-server-side";

const brandName = "ShadcnUI/Nextjs";
const lang = "en";

export const en = {
  lang: lang,
  brandName: brandName,
  landingPage: {
    metadata: {
      title: `Homepage Title`,
      description: "Homepage Description",
    },
    hero: {
      h1: "Your AI-powered partner for success",
      description:
        "Build your Nextjs landing page effortlessly with the required sections to your project.",
      buttonText: "Get Started",
    },
    howItWorks: {
      h2: "How It Works Step-by-Step Guide",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      steps: [
        {
          h3: "Accessibility",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Medal strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "Community",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Map strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "Scalability",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Plane strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "Gamification",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Gift strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
      ],
    },
    greatFeatures: {
      h2: "Great Features",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      features: [
        {
          h3: "Responsive Design",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Medal strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "Intuitive user interface",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Map strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "AI-Powered insights",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Plane strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
      ],
    },
    services: {
      h2: "Client-Centric Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      items: [
        {
          h3: "Code Collaboration",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: (
            <ChartBar strokeWidth={1.5} className="text-primary w-10 h-10" />
          ),
        },
        {
          h3: "Task Automation",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Boxes strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
        {
          h3: "Data Analysis",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
          icon: <Wallet strokeWidth={1.5} className="text-primary w-10 h-10" />,
        },
      ],
    },
    cta: {
      h2: "All Your Ideas & Concepts In One Interface",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
      requestDemoButton: "Request a Demo",
      viewAllFeaturesButton: "View all features",
    },
    testimonials: {
      h2: "Discover Why People Love This Landing Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
      items: [
        {
          image: "https://github.com/shadcn.png",
          name: "John Doe Nextjs",
          userName: "@john_Doe",
          comment: "This landing page is awesome!",
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
      h2: "Meet Our Team",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde error facere hic reiciendis illo",
      items: [
        {
          image: "https://i.pravatar.cc/150?img=35",
          name: "Emma Smith",
          position: "Product Manager",
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
          position: "Tech Lead",
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
          position: "Frontend Developer",
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
          position: "Backend Developer",
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
      h2: "Frequently Asked Questions",
      description: "Find answers to common questions about ...",
      items: [
        {
          h3: "Is this template free?",
          h4: "Yes. It is a free ChadcnUI template.",
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
        category: "Platforms",
        items: [
          {
            label: "Web",
            href: `/`,
          },
        ],
      },
      {
        category: "About",
        items: [
          {
            label: "Features",
            href: `#features`,
          },
          // {
          //   label: "Pricing",
          //   href: `/${lang}#pricing`,
          // },
          {
            label: "FAQ",
            href: `#faq`,
          },
        ],
      },
      // {
      //   category: "Find more tools",
      //   items: [
      //     {
      //       label: "Youtube",
      //       href: "https://www.youtube.com/",
      //     },
      //   ],
      // },
      {
        category: "Legal",
        items: [
          {
            label: "Contact us",
            href: `mailto:${SUPPORT_EMAIL}`,
          },
        ],
      },
    ],
    copyright: `${TODAY_YEAR} ${brandName}. All rights reserved.`,
  },
  navbar: {
    RouteList: [
      {
        href: `#features`,
        label: "Features",
      },
      // {
      //   href: `/${lang}#testimonials`,
      //   label: "Testimonials",
      // },
      // {
      //   href: `/${lang}#pricing`,
      //   label: "Pricing",
      // },
      {
        href: `#faq`,
        label: "FAQ",
      },
    ],
  },
  comingSoon: {
    h2: "Coming Soon",
    description: "We are working hard to bring you this feature. Stay tuned!",
  },
  contactUs:
    "If you have any questions, please feel free to reach out to me at",
};
