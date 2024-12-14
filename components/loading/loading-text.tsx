"use client";

import React, { useState, useEffect } from "react";

const messages = [
  "블로그를 분석 중이에요",
  "올해 테크블로거들은\n평균 13.5개의 글을 썼어요",
  "내가 올해 쓴 글을 분석하고 있으니, 조금만 기다려주세요!",
  "올해 테크블로거들은 주로 일요일에 글을 발행했어요",
];

export default function LoadingText() {
  const [currentMessageIdx, setCurrentMessageIdx] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIdx((prevIdx) => (prevIdx + 1) % messages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{messages[currentMessageIdx]}</div>;
}
