import { BlogDomain } from "@/constants/blogs";
import Title from "../../components/home/highlighted-title";

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
        <Title className="flex flex-col text-2xl/[1.875rem] font-medium">
          <div>
            <Title.Highlighted>내 블로그 서비스</Title.Highlighted>를
          </div>
          <div>선택하세요</div>
        </Title>
      ) : (
        <div>
          <Title className="flex flex-col text-2xl/[1.875rem] font-medium">
            <div>
              <Title.Highlighted>내 블로그 링크</Title.Highlighted>를
            </div>
            <div>입력하세요</div>
          </Title>
          {blogDomain === "tistory" && (
            <p className="mt-3 whitespace-pre text-base font-normal text-gray-400">
              {
                "블로그 스킨이 정교하게 커스텀된 경우,\n분석이 제한될 수 있습니다."
              }
            </p>
          )}
        </div>
      )}
    </div>
  );
}
