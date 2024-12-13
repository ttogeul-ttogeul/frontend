"use client";

import React, { useState, useEffect } from "react";

const messages = [
  "테크블로거들은\n평균 20개의 글을 썼어요",
  "짱짱맨",
  "넌 최고야",
  "또글또글 화이팅",
  "빙글빙글\n돌아가는\n이세상",
];

export default function LoadingText() {
  const [currentMessageIdx, setCurrentMessageIdx] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIdx((prevIdx) => (prevIdx + 1) % messages.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{messages[currentMessageIdx]}</div>;
}
