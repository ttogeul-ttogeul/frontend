import LoadingText from "./loading-text";

export default function AnalysisLoading() {
  return (
    <div className="!z-100 absolute inset-0 h-dvh w-full">
      <div className="z-110 absolute left-1/2 mx-auto h-dvh w-full max-w-440pxr -translate-x-1/2 transform bg-gray-950">
        <div className="whitespace-pre text-center font-normal">
          <div className="mt-268pxr flex flex-col justify-center gap-8 align-middle">
            {/* 임시 spinner */}
            <div
              className="inline-block h-8 w-8 animate-spin self-center rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
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
