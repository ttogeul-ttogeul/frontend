import BlogRecapMain from "./blog-recap-main";
import { fetchBlogAnalytics } from "@/app/api/lib/blog-recap/actions";

export default async function Page({ params }: { params: { hash: string } }) {
  const data = await fetchBlogAnalytics(params.hash);
  return <BlogRecapMain initialData={data} />;
}
