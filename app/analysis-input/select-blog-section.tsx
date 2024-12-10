import { Button } from "@/components/ui/button";
import { BLOGS } from "@/constants/blogs";

export default function SelectBlogSection() {
  return (
    <div className="flex flex-col gap-1">
      {BLOGS.map((blog) => (
        <Button key={blog.id} className={blog.bgColor}>
          {blog.title}
        </Button>
      ))}
    </div>
  );
}
