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
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 transform whitespace-pre text-center text-gray-500">
      {selectMode ? (
        <div className="flex flex-col gap-3 whitespace-pre">
          {"더 다양한 서비스를 지원할 수 있도록\n준비 중입니다."}
        </div>
      ) : (
        <div>
          <div>주소를 잊어버렸다면?</div>
          <Link
            href={blog?.homeUrl as string}
            className={`${blog?.textColor} underline`}
          >
            {blog?.name} 홈으로{" >"}
          </Link>
        </div>
      )}
    </div>
  );
}
