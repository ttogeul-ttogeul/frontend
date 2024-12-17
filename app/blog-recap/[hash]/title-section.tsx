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
    <div className="flex w-full items-center justify-center gap-2">
      <div className="flex flex-shrink-0 items-center justify-center">
        <Image
          src={blogImageUrl}
          alt="blog-profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <Text
        className={
          "max-w-[272px] overflow-hidden text-ellipsis whitespace-nowrap break-normal text-3xl font-bold leading-[42px]"
        }
        as="h1"
      >
        {blogTitle}
      </Text>
    </div>
  );
}
