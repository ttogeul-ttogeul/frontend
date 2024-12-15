"use client";

import React, { useState, useEffect } from "react";

const messages = [
  "블로그를 분석 중이에요",
  "올해 테크블로거들은 평균 13.5개의 글을 썼어요👩‍💻",
  "내가 올해 쓴 글을 분석하고 있으니, 조금만 기다려주세요!",
  "올해 테크블로거들은 주로 일요일에 글을 발행했어요💻",
  "시간이 걸리는 걸 보니 올해 글을 많이 쓰셨군요😚",
  "[막간 광고] 팀 테블리를 소개합니다🫧",
];

const randomMsg = [
  "데이터 여신 수민짱, 귀한몸 비싸게 모십니다~💎",
  "디자이너 경탁은 물리학을 전공했습니다~🧑🏻‍🔬",
  "백엔드 개발자 은찬 군은 구직 말고 구애중이에요~😘",
  "기획자 채채는 백수라이프를 즐기고 있어요🐿",
  "프론트 개발자 인애상은 행복한 백수지만, 절찬리 구직중🍑",
  "프론트 개발자 효진님은 지금 이 문구를 고민할 시간이 없어요🤯",
];

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function LoadingText() {
  const [currentMessageIdx, setCurrentMessageIdx] = useState(0);
  const [combinedMessages, setCombinedMessages] = useState<string[]>([]);

  useEffect(() => {
    const shuffledRandomMsg = shuffleArray([...randomMsg]);
    setCombinedMessages([...messages, ...shuffledRandomMsg]);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIdx(
        (prevIdx) => (prevIdx + 1) % combinedMessages.length,
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [combinedMessages]);

  return <div>{combinedMessages[currentMessageIdx]}</div>;
}
