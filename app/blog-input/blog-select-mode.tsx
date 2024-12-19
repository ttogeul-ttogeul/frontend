import Title from "@/components/home/highlighted-title";
import { Button } from "@/components/ui/button";
import { BLOGS, type BlogType } from "@/constants/blogs";
import TistoryLogo from "@/components/icons/svgs/logo-tistory.svg";
import VelogLogo from "@/components/icons/svgs/logo-velog.svg";
import { type BlogSelectModeProps } from "./type";
import { FooterSection, TitleSection } from "@/components/blog-input";
import KakaoAdfit from "@/components/shared/kakao-adfit";

export default function BlogSelectMode({
  setSelectMode,
  setBlogDomain,
}: BlogSelectModeProps) {
  const logos = {
    tistory: <TistoryLogo width={24} height={24} />,
    velog: <VelogLogo width={24} height={24} />,
  };

  return (
    <>
      <div>
        <TitleSection>
          <Title className="flex flex-col text-2xl/[1.875rem] font-medium">
            <div>
              <Title.Highlighted>내 블로그 서비스</Title.Highlighted>를
            </div>
            <div>선택하세요</div>
          </Title>
        </TitleSection>

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
      </div>

      <FooterSection>
        <div className="flex flex-col gap-3 whitespace-pre">
          {"더 다양한 서비스를 지원할 수 있도록\n준비 중입니다."}
        </div>
      </FooterSection>

      <KakaoAdfit adUnit="DAN-BzP9NBV4dkR6CLsR" />
    </>
  );
}
