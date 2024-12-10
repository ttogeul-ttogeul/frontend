import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BLOGS } from "@/constants/blogs";

export default function InputBlogSection() {
  const [blogType] = useState("tistory");

  const blog = BLOGS.find((blog) => blog.id === blogType);

  return (
    <form className="flex flex-col">
      <input className="border-2" placeholder={blog?.urlExample} />
      <Button>분석하기</Button>
    </form>
  );
}
