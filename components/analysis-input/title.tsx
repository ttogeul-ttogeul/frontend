export default function Title({ selectMode }: { selectMode: boolean }) {
  return (
    <>
      {selectMode ? (
        <div>
          분석할
          <div>
            <span>블로그 서비스</span>를
          </div>
          <span>선택하세요.</span>
        </div>
      ) : (
        <div>블로그 링크를 입력하세요</div>
      )}
    </>
  );
}
