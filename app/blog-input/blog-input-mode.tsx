"use client";

import Title from "@/src/components/home/highlighted-title";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import ArrowRight from "@/src/components/icons/svgs/arrow-right.svg";
import { useForm } from "react-hook-form";
import { object, string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BLOGS } from "@/src/constants/blogs";
import API from "../api";
import { AnalysisFormData, BlogAnalyticsResponse } from "../api/lib/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/src/components/ui/alert-dialog";
import { type BlogInputModeProps, type BlogAnalyticsIdResponse } from "./type";
import {
  TitleSection,
  AnalysisLoading,
  FooterSection,
} from "@/src/components/blog-input";
import KakaoAdfit from "@/src/components/shared/kakao-adfit";

const schema = object({
  blog_url: string().min(1),
});

type FormValues = z.infer<typeof schema>;

type ApiError = {
  message: string;
};

export default function BlogInputMode({ blogDomain }: BlogInputModeProps) {
  const router = useRouter();

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const blog = BLOGS.find((blog) => blog.id === blogDomain);

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { blog_url: "" },
  });

  const {
    mutate,
    isPending,
    isSuccess,
    status: mutateStatus,
    data: blogAnalyticsIdResponse,
  } = useMutation<BlogAnalyticsIdResponse, ApiError, AnalysisFormData>({
    mutationFn: async (formData: AnalysisFormData) => {
      const res = await API.post<AnalysisFormData, BlogAnalyticsIdResponse>(
        "/v2/blog-analytics",
        formData,
      );
      return res;
    },
    onError: (err) => {
      if (err.message === "Network Error") {
        showAlert(`인터넷 연결을 확인하거나,\n잠시 후 다시 시도해주세요.`);
      } else {
        showAlert(err.message || "서버 에러입니다");
      }
    },
  });

  const fetchFunction = async () => {
    const res = await API.get<BlogAnalyticsResponse>("/v2/blog-analytics", {
      params: { id: blogAnalyticsIdResponse?.data.blogAnalyticsId ?? "" },
    });

    if (res.status === 202) {
      throw Error("PENDING");
    }
    return res.data;
  };

  const {
    data,
    isFetching,
    status: queryStatus,
  } = useQuery({
    queryKey: [
      "fetch-blog-analytics",
      blogAnalyticsIdResponse?.data.blogAnalyticsId,
    ],
    queryFn: fetchFunction,
    enabled: isSuccess,
    refetchInterval: (query) =>
      query.state.error?.message === "PENDING" ? 2000 : false, // 202일 때만 2초마다 재시도
    retry: (failureCount, error) => {
      if (error.message === "PENDING" && failureCount < 30) return true;
      return false; // 400, 500 등 다른 에러는 재시도 X
    },
  });

  const normalizeHttps = (url: string): string => {
    return url.replace(/^HTTPS:/i, "https:");
  };

  const onSubmit = async (data: FormValues) => {
    const formData = {
      blog_url: normalizeHttps(data.blog_url),
      blog_domain: blogDomain,
    };

    mutate(formData);
  };

  useEffect(() => {
    if (data && queryStatus === "success" && mutateStatus === "success") {
      router.push(`/blog-recap/${data.id}`);
      router.refresh();
    }
  }, [data, isSuccess, mutateStatus, queryStatus, router]);

  // mutation이 종료된 후에도 로딩창을 유지한 뒤 /blog-recap 페이지로 이동
  if (isPending || isSuccess || isFetching) return <AnalysisLoading />;

  return (
    <>
      <div>
        <TitleSection>
          <Title className="flex flex-col text-2xl/[1.875rem] font-medium">
            <div>
              <Title.Highlighted>내 블로그 링크</Title.Highlighted>를
            </div>
            <div>입력하세요</div>
          </Title>
          {blogDomain === "tistory" && (
            <p className="mt-3 whitespace-pre text-base font-normal text-gray-400">
              {
                "블로그 스킨이 정교하게 커스텀된 경우,\n분석이 제한될 수 있습니다."
              }
            </p>
          )}
        </TitleSection>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder={blog?.urlExample}
            {...register("blog_url")}
            className={
              errors?.blog_url?.message ? "border-2 border-red-600" : ""
            }
          />
          <Button type="submit" disabled={!isDirty || !isValid}>
            분석 결과 보기
            <ArrowRight />
          </Button>
        </form>
      </div>

      <FooterSection>
        <div>주소를 잊어버렸다면?</div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={blog?.homeUrl as string}
          className={`${blog?.textColor} underline`}
        >
          {blog?.name} 홈으로{" >"}
        </Link>
        <KakaoAdfit adUnit="DAN-1gwdntIcxzgRo6YC" className="mt-12" />
      </FooterSection>

      <AlertDialog open={alertOpen}>
        <AlertDialogContent aria-label="alertdialog">
          <AlertDialogTitle className="hidden" />
          <AlertDialogDescription className="whitespace-pre-line">
            {alertMessage || "메시지를 길게 써보겠습니다. 이것은 메시지입니다."}
          </AlertDialogDescription>
          <AlertDialogAction
            onClick={() => {
              setAlertOpen(false);
            }}
            className="w-full"
          >
            확인
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
