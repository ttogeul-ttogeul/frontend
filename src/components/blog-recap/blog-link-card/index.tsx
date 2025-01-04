import { useAtom } from "jotai";
import Image from "next/image";
import {
  blogImageUrlAtom,
  blogTitleAtom,
  blogUrlAtom,
} from "@/src/components/blog-recap/store";
import Text from "@/src/components/ui/text";
import Link from "next/link";
import { removeProtocol } from "./utils";

export default function BlogLinkCard() {
  const [blogImageUrl] = useAtom(blogImageUrlAtom);
  const [blogTitle] = useAtom(blogTitleAtom);
  const [blogUrl] = useAtom(blogUrlAtom);
  const removedProtocolUrl = removeProtocol(blogUrl);
  return (
    <Link
      className="w-full"
      target="_blank"
      rel="noopener noreferrer"
      href={blogUrl}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-gray-700">
        <Image
          className="aspect-square rounded-l-2xl object-cover"
          src={blogImageUrl}
          alt="blog-image"
          width={64}
          height={64}
        />
        <div className="flex-1">
          <Text
            as="h3"
            className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap break-normal"
          >
            {blogTitle}
          </Text>
          <Text className="text-xs text-gray-500">{removedProtocolUrl}</Text>
        </div>
        <div className="w-[20px]">{">"}</div>
      </div>
    </Link>
  );
}
