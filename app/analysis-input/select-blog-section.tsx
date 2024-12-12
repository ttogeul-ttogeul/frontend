import { Button } from "@/components/ui/button";
import { BLOGS, type BlogType } from "@/constants/blogs";
import { Dispatch, SetStateAction } from "react";

type SelectBlogSectionType = {
  setSelectMode: Dispatch<SetStateAction<boolean>>;
  setBlogType: Dispatch<SetStateAction<BlogType>>;
};

export default function SelectBlogSection({
  setSelectMode,
  setBlogType,
}: SelectBlogSectionType) {
  return (
    <div className="flex flex-col gap-3">
      {BLOGS.map((blog) => (
        <Button
          key={blog.id}
          variant={"black"}
          className={`${blog.bgColor} text-white`}
          onClick={() => {
            setBlogType(blog.id);
            setSelectMode(false);
          }}
        >
          {blog.name}
        </Button>
      ))}
    </div>
  );
}
