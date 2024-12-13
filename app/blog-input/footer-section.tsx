import { type BlogDomain, BLOGS } from "@/constants/blogs";
import Link from "next/link";

type FooterSectionProps = {
  selectMode: boolean;
  blogDomain: BlogDomain;
};

export default function FooterSection({
  selectMode,
  blogDomain,
}: FooterSectionProps) {
  const blog = BLOGS.find((blog) => blog.id === blogDomain);

  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 transform whitespace-pre text-center text-gray-500">
      {selectMode ? (
        <div className="flex flex-col gap-3 whitespace-pre">
          {"다른 블로그는 지원 준비 중입니다.\n(텍스트 논의 필요)"}
        </div>
      ) : (
        <div>
          <div>주소를 모르신다면?</div>
          <Link
            href={blog?.homeUrl as string}
            className={`${blog?.textColor} underline`}
          >
            {blog?.name}로 이동하기{">"}
          </Link>
        </div>
      )}
    </div>
  );
}
