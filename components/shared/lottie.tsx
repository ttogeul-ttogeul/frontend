import { HTMLAttributes, useEffect, useRef, useState } from "react";
import Lottie, { AnimationConfig, AnimationItem } from "lottie-web";

interface LottieComponentProps extends HTMLAttributes<HTMLDivElement> {
  animationData: object;
}

export default function LottieComponent({
  animationData,
  ...restProps
}: LottieComponentProps) {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const [, setAnimationInstance] = useState<AnimationItem | null>(null);

  useEffect(() => {
    const animationOptions = {
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    } as AnimationConfig;

    const animation = Lottie.loadAnimation(animationOptions);
    setAnimationInstance(animation);

    return () => {
      animation.destroy();
    };
  }, [animationData]);

  return <div ref={animationContainer} {...restProps} />;
}
