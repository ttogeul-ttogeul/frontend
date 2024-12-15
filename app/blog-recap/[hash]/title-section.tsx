import {
  blogImageUrlAtom,
  blogTitleAtom,
} from "@/components/blog-recap/store/atom";
import Text from "@/components/ui/text";
import { useAtom } from "jotai";
import Image from "next/image";

export default function TitleSection() {
  const [blogTitle] = useAtom(blogTitleAtom);
  const [blogImageUrl] = useAtom(blogImageUrlAtom);
  return (
    <div className="flex gap-3">
      <Image
        className="rounded-full"
        src={blogImageUrl}
        width={32}
        height={32}
        alt="blog-profile"
      />
      <Text className={"text-3xl font-bold"} as="h1">
        {blogTitle}
      </Text>
    </div>
  );
}
