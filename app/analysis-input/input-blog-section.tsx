import { Button } from "@/components/ui/button";
import { BLOGS } from "@/constants/blogs";
import Link from "next/link";

export default function InputBlogSection({ blogType }: { blogType: string }) {
  const blog = BLOGS.find((blog) => blog.id === blogType);

  return (
    <div>
      <form className="flex flex-col">
        <input className="border-2" placeholder={blog?.urlExample} />
        <Button>분석하기</Button>
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
