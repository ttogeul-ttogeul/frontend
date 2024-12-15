import { blogTitleAtom } from "@/components/blog-recap/store/atom";
import Text from "@/components/ui/text";
import { useAtom } from "jotai";

export default function TitleSection() {
  const [blogTitle] = useAtom(blogTitleAtom);
  return (
    <Text className={"text-3xl font-bold"} as="h1">
      {blogTitle}
    </Text>
  );
}
