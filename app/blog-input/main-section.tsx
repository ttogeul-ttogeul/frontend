import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { BLOGS, type BlogDomain } from "@/constants/blogs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, z } from "zod";
import { Input } from "@/components/ui/input";

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
  const onSubmit = (data: FormValues) => {
    console.log({ ...data, blog_domain: blogDomain });
  };

  const blog = BLOGS.find((blog) => blog.id === blogDomain);

  return (
    <>
      {selectMode ? (
        <div className="flex flex-col gap-3">
          {BLOGS.map((blog) => (
            <Button
              key={blog.id}
              variant={"filled"}
              className={`${blog.bgColor} text-white`}
              onClick={() => {
                setBlogDomain(blog.id);
                setSelectMode(false);
              }}
            >
              {blog.name}
            </Button>
          ))}
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder={blog?.urlExample}
            {...register("blog_url")}
            className={
              errors?.blog_url?.message ? "border-2 border-red-600" : ""
            }
          />
          <Button type="submit" disabled={!isDirty || !isValid}>
            분석하기
          </Button>
        </form>
      )}
    </>
  );
}
