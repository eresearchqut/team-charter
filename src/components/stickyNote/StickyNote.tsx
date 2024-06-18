import { FunctionComponent, useRef, useEffect } from "react";
import { Square, SquareProps, useColorModeValue } from "@chakra-ui/react";
import textFit from "textfit";
export interface StickyNoteProps
  extends Pick<
    SquareProps,
    "boxShadow" | "padding" | "size" | "color" | "transform"
  > {
  message: string;
}

const boxDefaults = {
  size: "10em",
  padding: "1em",
  boxShadow: "dark-lg",
};

export const StickyNote: FunctionComponent<StickyNoteProps> = (
  args: StickyNoteProps
) => {
  const { message, color = "yellow", ...boxOverrides } = args;
  const bg = useColorModeValue(`${color}.200`, `${color}.700`);
  const boxProps = { ...boxDefaults, bg, ...boxOverrides };
  const stickNotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stickNotRef.current) {
      textFit(stickNotRef.current);
    }
  }, [stickNotRef]);

  return (
    <Square ref={stickNotRef} {...boxProps}>
      {message}
    </Square>
  );
};
