import Title from "@/src/components/home/highlighted-title";
import { Button } from "@/src/components/ui/button";
import { BLOGS } from "@/src/components/blog-input/constants";
import TistoryLogo from "@/src/components/icons/svgs/logo-tistory.svg";
import VelogLogo from "@/src/components/icons/svgs/logo-velog.svg";
import { FooterSection, TitleSection } from "@/src/components/blog-input";
import KakaoAdfit from "@/src/components/shared/kakao-adfit";
import { BlogType } from "@/src/components/blog-input/types";
import { useSetAtom } from "jotai";
import { blogDomainState, selectModeState } from "../store";

export default function BlogSelectMode() {
  const logos = {
    tistory: <TistoryLogo width={24} height={24} />,
    velog: <VelogLogo width={24} height={24} />,
  };

  const setBlogDomain = useSetAtom(blogDomainState);
  const setSelectMode = useSetAtom(selectModeState);

  const handleClickDomainButton = (blog: BlogType) => {
    setBlogDomain(blog.id);
    setSelectMode(false);
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
          {BLOGS.map((blog) => (
            <Button
              key={blog.id}
              variant={"filled"}
              className={`${blog.bgColor} relative text-white`}
              onClick={() => handleClickDomainButton(blog)}
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

        <KakaoAdfit adUnit="DAN-BzP9NBV4dkR6CLsR" className="mt-12" />
      </FooterSection>
    </>
  );
}
