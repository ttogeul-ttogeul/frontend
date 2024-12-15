import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BLOGS, BlogType, type BlogDomain } from "@/constants/blogs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, z } from "zod";
import { Input } from "@/components/ui/input";
import TistoryLogo from "@/components/icons/svgs/logo-tistory.svg";
import VelogLogo from "@/components/icons/svgs/logo-velog.svg";
import ArrowRight from "@/components/icons/svgs/arrow-right.svg";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useMutation } from "@tanstack/react-query";
import { postAnalysis } from "../api/lib/actions";
import { BASE_URL } from "../api/constants";
import AnalysisLoading from "@/components/blog-input/analysis-loading";
import { useRouter } from "next/navigation";
import API from "../api";
import { analysisFormData } from "../api/lib/types";

const schema = object({
  blog_url: string().min(1),
});

type FormValues = z.infer<typeof schema>;

type MainSectionProps = {
  selectMode: boolean;
  setSelectMode: Dispatch<SetStateAction<boolean>>;
  blogDomain: BlogDomain;
  setBlogDomain: Dispatch<SetStateAction<BlogDomain>>;
  // setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export default function MainSection({
  selectMode,
  setSelectMode,
  blogDomain,
  setBlogDomain,
  // setIsLoading,
}: MainSectionProps) {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { blog_url: "" },
  });

  const router = useRouter();

  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationFn: async (data: analysisFormData) => {
      const res = await API.post("/v1/blog-analytics", data);
      return res;
    },
    onSuccess: (res) => {
      console.log("onsuccess!!!!", res);

      router.push(`/blog-recap/${res.blogAnalyticsId}`);
    },
    onError: (err) => {
      console.log("err: ", err.message);
      console.log("errorasdf", error);
      showAlert(err.message || "서버 에러입니다");
    },
  });

  const onSubmit = async (data: FormValues) => {
    const formData = { ...data, blog_domain: blogDomain };
    // const formData = {
    //   blog_url: "https://daco2020.tistory.com/",
    //   blog_domain: "tistory",
    // };
    console.log("formData: ", formData);

    mutate(formData);

    // try {
    //   const res = await fetch(`${BASE_URL}v1/blog-analytics`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (res.ok) {
    //     const data = await res.json();
    //     console.log("success: ", data);
    //   } else {
    //     const errData = await res.json();
    //     console.log("err: ", errData);
    //     showAlert(errData.message);
    //   }
    // } catch (error) {
    //   console.error(error);
    //   showAlert(error.message || "서버 에러입니다");
    // }

    // console.error("cr: ", error);
    // console.log("main-error: ", error);

    // if (error) showAlert(error.message || "서버 에러입니다");
  };

  const blog = BLOGS.find((blog) => blog.id === blogDomain);

  const logos = {
    tistory: <TistoryLogo width={24} height={24} />,
    velog: <VelogLogo width={24} height={24} />,
  };

  // if (isPending) return <AnalysisLoading />;

  return (
    <>
      <div>
        {selectMode ? (
          <div className="flex flex-col gap-3">
            {BLOGS.map((blog: BlogType) => (
              <Button
                key={blog.id}
                variant={"filled"}
                className={`${blog.bgColor} relative text-white`}
                onClick={() => {
                  setBlogDomain(blog.id);
                  setSelectMode(false);
                }}
              >
                <div className="absolute left-6">{logos[blog.id]}</div>
                {blog.name}
              </Button>
            ))}
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
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
        )}
      </div>
      <AlertDialog open={alertOpen}>
        <AlertDialogContent aria-label="alertdialog">
          <AlertDialogTitle className="hidden" />
          <AlertDialogDescription>
            {alertMessage || "메시지"}
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
