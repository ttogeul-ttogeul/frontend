import { fetchRoot } from "../api/lib/actions";
import SampleSection from "./SampleSection";

export default async function Page() {
  const message = await fetchRoot();
  return (
    <div>
      <div>{message}</div>
      <SampleSection />
    </div>
  );
}
