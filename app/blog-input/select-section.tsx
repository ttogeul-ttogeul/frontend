import Title from "@/components/home/highlighted-title";
import { Button } from "@/components/ui/button";
import { BLOGS, type BlogType } from "@/constants/blogs";
import TistoryLogo from "@/components/icons/svgs/logo-tistory.svg";
import VelogLogo from "@/components/icons/svgs/logo-velog.svg";
import { SectionProps } from "./type";

export default function SelectSection({
  setSelectMode,
  setBlogDomain,
}: SectionProps) {
  const logos = {
    tistory: <TistoryLogo width={24} height={24} />,
    velog: <VelogLogo width={24} height={24} />,
  };

  return (
    <>
      <div className="mb-20 text-2xl/[1.875rem] font-medium">
        <Title className="flex flex-col text-2xl/[1.875rem] font-medium">
          <div>
            <Title.Highlighted>내 블로그 서비스</Title.Highlighted>를
          </div>
          <div>선택하세요</div>
        </Title>
      </div>

      <div className="flex flex-col gap-3">
        {BLOGS.map((blog: BlogType) => (
          <Button
            key={blog.id}
            variant={"filled"}
            className={`${blog.bgColor} relative text-white`}
            onClick={() => {
              setBlogDomain(blog.id);
              setSelectMode(false);
            }}
          >
            <div className="absolute left-6">{logos[blog.id]}</div>
            {blog.name}
          </Button>
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 transform whitespace-pre text-center text-gray-500">
        <div className="flex flex-col gap-3 whitespace-pre">
          {"더 다양한 서비스를 지원할 수 있도록\n준비 중입니다."}
        </div>
      </div>
    </>
  );
}
