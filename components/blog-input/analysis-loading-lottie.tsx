import dynamic from "next/dynamic";
import spinnerLottie from "@/public/lotties/spinner.json";
import LoadingText from "./loading-text";

export default function AnalysisLoading() {
  const Lottie = dynamic(() => import("../shared/lottie"), { ssr: false });

  return (
    <div className="!z-100 absolute inset-0 h-dvh w-full">
      <div className="z-110 absolute left-1/2 mx-auto h-dvh w-full max-w-440pxr -translate-x-1/2 transform bg-gray-950">
        <div className="whitespace-pre text-center font-normal">
          <div className="mt-208pxr flex flex-col justify-center gap-8 align-middle">
            <div className="flex justify-center">
              <div className="h-32 w-32">
                <Lottie animationData={spinnerLottie} />
              </div>
            </div>
            <LoadingText />
          </div>

          <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm text-gray-500">
            {
              "올해 쓴 글이 많으면 분석에 시간이 걸릴 수 있어요.\n(최대 1분 이내)"
            }
          </p>
        </div>
      </div>
    </div>
  );
}
