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
  boxShadow: "lg",
};

export const StickyNote: FunctionComponent<StickyNoteProps> = (
  args: StickyNoteProps
) => {
  const { message, color = "yellow", ...boxOverrides } = args;
  const bg = useColorModeValue(`${color}.200`, `${color}.700`);
  const boxProps = { ...boxDefaults, bg, ...boxOverrides };
  const stickyNoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stickyNoteRef.current) {
      textFit(stickyNoteRef.current);
    }
  }, [stickyNoteRef]);

  return (
    <Square ref={stickyNoteRef} {...boxProps}>
      {message}
    </Square>
  );
};
