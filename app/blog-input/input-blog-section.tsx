import { Button } from "@/components/ui/button";
import { BLOGS } from "@/constants/blogs";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, z } from "zod";
import { Input } from "@/components/ui/input";

const schema = object({
  blog_url: string().min(1).max(3),
});

type FormValues = z.infer<typeof schema>;

export default function InputBlogSection({ blogType }: { blogType: string }) {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { blog_url: "" },
  });
  const onSubmit = (data: FormValues) => {
    console.log({ ...data, blog_domain: blogType });
  };

  const blog = BLOGS.find((blog) => blog.id === blogType);

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={blog?.urlExample}
          {...register("blog_url")}
          className={errors?.blog_url?.message ? "border-2 border-red-600" : ""}
        />
        <Button type="submit" disabled={!isDirty || !isValid}>
          분석하기
        </Button>
      </form>

      <div>
        <div>주소를 모르신다면?</div>
        <Link href={blog?.homeUrl as string}>
          {blog?.name}로 이동하기{">"}
        </Link>
      </div>
    </div>
  );
}
