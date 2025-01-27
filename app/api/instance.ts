import axios from "axios";
import * as Sentry from "@sentry/nextjs";
import { notFound } from "next/navigation";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // 환경 변수에서 API URL을 가져옴
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 요청 전 로직 추가 가능
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.status === 404) {
        notFound();
      }

      Sentry.captureException(`API error: ${error.message}`);
      return Promise.reject({
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
        data: error.response?.data,
      });
    }
    Sentry.captureException(`unknown error`);
    return Promise.reject({
      message: "알 수 없는 에러가 발생했습니다.",
      error: error,
    });
  },
);
