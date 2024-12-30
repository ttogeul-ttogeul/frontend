import BlogLinkCard from "@/src/components/blog-recap/blog-link-card";
import Seperator from "@/src/components/ui/seperator";
import Text from "@/src/components/ui/text";

export default function VisitBlogSection() {
  return (
    <div className="flex w-[312px] flex-col items-center">
      <Text className="text-2xl font-bold" as="h2">
        이 블로그 방문하기
      </Text>
      <Seperator className="h-4" />
      <BlogLinkCard />
    </div>
  );
}
