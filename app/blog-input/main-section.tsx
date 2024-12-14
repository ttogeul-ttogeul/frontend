import { Dispatch, SetStateAction, useState } from "react";
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

const schema = object({
  blog_url: string().min(1),
});

type FormValues = z.infer<typeof schema>;

type MainSectionProps = {
  selectMode: boolean;
  setSelectMode: Dispatch<SetStateAction<boolean>>;
  blogDomain: BlogDomain;
  setBlogDomain: Dispatch<SetStateAction<BlogDomain>>;
};

export default function MainSection({
  selectMode,
  setSelectMode,
  blogDomain,
  setBlogDomain,
}: MainSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { blog_url: "" },
  });
  const onSubmit = async (data: FormValues) => {
    console.log({ ...data, blog_domain: blogDomain });
    if (errors) showAlert(errors.root?.message || "서버 에러입니다");
  };

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const blog = BLOGS.find((blog) => blog.id === blogDomain);

  const logos = {
    tistory: <TistoryLogo width={24} height={24} />,
    velog: <VelogLogo width={24} height={24} />,
  };

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
