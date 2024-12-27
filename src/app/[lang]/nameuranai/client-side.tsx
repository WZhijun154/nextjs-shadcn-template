"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LocalizeLink } from "@/components/localize-link";
import { check } from "./core";


export const NameUranaiClientSide = () => {
    const [result, setResult] = useState<string | null>(null);
    const [firstName, setFirstName] = useState("山田");
    const [lastName, setLastName] = useState("太郎");
    const lang = 'ja'
    const handleButtonClick = () => {
        const result = check(firstName, lastName);
        setResult(result);
    };

    return (
        <div className="shadow mt-10">
            <div className="w-full flex flex-col items-center justify-center container space-y-4">
                <div className="w-full flex flex-row items-center justify-center space-x-8">
                    <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="山田"
                    className="max-w-36 md:w-1/3 h-12"
                    />
                    <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="太郎"
                    className="max-w-36 md:w-1/3 h-12"
                    />
                </div>
                <Button className="w-full md:w-1/3" onClick={handleButtonClick}>
                    <LocalizeLink href="#main" lang={lang} asChild>
                        姓名判断を開始
                    </LocalizeLink>
                </Button>
            </div>
            {result && (
                <div className="w-full flex flex-col items-center justify-center container space-y-4"> 
                    <div className="w-full flex flex-col items-center justify-center space-y-4">
                <div className="custom-h1">
                    <p>結果</p>
                </div>
                <p>{result}</p>
                    </div>
                </div>
            )}
        </div>
    )
}