"use client";

import { Locale } from "@/lib/utils-common";
// import { getDictionary } from "@/lib/dictionaries";
import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// export async function generateMetadata({
//   params: { lang },
// }: {
//   params: { lang: Locale };
// }) {
//   const dictionary = await getDictionary(lang);
//   return {
//     title: dictionary.landingPage.metadata.title,
//     description: dictionary.landingPage.metadata.description,
//   };
// }

export default function NewPageDev({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [birthday, setBirthday] = useState("");
  const [seiza, setSeiza] = useState("");

//   const dictionary = getDictionary(lang);

  const handleButtonClick = () => {
    // Logic to determine seiza based on birthday
    const determinedSeiza = determineSeiza(birthday);
    setSeiza(determinedSeiza);
  };

  const determineSeiza = (birthday: string) => {
    // Placeholder logic for determining seiza
    // This should be replaced with actual logic
    return "Placeholder Seiza";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">
          あなたの星座を確認しよう
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="birthday-input"
        />
        <Button onClick={handleButtonClick} className="seiza-button">
          星座を確認
        </Button>
        {seiza && <p className="seiza-result">あなたの星座は: {seiza}</p>}
      </CardContent>
    </Card>
  );
}