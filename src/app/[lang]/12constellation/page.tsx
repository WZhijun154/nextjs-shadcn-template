import { Locale } from "@/lib/utils-common";
import { Section } from "@/components/section";
import Image from "next/image";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return {
    title: "水瓶座の運勢",
    description: "水瓶座の運勢についての詳細情報をお届けします。",
  };
}

export default async function AquariusPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <Section>
      <div className="flex items-center justify-center my-4">
        <Image
          src="/aquarius.svg"
          alt="Aquarius Symbol"
          width={70}
          height={70}
          className="mr-4"
        />
        <h1 className="custom-h1">みずがめ座の紹介</h1>
      </div>
      <h2 className="custom-muted-description text-center">
        みずがめ座は革新と独立を象徴する星座です。ここでは、みずがめ座の特徴や運勢について詳しく解説します。
      </h2>
      <article className=" text-foreground text-center">
        みずがめ座の特徴や運勢について詳しく解説します。
      </article>
    </Section>
  );
}
