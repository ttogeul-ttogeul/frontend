import { BlogDomain } from "@/constants/blogs";
import HighlightedTitle from "../../components/home/highlighted-title";

type TitleSectionProps = {
  selectMode: boolean;
  blogDomain: BlogDomain;
};

export default function TitleSection({
  selectMode,
  blogDomain,
}: TitleSectionProps) {
  return (
    <div className="text-2xl/[1.875rem] font-medium">
      {selectMode ? (
        <h1 className="flex flex-col">
          <span>분석할</span>
          <HighlightedTitle
            highlight="블로그 서비스"
            className="text-2xl/[1.875rem] font-medium"
          >
            를
          </HighlightedTitle>
          <span>선택하세요.</span>
        </h1>
      ) : (
        <div>
          <h1 className="flex flex-col">
            <HighlightedTitle
              highlight="블로그 링크"
              className="text-2xl/[1.875rem] font-medium"
            >
              를
            </HighlightedTitle>
            <span>입력해주세요.</span>
          </h1>
          {blogDomain === "tistory" && (
            <p className="mt-3 text-base font-normal text-gray-400">
              HTML과 CSS로 스킨을 편집해서 사용하시는 경우에는 분석이 제한될 수
              있습니다.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
