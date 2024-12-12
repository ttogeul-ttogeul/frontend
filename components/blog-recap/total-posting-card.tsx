// "use client";

// import { useMemo } from "react";
// import Bar from "../ui/bar";
// import StatCard from "../ui/stat-card";

// export default function TotalPostingCard() {
//   const data = {
//     january: 2,
//     february: 5,
//     march: 1,
//     april: 0,
//     may: 0,
//     june: 2,
//     july: 5,
//     august: 4,
//     september: 3,
//     october: 0,
//     november: 3,
//     december: 0,
//   };
//   const MAX_VALUE = useMemo(() => Math.max(...Object.values(data)), []);
//   const MAX_HEIGHT = 173;
//   console.log(MAX_HEIGHT);

//   return (
//     <StatCard title={"올해 총 n개 포스팅함"}>
//       <>
//         {Object.entries(data).map(([key, value], idx) => (
//           <Bar
//             key={`${key}-${idx}`}
//             className={"rounded"}
//             height={
//               value > 0 ? Math.floor((MAX_HEIGHT * value) / MAX_VALUE) : 2
//             }
//             color={
//               value > 0
//                 ? "bg-gradient-to-r from-violet-600 to-blue-600"
//                 : "bg-slate-700"
//             }
//           />
//         ))}
//       </>
//     </StatCard>
//   );
// }
"use client";

import { useMemo } from "react";
import Bar from "../ui/bar";
import StatCard from "../ui/stat-card";
import Text from "../ui/text";

export default function TotalPostingCard() {
  const data = {
    january: 2,
    february: 5,
    march: 1,
    april: 0,
    may: 0,
    june: 2,
    july: 5,
    august: 4,
    september: 3,
    october: 0,
    november: 3,
    december: 0,
  };
  const MAX_VALUE = useMemo(() => Math.max(...Object.values(data)), []);
  const MAX_HEIGHT = 173;

  return (
    <StatCard
      title={
        <Text as="h3" className={"text-center font-light"}>
          {"올해 "}
          <span className={"font-bold"}>n개</span>
          {"의 글을\n포스팅하셨어요"}
        </Text>
      }
      description={
        <Text className={"text-gray-400"}>
          테크블로거들은 <span className={"underline"}>평균 n개</span>의 글을
          썼어요
        </Text>
      }
    >
      <>
        {Object.entries(data).map(([key, value], idx) => (
          <Bar
            key={`${key}-${idx}`}
            className={"rounded"}
            height={
              value > 0 ? Math.floor((MAX_HEIGHT * value) / MAX_VALUE) : 2
            }
            color={
              value > 0
                ? "bg-gradient-to-r from-violet-600 to-blue-600"
                : "bg-slate-700"
            }
          />
        ))}
      </>
    </StatCard>
  );
}
