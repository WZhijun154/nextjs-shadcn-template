"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function getSeiza(month: number, day: number): string {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return "おひつじ座";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return "おうし座";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return "ふたご座";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return "かに座";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return "しし座";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return "おとめ座";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return "てんびん座";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return "さそり座";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return "いて座";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return "やぎ座";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return "みずがめ座";
    } else {
      return "うお座";
    }
  }

export function SeizaChecker() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [seiza, setSeiza] = useState("");
  const [error, setError] = useState("");

  const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const getDaysInMonth = (month: string) => {
    const monthNum = parseInt(month);
    return new Date(2024, monthNum, 0).getDate();
  };

  const handleMonthChange = (value: string) => {
    setMonth(value);
    setError("");
    setDay(""); // Reset day when month changes
  };

  const handleDayChange = (value: string) => {
    setDay(value);
    setError("");
  };

  const handleSubmit = () => {
    if (!month || !day) {
      setError("月と日を選択してください");
      return;
    }

    const monthNum = parseInt(month);
    const dayNum = parseInt(day);
    const result = getSeiza(monthNum, dayNum);
    setSeiza(result);
    setError("");
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h2 className="text-2xl font-semibold">誕生日を入力して星座を調べましょう</h2>
      <div className="flex gap-4 items-center">
        <Select value={month} onValueChange={handleMonthChange}>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="月" />
          </SelectTrigger>
          <SelectContent>
            {months.map((m) => (
              <SelectItem key={m} value={m}>
                {m}月
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* <span className="text-lg">月</span> */}
        
        <Select value={day} onValueChange={handleDayChange}>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="日" />
          </SelectTrigger>
          <SelectContent>
            {month && [...Array(getDaysInMonth(month))].map((_, i) => {
              const day = i + 1;
              return (
                <SelectItem key={day} value={day.toString()}>
                  {day}日
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        {/* <span className="text-lg">日</span> */}
        <Button onClick={handleSubmit}>調べる</Button>
      </div>
      {error && (
        <div className="text-red-500">
          {error}
        </div>
      )}
      {seiza && !error && (
        <div className="text-2xl font-bold">
          あなたの星座は <span className="text-primary">{seiza}</span> ですね!
        </div>
      )}
    </div>
  );
}