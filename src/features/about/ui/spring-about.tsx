import { ReactNode, RefObject } from "react";
import { animated } from "@react-spring/web";
import { useInView } from "@react-spring/core";

export default function SpringAbout({
  children,
  rootMargin = "-20% 0%",
  rootClassName = "flex flex-col justify-center overflow-hidden",
  className,
  option,
  ref,
}: {
  children: ReactNode;
  rootMargin?: string;
  rootClassName?: string;
  className?: string;
  option: object;
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined;
}) {
  const [refs, style] = useInView(
    () => ({
      ...option,
      immediate: true,
    }),
    {
      rootMargin,
      amount: buildInteractionObserverThreshold(),
    }
  );

  return (
    <div className={rootClassName} ref={ref || refs} style={{overflow:"hidden"}}>
      <animated.div className={className} style={style}>
        {children}
      </animated.div>
    </div>
  );
}

export const buildInteractionObserverThreshold = (count = 1000) => {
  const threshold = [];

  const parts = 1 / count;

  for (let i = 0; i <= count; i++) {
    threshold.push(parseFloat((parts * i).toFixed(2)));
  }

  return threshold;
};
