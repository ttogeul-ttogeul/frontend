import { blogTitleAtom } from "@/components/blog-recap/store/atom";
import Text from "@/components/ui/text";
import { useAtom } from "jotai";

export default function TitleSection() {
  const [blogTitle] = useAtom(blogTitleAtom);
  return (
    <div className="flex w-full justify-center">
      <Text
        className={"whitespace-normal break-normal text-3xl font-bold"}
        as="h1"
      >
        {blogTitle}
      </Text>
    </div>
  );
}
